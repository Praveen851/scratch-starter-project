import React from "react";
export default function Action({ onClick, children, bgColor = "bg-blue-500" }) {
    return (
        <div
            className={`flex flex-row flex-wrap  text-white px-2 py-1 my-2 text-sm cursor-pointer
                ${bgColor}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
