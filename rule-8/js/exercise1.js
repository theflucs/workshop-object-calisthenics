class CustomerSupportTicket {
    constructor(id, title, description, status, priority, 
                assignedTo, createdBy, createdAt, updatedAt, 
                category, tags, relatedTickets, attachments) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.status = status;
      this.priority = priority;
      this.assignedTo = assignedTo;
      this.createdBy = createdBy;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.category = category;
      this.tags = tags;
      this.relatedTickets = relatedTickets;
      this.attachments = attachments;
    }
    
    escalate() {
      this.priority = 'high';
      this.updatedAt = new Date();
      console.log(`Ticket ${this.id} escalated to high priority`);
    }
    
    assign(supportAgent) {
      this.assignedTo = supportAgent;
      this.updatedAt = new Date();
      console.log(`Ticket ${this.id} assigned to ${supportAgent}`);
    }
  }