import { Badge } from '@/components/ui/badge';
import { Instagram, Twitter, Facebook } from 'lucide-react';

interface ActorCardProps {
  name: string;
  profileImage: string;
  industry: string;
  popularMovies: string[];
  followers: string;
  isVerified?: boolean;
}

const ActorCard = ({ name, profileImage, industry, popularMovies, followers, isVerified }: ActorCardProps) => {
  return (
    <div className="cinema-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img 
          src={profileImage} 
          alt={name}
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {isVerified && (
          <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
            Verified
          </Badge>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-heading text-xl font-semibold text-white mb-1">
            {name}
          </h3>
          <p className="text-white/80 text-sm">{industry}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Popular Movies:</p>
          <div className="flex flex-wrap gap-2">
            {popularMovies.slice(0, 3).map((movie, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {movie}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Followers</p>
            <p className="font-semibold">{followers}</p>
          </div>
          
          <div className="flex space-x-2">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;