import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100%;
`
export const HomeStickyContainer = styled.div`
  left: 0;
  top: 0;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  background-color: ${props => (props.darkTheme ? '#7e858e' : '#f4f4f4')};
  border: 1px solid #94a3b8;
  height: 26px;
`

export const NoJobHeading = styled.h1`
  font-family: Roboto;
  margin-top: 16px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#231f20')};
  font-size: 36px;
`

export const FailureBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 12px;
  height: 40px;
  width: 90px;
  margin-top: 16px;
  border: none;
  border-radius: 5px;
`
