import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/angular';
import { Button, Welcome } from '@storybook/angular/demo';
import { MyFancyComponentComponent } from 'src/app/my-fancy-component/my-fancy-component.component';


const story = storiesOf('MyFancyComponent', module);

story.add('Components|Normal', () => ({
  component: MyFancyComponentComponent,
  props: {}
}));


storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }),
    { notes: 'My notes on a button with emojis' }
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));
