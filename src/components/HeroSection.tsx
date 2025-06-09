
import React, { useState, useEffect } from 'react';
import { Cake, Heart, Star } from 'lucide-react';

const HeroSection = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const birthdayMessages = [
    "Another year of amazing adventures!",
    "Your special day is here!",
    "Time to celebrate YOU!",
    "Making wishes come true!"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % birthdayMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Floating decorations */}
      <div className="absolute top-20 left-10 animate-float">
        <Star className="w-8 h-8 text-birthday-violet animate-sparkle" />
      </div>
      <div className="absolute top-32 right-16 animate-float stagger-1">
        <Heart className="w-6 h-6 text-birthday-violet animate-sparkle stagger-1" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float stagger-2">
        <Cake className="w-10 h-10 text-birthday-purple animate-sparkle stagger-2" />
      </div>
      <div className="absolute top-40 left-1/3 animate-float stagger-3">
        <Heart className="w-4 h-4 text-birthday-lavender animate-sparkle stagger-3" />
      </div>
      <div className="absolute bottom-40 right-1/4 animate-float stagger-4">
        <Star className="w-6 h-6 text-birthday-violet animate-sparkle stagger-4" />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        {/* Main birthday message */}
        <div className={`transition-all duration-1000 ${animateText ? 'animate-bounce-in' : 'opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl font-birthday birthday-text-gradient mb-6">
            Happy Birthday!
          </h1 >
          <h1 className="text-6xl md:text-8xl font-birthday Sunaina mb-6" >Sunaina💜</h1>
          <div className="flex justify-center items-center gap-4 mb-8">
            <Cake className="w-12 h-12 text-birthday-deep-violet animate-float" />
            <span className="text-4xl">🎉</span>
            <Heart className="w-12 h-12 text-birthday-violet animate-float stagger-1" />
          </div>
        </div>

        {/* Animated subtitle */}
        <div className={`transition-all duration-1000 delay-300 ${animateText ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-elegant">
            {birthdayMessages[currentMessage]}
          </p>
        </div>

        {/* Birthday cake illustration */}
        <div className={`transition-all duration-1000 delay-500 ${animateText ? 'animate-bounce-in' : 'opacity-0'}`}>
          <div className="inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 birthday-gradient rounded-3xl mx-auto mb-8 relative overflow-hidden glass-effect">
              <div className="absolute inset-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Cake className="w-16 h-16 md:w-20 md:h-20 text-white animate-float" />
              </div>
              {/* Sparkles around cake */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-birthday-deep-violet rounded-full animate-sparkle"></div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-birthday-violet rounded-full animate-sparkle stagger-1"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-birthday-purple rounded-full animate-sparkle stagger-2"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-birthday-lavender rounded-full animate-sparkle stagger-3"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`transition-all duration-1000 delay-700 ${animateText ? 'animate-slide-up' : 'opacity-0'}`}>
          <p className="text-lg text-muted-foreground mb-8">
            Scroll down to see all the special memories and wishes! ✨
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
