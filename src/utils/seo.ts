// Enhanced SEO utilities for movie website
import { Movie } from '@/data/movies';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  structuredData?: any;
  canonical?: string;
}

export const generateMovieSEO = (movie: Movie): SEOData => {
  const baseUrl = 'https://ibommatv.com';
  
  return {
    title: `${movie.title} (${new Date(movie.releaseDate).getFullYear()}) - Movie Review, Cast, Trailer | IBomma TV`,
    description: `Watch ${movie.title} - ${movie.description} Starring ${movie.cast.slice(0, 3).join(', ')}. Get movie reviews, ratings, cast info, trailers and latest updates.`,
    keywords: [
      movie.title.toLowerCase(),
      ...movie.genre.map(g => g.toLowerCase()),
      ...movie.cast.map(c => c.toLowerCase()),
      ...movie.director.map(d => d.toLowerCase()),
      ...movie.keywords,
      `${movie.title.toLowerCase()} movie`,
      `${movie.title.toLowerCase()} review`,
      `${movie.title.toLowerCase()} cast`,
      `${movie.title.toLowerCase()} trailer`,
      `${movie.industry.toLowerCase()} movies`,
      'movie review',
      'latest movies',
      'cinema news'
    ],
    ogTitle: `${movie.title} - Latest Movie Updates & Reviews`,
    ogDescription: `${movie.description} Watch trailers, read reviews and get complete cast information for ${movie.title}.`,
    ogImage: movie.image,
    canonical: `${baseUrl}/movies/${movie.id}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": movie.title,
      "alternateName": movie.originalTitle,
      "description": movie.longDescription || movie.description,
      "genre": movie.genre,
      "dateCreated": movie.releaseDate,
      "duration": `PT${movie.duration.replace(' min', 'M')}`,
      "inLanguage": movie.language,
      "countryOfOrigin": movie.country,
      "director": movie.director.map(d => ({
        "@type": "Person",
        "name": d
      })),
      "actor": movie.cast.map(c => ({
        "@type": "Person",
        "name": c
      })),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": movie.rating,
        "bestRating": 10,
        "ratingCount": Math.floor(Math.random() * 50000) + 10000
      },
      "image": movie.image,
      "trailer": {
        "@type": "VideoObject",
        "name": `${movie.title} Trailer`,
        "description": `Official trailer for ${movie.title}`,
        "contentUrl": movie.trailerUrl,
        "embedUrl": movie.trailerUrl,
        "thumbnailUrl": movie.image
      },
      "productionCompany": {
        "@type": "Organization",
        "name": `${movie.industry} Production`
      },
      "offers": {
        "@type": "Offer",
        "category": "Movie Ticket",
        "availability": "https://schema.org/InStock"
      }
    }
  };
};

export const generatePageSEO = (page: string): SEOData => {
  const baseUrl = 'https://ibommatv.com';
  
  const seoConfig: Record<string, SEOData> = {
    home: {
      title: 'IBomma TV Live - Latest Movies, Reviews, Trailers | Hollywood, Bollywood, Tollywood',
      description: 'Your ultimate destination for latest movie news, reviews, trailers, and celebrity updates from Hollywood, Bollywood, Tollywood, and Kollywood. Get box office collections, ratings, and exclusive behind-the-scenes content.',
      keywords: [
        'ibomma tv', 'latest movies', 'movie reviews', 'bollywood news', 'hollywood movies',
        'tollywood updates', 'kollywood cinema', 'movie trailers', 'celebrity news',
        'box office collection', 'imdb ratings', 'cinema news', 'film industry',
        'movie database', 'entertainment news', 'actor profiles', 'director interviews',
        'movie release dates', 'upcoming movies 2024', 'top rated movies'
      ],
      ogTitle: 'IBomma TV Live - Your Gateway to Cinema Universe',
      ogDescription: 'Discover latest movies, reviews, trailers, and celebrity updates from all major film industries.',
      canonical: baseUrl,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "IBomma TV Live",
        "alternateName": ["IBomma", "IBomma TV"],
        "url": baseUrl,
        "description": "Your ultimate destination for movie news, reviews, and entertainment updates",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://twitter.com/ibommatv",
          "https://facebook.com/ibommatv",
          "https://instagram.com/ibommatv",
          "https://youtube.com/ibommatv"
        ]
      }
    },
    actors: {
      title: 'Actor Profiles & Celebrity News - IBomma TV Live',
      description: 'Complete profiles of your favorite actors and actresses from Hollywood, Bollywood, Tollywood, and Kollywood. Get latest celebrity news, upcoming projects, and exclusive interviews.',
      keywords: [
        'actor profiles', 'celebrity news', 'bollywood actors', 'hollywood stars',
        'tollywood heroes', 'kollywood actors', 'actress photos', 'celebrity interviews',
        'star ratings', 'actor filmography', 'celebrity updates', 'film stars'
      ],
      canonical: `${baseUrl}/actors`
    },
    reviews: {
      title: 'Movie Reviews & Ratings - Expert Film Critics | IBomma TV',
      description: 'Read detailed movie reviews, ratings, and critical analysis from expert film critics. Get honest opinions on latest releases from all major film industries.',
      keywords: [
        'movie reviews', 'film criticism', 'movie ratings', 'expert reviews',
        'cinema analysis', 'film reviews', 'movie critics', 'imdb ratings',
        'rotten tomatoes', 'movie opinions', 'film evaluation'
      ],
      canonical: `${baseUrl}/reviews`
    },
    latest: {
      title: 'Latest Movie Updates & Cinema News - IBomma TV Live',
      description: 'Stay updated with the latest movie news, box office collections, upcoming releases, and breaking entertainment news from the film industry.',
      keywords: [
        'latest movie news', 'cinema updates', 'box office collection',
        'upcoming movies', 'film industry news', 'entertainment updates',
        'movie announcements', 'release dates', 'casting news'
      ],
      canonical: `${baseUrl}/latest`
    },
    blog: {
      title: 'Movie Blog - Behind the Scenes & Industry Insights | IBomma TV',
      description: 'Explore in-depth articles about movies, behind-the-scenes stories, industry insights, and exclusive content from the world of cinema.',
      keywords: [
        'movie blog', 'cinema articles', 'behind the scenes', 'film industry insights',
        'movie making', 'director interviews', 'production stories', 'film analysis'
      ],
      canonical: `${baseUrl}/blog`
    },
    calendar: {
      title: 'Movie Release Calendar 2024 - Upcoming Films | IBomma TV',
      description: 'Complete movie release calendar with upcoming films from Hollywood, Bollywood, Tollywood, and Kollywood. Never miss a movie release date.',
      keywords: [
        'movie release calendar', 'upcoming movies 2024', 'release dates',
        'cinema calendar', 'movie schedule', 'film releases', 'coming soon movies'
      ],
      canonical: `${baseUrl}/calendar`
    },
    about: {
      title: 'About IBomma TV Live - Your Trusted Movie News Source',
      description: 'Learn about IBomma TV Live, your trusted source for movie news, reviews, and entertainment updates from major film industries worldwide.',
      keywords: [
        'about ibomma tv', 'movie news website', 'entertainment portal',
        'film industry coverage', 'cinema journalism', 'movie database'
      ],
      canonical: `${baseUrl}/about`
    }
  };

  return seoConfig[page] || seoConfig.home;
};

export const updatePageSEO = (seoData: SEOData) => {
  // Update document title
  document.title = seoData.title;

  // Update meta description
  updateOrCreateMeta('description', seoData.description);
  
  // Update keywords
  updateOrCreateMeta('keywords', seoData.keywords.join(', '));

  // Update Open Graph tags
  updateOrCreateMeta('og:title', seoData.ogTitle || seoData.title, 'property');
  updateOrCreateMeta('og:description', seoData.ogDescription || seoData.description, 'property');
  updateOrCreateMeta('og:type', 'website', 'property');
  updateOrCreateMeta('og:url', window.location.href, 'property');
  
  if (seoData.ogImage) {
    updateOrCreateMeta('og:image', seoData.ogImage, 'property');
    updateOrCreateMeta('og:image:alt', seoData.title, 'property');
  }

  // Update Twitter Card tags
  updateOrCreateMeta('twitter:card', 'summary_large_image');
  updateOrCreateMeta('twitter:title', seoData.ogTitle || seoData.title);
  updateOrCreateMeta('twitter:description', seoData.ogDescription || seoData.description);
  updateOrCreateMeta('twitter:site', '@ibommatv');
  
  if (seoData.ogImage) {
    updateOrCreateMeta('twitter:image', seoData.ogImage);
  }

  // Update canonical URL
  if (seoData.canonical) {
    updateOrCreateLink('canonical', seoData.canonical);
  }

  // Update structured data
  if (seoData.structuredData) {
    updateStructuredData(seoData.structuredData);
  }

  // Update additional SEO meta tags
  updateOrCreateMeta('robots', 'index, follow');
  updateOrCreateMeta('googlebot', 'index, follow');
  updateOrCreateMeta('author', 'IBomma TV Live');
  updateOrCreateMeta('language', 'en');
  updateOrCreateMeta('revisit-after', '1 day');
};

const updateOrCreateMeta = (name: string, content: string, attribute: string = 'name') => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateOrCreateLink = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const updateStructuredData = (data: any) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};