import { Award, Shield, Zap, Globe, Briefcase, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface PartnersPageProps {
  language: Language;
  setCurrentPage: (page: any) => void;
}

const translations = {
  zh: {
    title: '战略合作伙伴',
    subtitle: '携手全球顶尖机构，共建 RWA 信任基石',
    partnershipInfo: '全球生态网络',
    partnershipDesc: 'TGGO 与全球顶尖的金融机构、托管银行及合规服务商建立了深度的战略合作关系。我们通过严谨的风控体系和合规架构，为投资者筛选最优质的真实世界资产，确保每一笔链上资产都有足额的底层支撑与法律保障。',
    partners: [
      {
        icon: <Building2 className="text-blue-400" size={20} />,
        name: 'BlackRock (贝莱德)',
        title: '全球资产管理领军者',
        description: '作为全球规模最大的资产管理公司，贝莱德通过其 BUIDL 基金等项目，极大地推动了传统金融机构进入代币化领域的步伐。TGGO 参考其合规标准与清算逻辑，为机构级 RWA 资产提供高效的流动性方案。',
        details: '双方在资产代币化标准制定及机构资金准入领域保持深度研究，共同探索美债、优质不动产在公链上的高效清算。'
      },
      {
        icon: <Shield className="text-blue-400" size={20} />,
        name: 'Coinbase Custody',
        title: '合规数字资产托管服务',
        description: 'Coinbase Custody 作为受监管的信托机构，为 TGGO 的链上资产提供最高安全等级的托管服务。所有底层资产的数字权益均受到多重签名及物理隔离冷存储的保护。',
        details: '通过深度整合 Coinbase 的托管接口，我们实现了资产所有权与管理权的物理隔离，确保用户资金的绝对安全与合规透明。'
      },
      {
        icon: <Globe className="text-blue-400" size={20} />,
        name: 'Circle',
        title: 'USDC 官方发行机构',
        description: 'Circle 是全球合规稳定币 USDC 的发行方。TGGO 使用 USDC 作为核心清算货币，确保存储、认购与收益分发环节的资产流动性与汇率稳定性。',
        details: 'Circle 的合规框架为我们的全球化业务提供了可靠的法币进出通道支持，确保所有交易均符合反洗钱（AML）与合规（KYC）要求。'
      },
      {
        icon: <Zap className="text-blue-400" size={20} />,
        name: 'Chainlink',
        title: '行业领先的预言机网络',
        description: 'Chainlink 为 TGGO 提供实时资产价格喂价（Price Feeds）及���备金证明（Proof of Reserve）。通过去中心化的数据源，确保存储在传统银行的资产价值与链上代币实时对齐。',
        details: '借助 Chainlink 的 CCIP 跨链交互协议，TGGO 的代币化资产未来将能无缝穿梭于各大主流公链，极大提升资产的资金效率。'
      }
    ],
    footerTitle: '成为合作伙伴',
    footerDesc: '我们正在全球范围内寻找优质的资产提供方（Asset Originators）与金融服务商，共同定义 RWA 的未来。',
    cta: '联系我们'
  },
  en: {
    title: 'Strategic Partners',
    subtitle: 'Building the Foundation of RWA Trust with Global Leaders',
    partnershipInfo: 'Global Ecosystem Network',
    partnershipDesc: 'TGGO has established deep strategic partnerships with world-class financial institutions, custodian banks, and compliance service providers. Through a rigorous risk management system and compliance architecture, we vet the highest quality real-world assets for investors, ensuring every on-chain asset has sufficient underlying support and legal protection.',
    partners: [
      {
        icon: <Building2 className="text-blue-400" size={20} />,
        name: 'BlackRock',
        title: 'Global Asset Management Leader',
        description: "As the world's largest asset manager, BlackRock has significantly driven traditional financial institutions into the tokenization field through projects like its BUIDL fund. TGGO references its compliance standards and clearing logic to provide efficient liquidity solutions.",
        details: 'Both parties maintain deep research in standard-setting for asset tokenization and institutional capital access, exploring efficient clearing for Treasuries and premium real estate.'
      },
      {
        icon: <Shield className="text-blue-400" size={20} />,
        name: 'Coinbase Custody',
        title: 'Regulated Digital Asset Custody',
        description: 'Coinbase Custody, as a regulated trust, provides the highest security level of custody services for TGGO\'s on-chain assets. All digital rights are protected by multi-sig and physically isolated cold storage.',
        details: 'By deeply integrating Coinbase\'s custody API, we achieve physical isolation of asset ownership and management, ensuring absolute fund security and transparency.'
      },
      {
        icon: <Globe className="text-blue-400" size={20} />,
        name: 'Circle',
        title: 'Official Issuer of USDC',
        description: 'Circle is the issuer of USDC, the world\'s most compliant stablecoin. TGGO uses USDC as the core clearing currency, ensuring liquidity and rate stability for storage, subscription, and distribution.',
        details: 'Circle\'s compliance framework provides reliable fiat on/off-ramps for our global business, ensuring all transactions meet AML and KYC requirements.'
      },
      {
        icon: <Zap className="text-blue-400" size={20} />,
        name: 'Chainlink',
        title: 'Industry-Leading Oracle Network',
        description: 'Chainlink provides TGGO with real-time Price Feeds and Proof of Reserve (PoR). Decentralized data sources ensure asset values in traditional banks align with on-chain tokens.',
        details: 'Using Chainlink\'s CCIP protocol, TGGO\'s tokenized assets will seamlessly move across major public chains, significantly enhancing capital efficiency.'
      }
    ],
    footerTitle: 'Become a Partner',
    footerDesc: 'We are looking for quality Asset Originators and financial service providers worldwide to define the future of RWA together.',
    cta: 'Contact Us'
  }
};

export function PartnersPage({ language, setCurrentPage }: PartnersPageProps) {
  const t = translations[language];

  return (
    <div className="pt-16 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1691513740803-b9a036091f5f?q=80&w=1080"
            alt="Manhattan Night"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent flex flex-col justify-end p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
            <p className="text-sm text-gray-300 leading-tight">{t.subtitle}</p>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="mb-10 bg-gradient-to-br from-blue-600/10 to-transparent p-6 rounded-2xl border border-blue-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={18} className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">{t.partnershipInfo}</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed italic">
            {t.partnershipDesc}
          </p>
        </div>

        {/* Partners List */}
        <div className="space-y-6">
          {t.partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  {partner.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{partner.name}</h2>
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{partner.title}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {partner.description}
                </p>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <div className="text-[10px] font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                    <Award size={10} /> {language === 'zh' ? '合作深意' : 'Collab Insight'}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {partner.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-10 bg-gradient-to-br from-blue-600/20 to-zinc-900/50 border border-blue-500/30 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-xl font-bold text-white mb-3">
            {t.footerTitle}
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {t.footerDesc}
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="w-full px-6 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-[0.98] shadow-md"
          >
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
