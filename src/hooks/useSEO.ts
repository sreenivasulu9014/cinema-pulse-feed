import { useEffect } from 'react';
import { SEOManager } from '@/utils/seo';

interface UseSEOProps {
  page: string;
  data?: any;
  customMetadata?: any;
}

export const useSEO = ({ page, data, customMetadata }: UseSEOProps) => {
  useEffect(() => {
    // Get page-specific metadata
    const metadata = customMetadata || SEOManager.getPageMetadata(page, data);
    
    // Update page SEO
    SEOManager.updatePageSEO(metadata);

    // Add structured data based on page type
    if (page === 'home') {
      SEOManager.addWebsiteStructuredData();
    } else if (page === 'movie' && data) {
      SEOManager.addMovieStructuredData(data);
    } else if (page === 'actor' && data) {
      SEOManager.addActorStructuredData(data);
    }

    // Cleanup function to remove structured data when component unmounts
    return () => {
      // Remove page-specific structured data
      const schemas = ['movie-schema', 'actor-schema'];
      schemas.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.remove();
        }
      });
    };
  }, [page, data, customMetadata]);
};