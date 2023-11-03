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
      fillRule="evenodd"
      d="M9.392 12.052a.802.802 0 0 0 1.216 0l2.875-3.195c.336-.373.202-.675-.299-.675H6.816c-.501 0-.632.305-.299.675l2.875 3.195Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
