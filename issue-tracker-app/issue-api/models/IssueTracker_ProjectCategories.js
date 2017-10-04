/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_ProjectCategories', {
		CategoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		CategoryName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_Projects',
				key: 'ProjectId'
			}
		},
		ParentCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'IssueTracker_ProjectCategories',
        timestamps: false
	});
};
