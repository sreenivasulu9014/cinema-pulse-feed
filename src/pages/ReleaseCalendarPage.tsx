import { Calendar, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ReleaseCalendarPage = () => {
  const upcomingMovies = [
    {
      title: "Pushpa 2: The Rule",
      releaseDate: "2024-12-06",
      genre: "Action, Drama",
      language: "Telugu",
      rating: "Not Rated",
      poster: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=300&h=400&fit=crop"
    },
    {
      title: "Salaar Part 2",
      releaseDate: "2024-12-25",
      genre: "Action, Thriller",
      language: "Kannada",
      rating: "Not Rated",
      poster: "https://images.unsplash.com/photo-1594736797933-d0d7c6d6385c?w=300&h=400&fit=crop"
    },
    {
      title: "RRR 2",
      releaseDate: "2025-03-28",
      genre: "Period Action",
      language: "Telugu",
      rating: "Not Rated",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop"
    },
    {
      title: "Kalki 2898 AD Part 2",
      releaseDate: "2025-06-15",
      genre: "Sci-Fi, Action",
      language: "Telugu",
      rating: "Not Rated",
      poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop"
    }
  ];

  const nowShowing = [
    {
      title: "Devara",
      releaseDate: "2024-09-27",
      genre: "Action, Drama",
      language: "Telugu",
      rating: "8.2",
      poster: "https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=300&h=400&fit=crop"
    },
    {
      title: "Vettaiyan",
      releaseDate: "2024-10-10",
      genre: "Action, Thriller",
      language: "Tamil",
      rating: "7.8",
      poster: "https://images.unsplash.com/photo-1594736797933-d0d7c6d6385c?w=300&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Movie Release Calendar
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with upcoming releases and current movies in theaters
            </p>
          </div>
        </div>
      </section>

      {/* Now Showing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Now Showing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nowShowing.map((movie, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={movie.poster} 
                    alt={movie.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {movie.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">{movie.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{movie.genre}</p>
                  <p className="text-sm text-muted-foreground mb-1">{movie.language}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {movie.releaseDate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Releases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingMovies.map((movie, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={movie.poster} 
                    alt={movie.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                    Coming Soon
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">{movie.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{movie.genre}</p>
                  <p className="text-sm text-muted-foreground mb-1">{movie.language}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <Clock className="w-3 h-3" />
                    {movie.releaseDate}
                  </div>
                  <Button variant="cinema" size="sm" className="w-full">
                    Set Reminder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReleaseCalendarPage;