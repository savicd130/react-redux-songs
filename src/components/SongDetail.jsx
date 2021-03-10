import React from 'react';
import { connect } from 'react-redux';
import './SongDetail.css';

const SongDetail = props => {
  const renderSong = () => {
    if (props.song === null) {
      return null;
    }

    return (
      <React.Fragment>
        <p className="song-header">
          Title: <span className="song-span">{props.song.title}</span>
        </p>
        <p className="song-header">
          Duration: <span className="song-span"> {props.song.duration}</span>
        </p>
      </React.Fragment>
    );
  };

  return <div className="song-detail">{renderSong()}</div>;
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
