import styled from 'styled-components'

const Heading = styled.p`
  font-family: Roboto;
  font-size: 26px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#0f0f0f')};
`

export default Heading
