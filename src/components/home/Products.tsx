import { Coins, Building2, Shield, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type Language = 'zh' | 'en';

interface ProductsProps {
  language: Language;
}

const translations = {
  zh: {
    title: '我们的产品',
    subtitle: '为机构投资者打造的代币化资产产品套件',
    products: [
      {
        title: 'OUSG',
        subtitle: '美国国债代币',
        description: '将短期美国国债代币化，为投资者提供稳定、透明的收益来源'
      },
      {
        title: 'OMMF',
        subtitle: '货币市场基金',
        description: '机构级货币市场基金代币化产品，享受传统金融的稳定性'
      },
      {
        title: 'USDY',
        subtitle: '收益美元',
        description: '与美元挂钩的收益型稳定币，结合稳定性与收益性'
      },
      {
        title: 'Flux Finance',
        subtitle: '借贷协议',
        description: '基于代币化资产的去中心化借贷协议，释放资产流动性'
      }
    ]
  },
  en: {
    title: 'Our Products',
    subtitle: 'Tokenized asset product suite',
    products: [
      {
        title: 'OUSG',
        subtitle: 'US Treasury Token',
        description: 'Tokenized short-term US Treasuries providing stable yield'
      },
      {
        title: 'OMMF',
        subtitle: 'Money Market Fund',
        description: 'Institutional-grade tokenized money market fund'
      },
      {
        title: 'USDY',
        subtitle: 'Yield Dollar',
        description: 'USD-pegged yield-bearing stablecoin'
      },
      {
        title: 'Flux Finance',
        subtitle: 'Lending Protocol',
        description: 'Decentralized lending protocol based on tokenized assets'
      }
    ]
  }
};

const productConfig = [
  {
    icon: Coins,
    apy: '5.2%',
    tvl: '$850M',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Building2,
    apy: '4.8%',
    tvl: '$620M',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    apy: '5.0%',
    tvl: '$1.1B',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    apy: '6.5%',
    tvl: '$450M',
    color: 'from-orange-500 to-red-500'
  }
];

export function Products({ language }: ProductsProps) {
  const t = translations[language];

  return (
    <div className="py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Product Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1761300560920-19625eced75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMHNreXNjcmFwZXIlMjBNYW5oYXR0YW4lMjBjaXR5fGVufDF8fHx8MTc2OTU0NDQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Manhattan City"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white mb-1">{t.title}</h2>
            <p className="text-sm text-gray-300">{t.subtitle}</p>
          </div>
        </div>

        <div className="space-y-4">
          {t.products.map((product, index) => {
            const Icon = productConfig[index].icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all active:scale-[0.98]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${productConfig[index].color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-0.5">{product.title}</h3>
                    <p className="text-blue-400 text-xs">{product.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center gap-6 pt-3 border-t border-white/5">
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">APY</div>
                    <div className="text-lg font-bold text-green-400">{productConfig[index].apy}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">TVL</div>
                    <div className="text-lg font-bold text-white">{productConfig[index].tvl}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}