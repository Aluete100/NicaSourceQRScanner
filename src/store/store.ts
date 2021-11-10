import { configureStore } from '@reduxjs/toolkit'
import qrReducer from './slices/qrSlice'

const store = configureStore({
  reducer: {
    qr: qrReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ immutableCheck: false })],
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
