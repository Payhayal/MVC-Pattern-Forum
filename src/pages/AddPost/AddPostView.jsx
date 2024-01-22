const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Topic</h2>
      <fieldset>
        <label>Username:</label>
        <input
          // az input oldugunda bu yapilabilir ama input sayisi cok oldugunda kod kalabaligi olur tekrara duser >>
          // onChange={(e) => {setForm({...form, user:e.target.value})}}
          onChange={(e) => onInputChange("user", e.target.value)}
          type="text"
          placeholder="Ex:Jack"
        />
      </fieldset>

      <fieldset>
        <label>Title:</label>
        <input
          onChange={(e) => onInputChange("title", e.target.value)}
          type="text"
          placeholder="Ex:MVC Pattern"
        />
      </fieldset>
      <fieldset>
        <label>Text:</label>
        <textarea
          onChange={(e) => onInputChange("text", e.target.value)}
          type="text"
          placeholder="write something here..."
          maxLength={"100"}
        />
      </fieldset>
      <button>Send</button>
    </form>
  );
};

export default AddPostView;
