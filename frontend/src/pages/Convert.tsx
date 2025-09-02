import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, File, Download, FileText, ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Convert = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputFont, setInputFont] = useState<string>("");
  const [outputFont, setOutputFont] = useState<string>("");
  const [outputFormat, setOutputFormat] = useState<string>("");
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile || !inputFont || !outputFont || !outputFormat) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select a file.",
        variant: "destructive",
      });
      return;
    }

    setIsConverting(true);
    
    // Simulate conversion process
    setTimeout(() => {
      setConvertedFile(selectedFile.name.replace(/\.[^/.]+$/, `_converted.${outputFormat.toLowerCase()}`));
      setIsConverting(false);
      toast({
        title: "Conversion Complete!",
        description: "Your file has been successfully converted.",
      });
    }, 3000);
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
            Font Converter
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your documents between different Hindi fonts with precision and ease
          </p>
          
          {/* Conversion Flow Illustration */}
          <div className="relative w-full max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-8">
              <div className="staggered-fade-in-2">
                <div className="glass-card p-6 rounded-3xl hover-scale purple-glow">
                  <FileText className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Original</p>
                </div>
              </div>
              
              <div className="staggered-fade-in-3">
                <ArrowRight className="w-8 h-8 text-primary animate-glow-pulse" />
              </div>
              
              <div className="staggered-fade-in-4">
                <div className="glass-card p-6 rounded-3xl hover-scale">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-lg">अ</span>
                  </div>
                  <p className="text-sm text-primary">Converted</p>
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

        {/* Upload Section */}
        <div className="staggered-fade-in-2 mb-12">
          <div className="glass-card p-10 rounded-4xl purple-glow hover:glow-intense transition-all duration-500">
            <div
              className="border-2 border-dashed border-primary/40 rounded-3xl p-16 text-center hover:border-primary/70 transition-all duration-300 hover:bg-primary/5"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="mb-6">
                <div className="relative inline-block">
                  <Upload className="w-20 h-20 mx-auto text-primary animate-float" />
                  <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Drag & Drop your file here
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Upload DOCX, PPTX, or PDF files for instant font conversion
              </p>
              
              <Button
                variant="hero"
                size="lg"
                onClick={() => document.getElementById('file-upload')?.click()}
                className="px-8 py-4 text-lg"
              >
                Browse Files
              </Button>
              
              <input
                id="file-upload"
                type="file"
                accept=".docx,.pptx,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {selectedFile && (
              <div className="mt-8 p-6 glass-card rounded-2xl flex items-center gap-6 animate-fade-in border border-primary/20">
                <div className="relative">
                  <File className="w-10 h-10 text-primary" />
                  <div className="absolute -top-1 -right-1">
                    <Check className="w-4 h-4 text-green-400 bg-green-400/20 rounded-full p-0.5" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-lg">{selectedFile.name}</p>
                  <p className="text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • Ready for conversion
                  </p>
                </div>
              </div>
             )}
          </div>
        </div>

        {/* Configuration Section */}
        <div className="staggered-fade-in-3 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Configure Your Conversion
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</span>
                Input Font
              </label>
              <Select value={inputFont} onValueChange={setInputFont}>
                <SelectTrigger className="glass-card border-primary/30 hover:border-primary/50 transition-colors h-14 text-lg">
                  <SelectValue placeholder="Select input font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="krutidev">KrutiDev</SelectItem>
                  <SelectItem value="unicode">Unicode Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</span>
                Output Font
              </label>
              <Select value={outputFont} onValueChange={setOutputFont}>
                <SelectTrigger className="glass-card border-primary/30 hover:border-primary/50 transition-colors h-14 text-lg">
                  <SelectValue placeholder="Select output font" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mangal">Mangal</SelectItem>
                  <SelectItem value="unicode">Unicode</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</span>
                Format
              </label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger className="glass-card border-primary/30 hover:border-primary/50 transition-colors h-14 text-lg">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DOCX">DOCX</SelectItem>
                  <SelectItem value="PPTX">PPTX</SelectItem>
                  <SelectItem value="PDF">PDF</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <div className="text-center mb-16 staggered-fade-in-4">
          <div className="relative inline-block">
            <Button
              variant="hero"
              size="lg"
              onClick={handleConvert}
              disabled={isConverting}
              className="px-16 py-6 text-xl font-bold relative overflow-hidden"
            >
              <span className="relative z-10">
                {isConverting ? "Converting..." : "Convert Now"}
              </span>
              {isConverting && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 animate-pulse"></div>
              )}
            </Button>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-30 scale-110 -z-10"></div>
          </div>
          
          {isConverting && (
            <div className="mt-6 animate-fade-in">
              <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-gradient-primary animate-pulse"></div>
              </div>
              <p className="text-muted-foreground mt-2">Processing your document...</p>
            </div>
          )}
        </div>

        {/* Result Section */}
        {convertedFile && (
          <div className="glass-card p-10 rounded-4xl purple-glow animate-fade-in">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                <Check className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">Conversion Complete!</h3>
              <p className="text-lg text-muted-foreground">Your document has been successfully converted</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between p-6 glass-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <File className="w-12 h-12 text-primary" />
                    <div className="absolute -top-2 -right-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-xl">{convertedFile}</p>
                    <p className="text-muted-foreground">Ready for download • Converted successfully</p>
                  </div>
                </div>
                
                <Button variant="hero" size="lg" className="px-8">
                  <Download className="w-5 h-5 mr-3" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Convert;