import Button from "../Button/Button";

export default function Friend({
  friend,
  handleSelectedFriend,
  selectedFriend,
}) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owns you {Math.abs(friend.balance)}$
          </p>
        )}

        <Button onClick={() => handleSelectedFriend(friend)}>
          {isSelected ? "close" : "Select"}
        </Button>
      </li>
    </>
  );
}
