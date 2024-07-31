// rfce: React Functional Expoer Component.
// rcc: React Class Components.

import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [showModal, SetShowModal] = useState();

  function showModalHandler() {
    SetShowModal(true);
  }

  function closeModalHandler() {
    SetShowModal(false);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
        {showModal && <Backdrop onClick={closeModalHandler} />}
        {showModal && (
          <Modal text="Are you sure?" onClose={closeModalHandler} />
        )}
      </div>
    </div>
  );
}

export default Todo;
