import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import paperClip from "../../assets/images/icon/paperclip.svg";

export default function ProfileModal({ refetch }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [form, setForm] = useState({
    phone: "",
    postalcode: "",
    address: "",
    image: "",
  });

  const [previewName, setPreviewName] = useState("");
  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.file : e.target.value,
    });

    if (e.target.type === "file") {
      setPreviewName(e.target.files[0].name);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const formData = new FormData();
      formData.set("phone", form.phone)
      formData.set("postalcode", form.postalcode)
      formData.set("address", form.address)
      formData.set("image", form.image[0], form.image[0].name);

      await API.patch("/profile", formData, config);

      setShow(false);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <button className="btnProfile login mb-2" onClick={handleShow}>
        Edit Profile
      </button>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="authContainer">
            <h1 className="authTitle">Edit Profile</h1>
            <input
              type="text"
              className="inputAuth p-2"
              placeholder="Phone"
              name="phone"
              id="phone"
              onChange={handleOnChange}
            />
              <input
                type="number"
                className="inputAuth p-2"
                placeholder="Postal Code"
                name="postalcode"
                id="postalcode"
                onChange={handleOnChange}
              />
            <input
              type="text"
              className="inputAuth p-2"
              placeholder="Address"
              name="address"
              id="address"
              onChange={handleOnChange}
            />
            <input
              type="file"
              name="image"
              id="addProfileImage"
              hidden
              onChange={handleOnChange}
            />
            <label
              htmlFor="addProfileImage"
              className={
                previewName === "" ? "addProfileImage" : "previewPhoto"
              }
            >
              {previewName === "" ? "Photo Profile" : previewName}
              <img src={paperClip} alt="paperClip" className="paperClip"/>
            </label>

            <button className="btnAuth mb-4">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
}
