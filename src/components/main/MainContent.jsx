import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Personal from '../pages/Personal';
import Experience from '../pages/Experience';
import DownloadCV from '../pages/DownloadCV';
import CVButton from '../elements/buttons/CVButton';
import MainContentContainer from '../containers/MainContentContainer';

function MainContent(props) {
  const {
    index,
    userData,
    onDisplayCV,
    onRetrieveData,
    onUploadImage,
    onChangePage,
  } = props;
  const pages = [
    {
      title: 'Маълумот оиди дарёфти чои кор',
      page: (
        <Personal
          userData={userData}
          onRetrieveData={onRetrieveData}
          onClickNext={() => onChangePage(1)}
          onUploadImage={onUploadImage}
        />
      ),
    },
    {
      title: 'Маълумот оиди дарёфти чои кор',
      page: (
        <Experience
          userData={userData}
          onRetrieveData={onRetrieveData}
          onChangePage={onChangePage}
        />
      ),
    },
    {
      title: 'Боргирии CV',
      page: <DownloadCV onChangePage={onChangePage} userData={userData} />,
    },
  ];
  return (
    <MainContentContainer>
      <Header>
        <Title>{pages[index].title}</Title>
        <CVButton onCvButtonClick={onDisplayCV} />
      </Header>
      {pages[index].page}
    </MainContentContainer>
  );
}

MainContent.propTypes = {
  index: PropTypes.number.isRequired,
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onDisplayCV: PropTypes.func.isRequired,
  onRetrieveData: PropTypes.func.isRequired,
  onUploadImage: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
`;

export default MainContent;
