import styled from 'styled-components';
import { mainPink } from './color';

export const SuccessPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;
  min-height: 95vh;
`;

export const modalStyles = {
  overlay: {
    backgroundColor: '#dee2e6',
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%',
    borderRadius: '10px',
  },
};

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  width: 60vw;
  border-radius: 0.313rem;
  padding: 1rem;

  > h1 {
    margin: 0 auto;
  }
`;

export const ScanContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  margin: 1rem auto;
`;

export const ScanBox1 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 80%; //모바일 80vw
  height: 36%;
  border: 0.3rem solid #b4a2eb;
  background-color: #b2acfa;
  border-radius: 0.5rem;

  & + div {
    margin-top: 0.5rem;
  }
`;

export const ScanBox2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 70%; //모바일 75vw
  height: 32%;
  border: 0.3rem solid #b4a2eb;
  background-color: #dee2e6;
  border-radius: 0.5rem;
  visibility: ${(props) => (props.hundred ? 'hidden' : 'visible')};

  & + div {
    margin-top: 0.5rem;
  }
`;

export const ScanImgStyle = styled.img`
  width: 40%;
  margin: 0.5rem;
  padding: 0.2rem;
  border-radius: 0.5rem;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const ScanInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: auto 0.5rem;

  > h1 {
    margin: 0 auto;
    font-size: 1rem;
  }

  > p {
    margin: 0 auto;
    font-size: 0.9rem;
  }
`;

export const InfoButton = styled.button`
  margin: 1rem auto 0 auto;
  padding: 0.2rem;
  width: 8rem;
  background-color: white;
  border: 2px solid #b4a2eb;
  border-radius: 0.5rem;
  color: black;

  &:hover {
    color: white;
    background-color: #b4a2eb;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 15vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60vw;
`;

export const FailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  border-radius: 0.313rem;
  background-color: white;

  > h2 {
    text-align: center;
  }

  > p {
    font-size: 1.25rem;
    font-weight: 600;
  }

  > img {
    padding: 1rem;
    width: 40vh;
    height: 40vh;
  }
`;

export const ButtonBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 2.25rem;
    width: 40%;
    font-size: 1.25rem;
    border: 1px solid ${mainPink};
    background-color: ${mainPink};
  }
`;
