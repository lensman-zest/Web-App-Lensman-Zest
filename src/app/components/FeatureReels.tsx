export default function FeatureReels(){
    return (
        <section className="bg-[#1B1B1F] text-white px-4 sm:px-6 xl:px-12 py-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
      Customer Reels
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {[
        { label: "Film/TV", image: "/reels/film.jpg", href: "/reels/film" },
        { label: "Games/VR", image: "/reels/games.jpg", href: "/reels/games" },
        { label: "Student", image: "/reels/student.jpg", href: "/reels/student" },
      ].map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="group relative rounded-lg overflow-hidden border border-[#333] hover:border-[#B84A39] transition-all"
        >
          <img
            src={item.image}
            alt={item.label}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 bg-[#2C2C2C]">
            <h3 className="text-lg font-semibold group-hover:text-[#B84A39] transition-colors">
              {item.label}
            </h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

    )
}