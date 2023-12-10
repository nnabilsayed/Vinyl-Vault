import { Element } from "react-scroll";
import { vinylData } from "./vinyldata";
import Card from "./Card";
import { Link } from "react-router-dom";
const CardList = () => {
  const newVinyl = vinylData.slice(0, 8);
  return (
    <Element name="cardListSection" className="cardListSection">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newVinyl.map((vinyl) => (
          <Link to={`/albumdetails/${vinyl.id}`} key={vinyl.id}>
            <div>
              <Card
                src={vinyl.src}
                artist={vinyl.artist}
                album={vinyl.album}
                price={vinyl.price}
                id={vinyl.id} // Make sure to pass the id here
              />
            </div>
          </Link>
        ))}
      </div>
    </Element>
  );
};

export default CardList;
