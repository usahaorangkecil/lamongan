
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import DashboardLayout from '@/components/DashboardLayout';
import { useAuth } from '@/components/auth-provider';
import { Settings, User, Shield, PaintBucket, Bell } from 'lucide-react';
import { temaConfigs, userRoles, notificationTypes } from '@/data/settingsData';

const BupatiSettings = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '081234567890',
    avatarUrl: ''
  });
  
  const [selectedTheme, setSelectedTheme] = useState('1'); // Default theme
  const [selectedNotifications, setSelectedNotifications] = useState(
    notificationTypes.filter(n => n.isEnabled).map(n => n.id)
  );

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profil berhasil diupdate",
      description: "Informasi profil Anda telah berhasil diperbarui",
    });
  };
  
  const handleThemeChange = (value: string) => {
    setSelectedTheme(value);
    toast({
      title: "Tema berhasil diubah",
      description: "Tema dashboard Anda telah berhasil diperbarui",
    });
  };

  const handleNotificationChange = (id: string, checked: boolean) => {
    setSelectedNotifications(prev => 
      checked ? [...prev, id] : prev.filter(item => item !== id)
    );
  };
  
  const saveNotifications = () => {
    toast({
      title: "Notifikasi berhasil diupdate",
      description: "Pengaturan notifikasi Anda telah berhasil diperbarui",
    });
  };

  return (
    <DashboardLayout title="Pengaturan" activeLink="settings">
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" /> <span>Profil</span>
          </TabsTrigger>
          <TabsTrigger value="access" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" /> <span>Akses Pengguna</span>
          </TabsTrigger>
          <TabsTrigger value="theme" className="flex items-center space-x-2">
            <PaintBucket className="h-4 w-4" /> <span>Tema Dashboard</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" /> <span>Notifikasi</span>
          </TabsTrigger>
        </TabsList>
        
        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Profil</CardTitle>
              <CardDescription>
                Edit informasi profil Anda dan ubah gambar profil serta email.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="avatar">Gambar Profil</Label>
                  <Input id="avatar" type="file" className="cursor-pointer" />
                </div>
                <div className="pt-4">
                  <Button type="submit">Simpan Perubahan</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Access Tab */}
        <TabsContent value="access">
          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Akses Pengguna</CardTitle>
              <CardDescription>
                Kelola hak akses untuk setiap pengguna dan tentukan peran dan izin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {userRoles.map(role => (
                  <div key={role.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{role.name}</div>
                      <div className="text-sm text-muted-foreground">ID: {role.id}</div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Permissions:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {role.permissions.map((permission, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Checkbox id={`${role.id}-${idx}`} defaultChecked disabled />
                            <label htmlFor={`${role.id}-${idx}`} className="text-sm">
                              {permission.replace(/_/g, ' ')}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <Button disabled>Kelola Pengguna (Sedang dikembangkan)</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Theme Tab */}
        <TabsContent value="theme">
          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Tema Dashboard</CardTitle>
              <CardDescription>
                Atur tema dashboard (dark/light) dan pilih layout dashboard sesuai preferensi.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={selectedTheme} onValueChange={handleThemeChange}>
                {temaConfigs.map(tema => (
                  <div key={tema.id} className="flex items-center justify-between space-x-2 border rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={tema.id} id={`tema-${tema.id}`} />
                      <Label htmlFor={`tema-${tema.id}`} className="font-medium">{tema.nama}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-sm">{tema.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}</div>
                      <div 
                        className="w-6 h-6 rounded-full border"
                        style={{ backgroundColor: tema.primaryColor }}
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="custom-color">Warna Aksen Kustom</Label>
                  <div className="flex space-x-2 mt-1">
                    <Input id="custom-color" type="color" className="w-12 h-12 p-1 cursor-pointer" defaultValue="#4CAF50" />
                    <Input id="custom-color-hex" defaultValue="#4CAF50" className="flex-1" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="compact-mode" />
                  <Label htmlFor="compact-mode">Mode Kompak (Hemat Ruang)</Label>
                </div>
                <div className="pt-4">
                  <Button>Simpan Konfigurasi Tema</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Pengaturan Notifikasi</CardTitle>
              <CardDescription>
                Tentukan jenis notifikasi yang ingin Anda terima dan kelola pemberitahuan terkait data penting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {notificationTypes.map(notification => (
                  <div key={notification.id} className="flex items-center justify-between border rounded-lg p-4">
                    <div>
                      <p className="font-medium">{notification.name}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                    <Switch 
                      id={`notification-${notification.id}`} 
                      defaultChecked={notification.isEnabled}
                      onCheckedChange={(checked) => handleNotificationChange(notification.id, checked)}
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="email-notifications" defaultChecked />
                  <Label htmlFor="email-notifications">Kirim notifikasi ke email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="push-notifications" defaultChecked />
                  <Label htmlFor="push-notifications">Aktifkan notifikasi push</Label>
                </div>
                <div className="pt-4">
                  <Button onClick={saveNotifications}>Simpan Pengaturan Notifikasi</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default BupatiSettings;
