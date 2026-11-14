import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({

    name: "booking",

    initialState: {
        list: []
    },

    reducers: {
        addBooking: (state, action) => {
            state.list.push(action.payload);
        },

        deleteBooking: (state, action) => {
            state.list = state.list.filter(
                booking => booking.id === action.payload.id
            );
        },

        updateBooking: (state, action) => {
            const index = state.list.findIndex(
                booking => booking.id === action.payload.id
            );

            if (index !== -1) {
                state.list[index] = action.payload;
            }
        }
    }
});

export const {
    addBooking,
    deleteBooking,
    updateBooking
} = bookingSlice.actions;

export default bookingSlice.reducer;