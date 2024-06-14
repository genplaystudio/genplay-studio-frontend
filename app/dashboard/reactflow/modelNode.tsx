import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button, Select, Option,
} from "@material-tailwind/react";

export type NodeData = {
    modelName: string;
}

const modelNames = [{
    label: 'Model 1',
}, {
    label: 'Model 2',
}, {
    label: 'Model 3',
}];

function ModelNode({ data }: NodeProps<NodeData>) {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <div className="mb-4">
                        <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                            Choose customer
                        </label>
                        <div className="relative">
                            <select
                                id="customer"
                                name="customerId"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                aria-describedby="customer-error"
                                style={{ background: 'lightgray' }}
                            >
                                <option value="" disabled>
                                    Select a customer
                                </option>
                                <option value="">
                                    Other option
                                </option>
                            </select>
                        </div>
                    </div>
                </CardFooter>
            </Card>

            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}

export default ModelNode;