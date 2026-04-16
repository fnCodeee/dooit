import { useEffect, useState } from "react";

export default function Modal({ onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className=" h-screen py-4 fixed z-20 pl-6 w-full flex bg-black/50">
      <form
        className={`w-104 px-6 rounded-2xl bg-white flex flex-col justify-between h-full py-6 transform transition-all duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 ">
            <i class="bx bx-calendar text-blue1 text-3xl" />
            <h1 className="font-semibold text-3xl">Create Task</h1>
          </div>
          <button type="button" onClick={onClose}>
            <i class="bx bx-x text-2xl text-abu-one" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col gap-6">
          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">
              Task Name <span className="text-red-500">*</span>
            </h1>
            <input
              className="focus:outline-blue1 py-2 w-full bg-s2-blue rounded-xl px-2.5"
              type="text"
              placeholder="Enter Task Name"
            />
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Start From</h1>
            <input
              className="focus:outline-blue1 py-2 bg-s2-blue rounded-xl px-2.5"
              type="datetime-local"
              placeholder="Enter Task Name"
            />
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Priority</h1>
            <div className="flex justify-between gap-3">
              <button className="text-white text-lg bg-blue1 rounded-xl w-full py-2">
                low
              </button>
              <button className=" text-lg bg-s2-blue border border-abu-one rounded-xl w-full py-2">
                medium
              </button>
              <button className=" text-lg bg-s2-blue border border-abu-one rounded-xl w-full py-2">
                high
              </button>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Categories</h1>
            <select
              className="w-full py-2.5 px-2.5 rounded-xl border-abu-one border bg-s2-blue"
              name=""
              id=""
            >
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
        </div>

        {/*  */}
        <div className="flex gap-3">
          <button className="text-lg border border-abu-one px-6 py-3 rounded-xl">
            Cancel
          </button>
          <button className="text-lg text-white bg-blue1 py-3 w-full rounded-xl">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
