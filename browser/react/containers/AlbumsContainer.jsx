import Albums from '../components/Albums';
import {connect} from 'react-redux';
const mapStateToProps = function (state) {
  return {
    albums: state.albums.list
  };
}
const mapDispatchToProps = function (dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Albums);