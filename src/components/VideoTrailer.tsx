import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoTrailerProps {
  videoUrl: string;
  thumbnailImage: string;
  title: string;
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
}

const VideoTrailer = ({ 
  videoUrl, 
  thumbnailImage, 
  title, 
  autoPlay = false, 
  muted = true,
  className = ""
}: VideoTrailerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=0&rel=0&modestbranding=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=0&rel=0&modestbranding=1`;
    }
    return url;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div 
      className={`relative group rounded-xl overflow-hidden ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {!isPlaying ? (
        <div className="relative">
          <img 
            src={thumbnailImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
              variant="outline"
            >
              <Play className="h-8 w-8 ml-1" />
            </Button>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
            <p className="text-white/80 text-sm">Click to watch trailer</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Custom Controls Overlay */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  onClick={togglePlay}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button
                  onClick={toggleMute}
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTrailer;