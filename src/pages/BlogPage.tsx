import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const featuredPosts = [
    {
      id: 'bhoothnii',
      title: "The Bhoothnii: A Comprehensive Review",
      excerpt: "Dive deep into the supernatural thriller that's taking Bollywood by storm. Shraddha Kapoor delivers a career-defining performance in this atmospheric horror masterpiece that combines traditional folklore with modern filmmaking techniques.",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      category: "Movie Review",
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=800&h=500&fit=crop&q=80",
      readTime: "8 min read",
      featured: true,
      tags: ["Horror", "Bollywood", "Shraddha Kapoor", "Supernatural"],
      rating: "4.5/5"
    },
    {
      id: 'tollywood-trends',
      title: "Tollywood 2024: Emerging Trends & Box Office Dominance",
      excerpt: "From SS Rajamouli's cinematic universe to Ram Charan's upcoming projects, explore how Telugu cinema is reshaping Indian entertainment with record-breaking budgets and international collaborations.",
      author: "Priya Sharma",
      date: "2024-01-12",
      category: "Industry Analysis",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=800&h=500&fit=crop&q=80",
      readTime: "6 min read",
      featured: true,
      tags: ["Tollywood", "RRR", "Industry", "Box Office"],
      rating: "Trending"
    },
    {
      id: 'bollywood-box-office',
      title: "Bollywood Box Office Report 2024: Complete Analysis",
      excerpt: "Shah Rukh Khan's comeback continues with Jawan's success, while new-age directors like Rishab Shetty redefine commercial cinema. Complete breakdown of hits, misses, and surprise blockbusters.",
      author: "Vikram Singh",
      date: "2024-01-10",
      category: "Box Office",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop&q=80",
      readTime: "10 min read",
      featured: true,
      tags: ["Box Office", "Shah Rukh Khan", "Commercial Cinema"],
      rating: "Analysis"
    },
    {
      id: 'animal-review',
      title: "Animal: Ranbir Kapoor's Raw & Unfiltered Performance",
      excerpt: "Sandeep Reddy Vanga's controversial masterpiece pushes boundaries with Ranbir Kapoor's most intense role yet. A deep dive into the film's complex themes and polarizing reception.",
      author: "Meera Chopra",
      date: "2024-01-08",
      category: "Movie Review",
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=800&h=500&fit=crop&q=80",
      readTime: "12 min read",
      featured: false,
      tags: ["Ranbir Kapoor", "Sandeep Reddy Vanga", "Drama"],
      rating: "4/5"
    }
  ];

  const recentPosts = [
    {
      id: 'kollywood-updates',
      title: "Kollywood's Rising Stars: Sivakarthikeyan to Vijay Sethupathi's Legacy",
      excerpt: "From Sivakarthikeyan's commercial success to Dhanush's international projects, discover the actors reshaping Tamil cinema with their versatile performances and box office appeal.",
      author: "Deepika Menon",
      date: "2024-01-08",
      category: "Celebrity News",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&q=80",
      views: "15.2K"
    },
    {
      id: 'behind-scenes',
      title: "RRR 2: SS Rajamouli's Vision Unfolds with Exclusive Production Updates",
      excerpt: "Go behind the cameras as SS Rajamouli begins pre-production on the most anticipated sequel. Exclusive interviews with the cast and crew reveal the massive scale planned for this epic continuation.",
      author: "Arjun Reddy",
      date: "2024-01-05",
      category: "Production News",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=400&h=250&fit=crop&q=80",
      views: "28.7K"
    },
    {
      id: 'movie-reviews',
      title: "January 2024: Top 10 Must-Watch Movies Across All Industries",
      excerpt: "From Hrithik Roshan's Fighter to Mahesh Babu's Guntur Kaaram, our critics panel reviews the month's biggest releases with detailed analysis and ratings.",
      author: "Film Critics Panel",
      date: "2024-01-03",
      category: "Reviews",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop&q=80",
      views: "42.1K"
    },
    {
      id: 'ott-releases',
      title: "OTT Releases This Week: Netflix, Prime Video & Disney+ Hotstar",
      excerpt: "Complete guide to this week's streaming releases including Scam 2003, Made in Heaven 2, and exclusive premieres you can't miss.",
      author: "Streaming Desk",
      date: "2024-01-01",
      category: "OTT Updates",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&q=80",
      views: "18.9K"
    },
    {
      id: 'awards-season',
      title: "Awards Season 2024: Predictions and Dark Horses",
      excerpt: "As awards season approaches, we analyze the front-runners and surprise contenders across Filmfare, National Awards, and international festivals.",
      author: "Awards Team",
      date: "2023-12-28",
      category: "Awards",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1566665071221-b87cf1b6fb22?w=400&h=250&fit=crop&q=80",
      views: "12.4K"
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