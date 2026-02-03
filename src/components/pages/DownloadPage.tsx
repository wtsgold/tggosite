import { Smartphone, Apple, Download, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface DownloadPageProps {
  language: Language;
}

const translations = {
  zh: {
    title: '下载 TGGO 应用',
    subtitle: '随时随地管理您的数字资产',
    ios: 'iOS 下载',
    android: 'Android 下载',
    comingSoon: '敬请期待',
    scanQR: '扫描二维码下载',
    version: '版本 2.5.0',
    size: '大小',
    updated: '更新',
    appFeatures: {
      title: '应用特性',
      list: [
        '实时价格追踪和提醒',
        '一键买卖，操作简单',
        '多种数字资产支持',
        '投资组合分析工具',
        'Touch/Face ID 保护',
        '离线查看资产信息'
      ]
    },
    requirements: {
      title: '系统要求',
      ios: 'iOS 13.0+',
      android: 'Android 8.0+'
    },
    disclaimer: '* 仅供合格投资者使用'
  },
  en: {
    title: 'Download TGGO App',
    subtitle: 'Manage your digital assets anywhere',
    ios: 'Download for iOS',
    android: 'Download for Android',
    comingSoon: 'Coming Soon',
    scanQR: 'Scan QR Code',
    version: 'Version 2.5.0',
    size: 'Size',
    updated: 'Updated',
    appFeatures: {
      title: 'App Features',
      list: [
        'Real-time price tracking & alerts',
        'One-tap buy and sell',
        'Multiple digital assets',
        'Portfolio analysis tools',
        'Touch/Face ID protection',
        'Offline asset viewing'
      ]
    },
    requirements: {
      title: 'Requirements',
      ios: 'iOS 13.0+',
      android: 'Android 8.0+'
    },
    disclaimer: '* For qualified investors only'
  }
};

export function DownloadPage({ language }: DownloadPageProps) {
  const t = translations[language];

  const handleDownload = (platform: 'ios' | 'android') => {
    // Placeholder links as requested
    const links = {
      ios: 'https://apps.apple.com/app/tggo-placeholder',
      android: 'https://play.google.com/store/apps/details?id=us.tggo.turing'
    };
    window.open(links[platform], '_blank');
  };

  return (
    <div className="pt-16 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763058964011-d34f7a7315e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5oYXR0YW4lMjBza3lzY3JhcGVyJTIwdmlldyUyMHdpbmRvd3xlbnwxfHx8fDE3Njk1NDQ0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Skyscraper View"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent flex flex-col justify-end p-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-600/20 border border-green-600/30 rounded-full text-green-400 text-xs mb-3 w-fit">
              <Smartphone size={14} />
              <span>{t.title}</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
            <p className="text-sm text-gray-300">{t.subtitle}</p>
          </div>
        </div>

        {/* Download Cards */}
        <div className="space-y-4 mb-6">
          {/* iOS */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                <Apple size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">iOS</h3>
                <p className="text-gray-400 text-xs">{t.version}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-0.5">{t.size}</div>
                <div className="text-white font-bold text-sm">85.2 MB</div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-0.5">{t.updated}</div>
                <div className="text-white font-bold text-sm">Jan 20</div>
              </div>
            </div>

            <div className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl flex items-center justify-center gap-2 font-medium mb-4 cursor-not-allowed opacity-75">
              <Apple size={20} />
              {t.comingSoon}
            </div>

            <div className="border-t border-white/10 pt-4 text-center">
              <div className="bg-white p-3 rounded-lg inline-block mb-2">
                <div className="w-24 h-24 bg-black flex items-center justify-center text-[10px] text-white">QR CODE</div>
              </div>
              <p className="text-gray-400 text-xs">{t.scanQR}</p>
            </div>
          </div>

          {/* Android */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                <Download size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Android</h3>
                <p className="text-gray-400 text-xs">{t.version}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-0.5">{t.size}</div>
                <div className="text-white font-bold text-sm">92.8 MB</div>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-0.5">{t.updated}</div>
                <div className="text-white font-bold text-sm">Jan 20</div>
              </div>
            </div>

            <div className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl flex items-center justify-center gap-2 font-medium mb-4 cursor-not-allowed opacity-75">
              <Download size={20} />
              {t.comingSoon}
            </div>

            <div className="border-t border-white/10 pt-4 text-center">
              <div className="bg-white p-3 rounded-lg inline-block mb-2">
                <div className="w-24 h-24 bg-black flex items-center justify-center text-[10px] text-white">QR CODE</div>
              </div>
              <p className="text-gray-400 text-xs">{t.scanQR}</p>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-4">
          <h3 className="text-lg font-bold text-white mb-4">{t.appFeatures.title}</h3>
          <ul className="space-y-2.5">
            {t.appFeatures.list.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-4">
          <h3 className="text-lg font-bold text-white mb-4">{t.requirements.title}</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Apple size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">iOS</div>
                <div className="text-gray-400 text-xs">{t.requirements.ios}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Android</div>
                <div className="text-gray-400 text-xs">{t.requirements.android}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs">
          {t.disclaimer}
        </div>
      </div>
    </div>
  );
}
