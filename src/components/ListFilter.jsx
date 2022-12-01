import React from "react";

const ListFilter = ({ handleFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8 shadow-md">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-300 dark:bg-gray-800 dark:transition-all dark:duration-300">
                <button
                    className={` transition-all duration-300 dark:transition-all dark:duration-300 ${
                        filter == "all"
                            ? "font-bold text-blue-600 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
                            : "text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-sky-600"
                    }`}
                    onClick={() => handleFilter("all")}
                >
                    Todos
                </button>
                <button
                    className={` transition-all duration-300 dark:transition-all dark:duration-300 ${
                        filter == "active"
                            ? "font-bold text-blue-600 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
                            : "text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:transition-all dark:duration-300 dark:hover:text-sky-600"
                    }`}
                    onClick={() => handleFilter("active")}
                >
                    Faltantes
                </button>
                <button
                    className={` transition-all duration-300 dark:transition-all dark:duration-300 ${
                        filter == "completed"
                            ? "font-bold text-blue-600 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
                            : "text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-sky-600"
                    }`}
                    onClick={() => handleFilter("completed")}
                >
                    Completadas
                </button>
            </div>
        </section>
    );
};

export default ListFilter;
