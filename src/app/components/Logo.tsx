import LogoImage from '../../app/components/assets/logo/1.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-[80px] h-10 rounded-xl overflow-hidden flex items-center justify-center">
        <img
          src={LogoImage}
          alt="Logo"
          className="w-[140%] h-[140%] object-contain"
        />
      </div>

      {showText && (
        <span className="text-[#14532D] font-semibold">
          Portfolio
        </span>
      )}
    </div>
  );
}
