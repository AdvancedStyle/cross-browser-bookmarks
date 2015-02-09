jQuery(function($){
	$(document).ready(function(){
		var sFX=document.createElement('div').style;
		var isFx35plus=((navigator.userAgent.toLowerCase().indexOf('firefox')!=-1) && (sFX.wordWrap!==undefined) && (sFX.MozTransform!==undefined));
		$('a.bookmark').each(function(){
			var l = $(this).attr('href');
			var t = $(this).attr('title');
			if(isFx35plus){
				var a=document.createElement('a');
				a.href=l;
				a.title=t,a.rel='sidebar';
				var cont = $(this).parent('*')[0];
				var x = cont.appendChild(a);
				$(x).html($(this).html());
				$(this).remove();
			}
		}).click(function(){
			
			var l = $(this).attr('href');
			var t = $(this).attr('title');
			if(l == '#'){
				l = location.href;
			}
			// Mozilla Firefox Bookmark
			if ('sidebar' in window && 'addPanel' in window.sidebar) { 
				window.sidebar.addPanel(l,t,"");
			}else if(isFx35plus){
			} else if( /*@cc_on!@*/false) { // IE Favorite
				window.external.AddFavorite(l,t); 
			} else { // webkit - safari/chrome
				alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
			}
			return false;
		});
	});
});