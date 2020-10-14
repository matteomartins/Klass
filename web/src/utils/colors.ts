const  colors = [
    '#0792A9', '#F68237', '#B7B345', 
    '#07a88d', '#ddc699', '#f0c4b4', '#b4dce2', '#d6e406', '#0792A9', 
    '#2eaa4f', '#b83d3d', '#4b95c3', '#ad4bc3', '#57c7a0', '#8dfd07', 
    '#ffef01', '#ffc30c', '#f19128', '#f17122', '#e5211f', '#dd429a', 
    '#6b439c', '#a3449e', '#0254a5'
];

function getColor(name:string, ind:number) {
    const firstCarac = name.substr(0,1);
    if(!isNaN(+firstCarac)) return colors[+firstCarac-1];
    else return colors[+ind.toString().substr(-1,1)];
}

export { colors, getColor };