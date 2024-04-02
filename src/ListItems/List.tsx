import React, { useState } from "react";

import { MdOutlinePushPin } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export const List = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <ul className="flex flex-col w-full">
        <li key={1}>
          <div
            className="flex gap-6 mt-2 pt-2 pb-1"
            onMouseEnter={(e) => setMouseOver(true)}
            onMouseLeave={() => setMouseOver((prev) => !prev)}
          >
            <button type="submit">
              <MdOutlinePushPin
                size={`2rem`}
                fill="skyblue"
                className={`rotate-45 ${mouseOver ? "visible" : "invisible"}`}
                onClick={(e) => e.preventDefault()}
              />
            </button>
            <div className="flex justify-between w-full">
              <header className="text-2xl font-semibold max-w-screen-sm flex-wrap text-gray-500">
                <h1>
                  Introduction of Large Language Model and Retrieval Augmented
                  Generation
                </h1>
              </header>
              <button type="submit">
                <MdDeleteOutline
                  size={`2rem`}
                  fill="red"
                  className={`${mouseOver ? "visible" : "invisible"}`}
                  onClick={(e) => e.preventDefault()}
                />
              </button>
            </div>
          </div>

          <div className="flex gap-2 justify-between items-end">
            <div className="flex gap-6 ">
              <span className="p-4 invisible"></span>
              <div className="flex gap-2 items-end">
                <MdOutlinePersonAddAlt size={`2rem`} fill="gray" />
                <p className="text-gray-500">
                  Roger Craig <span className="text-gray-400">and</span> Sakeel
                  Avdhay
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">2 min ago</p>
          </div>
        </li>
        <li key={2}>
          <div
            className="flex gap-6 mt-2 pt-2 pb-1 "
            onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          >
            <button type="submit">
              <MdOutlinePushPin
                size={`2rem`}
                fill="skyblue"
                className={`rotate-45 ${mouseOver ? "visible" : "invisible"}`}
                onClick={(e) => e.preventDefault()}
              />
            </button>
            <div className="flex justify-between w-full">
              <header className="text-2xl font-semibold max-w-screen-sm flex-wrap text-gray-500">
                <h1>Always Look On The Bright Side Of Life</h1>
              </header>
              <button type="submit">
                <MdDeleteOutline
                  size={`2rem`}
                  fill="red"
                  className={`${mouseOver ? "visible" : "invisible"}`}
                  onClick={(e) => e.preventDefault()}
                />
              </button>
            </div>
          </div>

          <div className="flex gap-2 justify-between items-end">
            <div className="flex gap-6 ">
              <span className="p-4 invisible"></span>
              <div className="flex gap-2 items-end">
                <MdOutlinePersonAddAlt size={`2rem`} fill="gray" />
                <p className="text-gray-500">Mick Zomnir</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">2 min ago</p>
          </div>
        </li>
        <li key={3}>
          <div
            className="flex gap-6 mt-2 pt-2 pb-1"
            onMouseEnter={(e) => setMouseOver(true)}
            onMouseLeave={() => setMouseOver((prev) => !prev)}
          >
            <button type="submit">
              <MdOutlinePushPin
                size={`2rem`}
                fill="skyblue"
                className={`rotate-45 ${mouseOver ? "visible" : "invisible"}`}
                onClick={(e) => e.preventDefault()}
              />
            </button>
            <div className="flex justify-between w-full">
              <header className="text-2xl font-semibold max-w-screen-sm flex-wrap text-gray-500">
                <h1>And Now For Something Completely Different</h1>
              </header>
              <button type="submit">
                <MdDeleteOutline
                  size={`2rem`}
                  fill="red"
                  className={`${mouseOver ? "visible" : "invisible"}`}
                  onClick={(e) => e.preventDefault()}
                />
              </button>
            </div>
          </div>

          <div className="flex gap-2 justify-between items-end">
            <div className="flex gap-6 ">
              <span className="p-4 invisible"></span>
              <div className="flex gap-2 items-end">
                <MdOutlinePersonAddAlt size={`2rem`} fill="gray" />
                <p className="text-gray-500">Add Collaborators</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 italic">2 min ago</p>
          </div>
        </li>
      </ul>
    </>
  );
};
