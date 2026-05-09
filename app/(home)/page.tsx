import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import StarsBackground from './components/StarsBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d]">
      <StarsBackground />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <Navbar />
      <Hero />
    </main>
  );
}