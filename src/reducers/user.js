export default function userReducer(state = {


                                        //mine
                                          showlist:false,
                                          opopulation:500000,

                                      }, action) {

    switch (action.type) {

// Show Chart
            case "SHOW_List":

                state = {...state, showlist : action.payload};
                break;

/////////////Second
case "OSLO_POPULATION":

    state = {...state, population: action.payload};
    break;

    }
    return state;
}
