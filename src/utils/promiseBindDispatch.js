const promiseBindDispatch = (dispacth) => (params) => {
  return new Promise((resolve,reject) => {
    dispacth({
      ...params,
      resolve,
      reject
    })
  })
}

export default promiseBindDispatch;