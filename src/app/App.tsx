export default function App() {
  const downloadLinks = [
    { text: '安卓下载', url: 'https://d3f9qeowrswg22.cloudfront.net/vipchat_1.0.3_release.apk', icon: 'https://ik.imagekit.io/avrxcbzni/anz.svg' },
    { text: 'IOS下载', url: 'https://zgq5n.lahuafa.com/uq5y/oba9ZCAjPlJlaWCJ', icon: 'https://ik.imagekit.io/avrxcbzni/apple.svg' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md mx-auto">
        {/* Background Image Container */}
        <div className="relative w-full">
          <img 
            src="https://ik.imagekit.io/avrxcbzni/vvvv.png" 
            alt="App Preview"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          
          {/* Download Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex gap-3">
              {/* 安卓下载按钮 */}
              <a 
                href={downloadLinks[0].url}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse-ring"></div>
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse-ring animation-delay-1000"></div>
                <img src={downloadLinks[0].icon} alt="Android" className="w-10 h-10 relative z-10" />
                <span className="font-bold relative z-10">{downloadLinks[0].text}</span>
              </a>

              {/* IOS下载按钮 */}
              <a 
                href={downloadLinks[1].url}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-3 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse-ring"></div>
                <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse-ring animation-delay-1000"></div>
                <img src={downloadLinks[1].icon} alt="iOS" className="w-10 h-10 relative z-10" />
                <span className="font-bold relative z-10">{downloadLinks[1].text}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}