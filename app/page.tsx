import Hero3D from "../components/Hero3D";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <main>
      <WalletConnect />
      <Hero3D />
      <AnalyticsDashboard />
    </main>
  );
}
