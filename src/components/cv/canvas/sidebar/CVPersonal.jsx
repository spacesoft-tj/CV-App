import React from 'react';
import { Group } from 'react-konva';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { textItems, otherItems } from '../CVElements';
import CanvasHandler from '../../../../data/CanvasHandler';

const PersonalSection = React.forwardRef((props, ref) => {
  const { x, y, userData, width } = props;
  const { h2 } = textItems;
  const { divider } = otherItems;
  const handler = new CanvasHandler(0, 0);

  const dataFields = [
    { key: 'email', title: 'Суроғаи имэйл' },
    { key: 'telephone', title: 'Рақами телефон' },
    { key: 'birthdate', title: 'Санаи таввалуд' },
    { key: 'gender', title: 'Ҷинс' },
    { key: 'city', title: 'Шаҳр / Ноҳия' },
    { key: 'country', title: 'Кишвар' },
    { key: 'linkedin', title: 'Вазъи оилави' },
    { key: 'website', title: 'Зиндаги намудан' },
  ];

  const getPersonalData = (key, title) => {
    const value = userData[key];
    return value ? (
      <PersonalData
        x={0}
        y={handler.updateY(58)}
        title={title}
        info={value}
        key={uniqid()}
      />
    ) : null;
  };

  return (
    <Group x={x} y={y} ref={ref}>
      {divider.element(0, handler.updateY(divider.height + 32), width)}
      {h2.element(0, handler.updateY(h2.height + 16), 'Маълумоти шахсӣ')}
      {dataFields.map(({ key, title }) => getPersonalData(key, title))}
    </Group>
  );
});

PersonalSection.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  width: PropTypes.number.isRequired,
};

function PersonalData(props) {
  const { title, info, x, y } = props;
  return (
    <Group x={x} y={y}>
      {textItems.p.element(0, 0, title, '700')}
      {textItems.p.element(0, 23, info)}
    </Group>
  );
}

PersonalData.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default PersonalSection;
