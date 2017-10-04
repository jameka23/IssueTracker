/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssueComments', {
		CommentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		IssueId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Issues',
				key: 'IssueId'
			}
		},
		Comment: {
			type: DataTypes.STRING,
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
		DateCreated: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		},
		DateEdited: {
			type: DataTypes.DATE,
			allowNull: true
		},
		EditUserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		Hash: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_IssueComments',
        timestamps: false
	});
};
