import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Form } from './Form';

const meta = {
  title: 'App/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: "otus",
  },
};

export const Secondary: Story = {
  args: {
    message: 'Button',
  },
};