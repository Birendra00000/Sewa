import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { AuthAPI } from "../../api";

const EditEvents = ({ event, onEventUpdate }) => {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    eventLocation: "",
    startDate: "",
    deadlineDate: "",
    eventCapacity: "",
    category: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFormData({
      eventTitle: "",
      eventDescription: "",
      eventLocation: "",
      startDate: "",
      deadlineDate: "",
      eventCapacity: "",
      category: "",
    });
    setFile(null);
    setPreview(null);
  };

  const handleShow = () => setShow(true);

  const categories = [
    "Social Events",
    "Technology Workshop",
    "Education",
    "Healthcare",
    "Sports",
    "Entertainment",
  ];

  const formDateData = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (event) {
      setFormData({
        eventTitle: event.eventTitle || "",
        eventDescription: event.eventDescription || "",
        eventLocation: event.eventLocation || "",
        startDate: formDateData(event.startDate) || "",
        deadlineDate: formDateData(event.deadlineDate) || "",
        eventCapacity: event.eventCapacity || "",
        category: event.category || "",
      });
      setPreview(event.image || null); // Assuming `event.image` contains the current image URL
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Generate preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authUser = JSON.parse(localStorage.getItem("AuthUser"));
    const token = authUser?.token || null;

    const updatedEventData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      updatedEventData.append(key, value);
    });
    if (file) updatedEventData.append("file", file);

    try {
      await AuthAPI.put(`/event/${event._id}`, updatedEventData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Event updated successfully");
      onEventUpdate(); // Notify parent to refresh events
      handleClose();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <>
      <FaRegEdit
        size={20}
        className="text-blue-400 cursor-pointer"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="eventTitle"
              value={formData.eventTitle}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Deadline Date</label>
            <input
              type="date"
              name="deadlineDate"
              value={formData.deadlineDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              name="eventCapacity"
              value={formData.eventCapacity}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Event Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="form-control"
            />
            {preview && (
              <img
                src={preview}
                alt="Event Preview"
                className="img-thumbnail mt-3"
                style={{ width: "100%", maxHeight: "300px" }}
              />
            )}
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Event
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditEvents;
