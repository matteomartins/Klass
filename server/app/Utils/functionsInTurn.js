module.exports = {
  WeekDaysInArray: (dom,seg,ter,qua,qui,sex,sab) => {
    const days = [dom,seg,ter,qua,qui,sex,sab];

    let week_days = days.map((value, index) => {
      if (value == 1)
        return index;
    });

    week_days = week_days.filter((value) => {
      return value != undefined
    });

    return week_days;
  },
  WeekDaysInBinary: (week_days) => {
    const days = [0,1,2,3,4,5,6];
    const daysInBinary = days.map((value, index)=>{
      if(week_days.includes(index))
        return 1;
      else
       return 0;
    })
    const flg_days = {
      "flg_sunday": daysInBinary[0],
      "flg_monday": daysInBinary[1],
      "flg_tuesday": daysInBinary[2],
      "flg_wednesday": daysInBinary[3],
      "flg_thursday": daysInBinary[4],
      "flg_friday": daysInBinary[5],
      "flg_saturday": daysInBinary[6]
    }

    return flg_days;
  }
};
