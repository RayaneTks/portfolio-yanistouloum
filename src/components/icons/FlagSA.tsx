export const FlagSA = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 640 480"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Saudi Arabia flag"
  >
    <path fill="#006c35" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 0h640v320H0z" />
    <g id="c" transform="translate(213.3 240)">
      <path
        id="a"
        fill="none"
        stroke="#006c35"
        strokeWidth="3"
        d="m-10.5 2.2 4.2 13.6-13.5-4.1 13.5-4.1-4.2 13.6"
      />
      <use href="#a" transform="rotate(45)" />
      <use href="#a" transform="rotate(90)" />
      <use href="#a" transform="rotate(135)" />
      <path id="b" fill="#006c35" d="M0 14.2v21.3" />
      <use href="#b" transform="rotate(22.5)" />
      <use href="#b" transform="rotate(45)" />
      <use href="#b" transform="rotate(67.5)" />
    </g>
    <use href="#c" transform="scale(-1 1)" />
    <path
      fill="#006c35"
      d="M213.3 271.3c-4.2 0-7.6-3.4-7.6-7.6s3.4-7.6 7.6-7.6 7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6z"
      transform="scale(-1 1)"
    />
    <path
      fill="none"
      stroke="#006c35"
      strokeWidth="2"
      d="M213.3 240v30M213.3 240v30"
      transform="scale(-1 1)"
    />
  </svg>
);

