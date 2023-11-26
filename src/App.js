import { useState } from "react";
import Button from "./componants/Button/Button";
import FriendList from "./componants/FriendList/FriendList";
import FormAddFriend from "./componants/FormAddFriend/FormAddFriend";
import FormSplitBill from "./componants/FormSplitBill/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "khaled",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 7,
  },
  {
    id: 933372,
    name: "Sara",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: -20,
  },
  {
    id: 499476,
    name: "Essam",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((currentSelected) =>
      currentSelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            handleSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}

          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            key={selectedFriend.id}
            handleSplitBill={handleSplitBill}
            selectedFriend={selectedFriend}
          />
        )}
      </div>
    </>
  );
}
