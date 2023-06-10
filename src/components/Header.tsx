import Image from 'next/image';

export default function Header() {
  return (
    <div className="absolute left-12 top-12 z-10">
      <Image
        src="/logo.svg"
        alt="logo"
        width={48}
        height={48}
        className="transition-transform hover:-rotate-90 hover:cursor-pointer"
      />
    </div>
  );
}
