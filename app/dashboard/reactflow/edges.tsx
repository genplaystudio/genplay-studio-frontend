import { Edge } from 'reactflow';

export default [
    { id: "e1->2", source: "1", target: "2", animated: true, label: "Edge 1" },
    { id: "e1->3", source: "1", target: "3" },
    { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
    { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
    { id: '3->4', source: '3', target: '4', type: 'customEdge' },
] as Edge[];
