import React, { useCallback, memo, useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

const handleStyle = { left: 10 };

export type NodeState = {
    count?: number;
};

const TextUpdaterNode = ({
    data,
    isConnectable
}: NodeProps<NodeState>) => {

    const [count, setCount] = useState(data?.count ?? 0);

    const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log("value:" + evt.target.value)
    }, []);

    const onClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
                <button onClick={onClick}>updater</button>
                <p>Count: {count}</p>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={handleStyle}
                isConnectable={isConnectable}
            />
            <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
        </div>
    );
};

export default memo(TextUpdaterNode);
