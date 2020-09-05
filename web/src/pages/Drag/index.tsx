import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./styles.css";

import DragDrop, { getItemStyle, getItems } from "../../utils/dragFunctions";

function Drag() {
    const [state, setState] = useState([getItems(10), getItems(5, 10)]);
    const [name, setName] = useState("");

    const onDragEnd = DragDrop(state, setState);

    function addDraggable() {
        if (name.trim()) {
            let newState: Array<any> = [state[0], state[1]];
            newState[1].push({
                id: `item-${name.trim()}-${new Date().getTime()}`,
                content: name.trim(),
            });
            setState(newState);
        }
        setName("");
    }

    function removeDraggable(ind: number, index: number) {
        const newState = [...state];
        newState[ind].splice(index, 1);
        setState(newState);
    }

    return (
        <div>
            <input
                placeholder="Insira nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={() => addDraggable()}>
                +
            </button>
            <div style={{ display: "flex" }}>
                <DragDropContext onDragEnd={onDragEnd}>
                    {state.map((el, ind) => (
                        <Droppable key={ind} droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="droppable-container"
                                >
                                    {el.map((item, index) => (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps
                                                            .style
                                                    )}
                                                >
                                                    <div className="draggable-container">
                                                        {item.content}
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                removeDraggable(
                                                                    ind,
                                                                    index
                                                                )
                                                            }
                                                            className="draggable-btn"
                                                        >
                                                            x
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
}

export default Drag;
