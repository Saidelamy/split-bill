import { useState } from "react";
import Button from "../Button/Button";

export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  // const [billValue, setBillValue] = useState("");
  // const [paidByUser, setPaidByUser] = useState("");
  // const paidByFriend = billValue ? billValue - paidByUser : "";
  // const [whoIsPaying, setWhoIsPaying] = useState("user");

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (!billValue || !paidByUser) return;

  //   handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  // }

  const [billValue, setBillValue] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = billValue ? billValue - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !paidByUser) return;
    handleSplitBill();
  }
  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💸Bill value</label>
        <input
          type="text"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />

        <label>💰Your expinece</label>
        <input
          type="text"
          value={paidByUser}
          // if user write number bigger than the bill value
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > billValue
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label>🤑{selectedFriend.name}'s expinece</label>
        <input type="text" disabled value={paidByFriend} />

        <label>who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </>
  );
}
