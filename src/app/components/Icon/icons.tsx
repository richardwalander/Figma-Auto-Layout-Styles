import * as React from "react";

const iconcolor = "var(--dark-clr)";

const icons = {
  plus: (
    <>
      <path d="M11 4H9V9H4V11H9V16H11V11H16V9H11V4Z" fill={iconcolor} />
    </>
  ),
  upload: (
    <>
      <path
        d="M9 16H6C4.58579 16 3.87868 16 3.43934 15.5607C3 15.1213 3 14.4142 3 13V6C3 5.05719 3 4.58579 3.29289 4.29289C3.58579 4 4.05719 4 5 4H7C7.55228 4 8 4.44772 8 5V5C8 5.55228 8.44772 6 9 6H12.5C12.9647 6 13.197 6 13.3902 6.03843C14.1836 6.19624 14.8038 6.81644 14.9616 7.60982C15 7.80302 15 8.03534 15 8.5V8.5"
        stroke={iconcolor}
        strokeWidth="2"
      />
      <path
        d="M5.61905 11.1111C6.17011 10.0825 6.44565 9.56812 6.92008 9.28406C7.39451 9 7.978 9 9.14497 9H13.3235C15.4114 9 16.4553 9 16.8629 9.68082C17.2706 10.3616 16.7776 11.2818 15.7917 13.1222L15.381 13.8889C14.8299 14.9175 14.5544 15.4319 14.0799 15.7159C13.6055 16 13.022 16 11.855 16H6.34034C4.84903 16 4.10337 16 3.8122 15.5137C3.52103 15.0274 3.87315 14.3701 4.57738 13.0556L5.61905 11.1111Z"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  save: (
    <>
      <path d="M7 13H13V11H7V13Z" fill={iconcolor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6886 2.99981C11.45 2.99851 12.1264 2.99735 12.7354 3.28177C13.3445 3.56618 13.7778 4.08556 14.2655 4.67017L14.3659 4.7903L15.912 6.63696C16.2966 7.09508 16.6377 7.50126 16.8197 8.00217C17.0017 8.50308 17.0009 9.03343 17.0001 9.6316L17 13.0616C17.0001 13.7157 17.0001 14.3034 16.9362 14.7791C16.8663 15.2985 16.7042 15.8313 16.2678 16.2678C15.8313 16.7042 15.2985 16.8663 14.7792 16.9361C14.3035 17.0001 13.7157 17.0001 13.0616 17H6.9384C6.28427 17.0001 5.69656 17.0001 5.22085 16.9361C4.70149 16.8663 4.16868 16.7042 3.73224 16.2678C3.2958 15.8313 3.13367 15.2985 3.06384 14.7791C2.99989 14.3034 2.99994 13.7157 3 13.0616V6.93838C2.99994 6.28425 2.99989 5.69653 3.06384 5.22083C3.13367 4.70147 3.2958 4.16866 3.73224 3.73222C4.16868 3.29578 4.70149 3.13365 5.22085 3.06382C5.69656 2.99986 6.28428 2.99992 6.9384 2.99998L10.5321 2.99999L10.6886 2.99981ZM7 5V8C7 8.55228 7.44772 9 8 9H11C11.5523 9 12 8.55228 12 8V5.16059C12.1349 5.26134 12.3328 5.47751 12.8323 6.07418L14.3003 7.82754C14.8074 8.43327 14.8937 8.55798 14.9399 8.68517C14.9861 8.81236 15 8.96337 15 9.75335V13C15 13.7354 14.9979 14.1863 14.954 14.5126C14.9154 14.7995 14.8606 14.8474 14.8541 14.8531L14.8531 14.8541C14.8474 14.8606 14.7995 14.9154 14.5127 14.954C14.1863 14.9979 13.7354 15 13 15H7.00001C6.26463 15 5.8137 14.9979 5.48735 14.954C5.20051 14.9154 5.15261 14.8606 5.14693 14.8541L5.14593 14.8531C5.13942 14.8474 5.08457 14.7995 5.04601 14.5126C5.00213 14.1863 5.00001 13.7354 5.00001 13V6.99999C5.00001 6.26461 5.00213 5.81367 5.04601 5.48732C5.08457 5.20048 5.13942 5.15258 5.14593 5.1469L5.14692 5.14591C5.15261 5.1394 5.2005 5.08455 5.48735 5.04599C5.8137 5.00211 6.26462 5 7 5Z"
        fill={iconcolor}
      />
    </>
  ),
  tick: (
    <>
      <path
        d="M15 7L9.66759 13.9806C9.27228 14.4981 8.4957 14.5057 8.09032 13.9961L5 10.1111"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  bin: (
    <>
      <path
        d="M8 5H12M13.1172 15H6.88278C6.37846 15 5.95306 14.6245 5.8905 14.124L5 7H15L14.1095 14.124C14.0469 14.6245 13.6215 15 13.1172 15Z"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  fold: (
    <>
      <path
        d="M15 8L10.5958 12.3011C10.2006 12.6871 9.56733 12.6795 9.18149 12.2842L5 8"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  lock: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9V10H7V9ZM5 11V9C5 6.23858 7.23858 4 10 4C12.7614 4 15 6.23858 15 9V11V15C15 15.5523 14.5523 16 14 16H6C5.44772 16 5 15.5523 5 15V11ZM13 12V14H7V12H13Z"
        fill={iconcolor}
      />
    </>
  ),
  unlock: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8C8 6.89543 8.89543 6 10 6H10.5C11.8807 6 13 7.11929 13 8.5V10H6C5.44772 10 5 10.4477 5 11V15C5 15.5523 5.44772 16 6 16H14C14.5523 16 15 15.5523 15 15V11V8.5C15 6.01472 12.9853 4 10.5 4H10C7.79086 4 6 5.79086 6 8H8ZM13 12V14H7V12H13Z"
        fill={iconcolor}
      />
    </>
  ),
  cross: (
    <>
      <path
        d="M14.9498 6.46445L13.5356 5.05023L10.0001 8.58575L6.46453 5.05023L5.05032 6.46445L8.58584 9.99997L5.05029 13.5355L6.46451 14.9497L10.0001 11.4142L13.5356 14.9497L14.9498 13.5355L11.4143 9.99997L14.9498 6.46445Z"
        fill={iconcolor}
      />
    </>
  ),
  kebab: (
    <>
      <path
        d="M7 10C7 10.8284 6.32843 11.5 5.5 11.5C4.67157 11.5 4 10.8284 4 10C4 9.17157 4.67157 8.5 5.5 8.5C6.32843 8.5 7 9.17157 7 10Z"
        fill={iconcolor}
      />
      <path
        d="M11.5 10C11.5 10.8284 10.8284 11.5 10 11.5C9.17157 11.5 8.5 10.8284 8.5 10C8.5 9.17157 9.17157 8.5 10 8.5C10.8284 8.5 11.5 9.17157 11.5 10Z"
        fill={iconcolor}
      />
      <path
        d="M16 10C16 10.8284 15.3284 11.5 14.5 11.5C13.6716 11.5 13 10.8284 13 10C13 9.17157 13.6716 8.5 14.5 8.5C15.3284 8.5 16 9.17157 16 10Z"
        fill={iconcolor}
      />
    </>
  ),
  update: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10H14C14 7.79086 12.2091 6 10 6Z"
        fill={iconcolor}
      />
      <path d="M11 10H19L15 15L11 10Z" fill={iconcolor} />
    </>
  ),
  info: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"
        fill={iconcolor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13V10H11V13H9Z"
        fill={iconcolor}
      />
      <path
        d="M11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8Z"
        fill={iconcolor}
      />
    </>
  ),
  toRight: (
    <>
      <path
        d="M10 5L14.9194 10.0373C14.9639 10.0829 14.963 10.1559 14.9174 10.2005V10.2005M10 15L14.9174 10.2005M14.9174 10.2005L4.5 10.2005"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  toDown: (
    <>
      <path
        d="M15 10.5L9.96275 15.4194C9.91714 15.4639 9.84407 15.463 9.79954 15.4174M9.79954 15.4174L5 10.5M9.79954 15.4174L9.79954 5"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  )
};

<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15 10.5L9.96275 15.4194C9.91714 15.4639 9.84407 15.463 9.79954 15.4174M9.79954 15.4174L5 10.5M9.79954 15.4174L9.79954 5"
    stroke="#353738"
    stroke-width="2"
  />
</svg>;

export default icons;
