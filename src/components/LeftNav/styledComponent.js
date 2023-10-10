import styled from 'styled-components'

export const LeftNavContainer = styled.nav`
  height: 92vh;
  width: 14vw;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 52px;
  box-shadow: 1px 1px 1px 1px
    ${props => (props.darkTheme ? '#0f0f0f' : '#f1f1f1')};

  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;

  margin-right: 16px;
  margin-top: 9vh;
`

export const IconTitle = styled.p`
  font-family: Roboto;
  ${props =>
    props.isActive
      ? `color: ${props.darkTheme ? '' : 'green'};`
      : `color: ${props.darkTheme ? '' : 'green'};`}

  font-weight: 500;
`

export const ContactUs = styled.p`
  font-family: Robto;
  font-size: 26px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#231f20')};
  font-weight: 700;
`

export const Description = styled.p`
  font-family: Roboto;
  color: ${props => (props.darkTheme ? '#ffffff' : '#231f20')};
  margin-top: 18px;
  font-weight: 600;
  line-height: 22px;
`
