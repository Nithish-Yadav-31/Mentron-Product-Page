"use client";

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CardData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  color: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes and discover hidden trails that lead to spectacular views.",
    category: "Nature",
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Ocean Serenity",
    description: "Dive into crystal clear waters and experience the peaceful harmony of ocean waves.",
    category: "Ocean",
    image: "https://images.pexels.com/photos/544197/pexels-photo-544197.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-teal-500"
  },
  {
    id: 3,
    title: "Urban Exploration",
    description: "Navigate through vibrant cityscapes and uncover the stories hidden in metropolitan architecture.",
    category: "City",
    image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Forest Sanctuary",
    description: "Wander through ancient forests where sunlight filters through emerald canopies.",
    category: "Forest",
    image: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-green-500"
  },
  {
    id: 5,
    title: "Desert Dreams",
    description: "Journey across golden dunes where endless horizons meet painted skies.",
    category: "Desert",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    color: "bg-orange-500"
  }
];

export default function InteractiveCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Interactive Card Collection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hover over any card to bring it into focus and explore beautiful destinations
          </p>
        </div>

        {/* Desktop Fan Layout */}
        <div className="hidden lg:block relative h-[600px] w-full">
          {cardData.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            const rotation = (index - 2) * 15; // Center the middle card
            const translateX = (index - 2) * 100;
            
            return (
              <Card
                key={card.id}
                className={`absolute top-1/2 left-1/2 w-80 h-96 cursor-pointer transition-all duration-500 ease-out overflow-hidden group ${
                  isHovered ? 'z-50' : `z-${10 + index}`
                }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) rotate(${isHovered ? 0 : rotation}deg) ${
                    isHovered ? 'scale(1.1)' : 'scale(0.95)'
                  }`,
                  transformOrigin: 'center center'
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={`${card.color} text-white border-0 px-3 py-1`}>
                      {card.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      {card.title}
                    </h3>
                    <p className={`text-white/90 leading-relaxed transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {card.description}
                    </p>
                  </div>

                  <div className={`absolute top-0 left-0 right-0 h-1 ${card.color} transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cardData.map((card) => {
            const isHovered = hoveredCard === card.id;
            
            return (
              <Card
                key={card.id}
                className="w-full h-96 cursor-pointer transition-all duration-300 ease-out overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25"
                style={{
                  transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1)'
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge className={`${card.color} text-white border-0 px-3 py-1`}>
                      {card.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed transition-all duration-300 group-hover:opacity-100 opacity-80">
                      {card.description}
                    </p>
                  </div>

                  <div className={`absolute top-0 left-0 right-0 h-1 ${card.color} transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-block w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}