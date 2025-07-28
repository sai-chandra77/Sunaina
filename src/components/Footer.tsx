
import React from 'react';
import { Heart, Cake } from 'lucide-react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Cake className="w-6 h-6 text-birthday-deep-violet animate-float" />
          <Heart className="w-6 h-6 text-birthday-violet animate-sparkle" />
          <Cake className="w-6 h-6 text-birthday-deep-violet animate-float stagger-1" />
        </div>
        
        <div className="space-y-3">
          <p className="text-lg font-elegant text-foreground">
            Made by Your Friend
          </p>
          <p className="text-muted-foreground">
            {/* {currentDate} */}
            July 29, 2025
          </p>
          <p className="text-sm text-muted-foreground">
            "Thanks for everything😇.
            <p>Once again <b>Happy Birthday!</b>"</p> ✨
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="w-12 h-1 bg-gradient-to-r from-birthday-violet to-birthday-purple rounded-full"></div>
          <Cake className="w-8 h-8 text-birthday-deep-violet animate-sparkle" />
          <div className="w-12 h-1 bg-gradient-to-r from-birthday-purple to-birthday-deep-violet rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
