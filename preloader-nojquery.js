var PreLoad={
config:{
	ObjectsToLoad:'PreLoadObject',
    LoadedClass:'ObjectLoaded',
    PreloaderScreenContent:'PreloaderScreenContent',
    ReTrials:1,
    BackgroundColor:'#cccccc',
    PreloaderScreenContainer:'PreloaderScreenContainer'
},
init:function(config){

var PreLoadContainer=document.createElement('div');
PreLoadContainer.id=this.config.PreloaderScreenContainer;
var PreLoadContainerStyleObj=PreLoadContainer.style;
PreLoadContainerStyleObj.position='absolute';
PreLoadContainerStyleObj.display='block';
PreLoadContainerStyleObj.zindex='100000000';
PreLoadContainerStyleObj.width='100%';
PreLoadContainerStyleObj.height='100%';
PreLoadContainerStyleObj.background=this.config.BackgroundColor;
PreLoadContainerStyleObj.top='0';
PreLoadContainerStyleObj.left='0';
PreLoadContainer.innerHTML=(document.querySelector('#'+this.config.PreloaderScreenContent)).innerHTML;
document.querySelector('body').appendChild(PreLoadContainer);
var targetObjects=document.querySelectorAll('.'+this.config.ObjectsToLoad);
for (var i = targetObjects.length - 1; i >= 0; i--) {
   
   (targetObjects[i]).onload = (function(seq){
   return function(){
   (targetObjects[seq]).className+=(' '+PreLoad.config.LoadedClass);
   
    if(document.querySelectorAll('.'+PreLoad.config.ObjectsToLoad).length == document.querySelectorAll('.'+PreLoad.config.LoadedClass).length)
     {   PreLoad.fadeScreen();
    console.log('done');
}
}
   })(i);

}

	},
fadeScreen:function(){
 

 document.querySelector('#'+PreLoad.config.PreloaderScreenContainer).style.opacity='0';
}


}