import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginCard = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
  box-shadow: 0px 4px 16px 0px ${props => (props.darkTheme ? '' : '#bfbfbf')};
  border-radius: 8px;
  padding: 16px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 56px;
  padding-bottom: 56px;
  padding-left: 36px;
`

export const Label = styled.label`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#909090')};
  margin-bottom: 8px;
  font-weight: 600;
`

export const CheckboxLabel = styled.label`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  font-size: 18px;
`
