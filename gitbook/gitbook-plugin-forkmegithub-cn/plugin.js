require(["gitbook","jQuery"],function(r,n){var t,g={red:{src:"https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-red.png"},green:{src:"https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-green.png"},darkblue:{src:"https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-darkblue.png"},orange:{src:"https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-orange.png"},gray:{src:"https://cdn.jsdelivr.net/gh/wangding/sample@master/images/fork-me-on-github-gray.png"}},i={};r.events.bind("start",function(n,e){!function(n){i=n["forkmegithub-cn"];var e=g[i.color];t='<a id="forkmegithub" href="'+i.url+'"><img src="'+e.src+'" alt="Fork me on GitHub""></img></a>'}(e),r.toolbar.createButton({icon:"fa fa-github",label:"GitHub",position:"right",onClick:function(){window.open(i.url)}})}),r.events.bind("page.change",function(){n(".book .book-body .body-inner").append(t)})});