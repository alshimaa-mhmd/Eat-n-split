import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setfriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleShowAddFriend(){
    setIsOpen(!isOpen);
  }

  function handleAddFriend(friend){
    setfriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }
  function handleSelection(friend){
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  }
  function handleSplitBill(value){
    console.log(value);
    setfriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance : friend.balance + value} : friend));
    setSelectedFriend(null);

  }
  return (
    <div className="app">
      <div className="sidebar">
          <FriendList friends = {friends} onSelection = {handleSelection} selectedFriend={selectedFriend}/>
          {isOpen && <FormAddFriend  onAddFriend={handleAddFriend}/>}
          <Button onClick={handleShowAddFriend}>
            {isOpen ? "Close" : "Add friend"}
          </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend = {selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id}/>}
    </div>
  );
}

export default App;
