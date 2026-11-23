import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  GraduationCap, 
  Users, 
  Star,
  Home,
  MessageCircle,
  Target,
  Heart,
  ArrowRight,
  Phone,
  FileText,
  CheckCircle
} from 'lucide-react';
import { AnimatedSection, AnimatedCard } from '../hooks/useScrollAnimation';

const competencies = [
  {
    icon: GraduationCap,
    bgColor: 'icon-bg-teal',
    title: 'Master i Samfunn og Helse',
    description: 'Utdannet ved Universitetet i Sørøst-Norge (USN), med faglig tyngde i veiledning.',
  },
  {
    icon: Users,
    bgColor: 'icon-bg-green',
    title: 'Kulturell Sensitivitet',
    description: 'Erfaring med samtaleterapi og familieveiledning med dyp forståelse for krysskulturelle familier.',
  },
  {
    icon: Star,
    bgColor: 'icon-bg-orange',
    title: 'Spesialisert Erfaring',
    description: 'Kompetanse på veiledning for enslige somaliske mødre med barn med autism.',
  },
];

const services = [
  {
    icon: Home,
    bgColor: 'service-card-green',
    title: 'Tilsynstjenester',
    description: 'Strukturert og trygghetsskapende oppfølging etter vedtak fra barnevernet.',
    features: ['Tilsyn i Hjemmet', 'Tilsyn ved Samvær', 'Miljøterapeutisk Støtte'],
    link: '/tjenester',
  },
  {
    icon: MessageCircle,
    bgColor: 'service-card-teal',
    title: 'Minoritetsfamilie Veiledning',
    description: 'Vi tilbyr veiledning basert på to likeverdige pilarer for å sikre en helhetlig og respektfull tilnærming.',
    features: ['Familieveiledning', 'Kulturell Støtte', 'Tilpasset Oppfølging'],
    link: '/tjenester',
  },
  {
    icon: Target,
    bgColor: 'service-card-orange',
    title: 'Forebyggende Arbeid med Ungdom',
    description: 'Vi fokuserer på kjerneområder for å styrke ungdommens ressurser og forebygge utfordringer.',
    features: ['Møting', 'Identitet', 'Tilhørighet'],
    link: '/ungdom',
  },
];

const howWeWork = [
  {
    step: '1',
    icon: Phone,
    title: 'Ta kontakt',
    description: 'Ring eller send oss en melding for en uforpliktende samtale.',
  },
  {
    step: '2',
    icon: FileText,
    title: 'Kartlegging',
    description: 'Vi kartlegger behov og situasjon sammen med deg.',
  },
  {
    step: '3',
    icon: CheckCircle,
    title: 'Oppfølging',
    description: 'Vi starter tilpasset oppfølging basert på dine behov.',
  },
];

export const HomePage = () => {
  return (
    <main data-testid="home-page">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Bygger Broer for Barn, Unge og Familier
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up animate-delay-1">
            Bropunkt tilbyr profesjonell veiledning, støttetjenester og tilsynsoppdrag. Vårt mål er å 
            skape trygghet og bygge relasjoner med en kultursensitiv tilnærming, spesielt rettet mot 
            familier med krysskulturell bakgrunn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-2">
            <Link to="/kontakt">
              <Button 
                data-testid="hero-cta-contact"
                className="bg-white text-[#0d9488] hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg btn-hover-scale"
              >
                Ta kontakt
              </Button>
            </Link>
            <Link to="/tjenester">
              <Button 
                data-testid="hero-cta-services"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold btn-hover-scale"
              >
                Se våre tjenester
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline animate-underline">
              Vår Kompetanse
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competencies.map((comp, index) => (
              <AnimatedCard key={comp.title} index={index} baseDelay={0.15}>
                <Card 
                  data-testid={`competency-card-${index}`}
                  className="bg-white border-0 shadow-lg card-hover rounded-2xl overflow-hidden h-full"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${comp.bgColor} flex items-center justify-center mx-auto mb-6 icon-hover-float`}>
                      <comp.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {comp.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {comp.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
          <AnimatedSection delay={0.4}>
            <p className="text-center text-gray-500 mt-8 italic">
              Lang erfaring med ungdom og familier i krevende situasjoner
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline animate-underline">
              Våre Tjenester
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={service.title} index={index} baseDelay={0.15}>
                <Link to={service.link} className="block h-full">
                  <Card 
                    data-testid={`service-card-${index}`}
                    className={`${service.bgColor} border-0 shadow-lg service-card-hover rounded-2xl overflow-hidden h-full`}
                  >
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6 icon-hover-float">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-white/90">
                            <span className="w-2 h-2 rounded-full bg-white/60" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link to="/tjenester">
              <Button 
                data-testid="see-all-services"
                className="bg-[#0d9488] hover:bg-[#0f766e] text-white rounded-full px-8 py-4 text-base font-semibold btn-hover-scale"
              >
                Se alle tjenester
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 section-title-underline animate-underline">
              Slik jobber vi
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWeWork.map((item, index) => (
              <AnimatedCard key={item.step} index={index} baseDelay={0.2}>
                <div data-testid={`how-we-work-${index}`} className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 rounded-full bg-[#0d9488] flex items-center justify-center mx-auto mb-6 icon-hover-float">
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center border-4 border-[#f8fafc]">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta py-20 overflow-hidden">
        <AnimatedSection animation="animate-scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Heart className="w-16 h-16 text-yellow-400 mx-auto animate-float" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Klar til å ta kontakt?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Vi er her for å hjelpe deg og din familie. Ta kontakt med oss i dag for en uforpliktende samtale.
          </p>
          <Link to="/kontakt">
            <Button 
              data-testid="cta-contact-button"
              className="bg-white text-[#0d9488] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-lg btn-hover-scale animate-pulse-glow"
            >
              Kontakt oss
            </Button>
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
};
