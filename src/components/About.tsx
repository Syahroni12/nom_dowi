import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Users, Heart } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

export const About = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6282142638111?text=Halo%20Pak%20Ahmad%20Baidowi",
      "_blank"
    );
  };

  return (
    <section id="tentang" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Tentang <span className="text-primary">Pemilik</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedikasi kami dalam menghadirkan furniture terbaik untuk rumah Anda
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ownerPhoto}
                  alt="Ahmad Baidowi - Pemilik Toko"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1">
                    Ahmad Baidowi
                  </h3>
                  <p className="text-white/90">Pemilik & Founder</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Melayani dengan Sepenuh Hati
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dengan pengalaman lebih dari 10 tahun di bidang furniture dan perabotan
                  rumah tangga, saya berkomitmen untuk menghadirkan produk berkualitas
                  tinggi dengan harga yang terjangkau untuk masyarakat Bondowoso dan
                  sekitarnya.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Setiap produk yang kami jual telah melalui seleksi ketat untuk
                  memastikan kualitas terbaik. Kepuasan pelanggan adalah prioritas utama
                  kami, dan kami selalu siap memberikan konsultasi gratis untuk
                  kebutuhan furniture rumah Anda.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-xs text-muted-foreground">Tahun Berpengalaman</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Pelanggan Puas</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Dedikasi</div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Kontak:</span> +62 821-4263-8111
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
