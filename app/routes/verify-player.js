import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
	return this.store.query('playstat', {
		orderBy: 'id',
		limitToLast: 1
	});
  }
});
