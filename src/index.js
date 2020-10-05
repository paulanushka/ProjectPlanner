import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { useSelector  } from 'react-redux'
import { isLoaded, reactReduxFirebase  } from 'react-redux-firebase';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import 'firebase/firestore';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady:true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
  }
const rrfConfig = { 
    userProfile: 'projects',
    useFirestoreForProfile: true
}
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase)
    )
);
    const rrfProps = {
        firebase,
        config: fbConfig,
        dispatch: store.dispatch,
        createFirestoreInstance,
        userProfile: 'users', // where profiles are stored in database
        presence: 'presence', // where list of online users is stored in database
        sessions: 'sessions'
    }    
    function AuthIsLoaded({ children }) {
        const auth = useSelector(state => state.firebase.auth)
        if (!isLoaded(auth)) return <div>Loading Screen...</div>;
            return children
    }
const rffProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(<Provider store={store}> <ReactReduxFirebaseProvider {...rrfProps}> <AuthIsLoaded><App /> </AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

registerServiceWorker();
