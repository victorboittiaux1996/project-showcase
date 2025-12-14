import { Button } from "@/components/ui/button";

const GlassNavbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="glass-nav rounded-full px-6 py-3 flex items-center gap-8">
        <div className="flex items-center gap-1">
          <span className="font-serif italic text-foreground text-xl tracking-tight">
            Lov
          </span>
          <span className="font-sans font-medium text-foreground text-xl">
            able
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
            Process
          </a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
            Docs
          </a>
          <a href="#" className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium">
            Pricing
          </a>
        </div>
        
        <Button variant="hero" size="sm" className="rounded-full px-5 py-2 h-auto">
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default GlassNavbar;
