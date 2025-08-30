import Image from "next/image";
import hero from "../../../public/hero.png";
import globe from '../../../public/globe.svg';
import next from '../../../public/next.svg';

export default function Gallery() {
  const items = [
    { title: "Hero", image: hero, href: "#" },
    { title: "Image 2", image: globe, href: "#" },
    { title: "Image 3", image: next, href: "#" },
    { title: "Image 4", image: "/images/img4.jpg", href: "#" },
    { title: "Image 5", image: "/images/img5.jpg", href: "#" },
    { title: "Image 6", image: "/images/img6.jpg", href: "#" },
  ];

  return (
    <section className="bg-[#1b1b1f] text-white px-4 sm:px-6 xl:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Gallery</h2>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="break-inside-avoid block rounded-lg overflow-hidden border border-[#333] hover:border-[#b84a39] transition-all"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 bg-[#2c2c2c]">
                <h3 className="text-sm font-semibold hover:text-[#b84a39] transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <a
            href="/gallery"
            className="inline-block border border-white text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
          >
            Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
