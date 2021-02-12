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
        d="M5 9.00001L9.3753 5.49977C9.74052 5.2076 10.2595 5.2076 10.6247 5.49977L15 9.00001M10 6.00001V12M5 15H15"
        stroke={iconcolor}
        strokeWidth="2"
      />
    </>
  ),
  save: (
    <>
      <path
        d="M15 11L10.6247 14.5002C10.2595 14.7924 9.74052 14.7924 9.3753 14.5002L5 11M10 8V15M15 8V7C15 5.89543 14.1046 5 13 5H7C5.89543 5 5 5.89543 5 7V8"
        stroke={iconcolor}
        strokeWidth="2"
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
  )
};

export default icons;
