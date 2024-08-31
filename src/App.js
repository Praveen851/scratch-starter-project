import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);

    const move = (dx, dy) => {
        setPosition((prevPos) => ({
            x: prevPos.x + dx,
            y: prevPos.y + dy,
        }));
    };

    const rotate = (angle) => {
        setRotation((prevAngle) => prevAngle + angle);
    };

    return (
        <div className="App  h-screen flex">
            <div className="w-1/4 bg-gray-200 border-r border-gray-300">
                <Sidebar move={move} rotate={rotate} />
            </div>

            <div className="flex-1 bg-white border-l border-r border-gray-300 relative">
                <MidArea />
            </div>

            <div className="w-1/4 bg-white border-l border-gray-300">
                <PreviewArea position={position} rotation={rotation} />
            </div>
        </div>
    );
}
