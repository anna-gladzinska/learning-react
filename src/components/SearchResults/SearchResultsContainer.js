import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, string),
  };
};

export default connect(mapStateToProps)(SearchResults);


