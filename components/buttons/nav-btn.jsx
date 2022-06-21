import Link from "next/link";
import { useRouter } from "next/router";

function NavBtn({ text, link }) {
  const router = useRouter();
  if (link) {
    return (
      <Link href={link || "/#"}>
        <div
          className={`${
            router.pathname === "/" ? "text-white" : "text-black"
          } cursor-pointer hover:scale-[1.1] duration-200`}
        >
          <span className="text-2xl">{text}</span>
        </div>
      </Link>
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
