import { useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

import { defaultAdvertisement } from "../constant/defaultAdvertisement.js";
import { languages } from "../constant/languages.js";
import { category } from "../constant/category.js";
import { qualifications } from "../constant/qualifications.js";
import { lessonMode } from "../constant/lessonMode.js";
import { createAdvertisement } from "../api/advertisementApi.js";

const CreateAdvertisement = () => {
  const navigate = useNavigate();
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
    if (formData.languages.some((el) => _.isEqual(el, language))) return;

    setFormData({
      ...formData,
      languages: [...formData.languages, language],
    });
  };

  const removeLanguage = (key) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter((_, index) => index !== key),
    });
  };

  const handleTimeAvailabilityChange = (e) => {
    const { name, value } = e.target;
    name === "date" ? setDate(value) : setTime(value);
  };

  const addTimeAvailability = () => {
    if (
      !date ||
      !time ||
      formData.timeAvailability.some((el) => _.isEqual(el, { date, time }))
    )
      return;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.languages.length === 0) {
      toast.error("Please add at least one language.");
      return;
    }

    try {
      const res = await createAdvertisement(formData);

      toast.success("Advertisement created successfully!");

      navigate(`/card/${res._id}`);
    } catch (err) {
      toast.error("Ops, failed to create advertisement, try again!");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-6xl mx-auto bg-white space-y-4 border border-gray-200 shadow-2xl rounded-2xl p-6 transition-all hover:shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="w-full flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="label">Media:</label>
            <input
              type="text"
              name="media"
              value={formData.media}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Category:</label>
            <select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              {category.map((el, id) => (
                <option key={id} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="label">My Offer:</label>
              <input
                required
                type="text"
                name="offer"
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="label">Looking for:</label>
              <input
                required
                type="text"
                name="request"
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="label">Description:</label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full min-h-[100px]"
            />
          </div>
        </div>

        <div className="w-full flex flex-col space-y-4">
          <div className="flex flex-col">
            <label className="label">Time Availability:</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="date"
                name="date"
                value={date}
                onChange={(e) => handleTimeAvailabilityChange(e)}
                className="input input-bordered w-full"
              />
              <input
                type="time"
                name="time"
                value={time}
                onChange={(e) => handleTimeAvailabilityChange(e)}
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="button"
              onClick={addTimeAvailability}
              className="btn btn-primary w-full sm:w-auto mt-2 hover:bg-indigo-500"
            >
              Add Time
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full text-sm">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {formData.timeAvailability.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td
                      onClick={() => removeTimeAvailability(index)}
                      className="btn btn-error px-2"
                    >
                      x
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center space-x-2">
            <label className="label">Group Teaching:</label>
            <input
              type="checkbox"
              name="isGroup"
              checked={formData.isGroup}
              onChange={handleChange}
              className="checkbox"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Lesson Mode:</label>
            <select
              required
              name="lessonMode"
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              {lessonMode.map((el, id) => (
                <option key={id} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="label">Location:</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full col-span-2 flex flex-col space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="label">Languages:</label>
              <select
                name="language"
                onChange={handleLanguageChange}
                className="select select-bordered w-full"
              >
                {languages.map((el, id) => (
                  <option key={id} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="label">Qualifications:</label>
              <select
                name="qualification"
                onChange={handleLanguageChange}
                className="select select-bordered w-full"
              >
                {qualifications.map((el, id) => (
                  <option key={id} value={el}>
                    {el.charAt(0).toUpperCase() + el.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex mb-2 ml-auto">
            <button
              type="button"
              onClick={addLanguage}
              className="btn btn-primary ml-auto mr-2 hover:bg-indigo-500 "
            >
              Add
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="table w-full text-sm">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Qualification</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {formData.languages.map((item, index) => (
                  <tr key={index}>
                    <td>{item.language}</td>
                    <td>
                      {item.qualification.charAt(0).toUpperCase() +
                        item.qualification.slice(1)}
                    </td>
                    <td
                      onClick={() => removeLanguage(index)}
                      className="btn btn-error px-2"
                    >
                      x
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto mt-4 hover:bg-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default CreateAdvertisement;
