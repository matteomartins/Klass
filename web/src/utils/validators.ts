export function formatHour(value:string){
    value = value.replace(/\D/g, "");
    value = value.replace(/([0-2][0-9])(\d{2})([0-2][0-9])(\d{2})$/g, "$1:$2 às $3:$4");
    return value;
}