function createUser(name, email, age, roles, activeSubscription) {
  return {
    name: name,
    email: email,
    age: age,
    roles: roles,
    hasActiveSubscription: activeSubscription,
    
    canAccessFeature: function(feature) {
      if (this.hasActiveSubscription && this.roles.includes('premium')) {
        return true;
      }
      if (feature === 'basic' && this.roles.includes('basic')) {
        return true;
      }
      return false;
    },
    
    isAdult: function() {
      return this.age >= 18;
    }
  };
}
