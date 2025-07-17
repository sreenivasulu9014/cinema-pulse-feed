import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const featuredPosts = [
    {
      id: 'bhoothnii',
      title: "The Bhoothnii: A Comprehensive Review",
      excerpt: "Dive deep into the supernatural thriller that's taking Bollywood by storm. Our complete analysis of plot, performances, and cinematic excellence.",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      category: "Movie Review",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 'tollywood-trends',
      title: "Tollywood 2024: Emerging Trends",
      excerpt: "From period dramas to sci-fi epics, explore what's shaping Telugu cinema this year.",
      author: "Priya Sharma",
      date: "2024-01-12",
      category: "Industry Analysis",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 'bollywood-box-office',
      title: "Bollywood Box Office Report 2024",
      excerpt: "Complete analysis of hits, misses, and surprise successes in Hindi cinema.",
      author: "Vikram Singh",
      date: "2024-01-10",
      category: "Box Office",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      readTime: "10 min read"
    }
  ];

  const recentPosts = [
    {
      id: 'kollywood-updates',
      title: "Kollywood's Rising Stars of 2024",
      excerpt: "Meet the new faces making waves in Tamil cinema.",
      author: "Deepika Menon",
      date: "2024-01-08",
      category: "Celebrity News",
      readTime: "5 min read"
    },
    {
      id: 'behind-scenes',
      title: "Behind the Scenes: RRR 2 Production Updates",
      excerpt: "Exclusive insights into the making of the most anticipated sequel.",
      author: "Arjun Reddy",
      date: "2024-01-05",
      category: "Production News",
      readTime: "7 min read"
    },
    {
      id: 'movie-reviews',
      title: "Top 10 Must-Watch Movies This Month",
      excerpt: "Our curated list of films you shouldn't miss.",
      author: "Film Critics Panel",
      date: "2024-01-03",
      category: "Reviews",
      readTime: "12 min read"
    }
  ];

  const categories = [
    "Movie Reviews",
    "Celebrity News", 
    "Box Office",
    "Industry Analysis",
    "Behind the Scenes",
    "Interviews",
    "Fan Theories",
    "Cinema Trends"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Cinema Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Deep dives, reviews, gossip, and everything cinema
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Browse Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button key={index} variant="outline" size="sm" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="cinema" size="sm" className="group">
                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Recent Posts</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="ml-4">
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;