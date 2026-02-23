import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="flex justify-center">
            <div className="w-full max-w-md p-4">
                <h1 className="font-bold text-2xl text-center">Add New Item</h1>
                <NewItem />
            </div>
        </main>
    );
}