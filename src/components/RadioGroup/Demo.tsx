import React, { useState } from 'react';

import PuiRadioGroup from './RadioGroup';

const LIST = [
  {
    label: 'female',
    value: 'female',
    href: '/female',
  },
  {
    label: 'male',
    value: 'male',
    href: '/male',
  },
  {
    label: 'others',
    value: 'others',
    href: '/others',
  },
];

const Demo = () => {
  const [state, setState] = useState(LIST[0]);

  return (
    <PuiRadioGroup
      list={LIST}
      selectedItem={state}
      setSelectedItem={setState}
      id="demo-state"
      label="gender"
    />
  );
};

export default Demo;
