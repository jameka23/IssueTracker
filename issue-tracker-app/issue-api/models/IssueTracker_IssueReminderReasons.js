/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssueReminderReasons', {
		ReminderReasonId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		ReminderReason: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_IssueReminderReasons',
        timestamps: false
	});
};
