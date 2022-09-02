import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";

function SocialIconBtn(props) {
  let PropIcon;
  switch (props.icon) {
    case "twitter":
      PropIcon = FaTwitter;
      break;
    case "discord":
      PropIcon = FaDiscord;
      break;
    case "instagram":
      PropIcon = FaInstagram;
      break;    
  
    default:
      break;
  }
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      className={`${
        props.color ? props.color : "text-themePurple"
      } hover:scale-[1.2] hover:text-[#faeaac] duration-200`}
    >
      <PropIcon className="text-3xl" />
    </a>
  );
}

export default SocialIconBtn;
