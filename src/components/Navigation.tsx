import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

type Language = 'zh' | 'en';
type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact';

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const translations = {
  zh: {
    home: '首页',
    projects: '项目',
    partners: '合作伙伴',
    download: '下载应用',
    contact: '联系我们'
  },
  en: {
    home: 'Home',
    projects: 'Projects',
    partners: 'Partners',
    download: 'Download',
    contact: 'Contact'
  }
};

export function Navigation({ language, setLanguage, currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e1a]/95 backdrop-blur-lg border-b border-white/5">
      <div className="px-4">
        <div className="flex justify-between items-center h-14">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-black text-white tracking-tighter"
          >
            TGGO
          </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Globe size={16} />
              <span>{language === 'zh' ? '中文' : 'EN'}</span>
            </button>
            
            <button 
              className="text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-[#0a0e1a] border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            <button 
              onClick={() => { setCurrentPage('home'); setIsOpen(false); }}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'home' 
                  ? 'bg-blue-600/20 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.home}
            </button>
            <button 
              onClick={() => { setCurrentPage('projects'); setIsOpen(false); }}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'projects' 
                  ? 'bg-blue-600/20 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.projects}
            </button>
            <button 
              onClick={() => { setCurrentPage('partners'); setIsOpen(false); }}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'partners' 
                  ? 'bg-blue-600/20 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.partners}
            </button>
            <button 
              onClick={() => { setCurrentPage('download'); setIsOpen(false); }}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'download' 
                  ? 'bg-blue-600/20 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.download}
            </button>
            <button 
              onClick={() => { setCurrentPage('contact'); setIsOpen(false); }}
              className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                currentPage === 'contact' 
                  ? 'bg-blue-600/20 text-white' 
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {t.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}