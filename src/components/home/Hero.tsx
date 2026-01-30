import { ArrowRight, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import heroImage from 'figma:asset/af296732e7c2520f80e8c964ae9fcd89db0cbb6f.png';

type Language = 'zh' | 'en';

type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact';

interface HeroProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

const translations = {
  zh: {
    badge: '机构级数字资产平台',
    title1: '将真实世界资产',
    title2: '代币化',
    description: '通过区块链技术，为机构投资者提供安全、透明的资产代币化解决方案',
    exploreProjects: '探索项目',
    tvl: '总锁定价值',
    activeUsers: '活跃用户',
    uptime: '系统稳定性'
  },
  en: {
    badge: 'Institutional-Grade Platform',
    title1: 'Tokenizing',
    title2: 'Real World Assets',
    description: 'Providing institutional investors with secure and transparent asset tokenization solutions',
    exploreProjects: 'Explore Projects',
    tvl: 'Total Value Locked',
    activeUsers: 'Active Users',
    uptime: 'System Uptime'
  }
};

export function Hero({ language, setCurrentPage }: HeroProps) {
  const t = translations[language];

  return (
    <div className="pt-16 pb-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Hero Image */}
        <div className="relative mb-6 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent z-10"></div>
          <ImageWithFallback 
            src={heroImage}
            alt="TGGO Manhattan Financial View"
            className="w-full h-80 object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
        </div>
        
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-400 text-xs mb-4">
              <TrendingUp size={14} />
              <span>TGGO - {t.badge}</span>
            </div>
          
          <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
            {t.title1}
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {t.title2}
            </span>
          </h1>
          
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            {t.description}
          </p>
          
          <button 
            onClick={() => setCurrentPage('projects')}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors flex items-center justify-center gap-2 font-medium"
          >
            {t.exploreProjects}
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">$2.5B+</div>
              <div className="text-xs text-gray-400">{t.tvl}</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-2xl font-bold text-white mb-1">500K+</div>
              <div className="text-xs text-gray-400">{t.activeUsers}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-xs text-gray-400">{t.uptime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}