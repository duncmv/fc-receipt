import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Redirect to the receipt page with query parameters
        router.push({
            pathname: "/receipt",
            query: data,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Generate Investment Receipt
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Investor Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Amount Invested (UGX)
                        </label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date of Investment
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="narration" className="block text-sm font-medium text-gray-700">
                            Narration
                        </label>
                        <textarea
                            id="narration"
                            name="narration"
                            rows="3"
                            placeholder="Enter narration here..."
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="preparedBy" className="block text-sm font-medium text-gray-700">
                            Prepared by
                        </label>
                        <input
                            type="text"
                            id="preparedBy"
                            name="preparedBy"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700"
                    >
                        Generate Receipt
                    </button>
                </form>
            </div>
        </div>
    );
}
