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
    <g fill="#213F7D">
      <path
        d="M15.5 2H9v2h6.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM.5 4H6V2H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm0 5H10V7H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5Zm15-2H13v2h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5Zm0 5H5v2h10.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM0 12.5v1a.5.5 0 0 0 .5.5H2v-2H.5a.5.5 0 0 0-.5.5Z"
        opacity={0.4}
      />
      <path d="M8.5 1h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm4 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Zm-8 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
    </g>
  </svg>
)
export default SvgComponent
