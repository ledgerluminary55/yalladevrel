import { Laptop, Heart } from 'lucide-react';

export function HeartLaptopIcon({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Laptop className="w-full h-full text-current" />
      <Heart
        className="absolute text-red-500"
        style={{
          width: '40%',
          height: '40%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
