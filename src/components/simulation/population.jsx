"use client";

import { Ellipsis, ListFilter, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FieldHeader from "@/components/custom/FieldHeader";
import { Slider } from "@/components/ui/slider";

function Configure() {
  return (
    <div className="mt-4">
      <FieldHeader
        label="Movement Speed"
        helperText="Define the average walking speed for your simulation."
      />
      <div className="mb-4">
        {/* Header */}
        <h4>Average Walking Speed</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Typical walking speed for the general population.
        </p>
        <Input type="number" step="0.1" placeholder="1.0-1.3 m/s" />
      </div>
      <div className="mb-10">
        {/* Header */}
        <h4>Vulnerable Group Speed</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Walking speed for slower or vulnerable populations, including elderly,
          children, pregnant individuals, or PWDs.
        </p>
        <Input type="number" step="0.1" placeholder="0.6-0.8 m/s" />
      </div>
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Compliance Rate</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          Percentage of people who decide to evacuate during an emergency.
        </p>
        <div className="space-y-2">
          <h4>Compliance (%)</h4>
          <div className="flex items-center">
            <Minus size={16} />
            <div className="mx-4 flex-1">
              <Slider defaultValue={[50]} max={[100]} />
            </div>
            <Plus size={16} />
          </div>
          <p className="text-muted-foreground text-sm text-balance">
            Set how many people are likely to comply with evacuation orders.
          </p>
        </div>
      </div>
    </div>
  );
}

function Manage() {
  return (
    <div className="mt-4">
      <FieldHeader
        label="Add Data"
        helperText="Add a dataset for your simulation. You can import a file or create a
          new dataset manually."
      />

      {/* Add Data Card */}
      <div className="mb-10 flex space-x-4">
        <Button variant="outline" className="flex-1">
          Import
        </Button>
        <Button variant="outline" className="flex-1">
          Create
        </Button>
      </div>

      {/* Label and Description */}
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Manage Data</h3>
        {/* Body */}
        <p className="text-muted-foreground text-balance">
          Manage the data used in your simulation. View, update, or delete the
          dataset you've added.
        </p>
      </div>

      {/* Table Action Bar */}
      <div className="mb-6 flex gap-2">
        <Input
          type="search"
          placeholder="Search datasets..."
          className="w-full"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ListFilter />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Sort Population Count</DropdownMenuItem>
            <DropdownMenuItem>Sort Risk Factor</DropdownMenuItem>
            <DropdownMenuItem>Sort Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table Card */}
      <div className="border-border mb-4 flex flex-col rounded-t-xl rounded-b-lg border">
        <div className="bg-card text-card-foreground flex rounded-t-lg p-4">
          <h4 className="flex-1 text-lg font-semibold">A1</h4>
          <div className="flex flex-1 justify-end gap-4">
            <div className="bg-success flex items-center rounded-full px-3 py-1">
              <h4 className="text-success-foreground text-sm">Enabled</h4>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Population Count</h4>
          <p className="flex-1">123</p>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Risk Factor</h4>
          <p className="flex-1">77%</p>
        </div>
      </div>

      <div className="border-border mb-4 flex flex-col rounded-t-xl rounded-b-lg border">
        <div className="bg-card text-card-foreground flex rounded-t-lg p-4">
          <h4 className="flex-1 text-lg font-semibold">A2</h4>
          <div className="flex flex-1 justify-end gap-4">
            <div className="bg-success flex items-center rounded-full px-3 py-1">
              <h4 className="text-success-foreground text-sm">Enabled</h4>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Population Count</h4>
          <p className="flex-1">385</p>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Risk Factor</h4>
          <p className="flex-1">56%</p>
        </div>
      </div>

      <div className="border-border mb-4 flex flex-col rounded-t-xl rounded-b-lg border">
        <div className="bg-card text-card-foreground flex rounded-t-lg p-4">
          <h4 className="flex-1 text-lg font-semibold">A3</h4>
          <div className="flex flex-1 justify-end gap-4">
            <div className="bg-secondary flex items-center rounded-full px-3 py-1">
              <h4 className="text-secondary-foreground text-sm">Disabled</h4>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Population Count</h4>
          <p className="flex-1">670</p>
        </div>
        <div className="border-border flex border-t p-4">
          <h4 className="flex-1">Risk Factor</h4>
          <p className="flex-1">31%</p>
        </div>
      </div>
    </div>
  );
}

export default function Population() {
  return (
    <div className="border-border h-full border-r p-4 pt-12">
      <h2 className="mb-6 text-4xl font-semibold">Population</h2>

      <Tabs defaultValue="configure" className="mb-8">
        <TabsList>
          <TabsTrigger value="configure">Configure</TabsTrigger>
          <TabsTrigger value="manage">Manage</TabsTrigger>
        </TabsList>
        <TabsContent value="configure">
          <Configure />
        </TabsContent>
        <TabsContent value="manage">
          <Manage />
        </TabsContent>
      </Tabs>
    </div>
  );
}
