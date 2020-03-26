	<script type="text/javascript">

		function getArticles(page){
					request("/blog_query", {
					pageNum: page,
					pageSize:20
				},
				function(data) {
					if (data.err_code === 0) {
						if(data.list.length===0){
							alert('已经是最后一页了');
							return false;
						}
						var evalText = doT.template($("#articleList").text());
						$("#article").html(evalText(data.list));
						var evalText1 = doT.template($("#pageList").text());
						var pages={
							current:page,
							size:data.list.length
						}
						$(".pagelist").html(evalText1(pages));
					}
				});
		}
getArticles(1);
			


function upPage(pages){
	getArticles(--pages)
}
function downPage(pages){
	getArticles(++pages)
}
			
			
	</script>

	<script id="articleList" type="text/x-dot-template">
		{{ for(var prop of it) { }}
		<li>
			<i><a href="./info.html?url={{=prop.href}}"><img src="images/1.jpg"></a></i>
		  <h3><a href="./info.html?url={{=prop.href}}">{{= prop.title}}</a></h3>
		  <p>{{=prop.content}}</p>
			<div class="postDesc">{{= prop.desc}}</div>
		</li>
		{{ } }}
</script>


<script id="pageList" type="text/x-dot-template">
		{{?  it.current!==1}}
		<a href="javascript:void(0);" onclick="upPage({{=it.current}})">上一页</a>
		{{?}}
		&nbsp;&nbsp;当前页：
		<span>{{=it.current}}</span>
		&nbsp;&nbsp;
		<a href="javascript:void(0);" onclick="downPage({{=it.current}})">下一页</a>
		
</script>
