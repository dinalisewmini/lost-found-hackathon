import ItemForm from "../components/ItemForm";

function AddItemPage() {
  const handleAddItem = (formData) => {
    console.log("Submitted item:", formData);
  };

  return (
    <div>
      <h1>Report Lost or Found Item</h1>

      <ItemForm onSubmit={handleAddItem} />
    </div>
  );
}

export default AddItemPage;