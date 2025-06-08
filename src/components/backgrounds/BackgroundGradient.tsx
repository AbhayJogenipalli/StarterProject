export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-orange-300 opacity-50 blur-3xl"
      ></div>
    </div>
  );
}
