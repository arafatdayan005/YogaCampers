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

export const getAllClasses = async () => {
    const classes = await fetch(`http://localhost:5000/classes`)
    const data = await classes.json()
    return data        
}

export const getApprovedClasses = async () => {
    const classes = await fetch(`http://localhost:5000/classes/approved`)
    const data = await classes.json()
    return data        
}

export const instructorClasses = async (email) => {
    const res = await fetch(`http://localhost:5000/classes/${email}`)
    return await res.json()
}

export const classStatus = async (id, status) => {
    const data = {
        status: status
    }

    const res = await fetch(`http://localhost:5000/classes/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    return await res.json()
}

export const selectClass = async (data) => {
    const res = await fetch(`http://localhost:5000/classes/selected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        return res.json()
}

export const getSelectedClass = async (id, email) => {
    return fetch(`http://localhost:5000/classes/selected/${id}/${email}`)
}

export const allSelectedClass = async (email) => {
    return fetch(`http://localhost:5000/classes/selected/${email}`)
}

export const deleteSelectedClass = async (id) => {
    const res = await fetch(`http://localhost:5000/classes/selected/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        }
    })
    return res.json()
}

export const enrollClass = async (id) => {
    const res = await fetch(`http://localhost:5000/classes/selected/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        }
    })
    return await res.json()
}

export const allEnrolledClasses = async (email) => {
    return fetch(`http://localhost:5000/classes/enrolled/${email}`)
}