import { SiteHeader } from '@/components/SiteHeader';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Details } from '@/components/sections/Details';
import { Features } from '@/components/sections/Features';
import { Footer } from '@/components/sections/Footer';
import { Gallery } from '@/components/sections/Gallery';
import { Hero } from '@/components/sections/Hero';
import { Location } from '@/components/sections/Location';
import { StatsBar } from '@/components/sections/StatsBar';
import { VirtualTour } from '@/components/sections/VirtualTour';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Gallery />
        <VirtualTour />
        <Features />
        <Location />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
