import { firebaseConfig } from "../src/firebase/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./index-reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectView from "./views/ProjectView/ProjectView";
import TableView from "./views/TableView/TableView";
import Nav from "./views/Nav/Nav";
import { useEffect, useState } from "react";
import LandingView from "./views/LandingPage/LandingPage";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const users = snapshot.docs.map((user) => {
          return {
            ...user.data(),
            id: user.id,
          };
        });
        setData(users);
      });
  }, []);
  console.log(data);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/board/:projectName">
          <ProjectView
            board={data.length !== 0 ? data.board : []}
            setData={setData}
            userId={data.length !== 0 ? data.id : ""}
          />
        </Route>
        <Route path="/board">
          <TableView
            board={data.length !== 0 ? data.board : []}
            setData={setData}
            userId={data.length !== 0 ? data.id : ""}
          />
        </Route>
        <Route path="/">
          <LandingView data={data} setData={setData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
