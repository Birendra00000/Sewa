import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
const EditEvents = ({ event }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    deadlineDate: "",
    eventCapacity: "",
    category: "",
  });

  const [file, setFile] = useState(null);

  const categories = [
    "Social Events",
    "Technology Workshop",
    "Education",
    "Healthcare",
    "Sports",
    "Entertainment",
  ];

  // Populate form with existing event data when modal opens
  useEffect(() => {
    if (event) {
      setFormData({
        title: event.eventTitle || "",
        description: event.description || "",
        location: event.eventLocation || "",
        startDate: event.startDate || "",
        deadlineDate: event.deadlineDate || "",
        eventCapacity: event.eventCapacity || "",
        category: event.category || "",
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedEventData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      updatedEventData.append(key, value);
    });
    if (file) updatedEventData.append("file", file);

    try {
      await AuthAPI.put(`/event/${eventData._id}`, updatedEventData);
      alert("Event updated successfully");
      onClose(); // Close the modal
      refreshEvents(); // Refresh event data in the parent component
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <>
      {" "}
      <FaRegEdit
        size={20}
        className="text-blue-400 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Update Event Modal"
        className="modal-class"
        overlayClassName="overlay-class"
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Update Event</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">
                Deadline Date
              </label>
              <input
                type="date"
                name="deadlineDate"
                value={formData.deadlineDate}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Capacity</label>
              <input
                type="number"
                name="eventCapacity"
                value={formData.eventCapacity}
                onChange={handleChange}
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="p-2 border rounded-md"
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
            <div className="flex flex-col mb-4">
              <label className="text-sm font-semibold mb-1">File</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default EditEvents;
