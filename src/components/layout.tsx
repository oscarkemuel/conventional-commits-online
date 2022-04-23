import React, { ReactChild, ReactChildren } from "react"
// import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  :root{
    --white: #fff;
    --background: #1E1E26;
    --background-content: #161b22;
    --gray-line: #30363d;
    --text: #f0f6fc;
    --text-highlight: #8b949e;
    --title: #a5d6ff;
    --title-highlight: #7ee787;
    --red: #E83F5B;
    --green: #7ee787;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }
  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.05%;
    }
  }
  body {
    background: var(--background);
    color: var(--text);
  }
  body, input, textarea, button{
    font: 400 1rem "Roboto", sans-serif;
  }
  a{
    color: inherit;
    text-decoration: nome;
  }
  p{
    margin: 0;
    line-height: 20px;
    /* color: var(--text); */
  }
  label{
    font-size: 0.8rem;
    color: var(--text-highlight);
  }
  pre {
    width: 100%;
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--background-content);
    border-radius: 3px;
    word-wrap: normal;
  }

  code {
    color: var(--title-highlight);
  }
`;

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children }: AuxProps) {
  return (
    <>
      <ToastContainer />
      <GlobalStyle  />
      {children}
    </>
  )
}