const  colors = ['#0792A9', '#F68237', '#B7B345', '', '', '', '', '', '#0792A9', '', ''];

function getColor(name:string, ind:number) {
    const firstCarac = name.substr(0,1);
    if(!isNaN(+firstCarac)) return colors[+firstCarac-1];
    else return colors[+ind.toString().substr(-1,1)];
}

export { colors, getColor };