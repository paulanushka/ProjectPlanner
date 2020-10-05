export const signIn = (credentials) => {
  console.log("signin",credentials)
    return (dispatch, getState, {getFirebase,getFirestore}) => {
      debugger
      const firebase = getFirebase();
      const firestore=getFirestore();
      const authorId = getState().firebase.auth.uid;
      var citiesRef = firestore.collection("users").doc(sessionStorage.getItem("userId"));
      console.log("citiesref", citiesRef);
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        citiesRef.get().then(function(doc) {
          debugger
          if(doc.exists){
            console.log("Document data:", doc.data());
            sessionStorage.setItem("newId",doc.data().initials);
            dispatch({ 
              type: 'LOGIN_SUCCESS',
              payload: sessionStorage.getItem("newId")
            });
          }
        });
        
       // sessionStorage.setItem("newId", )
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
        sessionStorage.removeItem("newId");
      });
    }
  }
  
  export const signUp = (newUser) => {
    debugger
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
  
      firebase.auth().createUserWithEmailAndPassword(
        newUser.email, 
        newUser.password
      ).then(resp => {
        sessionStorage.setItem("userId", resp.user.uid);
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
       
      }).then(() => {
       // var docRef = firestore.collection('users').doc(resp.user.uid);
        //sessionStorage.setItem("newId",newUser.firstName[0] + newUser.lastName[0])
        //console.log("dog4",firestore,sessionStorage);
        /*docRef.get().then(function(doc) {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      })*/
      console.log(`firstname, ${newUser.firstName[0]} ${newUser.lastName[0]}`);
      sessionStorage.setItem("newId",newUser.firstName[0] + newUser.lastName[0])
        dispatch({
           type: 'SIGNUP_SUCCESS',
           payload: sessionStorage.getItem("newId")
          });
          

      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});

      });
    }
  }