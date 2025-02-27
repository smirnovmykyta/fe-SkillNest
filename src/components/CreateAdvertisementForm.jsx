import { useState } from "react";

import { defaultAdvertisemnt } from "../constant/defaultAdvertisemnt";
import { languages } from "../constant/languages.js";
import { lessons } from "../constant/lessons.js";
import { qualifications } from "../constant/qualifications.js";
import { music } from "../constant/music.js";
import { progLangs } from "../constant/progLangs.js";

const CreateAdvertisementForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [progLangs, setprogLangs] = useState("");
  const [langs, setLangs] = useState("");
  const [qualis, setQualis] = useState("");
  const [formData, setFormData] = useState(defaultAdvertisemnt);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleTimeAvailabilityChange = (e) => {
    const { name, value } = e.target;
    name === "date" ? setDate(value) : setTime(value);
  };

  const addTimeAvailability = () => {
    if (!date || !time) return;
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
            {lessons.map((lesson, id) => (
              <option key={id} value={lesson}>
                {lesson}
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
            name="languages"
            onChange={handleChange}
            className="select select-bordered ml-auto "
          >
            {languages.map((lang, id) => (
              <option key={id} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control flex mb-2">
          <label className="label">
            <span className="mr-1 label-text">Qualifications:</span>
          </label>
          <select
            required
            name="qualifications"
            onChange={handleChange}
            className="select select-bordered ml-auto "
          >
            {qualifications.map((q, id) => (
              <option key={id} value={q}>
                {q}
              </option>
            ))}
          </select>
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
export default CreateAdvertisementForm;
