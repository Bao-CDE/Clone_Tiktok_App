import image from "../../assets/no_img.png";

import { useState } from "react";

function Image({ src, alt, fallBack = image, ...props }) {
  const [falseImg, setFalseImg] = useState("");

  const handleError = () => {
    setFalseImg(fallBack);
  };
  return (
    <img
      {...props}
      src={falseImg || src}
      alt={alt}
      onError={handleError}
    />
  );
}

export default Image;
