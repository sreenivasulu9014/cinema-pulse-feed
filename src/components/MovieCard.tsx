import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Play, Video, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';

interface MovieCardProps {
  title: string;
  genre: string;
  rating: number;
  releaseDate: string;
  image: string;
  status: 'now-showing' | 'coming-soon' | 'trending';
  description?: string;
  trailerUrl?: string;
}

const MovieCard = ({ title, genre, rating, releaseDate, image, status, description, trailerUrl }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const getStatusColor = () => {
    switch (status) {
      case 'now-showing': return 'bg-green-600';
      case 'coming-soon': return 'bg-blue-600';
      case 'trending': return 'bg-cinema-orange';
      default: return 'bg-secondary';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'now-showing': return 'Now Showing';
      case 'coming-soon': return 'Coming Soon';
      case 'trending': return 'Trending';
      default: return '';
    }
  };

  return (
    <Card 
      className="group overflow-hidden hover-scale cinema-card transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Enhanced overlay with multiple action buttons */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-3">
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
              <Play className="h-4 w-4 mr-1" />
              Play
            </Button>
            {trailerUrl && (
              <Button size="sm" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Video className="h-4 w-4 mr-1" />
                Trailer
              </Button>
            )}
          </div>
        </div>

        {/* Action buttons in corners */}
        <div className={`absolute top-3 right-3 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 p-0">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Status badge */}
        <Badge 
          className={`absolute top-3 left-3 ${getStatusColor()}`}
        >
          {getStatusText()}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-2 text-foreground line-clamp-1">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-muted-foreground text-sm">{genre}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {releaseDate}
        </div>
        
        {description && (
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default MovieCard;