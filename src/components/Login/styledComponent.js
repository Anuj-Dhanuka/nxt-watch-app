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

export const Input = styled.input`
  width: 90%;
  height: 35px;
  outline: none;
  background-color: ${props => (props.darkTheme ? '#181818' : '#ffffff')};
  border: 1px solid #94a3b8;
  padding: 10px;
  font-family: Roboto;
  color: #909090;
  border-radius: 4px;
  margin-bottom: 26px;
`

export const CheckboxLabel = styled.label`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  font-size: 18px;
`
export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  width: 90%;
  border: 0;
  margin-top: 24px;
  padding: 10px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
`
