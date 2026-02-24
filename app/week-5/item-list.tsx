"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, typeof items>);

    const sortedCategories = Object.keys(groupedItems).sort();
    sortedCategories.forEach(category => {
        groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    });

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex gap-2">
                    <button
                        onClick={() => setSortBy("name")}
                        className={`flex-1 px-4 py-2 rounded font-medium transition ${
                            sortBy === "name"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        Sort by Name
                    </button>
                    <button
                        onClick={() => setSortBy("category")}
                        className={`flex-1 px-4 py-2 rounded font-medium transition ${
                            sortBy === "category"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        Sort by Category
                    </button>
                    <button
                        onClick={() => setSortBy("grouped")}
                        className={`flex-1 px-4 py-2 rounded font-medium transition ${
                            sortBy === "grouped"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        Group by Category
                    </button>
                </div>

                {sortBy === "grouped" ? (
                    <div className="flex flex-col gap-6">
                        {sortedCategories.map((category) => (
                            <div key={category}>
                                <h2 className="font-bold text-lg capitalize mb-2 text-gray-800">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </h2>
                                <div className="flex flex-col gap-4" >
                                    {groupedItems[category].map((item) => (
                                        <Item
                                            key={item.id}
                                            name={item.name}
                                            quantity={item.quantity}
                                            category={item.category}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {sortedItems.map((item) => (
                            <Item
                                key={item.id}
                                name={item.name}
                                quantity={item.quantity}
                                category={item.category}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
