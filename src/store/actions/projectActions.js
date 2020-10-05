export const createProject = (project) => {
  try{


    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      
      const firestore=getFirestore();
      const authorId = getState().firebase.auth.uid;
      var citiesRef = firestore.collection("users").doc(authorId);

      //console.log(citiesRef);
  
      citiesRef.get().then(function(doc) {
        if (doc.exists) {
          alert("alert");
          ////const profile=getState().firebase.profile;
        //// console.log("anushka1",profile)
          //const authorId=getState().firebase.auth.uid;
            console.log("Document data:", doc.data());
            firestore.collection('projects').add({
              ...project,
              authorFirstName:doc.data().firstName,
              authorLastName:doc.data().lastName,
              ///authorId:doc.data().authorId,
              createdAt: new Date()
            }).then(()=>{
              dispatch({ type: 'CREATE_PROJECT', payload:project });
            }).catch((err)=>{
              dispatch({type:'CREATE_PROJECT_ERROR', err});
            })
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

      
    }
  }catch(e)
  {
    console.log("anushkammm",e)
  }
  };

  /*export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };*/