import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  const [select, setSelect] = useState([]);
  const data = [
    ["Erik", 30, "Barcelona", "dbcbcbdd"],
    ["Andrea", 27, "Barcelona", "ddhhd"],
    ["Paula", 16, "Calella", "bcbc"],
    ["Paula", 16, "Calella", "ncxnxn"],
    ["Paula", 16, "Calella", "nxnxbc"],
    ["Paula", 16, "Calella", "cnbcb"],
    ["Paula", 16, "Calella", "xxxbx"],
    ["Paula", 16, "Calella", "xnbcc"],
    ["Paula", 16, "Calella", "cbbc"],
    ["Paula", 16, "Calella", "nccnnc"],
  ];

  const handleMouseDown = (e, row, col) => {
    setSelect([row, col]);
  };

  const getClassName = (row, col) => {
    if (!select) return "";

    let [endRow, endCol] = select;

    if ((row === endRow && col <= endCol) || (col == endCol && row < endRow)) {
      return "Selected";
    }
  };


  return (
    <table style={{ width: "800px", height: "400px" }}>
      <tbody>
        {data.map((row, i) => (
          <tr>
            {row.map((elem, j) => (
              <td
                onMouseEnter={(e) => handleMouseDown(e, i, j)}
                className={getClassName(i, j)}
              >
                {elem}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
