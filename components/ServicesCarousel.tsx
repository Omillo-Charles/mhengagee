export default function ServicesCarousel() {
  const services = [
    "Cinematography",
    "Brand Identity",
    "Creative Direction",
    "Commercial Photography",
    "Motion Graphics",
    "Post Production",
    "Event Coverage",
    "Strategy",
  ];

  // We duplicate the array to ensure the seamless loop works perfectly
  // The animation translates the container by -50%, so it needs to contain two full sets
  const carouselItems = [...services, ...services];

  return (
    <div className="relative flex w-full overflow-hidden border-y border-white/10 bg-white/5 py-4 backdrop-blur-md">
      <div className="flex w-max animate-marquee items-center gap-16 pr-16">
        {carouselItems.map((service, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="text-sm font-bold tracking-[0.2em] text-white/80 uppercase whitespace-nowrap">
              {service}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}
