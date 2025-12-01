import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart } from "lucide-react";
import chairImage from "@/assets/product-chair.jpg";
import tableImage from "@/assets/product-table.jpg";
import cabinetImage from "@/assets/product-cabinet.jpg";
import decorImage from "@/assets/product-decor.jpg";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Kursi Makan Klasik",
    category: "Kursi",
    description: "Kursi makan dengan desain klasik dan bantalan empuk",
    price: "Rp 750.000",
    image: chairImage,
  },
  {
    id: "2",
    name: "Kursi Teras Minimalis",
    category: "Kursi",
    description: "Kursi santai untuk teras rumah Anda",
    price: "Rp 650.000",
    image: chairImage,
  },
  {
    id: "3",
    name: "Meja Makan 6 Kursi",
    category: "Meja",
    description: "Set meja makan keluarga ukuran besar",
    price: "Rp 3.500.000",
    image: tableImage,
  },
  {
    id: "4",
    name: "Meja Kerja Minimalis",
    category: "Meja",
    description: "Meja kerja dengan desain modern dan laci",
    price: "Rp 1.200.000",
    image: tableImage,
  },
  {
    id: "5",
    name: "Lemari Pakaian 3 Pintu",
    category: "Lemari",
    description: "Lemari pakaian dengan cermin dan laci",
    price: "Rp 2.800.000",
    image: cabinetImage,
  },
  {
    id: "6",
    name: "Lemari Buku Modern",
    category: "Lemari",
    description: "Lemari buku dengan rak terbuka",
    price: "Rp 1.500.000",
    image: cabinetImage,
  },
  {
    id: "7",
    name: "Rak Dinding Dekoratif",
    category: "Dekorasi",
    description: "Rak dinding untuk display dekorasi rumah",
    price: "Rp 350.000",
    image: decorImage,
  },
  {
    id: "8",
    name: "Set Hiasan Dinding",
    category: "Dekorasi",
    description: "Hiasan dinding kayu dengan motif etnik",
    price: "Rp 450.000",
    image: decorImage,
  },
];

const categories = ["Semua", "Kursi", "Meja", "Lemari", "Dekorasi"];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(
      `Halo Pak Ahmad Baidowi, saya tertarik dengan ${productName}. Mohon informasi lebih lanjut.`
    );
    window.open(`https://wa.me/6282142638111?text=${message}`, "_blank");
  };

  return (
    <section id="produk" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Koleksi <span className="text-primary">Produk Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan furniture berkualitas untuk setiap ruangan di rumah Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full max-w-3xl"
          >
            <TabsList className="grid w-full grid-cols-5 h-auto bg-muted/50 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift border-border/50 bg-card h-full group">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground mt-2 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => handleOrder(product.name)}
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Pesan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
