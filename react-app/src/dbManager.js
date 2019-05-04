// 120 characters     ******************************************************************************************     |
// @ts-check

import './firestore'
import firebase from 'firebase';

class DBManager  {
	static instance = null;

	static getInstance() {
		if (DBManager.instance === null) {
			DBManager.instance = new DBManager();
		}

		return DBManager.instance;
	}

	async getClasses(criteria) {
		const db = firebase.firestore();
		//Add the criteria here
		const coursesRef = db.collection('courses');
		var query = coursesRef.where('subject', '==', criteria);

		return await query.get().then(results => results.docs.map(doc => doc.data()));
	}

	saveSchedule(schedule) {
		const db = firebase.firestore();
		const usersRef = db.collection('users').add({
			classes: []
		});
	}
}

export default DBManager;
