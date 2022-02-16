import styled from 'styled-components'

export const List = styled.ul`

list-style: none;
padding: 0;
display : ${props => {
    if (props.buttons) {
      return 'flex';
    }

  }};

`;


export const ListEl = styled.li`
display : ${props => {
    if (props.stats) {
      return 'flex';
  };
}};

:not(:last-child) {
  margin-right: ${props => {
  if (props.button) {
    return '10px';
  };
  }};
}

`;


export const Button = styled.button`
width: 100px;
  `;


export const StatText = styled.p`
  margin-top: 0;

  :not(:last-child) {
    margin-bottom: 10px;
  }

    :not(:last-child) {
    margin-right: 10px;
  }
`;

