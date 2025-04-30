
import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { settingsData } from '@/data/settingsData';

const OpdSettings = () => {
  const [profileData, setProfileData] = useState({
    name: 'Dinas Kesehatan Kabupaten Lamongan',
    email: 'dinkes@lamongan.go.id',
    phone: '(0322) 321123',
    address: 'Jl. Kusuma Bangsa No. 7, Lamongan',
    avatar: '/placeholder.svg'
  });

  const [notifications, setNotifications] = useState({
    newData: true,
    updates: true,
    alerts: true,
    newsletter: false
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  return (
    <DashboardLayout title="Pengaturan" activeLink="settings">
      <div className="space-y-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="profile">Profil</TabsTrigger>
            <TabsTrigger value="access">Akses Pengguna</TabsTrigger>
            <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Profil Dinas</CardTitle>
                <CardDescription>
                  Kelola informasi profil Dinas Kesehatan Anda di sini
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden">
                    <img 
                      src={profileData.avatar} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button variant="outline">Ubah Foto</Button>
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nama Dinas</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={profileData.name} 
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={profileData.email} 
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={profileData.phone} 
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address">Alamat</Label>
                    <Input 
                      id="address" 
                      name="address"
                      value={profileData.address} 
                      onChange={handleProfileChange}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button>Simpan Perubahan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Access Tab */}
          <TabsContent value="access" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Manajemen Akses Pengguna</CardTitle>
                <CardDescription>
                  Kelola hak akses untuk pengguna Dinas Kesehatan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {settingsData.users.map((user, index) => (
                    <div key={index} className="flex items-center justify-between space-x-4 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Select defaultValue={user.role}>
                          <SelectTrigger className="w-36">
                            <SelectValue placeholder="Pilih Peran" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="viewer">Viewer</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="flex justify-end">
                  <Button>Tambah Pengguna</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-4 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Notifikasi</CardTitle>
                <CardDescription>
                  Konfigurasikan notifikasi yang ingin Anda terima
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">Pemberitahuan Data Baru</h3>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan notifikasi saat ada data baru terkait kesehatan
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.newData} 
                      onCheckedChange={() => handleNotificationChange('newData')}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">Update Sistem</h3>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan notifikasi saat ada pembaruan sistem
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.updates} 
                      onCheckedChange={() => handleNotificationChange('updates')}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">Alert Kesehatan</h3>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan notifikasi saat ada alert kesehatan penting
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.alerts} 
                      onCheckedChange={() => handleNotificationChange('alerts')}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-medium">Newsletter</h3>
                      <p className="text-sm text-muted-foreground">
                        Dapatkan newsletter bulanan terkait kesehatan
                      </p>
                    </div>
                    <Switch 
                      checked={notifications.newsletter} 
                      onCheckedChange={() => handleNotificationChange('newsletter')}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Simpan Preferensi</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default OpdSettings;
