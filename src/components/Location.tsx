import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export const Location = () => {
  const handleOpenMaps = () => {
    window.open("https://maps.app.goo.gl/SMyb9yrsNUtJNnV18?g_st=aw", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+6282142638111";
  };

  return (
    <section id="lokasi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Lokasi & <span className="text-primary">Kontak</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi showroom kami atau hubungi untuk informasi lebih lanjut
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                    Alamat Showroom
                  </h3>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    5QH5+5J9, Jl. Raya Wringin, Wringin Ps., Wringin,
                    <br />
                    Kec. Wringin, Kabupaten Bondowoso,
                    <br />
                    Jawa Timur 68252
                  </address>
                  <Button
                    variant="link"
                    onClick={handleOpenMaps}
                    className="text-primary hover:text-primary/90 p-0 h-auto mt-2"
                  >
                    Buka di Google Maps →
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                    Hubungi Kami
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">WhatsApp:</span>{" "}
                    +62 821-4263-8111
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ahmad Baidowi (Pemilik)
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCall}
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Telepon Sekarang
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                    Jam Operasional
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Senin - Sabtu: 08.00 - 17.00 WIB</p>
                    <p>Minggu: 08.00 - 14.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.8956877764373!2d113.75904411701!3d-7.871944699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6dd25e95ad5bb%3A0x4f4d2c2ef0e0e0e0!2s5QH5%2B5J9%2C%20Wringin%20Ps.%2C%20Wringin%2C%20Kec.%20Wringin%2C%20Kabupaten%20Bondowoso%2C%20Jawa%20Timur%2068252!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Toko Perabotan Ahmad Baidowi"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
