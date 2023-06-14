//save user to DB
export const saveUser = (user) => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL
    }

    fetch(`https://summer-camp-server-navy-zeta.vercel.app/users/${user?.email}`, {
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

                fetch(`https://summer-camp-server-navy-zeta.vercel.app/users/${user?.email}`, {
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
    const res = await fetch(`https://summer-camp-server-navy-zeta.vercel.app/users/${email}`)
    return await res.json()
}

export const getAllUsers = async (email) => {
    const res = await fetch(`https://summer-camp-server-navy-zeta.vercel.app/users`)
    const user = await res.json()
    return user
}

export const changeRole = async (id, status) => {
    const data = {
        status: status
    }

    console.log(id, data)

    const res = await fetch(`https://summer-camp-server-navy-zeta.vercel.app/changeRole/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}