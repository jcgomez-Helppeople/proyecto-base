import React from "react";
import "primeicons/primeicons.css";

export const BackButton: React.FC = () => {

    return (
        <button
            onClick={() => window.history.back()}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md flex items-center justify-center mr-3"
        >
            <i className="pi pi-arrow-left text-xl"></i>
        </button>
    );
};