"use client";

import { Ellipsis, ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FieldHeader from "@/components/custom/FieldHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ManageShelters() {
  return (
    <div className="mt-4">
      <FieldHeader
        label="Manage Shelters"
        helperText="View, add, and manage shelter information."
      />

      {/* Action Buttons */}
      <div className="mb-10 flex space-x-4">
        <Button variant="outline" className="flex-1">
          Import
        </Button>
        <Button variant="outline" className="flex-1">
          Create
        </Button>
      </div>

      {/* Section Header */}
      <div className="mb-6 space-y-2">
        <h3 className="text-lg font-semibold">Shelters List</h3>
        <p className="text-muted-foreground text-balance">
          View, update, or delete the shelter entries you've added.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 flex gap-2">
        <Input type="search" placeholder="Search shelters..." className="w-full" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ListFilter />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Sort by Name</DropdownMenuItem>
            <DropdownMenuItem>Sort by Capacity</DropdownMenuItem>
            <DropdownMenuItem>Sort by Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      
      <div className="flex flex-wrap gap-6 justify-start">
        {/* Shelter 1 */}
        <div className="border-border bg-sidebar flex flex-col gap-1 rounded-lg border p-4 max-w-sm w-full">
          <div className="bg-card text-card-foreground flex rounded-t-lg p-4">
            <h4 className="flex-1 text-lg font-semibold">Shelter 1</h4>
            <div className="flex flex-1 justify-end gap-4">
              <div className="bg-success flex items-center rounded-full px-3 py-1">
                <h4 className="text-success-foreground text-sm">Available</h4>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Address</h4>
            <p className="flex-1">Makati City</p>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Capacity</h4>
            <p className="flex-1">200</p>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Occupancy</h4>
            <p className="flex-1">150 (75%)</p>
          </div>
        </div>

        {/* Shelter 2 */}
        <div className="border-border bg-sidebar flex flex-col gap-1 rounded-lg border p-4 max-w-sm w-full">
          <div className="bg-card text-card-foreground flex rounded-t-lg p-4">
            <h4 className="flex-1 text-lg font-semibold">Shelter 2</h4>
            <div className="flex flex-1 justify-end gap-4">
              <div className="bg-destructive flex items-center rounded-full px-3 py-1">
                <h4 className="text-destructive-foreground text-sm">Unavailable</h4>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Address</h4>
            <p className="flex-1">Makati City</p>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Capacity</h4>
            <p className="flex-1">100</p>
          </div>
          <div className="border-border flex border-t p-4">
            <h4 className="flex-1">Occupancy</h4>
            <p className="flex-1">0 (0%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shelters() {
  return (
    <div className="border-border h-full border-r px-8 pt-12">
      <h2 className="mb-6 text-4xl font-semibold">Shelters</h2>
          <ManageShelters />
    </div>
  );
}
