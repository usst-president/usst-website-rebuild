import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import calianLogo from '@/assets/Calian Logo.png';
import kgsLogo from '@/assets/KGS Logo.png';
import mdaLogo from '@/assets/MDA Logo.png';
import meaLogo from '@/assets/MEA Logo.png';
import makerspaceLogo from '@/assets/Makerspace Logo.png';
import usaskEngLogo from '@/assets/Usask Eng Logo.png';
import vecimaLogo from '@/assets/Vecima Logo.png';


const sponsorTiers = [
  {
    name: 'Apogee Ally',
    description: 'Major partnership with extensive visibility and collaboration opportunities',
    sponsors: [
      { name: 'Calian Advanced Technologies', logo: calianLogo },
      { name: 'University of Saskatchewan College of Engineering', logo: usaskEngLogo}
    ],
  },
  {
    name: 'Supersonic Supporter',
    description: 'Significant support enabling key project milestones',
    sponsors: [
      { name: 'Maguire Engineering Associates', logo: meaLogo },
      { name: 'Vecima Networks', logo: vecimaLogo}
    ],
  },
  {
    name: 'Lift-off',
    description: 'Valuable contributions supporting student development',
    sponsors: [
      { name: 'KGS Group', logo: kgsLogo },
    ],
  },
  {
    name: 'Ignition',
    description: 'Valuable contributions supporting student development',
    sponsors: [
      { name: 'MakerSpace Saskatoon', logo: makerspaceLogo },
      { name: 'MDA Space', logo: mdaLogo}
    ],
  },
];

const impactAreas = [
  {
    title: 'Materials & Manufacturing',
    description: 'Composite materials, 3D printing filament, machining services, raw materials for rocket and satellite construction.',
  },
  {
    title: 'Electronics & Avionics',
    description: 'Microcontrollers, sensors, batteries, PCB fabrication, and communication equipment.',
  },
  {
    title: 'Software & Tools',
    description: 'CAD licenses, simulation software, cloud computing, and development tools.',
  },
  {
    title: 'Competition & Travel',
    description: 'Registration fees, transportation, accommodation for national and international competitions.',
  },
  {
    title: 'Training & Safety',
    description: 'Safety equipment, training programs, certifications, and workshop tools.',
  },
  {
    title: 'Outreach & Education',
    description: 'STEM education events, public demonstrations, and educational materials.',
  },
];

const benefits = [
  'Logo visibility on rockets, satellites, and team apparel',
  'Recognition at competitions and events',
  'Opportunities to mentor students and share industry expertise',
  'Access to talented, motivated students for recruitment',
  'Association with cutting-edge student aerospace research',
  'Community engagement and STEM education support',
];

const Sponsors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Sponsors & Support</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our sponsors make student-led space engineering possible. With your support, 
              students gain hands-on experience that shapes their careers and contributes to aerospace innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Why Support USST?</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you sponsor USST, you are investing in the next generation of aerospace engineers, 
                scientists, and leaders. Your support provides students with resources they could not 
                otherwise access, enabling hands-on learning that goes far beyond the classroom.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our students go on to work at aerospace companies, research institutions, and innovative 
                startups across Canada and beyond. Your partnership helps build that pipeline of talent.
              </p>
              <Button size="lg" className="group" asChild>
                <a href="mailto:president@usst.ca">
                  Become a Sponsor
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="bg-accent rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Sponsor Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where Support Goes */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Where Your Support Goes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every contribution directly supports student learning and project development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {impactAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-display font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you to the organizations that support our mission.
            </p>
          </div>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {sponsorTiers.map((tier, index) => (
              <div key={index}>
                <h3 className="font-display text-xl font-semibold mb-4 text-center">
                  {tier.name} Sponsors
                </h3>
                <p className="text-muted-foreground text-sm text-center mb-6">{tier.description}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {tier.sponsors.map((sponsor, sIndex) => (
                    <div 
                      key={sIndex}
                      className="bg-muted rounded-xl p-8 flex items-center justify-center min-h-[120px] border border-border"
                    >
                      {sponsor.logo ? (
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-16" />
                      ) : (
                        <div className="text-muted-foreground text-center">
                          <Building2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <span className="text-sm">{sponsor.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <Mail className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Partner With Us
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Interested in supporting student aerospace engineering? We would love to discuss 
            sponsorship opportunities tailored to your organization.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="mailto:president@usst.ca">
              Contact Our Sponsorship Team
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
