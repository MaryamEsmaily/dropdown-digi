import React, { useEffect, useRef, useState } from "react";

const DGXDropdown = ({ options, onChange, value, children }) => {
  const ref = useRef();
  const [openDropDown, setOpenDropDown] = useState(false);

  let data = {
    key: -1,
    name: "یک مورد را انتخاب کنید",
  };

  const handleClick = () => {
    setOpenDropDown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div className="drop-down" ref={ref}>
      <div
        className={`input size text color ${openDropDown && "active"}`}
        onClick={handleClick}
      >
        {value?.name ?? data.name}
      </div>
      {openDropDown && (
        <div className="list size color">
          {options.map((item) => (
            <div
              key={item.key}
              onClick={() => {
                onChange(item);
                handleClick();
              }}
            >
              <div className="flex item">
                <div className="size text">{item.name}</div>
                {children && <div>{children(item)}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DGXDropdown;
