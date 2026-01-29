import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Clock, 
  MessageCircle, 
  CheckCircle,
  Mail,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const steps = [
  {
    number: '01',
    title: 'Express Interest',
    description: 'Fill out our interest form or join our Discord server to introduce yourself.',
  },
  {
    number: '02',
    title: 'Attend a Meeting',
    description: 'Come to one of our general meetings to learn about current projects and meet the team.',
  },
  {
    number: '03',
    title: 'Choose a Subteam',
    description: 'Pick the area that interests you most — structures, avionics, propulsion, recovery, or operations.',
  },
  {
    number: '04',
    title: 'Start Contributing',
    description: 'Work alongside experienced members on real tasks. We will teach you everything you need to know.',
  },
];

const faqs = [
  {
    question: 'Do I need engineering experience?',
    answer: 'Not at all! We welcome students from all faculties and backgrounds. Whether you are in arts, science, business, or engineering, there is a place for you. We teach all necessary skills.',
  },
  {
    question: 'What is the time commitment?',
    answer: 'Most members spend 3-5 hours per week on team activities. This can flex based on your schedule and project phases. We understand school comes first.',
  },
  {
    question: 'What will I actually do?',
    answer: 'In your first term, you will learn the basics of your subteam, work on smaller tasks, and gradually take on more responsibility. By your second term, you will be contributing to real design and build work.',
  },
  {
    question: 'When can I join?',
    answer: 'We recruit at the start of each semester (September and January). However, we are always happy to hear from interested students — reach out anytime!',
  },
  {
    question: 'Is there a cost to join?',
    answer: 'Basic membership is free. Some optional activities (like competition travel) may have costs, but we work to minimize barriers and offer support when possible.',
  },
];

const benefits = [
  'Hands-on engineering experience',
  'Build a professional portfolio',
  'Network with industry sponsors',
  'Leadership opportunities',
  'Competition travel experiences',
  'Lifelong friendships',
];

const Join = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Now Recruiting</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-primary-foreground">
              Join the Team
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              You do not need to know anything about rockets or satellites to join us. 
              All you need is curiosity and willingness to learn. We will teach you the rest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
                asChild
              >
                <a href="https://discord.gg/usst" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Join Discord
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                asChild
              >
                <a href="mailto:usst@usask.ca">
                  <Mail className="mr-2 w-5 h-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">All Majors Welcome</h3>
              <p className="text-muted-foreground text-sm">
                Engineering, science, arts, business — we need diverse perspectives to succeed.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">No Experience Required</h3>
              <p className="text-muted-foreground text-sm">
                We provide training and mentorship. Start from zero and grow with us.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Flexible Commitment</h3>
              <p className="text-muted-foreground text-sm">
                We work around your class schedule. School always comes first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Steps */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">How to Join</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Getting started is simple. Follow these steps to become part of the team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors"
                >
                  <div className="absolute -top-4 -right-4 text-8xl font-display font-bold text-muted opacity-50 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">What You Will Gain</h2>
              <p className="text-muted-foreground mb-8">
                Being part of USST is more than just building rockets. It is about personal growth, 
                professional development, and being part of something bigger than yourself.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">First Term Expectations</h3>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-medium mb-1">Month 1</h4>
                  <p className="text-muted-foreground text-sm">Orientation, safety training, meet your subteam</p>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-medium mb-1">Month 2</h4>
                  <p className="text-muted-foreground text-sm">Learn fundamental skills, shadow experienced members</p>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-medium mb-1">Month 3</h4>
                  <p className="text-muted-foreground text-sm">Take ownership of smaller tasks, contribute to design</p>
                </div>
                <div className="bg-card rounded-xl p-4">
                  <h4 className="font-medium mb-1">Month 4</h4>
                  <p className="text-muted-foreground text-sm">Active contributor, ready to take on bigger challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <h3 className="font-display font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Launch Your Journey?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            Take the first step today. Join our Discord, send us an email, or fill out our interest form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              asChild
            >
              <a href="https://discord.gg/usst" target="_blank" rel="noopener noreferrer">
                Join Discord
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              asChild
            >
              <a href="mailto:usst@usask.ca">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
