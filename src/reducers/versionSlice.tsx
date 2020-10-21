import { createSlice } from '@reduxjs/toolkit'

export const versionSlice = createSlice({
  name: 'versionReducer',
  initialState: {
      data:[],
      loading:false,
      error:false
  },
  reducers: {
    start: state => {
      state.loading=true;
    },
    finish: (state,action) => {
      state.loading =false;
      state.data=action.payload;
    },
    loadFailed: state => {
        state.error=true;
        state.loading=false;
    }
  }
})

export const { start, finish,loadFailed} = versionSlice.actions
export const availableVersions = (state: { data: any; }) => state.data;

export default versionSlice.reducer