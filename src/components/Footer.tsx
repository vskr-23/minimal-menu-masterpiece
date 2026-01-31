import logo from "@/assets/logo-generated.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-card/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Yummy! Bites" className="w-12 h-12" />
          <div>
            <p className="font-serif font-semibold text-lg">Yummy! Bites</p>
            <p className="text-sm text-muted-foreground">Since 2020</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="badge-zomato text-xs hover:opacity-90 transition-opacity"
          >
            Order on Zomato
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Yummy! Bites. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
