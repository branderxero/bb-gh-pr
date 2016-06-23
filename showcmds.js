/* inject custom css */
$('body').append('<style>.pr-clone-box {padding:1rem;border-radius:5px;border:1px solid #BFCCD1;margin:0 159px 10px 64px;display:block;border-collapse:separate;background: #fff}</style>');

/* show commands for pull request testing for users without merge privileges */
if ($('.pull-request-tab-content').length) {
  var showCmds = $('<div class="pr-clone-box clone-url-box" style="width: 694px">  </div>')
    , refs = $('.commit-ref')
    , to = refs.first()
    , from = refs.last()
    , user = from.find('.user').text().trim()
    , branch = from.find('.css-truncate-target').last().text().trim()
    , x = window.location.href.replace('https://github.com/brandingbrand/', '')
    , repo = x.substring(0, x.indexOf('/'))
    , cmd = "git checkout -b " + user + '-' + branch + ' && ' +
      'git pull git@github.com:' + user + '/' + repo + '.git ' + branch;
  showCmds.append('<span class="input-group"><span class="input-group-button"><span class="url-box-title"><strong>PR&nbsp;</strong></span></span><input type="text" class="input input-monospace js-url-field clone" style="width: 600px !important" value="'+cmd+'" readonly="readonly"><span class="input-group-button"><button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><svg aria-hidden="true" class="octicon octicon-clippy" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M2 12h4v1H2v-1z m5-6H2v1h5v-1z m2 3V7L6 10l3 3V11h5V9H9z m-4.5-1H2v1h2.5v-1zM2 11h2.5v-1H2v1z m9 1h1v2c-0.02 0.28-0.11 0.52-0.3 0.7s-0.42 0.28-0.7 0.3H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h3C4 0.89 4.89 0 6 0s2 0.89 2 2h3c0.55 0 1 0.45 1 1v5h-1V5H1v9h10V12zM2 4h8c0-0.55-0.45-1-1-1h-1c-0.55 0-1-0.45-1-1s-0.45-1-1-1-1 0.45-1 1-0.45 1-1 1h-1c-0.55 0-1 0.45-1 1z"></path></svg></button></span></span></span>');
  showCmds.prependTo('#discussion_bucket');
}
