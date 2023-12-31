import type { Meta, StoryObj } from '@storybook/svelte';
import Button from "../lib/components/inputs/Button.svelte";


const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'test',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'test',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'test',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'test',
  },
};
