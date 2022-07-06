import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id:'u1', 
            name:'ashu',
            image:"https://tse1.mm.bing.net/th?id=OIP.cDqHub0bWiu0qY3zWM-mHgHaE8&pid=Api&rs=1&c=1&qlt=95&w=148&h=98",
            places:3
        }];

  return <UsersList items={USERS}/>
}

export default Users