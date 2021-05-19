import DisplayRatting from "./ratting/displayRatting";

function Card({ marker }) {
  return (
    <div className="p-4 w-80">
      {marker.image && (
        <img
          className="w-full h-40 object-cover neo_shadow"
          src={marker.image}
          alt="location"
        />
      )}
      <h3 className="pt-2">{marker.title}</h3>
      <div>
        <p>{marker.description}</p>
        <p>{marker.comments}</p>
        <DisplayRatting stars={marker.ratting} />
      </div>
    </div>
  );
}

export default Card;
