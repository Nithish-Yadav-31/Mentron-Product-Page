import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPost from '@/components/blog/BlogPost';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const filePath = path.join(blogDir, `${slug}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    title: data.title || slug,
    date: data.date ? new Date(data.date).toLocaleDateString() : 'Unknown date',
    content,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6 pl-0 hover:bg-transparent">
            <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl">
            <header className="mb-8">
              <h1 className="text-4xl font-heading font-bold mb-4">{post.title}</h1>
              <p className="text-muted-foreground">{post.date}</p>
            </header>
            
            <BlogPost source={post.content} />
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  
  // Check if blog directory exists
  if (!fs.existsSync(blogDir)) {
    return [];
  }
  
  const files = fs.readdirSync(blogDir);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }));
}