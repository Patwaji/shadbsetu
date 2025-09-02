import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import BenefitCard from "@/components/BenefitCard";
import ConversionAnimation from "@/components/ConversionAnimation";
import { FileText, Languages, Download, Shield, Zap, Target, Smile } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 hindi-pattern">
      {/* Hero Section */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
                Bridge the<br />Language Gap
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
                Convert and connect with ShabdSetu - your gateway to seamless Hindi text transformation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button asChild variant="hero" size="lg" className="px-8 py-4 hover-scale">
                  <Link to="/convert">Start Converting</Link>
                </Button>
                <Button asChild variant="glass" size="lg" className="px-8 py-4 hover-scale">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block delayed-fade-in">
              <ConversionAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="staggered-fade-in-1">
              <FeatureCard
                title="Font Conversion"
                description="Upload DOCX, PPTX, PDF files and convert KrutiDev into Unicode Mangal."
                icon={<FileText className="w-12 h-12" />}
              />
            </div>
            <div className="staggered-fade-in-2">
              <FeatureCard
                title="Text Translation"
                description="Translate English to Unicode Mangal Hindi instantly."
                icon={<Languages className="w-12 h-12" />}
              />
            </div>
            <div className="staggered-fade-in-3">
              <FeatureCard
                title="Download Ready"
                description="Export results as DOCX, PPTX, or PDF."
                icon={<Download className="w-12 h-12" />}
              />
            </div>
            <div className="staggered-fade-in-4">
              <FeatureCard
                title="Secure & Private"
                description="Your files are processed securely and never stored."
                icon={<Shield className="w-12 h-12" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ShabdSetu Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground animate-fade-in">
            Why Choose ShabdSetu?
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in">
            Experience the perfect blend of accuracy, speed, and simplicity
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <BenefitCard
              title="Accuracy"
              description="Precision-engineered algorithms ensure your conversions are perfect every time"
              delay="0.1s"
            />
            <BenefitCard
              title="Speed"
              description="Lightning-fast processing means your documents are ready in seconds"
              delay="0.2s"
            />
            <BenefitCard
              title="Simplicity"
              description="Intuitive interface makes complex conversions feel effortless"
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="gradient-strip absolute top-0 left-0"></div>
        <div className="container mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              Start Bridging Languages Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust ShabdSetu for their Hindi text conversion needs
            </p>
            <Button asChild variant="hero" size="lg" className="px-12 py-4 hover-scale">
              <Link to="/convert">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;