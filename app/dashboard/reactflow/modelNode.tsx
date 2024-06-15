import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export type NodeData = {
  modelName: string;
};

const models = [
  {
    id: 1,
    name: 'Model 1',
    image:
      'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
  },
  {
    id: 2,
    name: 'Model 2',
    image:
      'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg',
  },
  {
    id: 3,
    name: 'Model 3',
    image:
      'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
  },
];

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
            AI Model
          </Typography>
          <Typography>Pick a AI model to use</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="mb-4">
            <label
              htmlFor="customer"
              className="mb-2 block text-sm font-medium"
            >
              Choose model
            </label>
            <div className="relative">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="new"
                    startContent={
                      <Image
                        src="/google-icon.png"
                        width={30}
                        height={30}
                        alt="github logo"
                        className="mr-3"
                      />
                    }
                  >
                    New file
                  </DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default ModelNode;
