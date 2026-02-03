import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react';

type Language = 'zh' | 'en';

interface FooterProps {
  language: Language;
  onGNRClick?: () => void;
  onDocsClick?: () => void;
  onAPIClick?: () => void;
  onHelpClick?: () => void;
  onContactClick?: () => void;
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

const translations = {
  zh: {
    description: '将真实世界资产代币化，连接传统金融与DeFi',
    products: '项目',
    productList: ['GNR'],
    resources: '资源',
    resourcesList: ['文档', 'API', '帮助'],
    company: '公司',
    companyList: ['联系', '隐私', '条款'],
    copyright: '© 2026 TGGO Finance'
  },
  en: {
    description: 'Tokenizing real world assets, bridging TradFi and DeFi',
    products: 'Projects',
    productList: ['GNR'],
    resources: 'Resources',
    resourcesList: ['Docs', 'API', 'Help'],
    company: 'Company',
    companyList: ['Contact', 'Privacy', 'Terms'],
    copyright: '© 2026 TGGO Finance'
  }
};

export function Footer({
  language,
  onGNRClick,
  onDocsClick,
  onAPIClick,
  onHelpClick,
  onContactClick,
  onPrivacyClick,
  onTermsClick
}: FooterProps) {
  const t = translations[language];

  const handleClick = (type: string, defaultAction?: () => void) => {
    switch(type) {
      case 'GNR':
        onGNRClick?.();
        break;
      case '文档':
      case 'Docs':
        onDocsClick?.();
        break;
      case 'API':
        onAPIClick?.();
        break;
      case '帮助':
      case 'Help':
        onHelpClick?.();
        break;
      case '联系':
      case 'Contact':
        onContactClick?.();
        break;
      case '隐私':
      case 'Privacy':
        onPrivacyClick?.();
        break;
      case '条款':
      case 'Terms':
        onTermsClick?.();
        break;
      default:
        defaultAction?.();
    }
  };

  return (
    <footer className="border-t border-white/5 py-8 px-4 mt-12">
      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">{t.products}</h4>
            <ul className="space-y-2">
              {t.productList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(item)}
                    className="text-gray-400 hover:text-white text-xs transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">{t.resources}</h4>
            <ul className="space-y-2">
              {t.resourcesList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(item)}
                    className="text-gray-400 hover:text-white text-xs transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">{t.company}</h4>
            <ul className="space-y-2">
              {t.companyList.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleClick(item)}
                    className="text-gray-400 hover:text-white text-xs transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="text-2xl font-black text-white mb-3 tracking-tighter">TGGO</div>
        <p className="text-gray-400 text-xs mb-4 leading-relaxed">
          {t.description}
        </p>
        
        <div className="flex items-center gap-3 mb-6">
          <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <Twitter size={16} className="text-gray-400" />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <Github size={16} className="text-gray-400" />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <Linkedin size={16} className="text-gray-400" />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <MessageCircle size={16} className="text-gray-400" />
          </a>
        </div>
        
        <div className="border-t border-white/5 pt-4">
          <p className="text-gray-500 text-xs text-center">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
