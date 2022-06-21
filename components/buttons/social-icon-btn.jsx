function SocialIconBtn(props) {
  return (
    <a
      href={props.link || "#"}
      target="_blank"
      className="text-black hover:text-themeLightOrange duration-200"
    >
      <props.icon className="text-3xl" />
    </a>
  );
}

export default SocialIconBtn;
