import React from "react";
import Icon from "./Icon";
import Action from "./ActionComponent";
export default function RotationAction({
    label,
    icon,
    degree,
    onDegreeChange,
    onRotate,
    id,
}) {
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <Action onClick={() => onRotate(degree)} id={id}>
            <div className="flex flex-row items-center bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
                {label}
                <Icon name={icon} size={15} className="text-white mx-2" />
                <input
                    value={degree}
                    onChange={(e) => onDegreeChange(Number(e.target.value))}
                    onClick={stopPropagation}
                    className="w-12 bg-blue-500 border-b border-white text-white text-center outline-none mx-2"
                />
                {" degrees"}
            </div>
        </Action>
    );
}
