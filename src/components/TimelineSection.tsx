
import React, { useState } from 'react';
import { Clock, Star, Camera, Music, MapPin } from 'lucide-react';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const timelineEvents = [
    {
      year: 2020,
      title: "The Beginning",
      description: "Where our beautiful friendship started to bloom",
      icon: Star,
      color: "birthday-violet",
      details: "Every great story has a beginning, and ours started with a simple hello that turned into endless conversations and unforgettable memories."
    },
    {
      year: 2021,
      title: "Adventures Together",
      description: "Exploring new places and creating memories",
      icon: MapPin,
      color: "birthday-purple",
      details: "From spontaneous road trips to quiet coffee shop conversations, we discovered that the best adventures are the ones shared with amazing friends."
    },
    {
      year: 2022,
      title: "Captured Moments",
      description: "A year full of photos and laughter",
      icon: Camera,
      color: "birthday-deep-violet",
      details: "This was the year we documented everything - every silly face, every celebration, every quiet moment that made our friendship stronger."
    },
    {
      year: 2023,
      title: "Musical Memories",
      description: "Songs that became our soundtrack",
      icon: Music,
      color: "birthday-lavender",
      details: "We found our favorite songs, went to concerts, and created playlists that still make us smile every time we hear them."
    },
    {
      year: 2024,
      title: "Today & Beyond",
      description: "Celebrating another year of friendship",
      icon: Clock,
      color: "birthday-violet",
      details: "Here we are today, celebrating not just your birthday, but all the incredible moments that brought us here and all the amazing ones still to come."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-birthday-violet animate-float" />
            <h2 className="text-4xl md:text-5xl font-elegant birthday-text-gradient">
              Memory Timeline
            </h2>
            <Clock className="w-8 h-8 text-birthday-violet animate-float stagger-1" />
          </div>
          <p className="text-xl text-muted-foreground">
            A journey through our beautiful friendship ✨
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full birthday-gradient rounded-full"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeYear === event.year;
              
              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div
                      className={`glass-effect rounded-3xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:scale-105 ${
                        isActive ? 'scale-105 shadow-2xl' : ''
                      } ${isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                      style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
                      onClick={() => setActiveYear(isActive ? null : event.year)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {!isLeft && (
                          <div className={`w-12 h-12 rounded-full bg-${event.color}/20 flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 text-${event.color} animate-sparkle`} />
                          </div>
                        )}
                        <div className={isLeft ? 'text-right' : 'text-left'}>
                          <h3 className="text-xl font-elegant text-foreground">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        {isLeft && (
                          <div className={`w-12 h-12 rounded-full bg-${event.color}/20 flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 text-${event.color} animate-sparkle`} />
                          </div>
                        )}
                      </div>
                      
                      {isActive && (
                        <div className="mt-4 pt-4 border-t border-white/10 animate-slide-up">
                          <p className="text-foreground font-elegant leading-relaxed">
                            {event.details}
                          </p>
                        </div>
                      )}
                      
                      <div className="mt-3 text-xs text-primary font-medium">
                        Click to {isActive ? 'collapse' : 'explore'}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full birthday-gradient flex items-center justify-center shadow-lg ${
                      isActive ? 'scale-125' : ''
                    } transition-transform duration-300`}>
                      <div className="text-xs font-bold text-white">{event.year}</div>
                    </div>
                  </div>

                  {/* Empty space for layout */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl glass-effect border border-white/20 animate-bounce-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-6 h-6 text-birthday-violet animate-sparkle" />
              <Clock className="w-6 h-6 text-birthday-purple animate-sparkle stagger-1" />
              <Star className="w-6 h-6 text-birthday-violet animate-sparkle stagger-2" />
            </div>
            <p className="text-xl font-elegant text-foreground max-w-2xl">
              "Time flies when you're having fun, but memories last forever. 
              Here's to all the moments we've shared and all the ones yet to come!"
            </p>
            <div className="mt-4 text-primary font-medium">
              Happy Birthday! 🎉
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
