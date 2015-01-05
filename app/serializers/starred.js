import AppSerializer from './application';

export default AppSerializer.extend({
  attrs: {
    owner: { embedded: 'always' }
  },

  extractArray: function (store, type, payload, something, restAction) {
    return this._super(store, type, {
      starred: payload
    }, something, restAction);
  }
});
