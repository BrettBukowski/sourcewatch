import DS from 'ember-data';
import Serializer from '../serializers/application';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',

  defaultSerializer: Serializer

  // find: function (store, type, id) {
  //   debugger;
  //   return this.ajax(id, 'GET');
  // }
});
