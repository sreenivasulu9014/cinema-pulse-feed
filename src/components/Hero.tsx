import { Button } from '@/components/ui/button';
import { Play, Star, Calendar, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';
import heroCinema from '@/assets/hero-cinema.jpg';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

  // Convert YouTube URL to embed format with autoplay
  const getAutoplayEmbedUrl = (url: string) => {
    const videoId = 'vHk8tqbeq5o'; // The Bhootnii trailer
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&disablekb=1&fs=0&iv_load_policy=3`;
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      {showVideo ? (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={getAutoplayEmbedUrl('')}
            className="w-full h-full object-cover scale-150 -translate-y-8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCinema})` }}
        />
      )}
      
      {/* Enhanced overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 hero-overlay" />
      
      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <Button
          onClick={() => setIsMuted(!isMuted)}
          size="sm"
          variant="ghost"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
        <Button
          onClick={() => setShowVideo(!showVideo)}
          size="sm"
          variant="ghost"
          className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
        >
          {showVideo ? 'Static' : 'Video'}
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white drop-shadow-2xl">
          Your Gateway to
          <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Cinema Universe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-lg font-medium">
          Discover the latest movie news, actor profiles, reviews, and behind-the-scenes content 
          from Hollywood, Bollywood, Tollywood, and Kollywood.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cinema" size="lg" className="text-lg px-8 py-4 shadow-2xl">
            <Play className="mr-2 h-5 w-5" />
            Watch Latest Trailers
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm shadow-2xl">
            <Star className="mr-2 h-5 w-5" />
            Top Rated Movies
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">500+</div>
            <div className="text-white/90 font-medium">Movie Reviews</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">1000+</div>
            <div className="text-white/90 font-medium">Actor Profiles</div>
          </div>
          <div className="text-center bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">Daily</div>
            <div className="text-white/90 font-medium">News Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;