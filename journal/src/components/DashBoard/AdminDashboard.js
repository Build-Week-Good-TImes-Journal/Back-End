import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
// import Header from "./Header"
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { Container, ActInfo3 } from "../../Styles/style-widgets";
import { Container2 } from "../Login/Login";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const Store = JSON.parse(window.localStorage.getItem("message"));

  useEffect(() => {
    api()
      .get("/api/users/")
      .then(res => {
        setUsers(res.data.users);
        localStorage.setItem("Users", JSON.stringify(res.data.users));
        setMessage(Store);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (event, id) => {
    event.preventDefault();
    api()
      .delete(`api/users/${id}`)
      .then(res => {
        console.log("user was deleted");
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
        <Container2>
      {/*<Header/>*/}
      <ActInfo3>{message}</ActInfo3>
      </Container2>
      {users.map(user => (
        <div key={user.id}>
          <Table>
            <TableHead>
              <div>
              
                <Container className = "userContainer">
                
                  <TableRow className="tabl67p">
                    {/* <p>User Name:</p> */}
                    <TableCell>User Name: {user.username}</TableCell>
                    {/* <p>Role:</p> */}
                    <TableCell>Role: {user.role}</TableCell>
                    {/* <p>Created At:</p> */}
                    <TableCell>Created at: {user.created_at}</TableCell>
                  </TableRow>
                  <Button onClick={e => handleDelete(e, user.id)}>
                    delete
                  </Button>
                  <Button>
                    <Link to={`/users/${user.id}`}>Edit</Link>
                  </Button>{" "}
                  <br />
                  <br />
                  <br />
                </Container>
              </div>
            </TableHead>
          </Table>
        </div>
      ))}
    </div>
  );
}

export default Users;
