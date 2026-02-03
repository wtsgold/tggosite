import { ArrowLeft, Scale, FileCheck, AlertTriangle, Users, CreditCard } from 'lucide-react';

type Language = 'zh' | 'en';

interface TermsPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回首页',
    title: '服务条款',
    subtitle: '使用TGGO服务前，请仔细阅读并同意以下条款',
    lastUpdated: '最后更新：2026年2月1日',
    sections: [
      {
        title: '接受条款',
        icon: FileCheck,
        content: [
          {
            subtitle: '协议生效',
            description: '通过访问或使用TGGO平台的任何服务，您表示已阅读、理解并同意受本服务条款的约束。如果您不同意这些条款，请勿使用我们的服务。'
          },
          {
            subtitle: '法定年龄',
            description: '您必须年满18岁或在您所在司法管辖区的法定成年年龄才能使用我们的服务。使用我们的服务即表示您确认满足年龄要求。'
          },
          {
            subtitle: '服务变更',
            description: '我们保留随时修改、暂停或终止服务的权利。重大变更将提前通知用户，继续使用服务即视为接受变更。'
          }
        ]
      },
      {
        title: '账户责任',
        icon: Users,
        content: [
          {
            subtitle: '账户信息',
            description: '您有责任维护账户信息的准确性和完整性。您必须立即通知我们任何未经授权使用您账户的情况。'
          },
          {
            subtitle: '安全责任',
            description: '您有责任维护登录凭据的机密性。因您未能保护账户信息而导致的任何损失，您将承担全部责任。'
          },
          {
            subtitle: '合规义务',
            description: '您同意遵守所有适用的法律法规，包括但不限于反洗钱法、税务法规和证券法规。'
          }
        ]
      },
      {
        title: '交易条款',
        icon: CreditCard,
        content: [
          {
            subtitle: '交易执行',
            description: '所有交易均受市场条件影响，我们不保证交易的执行价格或时间。您理解并接受数字资产投资的固有风险。'
          },
          {
            subtitle: '费用结构',
            description: '我们的服务可能涉及各种费用，包括但不限于交易费、提现费和管理费。所有费用将在交易前明确披露。'
          },
          {
            subtitle: '交易限制',
            description: '我们可能会对某些交易类型或金额实施限制，这些限制可能因监管要求或风险管理需要而变更。'
          }
        ]
      },
      {
        title: '禁止行为',
        icon: AlertTriangle,
        content: [
          {
            subtitle: '非法活动',
            description: '禁止将我们的服务用于任何非法目的，包括但不限于洗钱、恐怖主义融资、欺诈或违反制裁的行为。'
          },
          {
            subtitle: '系统滥用',
            description: '禁止尝试操纵、干扰或损害我们的系统，包括但不限于黑客攻击、恶意软件传播或拒绝服务攻击。'
          },
          {
            subtitle: '市场操纵',
            description: '禁止参与任何形式的市场操纵活动，包括但不限于价格操纵、内幕交易或传播虚假信息。'
          }
        ]
      }
    ],
    riskDisclaimer: {
      title: '风险声明',
      description: '投资数字资产涉及重大风险，您可能损失全部投资',
      risks: [
        '市场波动：数字资产价格可能大幅波动，您可能面临重大损失',
        '监管风险：数字资产监管环境可能发生变化，影响服务可用性',
        '技术风险：区块链技术和智能合约可能存在漏洞或故障',
        '流动性风险：某些资产可能难以及时出售或转换',
        '操作风险：人为错误或系统故障可能导致损失'
      ]
    },
    liability: {
      title: '责任限制',
      description: '在法律允许的最大范围内，我们的责任受到以下限制',
      items: [
        'TGGO不对间接、特殊、偶然或后果性损害承担责任',
        '我们的总责任不超过您在过去12个月内支付的费用',
        '不可抗力事件导致的损失不在我们的责任范围内',
        '您同意独立承担投资决策的责任和风险'
      ]
    },
    termination: {
      title: '终止条款',
      description: '账户终止的相关规定',
      conditions: [
        '您可以随时关闭账户，但必须先完成所有待处理的交易',
        '我们可能因违反条款、可疑活动或监管要求暂停或终止您的账户',
        '账户终止后，您有权提取剩余资金（扣除相关费用）',
        '某些服务条款在终止后仍然有效，包括责任限制和争议解决'
      ]
    },
    governing: {
      title: '管辖法律',
      description: '本协议受新加坡法律管辖。任何争议将通过新加坡国际仲裁中心进行仲裁解决。双方放弃陪审团审理权利。'
    },
    contact: {
      title: '联系我们',
      description: '如果您对本服务条款有任何疑问，请联系我们',
      info: [
        '法务部门：legal@tggo.finance',
        '邮政地址：TGGO Finance, 123 Blockchain Ave, Crypto City',
        '电话：+1-800-TGGO-LEGAL'
      ]
    }
  },
  en: {
    back: 'Back to Home',
    title: 'Terms of Service',
    subtitle: 'Please read and agree to the following terms before using TGGO services',
    lastUpdated: 'Last updated: February 1, 2026',
    sections: [
      {
        title: 'Acceptance of Terms',
        icon: FileCheck,
        content: [
          {
            subtitle: 'Agreement Effectiveness',
            description: 'By accessing or using any TGGO platform services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
          },
          {
            subtitle: 'Legal Age',
            description: 'You must be at least 18 years old or the age of legal majority in your jurisdiction to use our services. By using our services, you confirm that you meet the age requirements.'
          },
          {
            subtitle: 'Service Changes',
            description: 'We reserve the right to modify, suspend, or terminate services at any time. Material changes will be notified to users in advance, and continued use of services constitutes acceptance of changes.'
          }
        ]
      },
      {
        title: 'Account Responsibility',
        icon: Users,
        content: [
          {
            subtitle: 'Account Information',
            description: 'You are responsible for maintaining the accuracy and completeness of your account information. You must immediately notify us of any unauthorized use of your account.'
          },
          {
            subtitle: 'Security Responsibility',
            description: 'You are responsible for maintaining the confidentiality of your login credentials. You will bear full responsibility for any losses resulting from your failure to protect account information.'
          },
          {
            subtitle: 'Compliance Obligations',
            description: 'You agree to comply with all applicable laws and regulations, including but not limited to anti-money laundering laws, tax regulations, and securities laws.'
          }
        ]
      },
      {
        title: 'Trading Terms',
        icon: CreditCard,
        content: [
          {
            subtitle: 'Trade Execution',
            description: 'All trades are subject to market conditions. We do not guarantee trade execution prices or timing. You understand and accept the inherent risks of digital asset investment.'
          },
          {
            subtitle: 'Fee Structure',
            description: 'Our services may involve various fees, including but not limited to trading fees, withdrawal fees, and management fees. All fees will be clearly disclosed before transactions.'
          },
          {
            subtitle: 'Trading Restrictions',
            description: 'We may impose restrictions on certain trade types or amounts. These restrictions may change due to regulatory requirements or risk management needs.'
          }
        ]
      },
      {
        title: 'Prohibited Activities',
        icon: AlertTriangle,
        content: [
          {
            subtitle: 'Illegal Activities',
            description: 'Using our services for any illegal purposes is prohibited, including but not limited to money laundering, terrorism financing, fraud, or sanctions violations.'
          },
          {
            subtitle: 'System Abuse',
            description: 'Attempting to manipulate, interfere with, or damage our systems is prohibited, including but not limited to hacking, malware distribution, or denial of service attacks.'
          },
          {
            subtitle: 'Market Manipulation',
            description: 'Participating in any form of market manipulation is prohibited, including but not limited to price manipulation, insider trading, or spreading false information.'
          }
        ]
      }
    ],
    riskDisclaimer: {
      title: 'Risk Disclaimer',
      description: 'Investing in digital assets involves significant risks and you may lose your entire investment',
      risks: [
        'Market Volatility: Digital asset prices may fluctuate significantly, you may face substantial losses',
        'Regulatory Risk: Digital asset regulatory environment may change, affecting service availability',
        'Technical Risk: Blockchain technology and smart contracts may have vulnerabilities or failures',
        'Liquidity Risk: Some assets may be difficult to sell or convert in a timely manner',
        'Operational Risk: Human error or system failures may result in losses'
      ]
    },
    liability: {
      title: 'Limitation of Liability',
      description: 'To the maximum extent permitted by law, our liability is limited as follows',
      items: [
        'TGGO is not liable for indirect, special, incidental, or consequential damages',
        'Our total liability does not exceed fees you paid in the past 12 months',
        'Losses caused by force majeure events are not within our liability scope',
        'You agree to independently bear the responsibility and risks of investment decisions'
      ]
    },
    termination: {
      title: 'Termination Terms',
      description: 'Provisions related to account termination',
      conditions: [
        'You may close your account at any time, but must first complete all pending transactions',
        'We may suspend or terminate your account for terms violations, suspicious activities, or regulatory requirements',
        'After account termination, you have the right to withdraw remaining funds (minus applicable fees)',
        'Certain terms remain effective after termination, including liability limitations and dispute resolution'
      ]
    },
    governing: {
      title: 'Governing Law',
      description: 'This agreement is governed by Singapore law. Any disputes will be resolved through arbitration at the Singapore International Arbitration Centre. Both parties waive the right to jury trial.'
    },
    contact: {
      title: 'Contact Us',
      description: 'If you have any questions about these Terms of Service, please contact us',
      info: [
        'Legal Department: legal@tggo.finance',
        'Mailing Address: TGGO Finance, 123 Blockchain Ave, Crypto City',
        'Phone: +1-800-TGGO-LEGAL'
      ]
    }
  }
};

export function TermsPage({ language, onBack }: TermsPageProps) {
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
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Scale size={32} className="text-white" />
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
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
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

        {/* Risk Disclaimer */}
        <div className="bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-600/20 rounded-2xl p-6 mt-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="text-red-400" size={20} />
            <h2 className="text-xl font-bold text-white">{t.riskDisclaimer.title}</h2>
          </div>
          <p className="text-gray-300 text-sm mb-4">{t.riskDisclaimer.description}</p>
          <div className="space-y-2">
            {t.riskDisclaimer.risks.map((risk, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-red-400 mt-1">⚠</span>
                <p className="text-gray-300 text-sm leading-relaxed">{risk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.liability.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.liability.description}</p>
          <div className="space-y-2">
            {t.liability.items.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Termination */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.termination.title}</h2>
          <p className="text-gray-300 text-sm mb-4">{t.termination.description}</p>
          <div className="space-y-2">
            {t.termination.conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm leading-relaxed">{condition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-2xl p-5 mt-6">
          <h2 className="text-xl font-bold text-white mb-2">{t.governing.title}</h2>
          <p className="text-gray-300 text-sm leading-relaxed">{t.governing.description}</p>
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
      </div>
    </div>
  );
}