import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

type Language = 'zh' | 'en';

interface ContactPageProps {
  language: Language;
}

const translations = {
  zh: {
    title: '联系我们',
    subtitle: '专业的团队为您提供全方位的资产代币化服务咨询',
    emailLabel: '电子邮件',
    emailValue: 'turing@tggo.us',
    supportLabel: '在线客服',
    supportDesc: '24/7 全天候在线支持',
    officeLabel: '办公地址',
    officeDesc: '全球布局，本地化服务',
    formTitle: '发送消息',
    name: '您的姓名',
    email: '您的邮箱',
    message: '消息内容',
    submit: '提交留言'
  },
  en: {
    title: 'Contact Us',
    subtitle: 'Professional team providing comprehensive asset tokenization consulting',
    emailLabel: 'Email',
    emailValue: 'turing@tggo.us',
    supportLabel: 'Customer Support',
    supportDesc: '24/7 online support available',
    officeLabel: 'Office Location',
    officeDesc: 'Global presence, localized service',
    formTitle: 'Send a Message',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Message',
    submit: 'Send Message'
  }
};

export function ContactPage({ language }: ContactPageProps) {
  const t = translations[language];

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4 mb-10">
          <a 
            href={`mailto:${t.emailValue}`}
            className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">{t.emailLabel}</div>
              <div className="text-white font-medium">{t.emailValue}</div>
            </div>
          </a>

          <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
            <div className="p-3 bg-purple-600/20 rounded-xl text-purple-400">
              <MessageSquare size={24} />
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">{t.supportLabel}</div>
              <div className="text-white font-medium">{t.supportDesc}</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
            <div className="p-3 bg-green-600/20 rounded-xl text-green-400">
              <MapPin size={24} />
            </div>
            <div>
              <div className="text-gray-400 text-xs mb-1">{t.officeLabel}</div>
              <div className="text-white font-medium">{t.officeDesc}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">{t.formTitle}</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.name}</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                placeholder={t.name}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.email}</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                placeholder={t.email}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.message}</label>
              <textarea 
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder={t.message}
              />
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors">
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
