import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Settings2 } from "lucide-react";

import { Button } from "./ui/button";

const items = [
  {
    title: "Settings2",
    url: "#",
    icon: Settings2,
  },
];

export default function File() {
  return (
    <div className="flex h-fit flex-col gap-4 rounded-md border border-b px-8 py-4">
      <div className="flex items-center">
        <CardTitle> File Name: ###########</CardTitle>
        <Button variant="ghost" size="icon" className="ml-auto">
          <Settings2 />
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <CardDescription>ID: ###########</CardDescription>
        <CardDescription>Created: ##/##/####</CardDescription>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Run</Button>
        <Button variant="outline">Export</Button>
        <Button variant="destructive" className="ml-auto">
          Delete
        </Button>
      </div>
    </div>
  );
}
