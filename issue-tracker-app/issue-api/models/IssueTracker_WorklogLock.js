/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_WorklogLock', {
		WorklogLockId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DateOfLock: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		DateTimeCreated: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_WorklogLock',
        timestamps: false
	});
};
