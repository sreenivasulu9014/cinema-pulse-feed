import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Play } from 'lucide-react';

interface MovieCardProps {
  title: string;
  genre: string;
  rating: number;
  releaseDate: string;
  image: string;
  status: 'now-showing' | 'coming-soon' | 'trending';
  description?: string;
}

const MovieCard = ({ title, genre, rating, releaseDate, image, status, description }: MovieCardProps) => {
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
    <div className="cinema-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 cinema-glow">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="h-12 w-12 text-white" />
        </div>
        <Badge className={`absolute top-4 right-4 ${getStatusColor()} text-white`}>
          {getStatusText()}
        </Badge>
      </div>
      
      <div className="p-6">
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
      </div>
    </div>
  );
};

export default MovieCard;