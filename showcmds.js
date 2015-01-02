/* inject custom css */
$('body').append('<style>.pr-clone-box {padding:1rem;border-radius:5px;border:1px solid #BFCCD1;margin:0 159px 10px 64px;display:block;border-collapse:separate;background: #fff}</style>');

/* show commands for pull request testing for users without merge privileges */
if ($('.view-pull-request').length) {
  var showCmds = $('<div class="pr-clone-box clone-url-box">  </div>')
    , refs = $('.commit-ref')
    , to = refs.first()
    , from = refs.last()
    , user = from.find('.user').text().trim()
    , branch = from.find('.css-truncate-target').last().text().trim()
    , repo = $('.js-current-repository').first().text().trim()
    , cmd = "git checkout -b " + user + '-' + branch + ' && ' +
      'git pull git@github.com:' + user + '/' + repo + '.git ' + branch;
  showCmds.append('<span class="input-group"><span class="input-group-button"><span class="url-box-title"><strong>PR&nbsp;</strong></span></span><input type="text" class="input-mini input-monospace js-url-field clone" value="'+cmd+'" readonly="readonly"><span class="input-group-button"><button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button url-box-clippy" data-clipboard-text="'+cmd+'" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button></span></span></span>');
  showCmds.prependTo('#discussion_bucket');
}
