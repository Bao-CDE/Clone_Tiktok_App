import TippyHeadless from "@tippyjs/react/headless";
import styles from "./SearchTooltip.module.scss";

function SearchTooltip({ children, content, visible, onClickOutside, hideOnClick = false }) {
  return (
    <TippyHeadless
      interactive
      visible={visible}
      placement="bottom"
      hideOnClick = {hideOnClick}
      popperOptions={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 10], // [X, Y]
            },
          },
        ],
      }}
      render={(attrs) => (
        <div className={styles.tooltipContainer} tabIndex="-1" {...attrs}>
          {content}
        </div>
      )}
      onClickOutside={onClickOutside}
    >
      {children}
    </TippyHeadless>
  );
}

export default SearchTooltip;
