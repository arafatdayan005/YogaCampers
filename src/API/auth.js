//save user to DB
export const saveUser = (user) => {
    const currentUser = {
        email: user.email,
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

//get role of a user
export const getRole = async (email) => {
    const res = await fetch(`http://localhost:5000/users/${email}`)
    const user = await res.json()
    return user?.role
}