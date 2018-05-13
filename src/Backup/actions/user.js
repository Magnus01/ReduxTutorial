// This is mine Function ////
//////////////////////////////////////
export function showlist() {
  return dispatch => {
    dispatch({
      type: "SHOW_List",
      payload: true
    });
  };
}

export function oslo_population(value) {
  return dispatch => {
    dispatch({
      type: "OSLO_POPULATION",
      payload: value
    });
  };
}
