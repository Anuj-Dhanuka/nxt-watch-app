import styled from 'styled-components'

export const Description = styled.p`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => (props.darkTheme ? '#ffffff' : '')};
  height: 100px;
`
export const Name = styled.p`
  font-family: Roboto;
`
