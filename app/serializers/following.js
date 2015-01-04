import AppSerializer from './application';

export default AppSerializer.extend({
  extractArray: function (store, type, payload, something, restAction) {
    return this._super(store, type, {
      following: payload
    }, something, restAction);
  }
});
