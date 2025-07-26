// Comprehensive movie database for SEO optimization
export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  genre: string[];
  rating: number;
  imdbRating?: number;
  releaseDate: string;
  duration: string;
  image: string;
  poster?: string;
  status: 'now-showing' | 'coming-soon' | 'trending' | 'featured';
  description: string;
  longDescription?: string;
  trailerUrl?: string;
  director: string[];
  cast: string[];
  language: string[];
  country: string;
  budget?: string;
  boxOffice?: string;
  awards?: string[];
  keywords: string[];
  industry: 'Hollywood' | 'Bollywood' | 'Tollywood' | 'Kollywood' | 'Sandalwood';
}

export const latestMovies2024: Movie[] = [
  {
    id: 'dune-part-two-2024',
    title: 'Dune: Part Two',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    rating: 8.8,
    imdbRating: 8.7,
    releaseDate: 'March 1, 2024',
    duration: '166 min',
    image: '/assets/theater-interior.jpg',
    status: 'now-showing',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    longDescription: 'In this epic continuation of Denis Villeneuve\'s Dune saga, Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.',
    trailerUrl: 'https://youtu.be/Way9Dexny3w',
    director: ['Denis Villeneuve'],
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Josh Brolin', 'Austin Butler'],
    language: ['English'],
    country: 'USA',
    budget: '$190 million',
    boxOffice: '$711.8 million',
    keywords: ['dune', 'sci-fi', 'space opera', 'desert planet', 'spice', 'paul atreides', 'fremen'],
    industry: 'Hollywood'
  },
  {
    id: 'oppenheimer-2023',
    title: 'Oppenheimer',
    genre: ['Biography', 'Drama', 'History'],
    rating: 8.9,
    imdbRating: 8.4,
    releaseDate: 'July 21, 2023',
    duration: '180 min',
    image: '/assets/premiere-scene.jpg',
    status: 'featured',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    longDescription: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world\'s first nuclear explosion, forever changing the course of history.',
    trailerUrl: 'https://youtu.be/uYPbbksJxIg',
    director: ['Christopher Nolan'],
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.', 'Matt Damon', 'Florence Pugh'],
    language: ['English'],
    country: 'USA',
    budget: '$100 million',
    boxOffice: '$952.8 million',
    awards: ['Academy Award for Best Picture', 'Academy Award for Best Director'],
    keywords: ['oppenheimer', 'atomic bomb', 'manhattan project', 'world war ii', 'physicist', 'biography'],
    industry: 'Hollywood'
  },
  {
    id: 'barbie-2023',
    title: 'Barbie',
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    rating: 8.1,
    imdbRating: 6.9,
    releaseDate: 'July 21, 2023',
    duration: '114 min',
    image: '/assets/theater-interior.jpg',
    status: 'trending',
    description: 'Barbie and Ken are having the time of their lives in the colorful and perfect world of Barbie Land.',
    longDescription: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
    trailerUrl: 'https://youtu.be/pBk4NYhWNMM',
    director: ['Greta Gerwig'],
    cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera', 'Kate McKinnon', 'Issa Rae'],
    language: ['English'],
    country: 'USA',
    budget: '$145 million',
    boxOffice: '$1.446 billion',
    keywords: ['barbie', 'comedy', 'pink', 'mattel', 'doll', 'fantasy', 'feminism'],
    industry: 'Hollywood'
  },
  {
    id: 'spider-man-across-spider-verse-2023',
    title: 'Spider-Man: Across the Spider-Verse',
    genre: ['Animation', 'Action', 'Adventure'],
    rating: 9.1,
    imdbRating: 8.7,
    releaseDate: 'June 2, 2023',
    duration: '140 min',
    image: '/assets/premiere-scene.jpg',
    status: 'featured',
    description: 'Miles Morales catapults across the multiverse, where he encounters a team of Spider-People.',
    longDescription: 'After reuniting with Gwen Stacy, Brooklyn\'s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider-Society, a team of Spider-People charged with protecting the Multiverse\'s very existence.',
    trailerUrl: 'https://youtu.be/cqGjhVJWtEg',
    director: ['Joaquim Dos Santos', 'Kemp Powers', 'Justin K. Thompson'],
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Brian Tyree Henry', 'Luna Lauren Vélez', 'Jake Johnson'],
    language: ['English', 'Spanish'],
    country: 'USA',
    budget: '$100 million',
    boxOffice: '$690.9 million',
    awards: ['Academy Award for Best Animated Feature'],
    keywords: ['spider-man', 'animation', 'multiverse', 'superhero', 'miles morales', 'spider-verse'],
    industry: 'Hollywood'
  },
  {
    id: 'jawan-2023',
    title: 'Jawan',
    originalTitle: 'जवान',
    genre: ['Action', 'Thriller', 'Drama'],
    rating: 8.3,
    imdbRating: 7.1,
    releaseDate: 'September 7, 2023',
    duration: '169 min',
    image: '/assets/theater-interior.jpg',
    status: 'trending',
    description: 'A high-octane action thriller starring Shah Rukh Khan in a double role.',
    longDescription: 'A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.',
    trailerUrl: 'https://youtu.be/K9x4LutBv5E',
    director: ['Atlee'],
    cast: ['Shah Rukh Khan', 'Nayanthara', 'Vijay Sethupathi', 'Deepika Padukone', 'Priyamani'],
    language: ['Hindi', 'Tamil', 'Telugu'],
    country: 'India',
    budget: '₹300 crores',
    boxOffice: '₹1,148 crores',
    keywords: ['shah rukh khan', 'action', 'bollywood', 'thriller', 'vigilante', 'atlee'],
    industry: 'Bollywood'
  },
  {
    id: 'rrr-2022',
    title: 'RRR',
    originalTitle: 'రౌద్రం రణం రుధిరం',
    genre: ['Action', 'Drama', 'Period'],
    rating: 9.2,
    imdbRating: 7.9,
    releaseDate: 'March 25, 2022',
    duration: '187 min',
    image: '/assets/premiere-scene.jpg',
    status: 'featured',
    description: 'A tale of two legendary revolutionaries and their journey away from home before they started fighting for their country.',
    longDescription: 'A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rule.',
    trailerUrl: 'https://youtu.be/f_vbAtFSEc0',
    director: ['S.S. Rajamouli'],
    cast: ['N.T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt', 'Ajay Devgn', 'Olivia Morris'],
    language: ['Telugu', 'Hindi', 'Tamil', 'Malayalam', 'Kannada'],
    country: 'India',
    budget: '₹550 crores',
    boxOffice: '₹1,387 crores',
    awards: ['Academy Award for Best Original Song', 'Golden Globe Award'],
    keywords: ['rrr', 'rajamouli', 'period drama', 'tollywood', 'epic', 'revolution', 'british raj'],
    industry: 'Tollywood'
  },
  {
    id: 'kgf-chapter-2-2022',
    title: 'K.G.F: Chapter 2',
    originalTitle: 'ಕೆ.ಜಿ.ಎಫ್: ಅಧ್ಯಾಯ 2',
    genre: ['Action', 'Crime', 'Drama'],
    rating: 8.4,
    imdbRating: 8.2,
    releaseDate: 'April 14, 2022',
    duration: '168 min',
    image: '/assets/theater-interior.jpg',
    status: 'now-showing',
    description: 'The blood-soaked land of Kolar Gold Fields has a new overlord now - Rocky, whose name strikes fear in the heart of his foes.',
    longDescription: 'In the 1980s, Rocky continues his rise to power in the Kolar Gold Fields. His name now strikes fear in the hearts of government officials and goons. However, the government sees him as a threat and wants him dead.',
    trailerUrl: 'https://youtu.be/3ol1i0ZQSJ8',
    director: ['Prashanth Neel'],
    cast: ['Yash', 'Sanjay Dutt', 'Raveena Tandon', 'Srinidhi Shetty', 'Prakash Raj'],
    language: ['Kannada', 'Hindi', 'Telugu', 'Tamil', 'Malayalam'],
    country: 'India',
    budget: '₹100 crores',
    boxOffice: '₹1,215 crores',
    keywords: ['kgf', 'yash', 'rocky bhai', 'kolar gold fields', 'action', 'sandalwood'],
    industry: 'Sandalwood'
  },
  {
    id: 'vikram-2022',
    title: 'Vikram',
    originalTitle: 'விக்ரம்',
    genre: ['Action', 'Crime', 'Thriller'],
    rating: 8.7,
    imdbRating: 8.2,
    releaseDate: 'June 3, 2022',
    duration: '174 min',
    image: '/assets/premiere-scene.jpg',
    status: 'trending',
    description: 'Members of a black ops team must track and eliminate a gang of masked murderers.',
    longDescription: 'Amar is assigned to investigate a case of serial killings. When Amar investigates the case, he realizes it is not what it seems to be and following down this path will lead to nothing but war between everyone involved.',
    trailerUrl: 'https://youtu.be/OKBMCL-frPU',
    director: ['Lokesh Kanagaraj'],
    cast: ['Kamal Haasan', 'Vijay Sethupathi', 'Fahadh Faasil', 'Narain', 'Kalidas Jayaram'],
    language: ['Tamil', 'Hindi', 'Telugu', 'Malayalam', 'Kannada'],
    country: 'India',
    budget: '₹150 crores',
    boxOffice: '₹435 crores',
    keywords: ['vikram', 'kamal haasan', 'lokesh kanagaraj', 'action thriller', 'kollywood'],
    industry: 'Kollywood'
  }
];

export const upcomingMovies2024: Movie[] = [
  {
    id: 'deadpool-wolverine-2024',
    title: 'Deadpool & Wolverine',
    genre: ['Action', 'Comedy', 'Superhero'],
    rating: 8.5,
    releaseDate: 'July 26, 2024',
    duration: '127 min',
    image: '/assets/theater-interior.jpg',
    status: 'coming-soon',
    description: 'Deadpool teams up with Wolverine in this highly anticipated Marvel crossover.',
    trailerUrl: 'https://youtu.be/73_1biulkYk',
    director: ['Shawn Levy'],
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin', 'Morena Baccarin'],
    language: ['English'],
    country: 'USA',
    keywords: ['deadpool', 'wolverine', 'marvel', 'superhero', 'comedy', 'action'],
    industry: 'Hollywood'
  },
  {
    id: 'kalki-2898-ad-2024',
    title: 'Kalki 2898 AD',
    originalTitle: 'కల్కి 2898 ఎ.డి.',
    genre: ['Sci-Fi', 'Action', 'Drama'],
    rating: 8.9,
    releaseDate: 'June 27, 2024',
    duration: '180 min',
    image: '/assets/premiere-scene.jpg',
    status: 'coming-soon',
    description: 'A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.',
    trailerUrl: 'https://youtu.be/BfCIPsEGAS8',
    director: ['Nag Ashwin'],
    cast: ['Prabhas', 'Deepika Padukone', 'Amitabh Bachchan', 'Kamal Haasan', 'Disha Patani'],
    language: ['Telugu', 'Hindi', 'Tamil', 'Malayalam', 'Kannada'],
    country: 'India',
    budget: '₹600 crores',
    keywords: ['kalki', 'prabhas', 'sci-fi', 'futuristic', 'mythology', 'tollywood'],
    industry: 'Tollywood'
  }
];

// SEO-optimized movie categories
export const movieCategories = {
  hollywood: latestMovies2024.filter(movie => movie.industry === 'Hollywood'),
  bollywood: latestMovies2024.filter(movie => movie.industry === 'Bollywood'),
  tollywood: latestMovies2024.filter(movie => movie.industry === 'Tollywood'),
  kollywood: latestMovies2024.filter(movie => movie.industry === 'Kollywood'),
  sandalwood: latestMovies2024.filter(movie => movie.industry === 'Sandalwood'),
};

// Popular search keywords for SEO
export const movieKeywords = [
  'latest movies 2024', 'bollywood movies', 'hollywood movies', 'tollywood movies',
  'movie reviews', 'movie trailers', 'cinema news', 'box office collection',
  'upcoming movies', 'movie ratings', 'imdb ratings', 'movie cast',
  'movie director', 'film industry news', 'celebrity news'
];