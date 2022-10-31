import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header, IHeaderProps } from ".";

export default {
  title: "Header/Default",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: IHeaderProps) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  nextRouter: {
    path: "/#",
    asPath: "/#",
  }, user: {
    email: "john@doe.com"
  }
};
