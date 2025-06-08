export default function MeshGradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ff512f, transparent 50%), radial-gradient(circle at 70% 70%, #f09819, transparent 50%)",
        }}
      ></div>
    </div>
  );
}
