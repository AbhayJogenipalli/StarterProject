export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl shadow-lg p-6">
      {children}
    </div>
  );
}
