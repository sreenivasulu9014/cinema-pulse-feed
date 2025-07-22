import { useSEO } from '@/hooks/useSEO';
import ActorCard from '@/components/ActorCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Star, TrendingUp } from 'lucide-react';
import theaterInterior from '@/assets/theater-interior.jpg';
import premiereScene from '@/assets/premiere-scene.jpg';

const ActorsPage = () => {
  const industries = ['All', 'Hollywood', 'Bollywood', 'Tollywood', 'Kollywood'];
  
  const actors = [
    {
      name: "Ryan Gosling",
      profileImage: premiereScene,
      industry: "Hollywood",
      popularMovies: ["La La Land", "Blade Runner 2049", "The Notebook"],
      followers: "2.5M",
      isVerified: true,
      videoUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg",
      rating: 9.2
    },
    {
      name: "Margot Robbie",
      profileImage: theaterInterior,
      industry: "Hollywood", 
      popularMovies: ["Barbie", "Suicide Squad", "I, Tonya"],
      followers: "3.1M",
      isVerified: true,
      videoUrl: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      rating: 8.9
    },
    {
      name: "Chris Pratt",
      profileImage: premiereScene,
      industry: "Hollywood",
      popularMovies: ["Guardians of the Galaxy", "Jurassic World", "The Tomorrow War"],
      followers: "4.2M",
      isVerified: true,
      videoUrl: "https://www.youtube.com/watch?v=u3V5KDHRQvk",
      rating: 8.5
    },
    {
      name: "Deepika Padukone",
      profileImage: theaterInterior,
      industry: "Bollywood",
      popularMovies: ["Padmaavat", "Gehraiyaan", "Chennai Express"],
      followers: "5.8M",
      isVerified: true
    },
    {
      name: "Prabhas",
      profileImage: premiereScene,
      industry: "Tollywood",
      popularMovies: ["Baahubali", "Saaho", "Radhe Shyam"],
      followers: "7.2M",
      isVerified: true
    },
    {
      name: "Thalapathy Vijay",
      profileImage: theaterInterior,
      industry: "Kollywood",
      popularMovies: ["Master", "Beast", "Varisu"],
      followers: "6.5M",
      isVerified: true
    }
  ];

  // SEO optimization for actors page
  useSEO({ page: 'actors' });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Actor Profiles
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover your favorite stars from around the world
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="cinema-card rounded-xl p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">1000+</div>
            <div className="text-muted-foreground">Actor Profiles</div>
          </div>
          <div className="cinema-card rounded-xl p-6 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">500+</div>
            <div className="text-muted-foreground">Verified Stars</div>
          </div>
          <div className="cinema-card rounded-xl p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">Daily</div>
            <div className="text-muted-foreground">Profile Updates</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search actors..."
              className="pl-10 bg-muted/50"
            />
          </div>
          
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <Badge
                key={industry}
                variant={industry === 'All' ? 'default' : 'secondary'}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 relative">
          {/* Cinematic background effect */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-yellow-900/10 to-purple-900/10" />
            <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          {actors.map((actor, index) => (
            <ActorCard key={index} {...actor} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="cinema" size="lg" className="px-8 py-3">
            Load More Actors
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActorsPage;