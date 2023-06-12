//save user to DB
export const saveUser = (user) => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
        .then(res => res.json())
        .then(data => {
            if (data.upsertedCount === 1) {
                const setRole = {
                    role: "student"
                }

                fetch(`http://localhost:5000/users/${user?.email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(setRole),
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
        })
}

//get role of a user
export const getRole = async (email) => {
    const res = await fetch(`http://localhost:5000/users/${email}`)
    const user = await res.json()
    return user?.role
}

export const getAllUsers = async (email) => {
    const res = await fetch(`http://localhost:5000/users`)
    const user = await res.json()
    return user
}

export const changeRole = async (id, status) => {
    const data = {
        status: status
    }

    console.log(id, data)

    const res = await fetch(`http://localhost:5000/changeRole/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}