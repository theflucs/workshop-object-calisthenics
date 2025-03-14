class UsrMgr {
    constructor() {
      this.usrs = [];
    }
    
    addUsr(usr) {
      if (this.findUsrByEm(usr.em)) {
        throw new Error('Usr with em exists');
      }
      this.usrs.push(usr);
    }
    
    findUsrByEm(em) {
      return this.usrs.find(u => u.em === em);
    }
    
    updtUsrAddr(usrId, addr) {
      const usr = this.findUsrById(usrId);
      if (usr) {
        usr.addr = addr;
        this.saveUsrs();
      }
    }
    
    findUsrById(id) {
      return this.usrs.find(u => u.id === id);
    }
    
    saveUsrs() {
      console.log('Saving usrs to db');
    }
  }