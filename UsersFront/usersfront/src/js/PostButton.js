import React from "react";
import PostModal from "./PostModal";

export default function PostButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "90%",
          left: "95%",
        }}
      >
        <button
          className="btn btn-primary MyButton"
          onClick={() => setModalShow(true)}
        >
          <strong>+</strong>
        </button>
      </div>

      <PostModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
