import React from 'react'

function LockImg({ cN }) {
  return (
    <svg
      width="24.750000"
      height="24.750000"
      viewBox="0 0 24.75 24.75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs>
        <clipPath id="clip161_170">
          <rect
            id="lock 1"
            rx="0.000000"
            width="24.000000"
            height="24.000000"
            transform="translate(0.375000 0.375000)"
            fill="white"
            fill-opacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="lock 1"
        rx="0.000000"
        width="24.000000"
        height="24.000000"
        transform="translate(0.375000 0.375000)"
        fill-opacity="0"
        className={cN}
      />
      <g clip-path="url(#clip161_170)">
        <path
          id="Vector"
          d="M19.79 11.15L19.41 11.15L19.41 7.8C19.41 3.92 16.25 0.76 12.37 0.76C8.49 0.76 5.33 3.92 5.33 7.8L5.33 11.15L4.95 11.15C3.72 11.15 2.72 12.15 2.72 13.38L2.72 21.83C2.72 23.06 3.72 24.05 4.95 24.05L19.8 24.05C21.03 24.05 22.03 23.06 22.03 21.83L22.03 13.38C22.03 12.15 21.03 11.15 19.8 11.15L19.79 11.15ZM7.57 7.8C7.57 5.16 9.72 3 12.37 3C15.02 3 17.17 5.16 17.17 7.8L17.17 11.15L7.57 11.15L7.57 7.8Z"
          fill-opacity="1.000000"
          fill-rule="nonzero"
          className={cN}
        />
      </g>
    </svg>
  )
}

export default LockImg
