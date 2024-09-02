import React, { useState } from "react";
import Icon from "./Icon";
import Action from "./ActionComponent";
import RotationAction from "./RotationAction";

export default function Sidebar({ move, rotate }) {
    const [antiClockWiseDegree, setAntiClockWiseDegree] = useState(15);
    const [clockWiseDegree, setClockWiseDegree] = useState(15);

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
