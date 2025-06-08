import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 bg-background border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <Image
                  src="/resources/logo/mentron_geo_logo_blue.png"
                  alt="Mentron Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-10 relative flex items-center">
                <Image
                  src="/resources/logo/mentron_main.png"
                  alt="Mentron"
                  width={160}
                  height={40}
                  className="object-contain"
                  style={{ height: '20px', width: 'auto' }}
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming education with intelligent AI solutions for institutions, educators, and students.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/institutional-demo" className="text-sm text-muted-foreground hover:text-primary">For Institutions</Link></li>
              <li><Link href="/individual-inquiry" className="text-sm text-muted-foreground hover:text-primary">For Individuals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:contact@Mentron" className="text-sm text-muted-foreground hover:text-primary">contact@Mentron</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mentron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
