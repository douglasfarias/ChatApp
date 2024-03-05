import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IConversa from "@/models/conversa";

interface ConversaState {
	value: IConversa[] | undefined;
}

const initialState = {
	value: undefined,
} as ConversaState;

const conversaSlice = createSlice({
	name: "conversas",
	initialState: initialState,
	reducers: {
		initializeConversas: (state, action: PayloadAction<IConversa[] | undefined>) => {
			state.value = action.payload;
		},
		add: (state, action: PayloadAction<IConversa>) => {
			state.value = [...state.value!, action.payload];
		},
		remove: (state, action: PayloadAction<string>) => {
			state.value = state.value?.filter((conversa) => conversa.id !== action.payload);
		},
	},
});

export const { initializeConversas, add, remove } = conversaSlice.actions;

export default conversaSlice.reducer;
