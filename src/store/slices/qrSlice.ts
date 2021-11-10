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
    addQR(state, action: PayloadAction<string>) {
      const updatedList = [...state.scannedQRs, action.payload]
      state.scannedQRs = updatedList
    }
  }
})

export const { addQR } = qrSlice.actions

export default qrSlice.reducer