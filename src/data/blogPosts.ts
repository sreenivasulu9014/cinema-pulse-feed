import cinemaExperience from '@/assets/blog-cinema-experience.jpg';
import behindScenes from '@/assets/blog-behind-scenes.jpg';
import awards from '@/assets/blog-awards.jpg';
import streaming from '@/assets/blog-streaming.jpg';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  rating?: string;
  likes: number;
  shares: number;
  views?: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'cinema-experience-2024',
    title: 'The Future of Cinema Experience: IMAX, Dolby, and Beyond',
    excerpt: 'Explore how modern technology is transforming the theatrical experience with IMAX enhanced, Dolby Atmos sound, and 4DX motion seats. Discover why cinema halls are investing millions in premium formats and what it means for moviegoers.',
    author: 'Sarah Johnson',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Technology & Entertainment Writer specializing in cinema innovation and viewer experience',
    date: '2024-02-20',
    readTime: '12 min read',
    category: 'Industry Insights',
    image: cinemaExperience,
    tags: ['IMAX', 'Dolby Atmos', '4DX', 'Cinema Technology', 'Movie Experience', 'Premium Formats'],
    rating: 'Featured',
    likes: 2847,
    shares: 456,
    featured: true,
    content: `
      <h2>The Revolution in Cinema Technology</h2>
      <p>The movie theater experience has undergone a dramatic transformation in recent years. With streaming services competing for attention, cinema halls are investing heavily in premium experiences that simply cannot be replicated at home.</p>
      
      <h3>IMAX Enhanced: Beyond the Screen</h3>
      <p>IMAX technology has evolved from simply being about larger screens to delivering an immersive experience through enhanced color, clarity, and sound. Recent innovations include IMAX Enhanced certification for home systems and laser projection that brings unprecedented brightness and contrast to cinema screens.</p>
      
      <div class="tech-specs">
        <h4>IMAX Technical Specifications</h4>
        <ul>
          <li>Screen Size: Up to 100 feet wide</li>
          <li>Resolution: 8K+ laser projection</li>
          <li>Sound: 12-channel surround sound system</li>
          <li>Brightness: 2x standard cinema brightness</li>
          <li>Contrast Ratio: 2,500:1 (laser systems)</li>
        </ul>
      </div>

      <h3>Dolby Cinema: Audio-Visual Perfection</h3>
      <p>Dolby Cinema combines Dolby Vision HDR imaging with Dolby Atmos sound to create what many consider the ultimate premium cinema experience. With over 500 speakers in a typical auditorium, the 3D audio places sound precisely around the audience.</p>

      <h3>4DX and ScreenX: Physical Immersion</h3>
      <p>4DX takes moviegoing to new heights with motion seats, environmental effects, and scent delivery. ScreenX expands the screen to the side walls, creating a 270-degree viewing experience that puts audiences in the center of the action.</p>

      <h3>The Economics of Premium Cinema</h3>
      <p>Premium format tickets can cost 2-3x regular admission, but they're proving popular with audiences seeking experiences they can't get at home. This trend has helped theaters remain profitable despite streaming competition.</p>

      <div class="box-office-data">
        <h4>Premium Format Revenue Growth</h4>
        <ul>
          <li>IMAX: $1.2 billion annual box office</li>
          <li>Dolby Cinema: 30% year-over-year growth</li>
          <li>4DX: 800+ screens globally</li>
          <li>Premium tickets: 15% of total box office revenue</li>
        </ul>
      </div>

      <h3>Future Innovations</h3>
      <p>Looking ahead, we can expect virtual reality integration, personalized audio experiences, and even AI-enhanced projection that adapts to audience reactions. The cinema of tomorrow will be an experience that engages all senses.</p>
    `
  },
  {
    id: 'bollywood-box-office-2024',
    title: 'Bollywood Box Office 2024: Complete Financial Analysis & Trends',
    excerpt: 'Comprehensive breakdown of Bollywood box office performance in 2024. Analyze hit vs flop ratios, star power economics, OTT impact on theatrical releases, and why mid-budget films are struggling while big-budget spectacles dominate collections.',
    author: 'Vikram Malhotra',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Film Trade Analyst with 20+ years tracking box office trends and film economics',
    date: '2024-02-18',
    readTime: '15 min read',
    category: 'Box Office Analysis',
    image: awards,
    tags: ['Bollywood', 'Box Office', 'Film Business', 'Revenue Analysis', 'Trade', 'Collections'],
    rating: 'Trending',
    likes: 3241,
    shares: 678,
    featured: true,
    content: `
      <h2>The State of Bollywood Box Office in 2024</h2>
      <p>2024 has been a year of extremes for Bollywood. While a handful of films have crossed ₹500 crore domestically, the overall hit ratio remains concerningly low at just 15%, down from 25% in 2019.</p>

      <h3>Top Grossers: The Billion-Rupee Club</h3>
      <div class="box-office-chart">
        <h4>Highest Grossing Films (India Net)</h4>
        <ol>
          <li><strong>Jawan</strong> - ₹640 crore (Shah Rukh Khan)</li>
          <li><strong>Dunki</strong> - ₹425 crore (Shah Rukh Khan)</li>
          <li><strong>Fighter</strong> - ₹385 crore (Hrithik Roshan)</li>
          <li><strong>Tiger 3</strong> - ₹362 crore (Salman Khan)</li>
          <li><strong>Animal</strong> - ₹558 crore (Ranbir Kapoor)</li>
        </ol>
      </div>

      <h3>The Star Power Economics</h3>
      <p>Star salaries have skyrocketed, with top actors commanding ₹100-150 crore per film plus profit shares. However, audience interest is increasingly content-driven rather than star-driven, evidenced by surprise hits like 12th Fail and unexpected flops from major stars.</p>

      <div class="economics-breakdown">
        <h4>Average Film Economics (₹100 Crore Budget)</h4>
        <ul>
          <li>Star Cast: ₹40-50 crore (40-50%)</li>
          <li>Production: ₹30-35 crore (30-35%)</li>
          <li>VFX & Post: ₹15-20 crore (15-20%)</li>
          <li>Marketing: ₹25-30 crore (25-30%)</li>
          <li>Break-even: ₹175-200 crore gross required</li>
        </ul>
      </div>

      <h3>OTT Impact on Theatrical Business</h3>
      <p>Streaming platforms are paying ₹50-100 crore for digital rights of big films, effectively reducing financial risk for producers. However, this has led to shorter theatrical windows and audience willingness to wait for OTT releases.</p>

      <h3>The Mid-Budget Crisis</h3>
      <p>Films in the ₹30-60 crore budget range are struggling to find theatrical success. Distributors are hesitant to invest in these films when audiences either want big spectacles or wait for small films on streaming platforms.</p>

      <h3>Regional Cinema Competition</h3>
      <p>South Indian films dubbed in Hindi have captured significant market share. Films like Salaar, RRR, and KGF 2 have collectively earned over ₹2000 crore in Hindi markets, directly competing with Bollywood releases.</p>

      <h3>2024 Forecast</h3>
      <p>The industry is projected to reach ₹15,000 crore in total box office collections (all languages), with international markets contributing 30%. Success will increasingly depend on strong content, efficient budget management, and strategic release planning.</p>
    `
  },
  {
    id: 'streaming-wars-2024',
    title: 'Streaming Wars 2024: Netflix vs Prime vs Hotstar Battle for Indian Market',
    excerpt: 'Deep dive into the fierce competition among streaming platforms in India. Analysis of content strategies, subscription pricing wars, regional content investment, and exclusive movie premieres. Which platform is winning the Indian audience?',
    author: 'Priya Reddy',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Digital Media Analyst covering streaming platforms and content distribution strategies',
    date: '2024-02-15',
    readTime: '10 min read',
    category: 'Streaming & OTT',
    image: streaming,
    tags: ['Netflix', 'Prime Video', 'Disney+ Hotstar', 'OTT', 'Streaming', 'Content Strategy'],
    rating: 'Analysis',
    likes: 1876,
    shares: 342,
    featured: true,
    content: `
      <h2>The Battle for India's Streaming Audience</h2>
      <p>With over 500 million internet users, India has become the most competitive streaming market globally. Netflix, Amazon Prime Video, and Disney+ Hotstar are investing billions to capture and retain subscribers.</p>

      <h3>Market Share Breakdown</h3>
      <div class="market-data">
        <h4>Subscriber Base (2024 Estimates)</h4>
        <ul>
          <li><strong>Disney+ Hotstar:</strong> 62 million paid subscribers</li>
          <li><strong>Amazon Prime Video:</strong> 24 million subscribers (included with Prime)</li>
          <li><strong>Netflix:</strong> 10 million paid subscribers</li>
          <li><strong>Others (ZEE5, SonyLIV, etc.):</strong> 25 million combined</li>
        </ul>
      </div>

      <h3>Pricing Strategies</h3>
      <p>Indian streaming platforms have pioneered mobile-only plans as low as ₹149/month, recognizing that most Indian viewers stream on smartphones. This has forced global giants to adapt their pricing models.</p>

      <div class="pricing-comparison">
        <h4>Monthly Subscription Costs</h4>
        <ul>
          <li>Netflix Mobile: ₹149</li>
          <li>Netflix Premium: ₹649</li>
          <li>Prime Video: ₹299 (with Prime benefits)</li>
          <li>Disney+ Hotstar Mobile: ₹149</li>
          <li>Disney+ Hotstar Premium: ₹299</li>
        </ul>
      </div>

      <h3>Content Investment Trends</h3>
      <p>Platforms are spending heavily on original Indian content. Netflix has announced ₹3000 crore investment in Indian content by 2025, while Prime Video is focusing on regional language originals.</p>

      <h3>Exclusive Movie Releases</h3>
      <p>The trend of direct-to-OTT releases accelerated during the pandemic and continues for mid-budget films. Major stars like Akshay Kumar and Ajay Devgn have released films directly on streaming platforms.</p>

      <h3>Sports Content: The Game Changer</h3>
      <p>Disney+ Hotstar dominates with IPL and cricket rights, bringing in 400+ million viewers during tournaments. Sports content remains the biggest driver of subscriptions in India.</p>

      <h3>Regional Language Strategy</h3>
      <p>Success in India requires strong regional content. Prime Video's hits in Tamil, Telugu, and Malayalam have proven that regional originals can compete with Bollywood content in viewership.</p>
    `
  },
  {
    id: 'behind-scenes-blockbuster',
    title: 'Behind the Scenes: How Blockbusters Are Made in Modern Indian Cinema',
    excerpt: 'Exclusive look at the making of mega-budget Indian films. From pre-production planning to VFX integration, discover the complex process of creating visual spectacles like RRR, Baahubali, and Brahmastra. Insights from industry professionals.',
    author: 'Arjun Mehta',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Film Production Expert and VFX Specialist with experience on 50+ major productions',
    date: '2024-02-12',
    readTime: '14 min read',
    category: 'Production Insights',
    image: behindScenes,
    tags: ['Film Production', 'VFX', 'Behind The Scenes', 'Filmmaking', 'Indian Cinema', 'Blockbusters'],
    rating: 'In-Depth',
    likes: 2456,
    shares: 523,
    featured: true,
    content: `
      <h2>The Art and Science of Making Blockbusters</h2>
      <p>Creating a modern Indian blockbuster requires years of planning, hundreds of crew members, and budgets exceeding ₹300 crore. Let's explore the intricate process from concept to screen.</p>

      <h3>Pre-Production: Planning the Spectacle</h3>
      <p>Major productions now spend 12-18 months in pre-production. This includes script development, storyboarding, location scouting, cast finalization, and extensive previz (pre-visualization) work.</p>

      <div class="production-timeline">
        <h4>Typical Blockbuster Production Timeline</h4>
        <ul>
          <li><strong>Concept to Script:</strong> 6-12 months</li>
          <li><strong>Pre-Production:</strong> 12-18 months</li>
          <li><strong>Principal Photography:</strong> 150-200 days</li>
          <li><strong>Post-Production:</strong> 8-12 months</li>
          <li><strong>VFX Work:</strong> 12-18 months (parallel to shooting)</li>
          <li><strong>Total Timeline:</strong> 3-4 years</li>
        </ul>
      </div>

      <h3>The VFX Revolution</h3>
      <p>Indian cinema has dramatically improved its VFX capabilities. Films like RRR used over 2,000 VFX shots, matching international standards. Major productions now employ multiple VFX studios across countries.</p>

      <div class="vfx-breakdown">
        <h4>VFX Budget Distribution</h4>
        <ul>
          <li>Character Animation: 30-35%</li>
          <li>Environment Creation: 25-30%</li>
          <li>Action Sequences: 20-25%</li>
          <li>Color Grading & Finishing: 10-15%</li>
          <li>R&D and Testing: 5-10%</li>
        </ul>
      </div>

      <h3>International Collaborations</h3>
      <p>Top Indian productions now collaborate with international technicians. Brahmastra worked with DNEG (UK), while RRR had experts from Hollywood contributing to action choreography and visual effects.</p>

      <h3>Sound Design and Music</h3>
      <p>Modern blockbusters invest heavily in sound design. Dolby Atmos mixing, extensive foley work, and collaboration with international composers have become standard for big-budget productions.</p>

      <h3>The Economics of Scale</h3>
      <p>To justify massive budgets, films now release in multiple languages simultaneously. A ₹400 crore production needs to gross ₹700-800 crore globally to be profitable, achievable only with pan-India releases.</p>

      <h3>Marketing and Publicity</h3>
      <p>Marketing budgets have grown to ₹50-70 crore for major releases. Digital marketing, influencer partnerships, and multi-city promotional tours are essential to create pre-release buzz.</p>
    `
  },
  {
    id: 'acting-masterclass-method',
    title: 'Method Acting in Indian Cinema: From Aamir Khan to Ranveer Singh',
    excerpt: 'Explore the evolution of method acting in Bollywood and regional cinema. How actors like Aamir Khan, Ranveer Singh, and Vijay Sethupathi transform themselves physically and mentally for roles. Includes insights from acting coaches and directors.',
    author: 'Meera Chopra',
    authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Film Critic and Acting Coach specializing in performance analysis',
    date: '2024-02-10',
    readTime: '11 min read',
    category: 'Acting & Performance',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop',
    tags: ['Method Acting', 'Bollywood', 'Acting Techniques', 'Performance', 'Character Preparation'],
    likes: 1654,
    shares: 289,
    content: `
      <h2>The Method Acting Revolution</h2>
      <p>Method acting, once rare in Indian cinema, has become increasingly common as actors strive for authentic performances. This approach involves deeply inhabiting a character's psychology and physical characteristics.</p>

      <h3>Aamir Khan: The Transformation Pioneer</h3>
      <p>Aamir Khan pioneered physical transformation for roles in Indian cinema. For Dangal, he gained 30kg to play an older wrestler, then lost it all plus more for younger scenes. This dedication set new standards for actor commitment.</p>

      <h3>Ranveer Singh: Living the Character</h3>
      <p>Ranveer Singh's method includes maintaining character accent and behavior off-camera during shoots. For Padmaavat, he stayed in character as Alauddin Khilji, isolating himself from the cast to maintain the character's menacing aura.</p>

      <h3>The Risks and Rewards</h3>
      <p>Method acting can take a physical and mental toll. Actors report depression, exhaustion, and difficulty separating themselves from intense characters. Yet the results often translate to critically acclaimed performances.</p>

      <h3>Training and Preparation</h3>
      <p>Leading actors now work with international acting coaches, dialect coaches, and movement specialists. Preparation for a single role can span 6-12 months before filming begins.</p>
    `
  },
  {
    id: 'film-festivals-guide',
    title: 'Complete Guide to Major Film Festivals 2024: Cannes, TIFF, IFFK, and More',
    excerpt: 'Comprehensive guide to navigating major international and Indian film festivals. Learn about submission processes, what programmers look for, networking opportunities, and how festival success can launch careers. Essential reading for filmmakers.',
    author: 'Ravi Kumar',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    authorBio: 'Film Festival Curator and Independent Cinema Advocate',
    date: '2024-02-08',
    readTime: '13 min read',
    category: 'Film Festivals',
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1200&h=600&fit=crop',
    tags: ['Film Festivals', 'Cannes', 'TIFF', 'Independent Cinema', 'Filmmaking'],
    likes: 987,
    shares: 198,
    content: `
      <h2>Navigating the Film Festival Circuit</h2>
      <p>Film festivals remain crucial platforms for independent filmmakers to showcase their work, network with industry professionals, and secure distribution deals.</p>

      <h3>Major International Festivals</h3>
      <div class="festival-calendar">
        <h4>Key Festivals and Submission Deadlines</h4>
        <ul>
          <li><strong>Cannes Film Festival (May):</strong> Submission deadline November previous year</li>
          <li><strong>Venice Film Festival (September):</strong> Deadline May-June</li>
          <li><strong>Toronto International Film Festival (September):</strong> Deadline June-July</li>
          <li><strong>Berlin Film Festival (February):</strong> Deadline November previous year</li>
        </ul>
      </div>

      <h3>Indian Film Festivals</h3>
      <p>India hosts several prestigious festivals including IFFI Goa, Mumbai Film Festival (MAMI), and International Film Festival of Kerala (IFFK). These provide platforms specifically for Indian independent cinema.</p>

      <h3>What Programmers Look For</h3>
      <p>Festival programmers receive thousands of submissions. They seek unique voices, strong storytelling, technical excellence, and cultural relevance. A compelling director's statement can make the difference.</p>

      <h3>Festival Strategy for Filmmakers</h3>
      <p>Premiere strategy is crucial. Starting at a prestigious festival can open doors to other festivals and distributors. Understanding festival tiers and planning your festival run strategically is essential.</p>
    `
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};
