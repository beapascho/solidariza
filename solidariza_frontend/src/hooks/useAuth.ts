import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { loginUser, logout } from "../store/authSlice";
import type { RootState, AppDispatch } from "../store";

// Hooks tipados corretamente
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, token, loading, error } = useAppSelector((state) => state.auth);

  const login = async (email: string, password: string) => {
    const resultAction = await dispatch(loginUser({ email, password }));
    
    if (loginUser.fulfilled.match(resultAction)) {
      return resultAction.payload.user; // Retorna os dados do usuário autenticado
    } else {
      return null; // Indica erro no login
    }
  };
  

  const signOut = () => {
    dispatch(logout());
  };

  return { user, token, login, signOut, loading, error };
};
