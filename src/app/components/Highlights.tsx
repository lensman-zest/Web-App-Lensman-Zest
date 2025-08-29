export default function Highlights() {
    const items = [
        {
            title: "Houdini 21 keynote",
            subtitle: "live on youtube",
            image: "",
            href: "/events/houdini21",
        },
        {
            title: "",
            subtitle: "",
            image: "",
            href: "",
        },
        {
            title: "",
            subtitle: "",
            image: "",
            href: "",
        }
    ]
    return (
        <section className="bg-[#1b1b1f] text-white px-4 sm:px-6 xl:px-12 py-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <a key={i} href={item.href} className="group relative rounded-lg overflow-hidden border border-[#333] hover:border-[#b84a39] transition-all">
                            <img src="" alt="" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duraation-300"/>
                            <div className="p-4 bg-[#2c2c2c]">
                                <h3 className="text-lg font-semibold group-hover:text-[#b84a39] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#a8a8a8] mt-1">{item.subtitle}</p>
                            </div>
                        </a>
                    ))}
                </div>
                 {/* Optional CTA */}

    <div className="mt-12 text-center">

     <a

      href="/news"

      className="inline-block border border-white text-white px-6 py-3 rounded-md text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors"

     >

      More News

     </a>

    </div>
            </div>

        </section>
    )
}