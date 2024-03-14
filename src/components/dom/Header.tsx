import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <a
        title="press to view my resume!"
        href="https://docs.google.com/document/d/1TrOtrdLJ3ULGnvKA8jTK5MpcFYYfH-lz/edit?usp=sharing&ouid=102620587897862864426&rtpof=true&sd=true"
        target="_blank"
        className="group absolute left-12 top-12 z-10 flex items-end hover:animate-pulse hover:cursor-pointer"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={48}
          height={48}
          className="transition-transform group-hover:-rotate-180"
        />
        <div className="invisible -z-10 flex -translate-x-5 font-nunito text-4xl font-bold tracking-wide text-lightPurple transition-all group-hover:visible group-hover:translate-x-1">
          esume
        </div>
      </a>
    </header>
  );
}
