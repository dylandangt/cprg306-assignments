"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState<string>("");

    const handleAddItem = (newItem: { name: string; quantity: number; category: string }) => {
        const itemWithId = {
            id: Date.now().toString(),
            ...newItem,
        };
        setItems([...items, itemWithId]);
    };

    const handleItemSelect = (item: { id: string; name: string; quantity: number; category: string }) => {
        if (!item || !item.name) {
            setSelectedItemName("");
            return;
        }
        let text = item.name.split(",")[0].trim();
        text = text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "").trim();
        console.log("Original name:", item.name, "Cleaned name:", text);
        setSelectedItemName(text);
    };

    return (
        <main className="flex justify-center">
            <div className="w-full max-w-4xl p-4">
                <h1 className="font-bold text-2xl text-center mb-6">Shopping List & Meal Ideas</h1>
                <div className="flex gap-12 items-start">
                    <div className="flex-1">
                        <NewItem onAddItem={handleAddItem} />
                        <div className="mt-6">
                            <ItemList items={items} onItemSelect={handleItemSelect} />
                        </div>
                    </div>

                    <div className="w-px bg-gray-200" />

                    <div className="flex-1 p-4">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}