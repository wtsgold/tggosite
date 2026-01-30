import { Lock, Zap, Globe, Users, FileCheck, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface FeaturesProps {
  language: Language;
}

const translations = {
  zh: {
    title: '为什么选择我们',
    subtitle: '领先的技术和服务保障',
    features: [
      {
        title: '机构级安全',
        description: '多重签名、冷存储和保险保障'
      },
      {
        title: '即时结算',
        description: '24/7即时交易和结算'
      },
      {
        title: '全球访问',
        description: '无边界访问，随时随地管理'
      },
      {
        title: '合规透明',
        description: '符合监管要求，定期审计'
      },
      {
        title: 'KYC/AML',
        description: '严格的身份验证和反洗钱流程'
      },
      {
        title: '实时数据',
        description: '完整的链上数据追踪'
      }
    ]
  },
  en: {
    title: 'Why Choose Us',
    subtitle: 'Leading technology and services',
    features: [
      {
        title: 'Institutional Security',
        description: 'Multi-sig, cold storage & insurance'
      },
      {
        title: 'Instant Settlement',
        description: '24/7 instant trading & settlement'
      },
      {
        title: 'Global Access',
        description: 'Borderless access anytime, anywhere'
      },
      {
        title: 'Compliant',
        description: 'Regulatory compliant with audits'
      },
      {
        title: 'KYC/AML',
        description: 'Strict verification processes'
      },
      {
        title: 'Real-time Data',
        description: 'Complete on-chain data tracking'
      }
    ]
  }
};

const icons = [Lock, Zap, Globe, Users, FileCheck, BarChart3];

export function Features({ language }: FeaturesProps) {
  const t = translations[language];

  return (
    <div className="py-8 px-4 pb-16">
      <div className="max-w-lg mx-auto">
        {/* Feature Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1641060272821-df59e2c0b5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY5NDQwMTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Modern Office Architecture"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white mb-1">{t.title}</h2>
            <p className="text-sm text-gray-300">{t.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {t.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}