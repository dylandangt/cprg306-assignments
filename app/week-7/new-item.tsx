"use client";

import { useState } from "react";

interface NewItemProps {
    onAddItem: (item: { name: string; quantity: number; category: string }) => void;
}

export default function NewItem({ onAddItem }: NewItemProps) {
    const [name, setName] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name || name.length < 2) {
            alert("Item name is required and must be at least 2 characters long");
            return;
        }

        const newItem = {
            name,
            quantity,
            category,
        };
        
        onAddItem(newItem);

        setName("");
        setNameTouched(false);
        setQuantity(1);
        setCategory("");
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 border border-gray-300 rounded p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Item Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setNameTouched(true)}
                    required
                    className={`border rounded px-3 py-2 w-full ${name === "" && nameTouched ? "border-red-500" : "border-gray-300"}`}
                    placeholder="e.g., milk, 4 L 🥛"
                />
                {name === "" && nameTouched && (<p className="text-red-500 text-sm mt-1">Enter an item name</p>)}
            </div>

            <div className="mb-4">
                <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                    Quantity (1-99)
                </label>
                <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border rounded px-3 py-2 w-full"
                    min="1"
                    max="99"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                    Category
                </label>
                <input
                    id="category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Produce"
                />
            </div>

            <button type="submit" disabled={!name || name.length < 2} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400">
                Add Item
            </button>
        </form>
    )
}
