import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { DownloadPage } from './components/pages/DownloadPage';
import { ContactPage } from './components/pages/ContactPage';
import { GranadaDetailPage } from './components/pages/GranadaDetailPage';
import { Footer } from './components/Footer';

type Language = 'zh' | 'en';
type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact' | 'granada' | 'docs' | 'api' | 'help' | 'privacy' | 'terms';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {currentPage === 'home' && <HomePage language={language} setCurrentPage={setCurrentPage} />}
      {currentPage === 'projects' && <AboutPage language={language} setCurrentPage={setCurrentPage} />}
      {currentPage === 'partners' && <PartnersPage language={language} setCurrentPage={setCurrentPage} />}
      {currentPage === 'download' && <DownloadPage language={language} />}
      {currentPage === 'contact' && <ContactPage language={language} />}
      {currentPage === 'granada' && <GranadaDetailPage language={language} onBack={() => setCurrentPage('home')} />}
      {currentPage === 'docs' && <div className="min-h-screen pt-16 pb-20 px-4"><div className="max-w-lg mx-auto"><h1 className="text-2xl font-bold text-white mb-6">{language === 'zh' ? '开发文档' : 'Documentation'}</h1><p className="text-gray-400">详细的开发文档和API集成指南即将上线...</p></div></div>}
      {currentPage === 'api' && <div className="min-h-screen pt-16 pb-20 px-4"><div className="max-w-lg mx-auto"><h1 className="text-2xl font-bold text-white mb-6">API {language === 'zh' ? '文档' : 'Documentation'}</h1><p className="text-gray-400">完整的API文档和SDK即将发布...</p></div></div>}
      {currentPage === 'help' && <div className="min-h-screen pt-16 pb-20 px-4"><div className="max-w-lg mx-auto"><h1 className="text-2xl font-bold text-white mb-6">{language === 'zh' ? '帮助中心' : 'Help Center'}</h1><p className="text-gray-400 mb-4">{language === 'zh' ? '常见问题解答和用户指南' : 'FAQ and user guides'}</p><div className="space-y-4"><div className="bg-white/5 rounded-lg p-4"><h3 className="text-white font-medium mb-2">{language === 'zh' ? '如何参与GNR项目？' : 'How to participate in GNR project?'}</h3><p className="text-gray-400 text-sm">{language === 'zh' ? '详细参与指南请查看项目白皮书...' : 'Please check the project whitepaper for detailed participation guide...'}</p></div></div></div></div>}
      {currentPage === 'privacy' && <div className="min-h-screen pt-16 pb-20 px-4"><div className="max-w-lg mx-auto"><h1 className="text-2xl font-bold text-white mb-6">{language === 'zh' ? '隐私政策' : 'Privacy Policy'}</h1><p className="text-gray-400 mb-4">{language === 'zh' ? 'TGGO 重视您的隐私保护' : 'TGGO values your privacy protection'}</p><div className="space-y-4 text-gray-400 text-sm"><p>我们收集和使用您的个人信息仅为提供更好的服务。我们承诺不会向第三方出售或泄露您的个人信息。</p></div></div></div>}
      {currentPage === 'terms' && <div className="min-h-screen pt-16 pb-20 px-4"><div className="max-w-lg mx-auto"><h1 className="text-2xl font-bold text-white mb-6">{language === 'zh' ? '服务条款' : 'Terms of Service'}</h1><p className="text-gray-400 mb-4">{language === 'zh' ? '使用TGGO服务前，请仔细阅读以下条款' : 'Please read the following terms carefully before using TGGO services'}</p><div className="space-y-4 text-gray-400 text-sm"><p>通过使用我们的服务，您同意遵守这些服务条款。这些条款适用于我们平台上的所有用户和访问者。</p></div></div></div>}
      
      <Footer
        language={language}
        onGNRClick={() => setCurrentPage('granada')}
        onDocsClick={() => setCurrentPage('docs')}
        onAPIClick={() => setCurrentPage('api')}
        onHelpClick={() => setCurrentPage('help')}
        onContactClick={() => setCurrentPage('contact')}
        onPrivacyClick={() => setCurrentPage('privacy')}
        onTermsClick={() => setCurrentPage('terms')}
      />
    </div>
  );
}
