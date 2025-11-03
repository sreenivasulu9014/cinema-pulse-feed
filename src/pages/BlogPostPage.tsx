import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogPostById, getRecentPosts } from '@/data/blogPosts';
import { useEffect } from 'react';
import { updatePageSEO } from '@/utils/seo';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = id ? getBlogPostById(id) : undefined;

  useEffect(() => {
    if (post) {
      const seoData = {
        title: `${post.title} | IBomma TV Blog`,
        description: post.excerpt,
        keywords: [...post.tags, 'movie blog', 'cinema news', 'film analysis'],
        ogTitle: post.title,
        ogDescription: post.excerpt,
        ogImage: post.image,
        canonical: `https://ibommatv.com/blog/${post.id}`
      };
      updatePageSEO(seoData);
    }
  }, [post]);

  const relatedPosts = getRecentPosts(3);

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
                {post.rating && (
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {post.rating}
                  </span>
                )}
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
              className="prose prose-lg max-w-none text-foreground 
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
                [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mb-2
                [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:text-foreground
                [&_ul]:space-y-2 [&_ul]:my-4 [&_ul]:text-foreground
                [&_ol]:space-y-2 [&_ol]:my-4 [&_ol]:text-foreground
                [&_li]:mb-2 [&_li]:text-foreground
                [&_strong]:font-bold [&_strong]:text-primary
                [&_.tech-specs]:bg-muted/30 [&_.tech-specs]:p-6 [&_.tech-specs]:rounded-lg [&_.tech-specs]:my-6
                [&_.box-office-data]:bg-accent/10 [&_.box-office-data]:p-6 [&_.box-office-data]:rounded-lg [&_.box-office-data]:my-6
                [&_.economics-breakdown]:bg-muted/30 [&_.economics-breakdown]:p-6 [&_.economics-breakdown]:rounded-lg [&_.economics-breakdown]:my-6
                [&_.market-data]:bg-primary/5 [&_.market-data]:p-6 [&_.market-data]:rounded-lg [&_.market-data]:my-6
                [&_.pricing-comparison]:bg-accent/10 [&_.pricing-comparison]:p-6 [&_.pricing-comparison]:rounded-lg [&_.pricing-comparison]:my-6
                [&_.production-timeline]:bg-muted/30 [&_.production-timeline]:p-6 [&_.production-timeline]:rounded-lg [&_.production-timeline]:my-6
                [&_.vfx-breakdown]:bg-primary/5 [&_.vfx-breakdown]:p-6 [&_.vfx-breakdown]:rounded-lg [&_.vfx-breakdown]:my-6
                [&_.box-office-chart]:bg-accent/10 [&_.box-office-chart]:p-6 [&_.box-office-chart]:rounded-lg [&_.box-office-chart]:my-6
                [&_.festival-calendar]:bg-muted/30 [&_.festival-calendar]:p-6 [&_.festival-calendar]:rounded-lg [&_.festival-calendar]:my-6"
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
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block group">
                      <div className="flex gap-4">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to get the latest movie news and reviews
                </p>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                />
                <Button variant="cinema" size="sm" className="w-full">
                  Subscribe
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
