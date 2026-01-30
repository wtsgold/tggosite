import { Hero } from '../home/Hero';
import { Stats } from '../home/Stats';
import { Products } from '../home/Products';
import { Features } from '../home/Features';

type Language = 'zh' | 'en';

type Page = 'home' | 'projects' | 'partners' | 'download' | 'contact';

interface HomePageProps {
  language: Language;
  setCurrentPage: (page: Page) => void;
}

export function HomePage({ language, setCurrentPage }: HomePageProps) {
  return (
    <>
      <Hero language={language} setCurrentPage={setCurrentPage} />
      <Stats language={language} />
      <Products language={language} />
      <Features language={language} />
    </>
  );
}
