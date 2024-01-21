'use client'
import { useState, useEffect } from "react";
import { TopRow } from "./Components/Shared/topRow"
import { DesktopNavbar } from "./Components/Shared/desktopNavbar"
import { MobileNavbar } from "./Components/Shared/mobileNavbar";
import { Hero } from "./Components/hero";
import { ProducstList } from "./Components/ProductsList/ProducstList";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../app/redux/slices/dataSlices';
import { RootState } from '../app/redux/store';
import { Services } from "./Components/Services/Services";
import { FeaturedProducts } from "./Components/FeaturedProducts.tsx/FeaturedProducts";
import { Reviews } from "./Components/Reviews/Reviews";
import { BottomSection } from "./Components/BottomSection/BottomSection";
import { Footer } from "./Components/Footer/Footer";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  const dispatch = useDispatch();


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Set the initial value
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="flex min-h-screen max-w-screen flex-col bg-white text-black">
      {!isMobile && (
        <TopRow />
      )}
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      <div className="lg:p-32 p-8">
      <Hero isMobile={isMobile} />
      </div>
      <div className="lg:p-32 p-8">
        <ProducstList hasPagination={true} />
      </div>
      <div className="lg:p-48 p-8">
        <Services />
      </div>
      <div className="lg:p-48 p-8">
        <FeaturedProducts />
      </div>
      <div className="lg:px-56 px-8">
        <Reviews />
      </div>
      <div className="mt-[80px]">
      <BottomSection />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}
