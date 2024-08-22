import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea(Props) {
    const { position, rotation } = Props;

    return (
        <div className="relative w-full h-full">
            <CatSprite position={position} rotation={rotation} />
        </div>
    );
}
