// const logger = store => next => action => {
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }

const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log('current-state : ',currentState);
    console.log('action-dispatched :',action);
    next(action)
console.log('updated-state', store.getState());

}
export default logger