import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const newsItems = [
  {
    date: '2025-01-15',
    category: 'Announcement',
    title: 'Winter 2025 Recruitment Now Open',
    excerpt: 'Looking for motivated students to join our CubeSat and Rocket teams. All majors welcome, no experience required. Apply by January 31st!',
    featured: true,
  },
  {
    date: '2025-01-08',
    category: 'Milestone',
    title: 'CubeSat II Passes Critical Design Review',
    excerpt: 'Our second satellite mission has successfully passed its critical design review, moving us closer to flight hardware production.',
    featured: false,
  },
  {
    date: '2024-12-10',
    category: 'Sponsor',
    title: 'Thank You to Our 2024 Sponsors',
    excerpt: 'We are grateful for the continued support from our industry partners who make student-led space engineering possible.',
    featured: false,
  },
  {
    date: '2024-11-22',
    category: 'Test',
    title: 'Successful Recovery System Test',
    excerpt: 'Rocket III recovery subsystem completed ground testing with successful dual-deploy parachute activation.',
    featured: false,
  },
  {
    date: '2024-10-15',
    category: 'Event',
    title: 'USST at Saskatchewan Science Centre',
    excerpt: 'Team members volunteered at the Science Centre to inspire the next generation of engineers and scientists.',
    featured: false,
  },
  {
    date: '2024-09-05',
    category: 'Announcement',
    title: 'Fall 2024 Semester Kickoff',
    excerpt: 'Welcome to all new and returning members! This semester we are focusing on manufacturing and integration phases.',
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Announcement': 'bg-primary/10 text-primary',
    'Milestone': 'bg-green-100 text-green-700',
    'Sponsor': 'bg-amber-100 text-amber-700',
    'Test': 'bg-blue-100 text-blue-700',
    'Event': 'bg-purple-100 text-purple-700',
  };
  return colors[category] || 'bg-muted text-muted-foreground';
};

const News = () => {
  const featuredPost = newsItems.find(item => item.featured);
  const regularPosts = newsItems.filter(item => !item.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Stay up to date with our latest milestones, competition updates, 
              recruitment announcements, and team activities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featuredPost.date)}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((item, index) => (
              <article 
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.date)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Follow us on social media or join our Discord to get the latest updates on our projects and events.
          </p>
          <Link to="/join">
            <Button size="lg" className="group">
              Connect With Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default News;
