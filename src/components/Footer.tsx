import { MessageCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold">AB</span>
            </div>
            <div>
              <h3 className="font-serif font-bold text-foreground">Ahmad Baidowi</h3>
              <p className="text-xs text-muted-foreground">Toko Perabotan</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Toko Perabotan Ahmad Baidowi. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Bondowoso, Jawa Timur, Indonesia
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6282142638111?text=Halo%20Pak%20Ahmad%20Baidowi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+62 821-4263-8111</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
