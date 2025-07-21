import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Instagram, Twitter, Facebook, Play, Video, Heart, Star } from 'lucide-react';
import { useState } from 'react';

interface ActorCardProps {
  name: string;
  profileImage: string;
  industry: string;
  popularMovies: string[];
  followers: string;
  isVerified?: boolean;
  videoUrl?: string;
  rating?: number;
}

const ActorCard = ({ name, profileImage, industry, popularMovies, followers, isVerified, videoUrl, rating }: ActorCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card 
      className="group overflow-hidden hover-scale cinema-card transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={profileImage} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Video/Interview overlay */}
        {videoUrl && (
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
              <Video className="h-4 w-4 mr-1" />
              Interview
            </Button>
          </div>
        )}

        {/* Action buttons */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-8 w-8 p-0">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            {isVerified && <CheckCircle className="h-5 w-5 text-blue-400" />}
            {rating && (
              <div className="flex items-center gap-1 ml-auto">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            )}
          </div>
          
          <Badge variant="secondary" className="mb-3">
            {industry}
          </Badge>
          
          <div className="text-sm text-white/80 mb-3">
            <p className="font-medium mb-1">Popular Movies:</p>
            <p>{popularMovies.slice(0, 2).join(', ')}{popularMovies.length > 2 ? '...' : ''}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{followers} followers</span>
            <div className="flex gap-2">
              <Instagram className="h-4 w-4 text-white/60 hover:text-pink-400 cursor-pointer transition-colors" />
              <Twitter className="h-4 w-4 text-white/60 hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook className="h-4 w-4 text-white/60 hover:text-blue-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActorCard;