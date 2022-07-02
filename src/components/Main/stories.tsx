import { withKnobs, text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react/types-7-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, React JS, Next.JS, Styled Components'
    )}
  />
);
