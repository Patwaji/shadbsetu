import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, Languages, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "No text to translate",
        description: "Please enter some text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    
    // Simulate translation process
    setTimeout(() => {
      // Mock translation - in real app, this would call an API
      const mockTranslation = "यहाँ आपका अनुवाद दिखेगा। यह एक नमूना अनुवाद है।";
      setTranslatedText(mockTranslation);
      setIsTranslating(false);
      toast({
        title: "Translation Complete!",
        description: "Your text has been translated to Unicode Hindi.",
      });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    toast({
      title: "Copied!",
      description: "Translation copied to clipboard.",
    });
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([translatedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "translation.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download Started",
      description: "Your translation is being downloaded.",
    });
  };

  return (
    <div className="min-h-screen pt-20 py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 staggered-fade-in-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Text Translator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridge languages seamlessly with instant English to Unicode Hindi translation
          </p>
          
          {/* Translation Flow Illustration */}
          <div className="relative w-full max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-8">
              <div className="staggered-fade-in-2">
                <div className="glass-card p-6 rounded-3xl hover-scale purple-glow">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-400 font-bold text-lg">A</span>
                  </div>
                  <p className="text-sm text-muted-foreground">English</p>
                </div>
              </div>
              
              <div className="staggered-fade-in-3">
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-primary animate-glow-pulse" />
                  <Sparkles className="w-4 h-4 text-secondary absolute -top-2 -right-2 animate-float" />
                </div>
              </div>
              
              <div className="staggered-fade-in-4">
                <div className="glass-card p-6 rounded-3xl hover-scale">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-lg">अ</span>
                  </div>
                  <p className="text-sm text-primary">Hindi Unicode</p>
                </div>
              </div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-4 left-16 floating-animation opacity-50">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="absolute -bottom-4 right-20 floating-animation opacity-30" style={{ animationDelay: '2s' }}>
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Translation Interface */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Input Section */}
          <div className="staggered-fade-in-2">
            <div className="glass-card p-8 rounded-4xl purple-glow hover:glow-intense transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 font-bold">EN</span>
                </div>
                <label className="text-2xl font-bold text-foreground">
                  English Text
                </label>
              </div>
              
              <Textarea
                placeholder="Type or paste your English text here for instant translation..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-48 glass-card border-primary/30 text-foreground placeholder:text-muted-foreground resize-none text-lg hover:border-primary/50 transition-colors focus:border-primary/70"
              />
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {inputText.length} characters
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Languages className="w-4 h-4" />
                  <span className="text-sm">English Input</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="staggered-fade-in-3">
            <div className="glass-card p-8 rounded-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">हि</span>
                </div>
                <label className="text-2xl font-bold text-foreground">
                  Unicode Hindi Translation
                </label>
              </div>
              
              <div className="min-h-48 p-6 glass-card rounded-2xl border border-primary/30 mb-6 hover:border-primary/50 transition-colors">
                {translatedText ? (
                  <p className="text-foreground text-xl leading-relaxed font-medium">
                    {translatedText}
                  </p>
                ) : (
                  <p className="text-muted-foreground text-lg italic">
                    Your Hindi translation will appear here...
                  </p>
                )}
              </div>
              
              {translatedText && (
                <div className="flex gap-4 justify-center animate-fade-in">
                  <Button variant="gradient" onClick={handleCopy} className="px-6">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Text
                  </Button>
                  <Button variant="glass" onClick={handleDownload} className="px-6">
                    <Download className="w-4 h-4 mr-2" />
                    Download TXT
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Translate Button */}
        <div className="text-center mb-16 staggered-fade-in-4">
          <div className="relative inline-block">
            <Button
              variant="hero"
              size="lg"
              onClick={handleTranslate}
              disabled={isTranslating || !inputText.trim()}
              className="px-16 py-6 text-xl font-bold relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isTranslating ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Translating...
                  </>
                ) : (
                  <>
                    <Languages className="w-5 h-5" />
                    Translate to Unicode Hindi
                  </>
                )}
              </span>
              {isTranslating && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 animate-pulse"></div>
              )}
            </Button>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-30 scale-110 -z-10"></div>
          </div>
          
          {isTranslating && (
            <div className="mt-6 animate-fade-in">
              <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-gradient-primary animate-pulse"></div>
              </div>
              <p className="text-muted-foreground mt-2">Processing your text...</p>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="staggered-fade-in-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Translator?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience fast, accurate, and reliable English to Hindi translation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl hover-scale purple-glow text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Instant Translation</h3>
              <p className="text-muted-foreground">
                Get your translations in seconds with our optimized processing engine
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover-scale purple-glow text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Languages className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Unicode Support</h3>
              <p className="text-muted-foreground">
                Perfect Unicode Hindi output compatible with all modern systems
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-3xl hover-scale purple-glow text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Copy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Easy Export</h3>
              <p className="text-muted-foreground">
                Copy to clipboard or download as text file for immediate use
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;