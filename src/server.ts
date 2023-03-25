// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { ref, set, get, push, getDatabase } from 'firebase/database';
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzkcULjfBVE5LAPdCFzlIBJH11Lzhjdrk',
  authDomain: 'oval-smile-310603.firebaseapp.com',
  projectId: 'oval-smile-310603',
  storageBucket: 'oval-smile-310603.appspot.com',
  messagingSenderId: '357529967780',
  appId: '1:357529967780:web:6e150b6efa42c893121a31',
  databaseURL:
    'https://oval-smile-310603-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const db = getDatabase(fireApp);

class DB {
  async login() {
    const email = 'test123@gmail.com';
    const password = 'password';

    const auth = getAuth();
    const auth_user = await signInWithEmailAndPassword(auth, email, password);
    console.log(auth_user);
  }

  async logout() {
    const auth = getAuth();
    signOut(auth);
  }

  get getFirebase() {
    return fireApp;
  }

  get getDatabase() {
    return db;
  }

  async getUsers() {
    const users_ref = ref(db, '/users');
    const x = await get(users_ref);
    console.log(x.val());
  }

  setUser(value: string = '') {
    set(ref(db, '/posts/'), {
      name: value,
    });
  }

  async test() {
    const auth = getAuth();
    console.log('current', auth.currentUser);

    // const postListRef = ref(db, 'posts');
    // const newPostRef = push(postListRef);
    // set(newPostRef, { title: 'title', body: 'body' });
  }

  async createPost(title: string, body: string) {
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, { title: 'title', body: 'body' });

    // const posts_ref = ref(db, `/users/uid_1/posts`);
    // const posts = await get(posts_ref);
    // const id = posts.size + 1;
    // await set(ref(db, `/users/uid_1/posts/${id}`), {
    //   title,
    //   body,
    // });
  }
}

const server = new DB();
export default server;
