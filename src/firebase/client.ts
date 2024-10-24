import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCJa3gTpmdJgQ3x1phg68jTrERQ6rp3pJw",
	authDomain: "astro-testing-c76b4.firebaseapp.com",
	projectId: "astro-testing-c76b4",
	storageBucket: "astro-testing-c76b4.appspot.com",
	messagingSenderId: "147970976676",
	appId: "1:147970976676:web:4bc47457a68175223f2f31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
