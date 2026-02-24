"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem: { name: string; quantity: number; category: string }) => {
        const itemWithId = {
            id: Date.now().toString(),
            ...newItem,
        };
        setItems([...items, itemWithId]);
    };

    return (
        <main className="flex justify-center">
            <div className="w-full max-w-md p-4">
                <h1 className="font-bold text-2xl text-center">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <div className = "mt-6">
                    <ItemList items={items} />
                </div>
            </div>
        </main>
    );
}