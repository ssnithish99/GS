import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Careers', href: '#' },
      { name: 'News & Updates', href: '#' },
    ],
    services: [
      { name: 'Product Development', href: '#services' },
      { name: 'Technology Solutions', href: '#services' },
      { name: 'Growth Strategy', href: '#services' },
      { name: 'Quality Assurance', href: '#services' },
    ],
    resources: [
      { name: 'Case Studies', href: '#' },
      { name: 'Tech Insights', href: '#' },
      { name: 'Industry Reports', href: '#' },
      { name: 'Support Center', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">GS Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming innovative ideas into impactful solutions through cutting-edge technology and strategic guidance. 
              Your trusted partner for growth, innovation, and success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">hello@gsgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">123 Innovation Drive, CA 94105</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2025 GS Group. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}