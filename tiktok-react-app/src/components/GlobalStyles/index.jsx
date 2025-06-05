// components/GlobalStyles/GlobalStyles.jsx
import './GlobalStyles.module.scss'; // import file SCSS/CSS

function GlobalStyles({ children }) {
  return children; // có thể thêm wrapper div nếu cần
}

export default GlobalStyles;