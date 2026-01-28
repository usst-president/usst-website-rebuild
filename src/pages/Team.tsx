import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Heart, Lightbulb, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const timeline = [
  {
    year: '2015',
    title: 'USST Founded',
    description: 'A small group of engineering students started with a dream to build rockets.',
  },
  {
    year: '2017',
    title: 'First Successful Launch',
    description: 'Rocket I achieved flight, marking our first major engineering milestone.',
  },
  {
    year: '2019',
    title: 'Expanded to New Domains',
    description: 'Added rover development and space elevator research to our portfolio.',
  },
  {
    year: '2022',
    title: 'Microgravity Research',
    description: 'Conducted our first reduced gravity experiment on a parabolic flight.',
  },
  {
    year: '2023',
    title: 'CubeSat Program Launch',
    description: 'Began development of our first satellite mission.',
  },
  {
    year: '2024',
    title: 'Growing Strong',
    description: '100+ members across multiple disciplines working on CubeSat II and Rocket III.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every decision we make prioritizes the safety of our team and community. We follow rigorous protocols and never cut corners.',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'Students from every faculty and background are welcome. Diversity of thought makes us stronger engineers.',
  },
  {
    icon: Heart,
    title: 'Mentorship Culture',
    description: 'Senior members actively teach and support newcomers. Everyone learns, everyone grows.',
  },
  {
    icon: Lightbulb,
    title: 'Learn by Doing',
    description: 'We believe in hands-on experience. You will build, test, fail, iterate, and succeed.',
  },
];

const teams = [
  {
    name: 'Executive Team',
    description: 'Overall team leadership, strategy, and external relations',
  },
  {
    name: 'Structures',
    description: 'Airframes, composite materials, 3D printing, mechanical design',
  },
  {
    name: 'Avionics',
    description: 'Flight computers, sensors, data logging, embedded systems',
  },
  {
    name: 'Propulsion',
    description: 'Motor testing, performance analysis, integration',
  },
  {
    name: 'Recovery',
    description: 'Parachute systems, deployment mechanisms, testing',
  },
  {
    name: 'Communications',
    description: 'Ground stations, RF systems, telemetry',
  },
  {
    name: 'Operations',
    description: 'Safety, logistics, competition planning, documentation',
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Team & History</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're a student-run, multidisciplinary team united by curiosity about space 
              and a passion for hands-on engineering. Here's our story and how we work together.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                      <div className="font-display text-primary font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from design decisions to team culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Team Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team is organized into specialized subteams, each focusing on different aspects of our projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teams.map((team, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:bg-muted/50 transition-colors group"
              >
                <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                  {team.name}
                </h3>
                <p className="text-muted-foreground text-sm">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Recognition */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-4">Student-Led Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our leadership rotates annually, giving students the opportunity to develop real management 
            and organizational skills while driving ambitious projects forward.
          </p>
          <Link to="/join">
            <Button size="lg" className="group">
              Become Part of Our Story
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
