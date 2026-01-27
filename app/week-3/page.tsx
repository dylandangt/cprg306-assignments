import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="flex justify-center">
            <div className="w-full max-w-md p-4">
                <h1 className="font-bold text-2xl text-center">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}