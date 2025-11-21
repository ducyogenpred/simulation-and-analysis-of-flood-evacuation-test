export default function SimulationOverview() {
  return (
    <div className="border-border h-full border-r p-4 pt-12 space-y-6">
      <h2 className="text-3xl font-semibold mb-6">Overview</h2>

      <section>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">Simulation Metrics</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Status</h4>
            <p className="text-xl font-semibold">Running</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Elapsed Time</h4>
            <p className="text-xl font-semibold">12 hr</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">Evacuation Metrics</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Total Evacuated</h4>
            <p className="text-xl font-semibold">650</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Remaining Population</h4>
            <p className="text-xl font-semibold">550</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Active Evacuation Routes</h4>
            <p className="text-xl font-semibold">5</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">Shelter Metrics</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Available Shelters</h4>
            <p className="text-xl font-semibold">6</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Unavailable Shelters</h4>
            <p className="text-xl font-semibold">2</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Shelter Occupancy</h4>
            <p className="text-xl font-semibold">75%</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">Population Metrics</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Total Population</h4>
            <p className="text-xl font-semibold">1200</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Vulnerable Population</h4>
            <p className="text-xl font-semibold">300</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Casualties</h4>
            <p className="text-xl font-semibold">3</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-medium text-muted-foreground">Hazard Metrics</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Typhoon Category</h4>
            <p className="text-xl font-semibold">Tropical Storm</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Rainfall Intensity</h4>
            <p className="text-xl font-semibold">25 mm/hr</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Water Depth</h4>
            <p className="text-xl font-semibold">5m</p>
          </div>
        </div>
      </section>
    </div>
  );
}
