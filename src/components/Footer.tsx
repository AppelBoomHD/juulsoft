import GitHub from '../../public/github.svg';
import Gmail from '../../public/gmail.svg';
import Linkedin from '../../public/linkedin.svg';

export default function Footer() {
  return (
    <div className="absolute bottom-6 right-12 z-10 flex flex-row gap-x-2 ">
      <a
        href="mailto:julianriemersma@gmail.com"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105 hover:bg-gradient-to-bl dark:shadow-gray-700"
      >
        <Gmail className="h-10 w-10 fill-black dark:fill-white" />
      </a>
      <a
        href="https://github.com/AppelBoomHD"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105  hover:bg-gradient-to-bl dark:shadow-gray-700 "
      >
        <GitHub className="h-10 w-10 fill-black dark:fill-white" />
      </a>
      <a
        href="https://linkedin.com/in/julianriemersma"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105  hover:bg-gradient-to-bl dark:shadow-gray-700"
      >
        <Linkedin className="h-10 w-10 fill-black dark:fill-white" />
      </a>
    </div>
  );
}
