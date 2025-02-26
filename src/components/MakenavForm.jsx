import { useState } from "react";

const MakenavForm = () => {
  const [formData, setFormData] = useState({
    mediaPic: "",
    mediaVid: "",
    title: "",
    description: "",
    offer: "",
    request: "",
    category: "Programmiersprache",
    isGroup: false,
    erstellungsdatum: "",
    timeAvailability: [{ type: "" }],
    ablaufZeit: "1 Monat",
    online: true,
    standort: "",
    aktiv: true,
    languages: { abrv: "", quali: "" },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NOA", formData);
  };

  return (
    // <>
    //   <div className="flex mb-2">
    //     <label htmlFor="email">Mail:</label>
    //     <input type="email" name="email" id="email" className="ml-auto" />
    //   </div>
    //   <div className="flex mb-2">
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       id="password"
    //       className="ml-auto"
    //     />
    //   </div>
    // </>
    <form onSubmit={handleSubmit} className="p-4 space-y-4 ">
      <div className="min-w-[490px] justify-content-center items-center w-[800px]">
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Media Picture URL: </span>
          </label>
          <input
            type="text"
            name="mediaPic"
            value={formData.mediaPic}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 ml-auto bg-gray-800"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Media Video URL: </span>
          </label>
          <input
            type="text"
            name="mediaVid"
            value={formData.mediaVid}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 ml-auto bg-gray-800"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Title: </span>
          </label>
          <input
            required
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 ml-auto bg-gray-800"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Description: </span>
          </label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered ml-auto bg-gray-800"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Offer: </span>
          </label>
          <input
            required
            type="text"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 ml-auto"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Category: </span>
          </label>
          <select
            required
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered bg-gray-800 ml-auto"
          >
            <option value="Programmiersprache">Programmiersprache</option>
            <option value="Sprache">Sprache</option>
            <option value="Musik">Musikinstrument</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
        {formData.category === "Programmiersprache" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered bg-gray-800 ml-auto"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
            </select>
          </div>
        )}
        {formData.category === "Sprache" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered bg-gray-800 ml-auto"
            >
              <option value="english">English</option>
              <option value="german">German</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>
        )}
        {formData.category === "Musikinstrument" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered bg-gray-800 ml-auto"
            >
              <option value="Gitarre">Gitarre</option>
              <option value="Klavier">Klavier</option>
              <option value="Paartanz">Paartanz</option>
            </select>
          </div>
        )}
        {formData.category === "Sport" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered ml-auto"
            >
              <option value="Fitness & Ernährung">Fitness & Ernährung</option>
              <option value="Schwimmen">Schwimmen</option>
              <option value="Wandern">Wandern</option>
            </select>
          </div>
        )}
        <div className="form-control ">
          <label className="cursor-pointer label flex mb-2 mr-[150px]">
            <span className="mr-1 label-text">Groupteaching: </span>
            <input
              type="checkbox"
              name="isGroup"
              checked={formData.isGroup}
              onChange={handleChange}
              className="checkbox ml-auto"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex mb-2 mr-[150px]">
            <span className="mr-1 label-text">Online: </span>
            <input
              type="checkbox"
              name="online"
              checked={formData.online}
              onChange={handleChange}
              className="checkbox ml-auto"
            />
          </label>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Location: </span>
          </label>
          <input
            type="text"
            name="standort"
            value={formData.standort}
            onChange={handleChange}
            className="input input-bordered bg-gray-800 ml-auto"
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex mb-2 mr-[150px]">
            <span className="mr-1 label-text">Active: </span>
            <input
              type="checkbox"
              name="aktiv"
              checked={formData.aktiv}
              onChange={handleChange}
              className="checkbox ml-auto"
            />
          </label>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Languages: </span>
          </label>
          <input
            type="text"
            name="sprache"
            value={formData.languages.abrv}
            onChange={(e) =>
              setFormData({
                ...formData,
                languages: [
                  {
                    ...formData.languages,
                    abrv: e.target.value,
                  },
                ],
              })
            }
            className="input input-bordered bg-gray-800 ml-auto"
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Qualification:</span>
          </label>
          <input
            type="text"
            name="quali"
            value={formData.languages.quali}
            onChange={(e) =>
              setFormData({
                ...formData,
                languages: {
                  ...formData.languages,
                  quali: e.target.value,
                },
              })
            }
            className="input input-bordered bg-gray-800 ml-auto"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MakenavForm;
