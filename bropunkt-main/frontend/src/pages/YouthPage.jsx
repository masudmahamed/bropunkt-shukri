import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Users,
  Target,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Heart,
  BookOpen,
  Brain,
  Compass
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../hooks/useScrollAnimation';

const topics = [
  {
    icon: Users,
    title: 'Identitet og tilhørighet',
    description: 'Hvem er jeg? Utforsking av identitet, kultur og det å være flerkulturell i Norge.',
  },
  {
    icon: BookOpen,
    title: 'Skole og mestring',
    description: 'Motivasjon, studieteknikk og hvordan håndtere press og forventninger.',
  },
  {
    icon: Heart,
    title: 'Foreldres forventninger',
    description: 'Forståelse og dialog rundt ulike forventninger hjemme og ute.',
  },
  {
    icon: Brain,
    title: 'Følelsesregulering',
    description: 'Verktøy for å håndtere stress, sinne, tristhet og andre følelser.',
  },
  {
    icon: Compass,
    title: 'Miljøpåvirkning',
    description: 'Bevissthet rundt påvirkning fra venner, sosiale medier og miljø.',
  },
  {
    icon: Shield,
    title: 'Forebygging',
    description: 'Forebygging av kriminalitet, vold, sosial kontroll og negative miljøer.',
  },
];

const benefits = [
  'Trygge voksne som forstår din situasjon',
  'Andre ungdom i lignende situasjoner',
  'Verktøy for å mestre hverdagen',
  'Støtte til å nå dine mål',
  'Et fellesskap der du kan være deg selv',
  'Hjelp til å finne retning og fremtidstro',
];

const forWhom = [
  'Føler deg litt lost eller usikker på fremtiden',
  'Opplever press hjemme, på skolen eller fra venner',
  'Sliter med å finne motivasjon eller retning',
  'Ønsker å møte andre ungdom i lignende situasjoner',
  'Vil ha verktøy til å mestre hverdagen bedre',
];

export const YouthPage = () => {
  return (
    <main data-testid="youth-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Bropunkt Ungdom
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Et strukturert gruppeprogram for ungdom som trenger støtte, retning og et trygt fellesskap
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hva er Bropunkt Ungdom?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Bropunkt Ungdom er et gruppeprogram der du møter andre ungdom i lignende situasjoner. 
                  Her får du verktøy til å mestre hverdagen, støtte fra trygge voksne, og et fellesskap 
                  der du kan være deg selv.
                </p>
                <p>
                  Programmet fokuserer på identitet, mestring, relasjoner og forebygging – alt med mål 
                  om å styrke din retning og fremtidstro. Vi tar opp temaer som er relevante for deg, 
                  og gir deg praktiske verktøy du kan bruke i hverdagen.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Er dette for deg?
              </h2>
              <p className="text-gray-600 mb-6">
                Bropunkt Ungdom er for deg som:
              </p>
              <ul className="space-y-4">
                {forWhom.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0d9488] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Hva du får hos oss
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#f97316] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline">
              Temaer vi jobber med
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <AnimatedCard key={topic.title} index={index} baseDelay={0.1}>
                <Card 
                  data-testid={`topic-card-${index}`}
                  className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden h-full"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl icon-bg-teal flex items-center justify-center mx-auto mb-6 icon-hover-float">
                      <topic.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {topic.description}
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
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Klar for å ta det første steget?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Ta kontakt for å høre mer om Bropunkt Ungdom. Det er ingen forpliktelser – 
            bare en samtale for å se om dette kan være noe for deg.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="youth-cta-button"
              className="bg-white text-[#0d9488] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
            >
              Meld interesse
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
