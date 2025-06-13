import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'hip_hop' },
  { title: 'Dance', value: 'DANCW' },
  { title: 'Electronic', value: 'electronic' },
  { title: 'Soul', value: 'soul' },
  { title: 'Alternative', value: 'alternative' },
  { title: 'Rock', value: 'rock' },
  { title: 'Latin', value: 'latin' },
  { title: 'Film', value: 'film_tv' },
  { title: 'Country', value: 'country' },
  { title: 'Worldwide', value: 'worldwide' },
  { title: 'Reggae', value: 'reggae_dance_hall' },
  { title: 'House', value: 'house' },
  { title: 'K-Pop', value: 'k_pop' },
];


export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
