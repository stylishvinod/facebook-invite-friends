'use strict';


    windowOpen(url, name) {
        var height = 600;
        var width = 800;
        var left = (window.outerWidth / 2) + (window.screenX || window.screenLeft || 0) -
            (width / 2);
        var top = (window.outerHeight / 2) + (window.screenY || window.screenTop || 0) -
            (height / 2);
        var config = {
            height : height,
            width : width,
            left : left,
            top : top,
            location: 'no',
            toolbar: 'no',
            status: 'no',
            directories: 'no',
            menubar: 'no',
            scrollbars: 'yes',
            resizable: 'yes',
            centerscreen: 'yes',
            chrome: 'yes',
        };

        var sendDialog = window.open(
            url,
            name,
            Object.keys(config).map(key = > `${key}=${config[key]}`).join(', ')
    );
        return sendDialog;
    };

 export default inviteFriends(url,appId) {
        windowOpen('https://www.facebook.com/dialog/send?app_id=appId&link=url&redirect_uri=https://www.google.com/', 'Facebook Dialog');
    };

