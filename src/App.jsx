import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ListCreate from "./components/ListCreate";
import ListEmptyMessage from "./components/ListEmptyMessage";
import ListFilter from "./components/ListFilter";
import ListShowAll from "./components/ListShowAll";
import { DragDropContext } from "@hello-pangea/dnd";

let listInitialState = JSON.parse(localStorage.getItem("list")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const App = () => {
    const [listItems, setListItems] = useState(listInitialState);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        listInitialState = localStorage.getItem("list");
    }, []);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(listItems));
    }, [listItems]);

    const filteredItems = () => {
        switch (filter) {
            case "all":
                return listItems;
            case "active":
                return listItems.filter((item) => item.isCompleted === false);
            case "completed":
                return listItems.filter((item) => item.isCompleted);
            default:
                return listItems;
        }
    };

    const handleCreateItem = (title) => {
        const newItem = {
            id: Date.now(),
            itemName: title.trim(),
            isCompleted: false,
        };

        setListItems([...listItems, newItem]);
    };

    const handleComplete = (id) => {
        setListItems(
            listItems.map((item) =>
                item.id === id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
    };

    const handleDragStart = () => {
        if (window.navigator.vibrate) {
            window.navigator.vibrate(100);
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setListItems(() => reorder(listItems, source.index, destination.index));
    };

    const handleRemove = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    const handleClearCompleted = () => {
        setListItems(listItems.filter((item) => !item.isCompleted === true));
    };

    const computedItemsLeft = listItems.filter(
        (item) => !item.isCompleted
    ).length;

    const handleFilter = (filter) => {
        setFilter(filter);
    };
    return (
        <>
            <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat transition-all duration-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:transition-all dark:duration-300 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
                <Header />
                <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                    {/* List - add item Form */}
                    <ListCreate createItem={handleCreateItem} />
                    {/* List - List all */}
                    {listItems.length > 0 ? (
                        <DragDropContext
                            onDragEnd={handleDragEnd}
                            onDragStart={handleDragStart}
                        >
                            <ListShowAll
                                items={filteredItems()}
                                handleComplete={handleComplete}
                                handleRemove={handleRemove}
                                listComputed={computedItemsLeft}
                                handleClearCompleted={handleClearCompleted}
                            />
                        </DragDropContext>
                    ) : (
                        <ListEmptyMessage />
                    )}
                    {/* List - Filter */}
                    <ListFilter handleFilter={handleFilter} filter={filter} />
                </main>

                {/* Footer */}
                <footer className="mt-8 text-center transition-all duration-300 dark:text-gray-300 dark:transition-all dark:duration-300">
                    Arrastra y suelta para ordernar los items
                </footer>
            </div>
        </>
    );
};

export default App;
