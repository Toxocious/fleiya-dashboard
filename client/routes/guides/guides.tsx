import { ChevronLeft } from 'tabler-icons-react';

export const GuidesPage = () => {
  return (
    <main>
      <h2>Guides</h2>

      <div>
        <button>
          <ChevronLeft />
        </button>

        <br />

        <button className='disabled'>
          <ChevronLeft />
        </button>
      </div>

      <br />

      <div>
        <a className='button'>
          <ChevronLeft />
        </a>

        <br />

        <a className='button disabled'>
          <ChevronLeft />
        </a>
      </div>
    </main>
  );
};
