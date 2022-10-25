import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};
export const NoContent = Template.bind({});
NoContent.args = {
  name: "default",
  error: null,
};

export const WithContent = Template.bind({});
WithContent.args = {
  name: "default",
  children: <span>This is a children</span>,
  error: null,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "default",
  error: { message: "This is an error" },
};
