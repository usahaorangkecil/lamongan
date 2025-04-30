
import { ReactNode } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './auth-provider';
import { useTheme } from './theme-provider';
import { 
  LayoutDashboard, ChevronDown, Users, FileCheck, Activity, 
  GraduationCap, Heart, Home, Settings, HelpCircle, LogOut, 
  Sun, Moon
} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from '@/components/ui/button';

interface SidebarLinkProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarLink = ({ icon, label, href, active = false }: SidebarLinkProps) => (
  <Link
    to={href}
    className={`flex items-center p-3 rounded-lg transition-colors ${
      active 
        ? 'bg-primary text-white' 
        : 'hover:bg-white/10 text-white'
    }`}
  >
    <span className="mr-3">{icon}</span>
    <span>{label}</span>
  </Link>
);

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  activeLink?: string;
}

const DashboardLayout = ({ children, title, activeLink = 'statistik' }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  
  if (!user) {
    navigate('/login');
    return null;
  }

  // Role-specific menu links
  const getMenuLinks = () => {
    const baseUrl = `/dashboard/${user.role}`;
    
    const commonLinks = [
      { icon: <LayoutDashboard size={18} />, label: 'Statistik', href: `${baseUrl}/statistik`, id: 'statistik' },
      // { icon: <Users size={18} />, label: 'Pengangguran', href: `${baseUrl}/pengangguran`, id: 'pengangguran' },
      // { icon: <Heart size={18} />, label: 'Kesehatan', href: `${baseUrl}/kesehatan`, id: 'kesehatan' },
      // { icon: <GraduationCap size={18} />, label: 'Pendidikan', href: `${baseUrl}/pendidikan`, id: 'pendidikan' },
      // { icon: <FileCheck size={18} />, label: 'Kemiskinan', href: `${baseUrl}/kemiskinan`, id: 'kemiskinan' },
      // { icon: <Home size={18} />, label: 'Infrastruktur', href: `${baseUrl}/infrastruktur`, id: 'infrastruktur' },
      // { icon: <Activity size={18} />, label: 'Lingkungan', href: `${baseUrl}/lingkungan`, id: 'lingkungan' }
    ];
    
    // Add role-specific links
    if (user.role === 'bupati') {
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Rekomendasi',
        href: `${baseUrl}/rekomendasi`,
        id: 'rekomendasi'
      },
      { 
      icon: <Users size={18} />, 
      label: 'Pengangguran', 
      href: `${baseUrl}/pengangguran`, 
      id: 'pengangguran' 
      },
      { icon: <Heart size={18} />, label: 'Kesehatan', href: `${baseUrl}/kesehatan`, id: 'kesehatan' },
      { icon: <GraduationCap size={18} />, label: 'Pendidikan', href: `${baseUrl}/pendidikan`, id: 'pendidikan' },
      { icon: <FileCheck size={18} />, label: 'Kemiskinan', href: `${baseUrl}/kemiskinan`, id: 'kemiskinan' },
      { icon: <Home size={18} />, label: 'Infrastruktur', href: `${baseUrl}/infrastruktur`, id: 'infrastruktur' },
      { icon: <Activity size={18} />, label: 'Lingkungan', href: `${baseUrl}/lingkungan`, id: 'lingkungan' });
    }
    
    if (user.role === 'opd') {
      // Add OPD specific menu items
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Faskes',
        href: `${baseUrl}/faskes`,
        id: 'faskes'
      });
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Imunisasi',
        href: `${baseUrl}/imunisasi`,
        id: 'imunisasi'
      });
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Penyakit',
        href: `${baseUrl}/penyakit`,
        id: 'penyakit'
      });
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Vaksinasi',
        href: `${baseUrl}/vaksinasi`,
        id: 'vaksinasi'
      });
      commonLinks.push({
        icon: <Activity size={18} />,
        label: 'Bansos',
        href: `${baseUrl}/bansos`,
        id: 'bansos'
      });
    }

    if (user.role === 'camat') {
      commonLinks.push(
      { 
      icon: <Users size={18} />, 
      label: 'Pengangguran', 
      href: `${baseUrl}/pengangguran`, 
      id: 'pengangguran' 
      },
      { icon: <Heart size={18} />, label: 'Kesehatan', href: `${baseUrl}/kesehatan`, id: 'kesehatan' },
      { icon: <GraduationCap size={18} />, label: 'Pendidikan', href: `${baseUrl}/pendidikan`, id: 'pendidikan' },
      { icon: <FileCheck size={18} />, label: 'Kemiskinan', href: `${baseUrl}/kemiskinan`, id: 'kemiskinan' },
      { icon: <Home size={18} />, label: 'Infrastruktur', href: `${baseUrl}/infrastruktur`, id: 'infrastruktur' },
      { icon: <Activity size={18} />, label: 'Lingkungan', href: `${baseUrl}/lingkungan`, id: 'lingkungan' });
    }


    
    
    return commonLinks;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black/50 border-r border-white/10 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Smart Lamongan</span>
          </Link>
        </div>
        
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              {user.name.charAt(0)}
            </div>
            <div className="ml-3">
              <div className="font-medium">{user.name}</div>
              <div className="text-xs text-gray-400 capitalize">
                Role: {user.role}
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-400">Theme:</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white hover:text-primary"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {getMenuLinks().map(link => (
            <SidebarLink 
              key={link.id}
              icon={link.icon} 
              label={link.label} 
              href={link.href} 
              active={activeLink === link.id} 
            />
          ))}
        </div>
        
        {/* Bottom Links */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <SidebarLink 
  icon={<Settings size={18} />} 
  label="Settings" 
  href="/dashboard/bupati/settings" 
/>
<SidebarLink 
  icon={<HelpCircle size={18} />} 
  label="Help" 
  href="/dashboard/bupati/help" 
/>

          <button
            onClick={() => logout()}
            className="flex items-center p-3 rounded-lg text-red-400 hover:bg-red-900/20 w-full transition-colors"
          >
            <LogOut size={18} className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Top Nav */}
        <header className="bg-black/50 border-b border-white/10 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">{title}</h1>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-sm text-white/70 hover:text-primary">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <span className="mr-2">{user.name}</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/help" className="flex w-full">Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                  {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
