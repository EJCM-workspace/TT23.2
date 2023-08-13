const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Post = sequelize.define('Post', {
    bookTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    commentCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    repostCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookmarkCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
});

Post.associate = function(models) {
    Post.belongsTo(models.User);
};

module.exports = Post;