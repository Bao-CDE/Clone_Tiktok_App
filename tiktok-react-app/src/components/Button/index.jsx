import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
function Button({
  to,
  href,
  children,
  onClick,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disable = false,
  rounded = false,
  leftIcon,
  rightIcon,
  className,

  ...passProps
}) {
  let Component = "button";
  const classes = clsx(styles.wrapper, {
    [styles.primary]: primary,
    [styles.outline]: outline,
    [styles.small]: small,
    [styles.large]: large,
    [styles.text]: text,
    [styles.disable]: disable,
    [styles.rounded]: rounded,
    [className]: className, //ở đây ta phải khai báo key : value, vì khi ta khai báo className bên Button index.jsx của Header "className={styles.custom_loggin}"
  });
  const props = {
    onClick,
    ...passProps,
  };

  if (disable) {
    // delete props.onClick // khi có Disable thì sẽ xóa sự kiện onCLick được khai báo ở trên props


    // ở đây key sẽ duyệt qua từng phần tử trong "props" đc khai báo ở trên. Còn Object.keys sẽ lấy ví dụ như name: Bảo thì sẽ lấy là name ko lấy value
    Object.keys(props).forEach((key) => {
      if (
        key.startsWith("on") && // Nếu tên prop bắt đầu bằng "on" (ví dụ: "onClick", "onChange")
        typeof props[key] === "function" // và giá trị của prop là một function (tức là handler)
      ) {
        delete props[key]; // thì xóa prop đó khỏi object props
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }
  return (
    <>
      <Component className={classes} {...props}>
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <span className={styles.title}>{children}</span>
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </Component>
    </>
  );
}

export default Button;
