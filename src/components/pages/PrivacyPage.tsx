import { ArrowLeft, Shield, Eye, Lock, Globe, FileText } from 'lucide-react';

type Language = 'zh' | 'en';

interface PrivacyPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回首页',
    title: '隐私政策',
    subtitle: '我们致力于保护您的个人信息和隐私权利',
    lastUpdated: '最后更新：2026年2月1日',
    sections: [
      {
        title: '信息收集',
        icon: Eye,
        content: [
          {
            subtitle: '个人信息',
            description: '我们收集您提供的个人信息，包括姓名、电子邮件地址、电话号码、身份证明文件等。这些信息用于账户创建、身份验证和合规要求。'
          },
          {
            subtitle: '自动收集信息',
            description: '当您使用我们的服务时，我们自动收集设备信息、IP地址、浏览器类型、访问时间等技术信息，用于改善服务质量和安全防护。'
          },
          {
            subtitle: 'KYC信息',
            description: '为遵循反洗钱（AML）法规，我们需要收集和验证您的身份信息，包括政府颁发的身份证件、地址证明等。'
          }
        ]
      },
      {
        title: '信息使用',
        icon: FileText,
        content: [
          {
            subtitle: '服务提供',
            description: '我们使用您的信息来提供、维护和改进我们的服务，处理交易，提供客户支持，以及与您就账户相关事宜进行沟通。'
          },
          {
            subtitle: '合规要求',
            description: '为遵守法律法规，我们可能需要使用您的信息进行身份验证、风险评估、反洗钱监控和监管报告。'
          },
          {
            subtitle: '安全防护',
            description: '我们使用信息来检测、预防和解决欺诈、安全威胁和其他有害活动，保护您和其他用户的安全。'
          }
        ]
      },
      {
        title: '信息保护',
        icon: Lock,
        content: [
          {
            subtitle: '加密技术',
            description: '我们使用行业标准的加密技术（包括TLS/SSL）来保护数据传输，所有敏感信息在存储时都经过加密处理。'
          },
          {
            subtitle: '访问控制',
            description: '我们实施严格的访问控制措施，只有经过授权的员工才能访问您的个人信息，且仅限于工作需要。'
          },
          {
            subtitle: '安全监控',
            description: '我们持续监控系统安全，定期进行安全审计和漏洞评估，确保您的信息得到最佳保护。'
          }
        ]
      },
      {
        title: '信息共享',
        icon: Globe,
        content: [
          {
            subtitle: '第三方服务商',
            description: '我们可能与可信的第三方服务商共享必要信息，如支付处理商、身份验证服务商等。所有合作伙伴都须遵守严格的隐私保护协议。'
          },
          {
            subtitle: '法律要求',
            description: '在法律要求或政府部门合法要求的情况下，我们可能会披露您的信息。我们会在法律允许的范围内尽力通知您。'
          },
          {
            subtitle: '业务转让',
            description: '如果公司发生合并、收购或资产出售，您的信息可能会作为业务资产的一部分被转让。我们会提前通知您此类变更。'
          }
        ]
      }
    ],
    rights: {
      title: '您的权利',
      description: '根据适用的隐私法律，您享有以下权利',
      items: [
        '访问权：您可以要求查看我们持有的关于您的个人信息',
        '更正权：您可以要求更正不准确或不完整的信息',
        '删除权：在某些情况下，您可以要求删除您的个人信息',
        '限制处理权：您可以要求限制对您信息的处理',
        '数据可携性权：您可以要求以结构化格式导出您的数据',
        '撤回同意权：您可以随时撤回对非必要信息处理的同意'
      ]
    },
    cookies: {
      title: 'Cookie政策',
      description: '我们使用Cookie和类似技术来改善您的浏览体验',
      types: [
        { type: '必要Cookie', description: '这些Cookie对网站功能是必需的，无法禁用' },
        { type: '功能Cookie', description: '这些Cookie记住您的偏好设置，提供个性化体验' },
        { type: '分析Cookie', description: '帮助我们了解网站使用情况，改进服务质量' },
        { type: '营销Cookie', description: '用于投放相关广告（需要您的同意）' }
      ]
    },
    contact: {
      title: '联系我们',
      description: '如果您对我们的隐私政策有任何疑问或需要行使您的隐私权利，请联系我们',
      info: [
        '数据保护官：privacy@tggo.finance',
        '邮政地址：TGGO Finance, 123 Blockchain Ave, Crypto City',
        '电话：+1-800-TGGO-PRIVACY'
      ]
    },
    changes: {
      title: '政策变更',
      description: '我们可能会不时更新本隐私政策。重大变更将通过电子邮件或网站公告提前通知您。继续使用我们的服务即表示您同意更新后的政策。'
    }
  },
  en: {
    back: 'Back to Home',
    title: 'Privacy Policy',
    subtitle: 'We are committed to protecting your personal information and privacy rights',
    lastUpdated: 'Last updated: February 1, 2026',
    sections: [
      {
        title: 'Information Collection',
        icon: Eye,
        content: [
          {
            subtitle: 'Personal Information',
            description: 'We collect personal information you provide, including name, email address, phone number, identity documents, etc. This information is used for account creation, identity verification, and compliance requirements.'
          },
          {
            subtitle: 'Automatically Collected Information',
            description: 'When you use our services, we automatically collect technical information such as device information, IP address, browser type, access times to improve service quality and security.'
          },
          {
            subtitle: 'KYC Information',
            description: 'To comply with anti-money laundering (AML) regulations, we need to collect and verify your identity information, including government-issued ID documents and proof of address.'
          }
        ]
      },
      {
        title: 'Information Usage',
        icon: FileText,
        content: [
          {
            subtitle: 'Service Provision',
            description: 'We use your information to provide, maintain and improve our services, process transactions, provide customer support, and communicate with you about account-related matters.'
          },
          {
            subtitle: 'Compliance Requirements',
            description: 'To comply with laws and regulations, we may need to use your information for identity verification, risk assessment, anti-money laundering monitoring, and regulatory reporting.'
          },
          {
            subtitle: 'Security Protection',
            description: 'We use information to detect, prevent and resolve fraud, security threats and other harmful activities to protect you and other users.'
          }
        ]
      },
      {
        title: 'Information Protection',
        icon: Lock,
        content: [
          {
            subtitle: 'Encryption Technology',
            description: 'We use industry-standard encryption technology (including TLS/SSL) to protect data transmission, and all sensitive information is encrypted when stored.'
          },
          {
            subtitle: 'Access Control',
            description: 'We implement strict access control measures. Only authorized employees can access your personal information, and only when necessary for work purposes.'
          },
          {
            subtitle: 'Security Monitoring',
            description: 'We continuously monitor system security, regularly conduct security audits and vulnerability assessments to ensure your information receives the best protection.'
          }
        ]
      },
      {
        title: 'Information Sharing',
        icon: Globe,
        content: [
          {
            subtitle: 'Third-party Service Providers',
            description: 'We may share necessary information with trusted third-party service providers, such as payment processors and identity verification services. All partners must comply with strict privacy protection agreements.'
          },
          {
            subtitle: 'Legal Requirements',
            description: 'We may disclose your information when required by law or legitimate government requests. We will make reasonable efforts to notify you within the limits allowed by law.'
          },
          {
            subtitle: 'Business Transfer',
            description: 'If the company undergoes merger, acquisition, or asset sale, your information may be transferred as part of business assets. We will notify you in advance of such changes.'
          }
        ]
      }
    ],
    rights: {
      title: 'Your Rights',
      description: 'Under applicable privacy laws, you have the following rights',
      items: [
        'Access Right: You can request to view personal information we hold about you',
        'Correction Right: You can request correction of inaccurate or incomplete information',
        'Deletion Right: In certain circumstances, you can request deletion of your personal information',
        'Processing Restriction Right: You can request restriction of processing your information',
        'Data Portability Right: You can request export of your data in structured format',
        'Consent Withdrawal Right: You can withdraw consent for non-essential information processing at any time'
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      description: 'We use cookies and similar technologies to improve your browsing experience',
      types: [
        { type: 'Necessary Cookies', description: 'These cookies are essential for website functionality and cannot be disabled' },
        { type: 'Functional Cookies', description: 'These cookies remember your preferences and provide personalized experience' },
        { type: 'Analytics Cookies', description: 'Help us understand website usage and improve service quality' },
        { type: 'Marketing Cookies', description: 'Used for relevant advertising (requires your consent)' }
      ]
    },
    contact: {
      title: 'Contact Us',
      description: 'If you have any questions about our privacy policy or need to exercise your privacy rights, please contact us',
      info: [
        'Data Protection Officer: privacy@tggo.finance',
        'Mailing Address: TGGO Finance, 123 Blockchain Ave, Crypto City',
        'Phone: +1-800-TGGO-PRIVACY'
      ]
    },
    changes: {
      title: 'Policy Changes',
      description: 'We may update this privacy policy from time to time. Significant changes will be notified to you in advance via email or website announcement. Continued use of our services indicates your acceptance of the updated policy.'
    }
  }
};

export function PrivacyPage({ language, onBack }: PrivacyPageProps) {
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
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400 mb-2">{t.subtitle}</p>
          <p className="text-gray-500 text-sm">{t.lastUpdated}</p>
        </div>

        {/* Main Sections */}
        <div className="space-y-6">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white/5 rounded-lg p-4">
                      <h3 className="text-white font-medium text-sm mb-2">{item.subtitle}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Your Rights */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-6 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.rights.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.rights.description}</p>
          <div className="space-y-2">
            {t.rights.items.map((right, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">{right}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Policy */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.cookies.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.cookies.description}</p>
          <div className="space-y-3">
            {t.cookies.types.map((cookie, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium text-sm">{cookie.type}</h3>
                    <p className="text-gray-400 text-xs mt-1">{cookie.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-600/20 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.contact.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.contact.description}</p>
          <div className="space-y-2">
            {t.contact.info.map((info, index) => (
              <p key={index} className="text-gray-300 text-sm">{info}</p>
            ))}
          </div>
        </div>

        {/* Policy Changes */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.changes.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{t.changes.description}</p>
        </div>
      </div>
    </div>
  );
}