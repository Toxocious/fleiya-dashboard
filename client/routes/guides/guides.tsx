import { useEffect, useState } from 'react';

import { GuideCard } from '@components/guide_card';

let IMPORTED_GUIDES: any;
if (import.meta.env.DEV) {
  IMPORTED_GUIDES = import.meta.glob('../../../static/guides/**/**/*.md');
} else if (import.meta.env.PROD) {
  IMPORTED_GUIDES = import.meta.glob('/static/guides/**/**/*.md');
} else {
  IMPORTED_GUIDES = [];
}

export const GuidesPage = () => {
  const [filter, setFilter] = useState('general');
  const [guides, setGuides] = useState({
    list: [],
  });

  const GUIDES_LIST: Array<Object> = [];

  useEffect(() => {
    const fetchGuides = () => {
      Object.entries(IMPORTED_GUIDES).forEach(
        async ([path, mod]: [any, any]) => {
          const mod_data: any = await mod();

          GUIDES_LIST.push({
            path: path,
            data: mod_data.attributes,
          });

          setGuides((guides: any) => ({
            ...guides,
            list: GUIDES_LIST,
          }));
        }
      );
    };

    fetchGuides();
  }, []);

  const FILTERED_LIST: Array<Object> = guides.list.filter(
    (guide: any) => guide.data.category === filter
  );

  let LIST_ELEMENTS: any;
  if (FILTERED_LIST.length > 0) {
    LIST_ELEMENTS = FILTERED_LIST.map((guide: any) => (
      <GuideCard key={guide.data.title} path={guide.path} {...guide.data} />
    ));
  } else {
    LIST_ELEMENTS = <h2>There are no {filter.toLocaleUpperCase()} guides.</h2>;
  }

  return (
    <main>
      <h2 className='separator'>
        <span>Guides</span>
      </h2>

      <div className='description'>
        With a vast amount of unique content within the game, there comes a
        point where having guides for much of the content can alleviate the
        stress and confusion that a player may have when going through the game.
        <br />
        We aim to provide you with the best guides possible to assist in your
        play through.
        <br />
        <br />
        Click on any guide entry for more information, or click one of the
        buttons below to filter through the guides based on category.
      </div>

      <br />

      <div className='flex row center'>
        {['General', 'Kanto', 'Johto', 'Sinnoh', 'Unova'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category.toLowerCase())}
            className={filter === category.toLowerCase() ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <br />

      <div className='guide_card_container'>{LIST_ELEMENTS}</div>
    </main>
  );
};
