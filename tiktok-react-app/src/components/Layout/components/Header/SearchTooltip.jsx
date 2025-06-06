import styles from "./SearchTooltip.module.scss";
import Tooltip from "@mui/material/Tooltip";

function SearchTooltip({
  open,
  children,
  content,
  leaveDelay,
  disableInteractive = false,
  enterDelay,
  onClose,
  title,
  placement,
  className,
}) {
  return (
    <Tooltip
      open={open}
      enterDelay={enterDelay}
      disableInteractive={disableInteractive}
      leaveDelay={leaveDelay}
      onClose={onClose}
      content={title}
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "transparent", // để custom bằng SCSS
            // padding: 0,
            // boxShadow: "none",
            pointerEvents: "auto", //auto (mặc định): phần tử sẽ nhận sự kiện chuột như click, hover, v.v.
          },
          className: className,
        },
      }}
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 0], // tooltip sẽ dịch xuống 10px so với vị trí mặc định
            },
          },
        ],
      }}
      title={<div className={styles.tooltipContainer}>{content}</div>}
    >
      {/* Ô input/search box */}
      <div className={styles.trigger}>{children}</div>
    </Tooltip>
  );
}

export default SearchTooltip;
