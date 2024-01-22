import { v4 } from "uuid";

class AddPostModel {
  // api`ye gonderecegimiz veri yapisi
  state = {
    id: v4(),
    date: new Date(),
    title: "",
    text: "",
    user: "",
  };
}

export default AddPostModel;
