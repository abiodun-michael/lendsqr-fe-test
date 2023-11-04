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
    <rect width={24} height={24} fill="#213F7D" fillOpacity={0.1} rx={4} />
    <path
      fill="#213F7D"
      d="M8.994 7.943c-.841-.841.463-2.103 1.261-1.261l4.75 4.75a.842.842 0 0 1 0 1.261l-4.624 4.667c-.84.799-2.102-.463-1.26-1.303l3.993-3.994-4.12-4.12Z"
    />
  </svg>
)
export default SvgComponent
