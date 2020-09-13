import { TurnProps } from "./CommonInterfaces";

export function create3Functions(
    turns: Array<TurnProps>,
    setTurns: Function,
    selectedTurn: number
) {
    return {
        addTurn: (name: string) => {
            if (
                name.trim() !== "" &&
                !turns.find(
                    (turn) => turn.id.toLowerCase() === name.toLowerCase()
                )
            ) {
                setTurns([
                    ...turns,
                    { id: name, title: name, content: { intervals: [] } },
                ]);
            }
        },
        removeTurn: (name: string) => {
            let newTurns = turns;
            const deleted = newTurns.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newTurns.indexOf(deleted);
                newTurns.splice(index, 1);
                setTurns([...newTurns]);
            }
        },
        addInterval: (name: string) => {
            if (
                name.trim() !== "" &&
                !turns[selectedTurn].content.intervals.find(
                    (interval) =>
                        interval.id.toLowerCase() === name.toLowerCase()
                )
            ) {
                const newTurns = turns;
                newTurns[selectedTurn].content.intervals.push({
                    id: name,
                    title: name,
                });
                console.log(newTurns);
                setTurns([...newTurns]);
            }
        },
        removeInterval: (name: string) => {
            const newTurns = turns;
            const deleted = newTurns[selectedTurn].content.intervals.find(
                (deletedContent) => deletedContent.id === name
            );
            if (deleted) {
                const index = newTurns[selectedTurn].content.intervals.indexOf(
                    deleted
                );
                newTurns[selectedTurn].content.intervals.splice(index, 1);
                setTurns([...newTurns]);
            }
        },
    };
}
