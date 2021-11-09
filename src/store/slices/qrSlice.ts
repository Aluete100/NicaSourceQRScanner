import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface QRState {
  scannedQRs: string[]
}

const initialState: QRState = {
  scannedQRs: []
}

const qrSlice = createSlice({
  name: "QRData",
  initialState: initialState,
  reducers: {
    addQRToList(state, action: PayloadAction<string>) {
      const updatedList = [...state.scannedQRs, action.payload]
      state.scannedQRs = updatedList
    }
  }
})

export const { addQRToList } = qrSlice.actions

export default qrSlice.reducer