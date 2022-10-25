import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiFillLock } from "react-icons/ai";

import { Input, IInputProps } from ".";

export default {
  title: "Form/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IInputProps) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "default",
  placeholder: "Default",
  error: null,
};

export const WithTrailing = Template.bind({});
WithTrailing.args = {
  name: "default",
  placeholder: "Default",
  error: null,
  children: (
    <button>
      <AiFillLock />
    </button>
  ),
};

export const WithError = Template.bind({});
WithError.args = {
  name: "withError",
  placeholder: "With Error",
  error: { message: "This is an error message!" },
};
