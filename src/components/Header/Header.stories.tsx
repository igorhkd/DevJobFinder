import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    title: "Header",
  },
};
