import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logout, ILogoutProps } from ".";

export default {
  title: "Button/Logout",
  component: Logout,
  argTypes: { onClick: { action: "Clicked" } },
} as ComponentMeta<typeof Logout>;

const Template: ComponentStory<typeof Logout> = (args: ILogoutProps) => (
  <Logout {...args} />
);

export const Default = Template.bind({});
Default.args = {};
