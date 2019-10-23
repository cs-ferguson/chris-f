import Storage from "./storage";

export const reducer = (state, action) => {

  let storage = new Storage();

  switch (action.type) {
    case 'TOGGLE_DARK_MODE': {
      //store preference - only with toggle button!!!
      // storage.store( 'darkMode', 'chrisfWebsite', action.value );
      //return
      return{
        ...state,
        darkMode: action.value
      }
    }
    default:
      return state
  }
}
