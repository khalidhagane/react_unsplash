import React from "react";

export default function SearchComponent() {
    return (
        <div className="flex items-center">
            <div className="flex border border-sky-200 rounded">
                <input
                    type="text"
                    className="block w-full indent- px-4 py-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring-2 focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-sky-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    );
}