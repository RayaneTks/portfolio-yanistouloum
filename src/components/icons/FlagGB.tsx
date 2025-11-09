export const FlagGB = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="United Kingdom flag"
  >
    <defs>
      <clipPath id="a">
        <path fillOpacity=".7" d="M-85.3 0h682.6v512h-682.6z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)" transform="translate(80) scale(.94)">
      <g strokeWidth="1pt">
        <path fill="#006" d="M-256 0H768v512H-256z" />
        <path
          fill="#fff"
          d="M-256 0v57.2l909.5 454.8H768v-57.2L-141.5 0H-256zM768 0v57.2l-909.5 454.8H-256v-57.2L654.5 0H768z"
        />
        <path
          fill="#fff"
          d="M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"
        />
        <path
          fill="#c00"
          d="M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4l-341.7 170.7zm0-512L85.3 170.7H8.9L-256 38.2V0zm606.4 170.7L691.7 0h76.4L426.7 170.7h-76.3zM768 512L426.7 341.3h76.4L768 473.8V512z"
        />
      </g>
    </g>
  </svg>
);

