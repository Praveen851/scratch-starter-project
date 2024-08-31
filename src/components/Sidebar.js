import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Action from "./ActionComponent";
import RotationAction from "./RotationAction";
import "../App.css";

export default function Sidebar({ move, rotate }) {
    const [antiClockWiseDegree, setAntiClockWiseDegree] = useState(15);
    const [clockWiseDegree, setClockWiseDegree] = useState(15);

    useEffect(() => {
        const blocks = document.querySelectorAll(".action");
        const app = document.querySelector(".App");
        const midArea = document.querySelector(".mid-area");

        app.addEventListener("dragover", (e) => e.preventDefault());

        const onDragStart = (e) => {
            const clone = e.target.cloneNode(true);
            clone.classList.add("cloned");
            clone.style.position = "absolute";
            clone.style.pointerEvents = "none";
            app.appendChild(clone);

            e.dataTransfer.setDragImage(clone, 0, 0);
            setTimeout(() => {
                this.classList.add("invisible");
            }, 0);
        };

        const onDragEnd = (e) => {
            const clone = document.querySelector(".cloned");
            const midAreaRect = midArea.getBoundingClientRect();

            if (clone) {
                if (
                    e.clientX >= midAreaRect.left &&
                    e.clientX <= midAreaRect.right &&
                    e.clientY >= midAreaRect.top &&
                    e.clientY <= midAreaRect.bottom
                ) {
                    clone.style.top = `${e.clientY - 8}px`;
                    clone.style.left = `${e.clientX}px`;
                    clone.classList.remove("cloned");
                } else {
                    clone.remove();
                }
            }
            this.classList.remove("invisible");
        };

        blocks.forEach((block) => {
            block.addEventListener("dragstart", onDragStart);
            block.addEventListener("dragend", onDragEnd);
        });

        return () => {
            blocks.forEach((block) => {
                block.removeEventListener("dragstart", onDragStart);
                block.removeEventListener("dragend", onDragEnd);
            });
        };
    }, []);

    return (
        <div className="h-full p-4 flex flex-col">
            <div className="font-bold text-lg mb-4">Events</div>
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

            <div className="font-bold text-lg mt-4 mb-4">Motion</div>
            <Action onClick={() => move(10, 0)}>{"Move 10 steps "}</Action>

            <RotationAction
                label="Turn "
                icon="undo"
                degree={antiClockWiseDegree}
                onDegreeChange={setAntiClockWiseDegree}
                onRotate={(degree) => rotate(-degree)}
            />

            <RotationAction
                label="Turn "
                icon="redo"
                degree={clockWiseDegree}
                onDegreeChange={setClockWiseDegree}
                onRotate={(degree) => rotate(degree)}
            />
        </div>
    );
}
