import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface StatsProps {
  language: Language;
}

const translations = {
  zh: {
    title: '持续增长的生态系统',
    subtitle: '实时数据展示平台的强劲增长',
    tvl: '总锁定价值 (TVL)',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
  },
  en: {
    title: 'Growing Ecosystem',
    subtitle: 'Real-time platform growth',
    tvl: 'Total Value Locked (TVL)',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  }
};

export function Stats({ language }: StatsProps) {
  const t = translations[language];
  
  const data = [
    { name: t.months[0], value: 400 },
    { name: t.months[1], value: 600 },
    { name: t.months[2], value: 800 },
    { name: t.months[3], value: 1200 },
    { name: t.months[4], value: 1600 },
    { name: t.months[5], value: 2000 },
    { name: t.months[6], value: 2500 },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Chart Image Background */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1641760378661-6f290a50a62d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBza3lzY3JhcGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2OTQ1OTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Corporate Building"
            className="w-full h-48 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/80 to-transparent"></div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{t.title}</h2>
          <p className="text-sm text-gray-400">{t.subtitle}</p>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">$2,500,000,000</span>
              <span className="text-green-400 text-xs">+24.5%</span>
            </div>
            <div className="text-gray-400 text-xs mt-1">{t.tvl}</div>
          </div>
          
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '10px' }} />
              <YAxis stroke="#6b7280" style={{ fontSize: '10px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1f2e', 
                  border: '1px solid #ffffff20',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}