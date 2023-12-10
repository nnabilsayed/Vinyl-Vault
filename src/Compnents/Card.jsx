import { Link } from "react-router-dom";

import { vinylData } from "./vinyldata";
const Card = ({ src, album, artist, price, id }) => {
  return (
    <div className="max-w-xl p-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300 cursor-pointer  ">
      <img className="" src={src} alt="" />
      <div className="pl-8">
        <h2 className="">{artist}</h2>
        <h3 className="w-80 font-bold">{album}</h3>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default Card;
