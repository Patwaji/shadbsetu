import { FileText, ArrowRight } from "lucide-react";

const ConversionAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* PDF File */}
      <div className="absolute left-0 top-0 staggered-fade-in-1">
        <div className="glass-card p-4 rounded-2xl hover-scale">
          <FileText className="w-8 h-8 text-red-400" />
          <p className="text-xs mt-2 text-muted-foreground">PDF</p>
        </div>
      </div>

      {/* Arrow 1 */}
      <div className="absolute left-20 top-3 staggered-fade-in-2">
        <ArrowRight className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* DOCX File */}
      <div className="absolute left-32 top-0 staggered-fade-in-3">
        <div className="glass-card p-4 rounded-2xl hover-scale">
          <FileText className="w-8 h-8 text-blue-400" />
          <p className="text-xs mt-2 text-muted-foreground">DOCX</p>
        </div>
      </div>

      {/* Arrow 2 */}
      <div className="absolute left-52 top-3 staggered-fade-in-4">
        <ArrowRight className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* Hindi File */}
      <div className="absolute left-64 top-0 delayed-fade-in">
        <div className="glass-card p-4 rounded-2xl hover-scale purple-glow">
          <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">हि</span>
          </div>
          <p className="text-xs mt-2 text-primary">Hindi</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 left-8 floating-animation opacity-50">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
      <div className="absolute -bottom-4 left-40 floating-animation opacity-30" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-secondary rounded-full"></div>
      </div>
      <div className="absolute top-8 left-60 floating-animation opacity-40" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
    </div>
  );
};

export default ConversionAnimation;