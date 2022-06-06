import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [{
        id: "1",
        image: 'https://via.placeholder.com/600/771796',
        name: 'Johnny Depp',
        places: 3
    }]
    return <UserList items={USERS}/>
}

export default Users;