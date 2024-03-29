function DragDrop(
    state: any,
    setState: any,
    stateDestiny: any,
    setStateDestiny: any
) {
    return function onDragEnd(result: any) {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;
        if (sInd === dInd) {
            const items = reorder(
                state[sInd - 1],
                source.index,
                destination.index
            );
            const newState: Array<any> = [...state];
            newState[sInd] = items;
            setState(newState[sInd]);
        } else if (sInd === 0) {
            return;
        } else {
            const sourceClone: Array<any> = Array.from(state[sInd - 1]);
            if (
                !stateDestiny[dInd - 2].content.find(
                    (content: any) =>
                        content.id === sourceClone[source.index].id
                )
            ) {
                const [removed] = sourceClone.splice(source.index, 1);

                const newState: Array<any> = [...stateDestiny];
                newState[dInd - 2].content.push(removed);
                setStateDestiny(newState);
            }
        }
    };
}

export default DragDrop;

// function move(
//     source: any,
//     destination: any,
//     droppableSource: any,
//     droppableDestination: any
// ) {
//     const sourceClone = Array.from(source);
//     const destClone = Array.from(destination);
//     const [removed] = sourceClone.splice(droppableSource.index, 1);

//     destClone.splice(droppableDestination.index, 0, removed);

//     const result = [];
//     result[droppableSource.droppableId] = sourceClone;
//     result[droppableDestination.droppableId] = destClone;

//     return result;
// }
function reorder(list: any, startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}
export const getItems = (count: number, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`,
    }));

export const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    padding: 16,
    margin: `0 0 8px 0`,
    background: isDragging ? "white" : "var(--color-background)",
    boxShadow: isDragging ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
    borderRadius: 20,
    color: "var(--color-text-secondary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    ...draggableStyle,
});
