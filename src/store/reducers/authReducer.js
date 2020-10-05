const initState={
    authError:null,
    initials: "kaushik"
}
const authReducer=(state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError:'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login syccess');
            return {
                ...state,
                initials: action.payload,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return{
                ...state,
                initials: action.payload,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}
export default authReducer

