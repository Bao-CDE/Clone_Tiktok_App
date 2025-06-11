import SearchTooltip from "../components/Header/SearchTooltip";
import styles from "./Menu.module.scss";
import MenuItem from "./Menuitem";
import Header from "./Header";
import { useState } from "react";

const defaultFunction = () => {};

function Menu({ children, items = [], onChange = defaultFunction }) {
  const [history, setHistory] = useState([{ data: items }]);
  const currentMenu = history[history.length - 1];

  // console.log(currentMenu.data); //kiểm tra đọc đi sẽ hiểu
  // console.log(history[history.length - 1]); //kiểm tra
  // console.log(currentMenu); //kiểm tra

  const renderItems = () => {
    return currentMenu.data.map((items, index) => {
      const isParent = !!items.children;
      // !!items.children là true thì phủ định của nó là false và thêm một phủ định nữa là true, thì đồng nghĩa nó CHẮC CHẮN sẽ là true hoặc là false
      //một cách viết khác là items.children ? true : false
      return (
        <MenuItem
          key={index}
          data={items}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, items.children]);
            } else {
              onChange(items);
            }
          }}
        />
      );
    });
  };
  return (
    <SearchTooltip
      
      delay={500}
      content={
        <div>
          {/* <PopperWrapper> */}
          <div className={styles.menu_list}>
            {/* nếu độ dài của history có từ 2 data:item thì value = true thì sẽ render ra Header có title */}
            {history.length > 1 && (
              <Header
                title="Langueae"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              ></Header>
            )}
            <div className={styles.menu_scroll}>{renderItems()}</div>
          </div>

          {/* </PopperWrapper> */}
        </div>
      }
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </SearchTooltip>
  );
}

export default Menu;
