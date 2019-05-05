import './firestore'
import firebase from 'firebase';

class DBManager  {
	static instance = null;

	id = 'default';

	static getInstance() {
		if (!DBManager.instance) {
			DBManager.instance = new DBManager();
		}

		return DBManager.instance;
	}

	async getClasses(criteria) {
		const coursesRef = firebase.firestore().collection('courses');
		let courses;

		if (!criteria){
			courses = coursesRef.get();
		} else {
			courses = coursesRef.where('subject', '==', criteria.toUpperCase()).get();
		}

		return await courses.then(results => results.docs.map(doc => doc.data()));
	}

	async getSchedule() {
		return await firebase.firestore().collection('users').doc(this.id).get().then(doc => doc.data().schedule);
	}

	async saveSchedule(schedule) {
		firebase.firestore().collection('users').doc(this.id).set({schedule: JSON.parse(JSON.stringify(schedule))});
	}
}
	
export default DBManager;
