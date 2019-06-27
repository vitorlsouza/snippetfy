module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable('Categories', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
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
    queryInterface.dropTable('Categories')
  ),
};
