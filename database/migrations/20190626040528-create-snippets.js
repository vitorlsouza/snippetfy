module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable('Snippets', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  ),

  down: queryInterface => (
    queryInterface.dropTable('Snippets')
  ),
};
