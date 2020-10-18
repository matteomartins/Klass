module.exports = {
  FormatReport: (all_classes) => {
    const all_groups = all_classes.map(({name})=>{ return name })
    const groups = Limpar(all_groups);

    const formated_groups = groups.map((group_name)=>{
      const classes_in_group = all_classes.filter(({name})=>{
        return name === group_name;
      });

      const all_days = classes_in_group.map(({day})=>{ return day })
      const clean_days = Limpar(all_days);

      const days = clean_days.map((this_day)=>{
        const classes_in_day = all_classes.filter(({name, day})=>{
          return name === group_name && day === this_day;
        });

        const schedules = classes_in_day.map(({start, end, subject, professor}) => {
          return {start, end, subject, professor};
        });

        return {day: this_day, schedules}
      });

      return {name: group_name, days}
    })

    function Limpar(array){
      return array.reduce((unico, item) => {
        return unico.includes(item) ? unico : [...unico, item]
      }, []);
    }

    return formated_groups
  },

  FormatProfessor: (all_classes, professor_name) => {
    const classes_of_professor = all_classes.filter(({professor})=>{
      return professor === professor_name;
    });

    const all_days = classes_of_professor.map(({day})=>{ return day })
    const clean_days = Limpar(all_days);

    const days = clean_days.map((this_day)=>{
      const classes_in_day = all_classes.filter(({professor, day})=>{
        return professor === professor_name && day === this_day;
      });

      const schedules = classes_in_day.map(({start, end, subject, name}) => {
        return {start, end, group: name, subject};
      });

      return {day: this_day, schedules}
    });

    function Limpar(array){
      return array.reduce((unico, item) => {
        return unico.includes(item) ? unico : [...unico, item]
      }, []);
    }

    return {days}
  }
}
