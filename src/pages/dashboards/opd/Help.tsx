
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { HelpCircle, FileText, MessageSquare } from 'lucide-react';
import { helpData } from '@/data/helpData';

const OpdHelp = () => {
  return (
    <DashboardLayout title="Bantuan" activeLink="help">
      <div className="space-y-6">
        <Tabs defaultValue="guide" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="guide">Panduan Penggunaan</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Kontak Dukungan</TabsTrigger>
          </TabsList>

          {/* Guide Tab */}
          <TabsContent value="guide" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} />
                  Panduan Penggunaan Dasbor Dinas Kesehatan
                </CardTitle>
                <CardDescription>
                  Panduan lengkap untuk menggunakan dasbor dan fitur-fitur Smart Lamongan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {helpData.guides.map((guide, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-40 bg-slate-100">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        <HelpCircle size={40} />
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="outline" className="w-full">Lihat Panduan</Button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle size={20} />
                  Pertanyaan yang Sering Diajukan
                </CardTitle>
                <CardDescription>
                  Jawaban untuk pertanyaan umum seputar penggunaan Smart Lamongan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Cari pertanyaan..."
                  className="mb-4"
                />
                <Accordion type="single" collapsible className="w-full">
                  {helpData.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-sm font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare size={20} />
                  Kontak Tim Dukungan
                </CardTitle>
                <CardDescription>
                  Hubungi kami jika Anda memiliki pertanyaan atau masukan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Informasi Kontak</h3>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Email:</span>
                      <span>{helpData.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Telepon:</span>
                      <span>{helpData.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Jam Operasional:</span>
                      <span>{helpData.contactInfo.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium mb-2">Kirim Pesan</h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-medium" htmlFor="name">Nama</label>
                        <Input id="name" placeholder="Nama lengkap" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium" htmlFor="email">Email</label>
                        <Input id="email" type="email" placeholder="Email Anda" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium" htmlFor="subject">Subjek</label>
                      <Input id="subject" placeholder="Subjek pesan" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium" htmlFor="message">Pesan</label>
                      <Textarea id="message" placeholder="Ketikkan pesan Anda di sini" rows={5} />
                    </div>
                    <Button className="w-full">Kirim Pesan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default OpdHelp;
