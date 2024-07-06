import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    title: "Card title",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    imageUrl:
      "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    redirectUrl: "/",
  },
};
