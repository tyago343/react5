import React from 'react';
import Songs from './Songs';
import SelectSongContainer from '../containers/SelectSongContainer';

export default ({ playlist, currentSong, start, addSong }) => (
  <div>
    <h3>{ playlist.name }</h3>
    <Songs songs={playlist.songs} currentSong={currentSong} start={start} />
    { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
    <hr />
    <SelectSongContainer addSong={addSong} />
  </div>
);
