import { useEffect } from 'react';
import { generatePageSEO, updatePageSEO } from '@/utils/seo';

interface UseSEOProps {
  page: string;
  data?: any;
}

export const useSEO = ({ page, data }: UseSEOProps) => {
  useEffect(() => {
    const seoData = generatePageSEO(page);
    updatePageSEO(seoData);
  }, [page, data]);
};