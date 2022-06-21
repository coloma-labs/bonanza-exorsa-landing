import Link from "next/link";

function NavBtn({ disabled, text, link, home }) {
  if (home) {
    if (!disabled) {
      return (
        <Link href={link || "/#"}>
          <button className="min-w-[80px] py-1 bg-[rgba(202,212,222,0.4)] hover:bg-[rgba(202,212,222,0.8)] transition duration-200 rounded-lg">
            {text}
          </button>
        </Link>
      );
    } else {
      return (
        <button
          className="min-w-[80px] py-1 bg-[rgba(202,212,222,0.4)] disabled:bg-[rgba(202,212,222,0.2)] disabled:cursor-not-allowed disabled:text-[#667287] hover:bg-[rgba(202,212,222,0.8)] transition duration-200 rounded-lg"
          disabled={disabled}
        >
          {text}
        </button>
      );
    }
  } else {
    if (!disabled) {
      return (
        <Link href={link || "/#"}>
          <div className="cursor-pointer text-white hover:text-themeLightOrange duration-200">
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
}

export default NavBtn;
