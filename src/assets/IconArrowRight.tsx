import { SVGAttributes } from "react";

interface IconArrowRightProps extends SVGAttributes<SVGElement> {
  fontSize?: number | string;
}

const IconArrowRight = ({ fontSize = "24px", ...props }: IconArrowRightProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fontSize} height={fontSize} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z" />
    </svg>
  );
};

export default IconArrowRight;
