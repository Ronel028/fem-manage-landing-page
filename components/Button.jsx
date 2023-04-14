import Link from "next/link";
import buttonStyle from "@/styles/Button.module.scss";

const Button = (props) => {
  return (
    <Link href="/" className={buttonStyle.button}>
      {props.btnTitle}
    </Link>
  );
};

export default Button;
