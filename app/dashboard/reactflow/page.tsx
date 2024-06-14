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

import CustomNode from "./customNode";
import TextUpdaterNode from "./textUpdaterNode";
import CustomEdge from "./customEdge";
import ColorChooserNode from './colorChooserNode';
import ModelNode from './modelNode';

import "reactflow/dist/style.css";
import { useShallow } from 'zustand/react/shallow';
import useStore, { RFState } from './stateManager';


const nodeTypes = {
    custom: CustomNode,
    textUpdater: TextUpdaterNode,
    colorChooser: ColorChooserNode,
    modelNode: ModelNode
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

const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

const BasicFlow = () => {

    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
        useShallow(selector),
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