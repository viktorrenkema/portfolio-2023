import { Transition, motion } from "framer-motion";

interface Props {
  variants?: any;
  initial?: string;
  animate?: string;
  transition?: Transition;
}

export function Ticketswap({ variants, initial, animate, transition }: Props) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="244"
      height="35"
      variants={variants}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <path
        d="M 30.388 21.2 C 31.023 20.579 31.476 19.795 31.697 18.934 L 40.993 28.189 C 40.492 28.871 39.935 29.509 39.328 30.099 C 32.43 36.988 21.215 36.989 14.293 30.099 L 0 15.85 L 6.259 9.624 C 6.968 8.91 7.932 8.508 8.938 8.508 C 9.944 8.508 10.908 8.91 11.617 9.624 L 23.246 21.2 C 24.193 22.147 25.478 22.679 26.817 22.679 C 28.156 22.679 29.441 22.147 30.388 21.2 Z M 39.328 5.164 L 53.632 19.414 L 47.378 25.659 C 45.892 27.13 43.499 27.13 42.013 25.659 L 30.388 14.066 C 28.41 12.109 25.224 12.109 23.246 14.066 C 22.619 14.693 22.167 15.473 21.936 16.329 L 12.642 7.074 C 13.148 6.401 13.7 5.763 14.293 5.164 C 21.215 -1.721 32.43 -1.721 39.328 5.164 Z M 203.564 36.065 L 203.564 12.562 L 207.552 12.562 L 207.552 13.702 C 208.795 12.691 210.247 12.274 211.836 12.274 C 216.378 12.274 220 15.836 220 20.278 C 220 24.708 216.378 28.318 211.836 28.318 C 210.247 28.318 208.796 27.9 207.552 26.908 L 207.552 36.066 L 203.564 36.066 Z M 196.911 27.899 L 196.911 26.906 C 195.687 27.899 194.224 28.316 192.644 28.316 C 188.103 28.316 184.475 24.707 184.475 20.277 C 184.475 15.835 188.103 12.273 192.645 12.273 C 194.205 12.273 195.662 12.69 196.911 13.701 L 196.911 12.561 L 200.905 12.561 L 200.905 27.899 Z M 175.018 27.899 L 171.56 18.112 L 168.23 27.899 L 164.086 27.899 L 158.602 12.562 L 163.076 12.562 L 166.185 22.639 L 169.815 12.562 L 173.315 12.562 L 176.873 22.639 L 180.024 12.562 L 184.519 12.562 L 178.985 27.9 L 175.017 27.9 Z M 148.184 23.12 C 149.605 24.352 151.321 24.707 152.422 24.707 C 153.849 24.707 154.3 24.127 154.3 23.584 C 154.3 21.29 146.489 22.704 146.489 17.183 C 146.489 14.375 148.506 12.273 151.929 12.273 C 153.301 12.273 155.788 12.593 157.543 14.214 L 155.433 17.053 C 154.072 16.123 152.808 15.899 151.963 15.899 C 150.635 15.899 150.376 16.475 150.376 16.863 C 150.376 19.028 158.089 17.984 158.089 23.456 C 158.089 26.261 156.044 28.316 152.165 28.316 C 149.303 28.316 147.465 27.226 146.071 26.166 Z M 143.61 27.931 C 143.61 27.931 142.446 28.316 140.537 28.316 C 137.529 28.316 135.963 26.358 135.963 23.343 L 135.963 16.379 L 133.532 16.379 L 133.532 12.562 L 135.963 12.562 L 135.963 7.366 L 139.959 7.366 L 139.959 12.561 L 144.039 12.561 L 144.039 16.379 L 139.959 16.379 L 139.959 22.507 C 139.959 23.584 140.248 24.576 141.675 24.576 C 142.679 24.576 143.61 24.416 143.61 24.416 Z M 121.065 21.547 C 121.517 23.424 123.037 24.737 125.34 24.737 C 126.745 24.737 128.23 24.224 129.13 23.024 L 131.853 25.188 C 130.459 27.162 127.993 28.316 125.37 28.316 C 120.733 28.316 117.166 24.869 117.166 20.373 C 117.166 16.027 120.253 12.273 125.148 12.273 C 129.675 12.273 132.889 15.963 132.889 20.277 C 132.889 20.714 132.859 21.161 132.793 21.547 Z M 113.119 27.899 L 107.037 21.066 L 107.037 27.899 L 103.05 27.899 L 103.05 4.012 L 107.037 4.012 L 107.037 18.514 L 112.605 12.561 L 117.723 12.561 L 110.991 19.573 L 118.38 27.899 Z M 101.435 24.546 C 99.997 26.811 97.408 28.316 94.462 28.316 C 89.918 28.316 86.288 24.707 86.288 20.277 C 86.288 15.835 89.918 12.273 94.462 12.273 C 97.374 12.273 99.913 13.733 101.369 15.931 L 97.961 17.888 C 97.156 16.756 95.85 16.086 94.461 16.091 C 92.137 16.091 90.221 18.016 90.221 20.277 C 90.221 22.573 92.137 24.513 94.461 24.513 C 95.981 24.513 97.309 23.743 98.061 22.541 Z M 80.445 27.899 L 80.445 12.562 L 84.443 12.562 L 84.443 27.9 L 80.446 27.9 Z M 79.932 7.493 C 79.932 6.082 81.022 5.006 82.462 5.006 C 83.883 5.006 84.956 6.081 84.956 7.493 C 84.957 8.919 83.884 10.012 82.463 10.012 C 81.023 10.012 79.932 8.919 79.932 7.493 Z M 76.751 27.932 C 76.751 27.932 75.594 28.317 73.678 28.317 C 70.668 28.317 69.102 26.359 69.102 23.344 L 69.102 16.38 L 66.672 16.38 L 66.672 12.562 L 69.102 12.562 L 69.102 7.366 L 73.1 7.366 L 73.1 12.561 L 77.18 12.561 L 77.18 16.379 L 73.1 16.379 L 73.1 22.507 C 73.1 23.584 73.386 24.576 74.814 24.576 C 75.809 24.576 76.751 24.416 76.751 24.416 L 76.751 27.931 Z M 207.552 20.472 C 207.653 22.672 209.532 24.514 211.836 24.514 C 214.169 24.514 216.072 22.574 216.072 20.278 C 216.072 18.018 214.169 16.092 211.836 16.092 C 209.533 16.092 207.653 17.953 207.552 20.118 L 207.552 20.473 Z M 192.644 16.092 C 190.314 16.092 188.402 18.017 188.402 20.278 C 188.402 22.574 190.313 24.514 192.644 24.514 C 195.014 24.514 196.911 22.574 196.911 20.278 C 196.911 18.018 195.013 16.092 192.644 16.092 Z M 128.873 18.644 C 128.648 17.087 127.021 15.9 125.113 15.9 C 123.261 15.9 121.773 16.99 121.195 18.644 L 128.872 18.644 Z"
        fill="hsl(0, 0%, 100%)"
      ></path>
    </motion.svg>
  );
}