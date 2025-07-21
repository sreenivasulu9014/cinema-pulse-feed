import VideoTrailer from './VideoTrailer';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import theaterInterior from '@/assets/theater-interior.jpg';
import premiereScene from '@/assets/premiere-scene.jpg';
import heroCinema from '@/assets/hero-cinema.jpg';

const TrailerSection = () => {
  const featuredTrailers = [
    {
      id: 1,
      title: "The Bhootnii - Official Trailer",
      videoUrl: "https://youtu.be/vHk8tqbeq5o?feature=shared",
      thumbnailImage: theaterInterior,
      genre: "Horror/Thriller",
      rating: 8.5,
      description: "A spine-chilling horror thriller that will keep you on the edge of your seat."
    },
    {
      id: 2,
      title: "Guardians of the Galaxy Vol. 3 - Final Trailer",
      videoUrl: "https://youtu.be/Qv-NEQJehVU?feature=shared",
      thumbnailImage: premiereScene,
      genre: "Action/Adventure",
      rating: 9.2,
      description: "The epic conclusion to the beloved Guardians trilogy."
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      videoUrl: "https://youtu.be/vHk8tqbeq5o?feature=shared",
      thumbnailImage: heroCinema,
      genre: "Animation/Action",
      rating: 9.4,
      description: "Miles Morales swings into the multiverse in this visually stunning sequel."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest Trailers
            </h2>
            <p className="text-muted-foreground text-lg">
              Watch the hottest movie trailers and teasers
            </p>
          </div>
          <Button variant="outline" className="group">
            <TrendingUp className="mr-2 h-4 w-4" />
            All Trailers
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Trailer */}
          <div className="lg:col-span-1">
            <VideoTrailer
              videoUrl={featuredTrailers[0].videoUrl}
              thumbnailImage={featuredTrailers[0].thumbnailImage}
              title={featuredTrailers[0].title}
              autoPlay={true}
              muted={true}
              className="h-80 lg:h-96"
            />
            <div className="mt-4 p-4 cinema-card rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {featuredTrailers[0].genre}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold">{featuredTrailers[0].rating}</span>
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{featuredTrailers[0].title}</h3>
              <p className="text-muted-foreground text-sm">{featuredTrailers[0].description}</p>
            </div>
          </div>

          {/* Trailer Grid */}
          <div className="space-y-4">
            {featuredTrailers.slice(1).map((trailer) => (
              <div key={trailer.id} className="cinema-card p-4 rounded-lg">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-32 h-20">
                    <VideoTrailer
                      videoUrl={trailer.videoUrl}
                      thumbnailImage={trailer.thumbnailImage}
                      title={trailer.title}
                      autoPlay={false}
                      muted={true}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {trailer.genre}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="font-semibold text-sm">{trailer.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-sm mb-1 truncate">{trailer.title}</h4>
                    <p className="text-muted-foreground text-xs line-clamp-2">{trailer.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Trailers Bar */}
        <div className="cinema-card p-6 rounded-xl">
          <h3 className="font-heading text-xl font-semibold mb-4">🔥 Trending Now</h3>
          <div className="flex flex-wrap gap-2">
            {['The Bhootnii', 'Guardians of Galaxy 3', 'Spider-Verse', 'Oppenheimer', 'Barbie', 'Fast X'].map((movie) => (
              <Button
                key={movie}
                variant="outline"
                size="sm"
                className="text-xs hover:bg-primary hover:text-primary-foreground"
              >
                {movie}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;