// 전역적인 스타일 설정
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  #root, body, html {
    //
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
  /*background-color: {theme.dark.background};*/
 
  }
  * {
  font-family: "Roboto",sans-serif;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      border-radius: 18px;
    }
  }
  body{
     
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a{
    margin:0;
    padding:0;
    color:inherit;
    text-decoration: none;
    cursor:pointer;
  }
  input-security, button{
      background-color: transparent;
      border:none;
      outline:none;
  }
 a:hover, button:hover {
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6{
      font-family: "Maven Pro", sans-serif;
  }
  img{
  display: block;
    width:100%;
    height:100%;
  }
  ol,ul,li{
      list-style:none;
  }
`;

export default GlobalStyle;
