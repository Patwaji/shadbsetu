import { Zap, CheckCircle, Smile, Heart } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import TimelineItem from "@/components/TimelineItem";

const About = () => {
  return (
    <div className="min-h-screen pt-20 py-20 px-6 hindi-pattern">
      <div className="container mx-auto">
        
        {/* Mission Section */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient animate-fade-in">
            Our Mission
          </h1>
          <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl hover-glow">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              ShabdSetu is designed to make Hindi font conversion simple, accurate, and accessible to all. 
              We bridge the gap between traditional and modern Hindi text formats.
            </p>
            
            {/* Illustration */}
            <div className="floating-animation">
              <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-8">
                <span className="text-3xl font-bold text-primary-foreground">सेतु</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground">
              Building bridges between languages, one conversion at a time.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
            What Makes Us Special
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="staggered-fade-in-1">
              <FeatureCard
                title="Easy Conversion"
                description="Drag, drop, convert. It's that simple. No technical knowledge required."
                icon={<Zap className="w-12 h-12" />}
              />
            </div>
            <div className="staggered-fade-in-2">
              <FeatureCard
                title="Accurate Fonts"
                description="Precision-engineered algorithms ensure perfect font transformations every time."
                icon={<CheckCircle className="w-12 h-12" />}
              />
            </div>
            <div className="staggered-fade-in-3">
              <FeatureCard
                title="User Friendly"
                description="Designed with love for users who value simplicity and efficiency."
                icon={<Smile className="w-12 h-12" />}
              />
            </div>
          </div>
        </section>

        {/* Creator Section */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-3xl hover-glow">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center floating-animation">
              <span className="text-2xl font-bold text-primary-foreground">K</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-foreground animate-fade-in">
              Built with <Heart className="inline w-6 h-6 text-red-400 mx-1" /> by Krish
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 animate-fade-in">
              ShabdSetu was created with the vision of making Hindi text processing more accessible 
              and efficient for everyone working with Devanagari script.
            </p>
            
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10">
              <p className="text-foreground italic">
                "Every line of code was written with the hope of making someone's work a little easier, 
                a little faster, and a lot more enjoyable."
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Our Journey
          </h2>
          
          <div className="space-y-8">
            <TimelineItem
              title="Idea Born"
              description="Recognized the need for better Hindi font conversion tools"
              delay="0.1s"
            />
            <TimelineItem
              title="Development Started"
              description="Began building the core conversion algorithms and user interface"
              delay="0.2s"
            />
            <TimelineItem
              title="Launch"
              description="ShabdSetu goes live, ready to bridge languages worldwide"
              isActive={true}
              delay="0.3s"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="mt-20 text-center">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Looking Ahead</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision extends beyond just font conversion. We're working towards a future where 
              language barriers never limit communication, where every script and every font 
              can seamlessly transform to meet your needs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;