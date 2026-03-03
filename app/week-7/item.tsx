interface ItemProps {
    name: string;
    quantity: number;
    category: string;
    onSelect?: () => void;
}

export default function Item({ name, quantity, category, onSelect }: ItemProps) {
    return (
        <div
            className="bg-white p-4 rounded-lg shadow-md border border-white-200"
            onClick={() => onSelect && onSelect()}
            role={onSelect ? "button" : undefined}
            tabIndex={onSelect ? 0 : undefined}
        >
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>
    );
}