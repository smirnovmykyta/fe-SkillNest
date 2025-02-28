import {useState} from "react";
import _ from "lodash";

import { defaultAdvertisement } from "../constant/defaultAdvertisement.js";
import { languages } from "../constant/languages.js";
import { category } from "../constant/category.js";
import { qualifications } from "../constant/qualifications.js";
import {lessonMode} from "../constant/lessonMode.js";

const CreateAdvertisement = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [language, setLanguage] = useState({
    language: languages[0],
    qualification: qualifications[0],
  });

  const [formData, setFormData] = useState(defaultAdvertisement);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLanguageChange = (e) => {
    const { name, value } = e.target;
    setLanguage({
      ...language,
      [name]: value,
    });
  };

  const addLanguage = () => {
    if(formData.languages.some(el => _.isEqual(el, language))) return;

    setFormData({
      ...formData,
      languages: [...formData.languages, language],
    });
  };

  const removeLanguage = (key) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter(
          (_, index) => index !== key
      ),
    });
  };

  const handleTimeAvailabilityChange = (e) => {
    const { name, value } = e.target;
    name === "date" ? setDate(value) : setTime(value);
  };

  const addTimeAvailability = () => {
    if (!date || !time || formData.timeAvailability.some(el => _.isEqual(el, { date, time }))) return;
    setFormData({
      ...formData,
      timeAvailability: [...formData.timeAvailability, { date, time }],
    });
    setDate("");
    setTime("");
  };

  const removeTimeAvailability = (key) => {
    setFormData({
      ...formData,
      timeAvailability: formData.timeAvailability.filter(
        (_, index) => index !== key
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
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Media: </span>
          </label>
          <input
              type="text"
              name="media"
              value={formData.media}
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
              name="offer"
              onChange={handleChange}
              className="input input-bordered ml-auto "
          />
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Looking for: </span>
          </label>
          <input
              required
              type="text"
              name="request"
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
            {category.map((el, id) => (
                <option key={id} value={el}>
                  {el}
                </option>
            ))}
          </select>
        </div>

        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Time Availability: </span>
          </label>
          <div className="flex space-x-2 mb-2">
            <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => handleTimeAvailabilityChange(e)}
                className="input input-bordered"
            />
            <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => handleTimeAvailabilityChange(e)}
                className="input input-bordered"
            />
          </div>
          <button
              type="button"
              onClick={addTimeAvailability}
              className="btn btn-secondary"
          >
            Add Time
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Available at</h2>
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
                    <td
                        onClick={() => removeTimeAvailability(index)}
                        className="btn btn-error"
                    >
                      x
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="form-control ">
          <label className="cursor-pointer label flex mb-2 mr-[295px]">
            <span className="mr-1 label-text">Group Teaching: </span>
            <input
                type="checkbox"
                name="isGroup"
                checked={formData.isGroup}
                onChange={handleChange}
                className="checkbox ml-auto "
            />
          </label>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Lesson Mode: </span>
          </label>
          <select
              required
              name="lessonMode"
              onChange={handleChange}
              className="select select-bordered ml-auto "
          >
            {lessonMode.map((el, id) => (
                <option key={id} value={el}>
                  {el}
                </option>
            ))}
          </select>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Location: </span>
          </label>
          <input
              type="text"
              name="location"
              onChange={handleChange}
              className="input input-bordered ml-auto "
          />
        </div>

        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Languages:</span>
          </label>
          <select
              name="language"
              onChange={handleLanguageChange}
              className="select select-bordered ml-auto "
          >
            {languages.map((el, id) => (
                <option key={id} value={el}>
                  {el}
                </option>
            ))}
          </select>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Qualifications:</span>
          </label>
          <select
              name="qualification"
              onChange={handleLanguageChange}
              className="select select-bordered ml-auto "
          >
            {qualifications.map((el, id) => (
                <option key={id} value={el}>
                  {el.charAt(0).toUpperCase() + el.slice(1)}
                </option>
            ))}
          </select>
        </div>
        <div className="flex mb-2 ml-auto">
          <button
              type="button"
              onClick={addLanguage}
              className="btn ml-auto mr-2"
          >
            Add
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Your languages</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
              <tr>
                <th>Language</th>
                <th>Qualification</th>
              </tr>
              </thead>
              <tbody>
              {formData.languages.map((item, index) => (
                  <tr key={index}>
                    <td>{item.language}</td>
                    <td>{item.qualification.charAt(0).toUpperCase() + item.qualification.slice(1)}</td>
                    <td
                        onClick={() => removeLanguage(index)}
                        className="btn btn-error"
                    >
                      x
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
        <button type="submit" className="btn btn-primary flex ml-auto mt-2">
          Submit
        </button>
      </div>
    </form>
  );
};
export default CreateAdvertisement;
