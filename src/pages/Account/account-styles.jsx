import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  background-color: ${(props) => props.colors.solidButtonColor};
  color: ${(props) => props.colors.solidButtonColorText};
  border-radius: 30px;
  padding: 14px 70px;
  font-size: 24px;
  cursor: pointer;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 2%;
`;


export const SubmitButton = styled.div`
background-color: ${(props) => props.colors.solidButtonColor};
border-radius: 25px;
border: none;
padding: 0.8rem 0 0.8rem 0;
color: ${(props) => props.colors.solidButtonColorText};
margin-left: 6vw;
font-size: 18px;
text-decoration: none;
cursor: pointer;
// margin-bottom: 120%;
width: 10%;
text-align: center;
margin-top: 2vw;
margin-bottom: 2vw;
`;

export const FormStyle = styled.div`
color: ${(props) => props.colors.textColor};
margin-left: 2vw;
label {
  display: block;
  font-weight: bold;
}
p{
  margin-top: 2vw;
  margin-bottom: 1vw;
}
`;