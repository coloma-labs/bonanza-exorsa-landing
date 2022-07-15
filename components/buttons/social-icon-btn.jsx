function SocialIconBtn(props) {
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      className={`${
        props.color ? props.color : "text-white"
      } hover:scale-[1.1] duration-200`}
    >
      <props.icon className="text-3xl" />
    </a>
  );
}

export default SocialIconBtn;
