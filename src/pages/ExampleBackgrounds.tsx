import BackgroundGradient from "@/components/backgrounds/BackgroundGradient";
import MeshGradientBackground from "@/components/backgrounds/MeshGradientBackground";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";
import GlassCard from "@/components/backgrounds/GlassCard";

export default function ExampleBackgrounds() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <BackgroundGradient />
      <MeshGradientBackground />
      <NoiseOverlay />
      <GlassCard>
        <h1 className="text-4xl font-bold mb-4">Example Backgrounds</h1>
        <p className="text-lg">This card is layered on beautiful gradients and noise overlay.</p>
      </GlassCard>
    </div>
  );
}
