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
      d="M16 12.5v1a.5.5 0 0 1-.5.5H1a1 1 0 0 1-1-1V2.5A.5.5 0 0 1 .5 2h1a.5.5 0 0 1 .5.5V12h13.5a.5.5 0 0 1 .5.5Z"
      opacity={0.4}
    />
    <path
      fill="#213F7D"
      d="M8.6 3H7.4c-.2 0-.4.2-.4.4v6.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V3.4c0-.2-.2-.4-.4-.4Zm-3 4H4.4c-.2 0-.4.2-.4.4v2.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V7.4c0-.2-.2-.4-.4-.4Zm9-5h-1.2c-.2 0-.4.2-.4.4v7.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V2.4c0-.2-.2-.4-.4-.4Zm-3 3h-1.2c-.2 0-.4.2-.4.4v4.2c0 .2.2.4.4.4h1.2c.2 0 .4-.2.4-.4V5.4c0-.2-.2-.4-.4-.4Z"
    />
  </svg>
)
export default SvgComponent
