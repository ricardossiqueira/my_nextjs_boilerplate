import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Hamburguer, IHamburguerProps } from ".";

export default {
  title: "Header/Hamburguer",
  component: Hamburguer,
} as ComponentMeta<typeof Hamburguer>;

const Template: ComponentStory<typeof Hamburguer> = (args: IHamburguerProps) => {
  return <Hamburguer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  user: {
    email: "john@doe.com"
  }
};
