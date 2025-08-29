export default function Gallery() {
  const items = [
    {title: "", image: "", href:""},
    {title: "", image: "", href:""},
    {title: "", image: "", href:""},
    {title: "", image: "", href:""},
    {title: "", image: "", href:""}
  ];
  return (
    <section className="bg-[#1b1b1f] text-white px-4 sm:px-6 xl:px-12 py-16">
      <div className="maz-w-7xl mx-auto">
        <h2 className="columns-1 sm:columns-2 xl:columns-3 gap-4 space-y-4">Gallery </h2>
          {items.map((item, i) => (
            <a key={i} href={item.href} className="break-inside-avoid block rounded-lg overflow-hidden border border=[#333] hover:borer-[#b84a39] transition-all">
              <img src={item.image} alt={item.title} className="w-full object-cover hover:scale-105 transition-transform duration-300"/>
              <div className="p-3 bg-[#2c2c2c]">
                <h3 className="text-sm font-semibold hover:text-[#b84a39] transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
      </div>
      <div className="mt-12 text-center">
        <a href="/gallery" className="inline-block border border-white text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors">Full Gallery</a>
      </div>
    </section>
  )
}