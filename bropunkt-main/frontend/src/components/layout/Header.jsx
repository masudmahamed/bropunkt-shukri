import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Hjem', path: '/' },
  { name: 'Om oss', path: '/om-oss' },
  { name: 'Tjenester', path: '/tjenester' },
  { name: 'Bropunkt Ungdom', path: '/ungdom' },
  { name: 'For foreldre', path: '/foreldre' },
  { name: 'Samarbeid', path: '/samarbeid' },
  { name: 'Kontakt', path: '/kontakt' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      data-testid="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            className="flex flex-col"
          >
            <span className="text-2xl font-bold text-[#0d9488]">
              Bropunkt
            </span>
            <span className="text-xs text-[#f97316]">
              Profesjonell Veiledning og Støttetjenester
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-${link.path.replace('/', '') || 'home'}`}
                className={`text-sm font-medium transition-colors relative ${
                  location.pathname === link.path
                    ? 'text-[#0d9488]'
                    : 'text-gray-700 hover:text-[#0d9488]'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0d9488]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            data-testid="mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? 'Lukk meny' : 'Åpne meny'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden pb-6 border-t border-gray-100"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  data-testid={`mobile-nav-${link.path.replace('/', '') || 'home'}`}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#0d9488]/10 text-[#0d9488]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
