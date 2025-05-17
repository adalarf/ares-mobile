import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={13}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.33 5.661L1.943.285a1.35 1.35 0 10-.842 2.564l7.948 2.449c2.052.632 1.802 3.612-.326 3.894l-7.264.96a1.358 1.358 0 10.469 2.673l15.17-3.322c1.97-.431 2.136-3.177.232-3.842z"
        fill="#EEEBEF"
        fillOpacity={0.92}
      />
    </Svg>
  );
}

export default SvgComponent;