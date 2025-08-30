export default function Learning(){
    const tutorials = [
        {
            title: "",
            level: "",
            image: "",
            href: "",
        },
        {
            title: "",
            level: "",
            image: "",
            href: "",
        },
        {
            title: "",
            level: "",
            image: "",
            href: "",
        },
    ]
    const talks = [
        {
                  title: "Carlos the COW: Why There Is Nothing Civil About War",
                  speaker: "David Vicknair",
                  image: "/talks/carlos.jpg",
                  href: "/talks/carlos",
        },
        {

        },
        {
            
        }
    ]
      const content = [

    { title: "Carbon Tetraxide", image: "/content/carbon.jpg", href: "/content/carbon" },
    { title: "", image: "", href: "" },
    { title: "", image: "", href: "" },
    { title: "", image: "", href: "" },
  ];

  return (
    <section className="bg-[#1b1b1f] text-white px-4 sm:px-6 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
            {/* Tutorials */}
            <div>
                <h2 className="text-xs mb-8 text-left">Tutorials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {tutorials.map((item, i) => (
                        <a key={i} href={item.href} className="group border border-[#333] rounded-lg overflow-hiden hover:border-[#b84a39] transition-all">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-101 transition-transform duration-300"/>
                            <div className="p-4 bg-[#2c2c2c]">
                                <span className="text-xs uppercase text-[#ff6a00] font-semibold">{item.level}</span>
                                <h3 className="mt-2 text-lg font-semibold group-hover:text-[#b84a39] transition-colors">{item.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-xs mb-8 text-left">Talks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {talks.map((item, i) => (
                        <a key={i} href={item.href} className="group border border-[#333] rounded-lg overflow-hiden hover:border-[#b84a39] transition-all">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-101 transition-transform duration-300"/>
                            <div className="p-4 bg-[#2c2c2c]">
                                <span className="text-xs uppercase text-[#ff6a00] font-semibold">{item.speaker}</span>
                                <h3 className="mt-2 text-lg font-semibold group-hover:text-[#b84a39] transition-colors">{item.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-xs mb-8 text-left">Content</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {content.map((item, i) => (
                        <a key={i} href={item.href} className="group border border-[#333] rounded-lg overflow-hiden hover:border-[#b84a39] transition-all">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                            <div className="p-4 bg-[#2c2c2c]">
                                <h3 className="mt-2 text-lg font-semibold group-hover:text-[#b84a39] transition-colors">{item.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}