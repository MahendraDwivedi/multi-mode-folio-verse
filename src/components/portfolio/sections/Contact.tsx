
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, Globe, Code } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Contact = () => {
  const contactLinks = [
    { icon: Mail, label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    { icon: Phone, label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: portfolioData.contact.linkedin },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: portfolioData.contact.github },
    ...(portfolioData.contact.website ? [{ icon: Globe, label: 'Website', value: 'Portfolio Website', href: portfolioData.contact.website }] : []),
    ...(portfolioData.contact.leetcode ? [{ icon: Code, label: 'LeetCode', value: 'LeetCode Profile', href: portfolioData.contact.leetcode }] : []),
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactLinks.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Button key={index} variant="outline" className="h-auto p-4 justify-start" asChild>
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="w-5 h-5 mr-3" />
                        <div className="text-left">
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-sm text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
