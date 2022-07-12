import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id:'p1',
    title:'Empire State Building',
    description:'One of the most famous sky scrapers in the world',
    imageUrl:"https://tse3.mm.bing.net/th?id=OIP.6xx4cKoHJhKt5toQZj7rDAHaK9&pid=Api&P=0&w=123&h=182",
    address:'20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:40.7432302,
      lng:-73.9848626
    },
    creator:'u1'
  },
  {
    id:'p2',
    title:'Empire State Building',
    description:'One of the most famous sky scrapers in the world',
    imageUrl:"https://tse3.mm.bing.net/th?id=OIP.6xx4cKoHJhKt5toQZj7rDAHaK9&pid=Api&P=0&w=123&h=182",
    address:'20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:40.7432302,
      lng:-73.9848626
    },
    creator:'u2'
  }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <PlaceList items={loadedPlaces} />
  )
}

export default UserPlaces