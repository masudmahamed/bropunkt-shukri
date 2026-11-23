import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  UserCheck,
  Users,
  Home as HomeIcon,
  BookOpen,
  Handshake,
  Building2,
  ArrowRight,
  Heart
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../hooks/useScrollAnimation';

const services = [
  {
    id: 'individuell',
    icon: UserCheck,
    bgColor: 'icon-bg-teal',
    title: 'Individuell veiledning for ungdom',
    description: 'Individuell oppfølging for ungdom som trenger støtte, retning og en trygg voksen å snakke med.',
    forWhom: 'Ungdom som opplever press, usikkerhet, eller utfordringer knyttet til skole, relasjoner eller identitet. Spesielt de som trekker seg tilbake eller isolerer seg.',
  },
  {
    id: 'foreldre',
    icon: Users,
    bgColor: 'icon-bg-green',
    title: 'Foreldreveiledning',
    description: 'Støtte for foreldre som opplever utfordringer i relasjonen til tenåringsbarna sine.',
    forWhom: 'Foreldre som opplever bekymring, konflikt eller avstand i forhold til tenåringen. Vi jobber med å styrke foreldrerollen og skape bedre samspill.',
  },
  {
    id: 'familie',
    icon: HomeIcon,
    bgColor: 'icon-bg-orange',
    title: 'Familiearbeid',
    description: 'Når relasjonen mellom ungdom og foreldre er anstrengt eller fjern, kan vi fungere som en nøytral tredjepart.',
    forWhom: 'Familier der kommunikasjonen har brutt sammen eller tilliten er svekket. Vi jobber med dialog, forståelse og tillit.',
  },
  {
    id: 'ungdom',
    icon: BookOpen,
    bgColor: 'icon-bg-pink',
    title: 'Bropunkt Ungdom',
    description: 'Et strukturert gruppeprogram for ungdom som trenger støtte, retning og et trygt fellesskap.',
    forWhom: 'Ungdom som ønsker å møte andre i lignende situasjoner og få verktøy til å mestre hverdagen.',
    link: '/ungdom',
  },
  {
    id: 'kurs',
    icon: Handshake,
    bgColor: 'icon-bg-blue',
    title: 'Kurs og foredrag',
    description: 'Vi tilbyr kurs og faglige presentasjoner til skoler, kommuner og tjenester.',
    forWhom: 'Fagpersoner som jobber med ungdom og familier. Temaer inkluderer ungdom i krysspress, relasjonsarbeid og forebyggende arbeid.',
  },
  {
    id: 'samarbeid',
    icon: Building2,
    bgColor: 'icon-bg-teal',
    title: 'Samarbeid med tjenester',
    description: 'Vi samarbeider med skoler, kommuner, barnevern og NAV for å støtte familier i komplekse situasjoner.',
    forWhom: 'Offentlige tjenester som trenger en samarbeidspartner med kultursensitiv kompetanse.',
    link: '/samarbeid',
  },
];

export const ServicesPage = () => {
  return (
    <main data-testid="services-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Våre Tjenester
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Vi tilbyr et bredt spekter av tjenester tilpasset barn, unge og familiers behov
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={service.id} index={index} baseDelay={0.1}>
                <Card 
                  data-testid={`service-${service.id}`}
                  className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden h-full"
                >
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 icon-hover-float`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="bg-[#f8fafc] rounded-xl p-4 mb-6">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">Hvem passer dette for?</span><br />
                        {service.forWhom}
                      </p>
                    </div>
                    <Link to={service.link || '/kontakt'}>
                      <Button 
                        className="w-full bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-full py-3 btn-hover-scale"
                      >
                        {service.link ? 'Les mer' : 'Ta kontakt'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-yellow-400 mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Usikker på hvilken tjeneste som passer?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ta kontakt for en uforpliktende samtale, så hjelper vi deg å finne riktig løsning.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="services-cta-button"
              className="bg-white text-[#0d9488] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
            >
              Ta kontakt
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
