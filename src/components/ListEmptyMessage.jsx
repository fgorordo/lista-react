import React from "react";
import IconEmpty from "../components/icons/IconEmpty";

const ListEmptyMessage = () => {
    return (
        <article className="mt-8 flex w-full flex-col items-center justify-center rounded-md bg-white p-4 transition-all duration-300 dark:border-b-gray-700 dark:bg-gray-800 dark:transition-all dark:duration-300">
            <div className="my-4 flex items-center justify-center">
                <IconEmpty
                    width="50px"
                    height="50px"
                    fill="#4b5563"
                    className="fill-gray-600"
                />
            </div>
            <p
                className="flex-grow text-center text-base text-gray-600 transition-all duration-300
                       dark:text-gray-300 dark:transition-all dark:duration-300"
            >
                <span className="font-bold">Lista vacia</span> <br />
                Pruebe añadiendo objetos a la lista
            </p>
        </article>
    );
};

export default ListEmptyMessage;
