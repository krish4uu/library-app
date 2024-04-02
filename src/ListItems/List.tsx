import React, { useState } from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { listArray } from "../ListsArray";
import { ListItem } from "../ListsArray";

export const List: React.FC = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <>
      <ul className="flex flex-col w-full">
        {listArray.map((item: ListItem) => (
          <>
            <li key={item.id}>
              <div
                className="flex gap-6 mt-2 pt-2 pb-1"
                onMouseEnter={(e) => setMouseOver(true)}
                onMouseLeave={() => setMouseOver((prev) => !prev)}
              >
                <button type="submit">
                  <MdOutlinePushPin
                    size={`2rem`}
                    fill="skyblue"
                    className={`rotate-45 ${
                      mouseOver ? "visible" : "invisible"
                    }`}
                    onClick={(e) => e.preventDefault()}
                  />
                </button>
                <div className="flex justify-between w-full">
                  <header className="text-2xl font-semibold max-w-screen-sm flex-wrap text-gray-500">
                    <h1>{item.title}</h1>
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
                    {item.collaborators ? (
                      <>
                        {item.collaboratorsName.length > 1 ? (
                          <>
                            <p className="text-gray-500">
                              {item.collaboratorsName
                                .toString()
                                .replaceAll(",", ` and `)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-500">
                              {item.collaboratorsName.join(",")}
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <p className="text-gray-500">"Add Collaborators"</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-400 italic">{item.time}</p>
              </div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
