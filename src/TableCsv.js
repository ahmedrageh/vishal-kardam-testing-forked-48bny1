import { CSVLink, CSVDownload } from "react-csv";
import React from "react";
const csvData = [
  {
    _id: "6179da04f25b022d0dc7af2a",
    type: "debit",
    amount: 20000,
    narration:
      "VIA GTWORLD TXD_WNZSTOQTS1 - MONO TEST PAYMENT  REF:252239767000000002002108100854  FROM HASSAN ABDULHAMID TOMIWA  TO  MONO TECHNOLOGIES NIGERIA LTD",
    date: "2021-08-10T03:24:00.100Z",
    balance: 41858
  },
  {
    _id: "6179da04f25b022d0dc7af2b",
    type: "debit",
    amount: 20000,
    narration:
      "VIA GTWORLD TXD_QZLHWTTLPK - MONO TEST PAYMENT  REF:252239767000000002002108091300  FROM HASSAN ABDULHAMID TOMIWA  TO  MONO TECHNOLOGIES NIGERIA LTD",
    date: "2021-08-09T07:30:00.300Z",
    balance: 61858
  },
  {
    _id: "6179da04f25b022d0dc7af2c",
    type: "debit",
    amount: 1600000,
    narration:
      "VIA GTWORLD  REF:252239767000000160002108091221  FROM HASSAN ABDULHAMID TOMIWA  TO  OLATUNBOSUN TOBILOBA EMMANUEL",
    date: "2021-08-09T06:50:00.500Z",
    balance: 81858
  },
  {
    _id: "6179da04f25b022d0dc7af2d",
    type: "debit",
    amount: 10000,
    narration:
      "VIA INTERNET BANKING TXD_YUJ84Z7JG6 - MONO TEST PAYMENT  FROM HASSAN ABDULHAMID TOMIWA  TO  MONO TECHNOLOGIES NIGERIA LTD",
    date: "2021-08-09T04:57:00.100Z",
    balance: 1681858
  },
  {
    _id: "6179da04f25b022d0dc7af2e",
    type: "debit",
    amount: 10000,
    narration:
      "VIA INTERNET BANKING TXD_PAB83CALPA - MONO TEST PAYMENT  FROM HASSAN ABDULHAMID TOMIWA  TO  MONO TECHNOLOGIES NIGERIA LTD",
    date: "2021-08-09T04:30:00.100Z",
    balance: 1691858
  },
  {
    _id: "6179da04f25b022d0dc7af2f",
    type: "debit",
    amount: 475000,
    narration: " -083964- -952121-BUKKA HUT              LANG           NG ",
    date: "2021-08-09T03:08:00.400Z",
    balance: 1701858
  }
];

export default function TableCsv() {
  return (
    <>
      <CSVLink data={csvData} target="_blank">
        Download
      </CSVLink>
    </>
  );
}
