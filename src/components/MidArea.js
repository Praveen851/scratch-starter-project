import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Icon from "./Icon";
import Action from "./ActionComponent";

export default function MidArea() {
    const [board, setBoard] = useState([]);
    const [, drop] = useDrop(() => ({
        accept: "block",
        drop: (item) => {
            addTaskToBoard(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const addTaskToBoard = (id) => {
        console.log(id);

        setBoard((board) => [...board, id]);
    };

    const runTask = () => {
        if (board.length && board[0].id !== 1) {
            return;
        }
        board.forEach((item) => {
            if (item.onClick) item.onClick();
        });
    };
    return (
        <div className="flex-1 h-full overflow-auto Board" ref={drop}>
            <div className="flex flex-row">
                <div>Mid Area</div>
                <button className="mx-4 self-start" onClick={runTask}>
                    <Icon
                        name="flag"
                        size={15}
                        className="text-green-600 mx-2"
                    />
                </button>
            </div>
            {board.map((item) => (
                <Action id={item.id} bgColor={item.bgColor}>
                    {item.children}
                </Action>
            ))}
        </div>
    );
}
