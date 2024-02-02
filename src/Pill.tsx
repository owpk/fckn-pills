import { randomUUID } from "crypto";
import { stat } from "fs";
import { FunctionComponent, useEffect, useState } from "react";

export interface PillProps {
    name: string
    freq: number
    setState: boolean
}

export const Pill: FunctionComponent<PillProps> = (props: PillProps) => {

    const [state, setState] = useState<boolean>()

    useEffect(() => {
        setState(props.setState)
    }, [props.setState])

    return (
        <>
            <div>
                {props.name} {Array.from(Array(props.freq))
                    .map(it => <input key={Math.random()} style={{ width: "35px", height: "35px", marginLeft: "10px", marginRight: "10px" }}
                        type="checkbox"
                        defaultChecked={false}
                    />
                    )}
            </div>
        </>
    )
}
