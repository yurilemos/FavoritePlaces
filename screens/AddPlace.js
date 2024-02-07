import PlaceForm from "../componets/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
