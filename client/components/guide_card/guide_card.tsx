import { Link } from 'react-router-dom';

import './guide_card.scss';

type GuideCardType = {
  title: string;
  description: string;
  logo?: string;
};

export const GuideCard = ({ title, description, logo }: GuideCardType) => {
  const FILE_NAME = title.replace(' ', '-').toLowerCase();

  return (
    <Link className='button guide_card' to={`/guides/${FILE_NAME}`}>
      <div className={'guide_logo' + (!logo ? ' no-logo' : '')}>
        {logo && <img src={`/guides/${FILE_NAME}/${FILE_NAME}.png`} />}
      </div>
      <div className={'guide_content' + (!logo ? ' no-logo' : '')}>
        <div className='guide_title'>{title}</div>
        <div className='guide_description'>{description}</div>
      </div>
    </Link>
  );
};
