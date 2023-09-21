import CV from '../../../public/cv.svg';
import GitHub from '../../../public/github.svg';
import Gmail from '../../../public/gmail.svg';
import Linkedin from '../../../public/linkedin.svg';

export default function Footer() {
  return (
    <footer className="invisible absolute bottom-6 right-6 z-10 flex flex-row gap-x-2 sm:visible ">
      <a
        href="https://drive.google.com/file/d/1A_kUC3O6fSbZ2nYvPeIvTFmodzZdARcn/view?usp=sharing"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105 hover:bg-gradient-to-bl dark:shadow-gray-700"
      >
        <CV className="h-8 w-8 fill-black p-1 dark:fill-white lg:h-10 lg:w-10" />
      </a>
      <a
        href="mailto:info@juulsoft.com"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105 hover:bg-gradient-to-bl dark:shadow-gray-700"
      >
        <Gmail className="h-8 w-8 fill-black dark:fill-white lg:h-10 lg:w-10" />
      </a>
      <a
        href="https://github.com/AppelBoomHD"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105  hover:bg-gradient-to-bl dark:shadow-gray-700 "
      >
        <GitHub className="h-8 w-8 fill-black dark:fill-white lg:h-10 lg:w-10" />
      </a>
      <a
        href="https://linkedin.com/in/julianriemersma"
        target="_blank"
        className="rounded-lg from-deepPurple via-orange to-lightPurple px-1 shadow-md transition-all hover:scale-105  hover:bg-gradient-to-bl dark:shadow-gray-700"
      >
        <Linkedin className="h-8 w-8 fill-black dark:fill-white lg:h-10 lg:w-10" />
      </a>
    </footer>
  );
}
