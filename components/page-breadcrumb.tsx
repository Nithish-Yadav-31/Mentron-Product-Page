import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

interface PageBreadcrumbProps {
  currentPage: string;
  showBackButton?: boolean;
}

export default function PageBreadcrumb({ currentPage, showBackButton = true }: PageBreadcrumbProps) {
  return (
    <div className="container mx-auto px-4 py-4 relative z-10">
      <div className="flex items-center justify-between bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 dark:border-gray-800/50">
        {/* Breadcrumb Navigation */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 dark:text-white font-medium">{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Back Button */}
        {showBackButton && (
          <Button variant="outline" size="sm" asChild className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border-gray-300 dark:border-gray-600 hover:bg-white/20 dark:hover:bg-black/20">
            <Link href="/" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
} 