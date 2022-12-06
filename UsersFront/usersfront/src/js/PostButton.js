import React from "react";
import PostModal from "./PostModal";

export default function PostButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "90%",
          left: "90%",
        }}
      >
        <button className="btn btn-primary" onClick={() => setModalShow(true)}>
          <strong>+</strong>
        </button>
      </div>

      <PostModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
