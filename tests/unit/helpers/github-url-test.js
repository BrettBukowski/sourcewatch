import {
  githubUrl
} from 'sourcewatch/helpers/github-url';

module('GithubUrlHelper');

test('it converts api urls into website urls', function() {
  equal('', githubUrl(''));

  var expected = 'https://github.com/username/repo';
  equal(expected, githubUrl('https://api.github.com/username/repo'));

  expected = 'https://github.com/users/name/starred';
  equal(expected, githubUrl('https://api.github.com/users/name/starred{/owner}{/repo}'));
});

test('it removes the specified resource path', function () {
  var expected = 'https://github.com/username';

  equal(expected, githubUrl('https://api.github.com/users/username', 'user'));

  expected = 'https://github.com/username/repo';
  equal(expected, githubUrl('https://api.github.com/repos/username/repo', 'repo'));
});

test('it errors when not given strings', function() {
  throws(function () {
    githubUrl(42);
  });

  throws(function () {
    githubUrl();
  });
});
