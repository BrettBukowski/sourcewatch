import DS from 'ember-data';

export default DS.Model.extend({
  actor:      DS.belongsTo('user', { inverse: null }),
  repo:       DS.belongsTo('repo', { inverse: null }),

  type:       DS.attr('string'),
  payload:    DS.attr(),
  createdAt:  DS.attr('date')
});
