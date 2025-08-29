import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import FeatureReels from "./components/FeatureReels";
import Learning from "./components/Learning";
import Gallery from "./components/Gallery";
import Footer from './components/Footer';

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <Highlights/>
   <FeatureReels/>
   <Learning/>
   <Gallery/>
   <Footer/>
   </>
  );
}
