import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-wrap items-center border p-2 rounded">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
        >
          {tag}
          <button
            type="button"
            className="ml-1"
            onClick={() => removeTag(index)}
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        className="flex-grow p-1 border-none outline-none"
        placeholder="Enter a tag and press Enter"
      />
    </div>
  );
};

export default TagInput;
