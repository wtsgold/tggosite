import { ArrowLeft, HelpCircle, Search, MessageCircle, BookOpen, Shield, CreditCard, Users } from 'lucide-react';

type Language = 'zh' | 'en';

interface HelpPageProps {
  language: Language;
  onBack: () => void;
}

const translations = {
  zh: {
    back: '返回首页',
    title: '帮助中心',
    subtitle: '常见问题解答和用户指南',
    search: '搜索帮助文档...',
    categories: [
      {
        title: '入门指南',
        icon: BookOpen,
        questions: [
          {
            question: '如何开始使用TGGO平台？',
            answer: '首先注册账户，完成KYC验证，然后您就可以开始投资代币化资产了。整个过程通常需要1-2个工作日。'
          },
          {
            question: '什么是代币化资产？',
            answer: '代币化资产是将传统资产（如房地产、股票、债券）转换为区块链上的数字代币，使其更易于交易和分割。'
          },
          {
            question: '平台支持哪些支付方式？',
            answer: '我们支持银行转账、信用卡支付、加密货币充值等多种支付方式。'
          }
        ]
      },
      {
        title: '账户安全',
        icon: Shield,
        questions: [
          {
            question: '如何保护我的账户安全？',
            answer: '建议启用双重身份验证（2FA），使用强密码，定期更新登录信息，并避免在公共网络上访问账户。'
          },
          {
            question: '忘记密码怎么办？',
            answer: '点击登录页面的"忘记密码"链接，我们会向您的注册邮箱发送重置密码的链接。'
          },
          {
            question: '如何启用双重身份验证？',
            answer: '在账户设置中选择"安全设置"，然后按照提示使用Google Authenticator或类似应用设置2FA。'
          }
        ]
      },
      {
        title: '交易相关',
        icon: CreditCard,
        questions: [
          {
            question: '交易费用是多少？',
            answer: '交易费用根据交易类型和金额而定，通常在0.1%-0.5%之间。具体费用在交易确认前会明确显示。'
          },
          {
            question: '最低投资金额是多少？',
            answer: 'GNR代币的最低投资金额为100 USDT，其他产品可能有不同的最低投资要求。'
          },
          {
            question: '如何查看我的投资收益？',
            answer: '登录账户后，在"资产管理"页面可以查看所有投资的实时收益情况和历史记录。'
          }
        ]
      },
      {
        title: 'GNR项目',
        icon: Users,
        questions: [
          {
            question: 'GNR代币有什么特殊权益？',
            answer: 'GNR持有者享有格林纳达度假区50%运营收益分红权，同时可在园区内消费享受20%折扣。'
          },
          {
            question: '分红如何发放？',
            answer: '2025年至酒店开业为质押收益期，按季度发放；2028年起永久运营分红，只要持有代币即可享受，以USDT形式按季度分配。'
          },
          {
            question: '代币可以随时卖出吗？',
            answer: '可以，GNR代币支持二级市场交易、园区消费兑换、点对点转让等多种退出方式。'
          }
        ]
      }
    ],
    contact: {
      title: '联系我们',
      description: '如果您没有找到所需答案，请联系我们的支持团队',
      options: [
        { method: '在线客服', description: '7×24小时在线支持', time: '立即响应' },
        { method: '邮件支持', description: 'support@tggo.finance', time: '1-2小时' },
        { method: '电话支持', description: '+1-800-TGGO-HELP', time: '工作日 9:00-18:00' },
        { method: '社区论坛', description: '与其他用户交流', time: '社区互助' }
      ]
    }
  },
  en: {
    back: 'Back to Home',
    title: 'Help Center',
    subtitle: 'Frequently asked questions and user guides',
    search: 'Search help documentation...',
    categories: [
      {
        title: 'Getting Started',
        icon: BookOpen,
        questions: [
          {
            question: 'How to get started with TGGO platform?',
            answer: 'First register an account, complete KYC verification, then you can start investing in tokenized assets. The process usually takes 1-2 business days.'
          },
          {
            question: 'What are tokenized assets?',
            answer: 'Tokenized assets are traditional assets (like real estate, stocks, bonds) converted into digital tokens on blockchain, making them easier to trade and divide.'
          },
          {
            question: 'What payment methods are supported?',
            answer: 'We support various payment methods including bank transfers, credit cards, and cryptocurrency deposits.'
          }
        ]
      },
      {
        title: 'Account Security',
        icon: Shield,
        questions: [
          {
            question: 'How to protect my account security?',
            answer: 'We recommend enabling two-factor authentication (2FA), using strong passwords, regularly updating login credentials, and avoiding access on public networks.'
          },
          {
            question: 'What if I forget my password?',
            answer: 'Click the "Forgot Password" link on the login page, and we will send a password reset link to your registered email.'
          },
          {
            question: 'How to enable two-factor authentication?',
            answer: 'Go to "Security Settings" in your account settings, then follow the prompts to set up 2FA using Google Authenticator or similar apps.'
          }
        ]
      },
      {
        title: 'Trading',
        icon: CreditCard,
        questions: [
          {
            question: 'What are the trading fees?',
            answer: 'Trading fees vary by transaction type and amount, typically ranging from 0.1%-0.5%. Exact fees are clearly shown before transaction confirmation.'
          },
          {
            question: 'What is the minimum investment amount?',
            answer: 'The minimum investment for GNR tokens is 100 USDT. Other products may have different minimum investment requirements.'
          },
          {
            question: 'How to view my investment returns?',
            answer: 'After logging in, go to the "Asset Management" page to view real-time returns and historical records of all investments.'
          }
        ]
      },
      {
        title: 'GNR Project',
        icon: Users,
        questions: [
          {
            question: 'What special benefits do GNR tokens have?',
            answer: 'GNR holders enjoy 50% revenue sharing rights from Grenada Resort operations, plus 20% discounts for on-site consumption.'
          },
          {
            question: 'How are dividends distributed?',
            answer: '2025 until hotel opening: Staking rewards paid quarterly; From 2028 onward: Permanent operating dividends as long as you hold tokens, distributed quarterly in USDT.'
          },
          {
            question: 'Can tokens be sold anytime?',
            answer: 'Yes, GNR tokens support various exit methods including secondary market trading, resort consumption exchange, and peer-to-peer transfers.'
          }
        ]
      }
    ],
    contact: {
      title: 'Contact Us',
      description: 'If you cannot find the answer you need, please contact our support team',
      options: [
        { method: 'Live Chat', description: '24/7 online support', time: 'Immediate response' },
        { method: 'Email Support', description: 'support@tggo.finance', time: '1-2 hours' },
        { method: 'Phone Support', description: '+1-800-TGGO-HELP', time: 'Weekdays 9:00-18:00' },
        { method: 'Community Forum', description: 'Connect with other users', time: 'Community help' }
      ]
    }
  }
};

export function HelpPage({ language, onBack }: HelpPageProps) {
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
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={t.search}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-600/50"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {t.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-3">
                  {category.questions.map((qa, qaIndex) => (
                    <details key={qaIndex} className="bg-white/5 rounded-lg">
                      <summary className="p-4 cursor-pointer hover:bg-white/10 transition-colors">
                        <span className="text-white font-medium text-sm">{qa.question}</span>
                      </summary>
                      <div className="px-4 pb-4">
                        <p className="text-gray-300 text-sm leading-relaxed">{qa.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}