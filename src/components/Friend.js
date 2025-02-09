import Button from "./Button";

export default function Friend({friend, onSelection, selectedFriend}){
    const isSlected = selectedFriend?.id === friend.id;
    return(
        <li className={isSlected ? 'selected' : ' '}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p className="red">you owe {friend.name} {Math.abs(friend.balance)}$ </p>}
            {friend.balance > 0 && <p className="green">{friend.name} owes you {Math.abs(friend.balance)}$ </p>}
            {friend.balance === 0 && <p> you and {friend.name} are even </p>}
            <Button onClick={()=> onSelection(friend)}>
                {isSlected ? "Close" : "Selected"}
            </Button>
        </li>
    )
}