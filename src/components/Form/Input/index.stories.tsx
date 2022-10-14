import { InputRightElement, Icon } from "@chakra-ui/react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiFillLock } from "react-icons/ai";

import { Input, InputProps } from ".";

export default {
  title: "Form/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "default",
  placeholder: "Default",
  error: null,
};

export const WithMask = Template.bind({});
WithMask.args = {
  name: "default",
  placeholder: "(99) 99999-9999",
  mask: "(99) 99999-9999",
  error: null,
};

export const WithInputElement = Template.bind({});
WithInputElement.args = {
  name: "default",
  placeholder: "Default",
  inputElement: (
    <InputRightElement>
      <Icon
        mt={"0.5rem"}
        mr={"0.5rem"}
        aria-label="mostrar/ocultar senha"
        w={"1.5rem"}
        h={"1.5rem"}
        color={"blackAlpha.500"}
        as={AiFillLock}
      />
    </InputRightElement>
  ),
  error: null,
};

export const WithError = Template.bind({});
WithError.args = {
  name: "withError",
  placeholder: "With Error",
  error: { message: "This is an error message!" },
};
