
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{cert.name}</CardTitle>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{cert.year}</Badge>
                  {cert.credentialId && (
                    <p className="text-sm text-muted-foreground">ID: {cert.credentialId}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
