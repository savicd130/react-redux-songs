import { combineReducers } from 'redux';

const songReducer = () => {
  return [
    { title: 'Poker face', duration: '3:00' },
    { title: 'The Weeknd', duration: '4:09' },
    { title: 'Best Song Ever', duration: '6:13' },
    { title: 'Perfect', duration: '2:05' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
