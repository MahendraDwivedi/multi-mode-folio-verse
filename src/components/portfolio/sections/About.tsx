
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {portfolioData.about.description}
                </p>
                <div className="space-y-2">
                  <p><strong>Location:</strong> {portfolioData.about.location}</p>
                  <p><strong>Email:</strong> {portfolioData.about.email}</p>
                  <p><strong>Phone:</strong> {portfolioData.about.phone}</p>
                </div>
              </div>
              {portfolioData.about.profileImage && (
                <div className="flex justify-center">
                  <img 
                    src={portfolioData.about.profileImage} 
                    alt={portfolioData.about.name}
                    className="w-64 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
