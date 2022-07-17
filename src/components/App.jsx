import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import uniqid from 'uniqid';
import { GlobalStyles, lightTheme, darkTheme } from '../themes';
import Navigation from './Navigation';
import Container from './containers/Container';
import MainCard from './main/MainCard';
import { getCurrentTabItemIndex, setCurrentTabItem } from '../util/tabUtil';
import ErrorAlert from './elements/ErrorAlert';
import CVPreview from './cv/CVPreview';

function App() {
  const [error, setError] = useState(null);
  const [mainOpen, setMainOpen] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [userData, setUserData] = useState({});
  const [tabBarItems, setTabBarItems] = useState([
    { title: 'Маълумоти шахсӣ', active: true, id: uniqid() },
    { title: 'Саволхо', active: false, id: uniqid() },
    { title: 'Боргирии CV', active: false, id: uniqid() },
  ]);
  const requiredFields = [
    'firstName',
    'lastName',
    'email',
    'birthdate',
    'gender',
  ];

  const setCurrentPage = (index) => {
    if (index === getCurrentTabItemIndex(tabBarItems)) return;
    if (!error) {
      for (const field of requiredFields) {
        if (!userData[field]) {
          setError('Шумо бояд ба ҳамаи майдонҳои зарурӣ арзишҳоро ворид кунед');
          setTimeout(() => {
            setError(null);
          }, 2000);
          return;
        }
      }
    }
    setTabBarItems(setCurrentTabItem(tabBarItems, index));
  };

  const toggleTheme = () => {
    const updatedTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const updateUserData = ({ id, value }) => {
    setUserData((prevState) => ({ ...prevState, [id]: value }));
  };

  const updatePhoto = (url) => {
    if (userData.photo) URL.revokeObjectURL(userData.photo);
    setUserData((prevState) => ({ ...prevState, photo: url }));
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <Container>
          <Navigation onThemeChange={toggleTheme} theme={theme} />
          {mainOpen && (
            <MainCard
              index={getCurrentTabItemIndex(tabBarItems)}
              userData={Object.create(userData)}
              tabBarItems={tabBarItems}
              onCurrentChange={setCurrentPage}
              onDisplayCV={() => setMainOpen(false)}
              onRetrieveData={updateUserData}
              onUploadImage={updatePhoto}
            />
          )}
          {mainOpen || (
            <CVPreview
              userData={Object.create(userData)}
              onClose={() => setMainOpen(true)}
            />
          )}
        </Container>
        <ErrorAlert message={error} />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
