import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Heart,
  Target,
  Users,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: Heart,
    bgColor: 'icon-bg-pink',
    title: 'Omsorg',
    description: 'Vi møter alle med varme og genuint ønske om å hjelpe.',
  },
  {
    icon: Target,
    bgColor: 'icon-bg-teal',
    title: 'Profesjonalitet',
    description: 'Solid faglig kompetanse og etisk standard i alt vi gjør.',
  },
  {
    icon: Users,
    bgColor: 'icon-bg-green',
    title: 'Kulturforståelse',
    description: 'Dyp respekt for kulturell bakgrunn og individuelle behov.',
  },
  {
    icon: Award,
    bgColor: 'icon-bg-orange',
    title: 'Kvalitet',
    description: 'Vi streber alltid etter de beste løsningene for våre klienter.',
  },
];

const whoWeHelp = [
  'Barn og unge i krevende livssituasjoner',
  'Foreldre som trenger veiledning og støtte',
  'Familier med flerkulturell bakgrunn',
  'Minoritetsfamilier som trenger kulturell støtte',
  'Ungdom som trenger retning og motivasjon',
  'Familier i samarbeid med barnevernet',
];

const whatMakesUsUnique = [
  'Kultursensitiv tilnærming i alt vi gjør',
  'Dyp forståelse for flerkulturelle familier',
  'Erfaring med komplekse familiesituasjoner',
  'Fleksible og tilpassede løsninger',
  'Tett oppfølging og tilgjengelighet',
  'Brobygging mellom familie og system',
];

export const AboutPage = () => {
  return (
    <main data-testid="about-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Om Bropunkt
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Vi bygger broer mellom familier, kulturer og muligheter
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden card-hover">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Hvem er Bropunkt?
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Bropunkt er et veiledningsfirma for ungdom og foreldre med fokus på relasjoner, 
                    forståelse og forebygging. Vi jobber for å skape trygghet, bygge relasjoner og 
                    fremme forståelse – spesielt for familier med flerkulturell bakgrunn.
                  </p>
                  <p>
                    Med solid faglig kompetanse og dyp forståelse for krysskulturelle familier, tilbyr 
                    vi profesjonell veiledning og støttetjenester som er tilpasset hver enkelt families 
                    behov. Vårt team har spesialisert erfaring med minoritetsfamilier og arbeider med 
                    en kultursensitiv tilnærming som respekterer mangfold og individualitet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hvem vi hjelper
              </h2>
              <ul className="space-y-4">
                {whoWeHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hva gjør oss unike
              </h2>
              <ul className="space-y-4">
                {whatMakesUsUnique.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hvordan vi jobber
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vi tror på at gjennom omsorg, profesjonalitet og respekt kan vi bygge broer som 
                  fører til positive endringer og bedre livskvalitet for de vi jobber med.
                </p>
                <p>
                  Vår tilnærming er alltid tilpasset den enkelte familie. Vi starter med å lytte, 
                  forstå og kartlegge situasjonen før vi sammen finner den beste veien videre.
                </p>
                <p>
                  Vi jobber med tydelige rammer, gjensidig respekt og fokus på å bygge tillit. 
                  Vårt mål er at familiene vi jobber med skal oppleve reell endring og få verktøy 
                  de kan bruke lenge etter at samarbeidet er avsluttet.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Våre Verdier
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} index={index} baseDelay={0.1}>
                <Card 
                  data-testid={`value-card-${index}`}
                  className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden h-full"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${value.bgColor} flex items-center justify-center mx-auto mb-6 icon-hover-float`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Vil du vite mer om hvordan vi kan hjelpe?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ta kontakt med oss for en uforpliktende samtale om hvordan vi kan hjelpe deg og din familie.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="about-cta-button"
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
