import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  border: 1px solid ${props => (props.darkTheme ? '#f9f9f9' : '#3b82f6')};
  width: 70px;
  font-family: Roboto;
  height: 25px;
  border-radius: 1px;
  font-weight: 500;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#1e293b' : '#ffffff')};
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px
    ${props => (props.darkTheme ? '#0f0f0f' : '#bfbfbf')};
`

export const PopupPara = styled.p`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#00306e')};
  font-size: 20px;
  font-weight: 500;
`

export const PopupBtn = styled.button`
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  color: ${props => (props.cancel ? '#94a3b8' : '#ffffff')};
  font-family: Roboto;
  margin-right: 24px;
  border: ${props => (props.cancel ? '1px solid #94a3b8' : '0px')};
  font-size: 14px;
  height: 35px;
  width: 70px;
  border-radius: 1px;
`
