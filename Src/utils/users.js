const users = []

const addUser = ({id, username, room}) => {
     username = username.trim()
     room = room.trim().toLowerCase()

     if (!username || !room) {
         return {
             error: 'Username and room are required!'
         }
     }

     // Check for existing user
     const existingUser = users.find((user) => {
         return user.room == room && user.username == username
     })

     //validate Username
     if (existingUser) {
         return {
            error: 'Username is in use!'
         }
     }

     //Store user
     const user = {id, username, room}
     users.push(user)
     return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) =>{
        return user.id===id
    })

    if (index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((users) => users.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
