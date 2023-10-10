import styled from 'styled-components'

export const VideoItemsDetailsContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  width: 100%;
`
export const VideoItemsDetailsStickyContainer = styled.div`
  left: 0;
  top: 0;
`

export const Heading = styled.h1`
  font-family: Roboto;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ebebeb' : '#1e293b')};
  margin-top: ${props => (props.marginRemoval ? '0px' : '')};
  margin-bottom: ${props => (props.marginRemoval ? '6px' : '')};
`

export const FailureHeading = styled.h1`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
  margin-top: 24px;
  font-size: 26px;
`

export const IconBtn = styled.button`
  background-color: transparent;
  border: none;
`
