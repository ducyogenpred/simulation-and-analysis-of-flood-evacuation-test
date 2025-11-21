export default function SimulationOverview() {
  return (
    <div className="border-border h-full border-r p-4 pt-12">
      <h2 className="mb-8 text-4xl font-semibold">Overview</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Status</h4>
            <p className="text-2xl font-semibold">Running</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Elapsed Time</h4>
            <p className="text-2xl font-semibold">12 hr</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">Total Evacuated</h4>
            <p className="text-2xl font-semibold">650</p>
          </div>
          <div className="border-border bg-sidebar flex flex-1 flex-col gap-1 rounded-lg border p-4">
            <h4 className="text-muted-foreground text-sm">
              Remaining Population
            </h4>
            <p className="text-2xl font-semibold">550</p>
          </div>
        </div>
      </div>
    </div>
  );
}
