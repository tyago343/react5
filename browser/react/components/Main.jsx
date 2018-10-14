import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SidebarContainer from '../containers/SidebarContainer';
import PlayerContainer from '../containers/PlayerContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import AlbumContainer from '../containers/AlbumContainer';
import FilterableArtistsContainer from '../containers/FilterableArtistsContainer';
import ArtistContainer from '../containers/ArtistContainer';
import NewPlaylistContainer from '../containers/NewPlaylistContainer';
import LyricsContainer from '../containers/LyricsContainer';
import PlaylistContainer from '../containers/PlaylistContainer';
import Station from '../containers/StationsContainer';
import store from '../store'
import Routehook from 'react-route-hook';
import { fetchSongs } from '../action-creators/songs';
import SingleStation from '../components/SingleStation';

const OnStationEnter = () => {
  store.dispatch(fetchSongs())
}
export default () => (
  <div id="main" className="container-fluid">
    <SidebarContainer />
    <div className="col-xs-10">
      <Switch>
        <Route path='/station/:genreName' component={SingleStation} />
        <Routehook exact path="/station" component={Station} onEnter={OnStationEnter}/>
        <Route exact path="/albums" component={AlbumsContainer} />
        <Route path="/albums/:id" component={AlbumContainer} />
        <Route path="/artists" exact component={FilterableArtistsContainer} />
        <Route path="/artists/:id" component={ArtistContainer} />
        <Route path="/playlists/new" component={NewPlaylistContainer} />
        <Route path="/playlists/:id" component={PlaylistContainer} />
        <Route path="/lyrics" component={LyricsContainer} />
        <Redirect from="/" to="/albums" />
      </Switch>
    </div>
    <PlayerContainer />
  </div>
);

