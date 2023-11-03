import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#E9B200"
      fillRule="evenodd"
      d="M7.986 1.288a.32.32 0 0 0-.292.22L6.188 6.18 1.28 6.17a.32.32 0 0 0-.188.58l3.976 2.877-1.527 4.666a.32.32 0 0 0 .493.358L8 11.758l3.966 2.893a.32.32 0 0 0 .492-.358l-1.527-4.666 3.977-2.877a.32.32 0 0 0-.188-.58l-4.907.01-1.51-4.67v-.001a.32.32 0 0 0-.317-.221Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
