import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SubmitButton, ISubmitButtonProps } from ".";

export default {
  title: "Button/Primary",
  component: SubmitButton,
  argTypes: { onClick: { action: "Clicked" } },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (
  args: ISubmitButtonProps
) => <SubmitButton {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default" };

export const Loading = Template.bind({});
Loading.args = { children: "Default", isLoading: true };
