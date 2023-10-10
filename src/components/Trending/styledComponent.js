import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`
export const TrendingStickyContainer = styled.div`
  left: 0;
  top: 0;
`
export const TrendingHeader = styled.div`
  background-color: ${props => (props.darkTheme ? '#231f20' : '#ebebeb')};
  height: 20vh;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  padding-left: 46px;
`

export const TrendingIconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#000000' : '#cbd5e1')};
  padding: 24px;
  margin-right: 26px;
  border-radius: 50px;
`

export const TrendingHeading = styled.h1`
  font-family: Roboto;
  font-size: 32px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#212121')};
`

export const FailureHeading = styled.h1`
  font-family: Roboto;
  margin-top: 16px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#231f20')};
  font-size: 36px;
`
