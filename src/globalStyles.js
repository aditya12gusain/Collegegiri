import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    scroll-behavior: smooth;
    
  }

  #root{
    position: relative
  }

  .wrapper{
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 40px;
    height: 40px;
  }

  .container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  }

.container > img {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
  }

.item {
  width: inherit;
  height: inherit;
  background: white;
  transform-origin: 50% 100%;
}
`;
