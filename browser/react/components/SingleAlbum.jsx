import React from 'react';
import Songs from './Songs';

export default function ({ album, start, currentSong, songs }) {
  console.log(album)
  return(
  <div className="album">
    {album && <div>
      <h3>{album.name}</h3>
      <img src={`/api/albums/${album.id}/image`} className="img-thumbnail" />
    </div>}
    <Songs 
      songs={songs}
      start={start}
      currentSong={currentSong}
    />
  </div>
  )
};
