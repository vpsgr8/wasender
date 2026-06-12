import { useEffect, useState } from "react";

const floatingIcons = ["💬", "✉️", "💰", "📈", "🚀", "📊", "🤝", "📱", "🎯", "📢"];

interface FloatingIcon {
  id: number;
  icon: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export function BackgroundAnimation() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const initialIcons: FloatingIcon[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
      left: Math.random() * 100,
      size: Math.random() * 30 + 20,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setIcons(initialIcons);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((item) => (
        <div
          key={item.id}
          className="absolute text-white/30 animate-float"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
    </div>
  );
}