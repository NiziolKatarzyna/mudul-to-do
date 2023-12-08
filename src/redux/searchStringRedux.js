import shortid from 'shortid';
import { strContains } from '../utils/strContains';
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId === columnId && strContains(card.title, searchString)
  );

const createActionName = (actionName) => `app/searchString/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = (payload) => ({
  type: UPDATE_SEARCHSTRING,
  payload,
});
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload.value;
    default:
      return statePart;
  }
};
export default searchStringReducer;
