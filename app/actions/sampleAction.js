function* fetchProducts(dispatch) {
    const products = yield call(Api.fetch, '/products')
    dispatch({ type: 'PRODUCTS_RECEIVED', products })
  }