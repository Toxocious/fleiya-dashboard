import { useRef, useState } from 'react';

import { HIDDEN_POWER_TABLE } from '@constants/hidden_power_table';

export const HPCalcPage = () => {
  const [hpType, setHpType] = useState('N/A');

  const hpIvRef = useRef<HTMLInputElement>(null);
  const atkIvRef = useRef<HTMLInputElement>(null);
  const defIvRef = useRef<HTMLInputElement>(null);
  const spAtkIvRef = useRef<HTMLInputElement>(null);
  const spDefIvRef = useRef<HTMLInputElement>(null);
  const speedIvRef = useRef<HTMLInputElement>(null);

  const CalcHpType = () => {
    const HP = hpIvRef?.current?.value ?? '0';
    const HP_BIT = (parseInt(HP) % 2 === 0 ? 0 : 1) * 1;

    const ATK = atkIvRef?.current?.value ?? '0';
    const ATK_BIT = (parseInt(ATK) % 2 === 0 ? 0 : 1) * 2;

    const DEF = defIvRef?.current?.value ?? '0';
    const DEF_BIT = (parseInt(DEF) % 2 === 0 ? 0 : 1) * 4;

    const SP_ATK = spAtkIvRef?.current?.value ?? '0';
    const SP_ATK_BIT = (parseInt(SP_ATK) % 2 === 0 ? 0 : 1) * 16;

    const SP_DEF = spDefIvRef?.current?.value ?? '0';
    const SP_DEF_BIT = (parseInt(SP_DEF) % 2 === 0 ? 0 : 1) * 32;

    const SPEED = speedIvRef?.current?.value ?? '0';
    const SPEED_BIT = (parseInt(SPEED) % 2 === 0 ? 0 : 1) * 8;

    const HP_TYPE_INT = Math.floor(
      ((HP_BIT + ATK_BIT + DEF_BIT + SPEED_BIT + SP_ATK_BIT + SP_DEF_BIT) *
        15) /
        63
    );

    const HP_TYPE_NAME = HIDDEN_POWER_TABLE.filter(
      (type) => type.id === HP_TYPE_INT
    )[0];

    setHpType(HP_TYPE_NAME.type);
  };

  return (
    <main>
      <h1 className='separator'>
        <span>Hidden Power Calculator</span>
      </h1>

      <div className='flex col'>
        <div className='flex row center'>
          <div>
            <h3>HP</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={hpIvRef}
              />
            </div>
          </div>
          <div>
            <h3>Attack</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={atkIvRef}
              />
            </div>
          </div>
          <div>
            <h3>Defense</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={defIvRef}
              />
            </div>
          </div>
          <div>
            <h3>Sp. Attack</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={spAtkIvRef}
              />
            </div>
          </div>
          <div>
            <h3>Sp. Defense</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={spDefIvRef}
              />
            </div>
          </div>
          <div>
            <h3>Speed</h3>
            <div className='input-field'>
              <input
                type='number'
                placeholder='0'
                min='0'
                max='31'
                ref={speedIvRef}
              />
            </div>
          </div>
        </div>

        <div className='flex col'>
          <div className='flex'>
            <h2>Hidden Power Type:</h2>
            <h2>{hpType}</h2>
          </div>
          <div className='flex center'>
            <button onClick={() => CalcHpType()}>Calculate HP Type</button>
          </div>
        </div>
      </div>

      <br />

      <h1 className='separator'>
        <span>Highest Possible IVs Per Type</span>
      </h1>

      <div className='flex center'>
        <table className='styled wide text-center'>
          <thead>
            <tr>
              <th>Typing</th>
              <th>HP</th>
              <th>Atk</th>
              <th>Def</th>
              <th>Sp. Atk</th>
              <th>Sp. Def</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bug</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Dark</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Dragon</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Electric</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Fighting</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Fire</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Flying</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Ghost</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Grass</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Ground</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Ice</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Poison</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
              <td>30</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Psychic</td>
              <td>30</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Rock</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Steel</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
            </tr>
            <tr>
              <td>Water</td>
              <td>31</td>
              <td>31</td>
              <td>31</td>
              <td>30</td>
              <td>31</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
