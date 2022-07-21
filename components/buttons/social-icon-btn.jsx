function SocialIconBtn(props) {
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      className={`${
        props.color ? props.color : "text-[#5c5f82]"
      } hover:scale-[1.1] duration-200`}
    >
      <props.icon className="text-3xl" />
    </a>
  );
}

export default SocialIconBtn;
