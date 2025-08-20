"use client";

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import PageBreadcrumb from '@/components/page-breadcrumb';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogCard from '@/components/ui/blog-card';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  thumbnail: string;
}

// Mock data - in a real app, this would come from your MDX files
const mockBlogPosts: BlogPost[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Our Platform',
    date: '2023-10-15',
    excerpt: 'Learn how to get started with our platform in just a few simple steps.',
    author: 'Nithish Yadav',
    tags: ['Tutorial', 'Getting Started'],
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'productivity-tips',
    title: '5 Tips for Maximizing Productivity',
    date: '2023-10-22',
    excerpt: 'Discover five proven strategies to boost your productivity and achieve more in less time.',
    author: 'Nithish Yadav',
    tags: ['Productivity', 'Tips'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'ai-in-education',
    title: 'The Future of AI in Education',
    date: '2023-11-05',
    excerpt: 'Exploring how artificial intelligence is transforming the educational landscape.',
    author: 'Nithish Yadav',
    tags: ['AI', 'Education', 'Future'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'learning-analytics',
    title: 'Understanding Learning Analytics',
    date: '2023-11-12',
    excerpt: 'How data-driven insights can improve learning outcomes for students.',
    author: 'Nithish Yadav',
    tags: ['Analytics', 'Data', 'Learning'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'remote-learning',
    title: 'Best Practices for Remote Learning',
    date: '2023-11-19',
    excerpt: 'Essential strategies for effective remote learning experiences.',
    author: 'Nithish Yadav',
    tags: ['Remote Learning', 'Education'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    slug: 'student-engagement',
    title: 'Boosting Student Engagement',
    date: '2023-11-26',
    excerpt: 'Techniques to keep students actively involved in their learning journey.',
    author: 'Nithish Yadav',
    tags: ['Engagement', 'Students'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    return mockBlogPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <PageBreadcrumb currentPage="Blog" />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and news about education technology and our platform
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 py-6 text-lg rounded-lg border-primary/20 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {paginatedPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  tags={post.tags}
                  thumbnail={post.thumbnail}
                  date={post.date}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  size="sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    size="sm"
                    className={currentPage === page ? "bg-primary text-primary-foreground" : ""}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  size="sm"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No posts found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}