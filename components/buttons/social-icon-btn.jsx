function SocialIconBtn(props) {
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      className={`${
        props.color ? props.color : "text-themePurple"
      } hover:scale-[1.2] hover:text-[#faeaac] duration-200`}
    >
      <props.icon className="text-3xl" />
    </a>
  );
}

export default SocialIconBtn;
