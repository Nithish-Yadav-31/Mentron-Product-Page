"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Calendar, User, Tag } from 'lucide-react';
import PageBreadcrumb from '@/components/page-breadcrumb';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface Resource {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  tags: string[];
  thumbnail: string;
  date: string;
}

// Mock data - in a real app, this would come from your data source
const mockResource: Resource = {
  id: '1',
  title: 'AI in Education: Transforming Learning Experiences',
  description: 'Explore how artificial intelligence is revolutionizing the way students learn and teachers instruct.',
  content: `
    <p>Artificial intelligence is rapidly transforming the educational landscape, offering unprecedented opportunities to enhance learning experiences for both students and educators. In this comprehensive guide, we'll explore how AI is reshaping education and what it means for the future of learning.</p>
    
    <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Personalized Learning Paths</h2>
    <p>One of the most significant impacts of AI in education is its ability to create personalized learning experiences. AI algorithms can analyze student performance data to identify strengths, weaknesses, and learning patterns, allowing for customized content delivery and pacing.</p>
    
    <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Intelligent Tutoring Systems</h2>
    <p>AI-powered tutoring systems provide 24/7 assistance to students, offering immediate feedback and guidance. These systems can adapt to different learning styles and provide explanations in multiple formats to ensure understanding.</p>
    
    <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Automated Administrative Tasks</h2>
    <p>Educators spend a significant amount of time on administrative tasks such as grading and scheduling. AI can automate many of these processes, freeing up valuable time for instruction and student interaction.</p>
    
    <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Enhanced Accessibility</h2>
    <p>AI technologies are making education more accessible to students with disabilities. Features like speech-to-text, text-to-speech, and visual recognition can help break down barriers to learning.</p>
    
    <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Predictive Analytics</h2>
    <p>By analyzing vast amounts of data, AI can predict student outcomes and identify at-risk learners before they fall behind. This allows for early intervention and support to ensure student success.</p>
    
    <p>As we continue to integrate AI into educational settings, it's crucial to maintain a balance between technology and human interaction. The goal is not to replace educators but to empower them with tools that enhance their ability to inspire and guide students.</p>
  `,
  author: 'Nithish Yadav',
  tags: ['AI', 'Education', 'Technology'],
  thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  date: '2023-10-15',
};

export default function ResourceDetailPage() {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <PageBreadcrumb currentPage={mockResource.title} />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6 pl-0 hover:bg-transparent">
            <Link href="/resources" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
          
          {/* Resource Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {mockResource.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="text-sm font-medium px-3 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-heading font-bold mb-4">{mockResource.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{mockResource.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(mockResource.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
          
          {/* Thumbnail */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={mockResource.thumbnail}
              alt={mockResource.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12">
            {mockResource.description}
          </p>
          
          {/* Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl"
            dangerouslySetInnerHTML={{ __html: mockResource.content }}
          />
          
          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t">
            <Button 
              variant="outline" 
              onClick={() => setLiked(!liked)}
              className="flex items-center gap-2"
            >
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Share
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Save for Later
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}