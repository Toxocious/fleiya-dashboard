import { useRef, useState } from 'react';

import { TRAINER_LEVELS, TrainerLevelType } from '@constants/trainer_level';

export const TLevelCalcPage = () => {
  const [calcExp, setCalcExp] = useState(0);

  const startLevelRef = useRef<HTMLInputElement>(null);
  const endLevelRef = useRef<HTMLInputElement>(null);

  const CalcTrainerLevelExp = () => {
    let startLevel = startLevelRef?.current?.value ?? 5;
    let endLevel = endLevelRef?.current?.value ?? 100;

    if (startLevel == endLevel) {
      return 0;
    }

    if (startLevel < 5 || startLevel > 100) {
      startLevel = 5;
    }
    if (endLevel < 5 || endLevel > 100) {
      endLevel = 100;
    }

    const START_LEVEL_DATA: TrainerLevelType = TRAINER_LEVELS.filter(
      (level) => level.level == startLevel
    )[0];

    const END_LEVEL_DATA: TrainerLevelType = TRAINER_LEVELS.filter(
      (level) => level.level == endLevel
    )[0];

    setCalcExp(END_LEVEL_DATA.total_exp - START_LEVEL_DATA.total_exp);
  };

  return (
    <main>
      <h1 className='separator'>
        <span>Trainer Level Calculator</span>
      </h1>

      <section className='flex center'>
        <p>
          Trainer Level is bound between 5 and 100, and any sent inputs will be
          checked and adjusted to be within bounds.
        </p>
      </section>

      <section className='flex row center top'>
        <div>
          <div className='flex row'>
            <h2>Current Trainer Level</h2>
            <div className='input-field'>
              <input
                type='text'
                placeholder='5'
                data-id='startLevel'
                ref={startLevelRef}
              />
            </div>
          </div>

          <div className='flex row'>
            <h2>Desired Trainer Level</h2>
            <div className='input-field'>
              <input
                type='text'
                placeholder='100'
                data-id='endLevel'
                ref={endLevelRef}
              />
            </div>
          </div>
          <br />

          <div className='flex row center'>
            <button onClick={() => CalcTrainerLevelExp()}>Calculate</button>
          </div>
          <br />

          <div className='flex row'>
            <h2>Total Exp. Required:</h2>
            <h2>{calcExp.toLocaleString()}</h2>
          </div>
        </div>
      </section>
    </main>
  );
};
