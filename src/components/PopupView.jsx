import React from "react";

const PopupView = ({ userName, setShowPopup, data }) => {
  return (
    <div className="wrapper">
      <div className="popup">
        <div className="btn-wrap">
          {/* userName`i prop almak yerine (data && data[0].user) seklindede yazilabilir */}
          <h3>
            Topics of <span>{userName}</span>
          </h3>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>

        {!data && <p>Loading...</p>}
        {/* !!!    data?.map= data && data.map */}
        {data?.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupView;
