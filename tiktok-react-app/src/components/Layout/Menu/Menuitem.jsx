import Button from "../../button";
import styles from "./Menu.module.scss";

function MenuItem({ data }) {
  return (
    <div>
      <Button className={styles.menu_item} leftIcon={data.icon} to={data.to}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
