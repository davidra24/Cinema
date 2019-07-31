import firebase from '../firebase';

var db = firebase.database;

export const get = async (collection) => {
  const movieRef = await db.collection(collection);
  await movieRef.get().then((querySnapshot) => {
    querySnapshot.forEach((document) => {
      console.log(`${document.id} => ${document.data().first}`);
    });
  });
};
