import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";

function Configure() {
  return (
    <div className="mt-4">
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Evacuation Timing</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          Set when the evacuation simulation begins. You can start it manually
          or configure automatic triggers based on hazard conditions.
        </p>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Automatic Start</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Automatically start the evacuation when hazard thresholds are
            exceeded.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-4">
        {/* Header */}
        <h4>Rainfall Threshold</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Start evacuation automatically when rainfall reaches or exceeds this
          level.
        </p>
        <Input type="number" step="1" placeholder="100-200 mm/hr" />
      </div>
      <div className="mb-10">
        {/* Header */}
        <h4>Flood Depth Threshold</h4>
        {/* Body */}
        <p className="text-muted-foreground mb-2 text-balance">
          Start evacuation when floodwater reaches or exceeds this depth.
        </p>
        <Input type="number" step="0.1" placeholder="0-3 m" />
      </div>
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Movement Modifiers</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          These settings adjust walking speed based on environmental conditions
          such as rainfall, flooding, and congestion.
        </p>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Congestion Effect</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Reduces movement speed in crowded areas.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Rainfall Slowdown</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Apply additional slowdown based on rainfall intensity.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Flood Depth Slowdown</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Apply additional slowdown based on based on water depth.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-10 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Wind Slowdown</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Applies movement slowdown when strong winds or typhoon conditions
            are active.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Evacuation Rules</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          These settings control how evacuees are prioritized, assigned to
          shelters, and routed during the simulation.
        </p>
      </div>
      <div className="mb-4 flex">
        <div className="flex-4">
          {/* Header */}
          <h4>Follow Designated Routes</h4>
          {/* Body */}
          <p className="text-muted-foreground text-balance">
            Forces evacuees to use predefined or official evacuation routes
            instead of automatically computed paths.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Switch size="lg" />
        </div>
      </div>
      <div className="mb-10 grid">
        <div className="flex-4">
          {/* Header */}
          <h4>Shelter Assignment</h4>
          {/* Body */}
          <p className="text-muted-foreground mb-3 text-balance">
            Determines how evacuation zones are assigned to shelters.
          </p>
        </div>
        <div>
          <RadioGroup>
            <div className="grid gap-2">
              <div className="border-border flex gap-4 rounded-lg border p-4">
                <RadioGroupItem value="nearest" className="mt-1" />
                <div className="grid">
                  <h5>Nearest Shelter</h5>
                  <p className="text-muted-foreground text-balance">
                    Automatically matches each zone to the closest available
                    shelter.
                  </p>
                </div>
              </div>
              <div className="border-border flex gap-4 rounded-lg border p-4">
                <RadioGroupItem value="safest" className="mt-1" />
                <div className="grid">
                  <h5>Prefer Safest Route</h5>
                  <p className="text-muted-foreground text-balance">
                    Instructs the evacuees to choose the safest available path,
                    even if it is longer.
                  </p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <Button className="w-1/3">Start Evacuation</Button>
      </div>
    </div>
  );
}

function Manage() {
  return (
    <div className="mt-4">
      <div className="mb-6 space-y-2">
        {/* Header */}
        <h3 className="text-lg font-semibold">Evacuation Routes</h3>
        {/* Body */}
        <p className="text-muted-foreground mb-6 text-balance">
          Manage how evacuation routes are created, updated, or cleared on the
          map.
        </p>
      </div>
      <div className="mb-4">
        <div className="flex-4">
          {/* Header */}
          <h4>Auto-Generated Routes</h4>
          {/* Body */}
          <p className="text-muted-foreground mb-2 text-balance">
            Automatically computes the best evacuation paths from each
            population zone to its assigned shelter using current hazard data
            and your Evacuation Settings.
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-4">
          <Button variant="outline" className="flex-1">
            Clear Routes
          </Button>
          <Button variant="outline" className="flex-1">
            Generate Routes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Evacuation() {
  return (
    <div className="p-4 pt-12">
      <h2 className="mb-6 text-4xl font-semibold">Evacuation</h2>

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
