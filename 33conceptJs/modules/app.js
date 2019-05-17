export let users = ['Nico', 'Lynn', 'Dal'];

export const addUsers = (user) => users = [...users, user]

export const getUsers = () => users;

export const deleteUser = (user) => users = users.filter(aUser => aUser !== user);

export var abc = {
    users,
    addUsers,
    getUsers,
    deleteUser

}