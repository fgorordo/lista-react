import React from "react";
import ListComputed from "./ListComputed";
import ListItem from "./ListItem";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const ListShowAll = ({
    items,
    handleComplete,
    handleRemove,
    listComputed,
    handleClearCompleted,
}) => {
    return (
        <Droppable droppableId="items">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 overflow-hidden rounded-md bg-white shadow-md transition-all duration-300 dark:bg-gray-800 dark:transition-all dark:duration-300 [&>article]:p-4"
                >
                    {items.map((item, index) => {
                        return (
                            <Draggable
                                key={item.id}
                                index={index}
                                draggableId={`${item.id}`}
                            >
                                {(draggableProvided) => (
                                    <ListItem
                                        item={item}
                                        handleComplete={handleComplete}
                                        handleRemove={handleRemove}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                    />
                                )}
                            </Draggable>
                        );
                    })}

                    {droppableProvided.placeholder}
                    {/* List - Computed Props  */}

                    <ListComputed
                        itemsComputed={listComputed}
                        handleClearCompleted={handleClearCompleted}
                    />
                </div>
            )}
        </Droppable>
    );
};

export default ListShowAll;
