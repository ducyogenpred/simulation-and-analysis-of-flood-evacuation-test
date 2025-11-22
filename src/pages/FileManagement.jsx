import {
  SidebarContent,
  SidebarGroup,
  SidebarProvider,
  Sidebar,
} from "@/components/ui/sidebar";

import {
  LifeBuoy,
  LayoutGrid,
  Waypoints,
  House,
  User,
  TriangleAlert,
  Info,
  Settings,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import File from "@/components/File";
import FilePagination from "@/components/FilePagination";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "react-aria-components";
import {
  Settings2,
  FilePlus,
  FileChartColumn,
  Search,
  FileChartColumnIcon,
} from "lucide-react";

export default function FileManagement() {
  const [panel, setPanel] = useState("overview");
  return (
    <div className="flex h-screen overflow-y-clip">
      <SidebarProvider className="[--sidebar-width:4rem]">
        <Sidebar className="w-16">
          <SidebarContent className="px-0 py-4">
            <div className="flex h-full flex-col justify-between">
              <div className="flex flex-col gap-12">
                <SidebarGroup className="items-center">
                  <LifeBuoy absoluteStrokeWidth={true} />
                </SidebarGroup>
                <SidebarGroup className="items-center space-y-3 px-0">
                  <LayoutGrid
                    size={40}
                    onClick={() => {
                      setPanel("overview");
                    }}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "overview" ? "bg-neutral-700" : ""}`}
                  />
                  <Waypoints
                    size={40}
                    onClick={() => {
                      setPanel("evacuation");
                    }}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "evacuation" ? "bg-neutral-700" : ""}`}
                  />
                  <House
                    size={40}
                    onClick={() => setPanel("shelter")}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "shelter" ? "bg-neutral-700" : ""}`}
                  />
                  <User
                    size={40}
                    onClick={() => setPanel("population")}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "population" ? "bg-neutral-700" : ""} `}
                  />
                  <TriangleAlert
                    size={40}
                    onClick={() => {
                      setPanel("hazards");
                    }}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "hazards" ? "bg-neutral-700" : ""}`}
                  />
                </SidebarGroup>
              </div>
              <SidebarGroup className="items-center space-y-6">
                <Info absoluteStrokeWidth={true} />
                <Settings absoluteStrokeWidth={true} />
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex h-full w-full flex-col">
          <div className="border-border flex h-16 items-center justify-between border-b px-4">
            <div>
              <Textarea
                placeholder="fileNameExample.jsx"
                id="FileName"
                className="w-full rounded-md"
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Create</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="mb-1">
                  <DialogTitle>Create File</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex w-full flex-col gap-1">
                    <Label htmlFor="FileName">File Name</Label>
                    <DialogDescription>
                      Name your new simulation
                    </DialogDescription>
                    <Textarea
                      placeholder="fileNameExample.jsx"
                      id="FileName"
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <Label htmlFor="FileName">City/Barangay</Label>
                    <DialogDescription>
                      Select an area to simulate
                    </DialogDescription>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="justify-start">
                          <DialogDescription>City/Brgy</DialogDescription>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="flex flex-col">
                        <div className="flex flex-col gap-1">
                          <DialogTitle>Simulate City</DialogTitle>
                          <DialogDescription>
                            Select an area to simulate
                          </DialogDescription>
                        </div>
                        <div className="h-100">
                          <iframe
                            width="100%"
                            height="100%"
                            src="https://api.mapbox.com/styles/v1/edel02/cmguztntk003q01srb9tm4unr.html?title=false&access_token=pk.eyJ1IjoiZWRlbDAyIiwiYSI6ImNtZnczaWt6cjBkY2Uya3B3cjQzdWd6ZzYifQ.YDAz7tiM0WXpQdZSIEaVAQ&zoomwheel=false#13.12/14.55026/121.03159/17.6/19"
                          ></iframe>
                        </div>
                        <DialogFooter>
                          <Button>Confirm</Button>
                          <Button variant="ghost">Cancel</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="FileName">Import</Label>
                    <DialogDescription>
                      Import an existing file
                    </DialogDescription>
                    <Popover>
                      <PopoverTrigger className="w-full">
                        <Button variant="outline" className="w-full">
                          <DialogDescription>Select File</DialogDescription>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Empty className="border border-dashed">
                          <EmptyTitle>Cloud Storage Empty</EmptyTitle>
                          <EmptyDescription>
                            Upload files to your cloud storage to access them
                            anywhere.
                          </EmptyDescription>
                        </Empty>
                        <div className="mt-4 flex justify-end gap-1">
                          <Button variant="" className="h-8 px-8">
                            Import
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div></div>
                <DialogFooter>
                  <Button variant="default">Create New</Button>
                  <Button variant="ghost" className="underline">
                    Cancel
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid h-fit grid-cols-1">
            <div className="border-border flex items-center justify-center gap-4 border p-4">
              <Button
                className="flex h-20 w-60 flex-col items-start pl-4"
                variant="outline"
              >
                <FilePlus />
                <h1>New Simulation</h1>
              </Button>
              <Button
                className="flex h-20 w-60 flex-col items-start pl-4"
                variant="outline"
              >
                <FileChartColumn />
                <h1>Export File</h1>
              </Button>
              <Button
                className="flex h-20 w-60 flex-col items-start pl-4"
                variant="outline"
              >
                <FilePlus />
                <h1>Manage Data Sources</h1>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border border-b p-10">
            <File />
            <File />
            <File />
            <File />
            <File />
            <File />
          </div>
          <div className="m-4">
            <FilePagination></FilePagination>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
