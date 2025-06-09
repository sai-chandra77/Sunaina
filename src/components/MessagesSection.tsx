
import React, { useState } from 'react';
import { MessageSquare, Heart, Star, Gift } from 'lucide-react';

const MessagesSection = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const messages = [
    {
      id: 1,
      icon: Heart,
      title: "From the Heart",
      preview: "A special message...",
      fullMessage: "Happy Birthday to someone who brings so much joy and laughter into every room! Your kindness, your smile, and your amazing spirit make the world a brighter place. I'm so grateful to have you in my life! 💕",
      color: "birthday-pink"
    },
    {
      id: 2,
      icon: Star,
      title: "Shining Bright",
      preview: "You're a star...",
      fullMessage: "Another year around the sun, and you just keep getting more amazing! Your energy is infectious, your dreams are inspiring, and your friendship means everything. Here's to another year of adventures! ⭐",
      color: "birthday-gold"
    },
    {
      id: 3,
      icon: Gift,
      title: "Special Wishes",
      preview: "Birthday magic...",
      fullMessage: "On your special day, I wish you all the happiness your heart can hold, all the success your mind can achieve, and all the love this world has to offer. You deserve every beautiful thing! 🎁",
      color: "birthday-purple"
    },
    {
      id: 4,
      icon: MessageSquare,
      title: "Memory Lane",
      preview: "Remember when...",
      fullMessage: "I love how we can laugh until our stomachs hurt, talk for hours about everything and nothing, and create memories that I'll treasure forever. Thank you for being such an incredible friend! 💌",
      color: "birthday-lavender"
    }
  ];

  const toggleCard = (cardId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-birthday-purple animate-float" />
            <h2 className="text-4xl md:text-5xl font-elegant birthday-text-gradient">
              Birthday Wishes
            </h2>
            <MessageSquare className="w-8 h-8 text-birthday-purple animate-float stagger-1" />
          </div>
          <p className="text-xl text-muted-foreground">
            Heartfelt messages just for you ✨
          </p>
        </div>

        {/* Messages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => {
            const IconComponent = message.icon;
            const isFlipped = flippedCards.has(message.id);
            
            return (
              <div
                key={message.id}
                className="relative h-64 perspective-1000 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleCard(message.id)}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl glass-effect border border-white/20 p-8 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
                    <div className={`w-16 h-16 rounded-full bg-${message.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 text-${message.color} animate-float`} />
                    </div>
                    <h3 className="text-2xl font-elegant mb-2 text-foreground">
                      {message.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {message.preview}
                    </p>
                    <div className="text-sm text-primary font-medium flex items-center gap-2">
                      Click to read
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl glass-effect border border-white/20 p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <IconComponent className={`w-8 h-8 text-${message.color} mx-auto mb-4 animate-sparkle`} />
                      <p className="text-foreground leading-relaxed font-elegant">
                        {message.fullMessage}
                      </p>
                      <div className="mt-6 text-sm text-primary font-medium flex items-center justify-center gap-2">
                        Click to flip back
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special message */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl glass-effect border border-white/20 animate-bounce-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-birthday-pink animate-sparkle" />
              <Star className="w-6 h-6 text-birthday-gold animate-sparkle stagger-1" />
              <Heart className="w-6 h-6 text-birthday-pink animate-sparkle stagger-2" />
            </div>
            <p className="text-xl font-elegant text-foreground max-w-2xl">
              "Age is merely the number of years the world has been enjoying you. 
              Here's to many more years of your wonderful presence in our lives!"
            </p>
            <div className="mt-4 text-primary font-medium">
              With love and best wishes ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesSection;
