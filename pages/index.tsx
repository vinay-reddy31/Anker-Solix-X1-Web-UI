import Highlights from "@/components/Highlights";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DiscoverPower from "../components/DiscoverPower";
import PowerTrifecta from "@/components/PowerTrifecta";
import EnergyCarousel from "@/components/imageCarousel";
import ModularVideoSection from "@/components/Features";
import EnergyScalerSection from "@/components/EnergyScaler";
import MinimalCostSection from "@/components/MinimalCost";
import OffGridTabSection from "@/components/Performance";
import ExtremeToughnessSection from "@/components/ExtremeToughnessSection";
import MinimalistDesignSection from "@/components/MinimalistDesignSection";
// import BuildRevealSection from "@/components/BuildReveal";
import SmartEnergySection from "@/components/SmartEnergySection";
import EnergyModeTabs from "@/components/Automating";
import MonitoringSection from "@/components/Monitoring";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Highlights />
      <DiscoverPower/>
      <PowerTrifecta/>
      <EnergyCarousel/>
      <ModularVideoSection/>
      <EnergyScalerSection/>
      <MinimalCostSection/>
      <OffGridTabSection/>
      <ExtremeToughnessSection/>
      <MinimalistDesignSection/>
      {/* <BuildRevealSection/> */}
      <SmartEnergySection/>
      <EnergyModeTabs/>
      <MonitoringSection/>
    </div>
  );
}
