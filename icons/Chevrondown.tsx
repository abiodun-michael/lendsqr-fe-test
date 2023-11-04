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
      fill="#213F7D"
      d="M11.057 3.994c.841-.841 2.102.462 1.261 1.26l-4.75 4.752a.842.842 0 0 1-1.262 0L1.64 5.38c-.8-.84.463-2.102 1.303-1.26l3.994 3.993 4.12-4.12Z"
      opacity={0.6}
    />
  </svg>
)
export default SvgComponent
