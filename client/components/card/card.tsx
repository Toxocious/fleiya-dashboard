import { CardSection } from './card_section';

import './card.scss';

export const Card = (props: any) => {
  const { variant, background, width, padding, gap } = props;

  return (
    <div
      className={'card' + ` ${variant ?? ''} ${background ?? ''}`}
      style={{
        padding: padding,
        gap: gap,
        width: width,
      }}
    >
      {props.children}
    </div>
  );
};

Card.Section = CardSection;
