import { useState } from "react";
import { ArrowUp, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">
      {/* Headline */}
      <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h1 className="font-serif text-6xl md:text-8xl text-foreground mb-4 tracking-tight">
          <span className="italic">Lov</span>able
        </h1>
        <p className="font-sans text-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Turn Google AI Studio & Base 44 projects into instant shareable apps.
        </p>
      </div>

      {/* Value Proposition */}
      <p className="text-foreground/80 text-base md:text-lg mb-10 animate-fade-in text-center max-w-xl" style={{ animationDelay: "0.4s" }}>
        Making projects accessible to everyone with interactive visualization.
      </p>

      {/* Main Glass Card - Input */}
      <div 
        className="glass-card rounded-2xl p-2 w-full max-w-2xl animate-scale-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex items-center gap-3 bg-card rounded-xl p-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Paste your Google AI Studio or Base 44 link here..."
              className="w-full bg-transparent text-card-foreground placeholder:text-muted-foreground text-base outline-none font-sans pr-20"
            />
            {/* Platform Icons */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-muted/50 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
              <div className="w-6 h-6 rounded-md bg-muted/50 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <Button variant="icon" size="icon-lg" className="shrink-0">
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Supported Formats */}
      <p className="text-foreground/60 text-sm mt-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        Supports AI Studio prompts, Base 44 exports, and more
      </p>
    </section>
  );
};

export default HeroSection;
