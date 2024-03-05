import { configureStore } from "@reduxjs/toolkit";
import conversasReducer from "./features/conversa/conversa-slice";
import authReducer from "./features/auth/auth-slice";
export const makeStore = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
			conversas: conversasReducer,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
