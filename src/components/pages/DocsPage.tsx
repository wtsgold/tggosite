import { ArrowLeft, FileText, Code, Layers, Shield, Zap, ExternalLink } from 'lucide-react';

type Language = 'zh' | 'en';

interface DocsPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回首页',
    title: '开发文档',
    subtitle: '全面的开发指南和API集成文档',
    gettingStarted: {
      title: '快速开始',
      description: '几分钟内开始使用TGGO平台',
      steps: [
        {
          title: '创建账户',
          description: '注册并完成KYC认证过程'
        },
        {
          title: '获取API密钥',
          description: '在开发者控制台中生成API密钥'
        },
        {
          title: '集成SDK',
          description: '使用我们的官方SDK快速集成'
        },
        {
          title: '测试环境',
          description: '在沙箱环境中测试您的集成'
        }
      ]
    },
    sections: [
      {
        title: 'API参考',
        description: '完整的REST API文档和端点说明',
        icon: Code,
        items: ['认证机制', 'REST端点', '请求/响应格式', '错误处理']
      },
      {
        title: 'SDK文档',
        description: '多语言SDK使用指南',
        icon: Layers,
        items: ['JavaScript SDK', 'Python SDK', 'Go SDK', 'Java SDK']
      },
      {
        title: '安全指南',
        description: '最佳安全实践和合规要求',
        icon: Shield,
        items: ['API密钥管理', '数据加密', '合规要求', '审计日志']
      },
      {
        title: '集成示例',
        description: '实际使用场景和代码示例',
        icon: Zap,
        items: ['Web应用集成', '移动应用集成', 'DeFi协议集成', '钱包集成']
      }
    ],
    resources: {
      title: '开发资源',
      items: [
        { name: 'GitHub仓库', description: '开源代码和示例项目' },
        { name: '开发者论坛', description: '社区支持和讨论' },
        { name: '状态页面', description: 'API服务状态监控' },
        { name: '更新日志', description: '最新功能和修复记录' }
      ]
    }
  },
  en: {
    back: 'Back to Home',
    title: 'Documentation',
    subtitle: 'Comprehensive development guides and API integration docs',
    gettingStarted: {
      title: 'Getting Started',
      description: 'Get up and running with TGGO platform in minutes',
      steps: [
        {
          title: 'Create Account',
          description: 'Sign up and complete the KYC verification process'
        },
        {
          title: 'Get API Keys',
          description: 'Generate API keys in the developer console'
        },
        {
          title: 'Integrate SDK',
          description: 'Use our official SDKs for quick integration'
        },
        {
          title: 'Test Environment',
          description: 'Test your integration in our sandbox environment'
        }
      ]
    },
    sections: [
      {
        title: 'API Reference',
        description: 'Complete REST API documentation and endpoints',
        icon: Code,
        items: ['Authentication', 'REST Endpoints', 'Request/Response Format', 'Error Handling']
      },
      {
        title: 'SDK Documentation',
        description: 'Multi-language SDK usage guides',
        icon: Layers,
        items: ['JavaScript SDK', 'Python SDK', 'Go SDK', 'Java SDK']
      },
      {
        title: 'Security Guide',
        description: 'Security best practices and compliance requirements',
        icon: Shield,
        items: ['API Key Management', 'Data Encryption', 'Compliance', 'Audit Logs']
      },
      {
        title: 'Integration Examples',
        description: 'Real-world use cases and code examples',
        icon: Zap,
        items: ['Web App Integration', 'Mobile Integration', 'DeFi Protocol Integration', 'Wallet Integration']
      }
    ],
    resources: {
      title: 'Developer Resources',
      items: [
        { name: 'GitHub Repository', description: 'Open source code and example projects' },
        { name: 'Developer Forum', description: 'Community support and discussions' },
        { name: 'Status Page', description: 'API service status monitoring' },
        { name: 'Changelog', description: 'Latest features and fix records' }
      ]
    }
  }
};

export function DocsPage({ language, onBack }: DocsPageProps) {
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.gettingStarted.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.gettingStarted.description}</p>
          <div className="space-y-3">
            {t.gettingStarted.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">{step.title}</h3>
                  <p className="text-gray-400 text-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-4 mb-6">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{section.title}</h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                  <ExternalLink size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/5 rounded-lg p-2 text-center"
                    >
                      <p className="text-gray-300 text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Resources */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
          <h2 className="text-xl font-bold text-white mb-4">{t.resources.title}</h2>
          <div className="space-y-3">
            {t.resources.items.map((resource, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-lg p-3 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-white font-medium text-sm">{resource.name}</h3>
                  <p className="text-gray-400 text-xs">{resource.description}</p>
                </div>
                <ExternalLink size={14} className="text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}