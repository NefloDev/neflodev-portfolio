import "./ArrowUpRight.css";
import type { SVGProps } from "react";

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-up-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      className="arrow-up-right-path"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17 17 7m0 0H8m9 0v9"
    />
  </svg>
);
export default SvgArrowUpRight;
