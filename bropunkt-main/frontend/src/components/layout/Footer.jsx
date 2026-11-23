import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="main-footer" className="bg-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-[#14b8a6]">Bropunkt</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Profesjonell veiledning og støttetjenester for barn, unge og familier med kultursensitiv tilnærming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Snarveier</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/om-oss" className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm">Om oss</Link>
              <Link to="/tjenester" className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm">Tjenester</Link>
              <Link to="/ungdom" className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm">Bropunkt Ungdom</Link>
              <Link to="/foreldre" className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm">For foreldre</Link>
              <Link to="/samarbeid" className="text-gray-400 hover:text-[#14b8a6] transition-colors text-sm">Samarbeid</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kontakt@bropunkt.no" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>kontakt@bropunkt.no</span>
              </a>
              <a 
                href="tel:+4791525200" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#14b8a6] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+47 915 25 200</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Oslo, Norge</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Åpningstider</h4>
            <div className="flex items-start gap-3 text-gray-400 text-sm">
              <Clock className="w-4 h-4 mt-0.5" />
              <div>
                <p>Mandag - Fredag: 09:00 - 17:00</p>
                <p>Lørdag - Søndag: Stengt</p>
              </div>
            </div>
            <p className="text-[#14b8a6] text-sm mt-4">
              Vi svarer innen 24 timer
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Bropunkt. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};
