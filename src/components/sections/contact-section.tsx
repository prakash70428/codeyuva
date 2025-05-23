"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

// Server Action (simulated for now)
async function submitContactForm(data: { name: string; email: string; message: string }) {
  // In a real app, you'd send this data to your backend or a service like Formspree/Resend.
  console.log("Form data submitted:", data);
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  // Simulate success or failure
  // if (Math.random() > 0.2) { // 80% success rate
  //   return { success: true, message: "Message sent successfully! We'll be in touch soon." };
  // } else {
  //   throw new Error("Failed to send message. Please try again.");
  // }
  return { success: true, message: "Message sent successfully! We'll be in touch soon." };
}


export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const result = await submitContactForm({ name, email, message });
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        });
        (event.target as HTMLFormElement).reset();
      }
    } catch (error: any) {
       toast({
        title: "Error!",
        description: error.message || "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact-section" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions or ready to enroll? Reach out to us!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="bg-card border-border shadow-xl">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>We typically respond within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <Input id="name" name="name" type="text" placeholder="John Doe" required className="mt-1 bg-input" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="mt-1 bg-input" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <Textarea id="message" name="message" placeholder="Your inquiry or message..." required rows={5} className="mt-1 bg-input" />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full shadow-md hover:shadow-lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
         <div className="space-y-8 mt-8 lg:mt-0">
          <Card className="bg-card border-border shadow-xl">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Other ways to reach us.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@codeyuva.com" className="text-muted-foreground hover:text-primary">info@codeyuva.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Code Street, Tech City, TC 54321</span>
              </div>
            </CardContent>
          </Card>
           <Card className="bg-card border-border shadow-xl">
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
