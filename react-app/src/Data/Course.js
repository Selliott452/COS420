// 120 characters     ******************************************************************************************     |
// @ts-check

/**
 * Courses to the used throughout the app.
 * @param {string} title
 * @param {number} number
 * @param {string} subject
 * @param {number} difficulty
 * @param {number} rating
 * @param {string[]} tags
 * @param {number} credits
 */
class Course {
	constructor(title, number, subject, difficulty, rating, tags, credits) {
		this.title = title
		this.number = number
		this.subject = subject
		this.difficulty = difficulty
		this.rating = rating
		this.tags = tags
		this.credits = credits
	}
}

export default Course;
