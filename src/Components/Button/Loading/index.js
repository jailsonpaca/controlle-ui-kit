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
  width: 100%;
  text-align: center;
  display: flex;
  gap: 5px;
  > div {
    width: 10px;
    height: 10px;
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
