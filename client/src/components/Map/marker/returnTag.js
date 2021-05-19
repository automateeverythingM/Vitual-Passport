import { ReactComponent as BasicTag } from "../../../assets/img/markersTag/pin.svg";
import { ReactComponent as LocationTag } from "../../../assets/img/markersTag/location.svg";
import { ReactComponent as PlaceTag } from "../../../assets/img/markersTag/placeholder.svg";
import { ReactComponent as RattingTag } from "../../../assets/img/markersTag/rating.svg";

const BASIC = "BASIC";
const LOCATION = "LOCATION";
const PLACE = "PLACE";
const RATTING = "RATTING";

const Tag = (type, rest) => {
  switch (type) {
    case BASIC:
      return <BasicTag {...rest} />;
    case LOCATION:
      return <LocationTag {...rest} />;
    case PLACE:
      return PlaceTag;
    case RATTING:
      return <RattingTag {...rest} />;

    default:
      return <BasicTag {...rest} />;
  }
};

export default Tag;
