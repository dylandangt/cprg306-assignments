interface ItemProps {
    name: string;
    quantity: number;
    category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md border border-white-200">
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}