import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, RefreshCw, Check, Sparkles, Image as ImageIcon, Eye } from 'lucide-react';

interface PhotoPlaceholderProps {
  id?: string;
  variant?: 'hero' | 'about' | 'badge';
  className?: string;
  label?: string;
  defaultPhoto?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  id = 'executive-photo',
  variant = 'hero',
  className = '',
  label = 'Executive Portrait Placeholder',
  defaultPhoto = '/Images/Founder and CEO SOFTWARE ENGINEER.jpeg'
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      const saved = localStorage.getItem(`portfolio_photo_${id}`);
      if (saved) return saved;
    } catch {
      // ignore
    }
    return defaultPhoto || null;
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // High-res executive sample portrait (Unsplash curated executive headshot)
  const SAMPLE_EXECUTIVE_PHOTO = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`portfolio_photo_${id}`);
      if (saved) {
        setPhotoUrl(saved);
      } else if (defaultPhoto) {
        setPhotoUrl(defaultPhoto);
      }
    } catch {
      // ignore in restricted iframe
    }
  }, [id, defaultPhoto]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          try {
            localStorage.setItem(`portfolio_photo_${id}`, result);
          } catch {
            // ignore
          }
          setShowUploadModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setPhotoUrl(inputUrl.trim());
      try {
        localStorage.setItem(`portfolio_photo_${id}`, inputUrl.trim());
      } catch {
        // ignore
      }
      setShowUploadModal(false);
      setInputUrl('');
    }
  };

  const handleApplySample = () => {
    setPhotoUrl(SAMPLE_EXECUTIVE_PHOTO);
    try {
      localStorage.setItem(`portfolio_photo_${id}`, SAMPLE_EXECUTIVE_PHOTO);
    } catch {
      // ignore
    }
    setShowUploadModal(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(defaultPhoto || null);
    try {
      localStorage.removeItem(`portfolio_photo_${id}`);
    } catch {
      // ignore
    }
  };

  if (variant === 'badge') {
    return (
      <div className={`relative group ${className}`}>
        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-zinc-900/80 p-0.5 shadow-lg backdrop-blur-md">
          {photoUrl ? (
            <img src={photoUrl} alt="Muhammad Mujahid" className="w-full h-full object-cover rounded-full" />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-950 via-zinc-900 to-indigo-950 flex items-center justify-center text-xs font-bold text-cyan-200 tracking-wider font-mono">
              MM
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Liquid Glow Halo */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/25 via-indigo-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center">
        {photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt="Muhammad Mujahid - Executive Portrait"
              className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            {/* Ambient Dark Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-75 pointer-events-none" />
            
            {/* Caption on Photo */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs z-10 pointer-events-none">
              <div>
                <div className="font-bold text-white font-display text-sm">Muhammad Mujahid</div>
                <div className="text-[11px] font-mono text-cyan-300">Founder • Axorks</div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-[10px] font-mono text-emerald-400 backdrop-blur-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active
              </span>
            </div>
          </>
        ) : (
          /* Sleek Default Executive Graphic with Upload Prompt */
          <div className="relative w-full h-full flex flex-col items-center justify-between p-7 bg-gradient-to-b from-white/[0.04] via-zinc-950/80 to-[#050508]">
            {/* Top Bar with Status */}
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ARCHITECT HQ</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">AXORKS STUDIO</span>
            </div>

            {/* Center Monogram & Silhouette */}
            <div className="flex flex-col items-center text-center my-auto">
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-purple-500/15 border border-white/15 flex items-center justify-center mb-4 backdrop-blur-xl group-hover:border-cyan-400/40 transition-colors">
                <div className="text-3xl font-extrabold font-display tracking-tight text-white">MM</div>
                <div className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-white/15 text-[10px] font-mono text-zinc-300 flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>FOUNDER</span>
                </div>
              </div>

              <h4 className="text-lg font-extrabold text-white tracking-tight font-display">Muhammad Mujahid</h4>
              <p className="text-xs text-zinc-400 mt-1 max-w-[210px] leading-relaxed">
                Principal Systems Architect & Founder at Axorks
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="w-full flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => setShowUploadModal(true)}
                className="w-full py-3 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-xs text-cyan-300 hover:text-white flex items-center justify-center gap-2 transition duration-300 font-semibold cursor-pointer shadow-lg"
              >
                <Camera className="w-4 h-4 text-cyan-400" />
                <span>Upload Professional Photo</span>
              </button>
              <div className="flex items-center justify-between w-full text-[10px] text-zinc-400 font-mono px-1">
                <span>Aspect: 4:5 Portrait</span>
                <button
                  type="button"
                  onClick={handleApplySample}
                  className="text-cyan-400 hover:underline cursor-pointer"
                >
                  Test Sample Image
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Action Controls on Hover */}
        {photoUrl && (
          <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
            <button
              type="button"
              onClick={() => setShowUploadModal(true)}
              aria-label="Change Photo"
              className="p-2 rounded-xl bg-zinc-950/85 hover:bg-zinc-900 text-zinc-200 hover:text-white border border-white/15 shadow-xl backdrop-blur-md transition-all text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[11px] font-mono">Change</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              aria-label="Reset Photo"
              title="Reset to default placeholder"
              className="p-2 rounded-xl bg-zinc-950/85 hover:bg-red-950/60 text-zinc-400 hover:text-red-400 border border-white/15 shadow-xl backdrop-blur-md transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Specular Liquid Border Sheen */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/[0.08]" />
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-md p-6 rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white font-display">Executive Photo Manager</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="text-zinc-400 hover:text-white text-sm px-2 py-1 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
              Upload your custom executive headshot or paste any image URL. Your image will be saved to your browser session so you can preview the complete portfolio immediately.
            </p>

            {/* Quick Sample Button */}
            <div className="mt-4 p-3 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-zinc-200">Want to test with a sample headshot?</span>
              </div>
              <button
                type="button"
                onClick={handleApplySample}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition cursor-pointer"
              >
                Load Sample
              </button>
            </div>

            {/* File Upload Option */}
            <div className="mt-4">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Option 1: Upload from Your Device
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 border-2 border-dashed border-white/20 hover:border-cyan-400/50 rounded-2xl flex flex-col items-center justify-center gap-2 text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] transition cursor-pointer"
              >
                <Upload className="w-6 h-6 text-cyan-400" />
                <span className="text-xs font-medium">Browse PNG, JPG, or WEBP file</span>
              </button>
            </div>

            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-[11px] font-mono text-zinc-500 uppercase">OR</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>

            {/* URL Option */}
            <form onSubmit={handleUrlSubmit} className="space-y-3">
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Option 2: Direct Image URL
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://example.com/your-headshot.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 px-3 py-2.5 bg-zinc-900 border border-white/15 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  disabled={!inputUrl.trim()}
                  className="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-semibold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </form>

            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
