import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SecondaryButton, ISecondaryButtonProps } from ".";

export default {
  title: "Button/Secondary",
  component: SecondaryButton,
  argTypes: { onClick: { action: "Clicked" } },
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (
  args: ISecondaryButtonProps
) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Default" };

export const Loading = Template.bind({});
Loading.args = { children: "Default", isLoading: true };
