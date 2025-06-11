import TippyHeadless from "@tippyjs/react/headless";
import styles from "./SearchTooltip.module.scss";

function SearchTooltip({
  children,
  content,
  visible,
  delay,
  onHide,
  onClickOutside,
}) {
  return (
    <TippyHeadless
      delay={delay}
      interactive
      visible={visible}
      placement="bottom"
      onClickOutside={onClickOutside}
      onHide={onHide}
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
        <div
          className={styles.tooltipContainer}
          tabIndex="-1"
          {...attrs}
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </div>
      )}
    >
      {children}
    </TippyHeadless>
  );
}

export default SearchTooltip;
