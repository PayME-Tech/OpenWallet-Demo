import {createSlice} from '@reduxjs/toolkit';
import {Colors} from '../../assets/Colors';
import {FIELDS} from '../../configs/variables.config';

const initialState = {
  loading: false,
  phone: '', // 0944074831
  balance: '0',
  colors: [Colors.vibrantGreen, Colors.emeraldGreenThree],
  field: FIELDS.DEFAULT,
  appEnv: 'SANDBOX',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = true;
    },
    updateApp: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {showLoading, hideLoading, updateApp} = appSlice.actions;
export default appSlice.reducer;
