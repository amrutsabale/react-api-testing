import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="posts">
            <button onClick={fetchPosts}>Load Posts</button>
            <Link to="/">Go Back</Link>
            <h3>All Posts</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (

                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
