function showPlayer(v, w, h, ar,tj) {
    var rb = ar;
    var r = rb ? 1 : 0;
    var flashvars = {
        f:v,
        c:0,
        p:r,
        e:tj,
        m:0
    };
    var params = {bgcolor:'#000',allowFullScreen:true,allowScriptAccess:'always'};
    var attributes = {id:'a1',name:'a1'};
    CKobject.embedSWF('http://www.nen.com.cn/service/player/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', w, h, flashvars, params);    
    var video = [v+'->video/mp4'];
    var support = ['iPad','iPhone','ios','android+false','msie10+false'];
    CKobject.embedHTML5('video', 'ckplayer_a1', w, h, video, flashvars, support);
}