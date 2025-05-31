import Link from 'next/link';
import { FOOTER_LINKS, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { AnimatedLogo } from '@/components/ui/animated-logo';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, LinkedinIcon as Linkedin, Mail, Phone, MapPin } from 'lucide-react'; // Renamed Linkedin to avoid conflict

const iconMap: { [key: string]: React.ElementType } = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <AnimatedLogo />
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of tech innovators with cutting-edge skills and knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(1,5).map((link) => ( // Exclude Home, take next 4
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:codeyuva2025@gmail.com" className="hover:text-primary">codeyuva2025@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+917042871532" className="hover:text-primary">+917042871532</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                <span>House no. 17-A/A, Block-A,Dwarka mor patel Garden,New Delhi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} CodeYuva Academy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.label];
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
