import { authReducer } from '../../src/auth/context/authReducer';

describe('Pruebas en authReducer', () => {

  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('debe de (login) llamar el login autenticar y establecer el username', () => {
    const action = {
      type: '[Auth] Login',
      payload: {
        name: 'Erick',
        id: '123',
      }
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test('debe de (logout) borrar el name del usuario y el logged en false', () => {

    const state = {
        logged: true,
        user: {
            name: 'Erick',
            id: '123',
        }
    }

    const action = {
      type: '[Auth] Logout',
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({
      logged: false,
    });
  });
});

// # Pruebas en authReducer
//     * debe de retornar el estado por
//     * debe de (login) llamar el login autenticar y establecer el username
//     * debe de (logout) borrar el name del usuario y el logged en false
