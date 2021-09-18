(function(){
    document.addEventListener('copy',(e)=>{
      showMessage('你都复制了些什么呀,能让我看看吗？', 3000, true);
    })
}());

$(document).ready(function(){
	$('button').hover(function(event){
		showMessage('你想要点击按钮“' + event.target.innerHTML + '”吗？', 3000, true);
	},
	function(event){});
});

function showMessage(text, timeout, flag){
    if(flag || sessionStorage.getItem('live2d-tip-text') === '' || sessionStorage.getItem('live2d-tip-text') === null){
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        if(flag) sessionStorage.setItem('live2d-tip-text', text);
        $('.live2d-tips').stop();
        $('.live2d-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout){
    $('.live2d-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('live2d-tip-text')}, timeout);
    $('.live2d-tips').delay(timeout).fadeTo(200, 0);
}