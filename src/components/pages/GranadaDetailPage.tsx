import { ArrowLeft, Target, Lightbulb, Users, TrendingUp, Calendar, Award, Shield, Globe, Coins, Zap, CheckCircle, FileText, Lock, DollarSign, PieChart, Building2, AlertTriangle, Play } from 'lucide-react';
import whitepaperCover from '../../assets/gnrwhitepaper.jpg';
import gnrVideo from '../../assets/gnr.mp4';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface GranadaDetailPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回项目列表',
    title: '格林纳达国家度假区代币',
    subtitle: 'GNR Token Whitepaper',
    watchVideo: '项目介绍视频',
    whitepaper: {
      title: '白皮书概览',
      subtitle: '连接现实资产与去中心化金融的桥梁',
      version: '版本 V1.2',
      issuer: 'Hengsheng Digital Ventures Ltd.',
      assetHolder: '恒升集团（HengSheng Group）'
    },
    coreData: {
      title: '核心数据',
      items: [
        { label: '总投资额', value: '$20亿' },
        { label: '土地面积', value: '375英亩' },
        { label: '发行总量', value: '5亿枚' },
        { label: '发行价格', value: '1 USDT' },
        { label: '融资目标', value: '$5亿' },
        { label: '工程进度', value: '80%' },
        { label: '预计完工', value: '2027年' },
        { label: '收益期', value: '永久' }
      ]
    },
    highlights: {
      title: '项目亮点',
      items: [
        '全球首个加勒比国家级RWA度假区代币化项目',
        '持币即享收益权+消费权双重属性',
        '政府支持、法律合规、审计公开、链上透明',
        '收益来源多元、实物资产可核查',
        '永久经营收益权+二级市场流通+POS消费燃烧',
        '代币可用于度假区内再投资（地产建设/格林纳达国籍）'
      ]
    },
    assetSupport: {
      title: '资产支持',
      subtitle: '格林纳达国家旅游度假区永久50%运营净收益权',
      sources: [
        '酒店客房与服务',
        '高尔夫会员与赛事费用',
        '别墅与公寓租赁',
        '赌场与零售利润',
        '游艇及休闲娱乐收入'
      ]
    },
    tokenomics: {
      title: '代币配置',
      items: [
        { label: '投资人与市场流通', value: '70%', amount: '3.5亿枚' },
        { label: '市场与生态运营', value: '20%', amount: '1亿枚' },
        { label: '社区激励与推广', value: '10%', amount: '5千万枚' }
      ]
    },
    stakingRewards: {
      title: '质押收益（2025-开业）',
      periods: [
        { duration: '12个月', apy: '约10%，社区奖励' }
      ],
      note: '季度发放、链上可查、以USDT形式发放'
    },
    operatingRevenue: {
      title: '运营分红（营业起至永久）',
      description: '年度运营净利润50%按季度分配',
      features: ['以USDT形式发放', '所有分红链上公开', '智能合约自动执行', '社区奖励，以USDT形式发放']
    },
    utilities: {
      title: '代币实用性',
      items: [
        {
          title: 'POS消费支付',
          description: '酒店、高尔夫、餐饮、零售等场景，享20%折扣'
        },
        {
          title: '自动燃烧机制',
          description: '每笔消费自动燃烧部分GNR，形成通缩效应'
        },
        {
          title: '积分权益',
          description: '1 GNR = 1 度假积分，可兑换服务和升级'
        },
        {
          title: '地产投资',
          description: '可用于度假区地产建设及格林纳达投资入籍（CBI）'
        }
      ]
    },
    technicalSecurity: {
      title: '技术与安全',
      items: [
        { label: '主链', value: 'Ethereum (ERC-20)' },
        { label: '跨链', value: 'BSC (BEP-20)' },
        { label: '安全审计', value: 'CertiK / SlowMist' },
        { label: '财务审计', value: 'BAC' },
        { label: '多签治理', value: 'Timelock ≥48h' },
        { label: '漏洞赏金', value: 'Immunefi' }
      ]
    },
    legalCompliance: {
      title: '法律与合规',
      items: [
        '发行主体：BVI公司（英属维尔京群岛）',
        '法律属性：功能型代币（非证券）',
        '独立Security Agent托管收益权文件',
        '月报、季报、年报链上披露',
        '符合国际反洗钱（AML）和了解客户（KYC）标准'
      ]
    },
    roadmap: {
      title: '项目路线图',
      phases: [
        { time: '2024 Q4', event: '土地确权与批文' },
        { time: '2025 Q1', event: '代币智能合约开发' },
        { time: '2025 Q2', event: '安全审计与合规审查' },
        { time: '2025 Q4', event: '代币正式发行' },
        { time: '2026 Q3', event: '预计2026年8月15日上去中心化交易所Uniswap' },
        { time: '2027 Q4', event: '一期工程完工运营' },
        { time: '2028 Q3', event: '首次运营收益分红' },
        { time: '2028 Q4', event: 'NFT会员与DAO治理' }
      ]
    },
    exitMechanism: {
      title: '退出机制',
      methods: [
        '二级市场交易（DEX/CEX）',
        '园区消费兑换',
        '点对点转让（P2P）',
        '做市商流动性保障'
      ]
    },
    partners: {
      title: '团队与合作伙伴',
      list: [
        { name: 'Hengsheng Digital Ventures Ltd.', role: '发行与治理' },
        { name: '恒升集团', role: '开发与运营' },
        { name: 'CertiK / SlowMist', role: '安全审计' },
        { name: 'BAC', role: '财务审计' },
        { name: 'Grenada Tourism Board', role: '政府合作' }
      ]
    },
    trustUpgrade: {
      title: '信任升级',
      content: '传统企业通过上市接受监管和公众监督，透明度大幅提高。同理，发行园区代币要求我们公开披露项目规划和财务，让所有持币者都能监督项目进展。区块链技术的不可篡改性确保资金用途和收益分配公开透明。',
      highlight: '"公开上链"的过程将原本私下的信任关系升级为公开的机制信任'
    },
  },
  en: {
    back: 'Back to Projects',
    title: 'Grenada National Resort Token',
    subtitle: 'GNR Token Whitepaper',
    watchVideo: 'Project Video',
    whitepaper: {
      title: 'Whitepaper Overview',
      subtitle: 'Bridging Real World Assets and DeFi',
      version: 'Version V1.2',
      issuer: 'Hengsheng Digital Ventures Ltd.',
      assetHolder: 'HengSheng Group'
    },
    coreData: {
      title: 'Core Data',
      items: [
        { label: 'Total Investment', value: '$2B' },
        { label: 'Land Area', value: '375 Acres' },
        { label: 'Total Supply', value: '500M' },
        { label: 'Issue Price', value: '1 USDT' },
        { label: 'Funding Goal', value: '$500M' },
        { label: 'Progress', value: '80%' },
        { label: 'Completion', value: '2027' },
        { label: 'Revenue Period', value: 'Permanent' }
      ]
    },
    highlights: {
      title: 'Project Highlights',
      items: [
        'World\'s first Caribbean national-level RWA resort tokenization',
        'Dual benefits: Revenue rights + Consumption rights',
        'Government-backed, legally compliant, audited, on-chain transparent',
        'Diversified revenue sources, verifiable real assets',
        'Permanent revenue rights + Secondary market + POS burn mechanism',
        'Tokens usable for resort reinvestment (Real estate/Grenada citizenship)'
      ]
    },
    assetSupport: {
      title: 'Asset Support',
      subtitle: 'Permanent 50% of net operating revenue rights',
      sources: [
        'Hotel rooms & services',
        'Golf membership & events',
        'Villa & apartment rentals',
        'Casino & retail profits',
        'Yacht & leisure entertainment'
      ]
    },
    tokenomics: {
      title: 'Token Distribution',
      items: [
        { label: 'Investors & Market', value: '70%', amount: '350M' },
        { label: 'Market & Ecosystem', value: '20%', amount: '100M' },
        { label: 'Community & Marketing', value: '10%', amount: '50M' }
      ]
    },
    stakingRewards: {
      title: 'Staking Rewards (2025-Opening)',
      periods: [
        { duration: '12 Months', apy: '~10%, Community Rewards' }
      ],
      note: 'Quarterly distribution, on-chain verifiable, paid in USDT'
    },
    operatingRevenue: {
      title: 'Operating Dividends (From Opening)',
      description: '50% of annual net profit distributed quarterly',
      features: ['Paid in USDT', 'All dividends on-chain public', 'Smart contract automation', 'Community rewards, distributed in USDT']
    },
    utilities: {
      title: 'Token Utilities',
      items: [
        {
          title: 'POS Payment',
          description: 'Hotels, golf, dining, retail with 20% discount'
        },
        {
          title: 'Auto-Burn Mechanism',
          description: 'Each transaction burns portion of GNR, creating deflation'
        },
        {
          title: 'Points & Benefits',
          description: '1 GNR = 1 vacation point, redeemable for services'
        },
        {
          title: 'Real Estate Investment',
          description: 'Usable for resort development & Grenada CBI program'
        }
      ]
    },
    technicalSecurity: {
      title: 'Technology & Security',
      items: [
        { label: 'Main Chain', value: 'Ethereum (ERC-20)' },
        { label: 'Cross-chain', value: 'BSC (BEP-20)' },
        { label: 'Security Audit', value: 'CertiK / SlowMist' },
        { label: 'Financial Audit', value: 'BAC' },
        { label: 'Multi-sig', value: 'Timelock ≥48h' },
        { label: 'Bug Bounty', value: 'Immunefi' }
      ]
    },
    legalCompliance: {
      title: 'Legal & Compliance',
      items: [
        'Issuer: BVI Company (British Virgin Islands)',
        'Legal nature: Utility token (not securities)',
        'Independent Security Agent for revenue custody',
        'Monthly, quarterly, annual on-chain reports',
        'AML & KYC compliant'
      ]
    },
    roadmap: {
      title: 'Roadmap',
      phases: [
        { time: '2024 Q4', event: 'Land rights & approvals' },
        { time: '2025 Q1', event: 'Smart contract development' },
        { time: '2025 Q2', event: 'Security audit & compliance' },
        { time: '2025 Q4', event: 'Token launch' },
        { time: '2026 Q3', event: 'Expected listing on Uniswap (DEX) on August 15, 2026' },
        { time: '2027 Q4', event: 'Phase 1 operation' },
        { time: '2028 Q3', event: 'First revenue distribution' },
        { time: '2028 Q4', event: 'NFT membership & DAO' }
      ]
    },
    exitMechanism: {
      title: 'Exit Mechanisms',
      methods: [
        'Secondary market (DEX/CEX)',
        'Resort consumption redemption',
        'Peer-to-peer transfer (P2P)',
        'Market maker liquidity'
      ]
    },
    partners: {
      title: 'Team & Partners',
      list: [
        { name: 'Hengsheng Digital Ventures Ltd.', role: 'Issuance & Governance' },
        { name: 'HengSheng Group', role: 'Development & Operations' },
        { name: 'CertiK / SlowMist', role: 'Security Audit' },
        { name: 'BAC', role: 'Financial Audit' },
        { name: 'Grenada Tourism Board', role: 'Government Partnership' }
      ]
    },
    trustUpgrade: {
      title: 'Trust Upgrade',
      content: 'Traditional companies accept regulation and public supervision through IPO. Similarly, issuing tokens requires public disclosure of planning and finances, allowing all holders to monitor progress. Blockchain immutability ensures transparent fund usage and revenue distribution.',
      highlight: '"On-chain transparency" upgrades private trust to public mechanism trust'
    },
  }
};

export function GranadaDetailPage({ language, onBack }: GranadaDetailPageProps) {
  const [showVideo, setShowVideo] = useState(false);
  const t = translations[language];

  // 确保页面加载时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">{t.back}</span>
        </button>

        {/* Project Video Section */}
        <div className="mb-6">
          {showVideo ? (
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
              <video 
                className="w-full h-full"
                controls
                autoPlay
                src={gnrVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <button
              onClick={() => setShowVideo(true)}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group active:scale-[0.98] transition-all"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761300560920-19625eced75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBNYW5oYXR0YW4lMjBjaXR5fGVufDF8fHx8MTc2OTU0NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Project Presentation"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Play size={28} className="text-white ml-1" fill="white" />
                </div>
                <span className="text-white font-bold">{t.watchVideo}</span>
              </div>
            </button>
          )}
        </div>

        {/* Whitepaper Cover */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img 
            src={whitepaperCover}
            alt="GNR Whitepaper"
            className="w-full h-auto"
          />
        </div>

        {/* Whitepaper Header */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="text-blue-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.whitepaper.title}</h2>
          </div>
          <p className="text-gray-300 text-sm mb-2">{t.whitepaper.subtitle}</p>
          <div className="space-y-1 text-xs text-gray-400">
            <p>{t.whitepaper.version}</p>
            <p>{language === 'zh' ? '发行方' : 'Issuer'}: {t.whitepaper.issuer}</p>
            <p>{language === 'zh' ? '资产持有方' : 'Asset Holder'}: {t.whitepaper.assetHolder}</p>
          </div>
        </div>

        {/* Core Data */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">{t.coreData.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {t.coreData.items.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">{t.highlights.title}</h2>
          <ul className="space-y-2.5">
            {t.highlights.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Asset Support */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="text-purple-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.assetSupport.title}</h2>
          </div>
          <p className="text-blue-400 text-sm mb-4">{t.assetSupport.subtitle}</p>
          <div className="grid grid-cols-2 gap-2">
            {t.assetSupport.sources.map((source, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-3 text-center"
              >
                <p className="text-gray-300 text-xs">{source}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="text-orange-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.tokenomics.title}</h2>
          </div>
          <div className="space-y-3">
            {t.tokenomics.items.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">{item.label}</span>
                  <span className="text-white font-bold">{item.value}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    style={{ width: item.value }}
                  ></div>
                </div>
                <p className="text-gray-400 text-xs mt-1">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Staking Rewards */}
        <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-600/20 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="text-green-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.stakingRewards.title}</h2>
          </div>
          <div className="space-y-3 mb-4">
            {t.stakingRewards.periods.map((period, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{period.duration}</span>
                  <span className="text-green-400 font-bold text-lg">{period.apy}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">{t.stakingRewards.note}</p>
        </div>

        {/* Operating Revenue */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-3">{t.operatingRevenue.title}</h2>
          <p className="text-blue-400 text-sm mb-4">{t.operatingRevenue.description}</p>
          <div className="space-y-2">
            {t.operatingRevenue.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Utilities */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">{t.utilities.title}</h2>
          <div className="space-y-3">
            {t.utilities.items.map((utility, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4"
              >
                <h3 className="text-base font-bold text-white mb-2">{utility.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Security */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.technicalSecurity.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {t.technicalSecurity.items.map((item, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1">{item.label}</p>
                <p className="text-gray-200 text-xs font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-yellow-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.legalCompliance.title}</h2>
          </div>
          <ul className="space-y-2">
            {t.legalCompliance.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Roadmap */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-green-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.roadmap.title}</h2>
          </div>
          <div className="space-y-3">
            {t.roadmap.phases.map((phase, index) => (
              <div 
                key={index}
                className="relative pl-6 border-l-2 border-blue-600/30 pb-3 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="text-xs text-blue-400 mb-1">{phase.time}</div>
                <p className="text-sm text-gray-300">{phase.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exit Mechanism */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">{t.exitMechanism.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {t.exitMechanism.methods.map((method, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-3 text-center"
              >
                <p className="text-gray-300 text-xs">{method}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-purple-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.partners.title}</h2>
          </div>
          <div className="space-y-3">
            {t.partners.list.map((partner, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <p className="text-white font-medium text-sm mb-1">{partner.name}</p>
                <p className="text-gray-400 text-xs">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Upgrade */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-bold text-white mb-3">{t.trustUpgrade.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{t.trustUpgrade.content}</p>
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-blue-400 text-sm font-medium leading-relaxed">{t.trustUpgrade.highlight}</p>
          </div>
        </div>


        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-6 text-center">
          <Award className="text-blue-400 mx-auto mb-3" size={32} />
          <h3 className="text-xl font-bold text-white mb-3">
            {language === 'zh' ? '加入GNR生态' : 'Join GNR Ecosystem'}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {language === 'zh' 
              ? '成为格林纳达国家度假区的共同所有者，分享永久的增长红利'
              : 'Become a co-owner of Grenada National Resort and share permanent growth dividends'}
          </p>
          <button
            onClick={() => window.open('http://www.coinnvda.com', '_blank')}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium active:scale-[0.98]"
          >
            {language === 'zh' ? '了解更多' : 'Learn More'}
          </button>
        </div>
      </div>
    </div>
  );
}
