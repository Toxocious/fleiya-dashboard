import './loading_svg.scss';

type LoadingSvgType = {
  fullPage?: boolean;
};

export const LoadingSvg = ({ fullPage }: LoadingSvgType) => {
  return (
    <div className={'spinner' + (fullPage ? ' full-page' : '')}>
      <img src='/PokeOne.ico' />
      Loading
    </div>
  );
};
