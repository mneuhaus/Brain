var issues = [
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Solution to fixing INPUT control conflicts with other non-Bootstrap DOM",
    "created_at": "2012-07-09T17:11:21Z",
    "user": {
      "gravatar_id": "334ce5e17786361c2eabeb3f2664cae1",
      "login": "rhollhumer",
      "avatar_url": "https://secure.gravatar.com/avatar/334ce5e17786361c2eabeb3f2664cae1?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1816122,
      "url": "https://api.github.com/users/rhollhumer"
    },
    "number": 4046,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T17:11:21Z",
    "state": "open",
    "body": "The issue is that Bootstrap styles INPUT DOM controls globally with no regard for any other INPUT tags that do not fall within the Bootstrap context, For example third party css libraries like jQuery-ui, or third party plugins like jqGrid, have issues and conflicts as the INPUT tag in Bootstrap has no higher-level qualifier to isolate the css selector to the Bootstrap context. This is a serious issue for front-end developers. To that end I have included the solution to this by updating the bootstrap.scss file which I have included here: Enjoy. \n\nPlease also help me push this issue here on github to try and create consensus by requesting this code change be adopted by the community here.\n\nYou may be wondering what changed and will it be backward compatible. I believe so as long as you follow the library's guidelines where any input control to be controlled (styled) by Bootstrap be wrapped inside \"control-group\" and then \"controls\".\n\nSee my blog for the bootstrap file here: http://wblo.gs/d4K\n",
    "labels": [

    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4046",
    "milestone": null,
    "id": 5503682,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4046"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "tooltip and z-index",
    "created_at": "2012-07-09T15:12:10Z",
    "user": {
      "gravatar_id": "5fe1f7ed4bb930df9551e087551e0429",
      "login": "killanaca",
      "avatar_url": "https://secure.gravatar.com/avatar/5fe1f7ed4bb930df9551e087551e0429?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 157641,
      "url": "https://api.github.com/users/killanaca"
    },
    "number": 4044,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T15:12:10Z",
    "state": "open",
    "body": "Hi\nWhen the tooltip plugin is used on an element inside navbar-fixed-top class, \nit doesn't show up due to the z-index css property of navbar-fixed-top equal to 1030.\n\nIt's possible to add an higher z-index to the tooltip plugin?\n\nthanks",
    "labels": [

    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4044",
    "milestone": null,
    "id": 5500940,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4044"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "btn-group cannot be hidden with hide",
    "created_at": "2012-07-09T08:50:13Z",
    "user": {
      "gravatar_id": "f0b4cdbc741a44bdc0f3b2eb3485feb6",
      "login": "puc-covelli",
      "avatar_url": "https://secure.gravatar.com/avatar/f0b4cdbc741a44bdc0f3b2eb3485feb6?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1941475,
      "url": "https://api.github.com/users/puc-covelli"
    },
    "number": 4043,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T09:17:28Z",
    "state": "open",
    "body": "<pre>&lt;div class=\"btn-toolbar\"&gt;<br />\n\t&lt;div class=\"btn-group hide\"&gt; <br />\n\t\t&lt;a class=\"btn btn-danger\" title=\"Cancel\" href=\"\"&gt;&lt;i class=\"icon-remove\"&gt;&lt;/i&gt;&lt;/a&gt; <br />\n\t\t&lt;a class=\"btn btn-success\" title=\"Save\" href=\"\"&gt;&lt;i class=\"icon-ok icon-white\"&gt;&lt;/i&gt;&lt;/a&gt; <br />\n\t&lt;/div&gt;<br />\n&lt;/div&gt;</pre>\n\nThe above code does not hide the button group as expected. I have only managed to get this working if I remove the btn-group class.\n\nNote, this only happens if btn-group is wrapped with btn-toolbar.",
    "labels": [

    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4043",
    "milestone": null,
    "id": 5494364,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4043"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Alert close doesn't work properly in Opera 12",
    "created_at": "2012-07-09T08:23:18Z",
    "user": {
      "gravatar_id": "69274ae3dbbe8030e2ee21b1e35b0dfb",
      "login": "Pigueiras",
      "avatar_url": "https://secure.gravatar.com/avatar/69274ae3dbbe8030e2ee21b1e35b0dfb?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1941284,
      "url": "https://api.github.com/users/Pigueiras"
    },
    "number": 4041,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T08:23:18Z",
    "state": "open",
    "body": "I'm developping an web application with bootstrap and I found that the close event doesn't work properly in Opera 12. In the rest of the browsers work correctly.\n\nThe problem is that the space that were occupied for the alert doesn't dissapear in Opera 12. I'm putting a pair of screenshots for showing this issue:\n\nWhat happen in Opera:\n\nhttps://dl.dropbox.com/u/81766555/opera.png\n\nWhat happen in the rest of the browsers:\n\nhttps://dl.dropbox.com/u/81766555/rest.png\n\nI'm using ajax to execute an action, and my code is the following:\n    \n    $.post(..., {\n\t\t\t\t...\n\t\t\t}, function(data) {\n\t\t\t\t$(\"#message\").empty().append(data);\n\t\t\t\t$(\"#message\").alert({\n\t\t\t\t\tselector : '.close'\n\t\t\t\t});\n\t\t\t});\n\nWhere data is:\n\n     <div class=\"alert alert-block fade in alert-success\">\n\n\t  <a class=\"close\" data-dismiss=\"alert\">×</a>\n\t  <h4 class=\"alert-heading\">...</h4>\n\t  <p>...</p>\n\n     </div>\n\nAnd in my initial page I have a:\n\n    <div id=\"message\"></div>\n\n     ",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4041",
    "milestone": null,
    "id": 5493895,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4041"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Button.js + jQuery UI DateTimePicker - z-index",
    "created_at": "2012-07-09T02:00:41Z",
    "user": {
      "gravatar_id": "e099f657ad229970eb3aee19b8b0d8c8",
      "login": "jakesta",
      "avatar_url": "https://secure.gravatar.com/avatar/e099f657ad229970eb3aee19b8b0d8c8?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1139752,
      "url": "https://api.github.com/users/jakesta"
    },
    "number": 4040,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T02:00:41Z",
    "state": "open",
    "body": "Hi there, not sure if this has been reported but I was just trying to work with [jQuery UI DateTime](http://trentrichardson.com/examples/timepicker/) and this is what I got with active buttons using button.js: http://grab.by/eDiw\n\nEnded up finding that the z-index: \n\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active {\n  z-index: 2; <--- Here\n}\n\nwas to blame. Is it necessary to have this set? Caused a bit of a headache til I found this puppy, overriding it on my end for now.\n\n-- Jake",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4040",
    "milestone": null,
    "id": 5490841,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4040"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "tab js not work in opera",
    "created_at": "2012-07-09T01:40:00Z",
    "user": {
      "gravatar_id": "369851dffc9abb7d73165d5e578332fa",
      "login": "symfonyluxury",
      "avatar_url": "https://secure.gravatar.com/avatar/369851dffc9abb7d73165d5e578332fa?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1012660,
      "url": "https://api.github.com/users/symfonyluxury"
    },
    "number": 4039,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-09T01:40:18Z",
    "state": "open",
    "body": "here http://twitter.github.com/bootstrap/javascript.html#tabs\nwhen switch among these tabs, it loses the content, please use opera to test it (OPERA 12)",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4039",
    "milestone": null,
    "id": 5490691,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4039"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "media queries and collapse",
    "created_at": "2012-07-08T14:34:55Z",
    "user": {
      "gravatar_id": "8067f20fca06b502c4562687d3d5db26",
      "login": "raketenman",
      "avatar_url": "https://secure.gravatar.com/avatar/8067f20fca06b502c4562687d3d5db26?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1938484,
      "url": "https://api.github.com/users/raketenman"
    },
    "number": 4035,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-08T14:34:55Z",
    "state": "open",
    "body": "I'm modifying the layout and height of my navbar via media queries. Unfortunately bootstrap-collapse.js is not adjusting the height automatically. It's because when you open the navbar for the first time it assigns a fixed pixel-height to it. If you close and reopen it again it gets an auto-height and it works just fine. What do I need to change?\n\nThanks it advance",
    "labels": [

    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4035",
    "milestone": null,
    "id": 5486951,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4035"
  },
  {
    "comments": 1,
    "closed_at": null,
    "assignee": null,
    "title": "Scrollspy. Allow to use 'dot', 'colon' and another characters inside the 'id' attribute.",
    "created_at": "2012-07-08T10:34:49Z",
    "user": {
      "gravatar_id": "ae25da03e778146613d7190e3e43df85",
      "login": "Dattaya",
      "avatar_url": "https://secure.gravatar.com/avatar/ae25da03e778146613d7190e3e43df85?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 387256,
      "url": "https://api.github.com/users/Dattaya"
    },
    "number": 4034,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4034.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4034",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4034.diff"
    },
    "updated_at": "2012-07-08T10:41:55Z",
    "state": "open",
    "body": "HTML4 spec lets to use 'dot' and 'colon' - http://www.w3.org/TR/html4/types.html#type-name, HTML5 - any character - http://www.w3.org/TR/html5/global-attributes.html#the-id-attribute. \n\nThis solution isn't perfect, still some characters prevent jQuery from selecting an element from the dom tree. \nIf you want I can add tests.",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4034",
    "milestone": null,
    "id": 5486050,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4034"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Back button issue in IE 8 with bootstrap-dropdown.js",
    "created_at": "2012-07-08T05:04:23Z",
    "user": {
      "gravatar_id": "8b7d733053b763b2965093777d8b6950",
      "login": "jeffbaier",
      "avatar_url": "https://secure.gravatar.com/avatar/8b7d733053b763b2965093777d8b6950?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 403285,
      "url": "https://api.github.com/users/jeffbaier"
    },
    "number": 4033,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-08T05:04:23Z",
    "state": "open",
    "body": "First, somehow find an IE8 machine. \n\nSecond, try my jsfiddle that illustrates the problem. \nhttp://jsfiddle.net/jeffbaier/RFPsg/\n\nWhen using the dropdown plugin if you click the back button, it goes back to the top of the page instead of wherever you were. I really don't understand why this happens, but I narrowed down the problem code until I got to https://github.com/twitter/bootstrap/blob/2.1.0-wip/js/bootstrap-dropdown.js#L116 . \n\nAs a work around I moved attaching the event handler for 'click.dropdown.data-api' into the toggle function. It also removes the event handler when the menu is toggled off. You can see my work around in action here - http://jsfiddle.net/jeffbaier/RFPsg/11/\n\nIs there anything wrong with my workaround, or maybe a better way to do it?",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4033",
    "milestone": null,
    "id": 5484984,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4033"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": "Support .disabled on tabs and pills",
    "created_at": "2012-07-08T01:41:17Z",
    "user": {
      "gravatar_id": "5aba7f82135516f4d35b793181cafc0b",
      "login": "SoapSeller",
      "avatar_url": "https://secure.gravatar.com/avatar/5aba7f82135516f4d35b793181cafc0b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 819436,
      "url": "https://api.github.com/users/SoapSeller"
    },
    "number": 4031,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4031.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4031",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4031.diff"
    },
    "updated_at": "2012-07-09T07:37:30Z",
    "state": "open",
    "body": "This is basicly an adaptation of @arnar work in https://github.com/twitter/bootstrap/pull/853 for bootstrap 2:\n\"This diff adds support for .disabled class on tabs and pills. They are rendered with light gray text and the JS ignores clicks.\"\n\n",
    "labels": [
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4031",
    "milestone": null,
    "id": 5484227,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4031"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": "Adjust wording for apps",
    "created_at": "2012-07-07T23:56:54Z",
    "user": {
      "gravatar_id": "8e55e89dc040dcf614e56175a8d44531",
      "login": "benjaminoakes",
      "avatar_url": "https://secure.gravatar.com/avatar/8e55e89dc040dcf614e56175a8d44531?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 5323,
      "url": "https://api.github.com/users/benjaminoakes"
    },
    "number": 4029,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4029.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4029",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4029.diff"
    },
    "updated_at": "2012-07-08T00:12:43Z",
    "state": "open",
    "body": "Two of the three apps listed are for Linux/Windows.  I adjusted the wording to clarify, as I originally skipped this section because I'm not using OS X.\n\nJust a simple change.  :smile:\n\n**Note:** this is just a pull request for the `gh-pages` branch.",
    "labels": [
      {
        "color": "0088cc",
        "name": "docs",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/docs"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4029",
    "milestone": null,
    "id": 5483836,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4029"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": "Typeahead render method.",
    "created_at": "2012-07-07T15:53:31Z",
    "user": {
      "gravatar_id": "1d58ece1010d5464236f7bcc83088cdb",
      "login": "gcoop",
      "avatar_url": "https://secure.gravatar.com/avatar/1d58ece1010d5464236f7bcc83088cdb?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 266345,
      "url": "https://api.github.com/users/gcoop"
    },
    "number": 4025,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4025.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4025",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4025.diff"
    },
    "updated_at": "2012-07-08T17:51:18Z",
    "state": "open",
    "body": "Exposed typeahead render method so you can override it and customise the list html based on the type of object returned from a custom source. You need this if you want to produce something like the [new twitter search/autocomplete](http://www.engadget.com/2012/07/06/twitter-brings-search-autocomplete-to-the-web/).\n\nChanged <code>.next()</code> to use <code>.nextAll(':has(a):first')</code> so you can have <code>&lt;li class=\"divider\"&gt;&lt;/li&gt;</code> separating result types.\n\n#### Example ####\n\n<pre><code>\nvar labels\n  , mapped\n$(\"input\").typeahead({\n  source: function (query, process) {\n    $.get('/autocomplete', { q: query }, function (data) {\n      labels = []\n      mapped = {}\n\n      $.each(data, function (i, item) {\n        mapped[item.label] = item.value\n        labels.push(item.label)\n      })\n\n      process(labels)\n    })\n  },\n  render: function () {\n      var that = this\n\n      items = $(mapped).map(function (i, item) {\n        i = $(that.options.item).attr('data-value', item)\n\n        if (item.thumb) { // Ok object has a thumbnail.\n          i.find('a').append('<img src=\"'+item.thumb+'\" />'+that.highlighter(item));\n        } else {\n          i.find('a').html(that.highlighter(item))\n        }\n\n        return i[0]\n      })\n\n      items.first().addClass('active')\n      this.$menu.html(items)\n  },\n  updater: function (item) {\n    return mapped[item]\n  }\n})\n</code></pre>",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4025",
    "milestone": null,
    "id": 5481127,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4025"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Tooltips and Dropdown menus",
    "created_at": "2012-07-07T01:20:25Z",
    "user": {
      "gravatar_id": "ab97201abd62673ed21bb286e1b20345",
      "login": "Turbo87",
      "avatar_url": "https://secure.gravatar.com/avatar/ab97201abd62673ed21bb286e1b20345?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 141300,
      "url": "https://api.github.com/users/Turbo87"
    },
    "number": 4021,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-07T01:20:25Z",
    "state": "open",
    "body": "I am using a form inside of a dropdown that can be opened from the navbar. When the mouse hovers over the fields I would like to show some helptext using the tooltip plugin. The tooltip however is rendered behind the dropdown div. I've fixed that for now by using this code:\n\n~~~CSS\n.tooltip {\n  z-index: 2000;\n}\n~~~",
    "labels": [
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4021",
    "milestone": null,
    "id": 5477004,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4021"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Popover content and caching",
    "created_at": "2012-07-06T22:47:33Z",
    "user": {
      "gravatar_id": "5035fcf0325717f82cdebf8f2cfd80c7",
      "login": "wir963",
      "avatar_url": "https://secure.gravatar.com/avatar/5035fcf0325717f82cdebf8f2cfd80c7?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1679668,
      "url": "https://api.github.com/users/wir963"
    },
    "number": 4020,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-06T22:47:33Z",
    "state": "open",
    "body": "In my app, I call a popover for a form. The user edits the form, hits submit and the form is re-rendered. Even though the content is changed in the db, the popover renders a cached version of the partial form, instead of the new version. Is this a bug or intentional? Is this just more than is meant to go into a popover? Is there a known work-around?\n\nThe popover only displays the new content after the page itself is refreshed. Here is where I use the popover\n\nvar button = $(\"#share_button\");\n\nbutton.popover({trigger: \"manual\",\n  placement: \"below-left\",\n  offset: 10,\n  horizontalOffset: 25,\n  html: true,\n  title: function(){return \"Share this note\";},\n  //content: function(){return \"This is other content\";}\n  content: function(){return \"<%=j render :partial => 'form' %>\";}\n});\n\nbutton.popover(\"show\");",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4020",
    "milestone": null,
    "id": 5475579,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4020"
  },
  {
    "comments": 1,
    "closed_at": null,
    "assignee": null,
    "title": "Suggestion : Installing bootstrap dev tools locally",
    "created_at": "2012-07-06T20:59:41Z",
    "user": {
      "gravatar_id": "1cd46a26ceada395ae900bd4cd40a052",
      "login": "poulejapon",
      "avatar_url": "https://secure.gravatar.com/avatar/1cd46a26ceada395ae900bd4cd40a052?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1021506,
      "url": "https://api.github.com/users/poulejapon"
    },
    "number": 4019,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4019.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4019",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4019.diff"
    },
    "updated_at": "2012-07-06T21:00:52Z",
    "state": "open",
    "body": "What about installing boostrap dev tools installed locally.\nUsers would go \"npm install .\" rather than \"npm install lessjs recess uglify-js jshint -g\".\n\nThis would install these tools in node_modules/.bin, which path\ncan acquired in the Makefile as the return of the\n\"npm bin\" command.\n\nThat way\n- you could make sure that everyone uses the same version of these tools\n- people who for some reason don't have write permissions on their node global install can still use bootstrap easily\n- people can use a different version of these tool for different projects.\n\nn.b.: If you accept this pull request, Readme might require a bit of editing as well.",
    "labels": [
      {
        "color": "333333",
        "name": "makefile",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/makefile"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4019",
    "milestone": null,
    "id": 5473909,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4019"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Binding to click event inside popover",
    "created_at": "2012-07-06T19:47:17Z",
    "user": {
      "gravatar_id": "1dbf20ddd467fdf133ddb710aa7837f8",
      "login": "shanemcd",
      "avatar_url": "https://secure.gravatar.com/avatar/1dbf20ddd467fdf133ddb710aa7837f8?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 773186,
      "url": "https://api.github.com/users/shanemcd"
    },
    "number": 4017,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-06T19:47:17Z",
    "state": "open",
    "body": "I am trying to bind to a click event on an `a` tag inside of a popover.. With no luck. Has anyone tried this before with any luck?",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4017",
    "milestone": null,
    "id": 5472612,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4017"
  },
  {
    "comments": 5,
    "closed_at": null,
    "assignee": null,
    "title": "Fixed end of transition event for IE 10 (Windows 8)",
    "created_at": "2012-07-06T18:30:33Z",
    "user": {
      "gravatar_id": "b51b70f8d2ecb503372108095d2e7fbf",
      "login": "ComFreek",
      "avatar_url": "https://secure.gravatar.com/avatar/b51b70f8d2ecb503372108095d2e7fbf?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1827709,
      "url": "https://api.github.com/users/ComFreek"
    },
    "number": 4015,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4015.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4015",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4015.diff"
    },
    "updated_at": "2012-07-07T08:27:13Z",
    "state": "open",
    "body": "Fix for my issue #4011: https://github.com/twitter/bootstrap/issues/4011",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4015",
    "milestone": null,
    "id": 5471063,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4015"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "z-index issue: typeahead dropdown-menu displays under navbar-fixed-top/bottom",
    "created_at": "2012-07-06T15:50:48Z",
    "user": {
      "gravatar_id": "285778ab293ef72a3b438df09144ee23",
      "login": "jamesbeck",
      "avatar_url": "https://secure.gravatar.com/avatar/285778ab293ef72a3b438df09144ee23?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1736909,
      "url": "https://api.github.com/users/jamesbeck"
    },
    "number": 4009,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-06T15:50:48Z",
    "state": "open",
    "body": "If you use a typeahead drop down menu within a fixed navbar, the dropdown menu is displayed under the navbar. The dropdown is given a z-index of 1000 whilst the fixed navbar is 1030.",
    "labels": [
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4009",
    "milestone": null,
    "id": 5467947,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4009"
  },
  {
    "comments": 0,
    "closed_at": null,
    "assignee": null,
    "title": "Scrollspy goes crazy when inside tab.",
    "created_at": "2012-07-05T23:42:32Z",
    "user": {
      "gravatar_id": "6ed4b86a76f65aed702b818fda4e5a1f",
      "login": "ribbitsadler",
      "avatar_url": "https://secure.gravatar.com/avatar/6ed4b86a76f65aed702b818fda4e5a1f?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1930024,
      "url": "https://api.github.com/users/ribbitsadler"
    },
    "number": 4006,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-05T23:42:32Z",
    "state": "open",
    "body": "I've been trying to figure this out for awhile, but the scrollspy seems to break whenever its inside a tab. There is an example of this at: http://www.beatoftheday.org/CyborgDB/docs/empty.html  It would be great if somebody could help. Thanks.",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4006",
    "milestone": null,
    "id": 5456041,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4006"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": "[FIX] elements not hidden",
    "created_at": "2012-07-05T15:12:29Z",
    "user": {
      "gravatar_id": "ae473c50a50a068b18f199236c2511ac",
      "login": "digitaldisseny",
      "avatar_url": "https://secure.gravatar.com/avatar/ae473c50a50a068b18f199236c2511ac?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1441451,
      "url": "https://api.github.com/users/digitaldisseny"
    },
    "number": 4002,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/4002.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/4002",
      "diff_url": "https://github.com/twitter/bootstrap/pull/4002.diff"
    },
    "updated_at": "2012-07-09T07:50:15Z",
    "state": "open",
    "body": "Some elements doesn't hide even with the hidden classes. \n\nDefault behaviour:\nhttp://digitaldisseny.com/tmp/hiddenbug/\n\nPatched version:\nhttp://digitaldisseny.com/tmp/hiddenbug/working.html\n\n",
    "labels": [
      {
        "color": "9d261d",
        "name": "awaiting feedback",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/awaiting+feedback"
      },
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4002",
    "milestone": {
      "open_issues": 10,
      "description": "Proposed focus: documentation overhaul, add subnav component, and add affix plugin.",
      "closed_issues": 51,
      "title": "v2.1.0",
      "created_at": "2012-01-09T17:18:56Z",
      "due_on": null,
      "creator": {
        "gravatar_id": "bc4ab438f7a4ce1c406aadc688427f2c",
        "login": "markdotto",
        "avatar_url": "https://secure.gravatar.com/avatar/bc4ab438f7a4ce1c406aadc688427f2c?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "id": 98681,
        "url": "https://api.github.com/users/markdotto"
      },
      "number": 7,
      "state": "open",
      "id": 71627,
      "url": "https://api.github.com/repos/twitter/bootstrap/milestones/7"
    },
    "id": 5446000,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4002"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": ".pull-right for .span*",
    "created_at": "2012-07-04T20:33:23Z",
    "user": {
      "gravatar_id": "6480ddbdc45ceda5a043412cb229912f",
      "login": "actuallymrj",
      "avatar_url": "https://secure.gravatar.com/avatar/6480ddbdc45ceda5a043412cb229912f?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1910450,
      "url": "https://api.github.com/users/actuallymrj"
    },
    "number": 4000,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-04T23:12:52Z",
    "state": "open",
    "body": "Hello,\n\nI've had such an easy time using this library for my web design, yet one thing that seems to be lacking is the ability to apply a .pull-right on a .span* when trying to align them on the page. One issue I've ran into this with is when I attempt to embed this structure inside a .hero-unit and, because of the spacing and smaller width of the .hero-unit, it seems that I am unable to make use of the full .span12 width. When I attempt to apply two .span6 class elements the later gets wrapped around below the first. The only solution I've come up with is to limit myself to a .span10 inside the .hero-unit and use a .span6 and .span4, respectively to obtain the desired layout, yet this throws off the alignment if attempt to place an image in the .span4 and want it to have the same edge spacing within the .hero-unit as the .span6 text. \n\nExample follows (if you change the .span4 's to .span6 's the issue arises)...\n\n<!-- Main hero unit for a primary header message or call to action -->\n\t\t\t<div class=\"hero-unit\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"span6\">\t\t\t\t\t\n\t\t\t\t\t\t<h1>Matt</h1>\n\t\t\t\t\t\t<p>Some text to be explanatory</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p><a class=\"btn btn-primary btn-large\">Learn more &raquo;</a></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"span4\">\n\t\t\t\t\t\t<ul class=\"thumbnails\">\n\t\t\t\t\t\t\t<li class=\"span4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"thumbnail\">\n\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/2048x1361\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\nThanks,\n-Matt",
    "labels": [
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/4000",
    "milestone": null,
    "id": 5433769,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/4000"
  },
  {
    "comments": 1,
    "closed_at": null,
    "assignee": null,
    "title": "accordion elements inside tabs",
    "created_at": "2012-07-04T17:15:10Z",
    "user": {
      "gravatar_id": "2c3439bd85b8c9f4f674caf5feedc610",
      "login": "petermueller12",
      "avatar_url": "https://secure.gravatar.com/avatar/2c3439bd85b8c9f4f674caf5feedc610?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 1922812,
      "url": "https://api.github.com/users/petermueller12"
    },
    "number": 3999,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-05T16:16:03Z",
    "state": "open",
    "body": "Hi,\n\nI have a question about a strange behaviour in connection with the according and tab plugin in Chrome (Mac).\n\nI have two tabs with different ids and different heights (content). Inside this tabs there are some container with the accordion /  collapse. In the first tab, which is displayed first, everthing is fine and all accordion elements works as aspected. In the second tab the accordion does not work in Chrome - no fade in/out (ids etc. are fine). If I test the same page with FF (Mac) the accordion elements in the second work without any error, too.\n\nWhat can I do to solve this?\n\nthanks in advance.\n\nbest regards\n\nPeter",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/3999",
    "milestone": null,
    "id": 5431575,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/3999"
  },
  {
    "comments": 1,
    "closed_at": null,
    "assignee": null,
    "title": "Add state classes to table rows",
    "created_at": "2012-07-04T11:25:41Z",
    "user": {
      "gravatar_id": "1d58ece1010d5464236f7bcc83088cdb",
      "login": "gcoop",
      "avatar_url": "https://secure.gravatar.com/avatar/1d58ece1010d5464236f7bcc83088cdb?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 266345,
      "url": "https://api.github.com/users/gcoop"
    },
    "number": 3996,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/3996.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/3996",
      "diff_url": "https://github.com/twitter/bootstrap/pull/3996.diff"
    },
    "updated_at": "2012-07-06T20:57:51Z",
    "state": "open",
    "body": "Added the ability to use .success .error and .info on table row to signify the status of a row. Useful for showing a list of transactions.",
    "labels": [
      {
        "color": "4bb14b",
        "name": "feature",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/feature"
      },
      {
        "color": "7a43b6",
        "name": "css",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/css"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/3996",
    "milestone": null,
    "id": 5426313,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/3996"
  },
  {
    "comments": 1,
    "closed_at": null,
    "assignee": null,
    "title": "Allow buttons-radio options to be deselected",
    "created_at": "2012-07-04T06:21:52Z",
    "user": {
      "gravatar_id": "529a6049c4ad4483dbc62add6da06e1a",
      "login": "philfreo",
      "avatar_url": "https://secure.gravatar.com/avatar/529a6049c4ad4483dbc62add6da06e1a?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 97612,
      "url": "https://api.github.com/users/philfreo"
    },
    "number": 3992,
    "pull_request": {
      "patch_url": "https://github.com/twitter/bootstrap/pull/3992.patch",
      "html_url": "https://github.com/twitter/bootstrap/pull/3992",
      "diff_url": "https://github.com/twitter/bootstrap/pull/3992.diff"
    },
    "updated_at": "2012-07-06T17:24:58Z",
    "state": "open",
    "body": "Simple change: `buttons-radio-optional` behaves like `buttons-radio` except it allows the user to deselect a chosen button.\n\nBasically, if you have two buttons in a `buttons-radio` group, by using `buttons-radio-optional` instead you could have a 3rd state of neither button selected.",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/3992",
    "milestone": null,
    "id": 5422305,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/3992"
  },
  {
    "comments": 2,
    "closed_at": null,
    "assignee": null,
    "title": "Carousel: No slide transition, no autoplay",
    "created_at": "2012-07-03T09:20:20Z",
    "user": {
      "gravatar_id": "636d5b59486dfe7ee4c474198ccffb6d",
      "login": "evanmsanders",
      "avatar_url": "https://secure.gravatar.com/avatar/636d5b59486dfe7ee4c474198ccffb6d?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "id": 726068,
      "url": "https://api.github.com/users/evanmsanders"
    },
    "number": 3988,
    "pull_request": {
      "patch_url": null,
      "html_url": null,
      "diff_url": null
    },
    "updated_at": "2012-07-03T23:17:16Z",
    "state": "open",
    "body": "WIth the stock standard bootstrap (downloaded from home page), carousel transitions don't seem to slide nicely (the just jump instantly from one image to the next), and the carousel doesn't advance until an arrow is clicked. \n\nI've pored over the docs (what little there are) and I don't think my setup is wrong. Forgive me if this is a setup problem.\n\nHere's my code:\n```\n<div class=\"carousel slide\">\n    <div id=\"featuredProjects\" class=\"carousel-inner\">\n        <div class=\"active item\"><img ...alt text and image filename removed...></div>\n        <div class=\"item\"><img ...alt text and image filename removed...></div>\n        <div class=\"item\"><img ...alt text and image filename removed...></div>\n    </div>\n    <a class=\"carousel-control left\" href=\"#featuredProjects\" data-slide=\"prev\">&lsaquo;</a>\n    <a class=\"carousel-control right\" href=\"#featuredProjects\" data-slide=\"next\">&rsaquo;</a>\n</div>\n```\nAnd here's the call to the carousel function:\n```\n$(function() {\n    $('.carousel').carousel();\n});\n```\nNote that I'm not specifically including bootstrap-transition.js as it's included in the bootstrap.min.js I've downloaded. If that's not the case, then either the docs need updating, or the package is wrong.\n\nThe problem occurs in Firefox and Chrome, but does not occur on the demo page at http://twitter.github.com/bootstrap/javascript.html#carousel - so there must be something different about the js or html that I can't identify.\n\nApologise if this is my fault, but I've isolated it as best I can.",
    "labels": [
      {
        "color": "ffc40d",
        "name": "js",
        "url": "https://api.github.com/repos/twitter/bootstrap/labels/js"
      }
    ],
    "html_url": "https://github.com/twitter/bootstrap/issues/3988",
    "milestone": null,
    "id": 5402975,
    "url": "https://api.github.com/repos/twitter/bootstrap/issues/3988"
  }
];