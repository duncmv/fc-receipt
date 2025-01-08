import { useRouter } from "next/router";

export default function Receipt() {
    const router = useRouter();
    const { name, amount, date, narration, preparedBy } = router.query;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                {/* Company Header Image */}
                <div className="text-center mb-6">
                    <img
                        src="/header.png" // Replace with your actual image path
                        alt="Company Header"
                        className="mx-auto w-full h-auto object-contain"
                    />
                </div>

                {/* Receipt Details Table */}
                <div className="flex justify-between items-center mt-4">
    {/* Investment Receipt Heading */}
    <h1 className="text-2xl font-bold">Investment Receipt</h1>
    {/* Serial Number (S/N) */}
    <div className="flex items-center">
        <strong>S/N:</strong>
        <p>_______</p> {/* Replace this with the actual serial number from the form */}
    </div>
</div>

<div className="mt-6">
    <table className="w-full table-auto border-collapse">
        <tbody>
            <tr>
                <td className="border px-4 py-2 font-bold">Date:</td>
                <td className="border px-4 py-2">{new Date(date).toDateString()}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2 font-bold">Name:</td>
                <td className="border px-4 py-2">{name}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2 font-bold">Amount Invested:</td>
                <td className="border px-4 py-2">{amount}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2 font-bold">Narration:</td>
                <td className="border px-4 py-2 break-words">{narration}</td>
            </tr>
        </tbody>
    </table>
</div>


                {/* Prepared By and Signature Section */}
                <div className="mt-6 flex justify-between items-center">
    {/* Prepared By Section */}
    <div className="w-1/2 flex items-center justify-start">
        <strong className="mr-2">Prepared By:</strong>
        <p>{preparedBy}</p>
    </div>

    {/* Signature Section */}
    <div className="w-1/2 flex items-center justify-start">
        <strong className="mr-2">Signature:</strong>
        <p>_________________</p>
    </div>
</div>


                {/* Buttons */}
                <div className="mt-6 flex space-x-4">
                    <button
                        onClick={() => router.push("/")}
                        className="w-1/2 py-2 px-4 bg-gray-600 text-white font-medium rounded-md shadow-sm hover:bg-gray-700"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="w-1/2 py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700"
                    >
                        Print or Save as PDF
                    </button>
                </div>
            </div>

            {/* Print-specific styling for landscape orientation */}
            <style jsx global>{`
                @media print {
                    body {
                        transform: rotate(0deg); /* Ensures the page is correctly oriented */
                        width: 100%;
                    }

                    .min-h-screen {
                        height: 100%;
                    }

                    .w-full {
                        width: 100%;
                    }

                    .max-w-lg {
                        max-width: 100%;
                    }

                    .bg-white {
                        background-color: white;
                    }

                    /* Landscape orientation */
                    @page {
                        size: landscape;
                        margin: 1in;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }

                    td {
                        padding: 8px;
                        border: 1px solid #ccc;
                    }

                    .border-t {
                        border-bottom: 2px solid #000;
                    }
                }
            `}</style>
        </div>
    );
}
