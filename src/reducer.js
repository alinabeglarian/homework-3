const reducer = (reduxState = [], action = {}) => {
  switch (action.type) {
    case 'ADD_MODEL':
      return [
        ...reduxState,
        {...action.payload}
      ]
  default:
    return reduxState
  }
}

export default reducer