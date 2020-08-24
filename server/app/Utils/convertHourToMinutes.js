module.exports ={
  convertHourToMinutes: function convertHourToMinutes(time){
    try{
      const [hour, minutes] = time.split(':').map(Number);
      const timeInMinutes = (hour * 60) + minutes;
      return timeInMinutes;
    }catch{
      return time;
    }
  },
  convertMinutesToHour: function convertMinutesToHour(time){
    var hours = Math.floor(time / 60);
    var minutes = time % 60;
    if(minutes == 0)
      minutes = "00";
    return hours + ":" + minutes;
  }
};
