import { useAtom } from 'jotai';
import { useState } from 'react';
import atoms from '../../util/atoms';

function IndexSVG({ page }: { page: string }) {
  const [darkMode] = useAtom(atoms.darkMode);
  
  // State to manage colors
  const [innerColor, setInnerColor] = useState(darkMode ? '#262626' : 'white'); // Initial inner color
  const [outerColor, setOuterColor] = useState(darkMode ? '#f5a623' : '#7ed321'); // Initial outer color

  // Handle click to change colors
  const handleClick = () => {
    setInnerColor('#262626'); // Change inner color to #262626
    setOuterColor('white'); // Change outer color to white
  };

  return (
    <svg
      aria-label="Messenger"
      className="ml-[10px] cursor-pointer sm:ml-[22px]"
      height="28"
      role="img"
      viewBox="0 0 24 24"
      width="28"
      onClick={handleClick} // Attach click handler
    >
      <path
        d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
        stroke={darkMode ? outerColor : '#262626'}
        strokeMiterlimit="10"
        strokeWidth="1.739"
        fill={
          page === 'Inbox'
            ? darkMode
              ? outerColor
              : '#262626'
            : darkMode
            ? '#262626'
            : 'white'
        }
      />
      <path
        d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
        fillRule="evenodd"
        fill={
          page === 'Inbox'
            ? darkMode
              ? innerColor
              : 'white'
            : darkMode
            ? 'white'
            : innerColor
        }
      />
    </svg>
  );
}

export default IndexSVG;