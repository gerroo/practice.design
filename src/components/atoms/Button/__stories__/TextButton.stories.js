import React from 'react';
import TextButton from '../TextButton';
import MobileContainer from '../../../utils/MobileContainer';

export default {
  component: TextButton,
  title: 'Atoms / Buttons / Text Button',
};

const Template = (args) => (
  <MobileContainer>
    <TextButton {...args} />
  </MobileContainer>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Click Me!',
  onClick: () => {
    console.log('text button clicked');
  },
};
