interface TimelineItemProps {
  title: string;
  description: string;
  isActive?: boolean;
  delay?: string;
}

const TimelineItem = ({ title, description, isActive = false, delay = "0s" }: TimelineItemProps) => {
  return (
    <div 
      className="relative animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {/* Line */}
      <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
      
      {/* Dot */}
      <div className={`relative flex items-start space-x-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
        <div className={`w-3 h-3 rounded-full mt-2 ${
          isActive 
            ? 'bg-primary purple-glow animate-glow-pulse' 
            : 'bg-border'
        }`}></div>
        
        <div className="pb-8">
          <h3 className={`font-semibold ${isActive ? 'text-primary' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;