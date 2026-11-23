import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Heart,
  MessageCircle,
  Shield,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const challenges = [
  'Tenåringen trekker seg tilbake eller isolerer seg',
  'Kommunikasjonen har blitt vanskelig',
  'Det er mye konflikt eller spenning hjemme',
  'Du føler deg usikker på hvordan du skal håndtere situasjonen',
  'Du opplever at barnet ditt er påvirket av negative miljøer',
  'Du er bekymret for barnets fremtid',
];

const whatWeOffer = [
  {
    icon: MessageCircle,
    title: 'Foreldreveiledning',
    description: 'Støtte og veiledning for å styrke foreldrerollen og finne nye måter å kommunisere på.',
  },
  {
    icon: Users,
    title: 'Familiearbeid',
    description: 'Vi kan fungere som en nøytral tredjepart for å gjenoppbygge tillit og dialog.',
  },
  {
    icon: Shield,
    title: 'Kultursensitiv tilnærming',
    description: 'Vi forstår utfordringene som kan oppstå i flerkulturelle familier.',
  },
];

const howWeHelp = [
  'Lytter til din situasjon uten å dømme',
  'Hjelper deg å forstå ungdommens perspektiv',
  'Gir deg konkrete verktøy og strategier',
  'Støtter deg gjennom vanskelige samtaler',
  'Bygger bro mellom deg og tenåringen',
  'Følger opp over tid for varig endring',
];

export const ParentsPage = () => {
  return (
    <main data-testid="parents-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            For Foreldre
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Du er ikke alene. Vi hjelper foreldre som opplever utfordringer med tenåringsbarna sine.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Vi forstår at det kan være vanskelig
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Å være forelder til en tenåring kan være utfordrende. Kanskje opplever du at 
                  kommunikasjonen har brutt sammen, at barnet ditt trekker seg tilbake, eller 
                  at det er mye konflikt hjemme.
                </p>
                <p>
                  Hos Bropunkt møter vi foreldre som deg hver dag. Vi vet at du ønsker det beste 
                  for barnet ditt, og vi er her for å hjelpe deg finne veien videre.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Kjenner du deg igjen?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#f8fafc] p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Hva vi tilbyr
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeOffer.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl icon-bg-teal flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hvordan vi hjelper
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {howWeHelp.map((item, index) => (
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

      {/* CTA Section */}
      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-yellow-400 mx-auto" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ta det første steget i dag
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Det er aldri for sent å få hjelp. Ta kontakt med oss for en uforpliktende samtale.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="parents-cta-button"
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
