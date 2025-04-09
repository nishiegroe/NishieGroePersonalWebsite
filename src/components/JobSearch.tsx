import React from "react";
import { Avatar, Card, Tooltip, Typography } from "@mui/material";
import img1 from "../assets/IMG_2444.jpg";

import { generateClient } from "aws-amplify/data";

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */
const client = generateClient();

// Now you should be able to make CRUDL operations with the
// Data client
const fetchTodos = async () => {
  const { data: todos, errors } = await client.models.Todo.list();
};

const JobSearch = () => {
  return (
    <Card
      className="Introduction"
      sx={{
        backgroundColor: "#FDFAF6",
        padding: "5px",
        margin: "15px",
        display: "flex",
        placeContent: "center",
      }}
    >
      {console.log(fetchTodos, errors)}
    </Card>
  );
};

export default JobSearch;
