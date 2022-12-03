import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: relative;
  max-width: 450px;
  margin: 0 auto;
  padding: 60px 20px 40px;

  box-shadow: rgb(199 123 27) 3px 3px 10px, rgb(199 123 27) -3px -3px 10px;
  background-color: ${props => props.theme.colors.bgSecond};
  border-radius: 20px;
`;

export const TittleModal = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.375;
  margin-bottom: 20px;
`;

export const BtnBox = styled.div`
  display: grid;
  gap: 12px;
`
