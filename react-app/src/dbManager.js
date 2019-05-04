import Firestore from "./Firestore"

export default class DBManager  {
	static instance = null;

	static getInstance() {
		if (DBManager.instance === null) {
			DBManager.instance = new DBManager();
		}

		return DBManager.instance;
	}

	constructor() { 
		return DBManager.getInstance();
	}

	getClasses(criteria) {
		const db = firebase.firestore();
		//Add the criteria here
		const coursesRef = db.collection('courses');
		var courses = courseRef.get()
			.then(doc => !doc.exists ? console.log('No classes') : console.log('Data:', doc.data()))
			.catch(error => console.log('Error getting class: ', error));
	}

	saveSchedule(schedule) {
		const db = firebase.firestore();
		const usersRef = db.collections('users').add({
			classes: []
		});
	}
}

export default DBManager;
