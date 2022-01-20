import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');


  const contactDb = await openDB('J.A.T.E', 1);


  const tx = contactDb.transaction('J.A.T.E', 'readwrite');


  const store = tx.objectStore('J.A.T.E');


  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented')

  const contactDb = await openDB('J.A.T.E', 1);


  const tx = contactDb.transaction('J.A.T.E', 'readonly');


  const store = tx.objectStore('J.A.T.E');

  const request = store.getAll();


  const result = await request;
  console.log('result.value', result);
  return result.value
}
  ;


// Delete
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);


  const contactDb = await openDB('J.A.T.E', 1);


  const tx = contactDb.transaction('J.A.T.E', 'readwrite');


  const store = tx.objectStore('J.A.T.E');


  const request = store.delete(id);


  const result = await request;
  console.log('result.value', result);
  return result?.value;
};

initdb();
