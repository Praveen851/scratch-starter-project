import React from "react";
import { useDrag } from "react-dnd";

export default function Action({
    onClick,
    children,
    bgColor = "bg-blue-500",
    id,
}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "block",
        item: {
            id: id,
            onClick: onClick,
            bgColor: bgColor,
            children: children,
        },

        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`flex flex-row flex-wrap  text-white px-2 py-1 my-2 text-sm cursor-pointer
                ${bgColor}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
