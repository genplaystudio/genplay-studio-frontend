'use client'
import { useCallback } from "react";
import ReactFlow, {
    Node,
    addEdge,
    Background,
    Edge,
    Connection,
    useNodesState,
    useEdgesState,
    MiniMap,
    applyEdgeChanges,
    applyNodeChanges,
    NodeChange,
    EdgeChange,
    SelectionMode,
    Controls,
    Panel,
    Position
} from "reactflow";

import CustomNode from "./CustomNode";
import TextUpdaterNode from "./TextUpdaterNode";
import CustomEdge from "./CustomEdge";

import "reactflow/dist/style.css";
import { text } from "stream/consumers";
import { Texturina } from "next/font/google";

const initialNodes: Node[] = [
    {
        id: "1",
        type: "input",
        data: { label: "Node 1" },
        position: { x: 250, y: 5 }
    },
    { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
    { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
    {
        id: "4",
        type: "custom",
        data: { label: "Custom Node" },
        position: { x: 400, y: 300 }
    },
    {
        id: "node-1",
        type: "textUpdater",
        data: { label: "textUpdater" },
        position: { x: 0, y: 200 }
    },
    {
        id: 'node-2',
        type: 'output',
        targetPosition: Position.Top,
        position: { x: 0, y: 400 },
        data: { label: 'node 2' },
    },
    {
        id: 'node-3',
        type: 'output',
        targetPosition: Position.Top,
        position: { x: 200, y: 400 },
        data: { label: 'node 3' },
    },
];

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true, label: "Edge 1" },
    { id: "e1-3", source: "1", target: "3" },
    { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
    { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
    { id: '3->4', source: '3', target: '4', type: 'customEdge' },
];

const nodeTypes = {
    custom: CustomNode,
    textUpdater: TextUpdaterNode
};

const edgeTypes = {
    customEdge: CustomEdge
}

const panOnDrag = [0, 2];


const nodeColor = (node: Node) => {
    switch (node.type) {
        case 'input':
            return '#6ede87';
        case 'output':
            return '#6865A5';
        default:
            return '#ff0072';
    }
};

const BasicFlow = () => {
    const [nodes, setNodes] = useNodesState(initialNodes);
    const [edges, setEdges] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection: Edge | Connection) => {
            const edge = { ...connection, type: 'customEdge' };
            setEdges((eds) => addEdge(edge, eds));
        },
        [setEdges]
    );
    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            panOnScroll
            selectionOnDrag
            panOnDrag={panOnDrag}
            selectionMode={SelectionMode.Partial}
            deleteKeyCode={"Delete"}
        >
            <Background />
            <Controls />
            <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        </ReactFlow>
    );
};

export default BasicFlow;