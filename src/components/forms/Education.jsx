import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import Select from '../elements/inputs/Select';
import { MONTHS, YEARS } from '../../util/dateUtil';
import FormHandler from '../../data/FormHandler';

function Education({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'education', (value) => {
    onSubmit({ id: 'education', value });
    setId(null);
  });

  return (
    <FormSection
      title="Саволхо аз 9 то 15"
      buttonTitle="Чавоб додан ба саволхо"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:studies]"
      itemSubtitle="[date:startMonth,startYear] - [date:endMonth,endYear]">
      <Wrapper size="2rem">
        <InputContainer>
          <Select
            id="education-studies"
            objectKey="studies"
            value={formHandler.item.studies}
            onSelect={formHandler.updateData}
            options={['Ичора', 'Давлати', 'Шахси', 'Дар хонаи волидайн']}
            title="Манзили истикомат"
          />
          <Input
            id="education-city"
            objectKey="city"
            label="Автомашинаи шахси "
            value={formHandler.item.city}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Тамгаи автомашина"
          />
        </InputContainer>
        <Input
          id="education-institution"
          objectKey="institution"
          label="Харочоти рузона барои автомашина"
          value={formHandler.item.institution}
          onFocusLeft={formHandler.updateData}
          type="text"
          placeholder="Чанд сомони?"
        />
        <InputContainer>
          <Input
            id="education-start-month"
            objectKey="startMonth"
            label="Оё дигар манбаи даромад доред?"
            value={formHandler.item.startMonth}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Ха / Не"
          />
          <Input
            id="education-start-year"
            objectKey="startYear"
            label="кадом намуди фаъолият?"
            value={formHandler.item.startYear}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Ба кадом намуди фаъолият машгулед?"
          />
          <Select
            id="education-end-month"
            objectKey="endMonth"
            label="Бо кадом маблаг огоз намудед?"
            value={formHandler.item.endMonth}
            onSelect={formHandler.updateData}
            options={['Карзи бонки', 'Карзи шинос', 'Дигар маблаг']}
            title="Интихоб кунед"
          />
          <Input
            id="education-end-year"
            objectKey="endYear"
            label="Даромад аз хисоби фаъолият дар мох"
            value={formHandler.item.endYear}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Чанд сомони?"
          />
        </InputContainer>
      </Wrapper>
    </FormSection>
  );
}

Education.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Education;
