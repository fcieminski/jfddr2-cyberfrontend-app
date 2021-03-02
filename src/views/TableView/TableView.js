import NewProjectBtn from "./NewProjectBtn";
import "./NewProjectBtn.css";
import { useUser } from "../../contexts/UserContext";
import { NewAgeProjects } from "../NewAgeProjects/NewAgeProjects";
import firebase from "firebase";

function TableView() {
  const { user, userData } = useUser();

  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <div className="board-nav">
        <h3>
          Hello <span>{user.username || "Anonymous"}</span>
        </h3>
        <button className="deleteBtn" onClick={logout}>
          Logout
        </button>
      </div>
      <div>
        <h2>This is your projects:</h2>
        <NewProjectBtn userId={user.uid} />
        <NewAgeProjects />
      </div>
    </div>
  );
}

export default TableView;
