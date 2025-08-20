"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ResourceCard from '@/components/ui/resource-card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import PageBreadcrumb from '@/components/page-breadcrumb';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface Resource {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  thumbnail: string;
  date: string;
}

// Mock data - in a real app, this would come from your data source
const mockResources: Resource[] = [
  {
    id: '1',
    title: 'AI in Education: Transforming Learning Experiences',
    description: 'Explore how artificial intelligence is revolutionizing the way students learn and teachers instruct.',
    author: 'Nithish Yadav',
    tags: ['AI', 'Education', 'Technology'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-10-15',
  },
  {
    id: '2',
    title: 'Effective Remote Learning Strategies',
    description: 'Discover proven techniques to enhance engagement and learning outcomes in virtual classrooms.',
    author: 'Sarah Johnson',
    tags: ['Remote Learning', 'Strategies', 'Engagement'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-10-22',
  },
  {
    id: '3',
    title: 'Data-Driven Instruction: A Practical Guide',
    description: 'Learn how to leverage learning analytics to personalize instruction and improve student outcomes.',
    author: 'Michael Chen',
    tags: ['Data Analytics', 'Instruction', 'Personalization'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-11-05',
  },
  {
    id: '4',
    title: 'Building Inclusive Learning Environments',
    description: 'Strategies for creating classrooms that support all learners, regardless of their background or abilities.',
    author: 'Priya Sharma',
    tags: ['Inclusion', 'Equity', 'Classroom Management'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-11-12',
  },
  {
    id: '5',
    title: 'The Future of EdTech: Trends to Watch',
    description: 'An overview of emerging technologies and trends that will shape the future of education.',
    author: 'David Wilson',
    tags: ['EdTech', 'Trends', 'Future'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-11-19',
  },
  {
    id: '6',
    title: 'Gamification in Learning: Boosting Engagement',
    description: 'How game elements can be integrated into curriculum to increase student motivation and participation.',
    author: 'Emma Rodriguez',
    tags: ['Gamification', 'Engagement', 'Motivation'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-11-26',
  },
  {
    id: '7',
    title: 'Assessment 2.0: Moving Beyond Standardized Tests',
    description: 'Innovative assessment methods that provide a more comprehensive view of student learning.',
    author: 'James Peterson',
    tags: ['Assessment', 'Innovation', 'Evaluation'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-12-03',
  },
  {
    id: '8',
    title: 'Social-Emotional Learning in the Digital Age',
    description: 'Approaches to fostering emotional intelligence and social skills in technology-rich environments.',
    author: 'Lisa Kim',
    tags: ['SEL', 'Emotional Intelligence', 'Digital Age'],
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    date: '2023-12-10',
  },
];

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 6;

  // Filter resources based on search term
  const filteredResources = useMemo(() => {
    return mockResources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  const startIndex = (currentPage - 1) * resourcesPerPage;
  const paginatedResources = filteredResources.slice(startIndex, startIndex + resourcesPerPage);

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumb */}
      <PageBreadcrumb currentPage="Resources" />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Educational Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles, guides, and insights to enhance your teaching and learning experience
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 py-6 text-lg rounded-lg border-primary/20 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Resources Grid */}
        {paginatedResources.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  id={resource.id}
                  title={resource.title}
                  description={resource.description}
                  author={resource.author}
                  tags={resource.tags}
                  thumbnail={resource.thumbnail}
                  date={resource.date}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(prev => Math.max(prev - 1, 1));
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Show first, last, and surrounding pages
                      let pageNum: number;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(pageNum);
                            }}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(totalPages);
                            }}
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(prev => Math.min(prev + 1, totalPages));
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}