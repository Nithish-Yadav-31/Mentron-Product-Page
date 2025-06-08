"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

const LiveExamples = () => {
  const [isMindmapMuted, setIsMindmapMuted] = useState(true);
  const [isGraphMuted, setIsGraphMuted] = useState(true);

  return (
    <section className="w-full py-16 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Experience Mentron in Action
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Watch how our AI dynamically generates intuitive Mindmaps and interconnected Knowledge Graphs to aid student understanding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mindmap Demo Card */}
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-lg text-foreground">Dynamic Mindmap Generation</h3>
            </div>
            <div className="relative flex justify-center items-center aspect-video bg-black/5">
              <iframe
                src="https://drive.google.com/file/d/1shXAxu2Zps3dK4BFIMF8Ir4gwMHrwZxF/preview"
                width="100%"
                height="320"
                allow="autoplay"
                className="rounded-lg w-full h-80 border-none"
                style={{ minHeight: '240px', background: 'transparent' }}
                title="Mindmap Demo"
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Visualize complex topics with AI-generated mindmaps, perfect for organizing information and enhancing recall.
              </p>
            </div>
          </div>

          {/* Knowledge Graph Demo Card */}
          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-lg text-foreground">Intelligent Knowledge Graph Exploration</h3>
            </div>
            <div className="relative flex justify-center items-center aspect-video bg-black/5">
              <iframe
                src="https://drive.google.com/file/d/1_f-O_GRoNHHW3agxVlZQiNE4IrZ22mpv/preview"
                width="100%"
                height="320"
                allow="autoplay"
                className="rounded-lg w-full h-80 border-none"
                style={{ minHeight: '240px', background: 'transparent' }}
                title="Knowledge Graph Demo"
              ></iframe>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Uncover relationships and dependencies within your study material through interactive, AI-powered knowledge graphs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExamples;
