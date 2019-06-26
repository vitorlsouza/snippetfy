module.exports = {
  up: queryInterface => (
    queryInterface.renameTable('Session', 'Sessions')
  ),

  down: queryInterface => (
    queryInterface.renameTable('Sessions', 'Session')
  ),
};
