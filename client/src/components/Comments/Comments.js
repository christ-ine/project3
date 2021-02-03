import React, { useState, useRef, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { format, formatDistanceToNow } from 'date-fns';
import { LikeButton, DislikeButton, FooterContents } from './CommentsElements'
import API from "../../utils/API";

const Comments = ({ comment }) => {
    const [count, setCount] = useState(comment.likes)
    const [user, setUser] = useState({})

    
    function increment() {
        API.likeComment(comment.id)
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        API.dislikeComment(comment.id)
        setCount(prevCount => prevCount - 1)
    }


    useEffect(() => {
        loadUsers()
    }, [])


    function loadUsers() {
        API.getUser(comment.UserId)
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };
    
    const commentDate = formatDistanceToNow(new Date(comment.createdAt))

    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title>
                        <Link to={`/profile/${user.id}`} style={{color: 'black'}}>
                        {user.userName}
                        </Link>
                    </Card.Title>
                    <Card.Text className="px-5"> {comment.comment}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <FooterContents>
                        <small className="text-muted">Posted: {commentDate}</small>
                        <div>
                            <LikeButton onClick={increment} />
                            <span>{count}</span>
                            <DislikeButton onClick={decrement} />
                        </div>

                        {/* <ReplyComment /> */}
                    </FooterContents>
                </Card.Footer>
            </Card>
            
        </div>
    )
}

export default Comments
