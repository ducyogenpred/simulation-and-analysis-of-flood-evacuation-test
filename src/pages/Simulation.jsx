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

export default function Simulation() {
  const [panel, setPanel] = useState("overview");
  return (
    <div className="flex h-screen">
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
                    className="cursor-pointer rounded-sm p-2 hover:bg-neutral-800"
                  />
                  <Waypoints
                    size={40}
                    onClick={() => {
                      setPanel("evacuation");
                    }}
                    className="cursor-pointer rounded-sm p-2 hover:bg-neutral-800"
                  />
                  <House
                    size={40}
                    onClick={() => {
                      setPanel("shelter");
                    }}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "shelter" ? "bg-neutral-700" : ""}`}
                  />
                  <User
                    size={40}
                    onClick={() => {
                      setPanel("population");
                    }}
                    className={`cursor-pointer rounded-sm p-2 hover:bg-neutral-800 ${panel === "population" ? "bg-neutral-700" : ""} `}
                  />
                  <TriangleAlert
                    size={40}
                    onClick={() => {
                      setPanel("hazards");
                    }}
                    className="cursor-pointer rounded-sm p-2 hover:bg-neutral-800"
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
          <div className="flex h-full w-full">
            <div className="w-1/4">
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
              <div className="flex-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://api.mapbox.com/styles/v1/edel02/cmguztntk003q01srb9tm4unr.html?title=false&access_token=pk.eyJ1IjoiZWRlbDAyIiwiYSI6ImNtZnczaWt6cjBkY2Uya3B3cjQzdWd6ZzYifQ.YDAz7tiM0WXpQdZSIEaVAQ&zoomwheel=false#13.12/14.55026/121.03159/17.6/19"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
}
