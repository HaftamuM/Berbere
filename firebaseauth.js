
		// Import the functions you need from the SDKs you need
		import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
		import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
		import { getDatabase, setDOc, doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database-app.js";
		// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
		// TODO: Add SDKs for Firebase products that you want to use
		// https://firebase.google.com/docs/web/setup#available-libraries
	  
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
		
		};
	  
		// Initialize Firebase
		const app = initializeApp(firebaseConfig);
		//const analytics = getAnalytics(app);

        const singup = document.getElementById('submit-btn');
        singup.addEventListener('click', (event) => {
            event.preventDefault();
			// time 3:31
			const email= document.getElementById('rEmail').value;
			const password=document.getElementById(rPassword).value; 
			const firstName=document.getElementById(rfName).value; 

			const auth=getAuth(); 
			const db=getFirstore(); 

			createUserWithEmailandPassword (auth, email, Passowrd)
			.then((userCredential)=> { 
				const user=userCredential.user; 
				const userData={ 
					email: email, 
					firstName: firstName, 
				
				}
			})

        })
