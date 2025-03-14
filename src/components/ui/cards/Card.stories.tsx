/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
} from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/UI/Cards/Card",
  component: Card,
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;

type CardStoryProps = {
  showHeader: boolean;
  showTitle: boolean;
  showSubtitle: boolean;
  showBody: boolean;
  showFooter: boolean;
  header?: string;
  title?: string;
  subtitle?: string;
  body: string;
  footer: string;
  className?: string;
  headerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
  bodyClass?: string;
  footerClass?: string;
};

export const Default: StoryObj<CardStoryProps> = {
  args: {
    header: "",
    showHeader: true,
    headerClass: "",

    title: "Card Title",
    showTitle: true,
    titleClass: "",

    subtitle: "Card Subtitle",
    showSubtitle: true,
    subtitleClass: "",

    body: "Card Body",
    showBody: true,
    bodyClass: "",

    footer: "Card Footer",
    showFooter: true,
    footerClass: "",
  },
  argTypes: {
    header: { control: "text" },
    showHeader: { control: "boolean" },
    headerClass: { control: "text" },

    title: { control: "text" },
    showTitle: { control: "boolean" },
    titleClass: { control: "text" },

    subtitle: { control: "text" },
    showSubtitle: { control: "boolean" },
    subtitleClass: { control: "text" },

    body: { control: "text" },
    showBody: { control: "boolean" },
    bodyClass: { control: "text" },

    footer: { control: "text" },
    showFooter: { control: "boolean" },
    footerClass: { control: "text" },
  },
  render: (props: CardStoryProps) => (
    <div className="w-xl">
      <Card className={props.className}>
        {props.showHeader && (
          <CardHeader className={props.headerClass}>
            {props.header}
            {props.showTitle && (
              <CardTitle className={props.titleClass}>{props.title}</CardTitle>
            )}
            {props.showSubtitle && (
              <CardSubtitle className={props.subtitleClass}>
                {props.subtitle}
              </CardSubtitle>
            )}
          </CardHeader>
        )}
        {props.showBody && (
          <CardBody className={props.bodyClass}>{props.body}</CardBody>
        )}
        {props.showFooter && (
          <CardFooter className={props.footerClass}>{props.footer}</CardFooter>
        )}
      </Card>
    </div>
  ),
};
