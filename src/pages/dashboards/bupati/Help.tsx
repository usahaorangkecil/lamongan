
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/DashboardLayout';
import { HelpCircle, BookOpen, MessageSquare, Search } from 'lucide-react';
import { faqData, tutorialData, contactDataArray } from '@/data/helpData';

const BupatiHelp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Filter FAQ data based on search query
  const filteredFAQs = searchQuery 
    ? faqData.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData;

  // Filter tutorials based on search query
  const filteredTutorials = searchQuery
    ? tutorialData.filter(tutorial =>
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.steps.some(step => step.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : tutorialData;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan terkirim",
      description: "Terima kasih telah menghubungi kami. Kami akan segera menindaklanjuti pesan Anda.",
    });
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <DashboardLayout title="Bantuan dan Tutorial" activeLink="help">
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Cari bantuan, tutorial, atau FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="guide">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="guide" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" /> <span>Panduan Penggunaan</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" /> <span>FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" /> <span>Kontak Dukungan</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Guide Tab */}
          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>Tutorial dan Panduan Penggunaan</CardTitle>
                <CardDescription>
                  Pelajari cara mengakses data dan menggunakan fitur-fitur dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {filteredTutorials.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">
                    Tidak ada tutorial yang cocok dengan pencarian Anda.
                  </p>
                ) : (
                  filteredTutorials.map(tutorial => (
                    <Card key={tutorial.id} className="border border-primary/30 bg-background/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                        <CardDescription>{tutorial.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="font-medium text-sm">Langkah-langkah:</p>
                          <ol className="list-decimal pl-5 space-y-1">
                            {tutorial.steps.map((step, idx) => (
                              <li key={idx} className="text-sm">{step}</li>
                            ))}
                          </ol>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">Kategori: {tutorial.category}</p>
                      </CardContent>
                    </Card>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* FAQ Tab */}
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Pertanyaan yang Sering Diajukan</CardTitle>
                <CardDescription>
                  Jawaban untuk pertanyaan umum yang sering diajukan oleh pengguna.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredFAQs.length === 0 ? (
                  <p className="text-center text-muted-foreground py-4">
                    Tidak ada FAQ yang cocok dengan pencarian Anda.
                  </p>
                ) : (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map(faq => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                          <span className="text-xs text-muted-foreground ml-2">({faq.category})</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Contact Tab */}
          <TabsContent value="contact">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Hubungi Dukungan Teknis</CardTitle>
                  <CardDescription>
                    Kirimkan pertanyaan atau laporkan masalah melalui formulir di bawah.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Nama</label>
                        <Input 
                          id="name" 
                          value={contactForm.name}
                          onChange={e => setContactForm({...contactForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email"
                          value={contactForm.email}
                          onChange={e => setContactForm({...contactForm, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subjek</label>
                      <Input 
                        id="subject"
                        value={contactForm.subject}
                        onChange={e => setContactForm({...contactForm, subject: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                      <Textarea 
                        id="message" 
                        rows={5}
                        value={contactForm.message}
                        onChange={e => setContactForm({...contactForm, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Kirim Pesan</Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                  <CardDescription>
                    Detail kontak untuk departemen dukungan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactDataArray.map(contact => (
                    <div key={contact.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                      <h3 className="font-medium">{contact.department}</h3>
                      <p className="text-sm text-muted-foreground">Email: {contact.email}</p>
                      <p className="text-sm text-muted-foreground">Telepon: {contact.phone}</p>
                      <p className="text-sm text-muted-foreground">Alamat: {contact.address}</p>
                    </div>
                  ))}
                  <div className="pt-3">
                    <p className="text-sm text-muted-foreground">Jam Kerja: Senin - Jumat, 08.00 - 16.00 WIB</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default BupatiHelp;
