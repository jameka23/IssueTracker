/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Issues', {
		IssueId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		IssueTitle: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IssueCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_ProjectCategories',
				key: 'CategoryId'
			}
		},
		IssuePriorityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_IssuePriority',
				key: 'IssuePriorityID'
			}
		},
		IssueStatusId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_IssueStatus',
				key: 'IssueStatusID'
			}
		},
		IssueCreatorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		IssueOwnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		IssueAssignedId: {
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
            defaultValue: new Date().toUTCString()
		},
		Disabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Resolution: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EstimatedTime: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0.0
		},
		DueDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		MSProjectUniqueID: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		IssueTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_IssueType',
				key: 'TypeId'
			}
		},
		HoursRemaining: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		OnHoldReason: {
			type: DataTypes.STRING,
			allowNull: true
		},
		EstimatedStartDate: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_Issues',
        timestamps: false
	});
};
