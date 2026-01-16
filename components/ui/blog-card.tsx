import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  tags: string[];
  thumbnail: string;
  date: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  author,
  tags,
  thumbnail,
  date,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl border-primary/10">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-heading font-bold hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{author}</span>
        <span className="text-sm text-muted-foreground">
          {new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
      </CardFooter>
    </Card>
  );
}