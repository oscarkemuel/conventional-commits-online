import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 24px;

  h1{
    text-align: center;
    color: var(--title);
  }
`;

export const Content = styled.section`
  margin-top: 2rem;

  h2 {
    color: var(--title-highlight);
  }

  p.text{
    margin: 1rem 0;
  }
`

export const ContetForm = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;

  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .control {
    display: flex;
    gap: 10px;
    flex-direction: column;
    max-width: 400px;
  }

  select {
    padding: 0.5rem;
    background: var(--background-content);
    color: var(--white);
    border: 1px solid var(--gray-line)
  }

  input, textarea {
    padding: 0.5rem;
    background: var(--background-content);
    color: var(--white);
    border: 1px solid var(--gray-line)
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-content);
  padding: 1rem;
  /* margin-left: 10px; */
  color: var(--green);

  p{
    line-height: 30px;

    span {
      color: var(--title);
    }
  }

  button.command {
    margin-bottom: 1rem;
    background-color: transparent;
    color: var(--red);

    :hover {
      cursor: pointer;
      color: var(--text);
    }
  }

  @media(max-width: 768px){
    margin: 0;
  }
`;