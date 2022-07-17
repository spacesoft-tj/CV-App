import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormSection from '../elements/form/FormSection';
import { Wrapper } from '../wrappers/Wrapper';
import InputContainer from '../containers/InputContainer';
import Input from '../elements/inputs/Input';
import TextArea from '../elements/inputs/TextArea';
import Select from '../elements/inputs/Select';
import { MONTHS, YEARS } from '../../util/dateUtil';
import FormHandler from '../../data/FormHandler';

function WorkExperience({ userData, onSubmit }) {
  const [id, setId] = useState(null);
  const formHandler = new FormHandler(id, userData, 'work', (value) => {
    onSubmit({ id: 'work', value });
    setId(null);
  });

  return (
    <FormSection
      title="Саволхо аз 1 то 8"
      buttonTitle="Чавоб додан ба саволхо"
      items={formHandler.list}
      onSubmit={formHandler.submit}
      onDelete={formHandler.delete}
      id={id}
      onUpdateId={(newId) => setId(newId)}
      itemTitle="[str:position]"
      itemSubtitle="[date:startMonth,startYear] - [date:endMonth,endYear]">
      <Wrapper size="2rem">
        <InputContainer>
          <Input
            id="work-position"
            objectKey="position"
            label="Саробони дар худ"
            value={formHandler.item.position}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Чанд нафар?"
          />
          <Input
            id="work-city"
            objectKey="city"
            label="Дар оила ба гайри ту даромад меоранд"
            value={formHandler.item.city}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Чанд нафар?"
          />
        </InputContainer>
        <Input
          id="work-company"
          objectKey="company"
          label="Маоши мехостагии ту барои кор"
          value={formHandler.item.company}
          onFocusLeft={formHandler.updateData}
          type="text"
          placeholder="Чанд сомони?"
        />
        <InputContainer>
          <Input
            id="work-start-month"
            objectKey="startMonth"
            label="Харочоти хонавода дар як мох"
            value={formHandler.item.startMonth}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Чанд сомони?"
          />
          <Select
            id="work-start-year"
            objectKey="startYear"
            value={formHandler.item.startYear}
            onSelect={formHandler.updateData}
            options={['Оли', 'Миёна']}
            title="Маълумот"
          />
          <Input
            id="work-end-month"
            objectKey="endMonth"
            label="Ихтисос"
            value={formHandler.item.endMonth}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Кадом ихтисос?"
          />
          <Input
            id="work-end-year"
            objectKey="endYear"
            label="Собикаи кори"
            value={formHandler.item.endYear}
            onFocusLeft={formHandler.updateData}
            type="text"
            placeholder="Чанд сол?"
          />
        </InputContainer>
        <Input
          id="work-description"
          objectKey="description"
          label="Фарзандон"
          value={formHandler.item.description}
          onFocusLeft={formHandler.updateData}
          type="text"
          placeholder="Чанд нафар?"
        />
      </Wrapper>
    </FormSection>
  );
}

WorkExperience.propTypes = {
  userData: PropTypes.objectOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default WorkExperience;
