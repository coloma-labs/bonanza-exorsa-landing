import Link from "next/link";
import { useRouter } from "next/router";

function NavBtn({ text, link, newTab }) {
  const router = useRouter();

  if (link) {
    return (
      <Link href={link || "/#"}>
        <div
          className={`text-[#5c5f82] cursor-pointer hover:scale-[1.1] duration-200`}
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
          className={`text-[#5c5f82] cursor-pointer hover:scale-[1.1] duration-200`}
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
