import { Mail, MessageSquare, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

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
    submit: '提交留言',
    submitting: '提交中...',
    success: '留言已提交成功！',
    successDesc: '我们会尽快回复您的留言',
    error: '提交失败，请稍后再试'
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
    submit: 'Send Message',
    submitting: 'Submitting...',
    success: 'Message sent successfully!',
    successDesc: 'We will reply to your message as soon as possible',
    error: 'Failed to submit, please try again later'
  }
};

export function ContactPage({ language }: ContactPageProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 记录留言到控制台（在实际项目中，这里会发送到后端API）
      const messageData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        language: language
      };

      console.log('📝 新留言记录:', messageData);

      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 将留言保存到本地存储
      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      existingMessages.push(messageData);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // 3秒后重置状态
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('提交留言失败:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{t.success}</h4>
              <p className="text-gray-400 text-sm">{t.successDesc}</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder={t.name}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder={t.email}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1.5 ml-1">{t.message}</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder={t.message}
                  disabled={isSubmitting}
                />
              </div>
              {submitStatus === 'error' && (
                <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-3">
                  <p className="text-red-400 text-sm text-center">{t.error}</p>
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-colors"
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
