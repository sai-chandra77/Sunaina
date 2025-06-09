import React from 'react';
import { Heart, Quote } from 'lucide-react';

const PhotoGallery = () => {
  // Sample photos and quotes
  const content = [
    {
      type: 'photo',
      id: 1,
      url: "/images/intro.jpg",
      alt: "Happy moment"
    },
    {
      type: 'text',
      id: 2,
      quote: "Niku gurthundha mana bond ela start ayindho? It all began with collecting pics for your farewell… and during that, I shared about my crush. Nuvvu tanatho photo ippinchadaniki cheppadam, a stunts... such fun and unforgettable moments."
    },
    {
      type: 'photos',
      id: 3,
      photos: [
        {
          url: "/images/after_intro1.jpg",
          alt: "Friendship moment"
        },
        {
          url: "/images/after_intro2.jpg",
          alt: "Peaceful moment"
        }
      ]
    },
    {
      type: 'text',
      id: 4,
      quote: "Miru college complete ayyaka parichayam ayaaru. If not, maybe we would’ve made more memories. One of my favorite college days was your graduation — that time spent with you, Jashuva, and Naga Lakshmi was truly special."
    },
    {
      type: 'photo',
      id: 5,
      url: "/images/middle.jpg",
      alt: "Golden hour"
    },
    {
      type: 'text',
      id: 6,
      quote: "You gave me space to share everything inside me. You became like my daily diary. That one day... if it hadn’t happened, things might’ve been better. Maybe you were right — but from my side, I felt I was too."
    },
    {
      type: 'photos',
      id: 7,
      photos: [
        {
          url: "/images/last1.jpg",
          alt: "Cozy moment"
        },
        {
          url: "/images/last2.jpg",
          alt: "Nature adventure"
        }
      ]
    },
    {
      type: 'text',
      id: 8,
      quote: "Later, I realized I broke your trust. I tried to bring things back to normal, but I know I hurt you. I'm really sorry. I know nuvvu accept cheyavu, but I just wanted to express how I feel.All the best for your future. Thank you for everything. Take care."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-birthday-violet animate-float" />
            <h2 className="text-4xl md:text-5xl font-elegant birthday-text-gradient">
              Treasured Memories
            </h2>
            <Heart className="w-8 h-8 text-birthday-violet animate-float stagger-1" />
          </div>
          <p className="text-xl text-muted-foreground">
            A collection of beautiful moments and heartfelt words
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-16">
          {content.map((item, index) => (
            <div
              key={item.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {item.type === 'photo' && (
                <div className="flex justify-center">
                  <div className="relative group max-w-lg">
                    <div className="aspect-square overflow-hidden rounded-3xl glass-effect shadow-2xl transform transition-all duration-500 group-hover:scale-105 photo-hover-effect">
                      <img
                        src={item.url}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative hearts */}
                    <Heart className="absolute -top-3 -right-3 w-6 h-6 text-birthday-violet animate-float opacity-80" />
                    <Heart className="absolute -bottom-3 -left-3 w-4 h-4 text-birthday-purple animate-float stagger-2 opacity-60" />
                  </div>
                </div>
              )}

              {item.type === 'photos' && (
                <div className="flex justify-center gap-6">
                  {item.photos.map((photo, photoIndex) => (
                    <div key={photoIndex} className="relative group max-w-sm">
                      <div className="aspect-square overflow-hidden rounded-3xl glass-effect shadow-2xl transform transition-all duration-500 group-hover:scale-105 photo-hover-effect">
                        <img
                          src={photo.url}
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-700"
                        />
                      </div>
                      {/* Decorative elements */}
                      {photoIndex === 0 && (
                        <Heart className="absolute -top-2 -right-2 w-5 h-5 text-birthday-deep-violet animate-float opacity-70" />
                      )}
                      {photoIndex === 1 && (
                        <Heart className="absolute -bottom-2 -left-2 w-4 h-4 text-birthday-lavender animate-float stagger-3 opacity-80" />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {item.type === 'text' && (
                <div className="flex justify-center">
                  <div className="relative max-w-2xl">
                    <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-birthday-violet/20">
                      {/* Quote icon */}
                      <Quote className="w-8 h-8 text-birthday-violet mb-4 opacity-60" />
                      
                      {/* Quote text */}
                      <blockquote className="text-lg md:text-xl font-elegant text-foreground leading-relaxed">
                        "{item.quote}"
                      </blockquote>
                      
                      {/* Decorative bottom quote */}
                      <Quote className="w-6 h-6 text-birthday-purple mt-4 ml-auto opacity-40 rotate-180" />
                    </div>
                    
                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-birthday-violet/20 rounded-full animate-float"></div>
                    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-birthday-purple/20 rounded-full animate-float stagger-1"></div>
                    <div className="absolute top-1/2 -right-6 w-4 h-4 bg-birthday-deep-violet/20 rounded-full animate-float stagger-2"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-20 pt-12 border-t border-birthday-violet/20">
          <div className="flex justify-center items-center gap-4">
            <Heart className="w-6 h-6 text-birthday-violet animate-float" />
            <span className="text-lg font-elegant birthday-text-gradient">
              Made with love
            </span>
            <Heart className="w-6 h-6 text-birthday-purple animate-float stagger-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
