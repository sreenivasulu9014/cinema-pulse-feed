interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
  twitterHandle?: string;
}

export class SEOManager {
  private static siteName = "Cinema Universe";
  private static baseUrl = window.location.origin;
  private static defaultImage = `${window.location.origin}/hero-cinema.jpg`;
  private static twitterHandle = "@CinemaUniverse";

  static updatePageSEO(metadata: SEOMetadata) {
    // Update page title
    document.title = metadata.title;

    // Update or create meta tags
    this.updateMetaTag('description', metadata.description);
    if (metadata.keywords) {
      this.updateMetaTag('keywords', metadata.keywords);
    }

    // Open Graph tags
    this.updateMetaProperty('og:title', metadata.title);
    this.updateMetaProperty('og:description', metadata.description);
    this.updateMetaProperty('og:type', metadata.type || 'website');
    this.updateMetaProperty('og:image', metadata.image || this.defaultImage);
    this.updateMetaProperty('og:url', metadata.url || window.location.href);
    this.updateMetaProperty('og:site_name', metadata.siteName || this.siteName);
    this.updateMetaProperty('og:locale', metadata.locale || 'en_US');

    // Twitter Card tags
    this.updateMetaProperty('twitter:card', 'summary_large_image');
    this.updateMetaProperty('twitter:site', metadata.twitterHandle || this.twitterHandle);
    this.updateMetaProperty('twitter:title', metadata.title);
    this.updateMetaProperty('twitter:description', metadata.description);
    this.updateMetaProperty('twitter:image', metadata.image || this.defaultImage);

    // Canonical URL
    this.updateCanonicalLink(metadata.url || window.location.href);
  }

  private static updateMetaTag(name: string, content: string) {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private static updateMetaProperty(property: string, content: string) {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  }

  private static updateCanonicalLink(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  // Movie-specific structured data
  static addMovieStructuredData(movie: any) {
    const movieSchema = {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": movie.title,
      "genre": movie.genre,
      "contentRating": movie.rating,
      "datePublished": movie.releaseDate,
      "description": movie.description,
      "image": movie.image,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": movie.rating,
        "bestRating": "10",
        "ratingCount": "1000"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": `${movie.title} Trailer`,
        "description": `Official trailer for ${movie.title}`,
        "thumbnailUrl": movie.image,
        "contentUrl": movie.trailerUrl
      }
    };

    this.addStructuredData('movie-schema', movieSchema);
  }

  // Actor-specific structured data
  static addActorStructuredData(actor: any) {
    const actorSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": actor.name,
      "image": actor.profileImage,
      "jobTitle": "Actor",
      "knowsAbout": actor.popularMovies,
      "sameAs": [`https://www.imdb.com/find?q=${encodeURIComponent(actor.name)}`],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": actor.rating || "8.5",
        "bestRating": "10",
        "ratingCount": actor.followers?.replace('M', '000000').replace('K', '000') || "1000000"
      }
    };

    this.addStructuredData('actor-schema', actorSchema);
  }

  // Website structured data
  static addWebsiteStructuredData() {
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": this.siteName,
      "description": "Your ultimate destination for movie news, reviews, actor profiles, and entertainment updates from Hollywood, Bollywood, Tollywood, and Kollywood.",
      "url": this.baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://twitter.com/cinemauniverse",
        "https://facebook.com/cinemauniverse",
        "https://instagram.com/cinemauniverse"
      ]
    };

    this.addStructuredData('website-schema', websiteSchema);
  }

  private static addStructuredData(id: string, schema: any) {
    // Remove existing schema with same id
    const existing = document.getElementById(id);
    if (existing) {
      existing.remove();
    }

    // Add new schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Generate page-specific SEO metadata
  static getPageMetadata(page: string, data?: any): SEOMetadata {
    const baseMetadata = {
      siteName: this.siteName,
      twitterHandle: this.twitterHandle,
      image: this.defaultImage
    };

    switch (page) {
      case 'home':
        return {
          ...baseMetadata,
          title: `${this.siteName} - Latest Movie News, Reviews & Actor Profiles`,
          description: "Discover the latest movie news, reviews, actor profiles, and entertainment updates from Hollywood, Bollywood, Tollywood, and Kollywood. Your gateway to cinema universe.",
          keywords: "movies, bollywood, hollywood, tollywood, kollywood, movie reviews, actor profiles, cinema news, entertainment, trailers, movie ratings",
          type: "website"
        };

      case 'actors':
        return {
          ...baseMetadata,
          title: `Actor Profiles - ${this.siteName}`,
          description: "Explore comprehensive actor profiles, filmographies, and exclusive content from your favorite stars across Hollywood, Bollywood, Tollywood, and Kollywood.",
          keywords: "actor profiles, celebrity news, filmography, movie stars, bollywood actors, hollywood actors, tollywood actors, kollywood actors",
          type: "website"
        };

      case 'reviews':
        return {
          ...baseMetadata,
          title: `Movie Reviews - ${this.siteName}`,
          description: "Read expert movie reviews, ratings, and in-depth analysis of the latest releases from all major film industries worldwide.",
          keywords: "movie reviews, film criticism, movie ratings, cinema analysis, bollywood reviews, hollywood reviews",
          type: "website"
        };

      case 'latest':
        return {
          ...baseMetadata,
          title: `Latest Movie News - ${this.siteName}`,
          description: "Stay updated with the latest movie news, industry updates, box office collections, and breaking entertainment stories.",
          keywords: "movie news, entertainment news, box office, film industry updates, cinema news, bollywood news, hollywood news",
          type: "website"
        };

      case 'about':
        return {
          ...baseMetadata,
          title: `About ${this.siteName} - Your Gateway to Cinema`,
          description: `Learn about ${this.siteName}, your ultimate destination for movie news, reviews, and entertainment content from around the world.`,
          keywords: "about cinema universe, movie website, entertainment platform, film news source",
          type: "website"
        };

      case 'blog':
        return {
          ...baseMetadata,
          title: `Cinema Blog - ${this.siteName}`,
          description: "Read our latest blog posts about movies, behind-the-scenes content, industry insights, and exclusive interviews.",
          keywords: "cinema blog, movie blog, film articles, entertainment writing, movie insights",
          type: "blog"
        };

      case 'movie':
        if (data) {
          return {
            ...baseMetadata,
            title: `${data.title} - Movie Review & Details | ${this.siteName}`,
            description: `${data.description} Read our detailed review, ratings, and everything you need to know about ${data.title}.`,
            keywords: `${data.title}, movie review, ${data.genre}, ${data.releaseDate}, movie rating, film analysis`,
            image: data.image,
            type: "article"
          };
        }
        break;

      case 'actor':
        if (data) {
          return {
            ...baseMetadata,
            title: `${data.name} - Actor Profile & Filmography | ${this.siteName}`,
            description: `Explore ${data.name}'s complete filmography, biography, and latest movies. Popular films include ${data.popularMovies?.slice(0, 3).join(', ')}.`,
            keywords: `${data.name}, actor profile, filmography, ${data.industry}, movie star, biography`,
            image: data.profileImage,
            type: "profile"
          };
        }
        break;

      default:
        return {
          ...baseMetadata,
          title: `${this.siteName} - Your Gateway to Cinema Universe`,
          description: "Your ultimate destination for movie news, reviews, actor profiles, and entertainment updates.",
          keywords: "movies, cinema, entertainment, reviews, actors, news",
          type: "website"
        };
    }

    return baseMetadata as SEOMetadata;
  }
}