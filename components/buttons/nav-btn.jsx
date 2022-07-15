import Link from "next/link";

function NavBtn({ text, link, newTab }) {
  if (link) {
    return (
      <Link href={link || "/#"}>
        <div
          className={`text-white cursor-pointer hover:scale-[1.1] duration-200`}
        >
          <span className="text-2xl">{text}</span>
        </div>
      </Link>
    );
  } else if (newTab && link) {
    return (
      <a href={link || "/#"} target="_blank">
        <div
          className={`text-white cursor-pointer hover:scale-[1.1] duration-200`}
        >
          <span className="text-2xl">{text}</span>
        </div>
      </a>
    );
  } else {
    return (
      <div className="cursor-not-allowed text-gray-500">
        <span className="text-2xl">{text}</span>
      </div>
    );
  }
}

export default NavBtn;
