import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import completeSvg from '../../assets/complete.svg';
import ButtonContainer from '../containers/ButtonContainer';
import { SecondaryButton, SuccessButton } from '../elements/buttons/UIButton';
import downloadCV from '../../util/cvDownloadUtil';

function DownloadCV(props) {
  const { userData, onChangePage } = props;
  return (
    <div>
      <Image src={completeSvg} alt="Illustration of two happy people" />
      <TextContainer>
        <Title>Ура! CV-и шумо барои боргири кардан омода аст!</Title>
      </TextContainer>
      <ButtonContainer justify="center" direction="column-reverse">
        <SecondaryButton onClick={() => onChangePage(1)}>
          Бозгашт
        </SecondaryButton>
        <SuccessButton onClick={() => downloadCV(userData)}>
          Боргирии CV
        </SuccessButton>
      </ButtonContainer>
    </div>
  );
}

DownloadCV.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onChangePage: PropTypes.func.isRequired,
};

const Image = styled.img`
  display: block;
  max-width: 360px;
  width: 100%;
  margin: 0 auto 2rem;
`;

const TextContainer = styled.div`
  max-width: 480px;
  margin: 0 auto 2rem;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
`;

export default DownloadCV;
