function showMessage(text){
	if(window.devicePlatform=="Android"){
		 window.plugins.toast.showShortCenter(text)
	}
	else
	{
		$().toastmessage('showToast', {
            text: text,
            sticky: false,
            position: 'top-left',
            inEffectDuration: 10,
            type: 'success',
            stayTime: 1000
        });
	}
}