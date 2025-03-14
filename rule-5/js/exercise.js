function sendWelcomeEmail(user, mailer) {
    const emailContent = `
      <h1>Benvenuto ${user.profile.personalInfo.fullName}</h1>
      <p>La tua iscrizione a ${user.subscription.plan.name} è confermata.</p>
      <p>Il tuo profilo è configurato nella lingua ${user.profile.settings.preferences.language.label}.</p>
      <p>Per assistenza contatta ${user.company.supportDepartment.contactInfo.emailAddress}</p>
    `;
    
    return mailer.compose().to(user.profile.contactInfo.primaryEmail.address).withSubject("Benvenuto!").withContent(emailContent).send();
}