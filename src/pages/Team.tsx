import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Heart, Lightbulb, Award, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const timeline = [
  {
    year: '2004',
    title: 'Origin',
    description:
      'Formed in 2005, the University of Saskatchewan Space Design Team (USST) is a student group dedicated to the development of next generation space technologies.',
    projectLink: null,
    image: null as string | null,
  },
  {
    year: '2005–2010',
    title: 'Space Elevator Era',
    description:
      'The team placed 1st for three consecutive years in 2005, 2006, and 2007, 3rd in 2009, and set world records for "Most Power Wirelessly Beamed" and "Fastest Power Beamed Climb". In 2010, the team competed in the Annual Japan Space Elevator Technology and Engineering Competition, and set the record for the fastest climb with the battery powered climber, which had a power-to-weight ratio greater than a Formula 1 race car.',
    projectLink: '/projects#space-elevator',
    image: null as string | null,
  },
  {
    year: '2012–2014',
    title: 'Start of the NanoSat Era',
    description:
      'In 2012 the USST started designing a nanosatellite for the Canadian Satellite Design Challenge. The team placed 3rd in the critical design review. Our mission was a scientific payload to study the total electron content of the atmosphere. The approach was endorsed by a senior researcher from the United States Naval Research Laboratory.',
    projectLink: '/projects#cubesat-i',
    image: null as string | null,
  },
  {
    year: '2014–2018',
    title: 'High Altitude Balloon',
    description:
      'The High Altitude Balloon Project, known as "the HAB" among team members, was used to collect images, video, environmental data and serve as a platform for scientific experiments.',
    projectLink: null,
    image: null as string | null,
  },
  {
    year: '2017',
    title: 'Project Starfox',
    description:
      'In 2017 we were one of four out of 29 teams selected for the Can-RGX Design Challenge organized by SEDS Canada (Students for the Exploration and Development of Space). Our experiment, STARFOX (Spinning Terrestrial Analog Regolith Filtering Operation eXperiment), was created to test the adaptability of standard mineral screening and filtering methods in micro-gravity.',
    projectLink: '/projects#reduced-gravity',
    image: null as string | null,
  },
  {
    year: '2014–2018',
    title: 'Mars Rover Era',
    description:
      'Following the completion of the first ever Canadian Satellite Design Challenge, the USST moved into a new area of space technology — the design and construction of rovers. The team placed 5th worldwide at the 2018 Canadian International Rover Challenge in Drumheller, Alberta. Previous awards include 1st worldwide at the European Rover Challenge in 2015 and 1st Canadian Team at the University Rover Challenge in 2014 and 2015.',
    projectLink: '/projects#rover',
    image: null as string | null,
  },
  {
    year: '2020–Present',
    title: 'RADSAT-SK & Beyond',
    description:
      '100+ members across multiple disciplines working on CubeSat II and Rocket III, pushing the boundaries of student-led aerospace engineering at the University of Saskatchewan.',
    projectLink: '/projects#cubesat-ii',
    image: null as string | null,
  },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'Every decision we make prioritizes the safety of our team and community. We follow rigorous protocols and never cut corners.',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description:
      'Students from every faculty and background are welcome. Diversity of thought makes us stronger engineers.',
  },
  {
    icon: Heart,
    title: 'Mentorship Culture',
    description:
      'Senior members actively teach and support newcomers. Everyone learns, everyone grows.',
  },
  {
    icon: Lightbulb,
    title: 'Learn by Doing',
    description:
      'We believe in hands-on experience. You will build, test, fail, iterate, and succeed.',
  },
];

const teams = [
  { name: 'Executive Team', description: 'Overall team leadership, strategy, and external relations' },
  { name: 'Structures', description: 'Airframes, composite materials, 3D printing, mechanical design' },
  { name: 'Avionics', description: 'Flight computers, sensors, data logging, embedded systems' },
  { name: 'Propulsion', description: 'Motor testing, performance analysis, integration' },
  { name: 'Recovery', description: 'Parachute systems, deployment mechanisms, testing' },
  { name: 'Communications', description: 'Ground stations, RF systems, telemetry' },
  { name: 'Operations', description: 'Safety, logistics, competition planning, documentation' },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Team &amp; History</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're a student-run, multidisciplinary team united by curiosity about space and a passion for
              hands-on engineering. Here's our story and how we work together.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-16 text-center">Our Journey</h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-6 items-stretch ${
                    !isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image slot */}
                  <div className="md:w-5/12 shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`${item.title} team photo`}
                        className="w-full h-full min-h-[200px] object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[200px] rounded-2xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground">
                        <ImageIcon className="w-10 h-10" />
                        <span className="text-sm font-medium">Team photo placeholder</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:w-7/12">
                    <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block bg-primary/10 text-primary text-sm font-bold px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>

                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base flex-1">
                        {item.description}
                      </p>

                      {item.projectLink && (
                        <div className="mt-5 pt-4 border-t border-border">
                          <Link
                            to={item.projectLink}
                            className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline group"
                          >
                            View related project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
            Our leadership rotates annually, giving students the opportunity to develop real management and
            organizational skills while driving ambitious projects forward.
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
