import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { PartnersPage } from './components/pages/PartnersPage';
import { DownloadPage } from './components/pages/DownloadPage';
import { ContactPage } from './components/pages/ContactPage';
import { GranadaDetailPage } from './components/pages/GranadaDetailPage';
import { DocsPage } from './components/pages/DocsPage';
import { APIPage } from './components/pages/APIPage';
import { HelpPage } from './components/pages/HelpPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { TermsPage } from './components/pages/TermsPage';
import { AppRedirectPage } from './components/pages/AppRedirectPage';
import { Footer } from './components/Footer';

type Language = 'zh' | 'en';
type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact' | 'granada' | 'docs' | 'api' | 'help' | 'privacy' | 'terms' | 'app';

export default function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // 检测URL路径并设置对应页面
  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname.startsWith('/app')) {
      setCurrentPage('app');
    }
  }, []);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

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
      {currentPage === 'granada' && <GranadaDetailPage language={language} onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />}
      {currentPage === 'docs' && <DocsPage language={language} onBack={() => handlePageChange('home')} />}
      {currentPage === 'api' && <APIPage language={language} onBack={() => handlePageChange('home')} />}
      {currentPage === 'help' && <HelpPage language={language} onBack={() => handlePageChange('home')} />}
      {currentPage === 'privacy' && <PrivacyPage language={language} onBack={() => handlePageChange('home')} />}
      {currentPage === 'terms' && <TermsPage language={language} onBack={() => handlePageChange('home')} />}
      {currentPage === 'app' && <AppRedirectPage />}

      <Footer
        language={language}
        onGNRClick={() => handlePageChange('granada')}
        onDocsClick={() => handlePageChange('docs')}
        onAPIClick={() => handlePageChange('api')}
        onHelpClick={() => handlePageChange('help')}
        onContactClick={() => handlePageChange('contact')}
        onPrivacyClick={() => handlePageChange('privacy')}
        onTermsClick={() => handlePageChange('terms')}
      />
    </div>
  );
}
