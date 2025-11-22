export default function FieldHeader({ label, helperText }) {
  return (
    // Field Header Container
    <div className="mb-6 space-y-2">
      {/* Header */}
      <h3 className="text-lg font-semibold">{label}</h3>
      {/* Body */}
      <p className="text-muted-foreground text-balance">{helperText}</p>
    </div>
  );
}
