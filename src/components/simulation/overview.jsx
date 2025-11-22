export default function SimulationOverview() {
  return (
    <div className="h-full space-y-6 p-4 pt-12">
      <h2 className="mb-6 text-3xl font-semibold">Overview</h2>

      <section>
        <h3 className="text-muted-foreground mb-2 text-lg font-medium">
          Simulation Metrics
        </h3>
        <div className="flex flex-wrap gap-4">
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
        <h3 className="text-muted-foreground mb-2 text-lg font-medium">
          Evacuation Metrics
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Total Evacuated</h4>
            <p className="text-xl font-semibold">650</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Remaining Population
            </h4>
            <p className="text-xl font-semibold">550</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Active Evacuation Routes
            </h4>
            <p className="text-xl font-semibold">5</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-muted-foreground mb-2 text-lg font-medium">
          Shelter Metrics
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Available Shelters
            </h4>
            <p className="text-xl font-semibold">6</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Unavailable Shelters
            </h4>
            <p className="text-xl font-semibold">2</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Shelter Occupancy</h4>
            <p className="text-xl font-semibold">75%</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-muted-foreground mb-2 text-lg font-medium">
          Population Metrics
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Total Population</h4>
            <p className="text-xl font-semibold">1200</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Vulnerable Population
            </h4>
            <p className="text-xl font-semibold">300</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Casualties</h4>
            <p className="text-xl font-semibold">3</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-muted-foreground mb-2 text-lg font-medium">
          Hazard Metrics
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Typhoon Category</h4>
            <p className="text-xl font-semibold">Tropical Storm</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Rainfall Intensity
            </h4>
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
