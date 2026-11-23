import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Building2,
  School,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Handshake
} from 'lucide-react';

const partners = [
  {
    icon: School,
    title: 'Skoler',
    description: 'Vi samarbeider med skoler for å støtte elever som strever og forebygge frafall.',
  },
  {
    icon: Building2,
    title: 'Kommuner',
    description: 'Vi bistår kommunale tjenester med kultursensitiv kompetanse i komplekse saker.',
  },
  {
    icon: Shield,
    title: 'Barnevern',
    description: 'Vi tilbyr tilsynstjenester og veiledning i samarbeid med barneverntjenesten.',
  },
  {
    icon: Users,
    title: 'NAV',
    description: 'Vi støtter familier i samarbeid med NAV for helhetlig oppfølging.',
  },
];

const whatWeContribute = [
  'Kultursensitiv kompetanse og forståelse',
  'Bistand i enkeltsaker og komplekse situasjoner',
  'Deltakelse i møter og ansvarsgrupper',
  'Brobygging mellom ungdom, familie og system',
  'Kurs og foredrag for fagpersoner',
  'Fleksible og tilpassede løsninger',
];

const collaborationExamples = [
  {
    title: 'Tilsynstjenester',
    description: 'Strukturert oppfølging etter barnevernsvedtak, inkludert tilsyn i hjemmet og ved samvær.',
  },
  {
    title: 'Veiledning i komplekse saker',
    description: 'Kultursensitiv veiledning når familier har behov for ekstra støtte og forståelse.',
  },
  {
    title: 'Forebyggende arbeid',
    description: 'Gruppeprogram og individuelle tiltak for å forebygge negativ utvikling.',
  },
  {
    title: 'Faglig bistand',
    description: 'Kurs, foredrag og konsultasjon for fagpersoner som jobber med flerkulturelle familier.',
  },
];

export const CollaborationPage = () => {
  return (
    <main data-testid="collaboration-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Samarbeid
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Vi samarbeider med skoler, kommuner, barnevern og NAV for å støtte familier
          </p>
        </div>
      </section>

      {/* Who We Collaborate With */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Hvem vi samarbeider med
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card 
                key={partner.title}
                className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl icon-bg-teal flex items-center justify-center mx-auto mb-6">
                    <partner.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {partner.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Contribute */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hva vi bidrar med
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatWeContribute.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0d9488] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Collaboration Examples */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Eksempler på samarbeid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationExamples.map((example, index) => (
              <Card 
                key={example.title}
                className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {example.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Handshake className="w-16 h-16 text-yellow-400 mx-auto" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Interessert i samarbeid?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ta kontakt med oss for å diskutere hvordan vi kan samarbeide for å støtte familier i deres kommune.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="collaboration-cta-button"
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
