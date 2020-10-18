const crypto = require('crypto');

module.exports={
  CreateIdHash: ()=> {
    const current_date = (new Date()).valueOf().toString();
    var hash = crypto.randomBytes(5).toString('hex');
    const id = hash + current_date;
    return id;
  }
};
