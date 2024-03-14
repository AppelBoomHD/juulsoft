import GitHub from '../../../public/github.svg';
import Gmail from '../../../public/gmail.svg';
import Linkedin from '../../../public/linkedin.svg';

export default function Footer() {
  return (
    <footer className="invisible absolute bottom-6 right-6 z-10 flex flex-row gap-x-2 sm:visible ">
      <a
        title="email"
        href="mailto:info@juulsoft.com"
        target="_blank"
        className="group flex h-8 w-8 items-center justify-center rounded-lg p-1 shadow-md transition-all hover:scale-105 dark:shadow-gray-700 lg:h-10 lg:w-10"
      >
        <Gmail className="group-hover:fill-gmail fill-black  dark:fill-white " />
      </a>
      <a
        title="github"
        href="https://github.com/AppelBoomHD"
        target="_blank"
        className="group flex h-8 w-8 items-center justify-center rounded-lg p-1 shadow-md transition-all hover:scale-105 dark:shadow-gray-700 lg:h-10 lg:w-10"
      >
        <GitHub className="fill-black group-hover:fill-[url(#GithubGradient)] dark:fill-white" />
      </a>
      <a
        title="linkedin"
        href="https://linkedin.com/in/julianriemersma"
        target="_blank"
        className="group flex h-8 w-8 items-center justify-center rounded-lg p-1.5 shadow-md transition-all hover:scale-105 dark:shadow-gray-700 lg:h-10 lg:w-10"
      >
        <Linkedin className="fill-black group-hover:fill-[#0A66C2] dark:fill-white" />
      </a>
    </footer>
  );
}
