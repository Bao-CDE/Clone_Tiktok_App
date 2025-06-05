import styles from "./Header.module.scss";
// import stylesToolTip from "./SearchTooltip.module.scss";
import { useState } from "react";
import SearchTooltip from "./SearchTooltip";
import { SiTiktok } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faGlobe,
  faKeyboard,
  faMagnifyingGlass,
  faQuestion,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../button";
import AccountItem from "../../../AccountItem";
import Menu from "../../Menu";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons/faEllipsisVertical";
import { IconButton, Tooltip } from "@mui/material";

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: "English",
    children: {
      title: "Languae",
      data: [
        
        {
          type: "languae",
          code: "en",
          title: "English",
        },
        {
          type: "languae",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },

  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "FeedBank and help",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyborad shortcuts",
  },
];

function Header() {
  // State để kiểm soát hiển thị Tooltip
  const [open, setOpen] = useState(false);

  // Xử lý khi input thay đổi để hiển thị/ẩn Tooltip
  const handleInputChange = (e) => {
    setOpen(e.target.value.trim().length > 0); // Hiển thị Tooltip khi có nội dung
  };

  //Handle
  const handleMenuChange = (menuItem) => {
    switch(menuItem.type){
      case 'languae':
        
    }
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logo}>
          <SiTiktok size={32} color="#000" />
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>TikTok</span>
        </div>

        {/* Tooltip hiển thị kết quả tìm kiếm */}
        <SearchTooltip
          open={open}
          content={
            <div className={styles.search_result}>
              {/* <PopperWrapper> */}
              <h4 className={styles.search_title}>Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />

              {/* </PopperWrapper> */}
            </div>
          }
        >
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search accounts and videos"
              spellCheck={false}
              onChange={handleInputChange}
            />
            <button className={styles.clear_btn}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
            <button className={styles.search_btn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </SearchTooltip>

        <div className={styles.action}>
          {/* ở đây truyền primary thì mới ăn được css của class .primary đc cấu hình trong Button */}
          <Button text>Upload</Button>
          <Button primary>Loggin</Button>
          {/* nếu muốn custom riêng theo một css nào đó thì cứ cho  một cái className */}

          <Menu item={MENU_ITEMS} onChange={handleMenuChange}>
            <IconButton disableRipple>
              <span className={styles.more_btn}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </span>
            </IconButton>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
