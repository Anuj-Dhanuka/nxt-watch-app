import styled from 'styled-components'

const CustomButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  border: 1px solid ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  width: 70px;
  font-family: Roboto;
  height: 25px;
  border-radius: 1px;
  font-weight: 500;
`

export default CustomButton
