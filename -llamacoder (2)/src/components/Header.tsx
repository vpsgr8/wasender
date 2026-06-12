export function Header() {
  return (
    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 px-6 md:px-10 py-10 text-center relative">
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-full" />
      
      <div className="relative z-10">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-5">
          <span className="text-4xl">💬</span>
        </div>
        
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
          WA Sender
        </h1>
        
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/30">
          Version 5.1.1
        </span>
      </div>
    </div>
  );
}