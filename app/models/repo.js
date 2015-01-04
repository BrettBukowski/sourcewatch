import DS from 'ember-data';

export default DS.Model.extend({
  owner:          DS.belongsTo('user'),

  name:           DS.attr('string'),
  fullName:       DS.attr('string'),
  url:            DS.attr('string'),
  description:    DS.attr('string')
});
