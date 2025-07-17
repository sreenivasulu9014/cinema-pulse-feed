import { Mail, Phone, MapPin, Users, Award, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Editor-in-Chief",
      bio: "15+ years in entertainment journalism",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "Senior Film Critic",
      bio: "Award-winning critic and cinema enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      role: "Box Office Analyst",
      bio: "Data-driven insights into film business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "2M+", label: "Monthly Readers", icon: Users },
    { number: "50K+", label: "Articles Published", icon: Award },
    { number: "10+", label: "Years of Excellence", icon: Star },
    { number: "99%", label: "Reader Satisfaction", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About ibommatv.live
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your premier destination for comprehensive movie news, reviews, and entertainment updates
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At ibommatv.live, we're passionate about bringing you the most comprehensive and engaging 
                coverage of the entertainment industry. From breaking news to in-depth reviews, we cover 
                everything that matters in cinema.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of dedicated journalists and film critics work around the clock to deliver 
                accurate, timely, and insightful content across all major film industries - Hollywood, 
                Bollywood, Tollywood, and Kollywood.
              </p>
              <Button variant="cinema" size="lg">
                Join Our Community
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1489599510025-c4036860da0e?w=600&h=400&fit=crop" 
                alt="Cinema"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">By the Numbers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center p-6">
                <CardContent className="p-0">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card border-border text-center overflow-hidden">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Movie Reviews & Ratings",
              "Box Office Analysis",
              "Celebrity Interviews", 
              "Behind-the-Scenes",
              "Industry News",
              "Release Calendars",
              "Fan Theories",
              "Cinema Trends"
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border p-4 text-center">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-foreground">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a story tip, feedback, or want to collaborate? We'd love to hear from you!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">contact@ibommatv.live</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">Mumbai, Maharashtra</p>
              </div>
            </div>
            <Button variant="cinema" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;