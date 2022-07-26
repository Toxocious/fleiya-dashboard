import './card_section.css';

export const CardSection = (props: any) => {
  const { children, style, variant } = props;

  return (
    <div
      className={'card_section' + ` ${variant ?? ''}`}
      style={{ ...(style ?? '') }}
    >
      {children}
    </div>
  );
};
