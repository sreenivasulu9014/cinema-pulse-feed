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
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      authorBio: "Senior Film Critic with 15+ years covering Bollywood and regional cinema",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Movie Review",
      image: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=1200&h=600&fit=crop&q=80",
      tags: ["Horror", "Bollywood", "Shraddha Kapoor", "Supernatural", "Indian Cinema"],
      rating: "4.5/5",
      likes: 1247,
      shares: 89,
      content: `
        <div class="content-section">
          <h2 class="section-title">A Supernatural Thriller That Delivers</h2>
          <p class="lead-paragraph">The Bhoothnii stands as a remarkable entry in the supernatural thriller genre, combining traditional horror elements with modern storytelling techniques. Director Rajesh Tripathi has crafted a film that doesn't just rely on jump scares but builds a genuinely eerie atmosphere that stays with you long after the credits roll.</p>
          
          <div class="highlight-box">
            <h4>Quick Facts</h4>
            <ul>
              <li><strong>Director:</strong> Rajesh Tripathi</li>
              <li><strong>Lead Cast:</strong> Shraddha Kapoor, Rajkummar Rao, Pankaj Tripathi</li>
              <li><strong>Genre:</strong> Supernatural Horror/Thriller</li>
              <li><strong>Runtime:</strong> 127 minutes</li>
              <li><strong>Release Date:</strong> December 2023</li>
            </ul>
          </div>
        </div>

        <div class="content-section">
          <h3 class="section-title">Plot and Narrative Excellence</h3>
          <p>The story follows Meera (played by Shraddha Kapoor), a young journalist who moves to a remote hill station to investigate a series of mysterious disappearances. What starts as a routine assignment quickly turns into a nightmare as she encounters the supernatural entity known as the Bhoothnii.</p>
          
          <p>The screenplay, written by Vikash Bahl, cleverly weaves together local folklore with contemporary fears, creating a narrative that feels both timeless and urgently relevant. The pacing is deliberate, allowing tension to build naturally rather than forcing scares.</p>

          <blockquote class="review-quote">
            "Tripathi's direction shows remarkable restraint, understanding that true horror comes from what we don't see rather than what we do."
          </blockquote>
        </div>

        <div class="content-section">
          <h3 class="section-title">Stellar Performances</h3>
          <p>Shraddha Kapoor delivers one of her finest performances as Meera. Her portrayal of a woman slowly losing her grip on reality is nuanced and compelling. The transformation from confident journalist to terrified protagonist is handled with remarkable subtlety.</p>
          
          <p>The supporting cast, including Rajkummar Rao as the enigmatic local historian Dr. Vikram Singh and Pankaj Tripathi as the mysterious landlord, provides excellent support. Each character feels authentic and grounded, even as the supernatural elements escalate.</p>

          <div class="cast-rating">
            <h4>Performance Ratings</h4>
            <div class="rating-grid">
              <div class="rating-item">
                <span class="actor-name">Shraddha Kapoor</span>
                <span class="rating">⭐⭐⭐⭐⭐ 5/5</span>
              </div>
              <div class="rating-item">
                <span class="actor-name">Rajkummar Rao</span>
                <span class="rating">⭐⭐⭐⭐ 4/5</span>
              </div>
              <div class="rating-item">
                <span class="actor-name">Pankaj Tripathi</span>
                <span class="rating">⭐⭐⭐⭐⭐ 5/5</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h3 class="section-title">Technical Mastery</h3>
          <p>Cinematographer Ravi Varman deserves special mention for creating the film's haunting visual language. The use of shadows and natural lighting creates an atmosphere of dread that permeates every frame. The camera work is particularly effective during the supernatural sequences, using clever angles and movements that make the audience feel disoriented alongside the protagonist.</p>
          
          <p>The sound design by Amrit Pritam is equally impressive, with subtle audio cues that enhance the supernatural elements without overwhelming the narrative. The film's score, composed by Ilaiyaraaja, adds layers of tension while respecting the emotional core of the story.</p>

          <div class="technical-specs">
            <h4>Technical Excellence</h4>
            <div class="specs-grid">
              <div class="spec-item">
                <span class="spec-label">Cinematography</span>
                <span class="spec-rating">⭐⭐⭐⭐⭐</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Sound Design</span>
                <span class="spec-rating">⭐⭐⭐⭐⭐</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Visual Effects</span>
                <span class="spec-rating">⭐⭐⭐⭐</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Production Design</span>
                <span class="spec-rating">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section">
          <h3 class="section-title">Cultural Significance and Impact</h3>
          <p>What sets The Bhoothnii apart from other horror films is its deep connection to Indian folklore. The film doesn't just borrow surface elements but explores the cultural and psychological roots of these beliefs. This adds a layer of authenticity that elevates the material beyond typical genre fare.</p>
          
          <p>The movie explores themes of isolation, tradition versus modernity, and the power of belief systems. It's particularly relevant in today's context where urban professionals often find themselves disconnected from their cultural roots.</p>

          <div class="cultural-impact">
            <h4>Cultural Elements</h4>
            <ul>
              <li>Authentic portrayal of hill station folklore</li>
              <li>Exploration of generational trauma</li>
              <li>Commentary on urbanization vs. tradition</li>
              <li>Psychological depth in supernatural elements</li>
            </ul>
          </div>
        </div>

        <div class="content-section final-verdict">
          <h3 class="section-title">Final Verdict</h3>
          <p>The Bhoothnii is a triumph of atmospheric horror filmmaking that proves Indian cinema can create genuinely scary films without relying on Western tropes. While it may not appeal to those seeking gore or constant action, it offers something far more valuable: a genuinely haunting experience that respects both its audience and its cultural roots.</p>
          
          <p>This is not just a horror film; it's a meditation on fear, belief, and the stories that shape us. Tripathi has created a modern classic that will be discussed and analyzed for years to come.</p>

          <div class="final-rating">
            <div class="rating-breakdown">
              <h4>Overall Rating: 4.5/5 ⭐⭐⭐⭐⭐</h4>
              <div class="rating-details">
                <div class="rating-category">
                  <span>Story & Direction</span>
                  <span>4.5/5</span>
                </div>
                <div class="rating-category">
                  <span>Performances</span>
                  <span>5/5</span>
                </div>
                <div class="rating-category">
                  <span>Technical Aspects</span>
                  <span>4.5/5</span>
                </div>
                <div class="rating-category">
                  <span>Entertainment Value</span>
                  <span>4/5</span>
                </div>
              </div>
            </div>
          </div>

          <div class="watch-info">
            <h4>Where to Watch</h4>
            <p><strong>Theaters:</strong> Currently playing nationwide in Hindi, Tamil, and Telugu</p>
            <p><strong>Streaming:</strong> Available on Netflix and Amazon Prime Video from February 2024</p>
            <p><strong>Digital Rental:</strong> Available on Google Play Movies, Apple TV, and YouTube Movies</p>
          </div>
        </div>

        <style>
          .content-section { margin: 2rem 0; }
          .section-title { color: #e11d48; font-weight: bold; margin: 1.5rem 0 1rem 0; }
          .lead-paragraph { font-size: 1.1rem; line-height: 1.8; margin: 1rem 0; }
          .highlight-box { background: rgba(225, 29, 72, 0.1); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; border-left: 4px solid #e11d48; }
          .highlight-box ul { list-style: none; padding: 0; }
          .highlight-box li { margin: 0.5rem 0; }
          .review-quote { font-style: italic; font-size: 1.2rem; text-align: center; margin: 2rem 0; padding: 1rem; border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.1); }
          .cast-rating, .technical-specs { background: rgba(0, 0, 0, 0.05); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; }
          .rating-grid, .specs-grid { display: grid; gap: 1rem; margin-top: 1rem; }
          .rating-item, .spec-item { display: flex; justify-content: between; align-items: center; }
          .actor-name, .spec-label { font-weight: 500; }
          .rating, .spec-rating { margin-left: auto; }
          .cultural-impact ul { margin-top: 1rem; }
          .cultural-impact li { margin: 0.5rem 0; }
          .final-verdict { background: linear-gradient(135deg, rgba(225, 29, 72, 0.1), rgba(245, 158, 11, 0.1)); padding: 2rem; border-radius: 12px; }
          .final-rating { text-align: center; margin: 2rem 0; }
          .rating-breakdown { background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .rating-details { margin-top: 1rem; }
          .rating-category { display: flex; justify-content: between; margin: 0.5rem 0; padding: 0.5rem 0; border-bottom: 1px solid #e5e5e5; }
          .watch-info { background: rgba(0, 0, 0, 0.05); padding: 1.5rem; border-radius: 8px; margin-top: 2rem; }
        </style>
      `
    },
    'tollywood-trends': {
      title: "Tollywood 2024: Emerging Trends",
      author: "Priya Sharma",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
      authorBio: "Entertainment Journalist covering South Indian cinema and industry trends",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Industry Analysis",
      image: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=800&h=400&fit=crop",
      tags: ["Tollywood", "Industry Analysis", "Telugu Cinema", "Box Office"],
      rating: "Trending",
      likes: 892,
      shares: 156,
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
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
              <img 
                src={post.authorImage} 
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-bold text-foreground">{post.author}</h4>
                <p className="text-sm text-muted-foreground">{post.authorBio}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags?.map((tag, index) => (
                <span key={index} className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm hover:bg-accent/30 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Article Meta */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <div className="flex items-center gap-4">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {post.rating}
                </span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-1" />
                  Share ({post.shares})
                </Button>
                <Button variant="cinema" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  Like
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-foreground [&>div]:mb-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_ul]:space-y-2 [&_li]:mb-2"
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