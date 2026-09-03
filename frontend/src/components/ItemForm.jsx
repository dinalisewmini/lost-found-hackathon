import { useState } from "react";

function ItemForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "Lost",
    location: "",
    contactName: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.itemName || !formData.location || !formData.contactName) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Item Name</label>
        <input
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact Name</label>
        <input
          type="text"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit Item</button>
    </form>
  );
}

export default ItemForm;