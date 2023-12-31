import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MessageIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} {...props}>
    <Path
      fill="#858EA9"
      stroke="none"
      d="M10.5 0C4.71 0 0 4.24 0 9.45c0 1.821.576 3.586 1.669 5.111-.207 2.288-.761 3.987-1.566 4.791a.35.35 0 0 0 .296.595c.141-.02 3.434-.494 5.816-1.87 1.352.546 2.793.823 4.285.823 5.79 0 10.5-4.24 10.5-9.45C21 4.24 16.29 0 10.5 0ZM5.6 10.85c-.772 0-1.4-.628-1.4-1.4 0-.772.628-1.4 1.4-1.4.772 0 1.4.628 1.4 1.4 0 .772-.628 1.4-1.4 1.4Zm4.9 0c-.772 0-1.4-.628-1.4-1.4 0-.772.628-1.4 1.4-1.4.772 0 1.4.628 1.4 1.4 0 .772-.628 1.4-1.4 1.4Zm4.9 0c-.772 0-1.4-.628-1.4-1.4 0-.772.628-1.4 1.4-1.4.772 0 1.4.628 1.4 1.4 0 .772-.628 1.4-1.4 1.4Z"
      {...props}
    />
  </Svg>
);
export default MessageIcon;
