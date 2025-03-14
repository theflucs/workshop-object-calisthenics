function processComments(comments) {
    // Filtrare i commenti approvati
    const approvedComments = comments.filter(c => c.status === 'approved');
    
    // Ordinare i commenti per data
    approvedComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    // Calcolare la media delle valutazioni
    let totalRating = 0;
    for (const comment of approvedComments) {
      totalRating += comment.rating || 0;
    }
    const averageRating = totalRating / (approvedComments.length || 1);
    
    // Trovare i commenti in evidenza
    const featuredComments = approvedComments.filter(c => c.rating >= 4);
    
    return {
      approvedComments,
      averageRating,
      featuredComments,
      totalComments: comments.length,
      approvedCount: approvedComments.length
    };
  }
  