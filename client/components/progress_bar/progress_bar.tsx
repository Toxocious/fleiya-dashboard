import './progress_bar.scss';

type ProgressBarType = {
  currentValue: number;
  maxValue?: number;
  color?: string;
  stat?: string;
};

export const ProgressBar = ({
  currentValue,
  maxValue,
  color,
  stat,
}: ProgressBarType) => {
  let bar_width = 50,
    bar_color = 126;

  if (stat) {
    bar_width = (currentValue * 150) / 100;
    if (bar_width > 179) {
      bar_width = 179;
    }

    bar_color = Math.floor((currentValue * 180) / 256);
    if (bar_color > 128) {
      bar_color = 128;
    }
  } else {
    if (maxValue) {
      bar_width = Math.floor((currentValue / maxValue) * 100);
    }
  }

  return (
    <div className='progress-bar'>
      <span
        style={{
          width: bar_width,
          backgroundColor: `hsl(${bar_color}, 85%, 45%)`,
        }}
      ></span>
      {currentValue}
    </div>
  );
};

/*
for (var i in stats) {
  stats[i] = this.getStat(i);
  var width = stats[i] * 180 / 504;
  if (i == 'hp') width = Math.floor(stats[i] * 180 / 704);
  if (width > 179) width = 179;
  var color = Math.floor(stats[i] * 180 / 714);
  if (color > 360) color = 360;
  buf += '<div><em><span style="width:' + Math.floor(width) + 'px;background:hsl(' + color + ',85%,45%);border-color:hsl(' + color + ',85%,35%)"></span></em></div>';
}
*/
