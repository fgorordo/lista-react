import React, { useState } from "react";

const ListCreate = ({ createItem }) => {
    const [title, setTitle] = useState("");

    const handleChange = (event) => setTitle(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }

        createItem(title);
        setTitle("");
    };

    return (
        <form
            className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3 shadow-md transition-all duration-300 dark:bg-gray-800 dark:transition-all dark:duration-300"
            onSubmit={handleSubmit}
        >
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border transition-all duration-300 dark:border-gray-600 dark:transition-all dark:duration-300"></span>
            <input
                className="w-full font-bold text-gray-400 outline-none transition-all duration-300 dark:bg-gray-800 dark:text-gray-300 dark:transition-all dark:duration-300"
                type="text"
                placeholder="Ingresa un nuevo articulo..."
                value={title}
                onChange={handleChange}
            />
        </form>
    );
};

export default ListCreate;
