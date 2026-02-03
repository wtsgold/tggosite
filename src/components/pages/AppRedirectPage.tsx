import { useEffect } from 'react';

export function AppRedirectPage() {
  useEffect(() => {
    // 立即重定向到应用系统
    window.location.replace('http://18.217.8.159/');
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">正在跳转到应用...</h2>
        <p className="text-gray-400 text-sm mb-4">Redirecting to application...</p>
        <a
          href="http://18.217.8.159/"
          className="text-blue-400 hover:text-blue-300 underline text-sm"
        >
          如果没有自动跳转，请点击这里
        </a>
      </div>
    </div>
  );
}