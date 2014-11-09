import {
  highlightRepo
} from 'sourcewatch/helpers/highlight-repo';

module('HighlightRepoHelper');

test('it surrounds the final segment in strong tags', function() {
  var result = highlightRepo('a/b/c/d');
  equal('a/b/c/<strong>d</strong>', result);
});
