import Link from "next/link";
import { useRouter } from "next/router";

function NavBtn({ text, link, newTab }) {
  const router = useRouter();

  const determineTextColor = () => {
    if(router.pathname === '/') return 'text-white';
    return 'text-themePurple';
  }

  if (link) {
    return (
      <Link href={link || "/#"}>
        <div
          className={`${determineTextColor()} cursor-pointer hover:scale-[1.1] duration-200`}
        >
          <span className="text-2xl">{text}</span>
        </div>
      </Link>
    );
  }
  if (newTab) {
    return (
      <a href={link || "/#"} target="_blank">
        <div
          className={`${determineTextColor()} cursor-pointer hover:scale-[1.1] duration-200`}
        >
          <span className="text-2xl">{text}</span>
        </div>
      </a>
    );
  } else {
    return (
      <div className="cursor-not-allowed text-gray-400">
        <span className="text-2xl">{text}</span>
      </div>
    );
  }
}

export default NavBtn;
