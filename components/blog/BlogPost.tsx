import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
  img: (props: any) => (
    <div className="my-6">
      <Image 
        src={props.src} 
        alt={props.alt} 
        width={800} 
        height={400} 
        className="rounded-lg shadow-lg"
      />
      {props.alt && <p className="text-center text-sm text-gray-500 mt-2">{props.alt}</p>}
    </div>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
};

interface BlogPostProps {
  source: string;
}

export default function BlogPost({ source }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <MDXRemote source={source} components={components} />
    </article>
  );
}