import ItemForm from "../components/ItemForm";
import { createItem } from "../api/itemApi";

function AddItemPage() {
  const handleAddItem = async (formData) => {
    try {
      const savedItem = await createItem(formData);

      console.log("Saved item:", savedItem);
      alert("Item added successfully");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item");
    }
  };

  return (
    <div>
      <h1>Report Lost or Found Item</h1>

      <ItemForm onSubmit={handleAddItem} />
    </div>
  );
}

export default AddItemPage;