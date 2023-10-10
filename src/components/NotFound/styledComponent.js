import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100%;
`
export const NotFoundStickyContainer = styled.div`
  left: 0;
  top: 0;
`
export const Heading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#1e293b')};
  margin-top: 16px;
  font-size: 36px;
`
