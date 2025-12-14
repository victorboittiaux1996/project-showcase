import { Copy, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ProjectCardProps {
  title: string;
  testers: number;
  isVerified: boolean;
  isLive: boolean;
  delay?: number;
}

const ProjectCard = ({ title, testers, isVerified, isLive, delay = 0 }: ProjectCardProps) => {
  const handleCopyLink = () => {
    toast({
      title: "Link copied!",
      description: `Share link for "${title}" has been copied to clipboard.`,
    });
  };

  return (
    <div 
      className="glass-card-subtle rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Live Status Indicator */}
          <div className="relative flex items-center justify-center w-3 h-3">
            {isLive && (
              <>
                <span className="absolute w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75" />
                <span className="relative w-2 h-2 bg-emerald-500 rounded-full" />
              </>
            )}
            {!isLive && (
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
            )}
          </div>
          <span className="text-sm text-card-foreground/70 font-medium">
            {isLive ? "Live" : "Offline"}
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-muted-foreground hover:text-card-foreground"
          onClick={handleCopyLink}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      
      <h3 className="font-serif text-xl text-card-foreground mb-4">{title}</h3>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Users className="w-4 h-4" />
          <span className="text-sm">{testers} Testers</span>
        </div>
        
        {isVerified && (
          <div className="flex items-center gap-1.5 text-primary">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
