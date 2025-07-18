import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock, User, ThumbsUp, MessageCircle, Share2, Filter } from 'lucide-react';

const ReviewsPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');

  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Thriller', 'Romance', 'Horror', 'Sci-Fi'];
  const ratings = ['All', '5 Stars', '4+ Stars', '3+ Stars', 'Recent'];

  const reviews = [
    {
      id: 1,
      title: "Fighter",
      subtitle: "High-Flying Action Drama",
      rating: 4.2,
      maxRating: 5,
      reviewText: "Hrithik Roshan delivers a powerhouse performance in this aerial action spectacle. The cinematography is breathtaking, especially the dogfight sequences that rival Top Gun. While the storyline follows a predictable path, the emotional depth and technical brilliance make it a worthy watch.",
      genre: "Action",
      duration: "164 min",
      director: "Siddharth Anand",
      cast: ["Hrithik Roshan", "Deepika Padukone", "Anil Kapoor"],
      releaseDate: "2024-01-25",
      reviewer: "Arjun Menon",
      reviewDate: "2024-01-26",
      likes: 342,
      comments: 87,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=300&fit=crop&q=80",
      pros: ["Spectacular aerial sequences", "Strong performances", "Technical excellence"],
      cons: ["Predictable plot", "Lengthy runtime"],
      verdict: "A visual feast that soars high despite a conventional storyline."
    },
    {
      id: 2,
      title: "Guntur Kaaram",
      subtitle: "Mass Masala Entertainment",
      rating: 3.8,
      maxRating: 5,
      reviewText: "Mahesh Babu returns with his signature style in this Trivikram directorial. The film delivers on the mass entertainment front with witty dialogues and family emotions. However, the second half feels dragged, and the climax could have been more impactful.",
      genre: "Drama",
      duration: "159 min",
      director: "Trivikram Srinivas",
      cast: ["Mahesh Babu", "Sreeleela", "Meenakshi Chaudhary"],
      releaseDate: "2024-01-12",
      reviewer: "Priya Sharma",
      reviewDate: "2024-01-13",
      likes: 298,
      comments: 156,
      image: "https://images.unsplash.com/photo-1489599185039-27915467fdab?w=500&h=300&fit=crop&q=80",
      pros: ["Mahesh Babu's charisma", "Family emotions", "Trivikram's witty writing"],
      cons: ["Dragged second half", "Weak climax"],
      verdict: "A decent family entertainer that banks on Mahesh Babu's star power."
    },
    {
      id: 3,
      title: "Captain Miller",
      subtitle: "Period Action Drama",
      rating: 4.5,
      maxRating: 5,
      reviewText: "Dhanush delivers a career-defining performance in this pre-independence era action drama. Arun Matheswaran's direction is stellar, creating a gritty and authentic period piece. The action sequences are choreographed brilliantly, and the emotional core is strong.",
      genre: "Action",
      duration: "157 min",
      director: "Arun Matheswaran",
      cast: ["Dhanush", "Priyanka Mohan", "Nivedhithaa Sathish"],
      releaseDate: "2024-01-12",
      reviewer: "Rajesh Kumar",
      reviewDate: "2024-01-14",
      likes: 445,
      comments: 203,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop&q=80",
      pros: ["Dhanush's performance", "Authentic period setting", "Strong direction"],
      cons: ["Violent content", "Slow pacing in parts"],
      verdict: "A masterfully crafted period drama that showcases Dhanush at his finest."
    },
    {
      id: 4,
      title: "Mean Girls",
      subtitle: "Musical Comedy",
      rating: 3.5,
      maxRating: 5,
      reviewText: "The Broadway adaptation brings the beloved story to the big screen with mixed results. While the musical numbers are catchy and the performances are energetic, it lacks the sharp wit and memorable moments of the original 2004 film.",
      genre: "Comedy",
      duration: "112 min",
      director: "Samantha Jayne, Arturo Perez Jr.",
      cast: ["Angourie Rice", "Reneé Rapp", "Auli'i Cravalho"],
      releaseDate: "2024-01-12",
      reviewer: "Sarah Johnson",
      reviewDate: "2024-01-15",
      likes: 167,
      comments: 89,
      image: "https://images.unsplash.com/photo-1533684942945-c72074ff48bb?w=500&h=300&fit=crop&q=80",
      pros: ["Catchy musical numbers", "Energetic performances", "Colorful production"],
      cons: ["Lacks original's wit", "Uneven pacing"],
      verdict: "A decent musical adaptation that doesn't quite capture the magic of the original."
    },
    {
      id: 5,
      title: "I.S.S.",
      subtitle: "Space Thriller",
      rating: 3.2,
      maxRating: 5,
      reviewText: "This space station thriller attempts to create tension in zero gravity but falls short of its ambitious premise. While the setting is claustrophobic and the initial setup is intriguing, the film struggles with pacing and character development.",
      genre: "Thriller",
      duration: "95 min",
      director: "Gabriela Cowperthwaite",
      cast: ["Ariana DeBose", "Chris Messina", "John Gallagher Jr."],
      releaseDate: "2024-01-19",
      reviewer: "Michael Chen",
      reviewDate: "2024-01-20",
      likes: 89,
      comments: 34,
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop&q=80",
      pros: ["Unique setting", "Claustrophobic atmosphere", "Decent performances"],
      cons: ["Slow pacing", "Weak character development", "Predictable plot"],
      verdict: "An ambitious concept that doesn't quite reach orbit."
    },
    {
      id: 6,
      title: "Miller's Girl",
      subtitle: "Psychological Drama",
      rating: 2.8,
      maxRating: 5,
      reviewText: "Despite strong performances from Jenna Ortega and Martin Freeman, this psychological drama struggles with an unfocused narrative and uncomfortable themes. The film's exploration of power dynamics feels heavy-handed and lacks subtlety.",
      genre: "Drama",
      duration: "93 min",
      director: "Jade Halley Bartlett",
      cast: ["Jenna Ortega", "Martin Freeman", "Bashir Salahuddin"],
      releaseDate: "2024-01-26",
      reviewer: "Lisa Thompson",
      reviewDate: "2024-01-27",
      likes: 45,
      comments: 67,
      image: "https://images.unsplash.com/photo-1481066717861-3123458b6ee4?w=500&h=300&fit=crop&q=80",
      pros: ["Strong lead performances", "Atmospheric cinematography"],
      cons: ["Unfocused narrative", "Uncomfortable themes", "Heavy-handed approach"],
      verdict: "A misguided attempt at psychological drama that doesn't quite work."
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const genreMatch = selectedGenre === 'All' || review.genre === selectedGenre;
    const ratingMatch = selectedRating === 'All' || 
      (selectedRating === '5 Stars' && review.rating >= 4.8) ||
      (selectedRating === '4+ Stars' && review.rating >= 4.0) ||
      (selectedRating === '3+ Stars' && review.rating >= 3.0) ||
      selectedRating === 'Recent';
    return genreMatch && ratingMatch;
  });

  const renderStars = (rating: number, maxRating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
    }
    
    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Movie <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              In-depth reviews, ratings, and honest opinions on the latest releases from our expert critics
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-muted-foreground">Expert Critics</span>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Detailed Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">Community Discussions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-card rounded-xl border p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Filter className="w-6 h-6 text-primary" />
              Filter Reviews
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Genre</label>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <Button
                      key={genre}
                      variant={selectedGenre === genre ? "cinema" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGenre(genre)}
                      className="text-xs"
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Rating</label>
                <div className="flex flex-wrap gap-2">
                  {ratings.map((rating) => (
                    <Button
                      key={rating}
                      variant={selectedRating === rating ? "cinema" : "outline"}
                      size="sm"
                      onClick={() => setSelectedRating(rating)}
                      className="text-xs"
                    >
                      {rating}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="md:flex">
                  {/* Movie Image */}
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img 
                      src={review.image} 
                      alt={review.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {review.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{review.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3">
                    <CardHeader className="pb-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">{review.title}</h2>
                          <p className="text-lg text-primary font-semibold mb-3">{review.subtitle}</p>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating, review.maxRating)}
                            </div>
                            <span className="text-2xl font-bold text-foreground">{review.rating}</span>
                            <span className="text-muted-foreground">/ {review.maxRating}</span>
                          </div>

                          {/* Movie Details */}
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {review.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {review.releaseDate}
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {review.director}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {/* Review Text */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">{review.reviewText}</p>

                      {/* Cast */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Starring:</h4>
                        <div className="flex flex-wrap gap-2">
                          {review.cast.map((actor, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {actor}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Pros and Cons */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">✓ Pros</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {review.pros.map((pro, index) => (
                              <li key={index}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2">✗ Cons</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {review.cons.map((con, index) => (
                              <li key={index}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Verdict */}
                      <div className="bg-accent/10 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Final Verdict</h4>
                        <p className="text-muted-foreground italic">{review.verdict}</p>
                      </div>

                      {/* Footer */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Review by <strong className="text-foreground">{review.reviewer}</strong></span>
                          <span>{review.reviewDate}</span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {review.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {review.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="cinema" size="lg" className="px-8">
              Load More Reviews
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReviewsPage;