import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isDark, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="466.000000pt" height="145.000000pt" viewBox="0 0 466.000000 145.000000"
     preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,145.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M333 1057 l-212 -122 -1 -256 0 -256 220 -127 220 -127 220 126 220
    127 0 154 0 154 -107 0 c-62 0 -102 4 -95 9 9 5 12 23 10 50 l-3 42 -122 71
    -123 71 -122 -71 -123 -71 -3 -153 -2 -153 42 -23 c24 -12 46 -22 51 -22 4 0
    7 65 7 144 l0 144 44 26 c25 14 47 26 50 26 3 0 6 -92 6 -205 l0 -205 25 -12
    c19 -8 31 -8 50 0 l25 12 0 205 c0 113 3 205 6 205 3 0 25 -12 50 -26 l44 -26
    0 -144 c0 -79 3 -144 8 -144 4 0 26 10 49 22 40 21 42 25 45 73 l3 50 43 3 42
    3 0 -74 0 -75 -166 -96 c-91 -53 -170 -96 -174 -96 -4 0 -83 43 -174 96 l-166
    96 0 197 0 196 170 97 170 98 170 -98 c116 -66 169 -102 170 -114 0 -15 9 -18
    50 -18 l50 0 0 48 -1 47 -213 123 c-118 67 -220 122 -227 122 -8 -1 -109 -56
    -226 -123z"/>
    <path d="M1150 670 l0 -160 30 0 30 0 1 123 1 122 24 -85 c13 -47 29 -102 34
    -122 10 -35 13 -38 48 -38 l38 0 34 128 35 127 3 -127 3 -128 29 0 30 0 0 161
    0 160 -52 -3 -51 -3 -24 -90 c-13 -49 -29 -108 -35 -130 l-11 -40 -17 65 c-10
    36 -25 95 -35 133 l-18 67 -48 0 -49 0 0 -160z"/>
    <path d="M1560 670 l0 -160 105 0 105 0 0 25 c0 24 -2 25 -75 25 l-75 0 0 40
    0 40 70 0 70 0 0 30 0 30 -71 0 -70 0 3 38 3 37 73 3 c69 3 72 4 72 27 0 25 0
    25 -105 25 l-105 0 0 -160z"/>
    <path d="M1810 805 c0 -23 3 -25 50 -25 l50 0 0 -135 0 -135 30 0 29 0 3 133
    3 132 53 3 c48 3 52 5 52 28 l0 24 -135 0 -135 0 0 -25z"/>
    <path d="M2121 683 c-30 -82 -56 -154 -59 -160 -3 -9 6 -13 26 -13 26 0 32 5
    42 35 l12 35 68 0 68 0 12 -35 c10 -29 16 -35 41 -35 16 0 29 3 29 6 0 3 -25
    75 -57 160 l-56 154 -36 0 -36 0 -54 -147z m112 20 c9 -27 17 -51 17 -55 0 -5
    -18 -8 -40 -8 -22 0 -40 3 -40 6 0 14 35 104 40 104 3 0 14 -21 23 -47z"/>
    <path d="M2582 810 c-48 -30 -72 -75 -72 -140 0 -74 24 -119 81 -148 37 -20
    54 -23 106 -18 98 8 103 13 103 101 l0 75 -65 0 c-63 0 -65 -1 -65 -25 0 -22
    4 -25 36 -25 34 0 35 -1 32 -32 -2 -27 -8 -33 -33 -38 -74 -15 -135 31 -135
    102 0 88 64 135 153 110 36 -9 44 -9 55 5 18 24 15 32 -14 43 -45 18 -146 12
    -182 -10z"/>
    <path d="M2952 803 c-26 -65 -102 -277 -102 -285 0 -4 13 -8 28 -8 23 0 30 6
    41 35 l12 35 65 0 c65 0 65 0 80 -35 12 -29 19 -35 44 -35 17 0 30 1 30 3 0 1
    -26 72 -58 157 l-57 155 -36 3 c-32 3 -38 -1 -47 -25z m82 -141 c7 -21 4 -22
    -37 -22 l-44 0 21 60 21 60 16 -37 c9 -21 19 -48 23 -61z"/>
    <path d="M3200 671 l0 -161 25 0 25 0 0 123 c0 75 4 117 9 108 5 -8 22 -63 37
    -123 l29 -108 37 0 37 0 20 68 c11 37 26 92 35 122 l14 55 1 -122 1 -123 30 0
    30 0 0 160 0 160 -49 0 -48 0 -33 -130 c-19 -71 -35 -128 -37 -126 -2 2 -19
    59 -36 127 l-33 124 -47 3 -47 3 0 -160z"/>
    <path d="M3610 670 l0 -160 30 0 30 0 0 160 0 160 -30 0 -30 0 0 -160z"/>
    <path d="M3750 670 l0 -160 25 0 25 0 0 127 c0 69 3 123 6 120 4 -4 30 -60 59
    -124 l51 -118 47 -3 47 -3 0 160 0 161 -30 0 -29 0 -3 -126 -3 -125 -54 125
    -54 126 -44 0 -43 0 0 -160z"/>
    <path d="M4140 808 c-45 -30 -70 -80 -70 -141 0 -109 76 -175 190 -164 93 8
    100 15 100 102 l0 75 -65 0 c-63 0 -65 -1 -65 -25 0 -22 4 -25 36 -25 34 0 35
    -1 32 -32 -2 -27 -8 -33 -33 -38 -76 -16 -135 31 -135 106 0 34 6 51 29 76 25
    29 36 33 78 33 26 0 60 -4 74 -8 22 -7 27 -5 32 15 9 34 -7 43 -91 46 -68 3
    -81 1 -112 -20z"/>
    </g>
    </svg>
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
