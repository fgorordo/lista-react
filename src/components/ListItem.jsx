import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const ListItem = React.forwardRef(
    ({ item, handleComplete, handleRemove, ...props }, ref) => {
        const { itemName, id, isCompleted } = item;

        return (
            <article
                ref={ref}
                {...props}
                className="flex gap-4 border-b border-b-gray-300 transition-all duration-300 dark:border-b-gray-700 dark:transition-all dark:duration-300"
            >
                <button
                    className={`flex h-6 w-6 flex-none items-center justify-center rounded-full  transition-all duration-300 dark:transition-all dark:duration-300 ${
                        isCompleted
                            ? "bg-gradient-to-br from-sky-300 to-purple-500 shadow-gray-50"
                            : "border dark:border-gray-600"
                    }`}
                    onClick={() => handleComplete(id)}
                >
                    {isCompleted && <IconCheck />}
                </button>

                <p
                    className={`flex-grow text-base transition-all duration-300 dark:transition-all dark:duration-300 ${
                        isCompleted
                            ? "text-gray-300 line-through dark:text-gray-500"
                            : "font-bold text-gray-600 dark:text-gray-300"
                    }`}
                >
                    {itemName}
                </p>
                <button className="flex-none" onClick={() => handleRemove(id)}>
                    <IconCross className="transition-all duration-300 dark:fill-gray-100 dark:transition-all dark:duration-300" />
                </button>
            </article>
        );
    }
);

export default ListItem;
