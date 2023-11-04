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
    <path
      fill="#F55F44"
      d="M1.962.4v16.012h6.354v-1.2H3.162V1.6H9.2v4.358h4.116v3.696h1.2V4.926L10.087.4H1.962ZM10.4 2.436l2.274 2.322H10.4V2.436Z"
    />
    <path
      fill="#F55F44"
      d="M4.394 8.352h7.21v1.2h-7.21v-1.2ZM4.394 10.952h3.61v1.2h-3.61v-1.2ZM18.038 17.942V12.4c0-1.628-3.846-1.674-4.284-1.674-.439 0-4.282.05-4.282 1.674v5.58c0 .06.01.12.03.178.342 1.402 3.836 1.442 4.254 1.442.418 0 4.2-.048 4.28-1.626l.002-.032Zm-1.2-3.8c-.238.22-1.338.578-3.082.578-1.745 0-2.836-.358-3.084-.57v-.516c1.168.426 2.8.444 3.084.444.284 0 1.916-.02 3.084-.444l-.002.508Zm-6.166 1.334c1.168.426 2.8.444 3.084.444.284 0 1.916-.02 3.084-.444V16c-.248.212-1.34.57-3.085.57-1.744 0-2.835-.37-3.083-.57v-.524Zm3.084-3.546c1.5 0 2.518.265 2.932.474-.414.2-1.432.474-2.932.474s-2.52-.264-2.932-.478c.412-.2 1.43-.47 2.932-.47Zm-3.084 5.904v-.516c1.168.426 2.8.444 3.084.444.284 0 1.916-.02 3.084-.444v.516c-.25.212-1.34.566-3.084.566-1.745 0-2.836-.354-3.084-.566Z"
    />
  </svg>
)
export default SvgComponent
