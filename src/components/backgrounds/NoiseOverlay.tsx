export default function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `
          repeating-conic-gradient(
            rgba(0,0,0,0.03) 0% 25%, transparent 25% 50%
          )`,
        backgroundSize: "4px 4px",
      }}
    ></div>
  );
}
