import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  author: string;
  tags: string[];
  thumbnail: string;
  date: string;
}

export default function ResourceCard({
  id,
  title,
  description,
  author,
  tags,
  thumbnail,
  date,
}: ResourceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl border-primary/10">
      <Link href={`/resources/${id}`}>
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
            <Badge 
              key={tag} 
              variant="secondary"
              className="text-xs font-medium px-2 py-1 rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/resources/${id}`}>
          <h3 className="text-xl font-heading font-bold hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-muted-foreground line-clamp-3">
          {description}
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