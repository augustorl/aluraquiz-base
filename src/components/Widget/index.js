import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 18px;
  margin-bottom: 48px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  form {
    display: flex;
  }
  button {
    min-width: 55px;
    height: 36px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
  }
  input:active {
    outline: none;
  }
  button:hover {
    opacity: 0.7;
  }
  h1, h2, h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    text-decoration: underline;
    margin: 10px 0px;
  }
  li:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export default Widget;
