import styled from 'styled-components'

export const Heading = styled.p`
  font-family: Roboto;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
`
