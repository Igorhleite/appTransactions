import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}
export const Theme = styled.div`
position: absolute;
top:80px;
left:20px;
`
export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.primary};
  padding: 30px 0;


  

  header {
    width: 1120px;
    margin: 0 auto;
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
