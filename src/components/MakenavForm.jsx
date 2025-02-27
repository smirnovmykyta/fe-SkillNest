import { useEffect, useState } from "react";

const MakenavForm = () => {
  // const [counter, setCounter] = useState(0);
  const [formData, setFormData] = useState({
    // fName: " ",
    // lName: " ",
    mediaPic: "",
    mediaVid: "",
    title: "",
    description: "",
    myoffer: "",
    looking_for: "",
    request: "",
    category: "proglangs",
    subcategory: "JavaScript",
    isGroup: false,
    // creationDate: "",
    timeAvailability: [{ date: "", time: "" }],
    expiration: "1 Month",
    onlineteaching: false,
    location: "",
    aktive: true,
    languages: "",
  });

  // useEffect(() => {
  //   setCounter(counter + 1);
  //   if (counter === 1) console.log("Noa", formData.languages);
  //   else console.log("Noa", formData.languages);
  // }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // console.log("Noa", name, value, type, checked);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTimeAvailabilityChange = (index, e) => {
    const { name, value } = e.target;
    const newTimeAvailability = formData.timeAvailability.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setFormData({ ...formData, timeAvailability: newTimeAvailability });
  };

  const addTimeAvailability = () => {
    setFormData({
      ...formData,
      timeAvailability: [...formData.timeAvailability, { date: "" }],
    });
  };

  const removeTimeAvailability = (indexToRemove) => {
    setFormData({
      ...formData,
      timeAvailability: formData.timeAvailability.filter(
        (_, index) => index !== indexToRemove
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("NOA", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 ">
      <div className="min-w-[490px] justify-content-center items-center">
        {/* <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">First Name:</span>
          </label>
          <input
            type="text"
            name="fName"
            value={formData.mediaPic}
            onChange={handleChange}
            className="input input-bordered ml-auto "
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Last Name:</span>
          </label>
          <input
            type="text"
            name="lName"
            value={formData.mediaPic}
            onChange={handleChange}
            className="input input-bordered ml-auto "
          />
        </div> */}
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Media Picture URL: </span>
          </label>
          <input
            type="text"
            name="mediaPic"
            value={formData.mediaPic}
            onChange={handleChange}
            className="input input-bordered ml-auto "
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
            className="input input-bordered ml-auto "
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
            className="input input-bordered ml-auto "
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
            className="textarea textarea-bordered ml-auto "
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">My Offer: </span>
          </label>
          <input
            required
            type="text"
            name="myoffer"
            value={formData.myoffer}
            onChange={handleChange}
            className="input input-bordered ml-auto "
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
            className="select select-bordered ml-auto "
          >
            <option value="proglangs">Programming languages</option>
            <option value="langs">Languages</option>
            <option value="musicinsts">Music instruments</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        {formData.category === "proglangs" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered ml-auto "
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Go">Go</option>
            </select>
          </div>
        )}
        {formData.category === "langs" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered ml-auto "
            >
              <option value="english">English</option>
              <option value="german">German</option>
              <option value="turkish">Turkish</option>
            </select>
          </div>
        )}
        {formData.category === "musicinsts" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered ml-auto "
            >
              <option value="Guitar">Guitar</option>
              <option value="Piano">Piano</option>
              <option value="Couple dance">Couple dance</option>
            </select>
          </div>
        )}
        {formData.category === "sports" && (
          <div className="form-control flex mb-2">
            <label className="label">
              <span className="mr-1 label-text">Subcategory: </span>
            </label>
            <select
              required
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              className="select select-bordered ml-auto "
            >
              <option value="Fitness">Fitness & Nutrition</option>
              <option value="Swimming">Swimming</option>
              <option value="Hike">Hike</option>
            </select>
          </div>
        )}
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Time Availability: </span>
          </label>
          {formData.timeAvailability.map((item, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                required
                type="date"
                name="date"
                value={item.date}
                onChange={(e) => handleTimeAvailabilityChange(index, e)}
                className="input input-bordered"
              />
              <input
                required
                type="time"
                name="time"
                value={item.time}
                onChange={(e) => handleTimeAvailabilityChange(index, e)}
                className="input input-bordered"
              />
              <button
                type="button"
                onClick={() => removeTimeAvailability(index)}
                className="btn btn-error"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addTimeAvailability}
            className="btn btn-secondary"
          >
            Add Time
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Avalable at</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {formData.timeAvailability.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label flex mb-2 mr-[295px]">
            <span className="mr-1 label-text">Groupteaching: </span>
            <input
              type="checkbox"
              name="isGroup"
              checked={formData.isGroup}
              onChange={handleChange}
              className="checkbox ml-auto "
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex mb-2 mr-[295px]">
            <span className="mr-1 label-text">Onlineteaching: </span>
            <input
              type="checkbox"
              name="online"
              checked={formData.onlineteaching}
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
            name="location"
            value={formData.standort}
            onChange={handleChange}
            className="input input-bordered ml-auto "
          />
        </div>
        <div className="form-control">
          <label className="cursor-pointer label flex mb-2 mr-[295px]">
            <span className="mr-1 label-text">Active: </span>
            <input
              type="checkbox"
              name="aktive"
              checked={formData.aktive}
              onChange={handleChange}
              className="checkbox ml-auto"
            />
          </label>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Languages:</span>
          </label>
          <select
            required
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            className="select select-bordered ml-auto "
          >
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="russian">Russian</option>
            <option value="turkish">Turkish</option>
            <option value="arabic">Arabic</option>
          </select>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Qualifications:</span>
          </label>
          <select
            required
            name="subcategory"
            value={formData.languages}
            onChange={handleChange}
            className="select select-bordered ml-auto "
          >
            <option value="native">Native</option>
            <option value="certified">Certified</option>
            <option value="fluent">Fluent</option>
            <option value="intermediate">Intermediate</option>
            <option value="beginner">Beginner</option>
          </select>

          {/* <input
            type="text"
            name="quali"
            value={formData.languages.quali}
            onChange={(e) =>
              setFormData({
                ...formData,
                languages: [
                  {
                    ...formData.languages,
                    quali: e.target.value,
                  },
                ],
              })
            }
            className="input input-bordered ml-auto "
          /> */}
        </div>
        <div className="flex mb-2 ml-auto">
          <button
            onClick={(e) => {
              e.preventDefault();
              setFormData({
                ...formData,
                languages: [...formData.languages, formData.subcategory],
              });
            }}
            className="btn ml-auto mr-2"
          >
            Add
          </button>
          <button type="clear" className="btn">
            Reset
          </button>
        </div>
        <div className="form-control flex ml-auto w-[315px] p-4 border-2">
          {formData.languages.length !== 0
            ? formData.languages + "-"
            : "No language added"}
        </div>
        <button type="submit" className="btn btn-primary flex ml-auto mt-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MakenavForm;
