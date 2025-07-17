import { Button } from '@/components/ui/button';
import { Play, Star, Calendar } from 'lucide-react';
import heroCinema from '@/assets/hero-cinema.jpg';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCinema})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-cinema-light">
          Your Gateway to
          <span className="block bg-gradient-accent bg-clip-text text-transparent">
            Cinema Universe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cinema-light/90 mb-8 max-w-3xl mx-auto">
          Discover the latest movie news, actor profiles, reviews, and behind-the-scenes content 
          from Hollywood, Bollywood, Tollywood, and Kollywood.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cinema" size="lg" className="text-lg px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Watch Latest Trailers
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            <Star className="mr-2 h-5 w-5" />
            Top Rated Movies
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-cinema-light/70">Movie Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-cinema-light/70">Actor Profiles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Daily</div>
            <div className="text-cinema-light/70">News Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;