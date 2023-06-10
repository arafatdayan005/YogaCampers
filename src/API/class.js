export const addClass = (data) => {
    fetch(`http://localhost:5000/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

export const getClass = async () => {
    const classes = await fetch(`http://localhost:5000/classes`)
    const data = await classes.json()
    return data        
}