import './card_section.css';

export const CardSection = (props: any) => {
  const { children, style } = props;

  return (
    <div className='card_section' style={{ ...(style ?? '') }}>
      {children}
    </div>
  );
};
