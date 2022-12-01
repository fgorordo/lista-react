import React from "react";

const ListComputed = ({ itemsComputed, handleClearCompleted }) => {
    return (
        <section className="flex items-center justify-between rounded-b-md bg-white py-4 px-4 transition-all duration-300 dark:bg-gray-800 dark:transition-all dark:duration-300">
            <span className="text-gray-400 transition-all duration-300 dark:text-gray-300 dark:transition-all dark:duration-300">
                Faltan {itemsComputed} articulos
            </span>
            <button
                className="rounded-md border border-gray-200 p-1 px-2 text-sm font-bold text-gray-400 shadow-sm transition-all duration-300 hover:bg-gray-200 hover:text-gray-700 dark:border-gray-600 dark:text-gray-300 dark:transition-all dark:duration-300 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                onClick={handleClearCompleted}
            >
                Eliminar completados
            </button>
        </section>
    );
};

export default ListComputed;
