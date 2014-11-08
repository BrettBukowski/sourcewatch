import {
  githubUrl
} from 'sourcewatch/helpers/github-url';

module('GithubUrlHelper');

test('it converts api urls into website urls', function() {
  equal('', githubUrl(''));

  var expected = 'https://github.com/username/repo';
  equal(expected, githubUrl('https://api.github.com/user/username/repo'));

  expected = 'https://github.com/username/repo';
  equal(expected, githubUrl('https://api.github.com/repo/username/repo'));
});

test('it errors when not given strings', function() {
  throws(function () {
    githubUrl(42);
  });

  throws(function () {
    githubUrl();
  });
});
