import DS from 'ember-data';

export default DS.Model.extend({
  owner:          DS.belongsTo('user', { inverse: null }),

  url:            DS.attr('string'),
  name:           DS.attr('string'),
  htmlUrl:        DS.attr('string'),
  fullName:       DS.attr('string'),
  description:    DS.attr('string')
});
