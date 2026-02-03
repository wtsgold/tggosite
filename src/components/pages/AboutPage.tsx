import { Building2, TrendingUp, DollarSign, MapPin, Calendar, ChevronRight, CheckCircle, Award, FileText, Globe, Play } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { GranadaDetailPage } from './GranadaDetailPage';

type Language = 'zh' | 'en';
type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact';

interface AboutPageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

const translations = {
  zh: {
    title: 'RWA代币化项目',
    subtitle: '将真实世界资产转化为数字代币',
    watchVideo: '平台视频介绍',
    overview: {
      title: 'TGGO 概览',
      description: '我们专注于将优质的真实世界资产（RWA）代币化，为全球投资者提供透明、合规的数字资产投资机会。通过区块链技术，实现资产的高效流通和收益分配。',
      stats: [
        { label: '总资产规模', value: '$5B+' },
        { label: '活跃项目', value: '12' },
        { label: '投资者', value: '50K+' },
        { label: '平均年化', value: '8.5%' }
      ]
    },
    categories: {
      title: '资产类别',
      items: [
        { name: '房地产', count: '5' },
        { name: '旅游度假', count: '3' },
        { name: '基础设施', count: '2' },
        { name: '能源项目', count: '2' }
      ]
    },
    featuredProjects: {
      title: '精选项目',
      viewDetails: '查看详情',
      projects: [
        {
          name: '格林纳达国家度假区',
          ticker: 'GNR',
          category: '旅游度假',
          location: '格林纳达',
          description: '加勒比国家级度假区代币化项目，持有未来10年50%运营净收益权',
          investment: '$2B',
          tokenSupply: '500M',
          apy: '6-10%',
          progress: 80,
          status: '进行中',
          isComingSoon: false,
          highlights: [
            '政府支持的国家级项目',
            '375英亩土地开发',
            '酒店、高尔夫、赌场综合体',
            '代币可用于度假区消费'
          ]
        },
        {
          name: '北海油田开采权益',
          ticker: 'OPE',
          category: '能源项目',
          location: '北海',
          description: '北海成熟油田的年度收益权代币化，通过产量挂钩提供高额通胀保护收益',
          investment: '$1.2B',
          tokenSupply: '300M',
          apy: '12-15%',
          progress: 0,
          status: '即将上线',
          isComingSoon: true,
          highlights: [
            '已探明储量保障',
            '通胀抵御能力强',
            '月度产量分红',
            '战略能源储备'
          ]
        },
        {
          name: '迪拜商业大厦',
          ticker: 'DBC',
          category: '房地产',
          location: '迪拜，阿联酋',
          description: '位于迪拜金融区核心地段的甲级写字楼，租金收益稳定',
          investment: '$850M',
          tokenSupply: '200M',
          apy: '7.5%',
          progress: 100,
          status: '即将上线',
          isComingSoon: true,
          highlights: [
            '迪拜金融中心DIFC核心位置',
            '98%出租率',
            '国际知名租户',
            '季度分红'
          ]
        },
        {
          name: '新加坡物流园区',
          ticker: 'SLP',
          category: '基础设施',
          location: '新加坡',
          description: '现代化智能物流园区，服务东南亚电商和跨境贸易',
          investment: '$320M',
          tokenSupply: '150M',
          apy: '8.2%',
          progress: 100,
          status: '即将上线',
          isComingSoon: true,
          highlights: [
            '战略位置靠近港口',
            '智能化仓储系统',
            '长期租约保障',
            '稳定现金流'
          ]
        },
        {
          name: '太阳能发电站',
          ticker: 'SPP',
          category: '能源项目',
          location: '德国',
          description: '绿色能源项目，政府补贴支持，20年购电协议',
          investment: '$180M',
          tokenSupply: '100M',
          apy: '9.5%',
          progress: 100,
          status: '即将上线',
          isComingSoon: true,
          highlights: [
            '政府能源补贴',
            '20-year grid purchase contract',
            'ESG-compliant asset',
            '稳定收益'
          ]
        }
      ]
    },
    advantages: {
      title: '平台优势',
      items: [
        {
          title: '严格筛选',
          description: '只选择优质、合规的真实资产项目'
        },
        {
          title: '透明运营',
          description: '所有财务数据和收益分配链上公开'
        },
        {
          title: '专业管理',
          description: '经验丰富的资产管理团队'
        },
        {
          title: '合规保障',
          description: '符合国际监管标准和KYC/AML要求'
        }
      ]
    },
    cta: {
      title: '探索投资机会',
      description: '了解更多关于我们的RWA代币化项目，开始您的投资之旅',
      button: '联系我们'
    }
  },
  en: {
    title: 'RWA Tokenization Projects',
    subtitle: 'Transforming Real World Assets into Digital Tokens',
    watchVideo: 'Platform Introduction',
    overview: {
      title: 'TGGO Overview',
      description: 'We specialize in tokenizing premium real-world assets (RWA), providing global investors with transparent and compliant digital asset investment opportunities. Leveraging blockchain technology for efficient asset circulation and yield distribution.',
      stats: [
        { label: 'Total Assets', value: '$5B+' },
        { label: 'Active Projects', value: '12' },
        { label: 'Investors', value: '50K+' },
        { label: 'Avg APY', value: '8.5%' }
      ]
    },
    categories: {
      title: 'Asset Categories',
      items: [
        { name: 'Real Estate', count: '5' },
        { name: 'Tourism & Resorts', count: '3' },
        { name: 'Infrastructure', count: '2' },
        { name: 'Energy Projects', count: '2' }
      ]
    },
    featuredProjects: {
      title: 'Featured Projects',
      viewDetails: 'View Details',
      projects: [
        {
          name: 'Grenada National Resort',
          ticker: 'GNR',
          category: 'Tourism & Resorts',
          location: 'Grenada',
          description: 'Caribbean national-level resort tokenization with 50% net revenue rights for 10 years',
          investment: '$2B',
          tokenSupply: '500M',
          apy: '6-10%',
          progress: 80,
          status: 'In Progress',
          isComingSoon: false,
          highlights: [
            'Government-backed national project',
            '375 acres land development',
            'Hotel, golf, casino complex',
            'Tokens usable for resort services'
          ]
        },
        {
          name: 'North Sea Oil Production Rights',
          ticker: 'OPE',
          category: 'Energy Projects',
          location: 'North Sea',
          description: 'Tokenization of annual production rights from mature North Sea oil fields, providing high inflation-protected yields',
          investment: '$1.2B',
          tokenSupply: '300M',
          apy: '12-15%',
          progress: 0,
          status: 'Coming Soon',
          isComingSoon: true,
          highlights: [
            'Proven reserves backing',
            'Strong inflation hedge',
            'Monthly production dividends',
            'Strategic energy reserve'
          ]
        },
        {
          name: 'Dubai Business Tower',
          ticker: 'DBC',
          category: 'Real Estate',
          location: 'Dubai, UAE',
          description: 'Grade A office building in Dubai Financial District with stable rental income',
          investment: '$850M',
          tokenSupply: '200M',
          apy: '7.5%',
          progress: 100,
          status: 'Coming Soon',
          isComingSoon: true,
          highlights: [
            'DIFC core location',
            '98% occupancy rate',
            'International tenants',
            'Quarterly dividends'
          ]
        },
        {
          name: 'Singapore Logistics Park',
          ticker: 'SLP',
          category: 'Infrastructure',
          location: 'Singapore',
          description: 'Modern smart logistics park serving Southeast Asia e-commerce and trade',
          investment: '$320M',
          tokenSupply: '150M',
          apy: '8.2%',
          progress: 100,
          status: 'Coming Soon',
          isComingSoon: true,
          highlights: [
            'Strategic port location',
            'Smart warehousing system',
            'Long-term lease agreements',
            'Stable cash flow'
          ]
        },
        {
          name: 'Solar Power Plant',
          ticker: 'SPP',
          category: 'Energy Projects',
          location: 'Germany',
          description: 'Green energy project with government subsidies and 20-year power purchase agreement',
          investment: '$180M',
          tokenSupply: '100M',
          apy: '9.5%',
          progress: 100,
          status: 'Coming Soon',
          isComingSoon: true,
          highlights: [
            'Government energy subsidies',
            '20-year grid purchase contract',
            'ESG-compliant asset',
            'Stable returns'
          ]
        }
      ]
    },
    advantages: {
      title: 'Platform Advantages',
      items: [
        {
          title: 'Rigorous Selection',
          description: 'Only premium, compliant real asset projects'
        },
        {
          title: 'Transparent Operations',
          description: 'All financial data and distributions on-chain'
        },
        {
          title: 'Professional Management',
          description: 'Experienced asset management team'
        },
        {
          title: 'Compliance Guaranteed',
          description: 'International regulatory standards & KYC/AML'
        }
      ]
    },
    cta: {
      title: 'Explore Investment Opportunities',
      description: 'Learn more about our RWA tokenization projects and start your investment journey',
      button: 'Contact Us'
    }
  }
};

export function AboutPage({ language, setCurrentPage }: AboutPageProps) {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [showGranadaDetail, setShowGranadaDetail] = useState(false);
  const t = translations[language];

  // Show Granada detail page if selected
  if (showGranadaDetail) {
    return <GranadaDetailPage language={language} onBack={() => { setShowGranadaDetail(false); window.scrollTo(0, 0); }} />;
  }

  return (
    <div className="pt-16 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-xs mb-4">
            <Building2 size={14} />
            <span>RWA</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-sm text-gray-400">{t.subtitle}</p>
        </div>

        {/* Platform Overview */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="text-blue-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.overview.title}</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {t.overview.description}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {t.overview.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-3 text-center"
              >
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Categories */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <h2 className="text-lg font-bold text-white mb-4">{t.categories.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {t.categories.items.map((category, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg p-3 flex items-center justify-between"
              >
                <span className="text-gray-300 text-sm">{category.name}</span>
                <span className="text-blue-400 font-bold text-sm">{category.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">{t.featuredProjects.title}</h2>
          <div className="space-y-4">
            {t.featuredProjects.projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                {/* Project Header */}
                <div 
                  className="p-5 cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{project.name}</h3>
                        <span className="px-2 py-0.5 bg-blue-600/20 border border-blue-600/30 rounded text-blue-400 text-xs font-medium">
                          ${project.ticker}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Building2 size={12} />
                          {project.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <ChevronRight 
                      size={20} 
                      className={`text-gray-400 transition-transform ${expandedProject === index ? 'rotate-90' : ''}`}
                    />
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500 mb-0.5">{language === 'zh' ? '投资额' : 'Investment'}</div>
                      <div className="text-white font-bold text-sm">{project.investment}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-500 mb-0.5">APY</div>
                      <div className="text-green-400 font-bold text-sm">{project.apy}</div>
                    </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-500 mb-0.5">{language === 'zh' ? '状态' : 'Status'}</div>
                        <div className={`font-bold text-sm ${project.status === '即将上线' || project.status === 'Coming Soon' ? 'text-blue-400' : 'text-white'}`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedProject === index && (
                    <div className="border-t border-white/10 bg-white/[0.02] p-5">
                      {project.progress > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400 text-xs">{language === 'zh' ? '工程进度' : 'Progress'}</span>
                            <span className="text-white text-sm font-bold">{project.progress}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="text-white font-bold text-sm mb-3">
                          {language === 'zh' ? '项目亮点' : 'Highlights'}
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-xs leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">{language === 'zh' ? '代币总量' : 'Token Supply'}</div>
                          <div className="text-white font-bold text-sm">{project.tokenSupply}</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">{language === 'zh' ? '投资额' : 'Investment'}</div>
                          <div className="text-white font-bold text-sm">{project.investment}</div>
                        </div>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (index === 0) {
                            setShowGranadaDetail(true);
                            window.scrollTo(0, 0);
                          }
                        }}
                        disabled={index !== 0}
                        className={`w-full py-2.5 rounded-lg transition-colors text-sm font-medium active:scale-[0.98] ${
                          index === 0 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                        }`}
                      >
                        {index === 0 ? t.featuredProjects.viewDetails : (language === 'zh' ? '暂未开放' : 'Not Available')}
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/* Platform Advantages */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">{t.advantages.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            {t.advantages.items.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-3">
                  <CheckCircle size={20} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-6 text-center">
          <Award className="text-blue-400 mx-auto mb-3" size={32} />
          <h3 className="text-xl font-bold text-white mb-2">{t.cta.title}</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {t.cta.description}
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium active:scale-[0.98]"
          >
            {t.cta.button}
          </button>
        </div>
      </div>
    </div>
  );
}
