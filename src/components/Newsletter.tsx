import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive the latest movie updates in your inbox.",
      });
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Stay Updated with Latest Movie News
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get exclusive updates about upcoming releases, behind-the-scenes content, 
            and celebrity news delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-muted/50"
                required
              />
            </div>
            <Button 
              type="submit" 
              variant="cinema"
              className="whitespace-nowrap"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Subscribed!
                </>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </form>
          
          <p className="text-muted-foreground text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;