import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [
  {
    id: "1",
    src: gallery1,
    alt: "Showroom Furniture",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "2",
    src: gallery2,
    alt: "Detail Craftsmanship",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "3",
    src: gallery3,
    alt: "Living Room Setup",
    className: "md:col-span-1 md:row-span-1",
  },
];

export const Gallery = () => {
  return (
    <section id="galeri" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            <span className="text-primary">Galeri</span> Showroom
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat koleksi furniture kami yang dipajang di showroom
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${image.className}`}
            >
              <div className="aspect-video md:aspect-auto md:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Kunjungi showroom kami untuk melihat koleksi lengkap furniture berkualitas
          </p>
        </motion.div>
      </div>
    </section>
  );
};
