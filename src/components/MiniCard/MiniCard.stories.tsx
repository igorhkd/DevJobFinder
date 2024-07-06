import type { Meta, StoryObj } from "@storybook/react";
import { MiniCard } from ".";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MiniCard> = {
  component: MiniCard,
  args: {
    title: "MiniCard title",
    subtitle: "12/02/1997",
    linkUrl: "/",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="container mx-auto flex flex-col mt-10 mb-4 gap-2 px-2 sm:px-0">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MiniCard>;

export const Primary: Story = {
  args: {
    badges: [
      { id: 1, name: "badge-1", color: "81ea82" },
      { id: 2, name: "badge-2", color: "440a7f" },
      { id: 3, name: "badge-3", color: "e5e5ff" },
      { id: 4, name: "badge-4", color: "d0012c" },
    ],
  },
};

export const WithoutBadge: Story = {
  args: {},
};
