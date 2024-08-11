import React, { useState } from "react"

function MyForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !email) {
            setError('Preencha todos os campos.')
            alert(`Preencha todos os campos. \nName: ${name}\nEmail: ${email}`);
        } else {
            setError('')
            alert(`Name: ${name}\nEmail: ${email}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
                <label>email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit">Submit</button>
            </div>
            {error && <p style={{color: 'red'}}>{error}</p> }
        </form>
    )
}

export default MyForm