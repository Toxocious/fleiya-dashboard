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
  const [guides, setGuides]: [any, any] = useState({
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
        Click on any guide entry for more information.
      </div>

      <br />

      <div className='guide_card_container'>
        {guides.list.length === 0 ? (
          <>
            <h2>No Guides Were Found</h2>
          </>
        ) : (
          guides.list.map((guide: any) => (
            <GuideCard key={guide.data.title} {...guide.data} />
          ))
        )}
      </div>
    </main>
  );
};
