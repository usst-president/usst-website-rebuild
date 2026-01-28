import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Satellite, Globe, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import cubesatImage from '@/assets/cubesat-project.jpg';
import rocketImage from '@/assets/rocket-project.jpg';

const projects = [
  {
    year: '2024–2025',
    title: 'CubeSat II & Rocket III',
    status: 'In Progress',
    description: 'Our most ambitious year yet. We are developing our second CubeSat mission while simultaneously building our third high-powered rocket for national competition.',
    icon: Satellite,
    image: cubesatImage,
    subsystems: [
      { name: 'Structures', desc: 'Lightweight composite frames and 3D-printed components' },
      { name: 'Avionics', desc: 'Custom flight computers with sensor integration' },
      { name: 'Propulsion', desc: 'Advanced motor selection and testing' },
      { name: 'Recovery', desc: 'Dual-deploy parachute systems' },
      { name: 'Communications', desc: 'Ground station development' },
    ],
    highlights: [
      'First student-built CubeSat from Saskatchewan',
      'Targeting 10,000 ft altitude with Rocket III',
      'Partnership with Canadian Space Agency',
    ],
  },
  {
    year: '2023–2024',
    title: 'Rocket II & CubeSat I Completion',
    status: 'Completed',
    description: 'Successfully completed our second rocket and finalized the design for our first CubeSat mission, laying groundwork for future space systems.',
    icon: Rocket,
    image: rocketImage,
    subsystems: [
      { name: 'Structures', desc: 'Carbon fiber airframe construction' },
      { name: 'Avionics', desc: 'Integrated telemetry and tracking' },
      { name: 'Propulsion', desc: 'Commercial solid motor integration' },
      { name: 'Recovery', desc: 'Electronic dual-deploy system' },
    ],
    highlights: [
      'Successful test flights',
      'Launch Canada competition entry',
      'CubeSat design review completed',
    ],
  },
  {
    year: '2022–2023',
    title: 'Reduced Gravity Experiment',
    status: 'Completed',
    description: 'Conducted a microgravity research experiment, studying fluid dynamics in reduced gravity environments as part of a national research program.',
    icon: FlaskConical,
    image: null,
    subsystems: [
      { name: 'Experiment Design', desc: 'Fluid behavior analysis apparatus' },
      { name: 'Data Acquisition', desc: 'High-speed camera and sensors' },
      { name: 'Safety Systems', desc: 'Containment and emergency shutoff' },
    ],
    highlights: [
      'Flew on parabolic flight campaign',
      'Published research findings',
      'Interdisciplinary collaboration',
    ],
  },
  {
    year: '2020–2022',
    title: 'Rover & Space Elevator Research',
    status: 'Completed',
    description: 'Explored planetary exploration through rover development and investigated space elevator concepts for the international tether competition.',
    icon: Globe,
    image: null,
    subsystems: [
      { name: 'Mobility', desc: 'Multi-terrain wheel systems' },
      { name: 'Autonomy', desc: 'Computer vision and pathfinding' },
      { name: 'Tether Design', desc: 'High-strength cable analysis' },
    ],
    highlights: [
      'Competed in international rover challenge',
      'Space elevator feasibility study',
      'Established core team processes',
    ],
  },
  {
    year: '2015–2020',
    title: 'Rocket I & Foundation',
    status: 'Completed',
    description: 'The beginning of USST. We built our first rocket from scratch and established the team culture that continues to drive us forward.',
    icon: Rocket,
    image: null,
    subsystems: [
      { name: 'Structures', desc: 'Fiberglass airframe' },
      { name: 'Recovery', desc: 'Basic parachute system' },
      { name: 'Operations', desc: 'Launch procedures and safety' },
    ],
    highlights: [
      'First successful launch',
      'Established safety protocols',
      'Built mentorship program',
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From our first rocket to orbiting satellites, each project represents countless hours of learning, 
              iteration, and teamwork. We focus on the journey of engineering growth, not just the final result.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Timeline connector */}
                {index < projects.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 bottom-0 w-0.5 bg-border -mb-16" />
                )}
                
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Year Badge */}
                  <div className="md:col-span-2">
                    <div className="sticky top-24">
                      <div className="inline-flex items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <project.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="font-display text-xl font-bold">{project.year}</div>
                        <div className={`text-sm font-medium ${
                          project.status === 'In Progress' ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="md:col-span-10">
                    <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      {/* Image if available */}
                      {project.image && (
                        <div className="aspect-[21/9] overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="p-8">
                        <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          {project.description}
                        </p>

                        {/* Subsystems */}
                        <div className="mb-8">
                          <h3 className="font-display text-lg font-semibold mb-4">Subsystems</h3>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.subsystems.map((sub, subIndex) => (
                              <div 
                                key={subIndex}
                                className="bg-muted rounded-xl p-4"
                              >
                                <div className="font-medium text-sm mb-1">{sub.name}</div>
                                <div className="text-muted-foreground text-sm">{sub.desc}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h3 className="font-display text-lg font-semibold mb-4">Key Highlights</h3>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-muted-foreground">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Want to contribute to our next project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us and work on real aerospace engineering challenges. No experience required.
          </p>
          <Link to="/join">
            <Button size="lg" className="group">
              Join the Team
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
