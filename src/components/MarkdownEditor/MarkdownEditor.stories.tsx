import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownEditor } from ".";

const meta: Meta<typeof MarkdownEditor> = {
  component: MarkdownEditor,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Primary: Story = {
  args: {
    children:
      "## Lorem ipsum\r\n\r\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.\r\n\r\n## Lorem ipsum:\r\n\r\n- Lorem ipsum dolor sit ame.\r\n- Lorem ipsum dolor sit ame.\r\n- Lorem ipsum dolor sit ame.\r\n- Lorem ipsum dolor sit ame.\r\n## Lorem ipsum:\r\n email@example.com",
  },
};
