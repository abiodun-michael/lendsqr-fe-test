import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      fill="#5718FF"
      stroke="#5718FF"
      strokeWidth={0.2}
      d="M5.409 20.776a.55.55 0 0 1-.399-.199.64.64 0 0 1-.134-.334h-.008v-.1c0-1.305.346-2.527.945-3.582H2.435a.551.551 0 0 1-.42-.177.671.671 0 0 1-.159-.444m3.553 4.836-3.453-4.839m3.453 4.839h.007l13.139.002c.32 0 .579-.26.579-.579a7.61 7.61 0 0 0-.969-3.638h3.399c.32 0 .579-.26.579-.58-.03-2.402-1.382-4.433-3.501-5.303a4.052 4.052 0 0 0 1.876-3.419c0-3.463-4.05-5.298-6.614-3.054a5.03 5.03 0 0 0-3.809 0 3.963 3.963 0 0 0-2.613-.983c-4.03 0-5.487 5.352-2.125 7.458m.052 10.096.174-10.077a4.112 4.112 0 0 1-.11-.065l-.116.046m-3.5 5.26.1-.003m-.1.003.1-.003m-.1.003c-.056-2.266 1.422-4.4 3.5-5.26m-3.4 5.257c-.056-2.246 1.429-4.366 3.506-5.192a4.545 4.545 0 0 1-.106-.065m.63 5.781h-.116l.058.1.059-.1ZM18.53 5.221c1.682 1.699.666 4.61-1.652 4.897a5.085 5.085 0 0 0-1.883-5.291 2.82 2.82 0 0 1 3.535.394ZM7.125 10.118c-1.413-.18-2.485-1.4-2.485-2.857 0-2.3 2.51-3.635 4.368-2.434a5.085 5.085 0 0 0-1.883 5.29Zm8.374.422c-1.381 3.001-5.617 3.004-6.998 0-1.223-2.663.741-5.55 3.488-5.551 2.913.036 4.693 2.978 3.51 5.55ZM3.046 15.404a4.482 4.482 0 0 1 4.6-3.984 5.056 5.056 0 0 0 1.985 1.937 7.142 7.142 0 0 0-2.996 2.047h-3.59Zm14.299 0a7.14 7.14 0 0 0-2.983-2.042 5.082 5.082 0 0 0 1.994-1.942 4.48 4.48 0 0 1 4.6 3.984h-3.611ZM6.047 19.62a6.119 6.119 0 0 1 1.724-3.747c3.609-3.648 9.74-1.288 10.16 3.747H6.048Z"
    />
    <path
      fill="#5718FF"
      stroke="#5718FF"
      strokeWidth={0.2}
      d="m13.247 9.798-.008.014a1.401 1.401 0 0 1-2.488-.014.551.551 0 0 0-.774-.243.552.552 0 0 0-.252.771c.957 1.853 3.595 1.853 4.55 0a.552.552 0 0 0-.252-.771.555.555 0 0 0-.776.243Zm.94.483c-.919 1.78-3.454 1.78-4.372 0l3.587-.537c.333-.398 1.052.017.784.537Z"
    />
  </svg>
)
export default SvgComponent
