const ErrorCard = (username, e) => (
  `<div class="github-stats-card error">
    <header>
      <h3>
        <a href='https://github.com/${username}'>@${username}</a>&nbsp;on GitHub
        <img src="https://github.githubassets.com/images/icons/emoji/octocat.png?v8" alt="Octocat"/>
      </h3>
      <h5><b>GitHub Stat Card Failed to Load</b></h5>
    </header>
    <div>
      <ul>
        <li>${e.msg}</li>
      </ul>
    </div>
    <footer><img src="${e.user.avatar_url}" alt="${e.user.name}"/><section><p>Thanks for exposing the flaws in my error handling, <b>@${username}</b></p></section></footer>
  </div>
  `
)

module.exports = {
  ErrorCard
}