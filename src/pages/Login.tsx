
import { useState, FormEvent } from 'react';
import { useAuth } from '@/components/auth-provider';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Email dan password harus diisi.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const success = login(email, password);
      
      if (success) {
        toast({
          title: 'Login berhasil',
          description: 'Anda akan diarahkan ke dashboard.'
        });
      } else {
        setError('Email atau password tidak valid.');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat login. Silakan coba lagi.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary">Smart Lamongan</h1>
          </Link>
        </div>
        
        {/* Login Card */}
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Login ke Smart Lamongan</h2>
          
          {error && (
            <div className="bg-red-900/30 text-red-200 p-3 rounded mb-6 text-sm border border-red-800">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                  placeholder="nama@lamongan.go.id"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-black/50 border-white/10 text-white placeholder:text-gray-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="text-sm text-right">
                <a href="#" className="text-primary hover:text-primary-300">
                  Lupa password?
                </a>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-600"
              disabled={isLoading}
            >
              {isLoading ? 'Memproses...' : 'Login'}
            </Button>
          </form>
          
          {/* Test Accounts */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">
              Akun Demo:
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <div>
                <p className="font-medium">Bupati:</p>
                <p>bupati@lamongan.go.id</p>
                <p>password123</p>
              </div>
              <div>
                <p className="font-medium">OPD:</p>
                <p>opd@lamongan.go.id</p>
                <p>password123</p>
              </div>
              <div>
                <p className="font-medium">Camat:</p>
                <p>camat@lamongan.go.id</p>
                <p>password123</p>
              </div>
              <div>
                <p className="font-medium">Admin:</p>
                <p>admin@lamongan.go.id</p>
                <p>password123</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-400 hover:text-primary text-sm">
            &larr; Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
