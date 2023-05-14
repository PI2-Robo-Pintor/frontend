import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {

}

const RobotSatisfied = (props: Props) => (
  <svg
    width={165}
    height={140}
    viewBox="0 0 165 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <g>
        <path
          d="M42.0445 9.1473C58.9541 -3.84568 100.02 0.812234 100.02 0.812234V34.6433L30.4053 34.6433C30.4053 34.6433 25.1348 22.1403 42.0445 9.1473Z"
          fill="#4EA09B"
        />
        <path
          d="M122.494 9.1473C105.585 -3.84568 64.5182 0.812234 64.5182 0.812234V34.6433L134.133 34.6433C134.133 34.6433 139.404 22.1403 122.494 9.1473Z"
          fill="#4EA09B"
        />
      </g>
      <path
        d="M42.5 21.0383C42.5 19.452 41.3742 18.0001 38.8579 18.0001C36.3416 18.0001 35 19.4521 35 21.0384C35 22.6248 36.3416 20.0384 38.8579 20.0384C41.3742 20.0384 42.5 22.6247 42.5 21.0383Z"
        fill="black"
      />
      <path
        d="M52 21.0383C52 19.452 53.2589 18 55.7752 18C58.2916 18 59.5 19.4521 59.5 21.0384C59.5 22.6248 58.2916 20.0384 55.7752 20.0384C53.2589 20.0384 52 22.6247 52 21.0383Z"
        fill="black"
      />
    </g>
    <g>
      <rect
        x={24.8738}
        y={37.9534}
        width={115.085}
        height={45.0847}
        rx={6}
        fill="#4EA09B"
      />
      <rect
        x={20.1281}
        y={86.6101}
        width={124.576}
        height={53.3898}
        rx={6}
        fill="#4EA09B"
      />
      <g>
        <path
          d="M5.83826 63L24.0546 94.7262"
          stroke="#4EA09B"
          strokeWidth={8}
        />
        <path
          d="M3.86865 67.8352L34.8964 51.9999"
          stroke="#4EA09B"
          strokeWidth={8}
        />
      </g>
      <g>
        <path
          d="M159.162 63L140.945 94.7262"
          stroke="#4EA09B"
          strokeWidth={8}
        />
        <path
          d="M161.131 67.8352L130.103 51.9999"
          stroke="#4EA09B"
          strokeWidth={8}
        />
      </g>
    </g>
  </svg>
);

export { RobotSatisfied };
