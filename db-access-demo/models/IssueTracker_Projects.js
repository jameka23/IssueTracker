
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_Projects', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectClient: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ProjectName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ProjectDescription: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ProjectCreatorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		ProjectManagerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Users',
				key: 'UserId'
			}
		},
		ProjectCreationDate: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW
		},
		ProjectDisabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'IssueTracker_Projects',
    timestamps: false
	});
};
