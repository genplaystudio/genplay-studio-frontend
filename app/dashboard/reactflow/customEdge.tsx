import { NodeProps } from 'postcss';
import { memo } from 'react';
import {
    BaseEdge,
    Edge,
    EdgeLabelRenderer,
    EdgeProps,
    getStraightPath,
    useReactFlow,
} from 'reactflow';

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) => {
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <EdgeLabelRenderer>
                <button
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                    }}
                    className="nodrag nopan"
                    onClick={() => {
                        setEdges((es) => es.filter((e) => e.id !== id));
                    }}
                >
                    delete
                </button>
            </EdgeLabelRenderer>
        </>
    );
}

export default memo(CustomEdge);
