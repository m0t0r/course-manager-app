import authorApi from '../api/mockAuthorApi';

export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';

export function loadAuthorsSuccess(authors) {
  return { type: LOAD_AUTHORS_SUCCESS, authors };
}


export function loadAuthors() {
  return function thunk(dispatch) {
    return authorApi.getAllAuthors()
      .then(authors => dispatch(loadAuthorsSuccess(authors)))
      .catch(e => console.error(`Error: ' ${e}`));
  };
}



