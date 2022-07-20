import { CardSection } from './card_section';

import './card.css';

export const Card = (props: any) => {
  const { variant } = props;

  return (
    <div className={'card' + ` ${variant ?? ''}`}>
      {props.children}
    </div>
  )
};

Card.Section = CardSection;
