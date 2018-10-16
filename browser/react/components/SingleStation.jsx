import React from 'react';
import Songs from './Songs';
export default function ({genreName, songs, currentSong, start}) {
  return (
    <div>
      <h3>{ genreName } Station</h3>
      <Songs 
        songs={songs} 
        currentSong={currentSong} 
        start={start}
      />
    </div>
  );
}