import IUsuario from "@/models/usuario";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
	isAuthenticated: boolean;
	user: IUsuario | null;
}

const initialState: AuthState = {
	isAuthenticated: false,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action: PayloadAction<IUsuario>) {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
