import DS from 'ember-data';

export default DS.Model.extend({
  repos:          DS.hasMany('repo'),
  following:      DS.hasMany('user', { inverse: null }),

  avatarUrl:      DS.attr('string'),
  login:          DS.attr('string'),
  url:            DS.attr('string')
});
