import { Box } from "@chakra-ui/react";

const BurstTwo = () => {
  return (
    <Box position="absolute" right="0" top="15%">
      <svg
        width="864"
        height="956"
        xmlns="http://www.w3.org/2000/svg"
        position="relative"
        z-index="-1"
      >
        <g opacity="1" filter="url(#filter0_f_39_19)">
          <path
            opacity="0.2"
            d="M649.575 387.775C629.383 349.384 590.677 324.258 547.392 321.442L470.352 316.43C425.933 313.54 383.346 334.567 358.633 371.591L323.135 424.774C295.203 466.619 295.18 521.157 323.074 563.026L346.569 598.291C369.674 632.972 408.587 653.805 450.259 653.805L572.428 653.805C620.099 653.805 663.591 626.605 684.455 583.742L689.627 573.118C706.981 537.465 706.33 495.681 687.871 460.587L649.575 387.775Z"
            fill="url(#paint0_linear_39_19)"
            fillOpacity="0.5"
          />
          <path
            d="M679.263 374.618C659.006 336.103 620.174 310.895 576.748 308.07L499.458 303.041C454.894 300.142 412.169 321.238 387.376 358.381L351.762 411.737C323.74 453.719 323.716 508.433 351.702 550.439L375.272 585.819C398.453 620.612 437.492 641.513 479.3 641.513L601.866 641.513C649.691 641.513 693.325 614.224 714.257 571.222L719.445 560.564C736.857 524.795 736.203 482.875 717.685 447.667L679.263 374.618Z"
            fill="url(#paint1_linear_39_19)"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_39_19"
            x="-66"
            y="-95"
            width="1189.62"
            height="1174"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="151"
              result="effect1_foregroundBlur_39_19"
            />
          </filter>
          <linearGradient
            id="paint0_linear_39_19"
            x1="713.247"
            y1="411.023"
            x2="273.559"
            y2="721.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3C1FEF" />
            <stop offset="1" stopColor="#8FD4F5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_39_19"
            x1="743.143"
            y1="397.942"
            x2="302.025"
            y2="709.429"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3C1FEF" />
            <stop offset="0.0001" stopColor="#3C1FEF" />
            <stop offset="1" stopColor="#8FD4F5" />
            <stop offset="1" stopColor="#8FD4F5" />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default BurstTwo;
