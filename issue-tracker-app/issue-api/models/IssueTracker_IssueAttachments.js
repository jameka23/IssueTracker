/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueTracker_IssueAttachments', {
		AttachmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		FileName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ContentType: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Attachment: {
			type: "IMAGE",
			allowNull: true
		},
		CommentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'IssueTracker_IssueComments',
				key: 'CommentId'
			}
		},
		Hash: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'IssueTracker_IssueAttachments',
        timestamps: false
	});
};
