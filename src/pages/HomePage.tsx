import { useEffect } from 'react';
import { useSEO } from '@/hooks/useSEO';
import Hero from '@/components/Hero';
import MovieCard from '@/components/MovieCard';
import ActorCard from '@/components/ActorCard';
import NewsCard from '@/components/NewsCard';
import Newsletter from '@/components/Newsletter';
import TrailerSection from '@/components/TrailerSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Calendar, Star } from 'lucide-react';
import { latestMovies2024, upcomingMovies2024 } from '@/data/movies';
import theaterInterior from '@/assets/theater-interior.jpg';
import premiereScene from '@/assets/premiere-scene.jpg';

const HomePage = () => {
  // Latest and trending movies from our comprehensive database
  const nowShowingMovies = latestMovies2024.filter(movie => 
    movie.status === 'now-showing' || movie.status === 'trending'
  ).slice(0, 6);

  const comingSoonMovies = upcomingMovies2024.slice(0, 4);

  const trendingActors = [
    {
      name: "Ryan Gosling",
      profileImage: premiereScene,
      industry: "Hollywood",
      popularMovies: ["La La Land", "Blade Runner 2049", "The Notebook", "First Man"],
      followers: "2.5M",
      isVerified: true,
      videoUrl: "https://youtu.be/vHk8tqbeq5o",
      rating: 4.8
    },
    {
      name: "Margot Robbie",
      profileImage: theaterInterior,
      industry: "Hollywood", 
      popularMovies: ["Barbie", "Suicide Squad", "I, Tonya", "Once Upon a Time"],
      followers: "3.1M",
      isVerified: true,
      videoUrl: "https://youtu.be/Qv-NEQJehVU",
      rating: 4.9
    },
    {
      name: "Chris Pratt",
      profileImage: premiereScene,
      industry: "Hollywood",
      popularMovies: ["Guardians of the Galaxy", "Jurassic World", "The Tomorrow War", "Mario"],
      followers: "4.2M",
      isVerified: true,
      videoUrl: "https://youtu.be/vHk8tqbeq5o",
      rating: 4.7
    }
  ];

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
    }
  ];

  // SEO optimization for homepage
  useSEO({ page: 'home' });

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Auto-Playing Trailers Section */}
      <TrailerSection />
      
      {/* Now Showing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Now Showing
            </h2>
            <Button variant="outline" className="group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nowShowingMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                title={movie.title}
                genre={movie.genre.join('/')}
                rating={movie.rating}
                releaseDate={movie.releaseDate}
                image={movie.image}
                status={movie.status}
                description={movie.description}
                trailerUrl={movie.trailerUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Coming Soon
            </h2>
            <Button variant="outline" className="group">
              <Calendar className="mr-2 h-4 w-4" />
              Release Calendar
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {comingSoonMovies.map((movie) => (
              <MovieCard 
                key={movie.id}
                title={movie.title}
                genre={movie.genre.join('/')}
                rating={movie.rating}
                releaseDate={movie.releaseDate}
                image={movie.image}
                status={movie.status}
                description={movie.description}
                trailerUrl={movie.trailerUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Actors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Trending Actors
            </h2>
            <Button variant="outline" className="group">
              <TrendingUp className="mr-2 h-4 w-4" />
              View All Actors
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingActors.map((actor, index) => (
              <ActorCard key={index} {...actor} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Latest Updates
            </h2>
            <Button variant="outline" className="group">
              All News
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Editor's Top Picks
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hand-picked recommendations from our expert team of movie critics and entertainment journalists.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cinema-card rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">Movie of the Week</h3>
              <p className="text-muted-foreground mb-6">
                Spider-Man: Across the Spider-Verse continues to amaze audiences with its groundbreaking animation and heartfelt storytelling.
              </p>
              <Button variant="cinema">
                Read Full Review
              </Button>
            </div>
            
            <div className="cinema-card rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-4">Trending This Week</h3>
              <p className="text-muted-foreground mb-6">
                The Barbenheimer phenomenon takes over social media as audiences flock to see both Barbie and Oppenheimer.
              </p>
              <Button variant="cinema">
                Explore Trend
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default HomePage;