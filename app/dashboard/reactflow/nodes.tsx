import { Node, Position } from 'reactflow';

export default [
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
        type: 'colorChooser',
        targetPosition: Position.Top,
        position: { x: 200, y: 400 },
        data: { label: 'node 3', color: '#F6E05E', },
    },
] as Node[];