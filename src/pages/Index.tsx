import { Link } from 'react-router-dom';
import { ArrowRight, Users, Rocket, Satellite, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import StarfieldBackground from '@/components/StarfieldBackground';
import TypewriterText from '@/components/TypewriterText';
import cubesatImage from '@/assets/cubesat-project.jpg';
import rocketImage from '@/assets/rocket-project.jpg';

const typewriterWords = [
  'exploration',
  'engineering',
  'satellites',
  'rockets',
  'rovers',
  'space',
];

const stats = [
  { number: '10+', label: 'Years of Innovation' },
  { number: '100+', label: 'Student Members' },
  { number: '3', label: 'Rockets Built' },
  { number: '2', label: 'CubeSats Designed' },
];

const highlights = [
  {
    icon: Satellite,
    title: 'CubeSat Program',
    description: 'Currently developing our second CubeSat mission, gaining hands-on experience in satellite design and space systems.',
  },
  {
    icon: Rocket,
    title: 'Rocket Development',
    description: 'Building our third rocket with advanced propulsion and avionics, competing at national-level competitions.',
  },
  {
    icon: Sparkles,
    title: 'Research & Innovation',
    description: 'From space elevators to reduced gravity experiments, we push boundaries in aerospace engineering.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Starfield */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <StarfieldBackground />
        
        {/* Content overlay */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="fade-in-up max-w-4xl mx-auto">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">University of Saskatchewan Space Design Team</span>
            </div>
            
            {/* Main Heading with Typewriter */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              <TypewriterText 
                prefix="Designing for" 
                words={typewriterWords}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={1500}
              />
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              A student-led team building CubeSats, rockets, and the next generation of aerospace engineers. 
              <span className="text-primary font-semibold"> No experience required.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/join">
                <Button size="lg" className="btn-primary-glow text-base px-8 py-6 group">
                  Join the Team
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Current Projects - Diagonal Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Current Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hands-on engineering experience building real space systems
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CubeSat Card */}
            <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cubesatImage} 
                  alt="CubeSat Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                  <Satellite className="w-3 h-3" />
                  Active Development
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">CubeSat II</h3>
                <p className="text-muted-foreground text-sm">
                  Our second satellite mission, featuring advanced attitude control and communication systems.
                </p>
              </div>
            </div>

            {/* Rocket Card */}
            <div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 lg:mt-12">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={rocketImage} 
                  alt="Rocket Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                  <Rocket className="w-3 h-3" />
                  Active Development
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Rocket III</h3>
                <p className="text-muted-foreground text-sm">
                  Our third high-powered rocket with custom avionics and recovery systems.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" size="lg" className="group">
                Explore All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we take on real engineering challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-children">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
              <Users className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Open to All Students</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              You Belong Here
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              We welcome students from every major, with any level of experience. 
              If you're curious about space and want to build something real, we'll teach you everything you need to know.
            </p>
            
            <Link to="/join">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-base px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
