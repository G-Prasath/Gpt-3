import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Getdata from '../../hooks/Getdata';
import { useNavigate } from 'react-router-dom';

const MinimalisticStyledForm = () => {

    const [title, setTitle] = useState("");
    const [disc, setDisc] = useState("")
    const [valerror, setValerror] = useState("")
    const navigate = useNavigate()

    const { post, error, optionsData } = Getdata('https://jsonplaceholder.typicode.com/posts', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            return setValerror("Title Should not be Empty");
        }
        if (!disc) {
            return setValerror("Discription Should not be Empty");
        }
        setValerror("")
        optionsData({ title, body: disc, userId: 1 });
        console.log({ title, body: disc, userId: 1 });
        setTitle("")
        setDisc("")
    };
    useEffect(() => {
        if (post.length !== 0) {
            const timer = setTimeout(() => navigate("/"), 2000)
            return () => clearTimeout(timer)
        }
    }, [post, navigate, error])


    return (
        <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
            <h2 style={{ marginBottom: '20px' }}>Create a Blog Post</h2>
            <form
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}
                    rows="4"
                    value={disc}
                    onChange={(e) => setDisc(e.target.value)}
                />
                {
                    valerror && <Alert severity="error">{valerror}</Alert>
                }
                {
                    post.length !== 0 && <Alert severity="success">Success</Alert>
                }
                {
                    error === 0 && <Alert severity="error">{error}</Alert>
                }
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        padding: '10px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        border: 'none',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MinimalisticStyledForm;
