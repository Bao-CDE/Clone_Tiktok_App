import styles from "./Header.module.scss";
// import stylesToolTip from "./SearchTooltip.module.scss";


import SearchTooltip from "./SearchTooltip";
import { SiTiktok } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCloudUpload,
  faCoins,
  faEnvelope,
  faGear,
  faGlobe,
  faKeyboard,

  faPaperPlane,
  faQuestion,
  faSignOut,

  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../../../button";
import AccountItem from "../../../AccountItem";
import Menu from "../../Menu";
import Image from "../../../Image";
import Search from "../Search/";


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
    title: "Feedback and help",
    to: "/feedback",
  },

  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyborad shortcuts",
  },
];

function Header() {
  // State để kiểm soát hiển thị Tooltip


  const currentUser = true;

  // Xử lý khi input thay đổi để hiển thị/ẩn Tooltip


  //Handle
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "languae":
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/bao",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,

    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
    },
  ];

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logo}>
          <SiTiktok size={32} color="#000" />
          <span style={{ fontSize: "30px", fontWeight: "bold" }}>TikTok</span>
        </div>

        <Search/>

        <div className={styles.action}>
          {currentUser ? (
            <>
              <SearchTooltip content="Upload video" placement="bottom">
                <button>
                  <FontAwesomeIcon
                    className={styles.action_btn}
                    icon={faCloudUpload}
                  />
                </button>
              </SearchTooltip>
              <SearchTooltip content="Send" placement="bottom">
                <button>
                  <FontAwesomeIcon
                    className={styles.action_btn}
                    icon={faPaperPlane}
                  />
                </button>
              </SearchTooltip>
              <SearchTooltip content="Message" placement="bottom">
                <button>
                  <FontAwesomeIcon
                    className={styles.action_btn}
                    icon={faEnvelope}
                  />
                </button>
              </SearchTooltip>
            </>
          ) : (
            <>
              {/* Truyền prop "text" để dùng class .text trong Button */}
              <Button text>Upload</Button>

              {/* Truyền prop "primary" để dùng class .primary trong Button */}
              <Button primary>Login</Button>

              {/* Nếu muốn custom riêng thì thêm className vào Button */}
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={styles.user_avatar}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/e95c19762f6b3e747b9eb91ca44606ac~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=1c9ec239&x-expires=1749384000&x-signature=1gE7tvhvjuTJHqyCyDROcljRcKM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"

                // fallBack={}
              />
            ) : (
              <IconButton disableRipple>
                <span className={styles.more_btn}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </span>
              </IconButton>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
