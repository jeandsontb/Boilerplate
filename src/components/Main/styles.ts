import styled from 'styled-components';

export default {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    background-color: #06092b;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 3rem;
  `,

  Logo: styled.img`
    width: 25rem;
    margin-bottom: 2rem;
  `,

  Title: styled.h1`
    font-size: 2.5rem;
  `,

  Description: styled.h2`
    font-size: 2rem;
    font-weight: 400;
  `,

  Illustration: styled.img`
    margin-top: 3rem;
    width: min(30rem, 100%);
  `
};
