import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { blogPosts, getFeaturedPosts } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';

const BlogPage = () => {
  useSEO({ page: 'blog' });
  
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Live Updates
            </div>
          </div>
          
          {/* Hero Featured Post */}
          <div className="mb-8">
            <Card className="bg-card border-border overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPosts[0].category}
                    </span>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {featuredPosts[0].rating}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredPosts[0].tags?.map((tag, index) => (
                        <span key={index} className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPosts[0].date}
                      </div>
                      <span>{featuredPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPosts[0].id}`}>
                    <Button variant="cinema" size="lg" className="group">
                      Read Full Review 
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Other Featured Posts */}
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.slice(1).map((post) => (
              <Card key={post.id} className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                    {post.rating && (
                      <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs">
                        {post.rating}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags?.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
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
                      <Button variant="outline" size="sm" className="group">
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
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest Stories</h2>
            <Button variant="outline" size="sm">View All Posts</Button>
          </div>
          <div className="grid gap-6">
            {recentPosts.map((post, index) => (
              <Card key={post.id} className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    {post.views && (
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs">
                          {post.views} views
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="cinema" size="sm" className="group">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Stay in the Loop</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get exclusive movie reviews, industry insights, and behind-the-scenes content delivered straight to your inbox. 
                  Join thousands of cinema enthusiasts who trust our coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="cinema" size="lg">
                    Subscribe Now
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe anytime. Your email is safe with us.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;