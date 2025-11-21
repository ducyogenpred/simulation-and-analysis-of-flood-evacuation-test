import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarProvider,
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
import { useState } from "react";
import Overview from "@/components/simulation/overview";
import Population from "@/components/simulation/population";
import Hazards from "@/components/simulation/hazards";
import Shelter from "@/components/simulation/shelter";
import Evacuation from "@/components/simulation/evacuation";
import Timeline from "@/components/simulation/timeline";

import Map from "@/components/simulation/Map";

export default function Simulation() {
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

        <main className="flex-1">
          <div className="no-scrollbar flex h-full w-full">
            <div className="border-border [&::-webkit-scrollbar-track]:bg-background w-1/4 overflow-y-scroll border-r [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-700">
              {panel === "overview" && <Overview />}
              {panel === "evacuation" && <Evacuation />}
              {panel === "shelter" && <Shelter />}
              {panel === "population" && <Population />}
              {panel === "hazards" && <Hazards />}
            </div>
            <div className="flex flex-1 flex-col">
              <div className="border-border flex h-16 items-center border-b px-4">
                <h1 className="text-2xl">City Evacuation Plan</h1>
              </div>
              <div className="relative flex-1">
                <Map />
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
