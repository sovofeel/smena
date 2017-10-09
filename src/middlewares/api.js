export default store => next => action => {
  if (action.meta == null || action.meta.async == null || !action.meta.async) return next(action)

  action.meta
    .apiCall()
    .then(data => {
      store.dispatch(action.meta.successCreator(data))
    })
    .catch(error => {
      store.dispatch(action.meta.failureCreator(error))
    })

  return next(action)
}
