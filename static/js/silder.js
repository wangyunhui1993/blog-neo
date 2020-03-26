var navList = [
	{url: 'index.html',ch_name: '首页',en_name: 'Protal'},
	// {url: 'movie.html',ch_name: '电影',en_name: 'Movie'},
	{url: 'moodlist.html',ch_name: '碎言碎语',en_name: 'Doing'},
	{url: 'knowledge.html',ch_name: '学无止境',en_name: 'Learn'},
	{url: 'play.html',ch_name: '好玩的',en_name: 'Play'},
	{url: 'book.html',ch_name: '留言版',en_name: 'Gustbook'}
]
	var evalText = ''
	for(item of navList){
		evalText += `<a href="${item.url}"><span>${item.ch_name}</span><span class="en">${item.en_name}</span></a>`
	}
	document.getElementById('topnav').innerHTML = evalText;
	var obj = null;
	var As = document.getElementById('topnav').getElementsByTagName('a');
	for (i = 0; i < As.length; i++) {
		if (window.location.href.indexOf(As[i].href) >= 0){
			obj = As[i];
			obj.id = 'topnav_current'
		}
			
	}





