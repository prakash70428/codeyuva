"use client";

import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { MotionWrapper } from '@/components/ui/motion-wrapper';
import { SectionHeader } from '@/components/ui/section-header';
import { Send } from 'lucide-react';

async function submitContactForm(data: { name: string; phone: string; message: string }) {
  try {
    const messagesCollectionRef = collection(db, 'messages');
    await addDoc(messagesCollectionRef, {
      name: data.name,
      phone: data.phone,
      message: data.message,
      timestamp: Timestamp.now()
    });
    return { success: true, message: "Message sent successfully! We'll be in touch soon." };
  } catch (error: unknown) {
    console.error("Error adding document to Firestore:", error);
    throw new Error("Failed to send message. Please try again later.");
  }
}

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      const result = await submitContactForm({ name, phone, message });
      if (result.success) {
        toast({ title: "Success!", description: result.message, variant: "default" });
        (event.target as HTMLFormElement).reset();
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong.";
      toast({ title: "Error!", description: errorMessage, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact-section" className="bg-background">
      <MotionWrapper>
        <SectionHeader
          icon={Send}
          iconColor="text-[hsl(200_80%_60%)]"
          title="Get in Touch"
          subtitle="Have questions or ready to enroll? Reach out to us!"
        />
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
                  <Input id="name" name="name" type="text" placeholder="Madhav Kumar" required className="mt-1 bg-input" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" required className="mt-1 bg-input" />
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
                  <a href="mailto:codeyuva2025@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">codeyuva2025@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+918368624572" className="text-muted-foreground hover:text-primary transition-colors">+918368624572</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
                  <span className="text-muted-foreground">House no. 17-A/A, Block-A, Patel Garden, Dwarka Mor, New Delhi-110078</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border shadow-xl">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 3:00 PM</p>
                <p>Sunday: 10:00 AM - 3:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
