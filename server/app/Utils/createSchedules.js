module.exports={
  Schedules: function Schedules(s_start, d_end, duration, intervals){
    const {convertHourToMinutes, convertMinutesToHour} = require('./convertHourToMinutes.js')
    //horário do término
    const total = convertHourToMinutes(d_end);
    //array que guarda todos os horários
    var schedules = [];
    //final de um horário
    var s_end;
    //final de um intervalo
    var i_end = 0;

    do{
      //começo de um horário
      s_start = convertHourToMinutes(s_start);
      //define um final para um horário
      s_end = s_start + parseInt(duration);

      //indica se o horário passa num intervalo
      var inter = false;
      //verifica se algum horário passa nos intervalos
      intervals.map(({start, end})=>{
        //horários de inicio e fim de um intervalo
        var n_start = convertHourToMinutes(start);
        var n_end = convertHourToMinutes(end);

        if(s_start < n_start && s_end >= n_start){
          s_end = n_start;
          i_end = n_end;
          inter = true;
        }
      })

      //verifica se o horário já chegou no término
      if(s_end > total)
        s_end = total;

      //objeto que guarda o inicio e final de um horário
      const teste = {
        "start": convertMinutesToHour(s_start),
        "end": convertMinutesToHour(s_end)
      }

      //adiciona o objeto numa array
      schedules.push(teste);

      //verifica qual será o novo inicio de horário
      if(inter)
        s_start = i_end
      else
        s_start = s_end;
    }
    while(s_end < total)

    return schedules;
  },

  Intervals: function Intervals(schedules){
    const {convertHourToMinutes, convertMinutesToHour} = require('./convertHourToMinutes.js')

    //array que guarda os intervalos
    var intervals = [];

    //final de um intervalo
    const {start, end} = schedules[0];
    var i_end = convertHourToMinutes(end);
    var d_end = 0;
    var d_start = convertMinutesToHour(convertHourToMinutes(start));
    const class_duration = i_end - convertHourToMinutes(start);

    schedules.map(({start, end})=>{
      start = convertHourToMinutes(start);
      end = convertHourToMinutes(end);

      if(start > i_end){
        const interval = {
          'start': convertMinutesToHour(i_end),
          'end': convertMinutesToHour(start)
        }
        intervals.push(interval)
      }

      i_end = end;
      d_end = convertMinutesToHour(end)
    })

    return {intervals, class_duration, d_start, d_end};
  }
}
