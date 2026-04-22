import { db, auth, googleProvider } from "@/utils/database";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("User is signed in:", user.uid);

  //       const entries = [
  //         {
  //           question: "What is the time complexity of merging two sorted arrays?",
  //           fixedAnswer:
  //             "O(n + m) where n and m are the sizes of the two arrays.",
  //           questionPrompt:
  //             "Verify if the answer explains linear traversal of both arrays and avoids nested loops.",
  //           tags: ["arrays", "sorting", "complexity"],
  //           difficulty: 1,
  //         }
  //       ];
  //       entries.forEach((entry) => {
  //         addDoc(collection(db, "cards"), {
  //           question: entry.question,
  //           fixedAnswer: entry.fixedAnswer,
  //           questionPrompt: entry.questionPrompt,
  //           tags: entry.tags,
  //           difficulty: entry.difficulty,
  //         });
  //       });
  //     }
  //   });

  const signInWithGoogle = async () => {
    try {
      console.log("Attempting to sign in with Google...");
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="bug flex flex-col py-20 md:py-32">
      <button
        onClick={signInWithGoogle}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
