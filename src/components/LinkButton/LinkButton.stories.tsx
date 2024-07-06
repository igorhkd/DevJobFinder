import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from ".";
import { MemoryRouter } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <IoArrowBack /> Voltar
      </>
    ),
  },
};
