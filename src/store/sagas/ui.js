import { all } from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// eslint-disable-next-line require-yield
// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

// export function* incrementAsync() {
//   yield call(delay, 1000)
//   yield put({ type: 'INCREMENT' })
// }

// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

export default function* uiSaga() {
  yield all([
    // watchIncrementAsync()
  ])
}