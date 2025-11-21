"use client";

import { Input } from "@/components/ui/input";
import * as React from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

function Content() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return (
    <div>
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Weather Conditions</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          Define the weather parameters for your simulation.
        </p>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Typhoon Toggle</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Turn this on to include typhoon conditions in the simulation.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-4">
        {/* Header */}
        <h4>Typhoon Category</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Select the typhoon classification based on wind speed. Categories
          affect hazard spread and movement difficulty.
        </p>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Typhoon Categories</SelectLabel>
              <SelectItem value="no-typhoon">No Typhoon</SelectItem>
              <SelectItem value="tropical-depression">
                Tropical Depression
              </SelectItem>
              <SelectItem value="tropical-storm"> Tropical Storm</SelectItem>
              <SelectItem value="severe-tropical-storm">
                Severe Tropical Storm
              </SelectItem>
              <SelectItem value="typhoon">Typhoon</SelectItem>
              <SelectItem value="super-typhoon">Super Typhoon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        {/* Header */}
        <h4>Rainfall Intensity</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Set the rainfall intensity in millimeters per hour.
        </p>
        <Input type="number" step="1" placeholder="0–300 mm/hr" />
      </div>
      <div className="mb-10">
        {/* Header */}
        <h4>Wind Speed</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Specify wind speed in kilometers per hour.
        </p>
        <Input type="number" step="1" placeholder="0–250 kph" />
      </div>
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Flood Conditions</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          Configure flood behavior for your simulation.
        </p>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Flooding Toggle</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Turn flooding on to include flood depth, extent, and movement in the
            simulation.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-4">
        {/* Header */}
        <h4>Water Depth</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Specify average floodwater depth in meters.
        </p>
        <Input type="number" step="0.1" placeholder="0-10 m" />
      </div>
      <div className="mt-10 flex justify-end">
        <Button className="w-1/3">Start Hazard</Button>
      </div>
    </div>
  );
}

export default function Hazards() {
  return (
    <div className="h-full p-4 pt-12">
      <h2 className="mb-8 text-4xl font-semibold">Hazards</h2>
      <Content />
    </div>
  );
}
