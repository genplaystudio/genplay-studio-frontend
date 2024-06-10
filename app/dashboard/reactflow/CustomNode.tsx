import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

type NodeData = {
    value: number;
    label: string;
};

const CustomNode = ({
    data,
    isConnectable,
    targetPosition = Position.Top,
    sourcePosition = Position.Bottom
}: NodeProps<NodeData>) => {
    return (
        <>
            <Handle
                type="target"
                position={targetPosition}
                isConnectable={isConnectable}
            />
            {data?.label}
            <Handle
                type="source"
                position={sourcePosition}
                isConnectable={isConnectable}
                id="ac"
            />
        </>
    );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
