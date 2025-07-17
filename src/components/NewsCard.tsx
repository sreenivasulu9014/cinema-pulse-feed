import { Badge } from '@/components/ui/badge';
import { Clock, User, Share2 } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}

const NewsCard = ({ title, excerpt, image, category, author, publishedAt, readTime }: NewsCardProps) => {
  return (
    <article className="cinema-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {readTime}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span>{publishedAt}</span>
            <Share2 className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;