import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeSwitch, IThemeSwitchProps } from ".";

export default {
  title: "Button/ThemeSwitch",
  component: ThemeSwitch,
  argTypes: { onClick: { action: "Clicked" } },
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = (
  args: IThemeSwitchProps
) => <ThemeSwitch {...args} />;

export const Dark = Template.bind({});
Dark.args = { colorMode: "dark" };

export const Light = Template.bind({});
Light.args = { colorMode: "light" };
