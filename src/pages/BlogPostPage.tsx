import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BlogPostPage = () => {
  const { id } = useParams();

  // Sample blog post data - in a real app, this would come from an API
  const blogPosts = {
    'bhoothnii': {
      title: "The Bhoothnii: A Comprehensive Review",
      author: "Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Movie Review",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      content: `
        <h2>A Supernatural Thriller That Delivers</h2>
        <p>The Bhoothnii stands as a remarkable entry in the supernatural thriller genre, combining traditional horror elements with modern storytelling techniques. Director Rajesh Tripathi has crafted a film that doesn't just rely on jump scares but builds a genuinely eerie atmosphere that stays with you long after the credits roll.</p>
        
        <h3>Plot and Narrative</h3>
        <p>The story follows Meera (played by Shraddha Kapoor), a young journalist who moves to a remote hill station to investigate a series of mysterious disappearances. What starts as a routine assignment quickly turns into a nightmare as she encounters the supernatural entity known as the Bhoothnii.</p>
        
        <p>The screenplay, written by Vikash Bahl, cleverly weaves together local folklore with contemporary fears, creating a narrative that feels both timeless and urgently relevant. The pacing is deliberate, allowing tension to build naturally rather than forcing scares.</p>
        
        <h3>Performances</h3>
        <p>Shraddha Kapoor delivers one of her finest performances as Meera. Her portrayal of a woman slowly losing her grip on reality is nuanced and compelling. The supporting cast, including Rajkummar Rao as the local historian and Pankaj Tripathi as the mysterious landlord, provides excellent support.</p>
        
        <h3>Technical Aspects</h3>
        <p>Cinematographer Ravi Varman deserves special mention for creating the film's haunting visual language. The use of shadows and natural lighting creates an atmosphere of dread that permeates every frame. The sound design by Amrit Pritam is equally impressive, with subtle audio cues that enhance the supernatural elements without overwhelming the narrative.</p>
        
        <h3>Cultural Significance</h3>
        <p>What sets The Bhoothnii apart from other horror films is its deep connection to Indian folklore. The film doesn't just borrow surface elements but explores the cultural and psychological roots of these beliefs. This adds a layer of authenticity that elevates the material beyond typical genre fare.</p>
        
        <h3>Final Verdict</h3>
        <p>The Bhoothnii is a triumph of atmospheric horror filmmaking. It proves that Indian cinema can create genuinely scary films without relying on Western tropes. While it may not appeal to those seeking gore or constant action, it offers something far more valuable: a genuinely haunting experience that respects both its audience and its cultural roots.</p>
        
        <p><strong>Rating: 4/5 stars</strong></p>
        <p><em>The Bhoothnii is currently playing in theaters nationwide and available on streaming platforms.</em></p>
      `
    },
    'tollywood-trends': {
      title: "Tollywood 2024: Emerging Trends",
      author: "Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Industry Analysis",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=800&h=400&fit=crop",
      content: `
        <h2>The Evolution of Telugu Cinema</h2>
        <p>Telugu cinema is experiencing a renaissance, with filmmakers pushing creative boundaries and audiences embracing diverse storytelling. Here are the key trends shaping Tollywood in 2024.</p>
        
        <h3>Pan-India Appeal</h3>
        <p>Following the massive success of RRR and Pushpa, Telugu filmmakers are increasingly creating content with pan-India appeal. This trend is reshaping not just the content but also the marketing and distribution strategies.</p>
        
        <h3>Technology Integration</h3>
        <p>From advanced VFX in period dramas to innovative camera techniques, Telugu cinema is embracing cutting-edge technology to enhance storytelling.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="cinema">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = [
    {
      title: "Top 10 Horror Movies of 2024",
      slug: "top-horror-2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      title: "Bollywood's New Wave Directors",
      slug: "new-wave-directors",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Article Meta */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  Like
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Comments Section */}
            <section className="mt-16 pt-8 border-t border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Comments
              </h3>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <p className="text-muted-foreground">Comments coming soon! Join our newsletter to stay updated.</p>
                <Button variant="cinema" className="mt-4">
                  Subscribe for Updates
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Posts */}
            <Card className="bg-card border-border mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex gap-3">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                          {relatedPost.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">Stay Updated</h3>
                <p className="text-muted-foreground mb-4">Get the latest movie news and reviews delivered to your inbox.</p>
                <Button variant="cinema" className="w-full">
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;