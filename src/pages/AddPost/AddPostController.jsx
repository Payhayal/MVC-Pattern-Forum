import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPostController = () => {
  const navigate = useNavigate();
  // AddPostModel`deki class`in ornegini olusturma
  const model = new AddPostModel();

  const [form, setForm] = useState(model.state);

  //   hangi inputta degisiklik varsa o input`un label`ina gore state`i gunceller
  const onInputChange = (label, value) => {
    // state`i dogrudan degistiremedigimiz icin >> state`in kopyasini aliyoruz
    const copyState = { ...form };

    // objenin dinamik bir sekilde degerlerini degistirme
    // copystate.label diyemeyiz o zmn direk label`a ulasmaya calisir bu yuzden `[label]` seklinde parantez kullaniyoruz.
    // copystate["user"] = value gibi olabilir ama hepsinin yerine fazla kod olmasin diye bu sekilde kullaniyoruz
    // update the state
    copyState[label] = value;

    // state`i guncelle
    setForm(copyState);
  };

  //   formun gonderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.text || !form.title) {
      alert("Please fill in all the fields");
      return;
    }
    axios.post("http://localhost:3000/posts", form).then(() => navigate("/"));
  };
  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;
