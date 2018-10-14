import { connect } from 'react-redux';
import Station from '../components/Station';

const convertSongsToStations = function (songsArray) {
    let stations = {};
    songsArray.map(song => {
        let shenra = song.genre;
        stations[shenra] = stations.genre || [];
        stations[shenra].push(song) 
    })
    return stations;
  };


const mapStateToProps = (state) => {
    return {
        stations: convertSongsToStations(state.songs)
    };
    
}
const mapDispatchToProps = (dispatch) => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Station);