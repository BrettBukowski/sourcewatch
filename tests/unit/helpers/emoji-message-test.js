import {
  emojiMessage
} from 'sourcewatch/helpers/emoji-message';

module('EmojiHelper');

// Replace this with your real tests.
test('it does not touch strings without emoji', function() {
  var result = emojiMessage('');
  equal('', result);
});

test('it swaps in images', function() {
  var result = emojiMessage('\u2764\uFE0F');
  ok(result.toString().indexOf('<img class="emoji"') === 0);
});
