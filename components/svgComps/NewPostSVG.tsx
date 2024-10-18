import { useAtom } from 'jotai';
import atoms from '../../util/atoms';

function NewPostSVG() {
  const [darkMode] = useAtom(atoms.darkMode);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      id="newpost"
      className="ml-[10px] cursor-pointer sm:ml-[22px]"
      height="24"
      width="24"
    >
      <path
        fill={darkMode ? "#d85b53" : "#d85b53"} // Change color based on darkMode if needed
        fillRule="evenodd"
        d="M4 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.5h2V20a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h9.5v2H4Z"
        clipRule="evenodd"
        className="color000000 svgShape"
      />
      <path
        fill={darkMode ? "#d85b53" : "#d85b53"} // Change color based on darkMode if needed
        fillRule="evenodd"
        d="M22 6h-6V4h6v2Z"
        clipRule="evenodd"
        className="color000000 svgShape"
      />
      <path
        fill={darkMode ? "#d85b53" : "#d85b53"} // Change color based on darkMode if needed
        fillRule="evenodd"
        d="M20 2v6h-2V2h2Z"
        clipRule="evenodd"
        className="color000000 svgShape"
      />
    </svg>
  );
}

export default NewPostSVG;