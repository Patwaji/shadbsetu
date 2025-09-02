import { CheckCircle } from "lucide-react";

interface BenefitProps {
  title: string;
  description: string;
  delay?: string;
}

const BenefitCard = ({ title, description, delay = "0s" }: BenefitProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-2xl hover-glow hover-scale text-center group"
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <CheckCircle className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;