import { yupResolver } from "@hookform/resolvers/yup";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Checkbox, CheckboxProps } from ".";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  const schema = yup.object().shape({
    default: yup.boolean(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { control } = methods;

  return <Checkbox control={control} {...args} />;
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
