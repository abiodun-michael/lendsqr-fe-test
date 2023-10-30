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
      stroke="#213F7D"
      strokeWidth={0.4}
      d="M19.7 13.691a10.708 10.708 0 0 0 3.158 7.527.607.607 0 0 1 .134.662v.002a.607.607 0 0 1-.564.373M19.7 13.69l2.729 8.364M19.7 13.69v-2.027a6.816 6.816 0 0 0-4.879-6.613 2.231 2.231 0 1 0-3.873-2.167 2.231 2.231 0 0 0 .225 2.164A6.697 6.697 0 0 0 6.3 11.492v2.105a10.707 10.707 0 0 1-3.158 7.621.607.607 0 0 0-.133.662v.001a.607.607 0 0 0 .563.374M19.7 13.69l-9.678 8.564m12.406 0 .001-.2m0 .2v-.2m0 .2h-6.45m6.45-.2h-6.618m.167.2c.012-.056.022-.113.03-.17l-.197-.03m.167.2a3.044 3.044 0 0 1-5.956 0m5.956 0h-.167v-.2m0 0-5.789.2m0 0h.167v-.2l-.198.03c.009.057.02.114.031.17Zm0 0h-6.45m0 0v-.2.2Zm11.157 0a1.831 1.831 0 0 1-3.457 0h3.457ZM7.512 11.492a5.488 5.488 0 0 1 5.753-5.487 5.57 5.57 0 0 1 5.222 5.655v1.936a11.903 11.903 0 0 0 2.587 7.446H4.925a11.901 11.901 0 0 0 2.587-7.446v-2.104ZM13 2.755a1.02 1.02 0 1 1 0 2.038 1.02 1.02 0 0 1 0-2.038Z"
    />
  </svg>
)
export default SvgComponent
