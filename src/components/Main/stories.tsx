import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
