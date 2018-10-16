import {connect} from 'react-redux';
import SingleStation from '../components/SingleStation.jsx';
import { start } from '../action-creators/player';
const mapStateToProps = function (state,ownProps) {
    var songs=[];
   state.songs.filter(elem=>{if(elem.genre.toLowerCase()===ownProps.match.params.genreName.toLowerCase()) songs.push(elem)})
    return {
        genreName: ownProps.match.params.genreName,
        songs,
        currentSong: state.player.currentSong
    };
}
const mapDispatchToProps = function (dispatch, ownProps) {
    return {
      start: function (song, list) {
        dispatch(start(song, list));
      }
    };
  };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleStation);