import React from 'react';
import {
    BrowserRouter as Router,
    useParams,
  } from "react-router-dom";

function Post() {
    let { id } = useParams();
    return (
        <div>
                <h3>{id}</h3>
        </div>
    )
}



export default Post
