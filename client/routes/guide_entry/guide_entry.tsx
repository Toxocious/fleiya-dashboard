import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';

import { LoadingSvg } from '@components/loading_svg';

import { MarkdownParser } from '@util/parse_markdown';

import './guide_entry.scss';

let IMPORT_PATH: any;
if (import.meta.env.DEV) {
  IMPORT_PATH = '../../../guides';
} else if (import.meta.env.PROD) {
  IMPORT_PATH = '/guides';
} else {
  IMPORT_PATH = '';
}

type guideType = {
  headingData: {
    title: string;
    description: string;
    logo?: string | undefined;
  } | null;
  content: string | null;
};

export const GuideEntry = () => {
  const [loadError, setLoadError] = useState('');

  const [guide, setGuide]: [
    guideType,
    React.Dispatch<
      React.SetStateAction<{
        headingData: any;
        content: string | any;
      }>
    >
  ] = useState({
    headingData: null,
    content: null,
  });

  const file_name = useParams().id;

  useEffect(() => {
    fetch(`${IMPORT_PATH}/${file_name}/${file_name}.md`)
      .then((res: Response) => res.text())
      .then((res) => {
        const parsed_markdown: any = MarkdownParser(res);

        setGuide({
          headingData: {
            logo: parsed_markdown.logo,
            description: parsed_markdown.description,
            title: parsed_markdown.title,
          },
          content: parsed_markdown.content,
        });
      })
      .catch(() => setLoadError('We were unable to fetch the guide'));
  }, []);

  if (!guide?.content) {
    return (
      <main className='absolute-center'>
        <LoadingSvg />
      </main>
    );
  }

  if (loadError) {
    return <h2>{loadError}</h2>;
  }

  console.log('Guide:', guide);

  return (
    <main>
      {guide.headingData?.logo && (
        <div className='guide_banner'>
          <img src={`/guides/${file_name}/${file_name}.png`} />
        </div>
      )}

      <h2 className='separator'>
        <span>{guide.headingData?.title}</span>
      </h2>

      <div className='guide_content'>
        <ReactMarkdown>{guide.content}</ReactMarkdown>
      </div>
    </main>
  );
};
