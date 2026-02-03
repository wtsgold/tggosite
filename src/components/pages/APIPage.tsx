import { ArrowLeft, Server, Key, Shield, Code2, Database, Zap } from 'lucide-react';

type Language = 'zh' | 'en';

interface APIPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回首页',
    title: 'API 文档',
    subtitle: '强大的RESTful API，助力您的应用开发',
    overview: {
      title: 'API 概览',
      description: 'TGGO API提供完整的功能集，支持代币化资产管理、交易执行和数据查询',
      features: [
        'RESTful架构设计',
        '99.9%可用性保证',
        '实时数据推送',
        '企业级安全标准'
      ]
    },
    authentication: {
      title: '身份验证',
      description: '使用API密钥进行安全认证',
      steps: [
        '在控制台生成API密钥',
        '在请求头中添加Authorization',
        '使用HMAC-SHA256签名验证',
        '支持IP白名单限制'
      ]
    },
    endpoints: [
      {
        category: '账户管理',
        icon: Database,
        methods: [
          { method: 'GET', path: '/api/v1/account', description: '获取账户信息' },
          { method: 'POST', path: '/api/v1/account/kyc', description: '提交KYC资料' },
          { method: 'GET', path: '/api/v1/account/balance', description: '查询账户余额' },
          { method: 'GET', path: '/api/v1/account/history', description: '获取交易历史' }
        ]
      },
      {
        category: '代币管理',
        icon: Server,
        methods: [
          { method: 'GET', path: '/api/v1/tokens', description: '获取代币列表' },
          { method: 'POST', path: '/api/v1/tokens/transfer', description: '转账代币' },
          { method: 'GET', path: '/api/v1/tokens/{id}', description: '查询代币详情' },
          { method: 'POST', path: '/api/v1/tokens/stake', description: '质押代币' }
        ]
      },
      {
        category: '市场数据',
        icon: Zap,
        methods: [
          { method: 'GET', path: '/api/v1/market/prices', description: '获取实时价格' },
          { method: 'GET', path: '/api/v1/market/orderbook', description: '查询订单簿' },
          { method: 'GET', path: '/api/v1/market/trades', description: '获取交易记录' },
          { method: 'GET', path: '/api/v1/market/stats', description: '市场统计数据' }
        ]
      }
    ],
    rateLimit: {
      title: '请求限制',
      description: '为确保服务稳定性，我们对API请求实施以下限制',
      limits: [
        { tier: '免费版', requests: '1,000 请求/小时', burst: '100 突发请求' },
        { tier: '专业版', requests: '10,000 请求/小时', burst: '500 突发请求' },
        { tier: '企业版', requests: '无限制', burst: '自定义配置' }
      ]
    },
    sdks: {
      title: 'SDK 支持',
      description: '官方SDK让集成更简单',
      languages: ['JavaScript', 'Python', 'Go', 'Java', 'C#', 'PHP']
    }
  },
  en: {
    back: 'Back to Home',
    title: 'API Documentation',
    subtitle: 'Powerful RESTful APIs to power your applications',
    overview: {
      title: 'API Overview',
      description: 'TGGO API provides complete functionality for tokenized asset management, trade execution, and data queries',
      features: [
        'RESTful architecture design',
        '99.9% availability guarantee',
        'Real-time data streaming',
        'Enterprise-grade security'
      ]
    },
    authentication: {
      title: 'Authentication',
      description: 'Secure authentication using API keys',
      steps: [
        'Generate API keys in console',
        'Add Authorization header',
        'HMAC-SHA256 signature verification',
        'IP whitelist support'
      ]
    },
    endpoints: [
      {
        category: 'Account Management',
        icon: Database,
        methods: [
          { method: 'GET', path: '/api/v1/account', description: 'Get account information' },
          { method: 'POST', path: '/api/v1/account/kyc', description: 'Submit KYC documents' },
          { method: 'GET', path: '/api/v1/account/balance', description: 'Query account balance' },
          { method: 'GET', path: '/api/v1/account/history', description: 'Get transaction history' }
        ]
      },
      {
        category: 'Token Management',
        icon: Server,
        methods: [
          { method: 'GET', path: '/api/v1/tokens', description: 'Get token list' },
          { method: 'POST', path: '/api/v1/tokens/transfer', description: 'Transfer tokens' },
          { method: 'GET', path: '/api/v1/tokens/{id}', description: 'Get token details' },
          { method: 'POST', path: '/api/v1/tokens/stake', description: 'Stake tokens' }
        ]
      },
      {
        category: 'Market Data',
        icon: Zap,
        methods: [
          { method: 'GET', path: '/api/v1/market/prices', description: 'Get real-time prices' },
          { method: 'GET', path: '/api/v1/market/orderbook', description: 'Query order book' },
          { method: 'GET', path: '/api/v1/market/trades', description: 'Get trade records' },
          { method: 'GET', path: '/api/v1/market/stats', description: 'Market statistics' }
        ]
      }
    ],
    rateLimit: {
      title: 'Rate Limits',
      description: 'To ensure service stability, we implement the following API request limits',
      limits: [
        { tier: 'Free Tier', requests: '1,000 requests/hour', burst: '100 burst requests' },
        { tier: 'Pro Tier', requests: '10,000 requests/hour', burst: '500 burst requests' },
        { tier: 'Enterprise', requests: 'Unlimited', burst: 'Custom configuration' }
      ]
    },
    sdks: {
      title: 'SDK Support',
      description: 'Official SDKs make integration easier',
      languages: ['JavaScript', 'Python', 'Go', 'Java', 'C#', 'PHP']
    }
  }
};

const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET': return 'bg-green-600';
    case 'POST': return 'bg-blue-600';
    case 'PUT': return 'bg-yellow-600';
    case 'DELETE': return 'bg-red-600';
    default: return 'bg-gray-600';
  }
};

export function APIPage({ language, onBack }: APIPageProps) {
  const t = translations[language];

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

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Code2 size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {/* API Overview */}
        <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-600/20 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.overview.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.overview.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {t.overview.features.map((feature, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3 text-center">
                <p className="text-gray-300 text-xs">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authentication */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Key className="text-yellow-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.authentication.title}</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">{t.authentication.description}</p>
          <div className="space-y-2">
            {t.authentication.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-300 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-4 mb-6">
          {t.endpoints.map((endpoint, index) => {
            const Icon = endpoint.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="text-blue-400" size={20} />
                  <h3 className="text-lg font-bold text-white">{endpoint.category}</h3>
                </div>

                <div className="space-y-2">
                  {endpoint.methods.map((method, methodIndex) => (
                    <div
                      key={methodIndex}
                      className="bg-white/5 rounded-lg p-3"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`${getMethodColor(method.method)} text-white text-xs px-2 py-1 rounded font-mono font-bold`}>
                          {method.method}
                        </span>
                        <span className="text-blue-400 text-sm font-mono">{method.path}</span>
                      </div>
                      <p className="text-gray-400 text-xs">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rate Limits */}
        <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-600/20 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="text-orange-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.rateLimit.title}</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">{t.rateLimit.description}</p>
          <div className="space-y-2">
            {t.rateLimit.limits.map((limit, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium text-sm">{limit.tier}</span>
                  <div className="text-right">
                    <p className="text-orange-400 text-xs">{limit.requests}</p>
                    <p className="text-gray-400 text-xs">{limit.burst}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDKs */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-white mb-2">{t.sdks.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.sdks.description}</p>
          <div className="grid grid-cols-3 gap-2">
            {t.sdks.languages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-2 text-center">
                <p className="text-white text-xs font-medium">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}