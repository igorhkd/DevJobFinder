import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Footer> = {
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    message: "message",
  },
};
