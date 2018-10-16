import SingleAlbum from '../components/SingleAlbum';
import {connect} from 'react-redux';
import { start } from '../action-creators/player';
const mapStateToProps = function (state, ownProps) {
  var album;
  var songs= [];
  state.albums.list.filter(elem=>{if(elem.id==ownProps.match.params.id) album=elem})
  state.songs.filter(elem=>{if(elem.albumId==album.id)songs.push(elem) })
  return {
    album: album,
    currentSong: state.player.currentSong,
    songs
  };
}
const mapDispatchToProps = function (dispatch) {
  return {
    start: function(song, list){
      dispatch(start(song, list))
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SingleAlbum);