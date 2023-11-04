import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    {...props}
  >
    <g>
      <path
        fill="#545F7D"
        d="M10 6.111c.922 0 1.667-.744 1.667-1.667 0-.922-.745-1.666-1.667-1.666s-1.666.744-1.666 1.666c0 .923.744 1.667 1.666 1.667Zm0 2.222c-.922 0-1.666.745-1.666 1.667s.744 1.667 1.666 1.667c.922 0 1.667-.745 1.667-1.667S10.922 8.333 10 8.333Zm0 5.556c-.922 0-1.666.744-1.666 1.667 0 .922.744 1.666 1.666 1.666.922 0 1.667-.744 1.667-1.667 0-.922-.745-1.666-1.667-1.666Z"
      />
    </g>
  </svg>
)
export default SvgComponent
