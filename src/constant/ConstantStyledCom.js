import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "12rem")};
  height: ${(props) => (props.height ? props.height : "4rem")};
  background: ${(props) => (props.background ? props.background : "#fff")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "2.4rem")};
  color: ${(props) => (props.color ? props.color : "#000")};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
  opacity: ${(props)=> (props.opacity ? props.opacity : "0.6")};
  transition: ${(props)=> (props.transition ? props.transition : "0.3s")};
  font-size: ${(props)=> (props.fontSize ? props.fontSize : "1.6rem")};
  font-weight: ${(props)=> (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${(props)=> (props.margin ? props.margin : "0")};
  border: ${(props)=> (props.border ? props.border : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: ${(props)=> (props.hoverOpacity ? props.hoverOpacity : "1")};
  }
`;

export const Para = styled.p`
  font-weight: ${(props)=> props.fontWeight ? props.fontWeight : '500'};
  font-size: ${(props)=> props.fontSize ? props.fontSize : '3rem'};
  line-height: ${(props)=> props.lineHeight ? props.lineHeight : '1.9rem'};
  color: ${(props) => (props.color ? props.color : "#180435")};
  padding: ${(props)=> props.padding ? props.padding : '0'};
  margin-top: ${(props)=> props.marginTop ? props.marginTop : '0'};
  text-decoration: ${(props)=> props.textDecoration ? props.textDecoration : '0'};
  text-underline-offset: ${(props)=> props.gap ? props.gap : "0"};
`;