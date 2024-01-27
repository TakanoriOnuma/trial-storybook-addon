import { Meta, StoryObj } from "@storybook/react";

import { TestMessage } from "./TestMessage";
import { PARAM_KEY } from "../src/constants";
import { useMyAddonParams } from "../src";

type Story = StoryObj<typeof TestMessage>;

const Template: Story["render"] = (args) => {
  const addonParams = useMyAddonParams();

  return (
    <div>
      <TestMessage {...args} />
      <div>addonParams: {JSON.stringify(addonParams)}</div>
    </div>
  );
};

const meta: Meta<typeof TestMessage> = {
  title: "TestMessage",
  render: Template,
  component: TestMessage,
  args: {
    message: "Hello World",
  },
};

export default meta;

export const Default: Story = {};

export const Text: Story = {
  args: {
    message: "こんにちは！",
  },
};

export const DefaultWithParams: Story = {
  parameters: {
    [PARAM_KEY]: {
      num: 10,
    },
  },
};

export const TextWithParams: Story = {
  args: {
    message: "こんにちは！",
  },
  parameters: {
    [PARAM_KEY]: {
      num: 10,
    },
  },
};
