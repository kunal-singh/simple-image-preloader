var PreLoad={
config:{
	ObjectsToLoad:'.PreLoadObject',
    LoadedClass:'ObjectLoaded',
    PreloaderScreenContent:'#PreloaderScreenContent',
    ReTrials:1,
    BackgroundColor:'#cccccc',
    PreloaderScreenContainer:'PreloaderScreenContainer'
},
init:function(config){

var $PreLoadContainer=$(document.createElement('div')).attr('id',PreLoad.config.PreloaderScreenContainer).css({
    'position':'absolute',
    'display':'block',
    'z-index':'10000000',
    'width':'100%',
    'height':'100%',
    'background':PreLoad.config.BackgroundColor,
    'top':0,
    'left':0
});
$PreLoadContainer.append($(PreLoad.config.PreloaderScreenContent).html());
$('body').append($PreLoadContainer);


	$.each($(PreLoad.config.ObjectsToLoad),function(e){
		$(this).on('load',function(e)
		{
            $(this).addClass(PreLoad.config.LoadedClass);
            if($(PreLoad.config.ObjectsToLoad).not('.'+PreLoad.config.LoadedClass).length==0)
            	PreLoad.fadeScreen();
		});
	});
	
},
fadeScreen:function(){
  $('#'+PreLoad.config.PreloaderScreenContainer).fadeOut();
}


}