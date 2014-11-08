import {
  relativeDate
} from 'sourcewatch/helpers/relative-date';

module('RelativeDateHelper');

test('converts a date into a relative string', function() {
  var input = new Date().toISOString();
  var expected = 'a few seconds ago';
  var actual = relativeDate(input);
  equal(expected, actual);
});
