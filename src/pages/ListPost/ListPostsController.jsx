import React, { useEffect, useState } from "react";
import ListPostsView from "./ListPostsView";
import axios from "axios";

// Kullanıcı etkilesimiyle tetiklenicek fonksiyonlar
// Veri çekme istekleri yapılır
// View'ın ihtiyacı olan veriler prop olarak gönderilir

const ListPostsController = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setData(res.data));
  }, []);

  // Controller bilesenlerinde View dondurulur ve gerekli proplar gonderilir
  return (
    <ListPostsView
      data={data}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
      userName={userName}
      setUserName={setUserName}
    />
  );
};

export default ListPostsController;
