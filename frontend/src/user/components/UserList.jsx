import React from 'react';
import muiStyles from './UserListStyle';
import UserItem from './UserItem';

const UserList = props => {
    const classes = muiStyles();
    if (props.items.length == 0) {
        return (
            <div>
                <h2>No users found</h2>
            </div>
        )
    }
    return (
    <ul className={classes.container}>
        {props.items.map(user => {
            return <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image} 
            name={user.name}
            placeCount={user.places} />
        })}
    </ul>
    )}


export default UserList;