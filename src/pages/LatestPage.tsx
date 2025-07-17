import NewsCard from '@/components/NewsCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Filter } from 'lucide-react';
import theaterInterior from '@/assets/theater-interior.jpg';
import premiereScene from '@/assets/premiere-scene.jpg';

const LatestPage = () => {
  const categories = ['All', 'Hollywood', 'Bollywood', 'Tollywood', 'Kollywood', 'Reviews', 'Behind the Scenes'];
  
  const latestNews = [
    {
      title: "Marvel Studios Announces Phase 5 Movies and Release Dates",
      excerpt: "Kevin Feige reveals the exciting lineup of upcoming Marvel movies including Fantastic Four, X-Men, and more superhero adventures coming to theaters.",
      image: theaterInterior,
      category: "Hollywood",
      author: "Sarah Johnson",
      publishedAt: "2 hours ago",
      readTime: "3 min read"
    },
    {
      title: "Behind the Scenes: How 'Spider-Verse' Animation Changed Everything",
      excerpt: "Directors reveal the groundbreaking animation techniques used to create the visually stunning Spider-Man: Across the Spider-Verse.",
      image: premiereScene,
      category: "Behind the Scenes",
      author: "Mike Chen",
      publishedAt: "4 hours ago",
      readTime: "5 min read"
    },
    {
      title: "Tollywood Box Office: Latest Collections and Trade Analysis",
      excerpt: "Complete breakdown of recent Tollywood releases, their box office performance, and what it means for the industry.",
      image: theaterInterior,
      category: "Tollywood",
      author: "Priya Sharma",
      publishedAt: "6 hours ago",
      readTime: "4 min read"
    },
    {
      title: "Bollywood's Biggest Stars Team Up for Epic Historical Drama",
      excerpt: "A-list actors join forces for what's being called the most ambitious period film in recent Bollywood history.",
      image: premiereScene,
      category: "Bollywood",
      author: "Raj Patel",
      publishedAt: "8 hours ago",
      readTime: "4 min read"
    },
    {
      title: "International Film Festival Announces Star-Studded Lineup",
      excerpt: "This year's festival promises world premieres, exclusive screenings, and appearances from global cinema icons.",
      image: theaterInterior,
      category: "Reviews",
      author: "Emma Wilson",
      publishedAt: "10 hours ago",
      readTime: "2 min read"
    },
    {
      title: "Kollywood's Rising Star Signs Three Major Projects",
      excerpt: "Young talent makes waves with back-to-back announcements of high-profile collaborations with renowned directors.",
      image: premiereScene,
      category: "Kollywood",
      author: "Arun Kumar",
      publishedAt: "12 hours ago",
      readTime: "3 min read"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest Updates
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the freshest news from the world of cinema
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="cinema-card rounded-xl p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">250+</div>
            <div className="text-muted-foreground">Stories This Week</div>
          </div>
          <div className="cinema-card rounded-xl p-6 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-muted-foreground">Live Updates</div>
          </div>
          <div className="cinema-card rounded-xl p-6 text-center">
            <Filter className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">5</div>
            <div className="text-muted-foreground">Industry Categories</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'secondary'}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="cinema" size="lg" className="px-8 py-3">
            Load More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestPage;