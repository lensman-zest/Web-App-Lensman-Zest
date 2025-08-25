import Image from "next/image";
import hero from '../../../public/hero.png';

export default function Hero() {
    return (
        <section className="relative h-[60vh] xl:h-[70vh] overflow-hidden ">
            <div className="absolute inset-0 z-0">
                <Image src={hero} alt="lz hero img" className="w-full h-full object-cover"/>
                {/* Opional overlay for contrast  */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 xl:px-12">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Crafting Cinematic Web Experiences
        </h1>
        <p className="mt-4 text-[#D1D1D1] text-base sm:text-lg lg:text-xl max-w-2xl">
          Crafting worlds that don’t exist — but tell something real.
        </p>
        <div className="mt-8">
         <a
  href="/products"
  className="inline-block border border-white text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
>
  Explore Products
</a>

        </div>
            </div>
        </section>
    )
}