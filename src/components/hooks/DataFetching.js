import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from 'react-router-dom';
import Post from './Post';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
     
    
    return (
        <Router>
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>
                        <Link to={`${post.id}`}>{post.id}- {post.title}</Link>
                    </li>)
                }
            </ul>
            <Switch>
                <Route path={`/:id`}>
                    <Post/>
                </Route>
            </Switch> 
        </div>
        </Router>
    )
}



export default DataFetching
