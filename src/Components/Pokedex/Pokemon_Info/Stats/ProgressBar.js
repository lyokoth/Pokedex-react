import {StatColors } from '../../../Routing/api';

const ProgressBar = ({ stat, value, percentage }) => {
    const color = StatColors[stat];
    const style = {
        width: `${percentage}%`,
        backgroundColor: `${color}`,
    };
    return (
        <article className= "flex items-center justify-between w-full mb-2.5">
              <div className='flex items-center justify-between md:w-1/4 w-1/2 pr-4'>
                <p className='pr-3 text-gray-400 font-medium capitalize'>
                    {stat}
                </p>
                <span clasName="font-medium">{percentage}</span>
                </div>
                <div className="progressBar w-3/4">
                    <div className="progressBar__progress" style={style}></div>
                </div>
        </article>
    );
}
export default ProgressBar;