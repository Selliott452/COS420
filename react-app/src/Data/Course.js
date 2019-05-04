// 120 characters     ******************************************************************************************     |
// @ts-check

/**
 * Courses to the used throughout the app.
 * @param {string} title
 * @param {number} number
 * @param {string} department
 * @param {number} difficulty
 * @param {number} rating
 * @param {string[]} tags
 * @param {number} credits
 */
export default class Course {
	constructor(title, number, department, difficulty, rating, tags, credits) {
	this.title = title
	this.number = number
	this.department = department
	this.difficulty = difficulty
	this.rating = rating
	this.tags = tags
	this.credits = credits
	}
}