import React from "react";
import Icon from "./Icon";
import Action from "./ActionComponent";

export default function Sidebar({ move, rotate }) {
    const handleMove = () => move(10, 0);
    const handleRotateLeft = () => rotate(-15);
    const handleRotateRight = () => rotate(15);
    return (
        <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
            <div className="font-bold"> {"Events"} </div>
            <Action bgColor="bg-yellow-500">
                <>
                    {"When "}
                    <Icon
                        name="flag"
                        size={15}
                        className="text-green-600 mx-2"
                    />
                    {"clicked"}
                </>
            </Action>
            <Action bgColor="bg-yellow-500">
                {"When this sprite clicked"}
            </Action>
            <div className="font-bold"> {"Motion"} </div>
            <Action onClick={handleMove}>{"Move 10 steps "}</Action>
            <Action onClick={handleRotateLeft}>
                <>
                    {"Turn "}
                    <Icon name="undo" size={15} className="text-white mx-2" />
                    {"15 degrees"}
                </>
            </Action>
            <Action onClick={handleRotateRight}>
                <>
                    {"Turn "}
                    <Icon name="redo" size={15} className="text-white mx-2" />
                    {"15 degrees"}
                </>
            </Action>
        </div>
    );
}
