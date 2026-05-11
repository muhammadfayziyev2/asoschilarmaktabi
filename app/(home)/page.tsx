import Announcement from './components/Announcement';
import AuroraBackground from './components/AuroraBackground';
import Constellation from './components/Constellation';
import Format from './components/Format';
import { Hero } from './components/Hero';
import Mentors from './components/Mentors';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import StarsBackground from './components/StarsBackground';
import WhyUs from './components/WhyUs';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d]">
      {/* 🌈 Aurora to'lqinlari */}
      <AuroraBackground />

      {/* ⭐ Yulduzlar */}
      <StarsBackground />

      {/* 🔗 Konstellatsiya */}
      <Constellation />

      {/* Asosiy kontent */}
      <Navbar />
      <Hero />
      <Mentors />
      <WhyUs />
      <Format />
      <Pricing />
      <Announcement />
    </main>
  );
}