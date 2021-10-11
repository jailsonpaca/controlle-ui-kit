import React from "react";
import styled from "styled-components";

export const Loading = (props) => (
  <Spinner {...props}>
    <div class="ball1"></div>
    <div class="ball2"></div>
    <div class="ball3"></div>
  </Spinner>
);

const isOutlined = ({ type }) => type === "outlined";

const Spinner = styled.div`
  position: absolute;
  left: calc(50% - 14px);
  top: 40%;
  text-align: center;
  display: flex;
  gap: 4px;
  > div {
    width: 6px;
    height: 6px;
    ${(p) =>
      isOutlined(p) ? "background-color: #444;" : "background-color: #fff;"}
    border-radius: 100%;
    display: inline-block;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  .ball1 {
    animation-delay: -0.32s;
  }

  .ball2 {
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;
