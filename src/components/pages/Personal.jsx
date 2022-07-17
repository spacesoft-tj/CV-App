import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../elements/inputs/Input';
import InputContainer from '../containers/InputContainer';
import Select from '../elements/inputs/Select';
import { SuccessButton } from '../elements/buttons/UIButton';
import ButtonContainer from '../containers/ButtonContainer';
import ImageInput from '../elements/inputs/ImageInput';
import { Wrapper } from '../wrappers/Wrapper';

function Personal(props) {
  const { userData, onRetrieveData, onUploadImage, onClickNext } = props;
  const { photo } = userData;
  return (
    <ContentWrapper>
      <ImageInput image={photo} onUploadImage={onUploadImage} />
      <div>
        <Wrapper size="2rem">
          <InputContainer>
            <Input
              type="text"
              id="first-name"
              objectKey="firstName"
              label="Ном"
              value={userData.firstName}
              onFocusLeft={onRetrieveData}
              required
            />
            <Input
              type="text"
              id="last-name"
              objectKey="lastName"
              label="Насаб"
              value={userData.lastName}
              onFocusLeft={onRetrieveData}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="email"
              id="email"
              label="Суроғаи имэйл"
              value={userData.email}
              onFocusLeft={onRetrieveData}
              required
            />
            <Input
              type="tel"
              id="telephone"
              label="Рақами телефон"
              value={userData.telephone}
              onFocusLeft={onRetrieveData}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="date"
              id="birthdate"
              label="Санаи таввалуд"
              value={userData.birthdate}
              onFocusLeft={onRetrieveData}
              required
            />
            <Select
              id="gender"
              label="Ҷинс"
              options={['Мард', 'Зан']}
              title="Ҷинсро интихоб кунед"
              value={userData.gender}
              onSelect={onRetrieveData}
              required
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              id="country"
              label="Кишвар"
              value={userData.country}
              onFocusLeft={onRetrieveData}
            />
            <Input
              type="text"
              id="city"
              label="Шаҳр / Ноҳия"
              value={userData.city}
              onFocusLeft={onRetrieveData}
            />
          </InputContainer>
          <InputContainer>
            <Select
              id="linkedin"
              label="Вазъи оилави"
              options={['Оиладор', 'Мучаррад']}
              title="Вазъи оилавиро интихоб кунед"
              value={userData.linkedin}
              onSelect={onRetrieveData}
              required
            />
            <Select
              id="website"
              label="Зиндаги намудан"
              options={['Хамрохи падару модар', 'Чудо']}
              title="Интихоб кунед"
              value={userData.website}
              onSelect={onRetrieveData}
              required
            />
          </InputContainer>
        </Wrapper>
        <ButtonContainer>
          <SuccessButton onClick={onClickNext}>Давом</SuccessButton>
        </ButtonContainer>
      </div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

Personal.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
};

export default Personal;
