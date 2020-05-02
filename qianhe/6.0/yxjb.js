var func =function(){
    var mzdwz = 0;
    var mzdwzhd = 0;
    var 随机数20 = random(-10,10);
    var 随机数4 = random(-2,2);
    var hkyz = 0;

    var getRandom = function(probability){
        try {
            var probability = probability*100 || 0;
            var odds = Math.floor(Math.random()*100);
            if(probability === 0){
                return false;
            }
            if(odds < probability){
                return true;  syuhu
            }else{
                return false;
            }
        } catch (error) {
            throw "百分比概率出错"+error;
        }
    }
    var  随机滑动 =function (x,y,xx,yy,延迟){
        var x1,y1,x2,y2;
        x1 = random(Math.round(wt*x[0]),Math.round(wt*x[1]));
        y1 = random(Math.round(hg*y[0]),Math.round(hg*y[1]));
        x2 = random(Math.round(wt*xx[0]),Math.round(wt*xx[1]));
        y2 = random(Math.round(hg*yy[0]),Math.round(hg*yy[1]));
        // swipe(x1,y1,x2,y2,延迟);
        Swipe(x1,y1,x2,y2,延迟);
    }

    var 黑屏 = function(){
        sleep(2000)
        sphuadong("滑动并黑屏")
        sleep(1000)
        scrollDown(0)
        sleep(1000)
        scrollDown(1)
        sleep(10000)
    }

    function sphuadong(str) {
        toast(str)
        sleep(1000)
        var hasSwipe = Swipe(500, 1500, 500, 200, 500)
        sleep(2000)
        hdcs++
        if (desc("日常任务").findOnce() && !hasSwipe && hdcs > 5) {
            toast("签到界面超5次没滑动成功，回首页")
            hdcs = 0
            back()
        }
        
    }


    var 控件判空点击 = function 控件判空点击(点击,类型,寻找时间,是否点击){
        try {
            var 内容 = null;
            var sjs6 = random(-3,3);
            switch(类型){
                case 1:
                    内容 = id(点击).findOne(寻找时间);
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            //Swipe(x1, y1, x1, y1, [duration])
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();

                        }
                        return 内容;
                    }
                    break;
                case 2:
                    内容 = text(点击).findOne(寻找时间);
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                           
                        }
                        return 内容;
                    }
                    break;
                case 3:
                    内容 = desc(点击).findOne(寻找时间);
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 4:
                    内容 = className(点击).findOne(寻找时间);
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 5:
                    内容 = textContains(点击).findOne(寻找时间);
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
            }
            return null;
        } catch (error) {
            error+"------" +点击+","+类型+","+寻找时间+","+是否点击+"========="+内容;
        }
    }

    var 控件判空点击2 = function (点击,类型,是否点击){
        var 内容 = null;
        var sjs6 = random(-3,3);
        try{
            switch(类型){
                case 1:
                    内容 = id(点击).findOnce();
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 2:
                    内容 = text(点击).findOnce();
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 3:
                    内容 = desc(点击).findOnce();
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 4:
                    内容 = className(点击).findOnce();
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
                case 5:
                    内容 = textContains(点击).findOnce();
                    if(内容!==null){
                        if(是否点击){
                            // press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            var automator = new RootAutomator();
                            automator.press(内容.bounds().centerX()+sjs6,内容.bounds().centerY()+sjs6,60);
                            sleep(100);
                            automator.exit();
                        }
                        return 内容;
                    }
                    break;
            }
            return null;
        } catch (error) {
            throw error+"------" +点击+","+类型+","+是否点击+"========="+内容;
        }
    }

    var waitSPHome = function(活动页,主页判断,等待时间,点击内容) {
        var HM = null;
        if(活动页.length === 2){
            wait(活动页[0],活动页[1],等待时间);
        }
        if(活动页.length === 1){
            wait(活动页[0],null,等待时间);
        }
        sleep(2000);
        for (j=0;j<8;j++){
            switch (主页判断[0]){
                case 1:
                    HM = id(主页判断[1]).findOne(500);
                    break;
                case 2:
                    HM = className(主页判断[1]).id(主页判断[2]).findOne(500);
                    break;
                case 3:
                    HM = id("recyclerView").className("android.support.v7.widget.RecyclerView").scrollable(true).findOne(500);
                    break;
                case 4:
                    HM = text(主页判断[1]).findOne(500);
                    break;
                case 5:
                    HM = className(主页判断[1]).findOne(500);
                    break;
            }
            if (HM !== null){
                return HM;
            }
            if(j>5){
                back();
                sleep(1600);
            }else{
                sleep(1000);
            }
            if (点击内容!==null){
                控件判空点击(点击内容[0],点击内容[1],500,true);
            }
        }
        if(j>7){
            return null;
        }
        return null;
    }

    var 控件点击 = function (widget) {
        var 随机数4 = random(-2,2);
        var continuePlayerBtn = widget.findOnce();
        try {
            if (continuePlayerBtn) {
                // press(continuePlayerBtn.bounds().centerX()+随机数4, continuePlayerBtn.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(continuePlayerBtn.bounds().centerX()+随机数4, continuePlayerBtn.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                sleep(2000);
                return true;
            }else{
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    var qd = function (控件){
        var kj = null;
        var sjs4 = random(-2,2);
        try {
            for(xhz = 0;xhz< 控件.length;xhz++){
                kj = 控件[xhz][0].findOne(控件[xhz][1]);
                if(kj){
                    sleep(2000);
                    // press(kj.bounds().centerX()+sjs4,kj.bounds().centerY()+sjs4,100);
                    var automator = new RootAutomator();
                    automator.press(kj.bounds().centerX()+sjs4,kj.bounds().centerY()+sjs4,100);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                    continue;
                }else{
                    for(xhcs = 0;xhcs<2;xhcs++){
                        back();
                        sleep(3000);
                        kj = 控件[xhz][0].findOnce();
                        if(kj){
                            sleep(2000);
                            // press(kj.bounds().centerX()+sjs4,kj.bounds().centerY()+sjs4,100);
                            var automator = new RootAutomator();
                            automator.press(kj.bounds().centerX()+sjs4,kj.bounds().centerY()+sjs4,100);
                            sleep(100);
                            automator.exit();
                            sleep(2000);
                            break;
                        }
                        if(xhcs===1){
                            return false;
                        }
                    }
                }
            }
            return true;
        } catch (error) {
            log("qd方法错误"+error);
        }
    }

    var UpOrDownSlide1 = function (Uod, dy) {
        try {
            var qh = random(Math.round(hg*0.7),Math.round(hg*0.67));
            var qw = random(Math.round(wt*0.4),Math.round(wt*0.6));
            var zh = random(Math.round(hg*0.15),Math.round(hg*0.17));
            var zw = random(Math.round(wt*0.35),Math.round(wt*0.65));
            if (Uod) {
                // swipe(qw, qh, zw, zh, dy);
                Swipe(qw, qh, zw, zh, dy);
            } else {
                // swipe(zw, zh, qw, qh, dy);
                Swipe(zw, zh, qw, qh, dy);
            }
            return true;
        } catch (error) {
            throw error + "-----1----qh:"+qh+"qw:"+qw+"zh:"+zh+"zw:"+zw+"dy"+dy;
        }
    }

    var UpOrDownSlide = function (Uod,dy,主页) {
        try {
            var qw = 主页.bounds().centerX() + random(1,30);
            var qh = 主页.bounds().centerY() + random(1,15);
            var zw = 主页.bounds().centerX() + random(1,30);
            var zh = 主页.bounds().top + random(1,15);
            if (Uod) {
                // swipe(qw, qh, zw, zh, dy);
                Swipe(qw, qh, zw, zh, dy);
            } else {
                // swipe(zw, zh, qw, qh, dy);
                Swipe(zw, zh, qw, qh, dy);
            }
        } catch (error) {
            throw error + "-----2----qh:"+qh+"qw:"+qw+"zh:"+zh+"zw:"+zw+"dy"+dy
        }
    }


    var searchTwice = function (widget1, widget2) {
        if (widget1.exists()) {
            return widget1;
        } else if (widget2.exists()) {
            return widget2;
        } else {
            return id("aftwwhbl2bnfv;asfsagsfj;fdo");
        }
    }

    function searchTwice2(widget1, widget2, widget3) {
        if (widget1.exists()) {
            return widget1;
        } else if (widget2.exists()) {
            return widget2;
        }  else if (widget3.exists()) {
            return widget3;
        }else {
            return id("aftwwhbl2bnfv;asfsagsfj;fdo");
        }
    }

    var searchMultiple = function (array) {
        var ar= new Array();
        array.forEach(element => {
            if(element.exists()){
                var lssz = element.find();
                ar.push.apply(ar,lssz);
            }
        });
        return ar;
    }


    var 文章视频记录判断  = function (jl,pd){
        var jvwz = parseInt(storagesd.get(jl,[0]))+1;
        storagesd.put(jl,jvwz);
        toast("阅读或观看"+jvwz);
        if(storage.get(pd) <= jvwz){
            toast("到达阅读最大次数");
            return false;
        }
        return true;
    }

    var 获取权限 = function (){
        if(控件点击(text("允许"))){
            for (let index = 0; index < 5; index++) {
                sleep(800);
                if(控件点击(text("允许"))){
                    break;
                }
            }
        }
    }

    var getCode = function (username, password, img){
        http.__okhttp__.setTimeout(3e4);
        var r = images.toBase64(img, format = "png");
        var i = device.release;
        var c = device.model;
        var s = device.buildId;
        try {
            var n = http.postJson("https://v2-api.jsdama.com/upload", {
                softwareId: 16762,
                softwareSecret: "50j9trJwDLof4YGREA0pH6x3W2VA9GSiNLYa7d6k",
                username: username,
                password: password,
                captchaData: r,
                captchaType: 1318,
                captchaMinLength: 1,
                captchaMaxLength: 1,
                workerTipsId: 0
            }, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android " + i + "; " + c + " Build/" + s + "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 Mobile Safari/537.36",
                }
            });
        } catch (e) {
            return {
                code: "-1",
                msg: "网络链接超时...",
                data: {}
            };
        }
        var d = n.body.json();
        var p = d.code;
        var m = d.message;
        if ("10079009" == p) return {
            code: p,
            msg: m,
            data: {}
        };
        if ("10142006" == p) return {
            code: p,
            msg: m,
            data: {}
        };
        if ("10142004" == p) return {
            code: p,
            msg: m,
            data: {}
        };
        if ("10142005" == p) return {
            code: p,
            msg: m,
            data: {}
        };
        if ("10079006" == p) return {
            code: p,
            msg: m,
            data: {}
        };
        if ("0" == p) {
            return {
                code: p,
                msg: m,
                data: {
                    res: d.data.recognition,
                    cid: d.data.captchaId
                }
            };
        }
        return d;
    }

    var uploadError = function (username, password, cid){
        http.__okhttp__.setTimeout(3e4);
        try {
            var n = http.postJson("https://v2-api.jsdama.com/report-error", {
                softwareId: 16762,
                softwareSecret: "50j9trJwDLof4YGREA0pH6x3W2VA9GSiNLYa7d6k",
                username: username,
                password: password,
                captchaId:cid
            }, {
            });
        } catch (e) {
            toast("可能网络问题造成回馈滑块失败出错");
        }
        var d = n.body.json();
        var p = d.code;
        var data = d.data;
        if (0 == p&&data.result==true){
            toast("向后台提交滑块失败成功");
        }
    }

    var bezier_curves = function (cp, t) {
        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;

        tSquared = t * t;
        tCubed = tSquared * t;
        result = {
            "x": 0,
            "y": 0
        }
        result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        return result;
    }

    var sml_move = function (qx, qy, zx, zy, time) {
        var xxy = [time];
        var point = [];
        var dx0 = {
            "x": qx,
            "y": qy
        }
        var dx1 = {
            "x": random(qx , qx + 100),
            "y": random(qy - 15, qy + 15)
        }
        var dx2 = {
            "x": random(zx , zx + 100),
            "y": random(qy - 15, qy + 15)
        }
        var dx3 = {
            "x": zx,
            "y": zy
        }
        point.push(dx0);
        point.push(dx1);
        point.push(dx2);
        point.push(dx3);
        for (let i = 0; i < 1; i += 0.08) {
            xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
            xxy.push(xxyy);
        }
        toastLog("sml_move : " + xxy);
        // gesture.apply(null, xxy);
    }

    var 滑块验证 = function() {
        if(text("拖动滑块").exists() && username!=="" && password!==""){
            try {
                toast("进入滑块验证");
                sleep(5000);
                text("向右拖动滑块填充拼图").findOne(10000);
                for (let index = 0; index < 5; index++) {
                    var hkcc=className("android.view.View").boundsInside(1,hg*0.08,wt-1,hg*0.48).findOnce();
                    if(hkcc){
                        var src=images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                        var clip=images.clip(src,0 ,hkcc.bounds().top ,device.width ,hkcc.bounds().height());
                        images.save(clip,"/sdcard/截图.png" );
                        img =images.read("/sdcard/截图.png");
                        var dt1 = getCode(username, password, img);
                        var dt = dt1.data;
                        if(dt&& dt.res.indexOf(",") != -1){
                            var x2=parseInt(dt.res.split(",")[0]);
                            var huadong=className("android.view.View").text("向右拖动滑块填充拼图").findOnce();
                            var qszb = className("android.view.View").boundsInside(wt*0.05,hg*0.43,wt*0.2,hg*0.53).findOnce();
                            if(huadong&&qszb){
                                sml_move(qszb.bounds().left, huadong.bounds().centerY(), x2+wt*0.023, huadong.bounds().centerY(), random(1000,1100));
                                sleep(2000);
                                if(!text("拖动滑块").exists()){
                                    toast("通过滑块");
                                    return true;
                                }else{
                                    uploadError(username, password,dt1.data.cid);
                                    控件点击(className("android.view.View").boundsInside(wt*0.05,hg*0.33,wt*0.18,hg*0.45));
                                    sleep(3000);
                                    for (let index = 0; index < 10; index++) {
                                        if(text("加载中...").exists()){
                                            sleep(1000);
                                        }else{
                                            break;
                                        }
                                        if(index == 9){
                                            toast("图片刷新失败");
                                            throw "图片刷新失败"
                                        }
                                    }
                                }
                            }else{
                                toast("没找到控件");
                            }
                        }else{
                            toast("滑块验证失败，可能余额或网络问题");
                            break;
                        }
                    }else{
                        sleep(3000);
                    }
                }
            }catch(error){
                toast("滑块出错,重新识别");
                if(hkyz>2){
                    hkyz = 0;
                    throw(error+"，过滑次数太多");
                }else{
                    hkyz = hkyz + 1;
                }
            }
            throw("过滑块验证失败");
        }
    }
    var gkgg = function(){
        sleep(20000);
        for (let ggcs = 0; ggcs <35; ggcs++) {
            if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.RelativeLayout").boundsInside(wt*0.8,0,wt,hg*0.2))||控件点击(text(""))){
                return true;
            }
            sleep(1500);
        }
        Tap(wt*0.95,hg*0.05);
        back();
        sleep(2000);
    }

    var ScreenShot = function (path) {
        while (true) {
            files.removeDir(path);
            files.ensureDir(path + "/");
            // gestures([0, 500, [300, 800], [300, 1000]],
            //     [0, 500, [500, 800], [500, 1000]],
            //     [0, 500, [700, 800], [700, 1000]]
            // );
            var automator = new RootAutomator();
            automator.swipe(300,300,800,1000, 500,1);
            automator.swipe(500,500,800,1000, 500,2);
            automator.swipe(700,700,800,1000, 500,3);
            sleep(100);
            automator.exit();

            for (let i = 0; i < 20; i++) {
                var arr = files.listDir(path);
                if (arr.length == 1) {
                    toast("截图成功");
                    sleep(2500);
                    return arr[0];
                }
                sleep(500);
            }
            toast("截图失败");
            sleep(2200);
        }
    }
    var 截图 = function (){
        ScreenShot("/sdcard/DCIM/Screenshots");
        sleep(4000);
        return true;
    }
    var 启动抖音 = function(){
        var intent = new Intent(Intent.ACTION_VIEW)
        intent.setClassName("com.ss.android.ugc.aweme", "com.ss.android.ugc.aweme.main.MainActivity");
        app.startActivity(intent);
        sleep(1500);
        Tap("允许");
    }

    var wlkk = function (){
        function sysx(){
            var fkj = id("rl_bottom_0").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function spsysx(){
            var fkj = id("rl_bottom_1").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(4000);
            }
        }

        function 视频播放(){
            var 随机播放时间 = random(5,8);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(textContains("正常领"));
                控件点击(text("继续播放"));
                控件点击(text("继续观看"));
                控件点击(text("点击重播"));
                控件点击(text("知道了"));
                sleep(2000);
                if(textContains("立即下载").exists()||textContains("查看详情").exists()){
                    break;
                }
            }
        }
        function 视频播放2(){
            var 随机播放时间 = random(20,30);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(textContains("正常领"));
                控件点击(text("继续播放"));
                控件点击(text("知道了"));
                sleep(2000);
                if(textContains("立即下载").exists()||textContains("查看详情").exists()){
                    break;
                }
            }
        }

        function wlkksp(){
            var wlkkspcs = Math.ceil(storage.get("wlkk2")/2);
            sleep(3000);
            spsysx();
            var mzdwz = 0;
            for(k = 0;k<wlkkspcs;k++){
                if(id("rl_read_coin").exists()){
                    if(k%5==0){
                        if(控件点击(id("rl_read_coin"))){
                            sleep(2000);
                            控件点击(id("tv_btn_1"));
                            控件点击(id("img_close"));
                            back();
                            sleep(2000);
                            控件点击(id("button_back"));
                        }
                    }
                    if(k==7&& storagesd.get("wlkkqd",[-1])==-1){
                        qd(Array(Array(id("rl_bottom_4"),4000),Array(id("ll_not_sign").boundsInside(wt*0.5,0,wt,hg*0.4),7000),Array(text("立即签到"),7000)));
                        sleep(2000);
                        控件点击(id("rl_bottom_1"));
                        storagesd.put("wlkkqd",1);
                        qdbq = false;
                    }
                    mzdwz = 0;
                    视频播放();
                    if(!文章视频记录判断("wlkksp","wlkk2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                }else{
                    spsysx();
                    控件点击(id("img_close"));
                    控件点击(id("button_back"));
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                    随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.002,0.003),700);
                    sleep(1500);
                }
            }
        }
        function sypd() {
            var HM;
            wait("cn.etouch.ecalendar.MainActivity",null,20);
            sleep(2000);
            HM = className("android.support.v7.widget.RecyclerView").id("recyclerView").findOnce();
            if (HM !== null&&id("et_search").boundsInside(0,0,wt,hg*0.3).exists()){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(textContains("正常领"));
                控件点击(id("text_ok"));
                sleep(500);
                控件点击(id("iv_take"));
                控件点击(id("tv_ok"));
                HM = className("android.support.v7.widget.RecyclerView").id("recyclerView").findOnce();
                if (HM !== null&&id("et_search").boundsInside(0,0,wt,hg*0.3).exists()){
                    return HM;
                }
                if(j>4){
                    back();
                }
                if(j==5){
                    sysx();
                }
                sleep(3000);
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function wlkklhb(){
            var 领红包 = id("tv_treasure_box").text("领红包").findOnce();
            if(领红包){
                pclick(领红包.bounds().centerX()+随机数4,领红包.bounds().centerY()+随机数4);
                sleep(4500);
                var 关闭 = idContains("close").findOne(2000);
                if(关闭){
                    pclick(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4);
                    sleep(1000);
                }else{
                    back();
                    sleep(1000);
                }
            }
            var 五十 = id("tv_treasure_box").text("+50").findOnce();
            if (五十){
                pclick(五十.bounds().centerX()+随机数4,五十.bounds().centerY()+随机数4);
                sleep(4000);
                var 领50金币 = text("领50金币").findOne(3000);
                if(领50金币){
                    pclick(领50金币.bounds().centerX()+随机数4,领50金币.bounds().centerY()+随机数4);
                    sleep(1000);
                }else{
                    back();
                    sleep(1000);
                }
            }
        }
        function wlkkwzhd(){
            var 滑动次数 = random(12,14);
            if(控件判空点击2("rl_read_coin",1,false)==null){
                back();
                return false;
            }
            var nrk = id("scrollview").findOne(1500);
            for(i=0;i<滑动次数;i++){
                控件点击(id("text_ok"));
                控件点击(id("iv_close"));
                if(控件点击(className("android.widget.TextView").text("一键登录"))){
                    sleep(3000);
                    break;
                }
                if(nrk){
                    var qwyd = text("展开查看全文").boundsInside(1,nrk.bounds().top+10,wt-1,nrk.bounds().bottom-10).findOnce();
                    if (qwyd){
                        sleep(2000);
                        pclick(random(qwyd.bounds().left,qwyd.bounds().right),random(qwyd.bounds().top,qwyd.bounds().bottom));
                        sleep(2000);
                        nrk = null;
                    }
                }
                if (i > 3 && getRandom(0.35)){
                    // swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    sleep(2000);
                }else{
                    // swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    sleep(2000);
                }
            }
            if(text("今天已达奖励上限，去做其他任务赚取更多金币吧~").boundsInside(0,hg*0.6,wt,hg*0.95).exists()){
                storagesd.put("wlkkwz",storage.get("wlkk1"));
            }
            分享(id("btn_more"));
            back();
            return true;
        }
        function 分享(widget) {
            if (getRandom(storage.get("分享比例")/100) && storage.get("分享")) {
                var 分享btns = widget.findOnce();
                if (分享btns) {
                    Tap(分享btns.bounds().centerX() + 随机数20, 分享btns.bounds().centerY() + 随机数20);
                    var 朋友圈btns = text("朋友圈").findOne(5000);
                    sleep(3200);
                    if (朋友圈btns) {
                        Tap(朋友圈btns.bounds().centerX() + 随机数20, 朋友圈btns.bounds().centerY() + random(10, 20));
                        sleep(3200);
                        var 允许弹窗 = text("允许").findOnce();
                        if (允许弹窗) {
                            Tap(允许弹窗.bounds().centerX(), 允许弹窗.bounds().centerY());
                            sleep(1000);
                        }
                        wait("com.tencent.mm.plugin.sns.ui.SnsUploadUI", null, 20);
                        if (界面) {
                            sleep(3200)
                            var 发表s = text("发表").findOne(5000);
                            if (发表s) {
                                Tap(random(发表s.bounds().left, 发表s.bounds().right), random(发表s.bounds().top, 发表s.bounds().bottom));
                                sleep(3200);
                            }
                            sleep(3200);
                            launch("cn.weli.story");
                            sleep(6000);
                        }
                    }
                }
            }
        }
        function gkgg(){
            sleep(15000);
            for (let ggcs = 0; ggcs <5; ggcs++) {
                控件点击(id("tt_video_ad_close"));
                sleep(3000);
                if(text("点击打开").exists()||text("点击下载").exists()||text("查看详情").exists()){
                    break;
                }
            }
            back();
            sleep(2000);
        }

        function 红包任务(){
            if(控件点击(id("rl_bottom_2").boundsInside(wt*0.25,hg*0.8,wt*0.75,hg))){
                if(控件点击(id("btn_close"))){
                    随机滑动(Array(0.47,0.53),Array(0.59,0.6),Array(0.47,0.53),Array(0.19,0.20),1000);
                }
                var b = id("tv_unread_count").find();
                for( q = 0;q < b.length; q++){
                    Tap(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                    sleep(4000);
                    控件点击(id("iv_group_redPacket"));
                    抢红红包();
                    back();
                    sleep(1500);
                    控件点击(text("暂不开启"));
                }
            }
        }
        function  lty() {
            for (let index = 0; index < 3; index++) {
                if(!id("tv_send").exists()){
                    back();
                    sleep(3000);
                }else{
                    break;
                }
            }

        }

        function 抢红红包(){
            var bk = id("recycler_view").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
            var 是否点击;
            for (let ggcs = 0; ggcs <4; ggcs++) {
                for (let hhcs = 0; hhcs <4; hhcs++) {
                    if(bk){
                        是否点击 = 控件点击(searchTwice(id("tv_msg_status").text("点击领取").boundsInside(0,bk.bounds().top+hg*0.01,wt,bk.bounds().bottom-hg*0.01),id("tv_msg_status").text("感谢邻居们的付出").boundsInside(0,bk.bounds().top+hg*0.01,wt,bk.bounds().bottom-hg*0.01)));
                    }else{
                        是否点击 = 控件点击(searchTwice(id("tv_msg_status").text("点击领取").boundsInside(0,hg*1.5,wt,hg*0.9),id("tv_msg_status").text("感谢邻居们的付出").boundsInside(0,hg*0.1,wt,hg*0.9)));
                    }
                    if(是否点击){
                        sleep(3000);
                        if(控件点击(text("看完视频再得150"))){
                            sleep(4500);
                            if(!textContains("个红包，已领").exists()){
                                gkgg();
                            }
                        }
                        控件点击(text("知道了"));
                        lty();
                        sleep(2500)
                    }else{
                        break
                    }
                }
                随机滑动(Array(0.47,0.53),Array(0.19,0.20),Array(0.47,0.53),Array(0.92,0.93),1000);
                sleep(2500);
                if(searchTwice(id("tv_post_time").text("昨天").boundsInside(0,hg*0.5,wt,hg),id("tv_msg_status").text("已领取").boundsInside(0,hg*0.1,wt,hg*0.5)).exists()){
                    break;
                }
            }
        }
        function 自动登入(){
            sleep(1500);
            if(控件点击(id("et_tag_ad"))){
                toast("进入自动登陆");
                var wx = id("login_0").findOne(10000);
                if(wx){
                    sleep(2000);
                    wx.click();
                    sleep(2000);
                    var zym = id("rl_bottom_1").findOne(5000);
                    if(zym){
                        toast("登入成功");
                        return;
                    }
                    var ty = text("同意").findOne(10000);
                    if(ty){
                        sleep(2000);
                        ty.click();
                        sleep(2000);
                        return;
                    }
                }
                sleep(2000);
                back();
            }
        }
        function 搜索任务(){
            sleep(2500);
            if(控件点击(id("et_search"))){
                var 没找到次数 = 0;
                for (let index = 0; index < 40; index++) {
                    控件点击(textContains("领取+"));
                    var 次数 = id("search_count_view").findOnce();
                    if(次数){
                        var arr = 次数.text().split("/")[0].match(/\d+(.\d+)?/g)[0];
                        if(arr>=30){
                            toast("搜索任务已经完成");
                            break;
                        }
                    }
                    控件点击(id("et_search"));
                    sleep(2000);
                    var 父控件 = id("tabFlowLayout").findOnce();
                    var 搜索栏 = id("edt_tool_search").findOnce();
                    if(父控件||搜索栏){
                        没找到次数 = 0;
                        if(父控件){
                            var kj = 父控件.child(random(1,父控件.childCount()-3));
                            if(kj){
                                Tap(kj.bounds().centerX(),kj.bounds().centerY());
                                text("百度一下").findOne(5000);
                                sleep(2500);
                                Tap(random(wt*0.51,wt*0.52),random(hg*0.31,hg*0.32));
                                sleep(7000);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(3500);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(3500);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(2000);
                                back();
                                sleep(2500);
                            }
                        }else{
                            setClip(chatContent[random(1,chatContent.length)]);
                            搜索栏.paste();
                            if(控件点击(text("搜索"))){
                                text("百度一下").findOne(5000);
                                sleep(2500);
                                Tap(random(wt*0.51,wt*0.52),random(hg*0.51,hg*0.52));
                                sleep(7000);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(3500);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(3500);
                                随机滑动(Array(0.45,0.5),Array(0.67,0.7),Array(0.45,0.5),Array(0.1,0.15),750);
                                sleep(2000);
                                back();
                                sleep(2500);
                            }
                        }
                        for (let index = 0; index <4; index++){
                            if(id("edt_tool_search").exists()){
                                sleep(2000);
                                break;
                            }else{
                                if(控件点击(id("et_search"))){
                                    toast("进入搜索");
                                }else{
                                    back();
                                }
                                sleep(2500);
                            }
                        }
                        if(!id("edt_tool_search").exists()){
                            if(控件点击(id("et_search"))){
                                toast("进入搜索");
                            }else{
                                back();
                            }
                            sleep(2000);
                            if(!id("edt_tool_search").exists()){
                                toast("搜索任务中断");
                                return;
                            }
                        }
                        控件点击(textContains("领取+"));
                    }else{
                        没找到次数 = 没找到次数 + 1;
                        if(没找到次数>4){
                            toast("搜索任务中断");
                            break;
                        }
                    }
                }
                控件点击(id("img_tool_back"));
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("wlkktx",1)!==dayDiff)){
                toast("开始提现");
                qd(Array(Array(id("rl_bottom_4"),4000),Array(text("提现兑换"),4000),Array(text("立即提现"),4000)));
                sleep(3800);
                storagesd2.put("wlkktx",dayDiff);
            }
        }
        function 微鲤看看(){
            点击启动APP("微鲤");
            var wlkkwzcs = Math.ceil(storage.get("wlkk1")/4);
            var qdbq = false;
            if(storage.get("wlkk1")> storagesd.get("wlkkwz",[0])){
                for(k = 0;k<wlkkwzcs;){
                    var 主页 =  sypd();
                    if (主页 !== null){
                        自动登入();
                        if(parseInt(k%10) == 0 && k > 0) {
                            sysx();
                            sleep(2000);
                            UpOrDownSlide(true,1000,主页);
                        }else{
                            UpOrDownSlide(true,1000,主页);
                        }
                        sleep(1500);
                        if(qdbq&& storagesd.get("wlkkqd",[-1])==-1){
                            qd(Array(Array(id("rl_bottom_4"),4000),Array(id("ll_not_sign").boundsInside(wt*0.5,0,wt,hg*0.4),7000),Array(text("立即签到"),7000)));
                            sleep(2000);
                            控件点击(id("rl_bottom_0"));
                            storagesd.put("wlkkqd",1);
                            qdbq = false;
                            continue;
                        }
                        wlkklhb();
                        var 领取 = text("领金币").findOnce();
                        if (领取 !== null && 主页.bounds().top<领取.bounds().top && 主页.bounds().bottom>领取.bounds().bottom){
                            pclick(random(领取.bounds().left,领取.bounds().right),random(领取.bounds().top,领取.bounds().bottom));
                            sleep(3500);
                            var 关闭 = id("tv_ok").findOne(3000);
                            if (关闭 !== null){
                                pclick(关闭.bounds().centerX()+随机数20,关闭.bounds().centerY()+随机数20);
                                sleep(1500);
                            }
                        }
                        mzdwzhd++;
                        var b = id("tv_title").boundsInside(1,主页.bounds().top+10,wt-1,主页.bounds().bottom-10).find();
                        for( q = 0;q < b.length; q++){
                            mzdwzhd=0;
                            pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                            sleep(5000);
                            if(id("ll_video_area").exists()){
                                视频播放2();
                                back();
                                if(!文章视频记录判断("wlkksp","wlkk2")){
                                    back();
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                            }else if (wlkkwzhd()){
                                if(!文章视频记录判断("wlkkwz","wlkk1")){
                                    k = wlkkwzcs;
                                    back();
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                                if(k===1){
                                    qdbq = true;
                                }
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = wlkkwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2500);
                        }
                        if(mzdwzhd>5){
                            toast("连续6次没找不到视频或文章");
                            return false;
                        }
                        UpOrDownSlide(true,1000,主页);
                    }else{
                        toast("没有找到首页");
                        return false;
                    }
                }
                主页 = null;
            }
            搜索任务();

            if(storage.get("wlkk2") > storagesd.get("wlkksp",[0])){
                var 主页 =  sypd();
                if (主页 !== null){
                    wlkksp();
                }else{
                    toast("没有找到首页");
                    return false;
                }
                主页 = null;
            }
            sleep(2000);
            红包任务();
        }
        微鲤看看();
    }
    var jkd = function(){
        function tzqd (){
            if(storagesd.get("jkdqd",[-1])==-1){
                sleep(10000);
                toast("开始签到");
                var qd = id("v2_sign_sign_button").findOne(20000);
                if(qd){
                    sleep(3000);
                    // press(qd.bounds().centerX()+随机数4,qd.bounds().centerY(),60);
                    var automator = new RootAutomator();
                    automator.press(qd.bounds().centerX()+随机数4,qd.bounds().centerY(),60);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                    back();
                }
                storagesd.put("jkdqd",1);
            }
        }

        function sypd() {
            var HM;
            wait("com.xiangzi.jukandian.activity.MainActivity",null,30);
            sleep(2000);
            tzqd();
            HM = className("android.support.v7.widget.RecyclerView").id("rv_artical_list_view").findOnce();
            if (HM !== null)
            {
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>4){
                    back();
                }
                获取权限();
                HM = className("android.support.v7.widget.RecyclerView").id("rv_artical_list_view").findOnce();
                if (HM !== null){
                    return HM;
                }
                if(id("v2_sign_close_button").exists()){
                    sleep(2000);
                    var qd = id("v2_sign_sign_button").findOne(20000);
                    if(qd){
                        sleep(3000);
                        // press(qd.bounds().centerX()+随机数4,qd.bounds().centerY(),60);
                        var automator = new RootAutomator();
                        automator.press(qd.bounds().centerX()+随机数4,qd.bounds().centerY(),60);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                        back();
                    }
                }
                var close = idContains("close").findOnce();
                if (close) {
                    Tap(close.bounds().centerX(), close.bounds().centerY());
                }
                控件点击(id("timer_close_but"));
                控件点击(id("iv_cancel"));
                控件点击(id("cancel_quit"));
                sleep(3500);
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function jkdwzhd(){
            var 滑动次数 = random(10,14);
            sleep(4500);
            if(!id("ll_share_layout").exists() && !id("v2_video_detail_bottom_comment_share").exists()){
                back();
                return false;
            }
            var nrk = className("android.webkit.WebView").findOne(1000);
            for(i=0;i<滑动次数;i++){
                控件点击(text("忽略"));
                控件点击(id("timer_close_but"));
                if(控件点击(text("不再提示"))){
                    sleep(2000);
                    控件点击(text("确认关闭"));
                }
                if(nrk){
                    var qwyd = text("查看全文，奖励更多").boundsInside(1,nrk.bounds().top+10,wt-1,nrk.bounds().bottom-10).findOnce();
                    if (qwyd){
                        sleep(2000);
                        pclick(random(qwyd.bounds().left,qwyd.bounds().right),random(qwyd.bounds().top,qwyd.bounds().bottom));
                        sleep(2000);
                        nrk = null;
                    }
                }
                if (i > 3 && getRandom(0.1)) {
                    // swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    sleep(3000);
                }else {
                    // swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    sleep(3000);
                }
            }
            back();
            return true;
        }

        function spsysx(){
            var fkj = id("ll_tab2_layout").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function spsypd(){
            wait("com.xiangzi.jukandian.activity.V2NativeVideoActivity","com.xiangzi.jukandian.activity.MainActivity", 3);
            sleep(2000);
            主页sp = id("rv_video_list_view").findOnce();
            if (主页sp){
                return 主页sp;
            }
            for (var j=0;j<4;j++){
                控件点击(idContains("close"));
                if(j===2){
                    spsysx();
                }
                sleep(3000);
                主页sp = id("rv_video_list_view").findOnce();
                if (主页sp){
                    return 主页sp;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsyhd(){
            spsypd();
            UpOrDownSlide(true,1000,主页sp);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(10,15);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("领取").boundsInside(0,hg*0.35,wt,hg*0.95));
                控件点击(text("忽略"));
                sleep(3000);
                if(text("重播").boundsInside(0,0,wt,hg*0.6).exists()){
                    break;
                }
            }
        }
        function jkdsp(){
            var jkdspcs = Math.ceil(storage.get("jkd2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<jkdspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                var b = id("item_video_parent").boundsInside(0,主页sp.bounds().top+100,wt,主页sp.bounds().bottom-10).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    if(id("v2_video_detail_bottom_comment_write_text").exists()){
                        视频播放();
                        if(!文章视频记录判断("jkdsp","jkd2")){
                            return false;
                        }
                        k++;
                        mzdwz = 0;
                        if(k%5===0){
                            xhbq = true;
                        }
                    }
                    back();
                    sleep(2000);
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                }
                spsyhd();
            }
            return true;
        }
        function 聚看点(){
            var jkdwzcs = Math.ceil(storage.get("jkd1")/4);
            点击启动APP("聚看点");
            if(storage.get("jkd1") > storagesd.get("jkdwz",[0])){
                for(k = 0;k<jkdwzcs;){
                    var 主页 =  sypd();
                    if (主页 !== null){
                        if(parseInt(k%5) == 0 && k > 0) {
                            控件判空点击("ll_tab1_layout",1,2500,true);
                        }else{
                            UpOrDownSlide(true,1000,主页);
                        }
                        sleep(1500);
                        var 领取 = id("rl_lingqu_par").findOne(2000);
                        if (领取 !== null){
                            pclick(领取.bounds().centerX(),领取.bounds().centerY());
                            var 关闭 = id("dialog_close").findOne(1500);
                            if (关闭 !== null){
                                pclick(关闭.bounds().centerX(),关闭.bounds().centerY());
                                sleep(1500);
                            }
                        }
                        if(控件判空点击("阅读奖励100金币",2,500,true)!==null){
                            sleep(2000);
                            back();
                        }
                        if(mzdwzhd>5){
                            toast("连续6次没找不到视频或文章");
                            return false;
                        }
                        mzdwzhd++;
                        sleep(1000);
                        var b = id("item_artical_three_title_tv").boundsInside(1,主页.bounds().top+10,wt-1,主页.bounds().bottom-10).find();
                        for(q = 0;q < b.length; q++){
                            mzdwzhd=0;
                            pclick(b[q].bounds().centerX(),b[q].bounds().centerY());
                            sleep(1000);
                            if (jkdwzhd()){
                                if (!文章视频记录判断("jkdwz","jkd1")){
                                    k = jkdwzcs;
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = jkdwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2500);
                        }
                        UpOrDownSlide(true,1000,主页);
                    }else{
                        toast("没有找到首页");
                        return false;
                    }
                }
            }
            if(storage.get("jkd2") > storagesd.get("jkdsp",[0])){
                jkdsp();
            }else{
                return false;
            }
        }
        聚看点();
    }
    var bbsp = function(){
        function 视频播放(){
            var 随机播放时间 = random(6,13);
            sleep(1000);
            var 继续播放 = text("点此继续播放").findOnce();
            if(继续播放){
                Tap(继续播放.bounds().centerX()+随机数4,继续播放.bounds().centerY()+随机数4);
                sleep(1000);
            }
            if(控件点击(text("等待WLAN"))){
                return false;
            }
            for (let sj = 0; sj < 随机播放时间; sj++) {
                var 跳过广告 = className("android.widget.TextView").text("跳过广告").findOnce()
                if(跳过广告){
                    Tap(跳过广告.bounds().centerX()+随机数4,跳过广告.bounds().centerY()+随机数4);
                    sleep(2000);
                }
                var 自动连播 = text("自动连播").findOnce();
                if(自动连播){
                    Tap(自动连播.bounds().centerX()+随机数4,自动连播.bounds().centerY()+随机数4);
                }
                var 重播 = text("重播").findOnce();
                if(重播){
                    Tap(重播.bounds().centerX()+随机数4,重播.bounds().centerY()+随机数4);
                }
                sleep(6000);
            }
        }

        function 领取金币() {
            var 我的 = text("我的").findOnce();
            if (我的) {
                Tap(random(我的.bounds().left, 我的.bounds().right), random(我的.bounds().top, 我的.bounds().bottom));
                sleep(3200);
                var choseModel = text("知道了").findOnce();
                if (choseModel) {
                    // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                    var automator = new RootAutomator();
                    automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                    sleep(100);
                    automator.exit();
                    sleep(3200);
                }
                // swipe(wt * 0.5, hg * 0.2, wt * 0.5, hg * 0.8, 300);
                Swipe(wt * 0.5, hg * 0.2, wt * 0.5, hg * 0.8, 300);
                var 金币 = text("金币").findOne(13000);
                if (金币) {
                    Tap(random(金币.bounds().left, 金币.bounds().right), random(金币.bounds().top, 金币.bounds().bottom));
                    sleep(13000);
                    var 一键领取 = text("一键领取").findOnce();
                    var 一键领取2 = desc("一键领取").findOnce();
                    if (一键领取) {
                        Tap(random(一键领取.bounds().left, 一键领取.bounds().right), random(一键领取.bounds().top, 一键领取.bounds().bottom));
                        sleep(3200);
                        back();
                        sleep(3200);
                    } else if (一键领取2) {
                        Tap(random(一键领取2.bounds().left, 一键领取2.bounds().right), random(一键领取2.bounds().top, 一键领取2.bounds().bottom));
                        sleep(3200);
                        back();
                        sleep(3200);
                    } else {
                        back();
                        sleep(3200);
                    }
                    back();
                    sleep(3200);
                } else {
                    back();
                    sleep(4000);
                    var 金币 = text("金币").findOne(13000);
                    if (金币) {
                        Tap(random(金币.bounds().left, 金币.bounds().right), random(金币.bounds().top, 金币.bounds().bottom));
                        sleep(13000);
                        var 一键领取 = text("一键领取").findOnce();
                        var 一键领取2 = desc("一键领取").findOnce();
                        if (一键领取) {
                            Tap(random(一键领取.bounds().left, 一键领取.bounds().right), random(一键领取.bounds().top, 一键领取.bounds().bottom));
                            sleep(3200);
                            back();
                            sleep(3200);
                        } else if (一键领取2) {
                            Tap(random(一键领取2.bounds().left, 一键领取2.bounds().right), random(一键领取2.bounds().top, 一键领取2.bounds().bottom));
                            sleep(3200);
                            back();
                            sleep(3200);
                        } else {
                            back();
                            sleep(3200);
                        }
                        back();
                        sleep(3200);
                    }
                }
                var choseModel = text("知道了").findOnce();
                if (choseModel) {
                    // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                    var automator = new RootAutomator();
                    automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                    sleep(100);
                    automator.exit();
                    sleep(3200);
                }
                spsx();
            }
        }

        function 自动提现() {
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("bbsptx",1)>2)){
                toast("进入提现");
                var 我的 = text("我的").findOne(5000);
                if (我的) {
                    Tap(random(我的.bounds().left, 我的.bounds().right), random(我的.bounds().top, 我的.bounds().bottom));
                    sleep(3200);
                    var choseModel = text("知道了").findOnce();
                    if (choseModel) {
                        // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        var automator = new RootAutomator();
                        automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        sleep(100);
                        automator.exit();
                        sleep(3200);
                    }
                    qd(Array(Array(text("提现"),15000),Array(text("微信"),4000),Array(text("1元"),4000),Array(text("立即提现"),4000),Array(text("去授权"),8000),Array(text("提现"),4000)));
                    var choseModel = text("知道了").findOnce();
                    if (choseModel) {
                        storagesd2.put("bbsptx",dayDiff);
                        // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        var automator = new RootAutomator();
                        automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        sleep(100);
                        automator.exit();
                        sleep(3200)
                    }
                    back();
                    sleep(3200);
                    back();
                    sleep(3200);
                }
            }
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text(""))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function bbsplhb(){
            var 红包 = text("免费领").findOnce();
            if(红包){
                pclick(红包.bounds().centerX()+随机数4,红包.bounds().centerY()+随机数4);
                sleep(3500);
                if(!text("刷新").exists()){
                    gkgg();
                    spsx();
                }
            }
        }

        function spsx(){
            var 首页 = text("首页").findOnce();
            if (首页) {
                Tap(首页.bounds().centerX()+随机数4, 首页.bounds().centerY()+随机数4);
                sleep(4000);
            }else{
                首页 = text("刷新").findOnce();
                if (首页) {
                    Tap(首页.bounds().centerX()+随机数4, 首页.bounds().centerY()+随机数4);
                    sleep(7000);
                }
            }
        }
        function 领任务金币(){
            if(qd(Array(Array(text("赚钱"),4000)))){
                Tap(wt*0.092,hg*0.59);
                sleep(3000);
                Tap(wt*0.23,hg*0.59);
                sleep(3000);
                if(控件点击(text("开宝箱"))){
                    gkgg();
                }
                qd(Array(Array(text("首页"),4000)));
            }
        }
        function bbspsp(){
            var HM = null;
            var xhbq = false;
            var qdbq = false;
            var bbspspcs = Math.ceil(storage.get("bbsp2")/4);
            for(k = 0;k<bbspspcs;){
                HM = spsypd();
                if (HM !== null){
                    if(qdbq && storagesd.get("bbspqd",[-1])==-1){
                        if(qd(Array(Array(text("赚钱"),4000),Array(text("签到"),4000),Array(text("首页"),4000)))){
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("bbspqd",1);
                        }
                        qdbq = false;
                        continue;
                    }
                    bbsplhb();
                    if(parseInt(k%10) == 0 && xhbq) {
                        spsx();
                        领取金币();
                        xhbq = false;
                        UpOrDownSlide(true,1000,HM);
                    }else{
                        UpOrDownSlide(true,1000,HM);
                    }
                    if(mzdwzhd>7){
                        toast("连续8次没找到视频");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1000);
                    var b = textContains(":").boundsInside(0,HM.bounds().top+150,wt,HM.bounds().bottom-450).findOnce();
                    if(b){
                        mzdwzhd = 0;
                        pclick(b.bounds().centerX()+随机数20,b.bounds().centerY()+随机数20);
                        sleep(4000);
                        if(text("刷新").exists()){
                            视频播放();
                            if(!文章视频记录判断("bbspsp","bbsp2")){
                                领任务金币();
                                领取金币();
                                自动提现();
                                return true;
                            }
                            if(k===2){
                                qdbq = true;
                            }
                            k++;
                            xhbq = true;
                        }else{
                            for (let index = 0; index < 5; index++) {
                                back();
                                sleep(2500);
                                if(text("刷新").exists()){
                                    break;
                                }
                                if(index = 4){
                                    toast("没有找到视频页面");
                                    throw "没有找到视频页面";
                                }
                            }
                        }
                    }
                    UpOrDownSlide(true,1000,HM);
                }else{
                    toast("没有找到首页");
                    return false;
                }
            }
            领任务金币();
            自动提现();
            return true;
        }

        function spsypd(){
            var HM;
            wait("com.kg.v1.MainActivity", null, 30);
            sleep(2000);
            APP内部更新(text("火速升级"));
            HM = className("android.support.v4.view.ViewPager").findOnce();
            if (HM !== null&&text("刷新").exists()){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("知道了"));
                控件点击(text("同意"));
                控件点击(text("等待WLAN"));
                控件点击(id("tt_video_ad_close"));
                控件点击(id("tt_video_ad_close_layout"));
                if(j===4){
                    spsx();
                }
                HM = className("android.support.v4.view.ViewPager").findOnce();
                if (HM !== null&&text("刷新").exists()){
                    return HM;
                }
                sleep(3500);
                if(j>4){
                    text("推荐中").findOne(5000);
                    back();
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 波波视频(){
            点击启动APP("波波视频");
            if(storage.get("bbsp2") > storagesd.get("bbspsp",[0])){
                bbspsp();
            }
        }
        波波视频();
    }
    var ylkk = function(){
        function ylkkwzhd(){
            var 滑动次数 = random(8,10);
            sleep(4000);
            for(i=0;i<滑动次数;i++){
                var qwyd = text("点击阅读全文").boundsInside(0,hg*0.15,wt,hg*0.85).findOnce();
                if (qwyd){
                    sleep(2000);
                    pclick(random(qwyd.bounds().left+300,qwyd.bounds().right-300),random(qwyd.bounds().top,qwyd.bounds().bottom));
                    sleep(2000);
                }
                if (i>2 && getRandom(0.35)){
                    // swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.27,0.3),wt*0.45+随机数4,hg*random(0.7,0.75),1000);
                    sleep(4000);
                }else{
                    // swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    Swipe(wt*0.45+随机数4,hg*random(0.7,0.75),wt*0.45+随机数4,hg*random(0.27,0.3),1000);
                    sleep(4000);
                }
            }
            back();
            return true;
        }


        function sysx(){
            var fkj = text("有料").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2500);
            }
        }

        function sypd(){
            wait("com.youliao.topic.RNActivity", null, 30);
            sleep(7000);
            主页 = className("android.support.v4.view.ViewPager").findOnce();
            if (主页&&text("推荐").exists()){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                if(j===4){
                    控件点击(text("有料"));
                }
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                sleep(3000);
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.youliao.topic.RNActivity", null, 3);
            主页 = className("android.support.v4.view.ViewPager").findOnce();
            if (主页&&text("推荐").exists()){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(text("我知道了"))
                if(j===2){
                    控件点击(text("有料"));
                }
                sleep(3000);
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }


        function syhd(){
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(2500);
        }

        function 加载中() {
            for (let index = 0; index < 7; index++) {
                if(!text("加载中...").exists()){
                    return true;
                }else{
                    sleep(2000);
                }
            }
        }

        function 自动提现() {
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("ylkktx",1)>2)){
                toast("开始提现");
                sleep(2000);
                qd(Array(Array(text("资产"),4000),Array(text("提现兑换"),6000)));
                sleep(3000);
                text("微信"),findOne(5000),
                Tap(wt*0.75,hg*0.3);
                sleep(2000);
                qd(Array(Array(text("立即提现"),4000)));
                sleep(2000);
                back();
                sleep(2000);
                sysx();
                storagesd2.put("ylkktx",dayDiff);
            }
        }

        function 有料看看(){
            点击启动APP("有料看看");
            var xhbq = false;
            var qdbq = false;
            var bj = false;
            var b;
            var ylkkwzcs = Math.ceil(storage.get("ylkk1")/4);
            if(storage.get("ylkk1")> storagesd.get("ylkkwz",[0])){
                sypd();
                sleep(2000);
                控件点击(id("main1_timer_image1"));
                加载中();
                for(k = 0;k<ylkkwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                        加载中();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("ylkkqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(text("签到"),4000)))){
                            sleep(3000);
                            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.25,hg*0.28,wt*0.73,hg*0.42));
                            text("签到").findOne(5000);
                            back();
                            qd(Array(Array(text("有料"),4000)));
                            sypd2();
                            storagesd.put("ylkkqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(2000);
                    var 广告 = text("广告").boundsInside(1,主页.bounds().top,wt-1,主页.bounds().bottom).findOnce();
                    if(广告){
                        var ggzb = 广告.bounds().top;
                        if(ggzb>主页.bounds().centerY()){
                            b  = searchMultiple(Array(textContains("刚刚").boundsInside(1,主页.bounds().top*0.005,wt*0.4,ggzb),textContains("分钟前").boundsInside(1,主页.bounds().top*0.005,wt*0.4,ggzb),textContains("小时前").boundsInside(1,主页.bounds().top*0.005,wt*0.4,ggzb)));
                        }else{
                            b  = searchMultiple(Array(textContains("刚刚").boundsInside(1,ggzb+hg*0.05,wt*0.5,主页.bounds().bottom-hg*0.007),textContains("分钟前").boundsInside(1,ggzb+hg*0.05,wt*0.5,主页.bounds().bottom-hg*0.007),textContains("小时前").boundsInside(1,ggzb+hg*0.05,wt*0.5,主页.bounds().bottom-hg*0.007)));
                        }
                    }else{
                        b  = searchMultiple(Array(textContains("刚刚").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007),textContains("分钟前").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007),textContains("小时前").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007)));
                    }
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                        sleep(4800);
                        if(控件点击(text("我知道了"))){
                            sleep(1000);
                        }
                        if(className("android.view.ViewGroup").boundsInside(wt*0.7,1,wt,hg).exists()&&!text("本篇奖励已达上限，读其他新闻可得更多金币").exists()&&!text("Play Video ").exists()){
                            mzdwz = 0;
                            toast("进入文章");
                            ylkkwzhd();
                            if(!文章视频记录判断("ylkkwz","ylkk1")){
                                k = ylkkwzcs;
                                back();
                                自动提现();
                                if(控件点击(text("资产"))){
                                    sleep(3000);
                                }
                                break;
                            }
                            bj = true;
                        }else{
                            back();
                            bj = false;
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = ylkkwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                        加载中();
                        if(bj){
                            k++;
                            mzdwz = 0;
                            if(k===4){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                            sleep(2000);
                        }
                    }
                    syhd();
                }
                自动提现();
                if(控件点击(text("资产"))){
                    sleep(3000);
                }
            }
        }
        有料看看();
    }
    var sb = function(){
        function sypd(){
            var HM;
            wait("com.jm.video.ui.main.MainActivity",null,30);
            sleep(2000);
            HM = className("android.widget.LinearLayout").id("praise").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                back();
                sleep(3500);
                控件点击(text("继续看视频领取"));
                控件判空点击2("imgClose",1,true);
                HM = className("android.widget.LinearLayout").id("praise").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 点击广告(){
            sleep(25000);
            for (let index = 0; index < 20; index++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("iv_close"))){
                    break;
                }else{
                    sleep(3000);
                }
            }
            控件点击(id("tt_video_ad_close"));
            控件点击(id("iv_close"));
        }
        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("sbtx",1)!==dayDiff)){
                storagesd2.put("sbtx",dayDiff);
                sleep(1500);
                if(qd(Array(Array(text("我"),4000),Array(text("当前余额(元)"),6000),Array(text("立即提现"),6000),Array(text("已解锁"),6000),Array(text("立即提现"),6000)))){
                    storagesd2.put("ssptx",dayDiff);
                    qd(Array(Array(text("取消"),4000)));
                    back();
                    sleep(2000);
                    back();
                    sleep(2000);
                    back();
                    sleep(2000);

                }
            }
        }
        function 刷宝(){
            点击启动APP("刷宝");
            var Stime;
            var wt2 = Math.ceil(wt/2);
            var hg2 = Math.ceil(hg/2);
            var sbsx = Math.ceil(storage.get("sb2")/4);
            var mzdwz = 0;
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<sbsx;k++){
                    if(id("tv_top_name").boundsInside(0,hg*0.1,wt*0.2,hg*0.4).exists()){
                        pclick(wt*0.53,hg*0.49);
                        sleep(1000);
                    }
                    Stime = random(12000,14000);
                    控件点击(text("继续看视频领取"));
                    if(k===4&&storagesd.get("sbqd",-1)==-1){
                        qd(Array(Array(text("任务"),4000),Array(id("imgClose"),5000)));
                        sleep(1000);
                        控件点击(text("取消"));
                        if(qd(Array(Array(text("立即签到"),7000),Array(text("看视频签到"),4000)))){
                            点击广告();
                        }
                        sleep(1500);
                        storagesd.put("sbqd",1);
                        qd(Array(Array(text("首页"),4000)));
                    }
                    if(控件判空点击2("layProgress",1,false)!==null){
                        mzdwz = 0;
                        sleep(Stime);
                        if (getRandom(0.03)) {
                            pclick(random(wt2/2-10,wt2/2+10),random(hg2-10,hg2+10));
                            sleep(50);
                            pclick(random(wt2/2-10,wt2/2+10),random(hg2-10,hg2+10));
                            sleep(2000);
                        }
                        if(text("全部关注").exists()){
                            控件点击(text("好友"));
                        }
                        if(!文章视频记录判断("sbsp","sb2")){
                            自动提现();
                            return false;
                        }
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.7,0.71),Array(0.45,0.5),Array(0.001,0.002),700);
                    }else{
                        if(mzdwz>2){
                            mzdwz = 0;
                            return false;
                        }else{
                            mzdwz++;
                        }
                        控件点击(text("首页"));
                        随机滑动(Array(0.45,0.5),Array(0.7,0.71),Array(0.45,0.5),Array(0.002,0.003),700);
                        sleep(1500);
                    }
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        刷宝();
    }

    var sdhz = function(){
        var 主页 =null;
        var sdhzwzcs = Math.ceil(storage.get("sdhz1")/4);
        var sdhzgwcs = Math.ceil(storage.get("sdhz2")/4);
        function sypd(){
            wait("c.l.a.views.AppBoxHomeActivity",null,30);
            sleep(2000);
            主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
            if (主页 !== null){
                return 主页;
            }
            for (var j=0;j<15;j++){
                获取权限();
                控件点击(id("img_close"));
                if(text("广告").boundsInside(0,0,wt*0.3,hg*0.3).exists()){
                    var 确定 = text("确定").findOne(35000);
                    if (确定) {
                        sleep(2000);
                        // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                    }
                    控件点击(id("reward_ad_close"));
                }
                var 确定 = text("确定").findOnce();
                if(确定){
                    // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    var automator = new RootAutomator();
                    automator.press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                控件点击(id("tt_video_ad_close_layout"));
                控件点击(id("tt_video_ad_close"));
                控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2));
                控件点击(id("reward_ad_close"));
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                if(j>4){
                    back();
                }
                sleep(3500);
                主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
                if (主页 !== null){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("c.l.a.views.AppBoxHomeActivity",null,3);
            sleep(2000);
            主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
            if (主页 !== null){
                return 主页;
            }
            for (var j=0;j<15;j++){
                获取权限();
                控件点击(id("red_type_name"));
                控件点击(id("img_close"));
                if(text("广告").boundsInside(0,0,wt*0.3,hg*0.3).exists()){
                    var 确定 = text("确定").findOne(35000);
                    if (确定) {
                        sleep(2000);
                        // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                    }
                    控件点击(id("reward_ad_close"));
                }
                var 确定 = text("确定").findOnce();
                if(确定){
                    // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    var automator = new RootAutomator();
                    automator.press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                控件点击(id("tt_video_ad_close_layout"));
                控件点击(id("tt_video_ad_close"));
                控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2));
                控件点击(id("reward_ad_close"));
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    sleep(1000);
                }
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>4){
                    back();
                }
                sleep(3500);
                主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
                if (主页 !== null){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }
        function sdhzwzhd(){
            var sdhzwzhdcs = random(6,8);
            sleep(5000);
            var pd = id("news-title").findOne(10000);
            if(pd==null){
                toast("没找到文章");
                back();
                return false;
            }
            for(i=0;i<sdhzwzhdcs;i++){
                控件点击(id("img_close"));
                if (getRandom(0.3)){
                    随机滑动(Array(0.47,0.53),Array(0.27,0.3),Array(0.47,0.53),Array(0.7,0.75),1000);
                    sleep(4000);
                }else{
                    随机滑动(Array(0.47,0.53),Array(0.7,0.75),Array(0.47,0.53),Array(0.27,0.3),1000);
                    sleep(4000);
                }
            }
            back();
            return true;
        }

        function sdhzxhzkj(控件){
            try {
                for(xhz = 0;xhz< 控件.length;xhz++){
                    for (csb = 0;csb<控件[xhz][3];csb++){
                        if (控件判空点击2(控件[xhz][0],控件[xhz][1],true) !== null){
                            sleep(3000);
                            break;
                        }else{
                            sleep(1000);
                        }
                    }
                    if(csb>=控件[xhz][3]){
                        sleep(1500);
                        back();
                        sleep(1500);
                        if (控件判空点击2(控件[xhz][0],控件[xhz][1],true) !== null){
                            sleep(2500);
                        }else{
                            for (tccs = 0;tccs<控件[xhz][2];tccs++){
                                back();
                                sleep(1800);
                            }
                        }
                    }
                }
                return true;
            } catch (error) {
                throw("寻找找控件报错"+error);
            }
        }

        function 视频播放(){
            var 随机播放时间 = random(10,15);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(2000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
                控件点击(text("继续观看").boundsInside(0,hg*0.4,wt,hg*0.8));
                控件点击(text("点击重试").boundsInside(0,hg*0.45,wt,hg*0.75));
                控件点击(text("继续观看"));
                if(text("立即下载").exists()||text("查看详情 >").exists()){
                    break;
                }
            }
        }
        function 点击视频(){
            for (let index = 0; index < 3; index++) {
                if(控件点击(text("首页"))){
                    back();
                    sleep(2000);
                    控件点击(text("首页"));
                }
                sleep(2500);
                控件点击(text("小视频"));
                sleep(5000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
                if(id("user_nick_name").exists()){
                    return true;
                }
                back();
            }
            throw "没找到作品";
        }

        function spsyhd(){
            随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
            sleep(1500);
        }
        function sdhzxsp(){
            var sdhzspcs = Math.ceil(storage.get("sdhz3",60)/2);
            sleep(2000);
            sypd();
            点击视频();
            for(k = 0;k<sdhzspcs;){
                sleep(2000);
                if(k%3==0){
                    领红包();
                }
                if(id("user_nick_name").exists()&&!text("查看详情 >").exists()&&!text("立即下载").exists()){
                    mzdwz = 0;
                    视频播放();
                    if(!文章视频记录判断("sdhzxsp","sdhz3")){
                        back();
                        lhb2();
                        return false;
                    }
                    k++;
                    spsyhd();
                }else{
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                    spsyhd();
                }
            }
        }
        function syhd(){
            随机滑动(Array(0.47,0.53),Array(0.6,0.61),Array(0.47,0.53),Array(0.25,0.26),1000);
            sypd2();
        }

        function 领红包(){
            if(控件点击(textContains("超级红包"))||控件点击(textContains("大红包"))){
                for (let index = 0; index < 4; index++){
                    控件点击(textContains("超级红包"));
                    控件点击(textContains("大红包"));
                    sleep(1000);
                    if(text("阅读收益").exists()||text("红包收益").exists()){
                        sleep(2000);
                        back();
                        sleep(2000);
                        break;
                    }else{
                        var 确定 = text("确定").findOne(5000);
                        if (确定){
                            // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            sleep(2000);
                        }else{
                            back();
                            sleep(2000);
                        }
                    }
                }
            }
        }
        function 闪电盒子(){
            var xhbq = false;
            var qdbq = false;
            点击启动APP("闪电盒子");
            if(storage.get("sdhz1")> storagesd.get("sdhzwz",[0])){
                sypd();
                sleep(1500);
                控件点击(id("red_type_name"));
                sleep(3000);
                syhd();
                for(k = 0;k<sdhzwzcs;){
                    if(xhbq){
                        控件点击(text("首页"));
                        sleep(1500);
                        sleep(1500);
                        xhbq = false;
                    }
                    if(qdbq&&storagesd.get("sdhzqd",-1)==-1){
                        if(!qd(Array(Array(text("任务"),4000),Array(text("立即签到"),4000),Array(id("img_close"),4000)))){
                            sleep(1500);
                            storagesd.put("sdhzqd",1);
                        }
                        qd(Array(Array(text("首页"),4000)));
                        sypd2();
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续6次没找不到视频或文章");
                        return false;
                    }
                    if(k%3==0){
                        领红包();
                    }
                    syhd();
                    mzdwzhd++;
                    sleep(1000);
                    var b = id("from_text").boundsInside(1,主页.bounds().top+10,wt-1,主页.bounds().bottom-10).find();
                    for( q = 0;q < b.length; q++){
                        if(b[q].text().indexOf("广告")==-1&&b[q].text().indexOf("微视")==-1){
                            mzdwzhd=0;
                            try {
                                pclick(b[q].parent().bounds().centerX(),b[q].parent().bounds().centerY());
                            } catch (error) {
                                continue;
                            }
                            sleep(1000);
                            if (sdhzwzhd()){
                                if(!文章视频记录判断("sdhzwz","sdhz1")){
                                    back();
                                    k = sdhzwzcs;
                                    break;
                                }
                                if(k%9==0){
                                    xhbq = true;
                                }
                                k++;
                                mzdwz = 0;
                                if(k===1){
                                    qdbq = true;
                                }
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = sdhzwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                        }
                        sleep(4000);
                    }
                    syhd();
                }
            }
            if(storage.get("sdhz2") > storagesd.get("sdhzsp",[0])){
                主页 =  sypd();
                if (主页 !== null){
                    sleep(5000);
                    if(控件判空点击("逛逛领币",2,3000,true)==null){
                        back();
                        sleep(2000);
                        控件判空点击("逛逛领币",2,3000,true);
                    }
                    for(k = 0;k<sdhzgwcs;){
                        主页 = waitSPHome(Array("c.l.a.views.AppBoxHomeActivity"),Array(4,"逛一逛即得闪电币奖励"),30,Array("逛逛领币",1));
                        if (主页 !== null){
                            if(parseInt(k%5) == 0 && k > 0) {
                                sdhzxhzkj(Array(Array("任务",2,0,4),Array("image1",1,0,4),Array("btn_close",1,0,4),Array("逛逛领币",2,1,4)));
                                sleep(1500);
                                控件判空点击("逛逛领币",2,2500,true);
                            }else{
                                syhd();
                            }
                            if(mzdwzhd>5){
                                toast("连续6次没找不到视频或文章");
                                return false;
                            }
                            mzdwzhd++;
                            sleep(1500);
                            var b = id("retial_price_tv").boundsInside(220,230,wt-1,1220).find();
                            for( q = 0;q < b.length; q++){
                                mzdwzhd = 0;
                                pclick(b[q].bounds().centerX(),b[q].bounds().centerY());
                                sleep(4000);
                                if(id("like_container").findOne(3000)!==null){
                                    for(i=0;i<random(4,6);i++){
                                        控件点击(id("confirm"));
                                        if(getRandom(0.3)){
                                            随机滑动(Array(0.47,0.53),Array(0.27,0.3),Array(0.47,0.53),Array(0.7,0.75),1000);
                                            sleep(5000);
                                        }else{
                                            随机滑动(Array(0.47,0.53),Array(0.7,0.75),Array(0.47,0.53),Array(0.27,0.3),1000);
                                            sleep(5000);
                                        }
                                    }
                                    if(getRandom(0.5)){
                                        if(getRandom(0.7)){
                                            控件判空点击("喜欢",2,2000,true);
                                            sleep(2000);
                                        }
                                        else{
                                            控件判空点击("不喜欢",2,2000,true);
                                            sleep(2000);
                                        }
                                    }
                                    if(!文章视频记录判断("sdhzsp","sdhz2")){
                                        k = sdhzwzcs;
                                        back();
                                        break;
                                    }
                                    k++;
                                    back();
                                    sleep(1600);
                                    mzdwz = 0;
                                }else{
                                    back();
                                    sleep(2000);
                                    if(mzdwz>2){
                                        mzdwz = 0;
                                        return false;
                                    }else{
                                        mzdwz++;
                                    }
                                }
                            }
                            syhd();
                        }else{
                            toast("没有找到首页");
                            break;
                        }
                    }
                }else{
                    toast("没有找到首页");
                    return false;
                }
            }
            if(storage.get("sdhz3",40) > storagesd.get("sdhzxsp",[0])){
                sdhzxsp();
            }else{
                return false;
            }
        }
        闪电盒子();
    }
    var ttqw = function(){
        var ttqwwzcs = Math.ceil(storage.get("ttqw1")/4);
        function 摇钱树() {
            if(控件点击(text("赚钱"))){
                toast("摇钱树任务");
                text("红包农场").findOne(8000);
                sleep(3000);
                Tap(wt*0.5,hg*0.13);
                if(textContains("点击种下今天的摇钱树吧").exists()){
                    sleep(3000);
                    Tap(wt*0.5,hg*0.13);
                }
                sleep(4000);
                back();
                sleep(1700);
                if(text("红包农场").exists()){
                    控件点击(text("趣闻"));
                    sleep(2500);
                }else{
                    back();
                    sleep(1700);
                    back();
                    sleep(2500);
                }
            }
        }
        function ttqwwz(){
            for(i=0;i<random(5,6);i++){
                var ttqwyd =  id("showMore").boundsInside(1,250,wt-1,1300).findOnce();
                if(ttqwyd!==null){
                    sleep(3000);
                    pclick(random(ttqwyd.bounds().left,ttqwyd.bounds().right),random(ttqwyd.bounds().top,ttqwyd.bounds().bottom));
                    sleep(2500);
                    if(id("circleProgressbar").findOnce()==null){
                        back();
                    }
                }
                var ttqwjs =  textContains("这篇文章你看的时间很长啦").boundsInside(1,250,wt-1,1700).findOnce();
                if(ttqwjs!== null){
                    back();
                    return true;
                }
                随机滑动(Array(0.007,0.01),Array(0.7,0.75),Array(0.007,0.01),Array(0.27,0.3),1000);
                sleep(2800);
            }
            back();
            sleep(3000);
        }
        function ttwork(){
            try {
                sleep(4000);
                var issp = id("tv_title").text("视频").findOnce();
                var iswz =  id("circleProgressbar").findOnce();
                if(issp!==null){
                    back();
                    sleep(2000);
                    return false;
                }
                else if(iswz!==null){
                    ttqwwz();
                    return true;
                }else{
                    if(控件判空点击2("推荐",2,true)==null){
                        back();
                    }
                    sleep(2000);
                    return false;
                }
            } catch (error) {
                throw "ttwork方法错误"+error;
            }
        }

        function sypd() {
            var HM;
            wait("com.ttyouqu.app.module.MainActivity","com.ttyouqu.app.dialog.NewUserGiftActDailog",30);
            sleep(2000);
            HM = className("android.support.v7.widget.RecyclerView").id("recyclerView").findOnce();
            if (HM !== null&&id("tv_time").exists()){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("趣闻"));
                if(id("tv_right_btn").exists()){
                    back();
                    sleep(1000);
                }
                控件判空点击2("iv_close",1,true);
                HM = className("android.support.v7.widget.RecyclerView").id("recyclerView").findOnce();
                if (HM !== null&&id("tv_time").exists()){
                    return HM;
                }
                sleep(3700);
                if(j>4){
                    back();
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 天天趣闻(){
            点击启动APP("天天趣闻");
            var qdbq = false;
            var xhbq = false;
            if(storage.get("ttqw1") > storagesd.get("ttqwwz",[0])){
                for(k = 0;k<ttqwwzcs;){
                    var 主页 =  sypd();
                    if (主页 !== null){
                        if(parseInt(k%2) == 0 && xhbq) {
                            摇钱树();
                            控件判空点击2("iv_close",1,true);
                            UpOrDownSlide(true,1000,主页);
                            xhbq = false;
                            sleep(2500);
                        }else{
                            控件判空点击2("iv_close",1,true);
                            UpOrDownSlide(true,1000,主页);
                            sleep(1500);
                        }
                        if(qdbq&&storagesd.get("ttqwqd",[-1])==-1){
                            qd(Array(Array(text("我的"),4000),Array(id("ll_xday_signin_container"),4000)));
                            sleep(3500);
                            控件点击(searchTwice(id("sign-btn"),id("tv_sign")));
                            sleep(1500);
                            Tap(wt*0.51,hg*0.51);
                            sleep(2000);
                            back();
                            sleep(1500);
                            back();
                            控件点击(text("趣闻"));
                            storagesd.put("ttqwqd",1);
                            qdbq = false;
                            continue;
                        }
                        if(控件点击(text("领取金币"))){
                            sleep(2000);
                            if(!控件点击(id("iv_close"))){
                                sleep(1000);
                                back();
                            }
                            sleep(2000);
                        }
                        if(mzdwzhd>5){
                            toast("连续6次没找不到视频或文章");
                            return false;
                        }
                        mzdwzhd++;
                        sleep(1000);
                        var b = id("tv_read_num").boundsInside(1,主页.bounds().top+10,wt-1,主页.bounds().bottom-10).find();
                        for( q = 0;q < b.length; q++){
                            mzdwzhd = 0;
                            pclick(b[q].bounds().centerX(),b[q].bounds().centerY());
                            if (ttwork()){
                                if(!文章视频记录判断("ttqwwz","ttqw1")){
                                    k = ttqwwzcs;
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                                xhbq = true;
                                if(k===1){
                                    qdbq = true;
                                }
                            }else{
                                if(mzdwz>3){
                                    mzdwz = 0;
                                    k = ttqwwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2500);
                        }
                        控件判空点击2("iv_close",1,true);
                        UpOrDownSlide(true,1000,主页);
                    }else{
                        toast("没有找到首页");
                        return false;
                    }
                }
            }
        }
        天天趣闻();
    }

    var ks = function(){
        var HM = null;
        var dgcs = 0;
        function sypd(){
            wait("com.yxcorp.gifshow.HomeActivity",null,30);
            sleep(4000);
            滑块验证();
            HM = id("recycler_view").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
            if (HM !== null){
                return HM;
            }
            HM = text("关注").boundsInside(0,hg*0.5,wt,hg).findOnce();
            if (HM !== null){
                return HM;
            }
            HM = text("分享").boundsInside(wt*0.8,hg*0.5,wt,hg).findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                滑块验证();
                控件点击(idContains("close"));
                控件点击(text("我知道了"));
                HM = id("recycler_view").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
                if (HM !== null){
                    return HM;
                }
                HM = text("关注").boundsInside(0,hg*0.5,wt,hg).findOnce();
                if (HM !== null){
                    return HM;
                }
                HM = text("分享").boundsInside(wt*0.8,hg*0.5,wt,hg).findOnce();
                if (HM !== null){
                    return HM;
                }
                sleep(3500);
                if(j>4){
                    back();
                }
            }
            if(j>8){
                throw "没找到首页"
            }
            throw "没找到首页"
        }
        function 自动登陆(){
            if(控件点击(id("img_dialog"))||控件点击(id("login_text"))){
                var 一键登陆 = id("wechat_login_view").findOne(20000);
                if (一键登陆) {
                    sleep(2000);
                    // press(一键登陆.bounds().centerX()+随机数4, 一键登陆.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(一键登陆.bounds().centerX()+随机数4, 一键登陆.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(10000);
                }
            }
        }
        function 视频播放(){
            var 随机播放时间 = random(4,5);
            控件点击(text("点击重播"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("没有"));
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }
        function 快手(){
            点击启动APP("快手");
            var kssx = Math.ceil(storage.get("ks2")/2);
            var mzdwz = 0;
            var qdbq = false;
            sypd();
            if (HM !== null){
                sleep(3000);
                for(k = 0;k<kssx;k++){
                    自动登陆();
                    滑块验证();
                    控件点击(text("我知道了"));
                    控件点击(id("close"));
                    sleep(2000);
                    if(qdbq&&storagesd.get("ksqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(id("redFloat"),4000),Array(text("立即签到"),10000)))){
                            back();
                            sleep(3000);
                            for(k = 0;k<3;k++){
                                if(text("说点什么...").boundsInside(0,hg*0.8,wt*0.35,hg).exists()){
                                    break;
                                }
                                back();
                                sleep(3000);
                            }
                            storagesd.put("ksqd",1);
                        }
                        qdbq = false;
                    }
                    if((text("关注").boundsInside(0,hg*0.5,wt,hg).exists()||text("分享").exists())&&!text("立即下载").exists()){
                        mzdwz = 0;
                        视频播放();
                        if(!文章视频记录判断("kssp","ks2")){
                            return false;
                        }
                        控件点击(idContains("close"));
                        随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),600);
                        sleep(2000);
                        if(k===5){
                            qdbq = true;
                        }
                    }else{
                        if(mzdwz>2){
                            mzdwz = 0;
                            return false;
                        }else{
                            mzdwz++;
                        }
                        控件点击(text("没有"));
                        控件点击(text("点击重播"));
                        控件点击(idContains("close"));
                        随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),600);
                        Tap(random(wt*0.3,wt*0.4),random(hg*0.2,hg*0.3));
                        sleep(1500);
                    }
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        快手();
    }
    var xk = function(){
        var 主页 =null;
        var 主页sp = null;
        function xkwzhd(){
            var nrk = null;
            var 滑动次数 = random(10,13);
            sleep(5000);
            控件点击(text("继续阅读"));
            控件点击(id("iv_close"));
            if(!id("coin_bubble_layout").exists()&&!id("circle_coin_view").exists()){
                back();
                return -1;
            }
            if(id("video_item_play_btn").exists()){
                if(文章视频记录判断("xksp","xk2")){
                    视频播放();
                }
                back();
                return 2;
            }
            var nrk = className("com.miui.webkit.WebView").findOnce();
            for(i=0;i<滑动次数;i++){
                控件点击(text("我知道了"));

                if(nrk){
                    var qwyd = text("点击查看全文").boundsInside(0,nrk.bounds().top+100,wt,nrk.bounds().bottom-100).findOnce();
                    if (qwyd){
                        pclick(random(qwyd.bounds().left,qwyd.bounds().right),random(qwyd.bounds().top,qwyd.bounds().bottom));
                        sleep(2000);
                    }
                }
                if (i>3 && getRandom(0.35)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(4000);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(4000);
                }
            }
            if(getRandom(storage.get("收关喜比例")/100)){
                控件点击(text("关注"));
            }
            back();
            return 1;
        }

        function sysx(){
            var fkj = text("首页").boundsInside(0,hg*0.75,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left,fkj.bounds().right),random(fkj.bounds().top,fkj.bounds().bottom));
                sleep(2000);
            }
        }

        function spsysx(){
            var fkj = text("视频").boundsInside(0,hg*0.75,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left,fkj.bounds().right),random(fkj.bounds().top,fkj.bounds().bottom));
                sleep(2000);
            }
        }

        function sypd(){
            wait("com.bikan.reading.activity.MainActivity", null, 30);
            sleep(2000);
            主页 = id("view_pager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续阅读"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("view_pager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
                sleep(3000);
                主页 = id("view_pager").findOnce();
                if (主页){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.bikan.reading.activity.MainActivity", null, 30);
            主页 = id("view_pager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<5;j++){
                控件点击(idContains("close"));
                控件点击(text("继续阅读"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = id("view_pager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsypd(){
            wait("com.bikan.reading.activity.MainActivity",null, 3);
            sleep(2000);
            主页sp = id("view_pager").findOnce();
            if (主页sp&&textContains(":").exists()){
                return 主页sp;
            }
            for (var j=0;j<5;j++){
                控件点击(idContains("close"));
                if(j===2){
                    spsysx();
                }
                sleep(3000);
                主页sp = id("view_pager").findOnce();
                if (主页sp&&textContains(":").exists()){
                    return 主页sp;
                }
                if(j>2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsyhd(){
            spsypd();
            UpOrDownSlide(true,1000,主页sp);
            sleep(1500);
        }
        function syhd(){
            ljb();
            ljb2();
            ljb3();
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(15,20);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(id("player_mobile_net_retry").boundsInside(0,0,wt,hg*0.6));
                sleep(4000);
                if(text("重新播放").boundsInside(0,0,wt,hg*0.5).exists()){
                    break;
                }
            }
            if(getRandom(storage.get("收关喜比例")/100)){
                控件点击(text("关注"));
            }
        }

        function ljb(){
            var lq = id("rec_task_btn").findOnce();
            if(lq){
                sleep(1700);
                Tap(lq.bounds().centerX()+随机数4,lq.bounds().centerY()+随机数4);
                sleep(2000);
                if(!控件点击(text("继续阅读"))){
                    back();
                }
            }
        }

        function ljb2(){
            var lb = text("领金币").boundsInside(wt*0.7,0,wt,hg*0.2).findOnce();
            if(lb){
                sleep(1700);
                Tap(lb.bounds().centerX()+随机数4,lb.bounds().centerY()+随机数4);
                sleep(1700);
            }
        }

        function ljb3(){
            var lb = text("领取奖励").boundsInside(wt*0.7,0,wt,hg*0.2).findOnce();
            if(lb){
                sleep(1700);
                Tap(lb.bounds().centerX()+随机数4,lb.bounds().centerY()+随机数4);
                sleep(1700);
            }
        }

        function xksp(){
            var xkspcs = Math.ceil(storage.get("xk2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<xkspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                var b = id("video_item_play_btn").boundsInside(0,主页sp.bounds().top+70,wt,主页sp.bounds().bottom-70).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    控件点击(id("player_mobile_net_retry"));
                    if(id("add_comments").exists()){
                        视频播放();
                        if(!文章视频记录判断("xksp","xk2")){
                            return false;
                        }
                        k++;
                        mzdwz = 0;
                        if(k%5===0){
                            xhbq = true;
                        }
                    }
                    back();
                    sleep(2000);
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                }
                spsyhd();
            }
            return true;
        }
        function 想看(){
            var xkwzcs = Math.ceil(storage.get("xk1")/4);
            var xhbq = false;
            点击启动APP("想看");
            if(storage.get("xk1")> storagesd.get("xkwz",[0])){
                sypd();
                for(k = 0;k<xkwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(storagesd.get("xkqd",-1)==-1){
                        toast("进入签到");
                        qd(Array(Array(text("赚金币"),4000),Array(id("iv_close"),7000)));
                        back();
                        qd(Array(Array(text("首页"),4000)));
                        storagesd.put("xkqd",1);
                        sypd2();
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b =id("tvInfo").boundsInside(0,主页.bounds().top+10,wt,主页.bounds().bottom-200).find();
                    for( q = 0;q < b.length; q++){
                        if(b[q].text().indexOf("广告")==-1 && b[q].bounds().centerY()>0 && b[q].bounds().centerY()<wt){
                            mzdwzhd = 0;
                            pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                            var 返回值 = xkwzhd();
                            if (返回值!==-1){
                                if(返回值===1&&!文章视频记录判断("xkwz","xk1")){
                                    k = xkwzcs;
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                                if(k%5===0){
                                    xhbq = true;
                                }
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = xkwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2000);
                        }
                    }
                    syhd();
                }
            }
            if(storage.get("xk2") > storagesd.get("xksp",[0])){
                xksp();
            }else{
                return false;
            }
        }
        想看();
    }

    var kkd = function(){
        var kkdwzcs = Math.ceil(storage.get("kkd1")/4);
        var 主页 =null;
        var 主页sp = null;
        var hkyz = 0;

        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <7; ggcs++) {
                if(控件点击(id("tt_video_ad_close_layout"))){
                    break;
                }
                sleep(3000);
            }
            back();
            sleep(2000);
        }
        function kgg() {
            var imge = images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
            var point = images.findColor(imge, "#AE6129",{
                region: [wt*0.7, hg*0.65, wt*0.3, hg*0.3],
                threshold: 20
            });
            if (point) {
                // press(point.x, point.y, 120);
                var automator = new RootAutomator();
                automator.press(point.x, point.y, 120);
                sleep(100);
                automator.exit();
                sleep(2500);
                Tap(random(wt*0.51,wt*0.52),random(hg*0.51,hg*0.52));
                sleep(2500);
                back();
                sleep(2000);
                控件点击(text("继续阅读"));
            }
            var point2 = images.findMultiColors(imge,"#FF7500", [[0, -1, "#FF7D0D"], [0, 1, "#FF7400"], [0, hg*0.0083, "#FFD3B1"], [0, hg*0.0342, "#FF5B00"], [0, hg*0.049, "#FFFFFF"]],{
                region: [wt*0.8, hg*0.75, wt*0.2, hg*0.2],
                threshold: 20
            });
            if (point2) {
                // press(point2.x, point2.y, 120);
                var automator = new RootAutomator();
                automator.press(point2.x, point2.y, 120);
                sleep(100);
                automator.exit();
                sleep(3500);
                if(text("新人解锁奖励").exists()){
                    back();
                    sleep(2000);
                }else{
                    gkgg();
                }
            }
        }
        function kkdwzhd(){
            var 滑动次数 = random(10,13);
            sleep(5000);
            if(!(id("comment_input").exists())){
                back();
                return false;
            }
            if(textContains("次播放").exists()){
                if(文章视频记录判断("kkdsp","kkd2")){
                    视频播放();
                }
                back();
                return false;
            }
            for(i=0;i<滑动次数;i++){
                滑块验证();
                if (i>3 && getRandom(0.35)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(4000);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(4000);
                }
            }
            kgg();
            back();
            return true;
        }

        function sysx(){
            var fkj = text("首页").boundsInside(0,hg*0.75,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function spsysx(){
            var fkj = text("视频").boundsInside(0,hg*0.75,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function sypd(){
            wait("com.kuaishou.athena.MainActivity", null, 30);
            sleep(2000);
            控件点击(text("同意并继续"));
            主页 = id("view_pager").className("android.support.v4.view.ViewPager").findOnce();
            if (主页&&id("title").exists()){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续播放"));
                控件点击(text("同意并继续"));
                控件点击(text("收入囊中"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("view_pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&id("title").exists()){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
                sleep(3000);
                主页 = id("view_pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&id("title").exists()){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.kuaishou.athena.MainActivity", null, 3);
            主页 = id("view_pager").className("android.support.v4.view.ViewPager").findOnce();
            if (主页&&id("title").exists()){
                return 主页;
            }
            for (var j=0;j<5;j++){
                控件点击(idContains("close"));
                控件点击(text("继续播放"));
                if(j===3){
                    sysx();
                }
                主页 = id("view_pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页&&id("title").exists()){
                    return 主页;
                }
                if(j>2){
                    back();
                }
                sleep(3000);
            }
            throw "没有找到首页";
        }

        function spsypd(){
            wait("com.kuaishou.athena.MainActivity","com.android.systemui.recents.RecentsActivity",3);
            sleep(2000);
            主页sp = id("recycler_view").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
            if (主页sp&&textContains("次播放").exists()){
                return 主页sp;
            }
            for (var j=0;j<5;j++){
                控件点击(idContains("close"));
                if(j===2){
                    spsysx();
                }
                if(j>2){
                    back();
                }
                sleep(3000);
                主页sp = id("swipe_target").className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
                if (主页sp&&textContains("次播放").exists()){
                    return 主页sp;
                }
            }
            throw "没有找到首页";
        }

        function spsyhd(){
            ljb();
            spsypd();
            UpOrDownSlide(true,1000,主页sp);
            sleep(1500);
        }
        function syhd(){
            ljb();
            sdjl();
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(8,11);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("继续播放"));
                sleep(4000);
                if(text("重播").boundsInside(0,0,wt,hg*0.95).exists()){
                    break;
                }
            }
            kgg();
        }

        function ljb(){
            if(控件点击(text("任务"))){
                qd(Array(Array(text("领取"),4000),Array(text("首页"),4000)));
            }
        }

        function kkdsp(){
            var kkdspcs = Math.ceil(storage.get("kkd2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<kkdspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                控件点击(text("继续播放"));
                var b = textContains("次播放").boundsInside(0,主页sp.bounds().top+150,wt,主页sp.bounds().bottom-200).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    视频播放();
                    if(!文章视频记录判断("kkdsp","kkd2")){
                        return false;
                    }
                    k++;
                    if(k%5===0){
                        xhbq = true;
                    }
                }
                spsyhd();
            }
            return true;
        }
        function sdjl(){
            if(控件点击(text("福利").boundsInside(0,hg*0.75,wt,hg))){
                qd(Array(Array(textContains("领取").boundsInside(wt*0.8,0,wt,hg*0.4),7000),Array(text("首页"),4000)));
            }
        }

        function 提现(){
            if(storage.get("自动提现",[false])&&storagesd.get("kkdtx",-1)==-1){
                if(qd(Array(Array(searchTwice(id("tab_tv").textContains(":").boundsInside(wt*0.8,hg*0.8,wt,hg),text("任务").boundsInside(wt*0.8,hg*0.8,wt,hg)),4000),Array(text("我的金币"),4000),Array(text("去提现"),4000),Array(text("阅读专享"),4000)))){
                    sleep(2000);
                    Tap(wt*0.51,hg*0.95);
                    sleep(2000);
                    var tq = text("提取").findOne(10000);
                    if(tq){
                        sleep(2000);
                        Tap(tq.bounds().centerX(),tq.bounds().centerY());
                        sleep(3500);
                        storagesd.put("kkdtx",1);
                    }
                }
                back();
                sleep(3000);
                back();
                sleep(3000);
                back();
                sleep(3000);
                sysx();
            }
        }
        function 快看点(){
            点击启动APP("快看点");
            var xhbq = false;
            if(storage.get("kkd1")> storagesd.get("kkdwz",[0])){
                sypd();
                for(k = 0;k<kkdwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    滑块验证();
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b =id("title").boundsInside(1,主页.bounds().top+50,wt-1,主页.bounds().bottom-150).find();
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                        if (kkdwzhd()){
                            if(!文章视频记录判断("kkdwz","kkd1")){
                                k = kkdwzcs;
                                back();
                                break;
                            }
                            k++;
                            mzdwz = 0;
                            if(k===1){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                        }else{
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = kkdwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                    }
                    syhd();
                }
                sleep(2000);
                提现();
            }
            if(storage.get("kkd2") > storagesd.get("kkdsp",[0])){
                kkdsp();
            }else{
                return false;
            }
        }
        快看点();
    }

    var hs =function(){
        var HM = null;
        var dgcs = 0;
        function sypd(){
            wait("com.ss.android.ugc.live.main.MainActivity",null,30);
            sleep(2000);
            HM = className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(textContains("close"));
                控件点击(text("我知道了"));
                HM = className("android.support.v7.widget.RecyclerView").scrollable(true).findOnce();
                if (HM !== null){
                    return HM;
                }
                sleep(3500);
                if(j>4){
                    back();
                }
            }
            if(j>8){
                throw "没找到首页"
            }
            throw "没找到首页"
        }
        function 点击视频(){
            for (let index = 0; index < 6; index++) {
                Tap(random(wt*0.3,wt*0.4),random(hg*0.2,hg*0.3));
                sleep(3500);
                if(textContains("说点什么...").boundsInside(0,hg*0.8,wt,hg).exists()){
                    return true;
                }
                back();
                if(dgcs>3){
                    throw "多次点击的不是作品";
                }else{
                    dgcs++;
                    UpOrDownSlide(true,1000,HM);
                    点击视频();
                }
                if(textContains("说点什么...").boundsInside(0,hg*0.8,wt,hg).exists()){
                    return true;
                }
            }
            throw "没找到作品";
        }
        function 视频播放(){
            var 随机播放时间 = random(12,15);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("继续播放").boundsInside(0,hg*0.3,wt,hg*0.8));
                控件点击(text("点击重播").boundsInside(0,hg*0.3,wt,hg*0.8));
                sleep(1000);
                if(text("查看详情").exists()){
                    break;
                }
            }
        }
        function 火山(){
            点击启动APP("火山");
            var wt2 = Math.ceil(wt/2);
            var hg2 = Math.ceil(hg/2);
            var hssx = Math.ceil(storage.get("hs2")/4);
            var mzdwz = 0;
            sypd();
            if (HM !== null){
                sleep(2000);
                点击视频();
                for(k = 0;k<hssx;k++){
                    sleep(2000);
                    if(text("说点什么...").boundsInside(0,hg*0.8,wt,hg).exists()){
                        mzdwz = 0;
                        if(k===3&&storagesd.get("hsqd",-1)==-1){
                            storagesd.put("hsqd",1);
                            back();
                            sleep(1500);
                            if(qd(Array(Array(text("红包"),7000)))){
                                qd(Array(Array(text("现金余额"),4000)));
                                if(!text("现金余额").exists()){
                                    back();
                                    sleep(1500);
                                }
                                随机滑动(Array(0.47,0.52),Array(0.7,0.71),Array(0.47,0.52),Array(0.27,0.28),1000);
                                sleep(1500);
                                随机滑动(Array(0.47,0.52),Array(0.7,0.71),Array(0.47,0.52),Array(0.27,0.28),1000);
                                for (let index = 0; index < 3; index++) {
                                    if(控件点击(text("签到"))){
                                        qd(Array(Array(text("视频"),4000)));
                                    }
                                    随机滑动(Array(0.47,0.52),Array(0.7,0.71),Array(0.47,0.52),Array(0.27,0.28),1000);
                                }
                                sleep(1700);
                            }
                            sleep(1500);
                            点击视频();
                        }
                        视频播放();
                        if (getRandom(0.03)){
                            pclick(random(wt2/2-10,wt2/2+10),random(hg2-10,hg2+10));
                            sleep(50);
                            pclick(random(wt2/2-10,wt2/2+10),random(hg2-10,hg2+10));
                            sleep(2000);
                        }
                        if (getRandom(0.03)) {
                            var gz = text("关注").boundsInside(wt*0.2,hg*0.5,wt*0.65,hg).findOnce();
                            if(gz){
                                Tap(random(gz.bounds().left,gz.bounds().right),random(gz.bounds().top,gz.bounds().bottom));
                            }
                            sleep(1000);
                        }
                        if(id("incomeBtn").exists()){
                            back();
                        }
                        if(!文章视频记录判断("hssp","hs2")){
                            return false;
                        }
                        随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                        sleep(2000);
                    }else{
                        mzdwz++;
                        if(mzdwz>2){
                            mzdwz = 0;
                            return false;
                        }else{
                            mzdwz++;
                        }
                        随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                        Tap(random(wt*0.3,wt*0.4),random(hg*0.2,hg*0.3));
                        sleep(1500);
                    }
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        火山();
    }

    var dy = function(){
        function sypd(){
            var HM;
            wait("com.ss.android.ugc.aweme.main.MainActivity",null,30);
            sleep(2000);
            HM = text("关注").boundsInside(0,hg*0.8,wt*0.45,hg).findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                back();
                sleep(3500);
                控件判空点击2("imgClose",1,true);
                HM = text("关注").boundsInside(0,hg*0.8,wt*0.45,hg).findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 视频播放(){
            var 随机播放时间 = random(10,13);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(1000);
                if(text("查看收益").exists()){
                    back;
                }
            }
        }
        function 抖音(){
            点击启动APP("抖音");
            var dysx = Math.ceil(storage.get("dy2")/4);
            var mzdwz;
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<dysx;k++){
                    if(k===4&&storagesd.get("dyqd",-1)==-1){
                        if(控件点击(className("android.widget.ImageView").boundsInside(wt*0.3,hg*0.8,wt*0.7,hg))){
                            sleep(3000);
                            back();
                            控件点击(text("开宝箱得金币"));
                            sleep(1500);
                            back();
                        }
                    }
                    if(text("关注").boundsInside(0,hg*0.8,wt*0.45,hg).exists()){
                        mzdwz=0;
                        视频播放();
                        if(!文章视频记录判断("dysp","dy2")){
                            return false;
                        }
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                    }else{
                        mzdwz++;
                        if(mzdwz>2){
                            return false;
                        }else{
                            mzdwz++;
                        }
                        随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.002,0.003),600);
                        sleep(1500);
                    }
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        抖音();
    }


    var qtt = function(){
        var qttwzcs = Math.ceil(storage.get("qtt1")/4);
        var 主页 =null;

        function qttwzhd(){
            var 滑动次数 = random(10,13);
            for(i=0;i<滑动次数;i++){
                控件点击(id("iv_cancel"));
                if (i>3 && getRandom(0.35)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(3000);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(3000);
                }
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.44,hg*0.70,wt*0.56,hg*0.81));
            }
            Tap(wt*0.85,hg*0.78);
            sleep(3000);
            back();
            sleep(1000);
            back();
        }

        function qtttphd(){
            var 滑动次数 = random(5,6);
            for(i=0;i<滑动次数;i++){
                控件点击(id("iv_cancel"));
                if (i>2 && getRandom(0.55)) {
                    随机滑动(Array(0.15,0.16),Array(0.45,0.45),Array(0.94,0.95),Array(0.45,0.45),500);
                    sleep(4500);
                }else {
                    随机滑动(Array(0.85,0.86),Array(0.45,0.45),Array(0.05,0.06),Array(0.45,0.45),500);
                    sleep(4500);
                }
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.44,hg*0.70,wt*0.56,hg*0.81));
            }
            Tap(wt*0.83,hg*0.17);
            sleep(3000);
            back();
            sleep(1000);
            back();
        }

        function sysx(){
            var fkj = text("刷新").boundsInside(0,hg*0.8,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(5000);
            }
        }

        function spsysx(){
            var fkj = text("小视频").boundsInside(wt*0.1,hg*0.8,wt,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function sypd(){
            wait("com.jifen.qkbase.main.MainActivity", null, 30);
            sleep(2000);
            主页 = className("android.view.ViewGroup").findOnce();
            if (主页&&text("推荐").exists()){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("先去逛逛"));
                控件点击(text("同意"));
                控件点击(text("同意并进入"));
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.44,hg*0.70,wt*0.56,hg*0.81));
                if(j===4){
                    控件点击(text("头条"));
                }
                主页 = className("android.view.ViewGroup").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                sleep(3000);
                主页 = className("android.view.ViewGroup").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.42,hg*0.77,wt*0.575,hg*0.88));
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.jifen.qkbase.main.MainActivity", null, 3);
            主页 = className("android.view.ViewGroup").findOnce();
            if (主页&&text("推荐").exists()){
                return 主页;
            }
            for (var j=0;j<4;j++){
                if(控件点击(text("微信一键登录"))){
                    sleep(3500);
                    var 同意 = text("同意").findOne(6000);
                    if (同意) {
                        // press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                        return true;
                    }
                    if(控件点击(text("金币"))){
                        back();
                        sleep(1500);
                        back();
                        sleep(1500);
                    }
                }
                控件点击(text("同意"));
                控件点击(text("同意并进入"));
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.44,hg*0.70,wt*0.56,hg*0.81));
                if(j===2){
                    控件点击(text("头条"));
                }
                sleep(3000);
                主页 = className("android.view.ViewGroup").findOnce();
                if (主页&&text("推荐").exists()){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.42,hg*0.77,wt*0.575,hg*0.88));
            }
            throw "没有找到首页";
        }

        function syhd(){
            sypd2();
            ljb();
            ljb2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
            sypd2();
        }

        function ljb(){
            var lq = text("领取").boundsInside(wt*0.7,0,wt,hg*0.3).findOnce();
            if(lq){
                sleep(1700);
                Tap(lq.bounds().centerX()+随机数4,lq.bounds().centerY()+随机数4);
                sleep(3500);
                控件点击(text("我知道了"));
                if(控件点击(text("微信一键登录"))){
                    sleep(3500);
                    var 同意 = text("同意").findOne(6000);
                    if (同意) {
                        // press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                        return true;
                    }
                    if(控件点击(text("金币"))){
                        back();
                        sleep(1500);
                        back();
                        sleep(1500);
                    }
                }
            }
        }

        function ljb2(){
            var lq = textContains("金币奖励").boundsInside(1,主页.bounds().top+hg*0.005,wt*0.55,主页.bounds().bottom-hg*0.007).findOnce();
            if(lq){
                sleep(1700);
                Tap(lq.bounds().centerX()+随机数4,lq.bounds().centerY()+随机数4);
                sleep(2000);
                控件点击(className("android.widget.ImageView").boundsInside(wt*0.44,hg*0.70,wt*0.56,hg*0.85));
            }
        }

        function spsyhd(){
            随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(8,10);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(1000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
                if(text("立即下载").exists()||text("查看详情 >").exists()||text("打开应用").exists()){
                    break;
                }
            }
        }
        function 视频播放2(){
            var 随机播放时间 = random(15,30);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(2000);
                控件点击(text("继续观看").boundsInside(0,hg*0.2,wt,hg*0.5));
                if(text("关闭广告").exists()||text("重播").exists()){
                    break;
                }
            }
            Tap(wt*0.85,hg*0.78);
            sleep(3000);
            back();
            sleep(1000);
            back();
        }
        function qttsp(){
            var qttspcs = Math.ceil(storage.get("qtt2")/4);
            var mzdwz = 0;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<qttspcs;){
                sleep(2000);
                if(text("分享").boundsInside(wt*0.7,hg*0.65,wt,hg*0.9).exists()||控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8))){
                    mzdwz = 0;
                    视频播放();
                    if(!文章视频记录判断("qttsp","qtt2")){
                        return false;
                    }
                    k++;
                    spsyhd();
                }else{
                    mzdwz++;
                    if(mzdwz>2){
                        return false;
                    }else{
                        mzdwz++;
                    }
                    spsyhd();
                }
            }
            return true;
        }

        function 趣头条(){
            点击启动APP("趣头条");
            var xhbq = false;
            var qdbq = false;
            var bj = false;
            if(storage.get("qtt1")> storagesd.get("qttwz",[0])){
                sypd();
                sleep(4000);
                控件点击(id("main1_timer_image1"));
                for(k = 0;k<qttwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("qttqd",-1)==-1){
                        toast("进入签到");
                        var renwu = searchTwice(className("android.widget.FrameLayout").boundsInside(wt*0.55,hg*0.83,wt*0.85,hg),className("android.widget.Button").boundsInside(wt*0.55,hg*0.83,wt*0.85,hg)).findOnce();
                        if(renwu){
                            Tap(renwu.bounds().centerX()+随机数4,renwu.bounds().centerY());
                            sleep(1500);
                            text("任务中心").findOne(5000);
                            sleep(1500);
                            qd(Array(Array(text("头条"),4000)));
                            sypd2();
                            storagesd.put("qttqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b  = searchMultiple(Array(textContains("刚刚").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007),textContains("分钟前").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007),textContains("小时前").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007)));
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        try {
                            pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                        } catch (error) {
                            continue;
                        }
                        sleep(4800);
                        if(控件点击(text("关闭"))){
                            continue;
                        }
                        if(textContains("/").boundsInside(wt*0.13,hg*0.2,wt*0.8,hg*0.4).exists()){
                            toast("进入文章");
                            qttwzhd();
                            bj = true;
                        }else if(textContains("-").boundsInside(0*0.2,hg*0.43,wt,hg*0.55).exists()||控件点击(text("继续观看"))){
                            toast("进入视频");
                            视频播放2();
                            bj = true;
                        }else  if(textContains("/").boundsInside(0,hg*0.45,wt,hg).exists()&&!text("我的").exists()){
                            toast("进入图片");
                            qtttphd();
                            bj = true;
                        }else{
                            back();
                            bj = false;
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = qttwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                        if(bj){
                            if(!文章视频记录判断("qttwz","qtt1")){
                                k = qttwzcs;
                                back();
                                控件点击(text("我的"));
                                break;
                            }
                            k++;
                            mzdwz = 0;
                            if(k===4){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                            sleep(2000);
                        }
                    }
                    syhd();
                }
            }
            if(storage.get("qtt2") > storagesd.get("qttsp",[0])){
                qttsp();
            }else{
                return false;
            }
            控件点击(text("我的"));
        }
        趣头条();
    }


    var ddxw = function(){
        var ddxwwzcs = Math.ceil(storage.get("ddxw1")/4);
        var 主页 =null;
        var 主页sp = null;

        function ddxwwzhd(){
            var 滑动次数 = random(6,7);
            var qwdj = true;
            sleep(2000);
            var pd = id("tv_share").findOne(5000);
            if(pd === null){
                back();
                return -1;
            }
            if(textContains("结束后继续领取").exists()||textContains("今日阅读金币已用完").exists()){
                return -2;
            }
            for(i=0;i<滑动次数;i++){
                控件点击(id("iv_cancel"));
                if(qwdj){
                    var qwyd = className("android.view.View").boundsInside(wt*0.4,hg*0.15,wt*0.58,hg*0.85).findOnce();
                    if (qwyd){
                        pclick(random(qwyd.bounds().left,qwyd.bounds().right),random(qwyd.bounds().top,qwyd.bounds().bottom));
                        sleep(2000);
                        qwdj=false;
                    }
                }
                if (i>3 && getRandom(0.01)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(2500);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                }
            }
            back();
            return 1;
        }

        function sysx(){
            var fkj = text("资讯").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function spsysx(){
            var fkj = text("视频").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function sypd(){
            wait("com.yingliang.clicknews.MainActivity", null, 30);
            sleep(2000);
            主页 = id("tvTextHome").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(textContains("拒绝一次"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("tvTextHome").findOnce();
                if (主页){
                    return 主页;
                }
                sleep(3000);
                主页 = id("tvTextHome").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.yingliang.clicknews.MainActivity", null, 3);
            主页 = id("pager").className("android.support.v4.view.ViewPager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(textContains("拒绝一次"));
                控件点击(idContains("close"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = id("pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsypd(){
            wait("com.yingliang.clicknews.MainActivity", 3);
            sleep(2000);
            主页sp = id("pager").className("android.support.v4.view.ViewPager").findOnce();
            if (主页sp&&id("iv_video_start").exists()){
                return 主页sp;
            }
            for (var j=0;j<4;j++){
                控件点击(idContains("close"));
                if(j===2){
                    spsysx();
                }
                sleep(3000);
                主页sp = id("pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页sp&&id("iv_video_start").exists()){
                    return 主页sp;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsyhd(){
            spsypd();
            UpOrDownSlide(true,1000,主页sp);
            sleep(1500);
        }
        function syhd(){
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(6,9);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("继续观看").boundsInside(0,0,wt,hg*0.6));
                sleep(4000);
                if(text("重播").boundsInside(0,0,wt,hg*0.6).exists()){
                    break;
                }
            }
        }

        function ddxwsp(){
            var ddxwspcs = Math.ceil(storage.get("ddxw2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<ddxwspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                var b = id("iv_video_start").boundsInside(0,主页sp.bounds().top+hg*0.005,wt,主页sp.bounds().bottom-hg*0.07).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    if(textContains("结束后继续领取").exists()||textContains("阅读金币已用完").exists()){
                        return false;
                    }
                    if(id("imageView1").exists()){
                        视频播放();
                        if(!文章视频记录判断("ddxwsp","ddxw2")){
                            return false;
                        }
                        k++;
                        mzdwz = 0;
                        if(k%5===0){
                            xhbq = true;
                        }
                    }
                    back();
                    sleep(2000);
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                }
                spsyhd();
            }
            return true;
        }
        function 自动提现() {
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("ddxwtx",1)>3)){
                toast("开始提现");
                qd(Array(Array(text("我的"),4000),Array(text("提现兑换"),4000),Array(text("微信提现"),8000),Array(text("微信1元提现，秒到账"),8000),Array(text("立即提现"),4000),Array(text("提交订单"),4000)));
                back();
                sleep(3800);
                back();
                sleep(3800);
                sysx();
                storagesd2.put("ddxwtx",dayDiff);
            }
        }

        function 点点新闻(){
            点击启动APP("点点新闻");
            var xhbq = false;
            var qdbq = false;
            var ydjs = null;
            if(storage.get("ddxw1")> storagesd.get("ddxwwz",[0])){
                sypd();
                sleep(2000);
                控件点击(id("main1_timer_image1"));
                for(k = 0;k<ddxwwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("ddxwqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(text("任务"),4000),Array(text("我知道了"),7000)))){
                            qd(Array(Array(text("资讯"),4000)));
                            sypd2();
                            storagesd.put("ddxwqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b =id("tv_tag").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.07).find();
                    for( q = 0;q < b.length; q++){
                        if(b[q].text()!="广告"){
                            mzdwzhd = 0;
                            pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                            ydjs = ddxwwzhd();
                            if (ydjs!== -1){
                                if(ydjs === -2){
                                    return false;
                                }
                                if(!文章视频记录判断("ddxwwz","ddxw1")){
                                    k = ddxwwzcs;
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                                if(k===1){
                                    qdbq = true;
                                }
                                if(k%5===0){
                                    xhbq = true;
                                }
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = ddxwwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2000);
                        }
                    }
                    syhd();
                }
                自动提现();
            }
            if(storage.get("ddxw2") > storagesd.get("ddxwsp",[0])){
                ddxwsp();
            }else{
                return false;
            }
        }
        点点新闻();
        自动提现();
    }

    var cdsp = function(){
        var 主页 =null;
        function sypd(){
            wait("com.jifen.dandan.sub.home.activity.HomeActivity",null,30);
            sleep(4000);
            主页 = id("ll_comment_btn").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                控件点击(id("positive_button"));
                获取权限();
                if(j>6){
                    back();
                }
                sleep(3500);
                主页 = id("ll_comment_btn").findOnce();
                if (主页 !== null){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }

        function 自动登陆() {
            if(控件点击(text("注册/登录"))){
                var wx = text("微信一键登录").findOne(8000);
                if(wx==null){
                    wx = text("微信").findOne(8000);
                }
                if(wx){
                    sleep(1500);
                    Tap(wx.bounds().centerX()+随机数4,wx.bounds().centerY()+随机数4);
                    sleep(3000);
                }
            }
        }
        function 自动提现() {
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("cdsptx",1)>1)){
                toast("开始提现");
                sleep(3000);
                qd(Array(Array(id("tv_task_status"),4000)));
                text("去邀请").findOne(18000);
                sleep(4000)
                控件点击(className("android.widget.Image").boundsInside(wt*0.44,hg*0.86,wt*0.56,hg*0.93));
                Tap(wt*0.5,hg*0.28);
                text("我的钱包").findOne(15000);
                sleep(4000);
                Tap(wt*0.5,hg*0.95);
                sleep(3000)
                if(textContains("申请提现成功").exists()){
                    storagesd2.put("cdsptx",dayDiff);
                }
                back();
                sleep(3800);
            }
        }
        function 视频播放(){
            var 随机播放时间 = random(5,6);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(2000);
                控件点击(idContains("close"));
                控件点击(text("点击重播"));
            }
        }
        function 进入视频() {
            sleep(2000);
            for (let index = 0; index < 6; index++) {
                if(text("我来说两句").boundsInside(0,hg*0.8,wt*0.98,hg).exists()){
                    return true;
                }
                随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),700);
                sleep(1500);
                控件点击(idContains("close"));
                控件点击(className("android.widget.RelativeLayout").boundsInside(1,hg*0.85,wt*0.25,hg));
                sleep(2000);
            }
            toast("找不到视频页");
            自动提现();
            throw "找不到视频页";
        }
        function 彩蛋视频(){
            点击启动APP("彩蛋视频");
            var cdspsx = Math.ceil(storage.get("cdsp2")/4);
            sypd();
            自动登陆();
            for(k = 0;k<cdspsx;k++){
                if(k===4&&storagesd.get("cdspqd",-1)==-1){
                    if(qd(Array(Array(id("tv_task_status"),4000)))){
                        if(text("签到").findOne(6000)){
                            sleep(1500);
                            storagesd.put("cdspqd",1);
                        }
                        back();
                        sleep(4000);
                        back();
                        sleep(2000);
                    }
                }
                sleep(random(11000,13000));
                if(!文章视频记录判断("cdspsp","cdsp2")){
                    自动提现();
                    return false;
                }
                if(text("1天赚1月工资").findOne()){
                    back();
                    sleep(1000);
                    back();
                    sleep(1000);
                }
                控件点击(idContains("close"));
                sleep(1500);
                随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),700);
            }
            自动提现();
        }
        彩蛋视频();
    }

    var jrtt = function(){
        var jrttwzcs = Math.ceil(storage.get("jrtt1"));
        var 主页 =null;
        var 主页sp = null;

        function jrttwzhd(){
            var 滑动次数 = random(35,37);
            sleep(2000);
            var pd = textContains("写评论…").findOne(4000);
            if(pd === null){
                back();
                return -1;
            }
            sleep(1500);
            for(i=0;i<滑动次数;i++){
                控件点击(id("iv_cancel"));
                底部 = text("分享微信").findOnce();
                if(底部&& hg*0.7>底部.bounds().bottom){
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                    back();
                    return 1;
                }
                if (getRandom(i>16)) {
                    随机滑动(Array(0.47,0.52),Array(0.81,0.82),Array(0.47,0.52),Array(0.21,0.22),1000);
                    sleep(1000);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.21,0.22),1000);
                    sleep(3000);
                }
            }
            back();
            return 1;
        }

        function sysx(){
            var fkj = text("首页").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function spsysx(){
            var fkj = text("视频").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }

        function sypd(){
            wait("com.ss.android.article.base.feature.detail2.view.NewDetailActivity", "com.ss.android.article.lite.activity.SplashActivity", 30);
            sleep(2000);
            主页 = className("android.support.v4.view.ViewPager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("拒绝"));
                控件点击(text("我知道了"));
                if(j===4){
                    sysx();
                }
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页){
                    return 主页;
                }
                sleep(3000);
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.ss.android.article.base.feature.detail2.view.NewDetailActivity", "com.ss.android.article.lite.activity.SplashActivity", 3);
            主页 = className("android.support.v4.view.ViewPager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(text("拒绝"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = className("android.support.v4.view.ViewPager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsypd(){
            wait("com.yingliang.clicknews.MainActivity", 3);
            sleep(2000);
            主页sp = id("pager").className("android.support.v4.view.ViewPager").findOnce();
            if (主页sp&&id("iv_video_start").exists()){
                return 主页sp;
            }
            for (var j=0;j<4;j++){
                控件点击(idContains("close"));
                if(j===2){
                    spsysx();
                }
                sleep(3000);
                主页sp = id("pager").className("android.support.v4.view.ViewPager").findOnce();
                if (主页sp&&id("iv_video_start").exists()){
                    return 主页sp;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function spsyhd(){
            spsypd();
            UpOrDownSlide(true,1000,主页sp);
            sleep(1500);
        }
        function syhd(){
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(6,9);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(text("继续观看").boundsInside(0,0,wt,hg*0.6));
                sleep(4000);
                if(text("重播").boundsInside(0,0,wt,hg*0.6).exists()){
                    break;
                }
            }
        }

        function jrttsp(){
            var jrttspcs = Math.ceil(storage.get("jrtt2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<jrttspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                var b = id("iv_video_start").boundsInside(0,主页sp.bounds().top+hg*0.005,wt,主页sp.bounds().bottom-hg*0.07).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    if(textContains("结束后继续领取").exists()||textContains("阅读金币已用完").exists()){
                        return false;
                    }
                    if(id("imageView1").exists()){
                        视频播放();
                        if(!文章视频记录判断("jrttsp","jrtt2")){
                            return false;
                        }
                        k++;
                        mzdwz = 0;
                        if(k%5===0){
                            xhbq = true;
                        }
                    }
                    back();
                    sleep(2000);
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                }
                spsyhd();
            }
            return true;
        }

        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <7; ggcs++) {
                if(控件点击(id("tt_video_ad_close_layout"))||控件点击(text("关闭广告"))){
                    break;
                }
                sleep(3000);
            }
            back();
            sleep(2000);
        }
        function ljb(){
            if(qd(Array(Array(text("任务"),4000)))){
                sleep(5000);
                Tap(wt*0.85,hg*0.85);
                sleep(3000);
                Tap(wt*0.51,hg*0.65);
                sleep(2000);
                gkgg();
            }
        }
        function 今日头条(){
            点击启动APP("今日头条");
            var qdbq = false;
            var ydjs = null;
            if(storage.get("jrtt1")> storagesd.get("jrttwz",[0])){
                sypd();
                sleep(2000);
                for(k = 0;k<jrttwzcs;){
                    syhd();
                    if(qdbq&&storagesd.get("jrttqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(text("任务"),4000)))){
                            sleep(2000);
                            Tap(wt*0.51,hg*0.65);
                            sleep(2000);
                            gkgg();
                            qd(Array(Array(text("首页"),4000)));
                            sypd2();
                            storagesd.put("jrttqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var 广告 = searchTwice(text("立即下载").boundsInside(1,主页.bounds().top,wt-1,主页.bounds().bottom),text("查看详情").boundsInside(1,主页.bounds().top,wt-1,主页.bounds().bottom)).findOnce();
                    if(广告){
                        var ggzb = 广告.bounds().top;
                        if(ggzb>主页.bounds().centerY()){
                            b  = className("android.widget.TextView").boundsInside(1,主页.bounds().top*0.005,wt-1,ggzb-hg*0.35).find();
                        }else{
                            b  = className("android.widget.TextView").boundsInside(1,ggzb,wt-1,主页.bounds().bottom).find();
                        }
                    }else{
                        b  = className("android.widget.TextView").boundsInside(1,主页.bounds().top+hg*0.005,wt-1,主页.bounds().bottom-hg*0.007).find();
                    }
                    for( q = 0;q < b.length; q++){
                        if(b[q].bounds().right-b[q].bounds().left>wt*0.9&&b[q].bounds().top>主页.bounds().top&&b[q].bounds().top<主页.bounds().bottom){
                            mzdwzhd = 0;
                            pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                            ydjs = jrttwzhd();
                            if (ydjs!== -1){
                                if(ydjs === -2){
                                    return false;
                                }
                                if(!文章视频记录判断("jrttwz","jrtt1")){
                                    k = jrttwzcs;
                                    break;
                                }
                                k++;
                                mzdwz = 0;
                                if(k===1){
                                    qdbq = true;
                                }
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = jrttwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                            sleep(2000);
                        }
                    }
                    syhd();
                }
                ljb();
            }
            if(storage.get("jrtt2") > storagesd.get("jrttsp",[0])){
                jrttsp();
            }else{
                return false;
            }
        }
        今日头条();
    }

    var bxtt = function(){
        var bxttwzcs = Math.ceil(storage.get("bxtt1")/4);
        var 主页 =null;
        var 主页sp = null;

        function bxttwzhd(){
            var 滑动次数 = random(28,32);
            sleep(2000);

            var pd = textContains("2020-").findOne(5000);
            if(pd === null){
                back();
                return -1;
            }else{
                sleep(2000);
            }
            for(i=0;i<滑动次数;i++){
                控件点击(idContains("close"));
                var qwyd = text("下一页").boundsInside(0,hg*0.15,wt,hg*0.85).findOnce();
                if (qwyd){
                    pclick(random(qwyd.bounds().left,qwyd.bounds().right),random(qwyd.bounds().top,qwyd.bounds().bottom));
                    sleep(2000);
                }
                if(textContains("这篇文章您已经读很久了，建议换一篇哦！").exists()){
                    return  1;
                }
                var tjyd = text("相关推荐").findOnce();
                if(tjyd&&tjyd.bounds().bottom<hg/2){
                    Tap(random(wt*0.45,wt*0.55),random(tjyd.bounds().bottom+100,hg*0.95));
                }
                if (i>3 && getRandom(0.01)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(2500);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                }
            }
            back();
            return 1;
        }

        function sysx(){
            var fkj = searchTwice(text("头条"),text("刷新")).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }
        function sypd(){
            wait("com.qiushibaike.inews.home.HomeActivity", null, 30);
            sleep(2000);
            主页 = id("rv_recyclerView_category_list").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("百姓头条"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("rv_recyclerView_category_list").findOnce();
                if (主页){
                    return 主页;
                }
                sleep(3000);
                主页 = id("rv_recyclerView_category_list").findOnce();
                if (主页)
                {
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.qiushibaike.inews.home.HomeActivity", null, 3);
            主页 = id("rv_recyclerView_category_list").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(text("百姓头条"));
                控件点击(idContains("close"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = id("rv_recyclerView_category_list").findOnce();
                if (主页){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }
        function syhd(){
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
            sypd2();
        }

        function 百姓头条(){
            点击启动APP("百姓头条");
            var xhbq = false;
            var qdbq = false;
            var ydjs = null;
            if(storage.get("bxtt1")> storagesd.get("bxttwz",[0])){
                sypd();
                sleep(2000);
                控件点击(id("main1_timer_image1"));
                for(k = 0;k<bxttwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("bxttqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(text("赚零花"),4000),Array(text("账户余额（元）"),8000)))){
                            随机滑动(Array(0.47,0.52),Array(0.85,0.86),Array(0.47,0.52),Array(0.01,0.02),1000);
                            sleep(2000);
                            控件点击(text("可领取"));
                            qd(Array(Array(text("头条"),4000)));
                            sypd2();
                            storagesd.put("bxttqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b =textContains("万阅读").boundsInside(1,主页.bounds().top+hg*0.05,wt-1,主页.bounds().bottom-hg*0.007).find();
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                        ydjs = bxttwzhd();
                        if (ydjs!== -1){
                            if(!文章视频记录判断("bxttwz","bxtt1")){
                                k = bxttwzcs;
                                break;
                            }
                            k++;
                            mzdwz = 0;
                            if(k===1){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                        }else{
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = bxttwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                    }
                    syhd();
                }
            }
            if(storage.get("bxtt2") > storagesd.get("bxttsp",[0])){
                if(!文章视频记录判断("bxttsp","bxtt2")){
                }
            }else{
                return false;
            }
        }
        百姓头条();
    }

    var wbtc = function(){
        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <7; ggcs++) {
                if(控件点击(id("tt_video_ad_close_layout"))||控件点击(text("关闭广告"))){
                    break;
                }
                sleep(3000);
            }
            sleep(2000);
        }

        function 看视频(){
            sleep(3500);
            var 看视频 = text("+12mg").findOne(10000);
            if(看视频==null){
                看视频 = text("+10mg").findOnce();
            }
            if(看视频){
                sleep(4000);
                Tap(看视频.bounds().centerX()+随机数4, 看视频.bounds().centerY()+随机数4);
                Tap(看视频.bounds().centerX()+随机数4, 看视频.bounds().centerY()+随机数4);
                for (let index = 0; index < 6; index++){
                    gkgg();
                    sleep(5000);
                    if(!控件点击(text("继续赚钱"))){
                        控件点击(text("任务完成"));
                        break;
                    }else{
                        控件点击(text("看视频"));
                    }
                }
            }
        }

        function 挖矿(){
            sleep(5000);
            var 进入挖矿 = searchTwice(text("查看挖矿进度"),text("立即挖矿")).findOnce();
            if(进入挖矿==null){
                进入挖矿 = text("去收矿").findOnce();
            }
            if(进入挖矿){
                sleep(4000);
                Tap(进入挖矿.bounds().centerX()+随机数4, 进入挖矿.bounds().centerY()+随机数4);
                textContains("累计挖矿").findOne(10000);
                sleep(2000);
                for (let index = 0; index < 6; index++) {
                    sleep(3000);
                    if(!控件点击(className("android.view.View").textContains("mg").boundsInside(1,hg*0.19,wt,hg*0.72))){
                        break;
                    }
                }
                随机滑动(Array(0.47,0.52),Array(0.75,0.76),Array(0.47,0.52),Array(0.01,0.02),1000);
                sleep(2000);
                for (let index = 0; index < 3; index++) {
                    sleep(3000);
                    if(!控件点击(text("去收矿"))){
                        break;
                    }
                }
                back();
                sleep(2000);
            }
        }
        function 签到(){
            sleep(5000);
            if(控件点击(textContains("mg").boundsInside(wt*0.75,hg*0.5,wt*0.98,hg*0.78))){
                sleep(4000);
                if(控件点击(text("去抽奖"))){
                    text(免费抽奖).findOne(10000);
                    sleep(2000);
                    for (let index = 0; index < 3; index++) {
                        Tap(wt*0.49,hg*0.49);
                        sleep(8000);
                        控件点击(text("立即领取").boundsInside(wt*0.2,hg*0.5,wt*0.8,hg*0.8));
                        控件点击(className("android.view.View").boundsInside(wt*0.44,hg*0.7,wt*0.55,hg*0.85));
                        sleep(2000);
                    }
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.wuba.home.activity.HomeActivity",null,30);
            sleep(4000);
            HM = text("首页").findOnce();
            控件点击(idContains("close"));
            控件点击(text("不要啦"));
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                HM = text("首页").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 点击进入(){
            if(控件点击(text("我的"))){
                sleep(4000);
                var 神奇矿 = text("神奇矿(mg)").findOne(10000);
                if(神奇矿){
                    sleep(3000);
                    // press(神奇矿.bounds().centerX()+随机数4, 神奇矿.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(神奇矿.bounds().centerX()+随机数4, 神奇矿.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                }else{
                    Tap(wt*0.18,hg*0.41);
                }
            }
        }

        function 同城(){
            点击启动APP("58同城");
            var 主页 =  sypd();
            if (主页 !== null){
                点击进入();
                var 提现 = text("提现").findOne(20000);
                sleep(2000);
                控件点击(className("android.view.View").boundsInside(wt*0.44,hg*0.7,wt*0.55,hg*0.95));
                if(提现){
                    看视频();
                    随机滑动(Array(0.47,0.52),Array(0.85,0.86),Array(0.47,0.52),Array(0.01,0.02),1000);
                    挖矿();
                    sleep(2000);
                    随机滑动(Array(0.47,0.52),Array(0.25,0.26),Array(0.47,0.52),Array(0.98,0.99),1000);
                    随机滑动(Array(0.47,0.52),Array(0.25,0.26),Array(0.47,0.52),Array(0.98,0.99),1000);
                    签到();
                    if(!文章视频记录判断("wbtcwz","wbtc1")){
                        toast("任务到达上限");
                        return false;
                    }
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        同城();
    }

    var llyd = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.toutiaozuqiu.and.liuliu.StartActivity","com.toutiaozuqiu.and.liuliu.MainActivity",30);
            sleep(4000);
            控件点击(id("activity_start_btn"));
            自动更新();
            HM = id("navigation_tasks").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                控件点击(id("activity_start_btn"));
                HM = id("navigation_tasks").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 重新授权() {
            if(控件点击(text("重新授权验证"))){
                var gkdysp = text("点我授权绑定").findOne(15000);
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    var gkdysp = text("授权并登陆").findOne(15000);
                    if (gkdysp) {
                        sleep(1500);
                        // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                    }
                }
            }
            控件点击(text("授权并登陆"));
        }

        function 点击进入(){
            for (let index = 0; index < 9; index++) {
                sleep(2000);
                重新授权();
                var 领取任务 = text("领取任务").findOnce();
                if(领取任务){
                    sleep(1500);
                    // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(3000);
                }
                控件点击(text("我知道了"));
                if(text("打开“爆音”做任务").exists()){
                    return true;
                }
                if(控件点击(text("授权并登录"))){
                    sleep(4500);
                    控件点击(text("领取任务"));
                }
                var gkdysp = text("观看爆音视频").findOnce();
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2500);
                }
                if(控件点击(text("好的"))){
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.1,0.2),1000);
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.1,0.2),1000);
                    var 开始在任务 = text("开始做任务").findOne(7000);
                    if (开始在任务) {
                        // press(开始在任务.bounds().centerX()+随机数4, 开始在任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(开始在任务.bounds().centerX()+随机数4, 开始在任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                    }
                }
                if(个人中心()){
                    continue;
                }
                if(text("提交任务").exists()){
                    back();
                    sleep(1600);
                }
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    toast("暂时没有任务跳过此平台");
                    return false;
                }
            }
            toast("没有找到快手任务页面");
            return false;
        }

        function 点击进入2(){
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                var gkdysp = text("观看KS视频").findOnce();
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2500);
                }
                if(text("KS").boundsInside(1,1,wt*0.3,hg*0.2).exists()){
                    var 领取任务 = text("领取任务").findOnce();
                    if(领取任务){
                        sleep(1500);
                        // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000)
                    }
                }
                if(id("iv1").exists()){
                    return true;
                }
                if(textContains("爆音").boundsInside(1,1,wt*0.3,hg*0.2).exists()){
                    back();
                }
                if(index>3){
                    back();
                }
                sleep(3500);
            }
            toast("没有找到快手任务页面");
            throw "没有找到快手任务页面";
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("66联盟").findOne(3000);
            if(切回脚本){
                sleep(1000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }
        function 相册上传图片(){
            var sctp = text("上传截图").className("android.widget.Button").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                sleep(2500);
                var sctp3 = text("最近").findOne(5000);
                if (sctp3) {
                    sleep(1000);
                    for (let ca = 0; ca <3; ca++) {
                        var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.65,hg*0.65).findOne(5000);
                        if (sctp4) {
                            toast("进入点击");
                            sleep(1500);
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("提交任务").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }else{
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("提交任务").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }
                        var sctp5 = text("打开").findOne(5000)
                        if (sctp5){
                            sleep(1500);
                            // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            sleep(2000);
                            break;
                        }
                    }
                }
            }
        }
        function 上传图片() {
            var  快速截图 = text("点击快速上传截图").findOne(3500);
            if(快速截图){
                // press(快速截图.bounds().centerX()+随机数4,快速截图.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(快速截图.bounds().centerX()+随机数4,快速截图.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                var  重新上传 = text("重新上传").findOne(11000);
                if(!重新上传){
                    相册上传图片();
                }
            }else{
                相册上传图片();
            }
            控件点击(text("提交任务"));
            控件点击(text("提交截图"));
            if(控件点击(text("确定"))){
                控件点击(text("提交任务"));
                控件点击(text("提交截图"));
                if(控件点击(text("确定"))){
                    控件点击(text("提交任务"));
                    控件点击(text("提交截图"));
                }
            }
            sleep(2500);
        }

        function 个人中心(){
            if(控件点击(text("去验证"))){
                var 我知道了 = text("我知道了").findOne(5000);
                if (我知道了) {
                    sleep(1000);
                    // press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                }
                if(控件点击(textContains("打开“爆音”").className("android.widget.Button"))){
                    控件点击(text("允许"));
                    wait("com.ss.android.ugc.aweme.detail.ui.DetailActivity","com.ss.android.ugc.aweme.main.MainActivity",30);
                    控件点击(text("我知道了"));
                    我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(20000);
                    if (我) {
                        sleep(2000);
                        // press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2000);
                        控件点击(text("我知道了"));
                        控件点击(text("以后再说"));
                        控件点击(text("我").boundsInside(wt*0.8,hg*0.8,wt,hg));
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        sleep(6000);
                        var bjzl = text("编辑资料").findOne(20000);
                        if(bjzl){
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            切回APP();
                            上传图片();
                            return false;
                        }
                    }else{
                        切回APP();
                    }
                }
                return true;
            }else{
                return false;
            }
        }
        function 点击搜索(){
            for (let index = 0; index < 3; index++) {
                Tap(wt*0.95,hg*0.06);
                sleep(1000);
                var 取消 = text("取消").findOne(5000);
                if(取消){
                    sleep(1500);
                    return true;
                }
            }
            return false;
        }

        function 放弃任务(){
            back();
            sleep(1000);
            切回APP();
            back();
            sleep(1500);
            控件点击(text("放弃任务"));
            sleep(1500);
            控件点击(text("确定"));
        }
        function 完成任务(){
            // gestures([0, 500, [300, 800], [300, 1000]],
            //     [0, 500, [500, 800], [500, 1000]],
            //     [0, 500, [700, 800], [700, 1000]]
            // );
            var automator = new RootAutomator();
            automator.swipe(300,300,800,1000, 500,1);
            automator.swipe(500,500,800,1000, 500,2);
            automator.swipe(700,700,800,1000, 500,3);
            sleep(100);
            automator.exit();
            sleep(5000);
            back();
            sleep(1000);
            切回APP();
            上传图片();
        }
        function 抖音(){
            var 任务要求;
            for (let index = 0; index < 20; index++) {
                toast("开始任务");
                if(!点击进入()){
                    break;
                }
                sleep(2000);
                var yq = id("task_require_2").findOnce();
                if(yq){
                    var 任务要求 = yq.text();
                }else{
                    continue;
                }
                if(任务要求.indexOf("、留言")!=-1){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(text("样图一").exists()){
                    控件点击(text("打开“爆音”做任务"));
                    控件点击(textContains("打开“爆音”"));
                    控件点击(text("允许"));
                    if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1){
                        if(!控件点击(text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5))){
                            Tap(wt*0.91,hg*0.39);
                            sleep(3000);
                            控件点击(text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5));
                        }
                        sleep(2000);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(50);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                    }
                    if(任务要求.indexOf("关注")!=-1){
                        var 关注  = 查找控件(Array(text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5),text("取消关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5)),15);
                        if(关注){
                            var 关注列表  = text("关注").boundsInside(wt*0.15,hg*0.45,wt*0.5,hg*0.7).findOne(15000);
                            if(关注列表){
                                sleep(1500);
                                // press(关注列表.bounds().centerX()+随机数4, 关注列表.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(关注列表.bounds().centerX()+随机数4, 关注列表.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                sleep(2000);
                                var 关注2  = text("关注").boundsInside(wt*0.65,hg*0.1,wt,hg*0.7).findOne(15000);
                                if(关注2){
                                    sleep(1500);
                                    // press(关注2.bounds().centerX()+随机数4, 关注2.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(关注2.bounds().centerX()+随机数4, 关注2.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    sleep(2000);
                                    完成任务();
                                }else{
                                    放弃任务();
                                }
                            }else{
                                放弃任务();
                            }
                        }else{
                            放弃任务();
                        }

                    }
                    if(任务要求.indexOf("点赞")!=-1){
                        sleep(2000);
                        var 视频显示 = textContains("· ").findOne(20000);
                        if(视频显示){
                            sleep(1000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            sleep(1000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));
                            sleep(2000);
                            if(截图()){
                                back();
                                sleep(1500);
                                切回APP();
                                上传图片();
                            }else{
                                back();
                                sleep(1500);
                                切回APP();
                                back();
                                sleep(1500);
                                控件点击(text("放弃任务"));
                                sleep(1500);
                                控件点击(text("确定"));
                            }
                        }else{
                            back();
                            sleep(1500);
                            切回APP();
                            back();
                            sleep(1500);
                            控件点击(text("放弃任务"));
                            sleep(1500);
                            控件点击(text("确定"));
                        }
                    }
                    if(text("请上传截图，再提交任务").exists()){
                        控件点击(text("确定"));
                        上传图片();
                    }
                    控件点击(text("确定"));
                }else{
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                }
            }
        }

        function 快手(){
            点击进入2()
            for (let index = 0; index < 20; index++) {
                toast("开始任务");
                点击进入2();
                sleep(2000);
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    break;
                }
                var 任务要求 = id("task_require_2").findOnce().text();
                if(任务要求.indexOf("留言")!=-1||任务要求.indexOf("评论")!=-1||text("样图二").exists()){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(控件点击(text("打开“KS”做任务"))){
                    控件点击(text("允许"));
                    if(任务要求.indexOf("关注")!=-1){
                        var 关注 = desc("关注, 按钮").id("profile_follow_layout").findOne(10000);
                        if(关注==null){
                            关注 = text("关注").id("text_top").findOnce();
                        }
                        if(关注==null){
                            关注 = id("left_item_group").findOnce();
                        }
                        if(关注){
                            sleep(2000);
                            // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            sleep(3500);
                        }else{
                            if(textContains("作品").exists()&&!text("i 发私信").exists()){
                                Tap(wt*0.66,hg*0.32);
                                sleep(3500);
                            }
                        }
                        if(截图()){
                            切回APP();
                            上传图片();
                        }else{
                            切回APP();
                            back();
                            sleep(1500);
                            控件点击(text("放弃任务"));
                            sleep(1500);
                            控件点击(text("确定"));
                        }
                    }
                    if(任务要求.indexOf("点赞")!=-1){
                        id("avatar").findOne(5500);
                        sleep(2000);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(100);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(500);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.35,hg*0.36));
                        sleep(100);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.35,hg*0.36));
                        sleep(500);
                        Tap(random(wt*0.41,wt*0.42),random(hg*0.32,hg*0.33));
                        sleep(100);
                        Tap(random(wt*0.41,wt*0.42),random(hg*0.32,hg*0.33));
                        sleep(3500);
                        if(截图()){
                            切回APP();
                            上传图片();
                        }else{
                            切回APP();
                            back();
                            sleep(1500);
                            控件点击(text("放弃任务"));
                            sleep(1500);
                            控件点击(text("确定"));
                        }
                    }
                    if(text("请上传截图，再提交任务").exists()){
                        控件点击(text("确定"));
                        上传图片();
                    }
                    控件点击(text("确定"));
                    sleep(2000);
                }
            }
        }
        function 六六阅读(){
            点击启动APP("66联盟");
            var 主页 =  sypd();
            if (主页 !== null){
                if(storage.get("llyd1")>storagesd.get("llydrw",0)){
                    抖音();
                    文章视频记录判断("llydrw","llyd1");
                }
                if(storage.get("llyd2")>storagesd.get("llydrw2",0)){
                    快手();
                    文章视频记录判断("llydrw2","llyd2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        六六阅读();
    }

    var sl = function(){
        function 自动更新(){
            if(控件点击(text("更新"))){
                text("权限详情").findOne(35000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                    return true;
                }
            }
        }
        function sypd(){
            var HM;
            wait("com.helper.readhelper.tx_help.tx_MainActivity","com.helper.readhelper.activity.SplashActivity",30);
            sleep(4000);
            控件点击(id("colsedialog"));
            自动更新();
            HM = id("recyclerview").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                控件点击(id("colsedialog"));
                HM = id("recyclerview").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            throw "没有找到首页";
        }
        function 清理(){
            sleep(1500);
            recents();
            sleep(2500);
            var ql = id("clearAnimView").findOne(4000);
            if(ql!==null){
                sleep(1500);
                pclick(ql.bounds().centerX(),ql.bounds().centerY());
            }
            sleep(2000);
        }

        function 检测账号(type){
            var w,s,tab,profile;
            for (let index = 0; index < 3; index++) {
                if(控件点击(text("去检测"))){
                    sleep(3500);
                    if(type){
                        for (let ar = 0; ar < 5; ar++) {
                            w = text("我").findOnce();
                            if (w) {
                                sleep(2000);
                                // 
                                var automator = new RootAutomator();
                                automator.press(w.bounds().centerX()+随机数4, w.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                break;
                            }else{
                                back();
                                sleep(5000);
                            }
                            Tap(wt*0.89,hg*0.95);
                        }
                        sleep(15000);
                        if(text("我").exists()){
                            if(storage.get("自动上传作品",false)){
                                if(storage.get("spzdsczp",0)==0){
                                    抖音上传作品2();
                                }else{
                                    抖音上传作品();
                                }
                            }else{
                                toast("你没有选择自动上传作品");
                            }
                            切回APP();
                            清理();
                        }else{
                            break;
                        }
                    }else{
                        sleep(3000);
                        for (let ar = 0; ar < 4; ar++) {
                            s = id("left_btn").findOne(20000);
                            if(s){
                                sleep(3500);
                                // 
                                var automator = new RootAutomator();
                                automator.press(s.bounds().centerX()+随机数4, s.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                            }else{
                                Tap(wt*0.07,hg*0.09);
                            }
                            sleep(3500);
                            if(text("青少年模式").exists()){
                                break;
                            }
                            back();
                            sleep(3500);
                        }
                        tab = id("tab_avatar").findOne(5000);
                        if (tab) {
                            sleep(3500);
                            // 
                            var automator = new RootAutomator();
                            automator.press(tab.bounds().centerX()+随机数4, tab.bounds().bottom-10, 120);
                            sleep(100);
                            automator.exit();
                            sleep(4000);
                            if(id("tab_avatar").exists()){
                                // 
                                var automator = new RootAutomator();
                                automator.press(tab.bounds().centerX()+随机数4, tab.bounds().top-10, 120);
                                sleep(100);
                                automator.exit();
                                sleep(4000);
                            }
                        }else{
                            Tap(wt*0.37,hg*0.16);
                            sleep(4000);
                        }
                        profile = id("profile_settings_button").findOne(5000);
                        if (profile) {
                            sleep(2500);
                            // 
                            var automator = new RootAutomator();
                            automator.press(profile.bounds().centerX()+随机数4, profile.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            sleep(2000);
                        }else{
                            Tap(wt*0.55,hg*0.31);
                        }
                        sleep(15000);
                        if(text("推荐").exists()||textContains("编辑资料").exists()){
                            if(storage.get("自动上传作品",false)){
                                if(storage.get("spzdsczp",0)==0){
                                    快手上传作品2();
                                }else{
                                    快手上传作品();
                                }
                            }else{
                                toast("你没有选择自动上传作品");
                            }
                            切回APP();
                            清理();
                        }else{
                            break;
                        }
                    }
                }else{
                    break;
                }
            }
        }
        function 开启权限() {
            var title,checkbox;
            for (let index0 = 0; index0 < 3; index0++) {
                if(控件点击(text("去开启"))){
                    sleep(1000);
                    if(控件点击(text("立即开始"))){
                        break;
                    }
                    if(text("无障碍").exists()||text("服务").exists()){
                        sleep(2000);
                        随机滑动(Array(0.47,0.53),Array(0.31,0.32),Array(0.47,0.53),Array(0.1,0.2),1000);
                        sleep(3000);
                        控件点击(textContains("更多已下载的服务"));
                        for (let index = 0; index < 5; index++){
                            title = id("title").textContains("刷乐").findOne(6000);
                            if (title){
                                sleep(2000);
                                // 
                                var automator = new RootAutomator();
                                automator.press(title.bounds().centerX()+随机数4, title.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                sleep(2000);
                            }
                            checkbox = id("checkbox").findOne(6000);
                            if (checkbox){
                                sleep(2000);
                                // 
                                var automator = new RootAutomator();
                                automator.press(checkbox.bounds().centerX()+随机数4, checkbox.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                sleep(2000);
                            }
                            if(控件点击(text("确定"))){
                                break;
                            }
                            随机滑动(Array(0.47,0.53),Array(0.65,0.66),Array(0.47,0.53),Array(0.1,0.2),1000);
                            sleep(2000);
                        }
                        back();
                        sleep(1000);
                        back();
                        sleep(2500);
                        back();
                        sleep(2500);
                    }
                    sleep(2000);
                }else{
                    break;
                }
            }
        }

        function 点击提交(){
            var 提交 = searchTwice(text("提交\n任务"),text("再交\n一次")).findOnce();
            if (提交) {
                // 
                var automator = new RootAutomator();
                automator.press(提交.bounds().centerX()+随机数20, 提交.bounds().centerY()+随机数20, 120);
                sleep(100);
                automator.exit();
                sleep(2000);
            }
        }

        function 提交返回(bs) {
            sleep(random(6500,7000));
            点击提交();
            for (let tj = 0; tj < 2; tj++){
                sleep(10000);
                if (currentActivity() != "com.helper.readhelper.tx_help.tx_MainActivity"){
                    控件点击(text("关注").boundsInside(wt*0.32,hg*0.2,wt*0.85,hg*0.3));
                    点击提交();
                }else{
                    return true;
                }
                if(bs){
                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                    sleep(50);
                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                }
            }
            切回APP();
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("刷乐").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // 
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }
        function 进入快手(){
            for (let jrcs = 0; jrcs < 5; jrcs++) {
                if(控件点击(text("K手"))){
                    sleep(2000);
                    break;
                }else{
                    back();
                    sleep(2500);
                    控件点击(text("首页"));
                    sleep(2500);
                }
            }
        }
        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.8)).findOnce();
                if(开始任务){
                    sleep(1500);
                    // 
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    sleep(2000);
                    return true;
                }else{
                    sleep(3500);
                }
            }
            return false;
        }
        function 刷乐(){
            点击启动APP("刷乐");
            var slkscs = Math.ceil(storage.get("sl1")/4);
            var sldycs = Math.ceil(storage.get("sl2")/4);
            var csxz = 0;
            var 领取任务2;
            var 开始任务;
            var 关注;
            sypd();
            if(storage.get("sl2")> storagesd.get("sldy",0)){
                for (let index2 = 0; index2 < sldycs;index2++){
                    if(index2 > sldycs){
                        break;
                    }
                    toast("开始任务");
                    sleep(2500);
                    if(id("huanhaobutton").exists()){
                        back();
                        sleep(2500);
                    }
                    领取任务2 = searchTwice(text("D音点赞").boundsInside(0,0,wt,hg*0.87),text("D音关注").boundsInside(0,0,wt,hg*0.87)).findOnce();
                    if(领取任务2){
                        sleep(1000);
                        // 
                        var automator = new RootAutomator();
                        automator.press(领取任务2.bounds().centerX()+随机数4, 领取任务2.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        sleep(2500);
                        if(id("alertTitle").exists()){
                            index2= sldycs;
                            控件点击(text("确定"));
                            break;
                        }
                        开始任务 = text("开始任务").findOne(7000);
                        if(开始任务){
                            sleep(1000);
                            // 
                            var automator = new RootAutomator();
                            automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().bottom-3,120);
                            sleep(100);
                            automator.exit();
                            sleep(3500);
                            if(控件点击(id("imagehome"))){
                                sleep(2500);
                                continue;
                            }
                            开启权限();
                            检测账号(true);
                            if(进入任务()){
                                csxz = 0;
                                if(领取任务2.text()==="D音关注"){
                                    关注 = text("关注").boundsInside(wt*0.32,hg*0.2,wt*0.85,hg*0.3).findOne(8000);
                                    if(关注){
                                        sleep(2500);
                                        // 
                                        var automator = new RootAutomator();
                                        automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                    }else{
                                        Tap(wt*0.56,hg*0.24);
                                    }
                                    提交返回(false);
                                }
                                if(领取任务2.text()==="D音点赞"){
                                    textContains("· ").findOne(8000);
                                    sleep(2000);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    sleep(50);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    提交返回(true);
                                }
                                if (!文章视频记录判断("sldy","sl2")){
                                    index2= sldycs;
                                }
                            }
                        }
                    }else{
                        if(currentActivity()!="com.helper.readhelper.tx_help.tx_MainActivity"){
                            切回APP();
                            back();
                            sleep(2000);
                        }
                        控件点击(textContains("colse"));
                        csxz = csxz+1;
                        if(csxz>10){
                            toast("多次任务执行失败，退出！");
                            csxz=0;
                            break;
                        }
                    }
                }
            }
            sypd();
            进入快手();
            for (let index = 0; index < slkscs;index++){
                var 主页 =  sypd();
                if (主页 !== null){
                    if(index > slkscs){
                        break;
                    }
                    var 领取任务 = searchTwice(text("K手点赞").boundsInside(0,0,wt,hg*0.87),text("K手关注").boundsInside(0,0,wt,hg*0.87)).findOnce();
                    if(领取任务){
                        sleep(1000);
                        // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        if(id("alertTitle").exists()){
                            index = slkscs;
                            控件点击(text("确定"));
                            break;
                        }
                        var 开始任务 = text("开始任务").findOne(7000);
                        if(开始任务){
                            sleep(1000);
                            // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().bottom-3, 120);
                            var automator = new RootAutomator();
                            automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().bottom-3, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(3500);
                            if(控件点击(id("imagehome"))){
                                sleep(2500);
                                continue;
                            }
                            开启权限();
                            检测账号(false);
                            var 开始任务 = text("去看看").findOne(35000);
                            if(开始任务){
                                csxz = 0;
                                sleep(1000);
                                // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                                if(领取任务.text()==="K手关注"){
                                    var 关注 = desc("关注, 按钮").id("profile_follow_layout").findOne(8000);
                                    if(关注==null){
                                        关注 = text("关注").id("text_top").findOnce();
                                    }
                                    if(关注==null){
                                        关注 = id("slide_play_right_follow_button").findOnce();
                                    }
                                    if(关注){
                                        sleep(2000);
                                        // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(3500);
                                    }else{
                                        if(textContains("作品").exists()&&textContains("动态").exists()&&!text("i 发私信").exists()){
                                            Tap(wt*0.66,hg*0.32);
                                            sleep(3500);
                                        }
                                    }
                                    提交返回(false);
                                }
                                if(领取任务.text()==="K手点赞"){
                                    id("avatar").findOne(5500);
                                    sleep(2000);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    sleep(100);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    sleep(3500);
                                    提交返回(true);
                                }
                                if (!文章视频记录判断("slks","sl1")){
                                    index = slkscs;
                                }
                            }
                        }
                    }else{
                        if(currentActivity()!="com.helper.readhelper.tx_help.tx_MainActivity"){
                            切回APP();
                            back();
                            sleep(2000);
                        }
                        控件点击(textContains("colse"));
                        csxz = csxz+1;
                        if(csxz>10){
                            toast("多次任务执行失败，退出！");
                            csxz=0;
                            break;
                        }
                    }
                }else{
                    toast("没有找到首页");
                    return false;
                }
            }
        }
        刷乐();
    }

    var wkzz = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.lt.app.MainActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("任务大厅").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("任务大厅").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }


        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("微客众智").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp =textContains("上传截图").className("android.widget.Button").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(2500);
                控件点击(text("允许"));
                var sctp3 = text("选择文件").findOne(10000);
                if (sctp3) {
                    sleep(1500);
                    // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    var sctp4 =text("选择文件").boundsInside(1,hg*0.65,wt,hg).findOne(10000);
                    if (sctp4) {
                        sleep(1500);
                        // press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        var sctp5 =id("check_view").findOne(10000);
                        if (sctp5){
                            sleep(1500);
                            // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            var sctp6 =text("确定").findOne(10000);
                            if (sctp6){
                                sleep(1500);
                                // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                                var sctp8 =textContains("确认无误提交").findOne(10000);
                                if (sctp8){
                                    sleep(1500);
                                    // press(sctp8.bounds().centerX()+随机数4,sctp8.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(sctp8.bounds().centerX()+随机数4,sctp8.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(2000);
                                }
                            }
                        }
                    }
                }
            }
        }

        function 抖音关注() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(7000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("爆音任务(日赚十元)").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            if(!控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7))){
                                back();
                                sleep(2500);
                            }
                        }
                        var gz = text("爆音 关注任务").findOne(5000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取爆音关注任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(45000);
                                        if(gzlrw){
                                            sleep(2000);
                                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                            var automator = new RootAutomator();
                                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                            sleep(100);
                                            automator.exit();
                                            
                                            sleep(2500);
                                            截图();
                                            切回APP();
                                            上传图片();
                                        }else if(text("取消关注").exists()){
                                            截图();
                                            切回APP();
                                            上传图片();
                                        }else{
                                            切回APP();
                                            控件点击(textContains("放弃任务"));
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 抖音点赞() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(7000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("爆音任务(日赚十元)").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                            sleep(2500);
                        }
                        var gz = text("爆音 点赞任务").findOne(10000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取爆音点赞任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(3000);
                                        控件点击(text("允许"));
                                        textContains("· ").findOne(20000);
                                        sleep(1000);
                                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                        sleep(50);
                                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                        sleep(2000);
                                        ScreenShot("/sdcard/DCIM/Screenshots");
                                        切回APP();
                                        上传图片();
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 快手关注() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(7000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("K手任务").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                            sleep(2500);
                        }
                        var gz = text("K手 关注任务").findOne(5000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw2 = textContains("领取K手关注任务").findOne(10000);
                                    if(gzlrw2){
                                        sleep(2000);
                                        // press(gzlrw2.bounds().centerX()+随机数4, gzlrw2.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw2.bounds().centerX()+随机数4, gzlrw2.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw3 =  textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw3){
                                        sleep(2000);
                                        // press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var gzlrw4= 查找控件(Array(id("text_top").text("关注").boundsInside(wt*0.5,hg*0.01,wt,hg*0.5), id("profile_follow_layout")),10);
                                        if(gzlrw4==null){
                                            if(控件点击(id("avatar"))){
                                                text("i 发私信").findOne(10000);
                                                sleep(2500);
                                            }
                                            gzlrw4= 查找控件(Array(id("text_top").text("关注").boundsInside(wt*0.5,hg*0.01,wt,hg*0.5), id("profile_follow_layout")),10);
                                        }
                                        if(gzlrw4){
                                            sleep(3000);
                                            // press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                                            var automator = new RootAutomator();
                                            automator.press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                                            sleep(100);
                                            automator.exit();
                                            
                                            sleep(3000);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            sleep(2500);
                                            控件点击(id("close_btn"));
                                            back();
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            上传图片();
                                        }else if(text("取消关注").exists()){
                                            sleep(2500);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            sleep(2500);
                                            控件点击(id("close_btn"));
                                            back();
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            上传图片();
                                        }else if(textContains("作品").exists()&&textContains("动态").exists()&&!text("i 发私信").exists()){
                                            Tap(wt*0.731,hg*0.32);
                                            sleep(3000);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            sleep(2500);
                                            控件点击(id("close_btn"));
                                            back();
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            上传图片();
                                        }else{
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            sleep(2500);
                                            控件点击(textContains("放弃任务"));
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 快手点赞() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(7000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("K手任务").findOnce();
                if(dy){
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        控件点击(text("确定"));
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                            sleep(2500);
                        }
                        var gz = text("K手 点赞任务").findOne(5000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw1 = textContains("领取K手点赞任务").findOne(10000);
                                    if(gzlrw1){
                                        sleep(2000);
                                        // press(gzlrw1.bounds().centerX()+随机数4, gzlrw1.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw1.bounds().centerX()+随机数4, gzlrw1.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw2 =  textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw2){
                                        sleep(2000);
                                        // press(gzlrw2.bounds().centerX()+随机数4, gzlrw2.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw2.bounds().centerX()+随机数4, gzlrw2.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var gzlrw3 = id("like_layout").boundsInside(0,0,wt*0.3,hg*0.3).findOne(45000);
                                        if(gzlrw3){
                                            sleep(3000);
                                            // press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                                            var automator = new RootAutomator();
                                            automator.press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                                            sleep(100);
                                            automator.exit();
                                            
                                            sleep(2500);
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                                            sleep(100);
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                                            sleep(2500);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            控件点击(id("close_btn"));
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            上传图片();
                                        }else if(id("avatar").exists()){
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                                            sleep(100);
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                                            sleep(2500);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            控件点击(id("close_btn"));
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            上传图片();
                                        }else{
                                            控件点击(id("close_btn"));
                                            sleep(2500);
                                            back();
                                            sleep(2500);
                                            切回APP();
                                            控件点击(textContains("放弃任务"));
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 微客众智(){
            点击启动APP("微客众智");
            var 主页 =  sypd();
            if (主页 !== null){
                if(storage.get("wkzz1")>storagesd.get("wkzzrw",0)){
                    toast("进入抖音");
                    抖音关注();
                    抖音点赞();
                    文章视频记录判断("wkzzrw","wkzz1");
                }
                if(storage.get("wkzz2")>storagesd.get("wkzzrw2",0)){
                    toast("进入快手");
                    快手关注();
                    快手点赞();
                    文章视频记录判断("wkzzrw2","wkzz2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        微客众智();
    }

    var lss = function(){
        function sypd(){
            var HM;
            wait("cn.weli.svideo.module.main.ui.MainActivity",null,30);
            sleep(4000);
            HM = id("refresh_recycler_view").findOnce();
            控件点击(text("知道了"));
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                if(j==5){
                    控件点击(text("首页"));
                }
                back();
                sleep(3500);
                HM = id("refresh_recycler_view").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }


        function 视频播放(){
            var 随机播放时间 = random(5,6);
            控件点击(text("知道了"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                控件点击(id("playImg"));
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("lsstx",1)!==dayDiff)){
                storagesd2.put("lsstx",dayDiff);
                sleep(1500);
                if(qd(Array(Array(className("android.widget.RelativeLayout").boundsInside(wt*0.3,hg*0.8,wt*0.7,hg),4000)))){
                    sleep(6000);
                    if(qd(Array(Array(text("提现").className("android.view.View").boundsInside(wt*0.7,1,wt,hg*0.3),4000)))){
                        sleep(6000);
                        var je = textContains("元").boundsInside(1,hg*0.1,wt,hg*0.45).findOnce().text();
                        if(je){
                            var sz = Math.floor(je.split("元"));
                            if(sz>5){
                                控件点击(text("5"));
                            }else{
                                控件点击(text("0.3"));
                            }
                            qd(Array(Array(text("立即提现"),4000),Array(text("提取"),8000)));
                        }
                        back();
                        sleep(3800);
                    }
                    back();
                    sleep(3800);
                }
                控件点击(className("android.widget.RelativeLayout").boundsInside(0,hg*0.85,wt*0.3,hg));
            }
        }
        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.TextView").boundsInside(wt*0.6,0,wt,hg*0.2))||控件点击(text(""))){
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 鲤刷刷(){
            点击启动APP("鲤刷刷");
            var lsssx = Math.ceil(storage.get("lss2")/4);
            var 主页 =  sypd();
            var mzdwz = 0;
            if (主页 !== null){
                for(k = 0;k<lsssx;k++){
                    if(k===4&&storagesd.get("lssqd",-1)==-1){
                        if(qd(Array(Array(text("赚钱"),4000),Array(text("去签到"),6000)))){
                            storagesd.put("lssqd",1);
                            sleep(2000);
                            if(控件点击(id("know_action_txt"))){
                                gkgg();
                            }
                        }
                        back();
                        sleep(2500);
                        控件点击(text("首页"));
                    }
                    if(id("video_task_layout").exists()){
                        mzdwz = 0;
                        视频播放();
                        if (getRandom(0.01)){
                            pclick(random(wt/2-10,wt/2+10),random(hg/2-10,hg/2+10));
                            sleep(50);
                            pclick(random(wt/2-10,wt/2+10),random(hg/2-10,hg/2+10));
                            sleep(2000);
                        }
                        if(!文章视频记录判断("lsssp","lss2")){
                            return false;
                        }
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                    }else{
                        if(mzdwz>4){
                            mzdwz = 0;
                            自动提现();
                            return false;
                        }else{
                            mzdwz++;
                        }
                        控件点击(className("android.widget.RelativeLayout").boundsInside(0,hg*0.85,wt*0.3,hg));
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.002,0.003),700);
                        sleep(1500);
                    }
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        鲤刷刷();
    }



    var mmsk = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.miaozan.MainActivity",null,30);
            sleep(4000);
            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.95));
            if(控件点击(text("观看广告"))){
                gkgg();
                sleep(3500);
                back();
                sleep(2000);
            }
            自动更新();
            HM = text("推荐").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.95));
                if(控件点击(text("观看广告"))){
                    gkgg();
                    sleep(3500);
                    back();
                    sleep(2000);
                }
                sleep(3500);
                自动更新();
                HM = text("推荐").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("喵喵试看").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp =text("有头像").findOne(10000);
            if (sctp) {
                sleep(1500);
                Tap(wt*0.51,hg*0.93);
                sleep(3500);
                if(控件点击(text("取消"))){
                    Tap(wt*0.51,hg*0.93);
                    sleep(3500);
                }
                控件点击(text("允许"));
                var sctp3 =className("android.view.ViewGroup").boundsInside(wt*0.5,hg*0.28,wt*0.95,hg*0.75).findOne(10000);
                if (sctp3) {
                    sleep(1500);
                    // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3500);
                    for (let ca = 0; ca <3; ca++) {
                        var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.5,hg*0.51).findOne(10000);
                        if (sctp4) {
                            sleep(1500);
                            // longClick(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                            Tap(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                        }else{
                            // longClick(wt*0.26,hg*0.30);
                            Tap(wt*0.26,hg*0.30);
                        }
                        var sctp5 =text("打开").findOne(5000);
                        if (sctp5){
                            sleep(3000);
                            // press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(3500);
                            break;
                        }
                    }
                    text("上传成功").findOne(10000);
                    sleep(3000);
                    var sctp6 =text("提交任务").boundsInside(1,hg*0.7,wt,hg).findOne(10000);
                    if (sctp6){
                        sleep(3500);
                        // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(6000);
                    }
                }
            }
        }
        function 喵喵滑块验证() {
            if(text("向右拖动滑块填充拼图").exists() && username!=="" && password!==""){
                try {
                    toast("进入滑块验证");
                    sleep(3500);
                    text("向右拖动滑块填充拼图").findOne(10000);
                    for (let index = 0; index < 5; index++) {
                        var hkcc=className("android.view.View").boundsInside(1,hg*0.1,wt-1,hg*0.75).findOnce();
                        if(hkcc){
                            var src=images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var clip=images.clip(src,0 ,hkcc.bounds().top ,device.width ,hkcc.bounds().height());
                            images.save(clip,"/sdcard/截图.png" );
                            img =images.read("/sdcard/截图.png");
                            var dt1 = getCode(username, password, img);
                            var dt = dt1.data;
                            if(dt&& dt.res.indexOf(",") != -1){
                                var x2=parseInt(dt.res.split(",")[0]);
                                var huadong=className("android.view.View").text("向右拖动滑块填充拼图").findOnce();
                                var qszb = className("android.view.View").boundsInside(wt*0.05,hg*0.43,wt*0.2,hg*0.53).findOnce();
                                if(huadong&&qszb){
                                    sml_move(qszb.bounds().left, huadong.bounds().centerY(), x2+wt*0.023, huadong.bounds().centerY(), random(1000,1100));
                                    sleep(2000);
                                    if(!text("向右拖动滑块填充拼图").exists()){
                                        toast("通过滑块");
                                        return true;
                                    }else{
                                        uploadError(username, password,dt1.data.cid);
                                        控件点击(className("android.view.View").boundsInside(wt*0.5,hg*0.2,wt,hg*0.6));
                                        sleep(3000);
                                        for (let index = 0; index < 10; index++) {
                                            if(text("加载中...").exists()){
                                                sleep(1000);
                                            }else{
                                                break;
                                            }
                                            if(index == 9){
                                                toast("图片刷新失败");
                                                throw "图片刷新失败"
                                            }
                                        }
                                    }
                                }
                            }else{
                                toast("滑块验证失败，可能余额或网络问题");
                                break;
                            }
                        }else{
                            sleep(3000);
                        }
                    }
                }catch(error){
                    log(error);
                    if(hkyz>2){
                        hkyz = 0;
                        throw(error+"，过滑次数太多");
                    }else{
                        hkyz = hkyz + 1;
                    }
                }
                throw("过滑块验证失败");
            }
        }
        function 抖音页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(text("喵喵试看公告").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.94));
                }
                if(控件点击(text("观看广告"))){
                    gkgg();
                    sleep(3500);
                    back();
                    sleep(2000);
                }
                if(text("爆音专区").exists()){
                    return true;
                }
                if(text("推荐").exists()&&text("我的").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(0,hg*0.295,wt*0.63,hg*0.53));
                    sleep(3000);
                }
                if(text("爆音专区").exists()){
                    return true;
                }
                back();
                sleep(3500);
            }
            放弃任务();
            throw "抖音页没找到";
        }
        function 快手页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(text("喵喵试看公告").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.94));
                }
                if(控件点击(text("观看广告"))){
                    gkgg();
                    sleep(3500);
                    back();
                    sleep(2000);
                }
                if(text("K手专区").exists()){
                    return true;
                }
                if(text("推荐").exists()&&text("我的").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.5,hg*0.295,wt,hg*0.53));
                    sleep(3000);
                }
                if(text("K手专区").exists()){
                    return true;
                }
                back();
                sleep(3500);
            }
            放弃任务();
            throw "K手页没找到";
        }
        function 抖音() {
            for (let dxh = 0; dxh < 5; dxh++) {
                抖音页();
                sleep(3500);
                var b = searchMultiple(Array(text("爆音关注").boundsInside(wt*0.1,hg*0.2,wt*0.5,hg*0.9),text("爆音双击").boundsInside(wt*0.1,hg*0.2,wt*0.5,hg*0.9)));
                for( q = 0;q < b.length; q++){
                    sleep(2000);
                    pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                    sleep(2000);
                    喵喵滑块验证();
                    var ytx = text("有头像").findOne(45000);
                    if(ytx){
                        sleep(3000);
                        Tap(wt*0.51,hg*0.93);
                        sleep(5000);
                        if(控件点击(text("去完成"))){
                            sleep(3500);
                            控件点击(text("爆音关注任务"));
                            控件点击(text("爆音双击任务"));
                        }
                        if(text("任务已被抢光了").exists()){
                            控件点击(text("取消"));
                            back();
                            sleep(2000);
                            continue;
                        }
                        if(控件点击(className("android.widget.TextView").text("取消"))){
                            back();
                            sleep(3500);
                            break;
                        }
                        var djfz = text("点击复制").findOne(30000);
                        喵喵滑块验证();
                        if(djfz){
                            sleep(3000);
                            // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            if(b[q].text()=="爆音关注"){
                                textContains("· ").findOne(20000);
                                Tap(wt*0.925,hg*0.338);
                                var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(20000);
                                if(gzlrw){
                                    sleep(3000);
                                    // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(2500);
                                    ScreenShot("/sdcard/DCIM/Screenshots");
                                    切回APP();
                                    上传图片();
                                }else if(text("取消关注").exists()){
                                    ScreenShot("/sdcard/DCIM/Screenshots");
                                    切回APP();
                                    上传图片();
                                }else{
                                    Tap(wt*0.57,hg*0.24)
                                    sleep(2500);
                                    ScreenShot("/sdcard/DCIM/Screenshots");
                                    切回APP();
                                    上传图片();
                                }
                            }
                            if(b[q].text()=="爆音双击"){
                                控件点击(text("允许"));
                                textContains("· ").findOne(40000);
                                sleep(2000);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(50);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(2000);
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                切回APP();
                                上传图片();
                            }
                            sleep(2000);
                            back();
                            sleep(3500);
                            for (let index = 0; index < 5; index++) {
                                if(text("任务专区").boundsInside(wt*0.18,0,wt*0.83,hg*0.3)){
                                    break;
                                }else{
                                    back();
                                    sleep(3500);
                                }
                            }
                        }else{
                            back();
                            sleep(3000);
                        }
                    }else{
                        喵喵滑块验证();
                        back();
                        sleep(3000);
                    }
                }
                sleep(2000);
                随机滑动(Array(0.47,0.53),Array(0.19,0.20),Array(0.47,0.53),Array(0.92,0.93),1000);
                sleep(3500);
            }
        }

        function 快手() {
            for (let dxh = 0; dxh < 5; dxh++) {
                快手页();
                sleep(3000);
                var b = text("K手关注").boundsInside(wt*0.1,hg*0.2,wt*0.5,hg*0.9).find();
                for( q = 0;q < b.length; q++){
                    sleep(2000);
                    pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                    sleep(2000);
                    喵喵滑块验证();
                    var ytx = text("有头像").findOne(45000);
                    if(ytx){
                        sleep(3000);
                        Tap(wt*0.51,hg*0.93);
                        sleep(5000);
                        if(控件点击(text("去完成"))){
                            sleep(3500);
                            控件点击(textContains("K手关注任务"));
                        }
                        if(text("任务已被抢光了").exists()){
                            控件点击(text("取消"));
                            back();
                            sleep(2000);
                            continue;
                        }
                        var djfz = text("点击复制").findOne(30000);
                        喵喵滑块验证();
                        if(djfz){
                            sleep(3000);
                            // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(3000);
                            控件点击(text("允许"));
                            var gzlrw4= id("text_top").text("关注").boundsInside(wt*0.5,hg*0.01,wt,hg*0.5).findOne(40000);
                            if(gzlrw4==null){
                                gzlrw4 = id("profile_follow_layout").findOnce();
                            }
                            if(gzlrw4){
                                sleep(3000);
                                // press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(3000);
                                if(控件点击(id("avatar"))){
                                    text("i 发私信").findOne(10000);
                                    sleep(2500);
                                }
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                控件点击(id("close_btn"));
                                back();
                                sleep(2500);
                                切回APP();
                                上传图片();
                            }else if(text("取消关注").exists()){
                                控件点击(id("close_btn"));
                                sleep(2500);
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                back();
                                sleep(2500);
                                切回APP();
                                上传图片();
                            }else if(textContains("作品").exists()&&textContains("动态").exists()&&!text("i 发私信").exists()){
                                Tap(wt*0.731,hg*0.32);
                                sleep(3000);
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                控件点击(id("close_btn"));
                                back();
                                sleep(2500);
                                切回APP();
                                上传图片();
                            }else{
                                控件点击(id("close_btn"));
                                切回APP();
                                text("任务详情").findOne(10000);
                                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.85,0,wt,hg*0.2));
                                控件点击(text("放弃任务"));
                            }
                            sleep(2000);
                            back();
                            sleep(3500);
                            for (let index = 0; index < 5; index++) {
                                if(text("任务专区").boundsInside(wt*0.18,0,wt*0.83,hg*0.3)){
                                    break;
                                }else{
                                    back();
                                    sleep(3500);
                                }
                            }
                        }else{
                            back();
                            sleep(3000);
                        }
                    }else{
                        喵喵滑块验证();
                        back();
                        sleep(3000);
                    }
                }
                sleep(2000);
                随机滑动(Array(0.47,0.53),Array(0.19,0.20),Array(0.47,0.53),Array(0.92,0.93),1000);
                sleep(3500);
            }
        }
        function 放弃任务(){
            back();
            sleep(3500);
            back();
            sleep(3500);
            if(qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(textContains("进行中"),7000)))){
                for (let index = 0; index < 5; index++) {
                    sleep(2500);
                    if(控件点击(text("放弃任务"))){
                        控件点击(text("放弃"));
                    }else{
                        break;
                    }
                }
            }
        }
        function 点击签到(){
            back();
            sleep(3500);
            back();
            sleep(3500);
            qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(className("android.view.ViewGroup").boundsInside(wt*0.5,0,wt,hg*0.3),7000),Array(text("点击签到"),4000)));
        }

        function 喵喵试看(){
            点击启动APP("喵喵试看");
            var 主页 =  sypd();
            sleep(3500);
            if (主页 !== null){
                if(storage.get("mmsk1")>storagesd.get("mmskrw",0)){
                    抖音();
                    文章视频记录判断("mmskrw","mmsk1");
                }
                if(storage.get("mmsk2")>storagesd.get("mmskrw2",0)){
                    快手();
                    文章视频记录判断("mmskrw2","mmsk2");
                }
                放弃任务();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        喵喵试看();
        点击签到();
    }

    var jjyd = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }
        function 马上关注(){
            if(控件点击(text("马上去关注"))){
                sleep(5000);
                back();
                sleep(2000);
            }
        }
        function sypd(){
            var HM;
            wait("com.shoubang.vxread.MainActivity",null,30);
            sleep(4000);
            自动更新();
            马上关注();
            HM = id("item1").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                马上关注();
                控件点击(className("android.widget.Image").boundsInside(wt*0.73,hg*0.3,wt*0.9,hg*0.41));
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = id("item1").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 重新授权() {
            if(控件点击(text("重新授权验证"))){
                var gkdysp = text("点我授权绑定").findOne(15000);
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    var gkdysp = text("授权并登陆").findOne(15000);
                    if (gkdysp) {
                        sleep(1500);
                        // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                    }
                }
            }
            控件点击(text("授权并登陆"));
        }

        function 点击进入(){
            for (let index = 0; index < 6; index++) {
                sleep(1500);
                if(text("我的积分").exists()){
                    随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                    sleep(1000);
                }
                var gkdysp = text("观看DY视频").findOnce();
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3500);
                }
                马上关注();
                重新授权();
                var 领取任务 = text("领取任务").findOnce();
                if(领取任务){
                    sleep(1500);
                    // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                   
                    sleep(2000);
                }
                var 今日签到 = text("今日签到").findOnce();
                if(今日签到){
                    sleep(1500);
                    // press(今日签到.bounds().centerX()+随机数4, 今日签到.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(今日签到.bounds().centerX()+随机数4, 今日签到.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                    if(控件点击(text("打开'DY'"))){
                        切回APP("抖音短视频");
                    }
                    控件点击(text("以后再说"));
                    控件点击(text("我知道了"));
                    var 我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(10000);
                    if(我!==null){
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(10000);
                    }
                    if (我) {
                        sleep(1000);
                        // press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        控件点击(text("我").boundsInside(wt*0.8,hg*0.8,wt,hg));
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));text
                        text("编辑资料").findOne(20000);
                        ScreenShot("/sdcard/DCIM/Screenshots");
                        控件点击(text("首页"));
                        切回APP("99阅读");
                        上传图片();
                        var 提交截图 = text("提交截图").boundsInside(0,hg*0.6,wt,hg).findOne(7000);
                        if(提交截图){
                            // press(提交截图.bounds().centerX()+随机数20, 提交截图.bounds().centerY()+随机数20, 120);
                            var automator = new RootAutomator();
                            automator.press(提交截图.bounds().centerX()+随机数20, 提交截图.bounds().centerY()+随机数20, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                        }
                    }else{
                        切回APP("99阅读");
                    }
                }
                控件点击(text("允许"));
                授权并登录 = text("授权并登录").findOnce();
                if (授权并登录) {
                    sleep(2000);
                    // press(授权并登录.bounds().centerX()+随机数4, 授权并登录.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(授权并登录.bounds().centerX()+随机数4, 授权并登录.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    back();
                }
                控件点击(text("授权并登录"));
                var 我知道了 = textContains("我知道了").findOne(2000);
                if(我知道了){
                    sleep(1500);
                    // press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                if(text("示例图").exists()){
                    return true;
                }
            }
            toast("没有找到页面");
            return false;
        }

        function 点击进入2(){
            for (let index = 0; index < 6; index++) {
                sleep(1500);
                if(text("我的积分").exists()){
                    随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                    sleep(1000);
                }
                var gkdysp = text("观看KS视频").findOnce();
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3500);
                }
                马上关注();
                重新授权();
                var 领取任务 = text("领取任务").findOnce();
                if(领取任务){
                    sleep(1500);
                    // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                var 今日签到 = text("今日签到").findOnce();
                if(今日签到){
                    sleep(1500);
                    // press(今日签到.bounds().centerX()+随机数4, 今日签到.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(今日签到.bounds().centerX()+随机数4, 今日签到.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                    if(控件点击(text("打开'KS'"))){
                        切回APP("快手");
                    }
                    控件点击(text("以后再说"));
                    控件点击(text("我知道了"));
                    var 我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(10000);
                    if(我!==null){
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(10000);
                    }
                    if (我) {
                        sleep(1000);
                        // press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        控件点击(text("我").boundsInside(wt*0.8,hg*0.8,wt,hg));
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        text("编辑资料").findOne(20000);
                        ScreenShot("/sdcard/DCIM/Screenshots");
                        切回APP("99阅读");
                        上传图片();
                        var 提交截图 = text("提交截图").boundsInside(0,hg*0.6,wt,hg).findOne(7000);
                        if(提交截图){
                            // press(提交截图.bounds().centerX()+随机数20, 提交截图.bounds().centerY()+随机数20, 120);
                            var automator = new RootAutomator();
                            automator.press(提交截图.bounds().centerX()+随机数20, 提交截图.bounds().centerY()+随机数20, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                        }
                    }else{
                        切回APP("99阅读");
                    }
                }
                控件点击(text("允许"));
                授权并登录 = text("授权并登录").findOnce();
                if (授权并登录) {
                    sleep(2000);
                    // press(授权并登录.bounds().centerX()+随机数4, 授权并登录.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(授权并登录.bounds().centerX()+随机数4, 授权并登录.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    back();
                }
                控件点击(text("授权并登录"));
                var 我知道了 = textContains("我知道了").findOne(2000);
                if(我知道了){
                    sleep(1500);
                    // press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                if(text("示例图").exists()){
                    return true;
                }
            }
            toast("没有找到页面");
            return false;
        }

        function 切回APP(name){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains(name).findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片(u) {
            var sctp = id("image_jia").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(1000);
                var sctp3 = text("最近").findOne(5000);
                if (sctp3) {
                    Tap(wt*0.98,hg*0.3);
                    sleep(500);
                    // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(500);
                    for (let ca = 0; ca <5; ca++) {
                        var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.5,hg*0.51).findOne(10000);
                        if (sctp4) {
                            sleep(1500);
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("99阅读").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }else{
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("99阅读").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }
                        var sctp4 =text("打开").findOne(5000);
                        if (sctp4){
                            sleep(1500);
                            // press(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            break;
                        }
                        if(ca==4){
                            back();
                            sleep(2000);
                            if(u<4){
                                上传图片(u+1);
                            }else{
                                back();
                                控件点击(text("确定"));
                            }
                        }
                    }
                }
            }
        }

        function gkgg(){
            sleep(10000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("close_tv_id").text("关闭"))){
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.05);
            back();
            sleep(2000);
        }

        function 看视频() {
            for (let index = 0; index < 20; index++) {
                if(text("我的积分").exists()){
                    随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                    sleep(1000);
                }
                if(控件点击(text("看视频赚积分"))){
                    sleep(2000);
                    break;
                }else{
                    back();
                    sleep(3000);
                }
            }
            for (let index = 0; index < 10; index++) {
                var 观看视频 = text("观看视频").findOne(3000);
                if (观看视频) {
                    sleep(2000);
                    // press(观看视频.bounds().centerX()+随机数4, 观看视频.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(观看视频.bounds().centerX()+随机数4, 观看视频.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    gkgg();
                }
            }
        }
        function 任务执行成功(type){
            var 我知道了,提交任务;
            if(截图()){
                back();
                sleep(1000);
                back();
                sleep(1000);
                if(type){
                    切回APP("99阅读");
                    我知道了 = textContains("我知道了").findOne(3000);
                    if(我知道了){
                        sleep(800);
                        // press(我知道了.bounds().centerX()+随机数20, 我知道了.bounds().centerY()+随机数20, 120);
                        var automator = new RootAutomator();
                        automator.press(我知道了.bounds().centerX()+随机数20, 我知道了.bounds().centerY()+随机数20, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                        控件点击(text("打开'DY'做任务"));
                        控件点击(text("点击复制\n打开'DY'做任务"));
                    }
                }else{
                    if(!text("提交任务").exists()){
                        切回APP("99阅读");
                    }
                    我知道了 = textContains("我知道了").findOne(3000);
                    if(我知道了){
                        sleep(800);
                        // press(我知道了.bounds().centerX()+随机数20, 我知道了.bounds().centerY()+随机数20, 120);
                        var automator = new RootAutomator();
                        automator.press(我知道了.bounds().centerX()+随机数20, 我知道了.bounds().centerY()+随机数20, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                        控件点击(text("打开'KS'做任务"));
                        控件点击(text("点击复制\n打开'KS'做任务"));
                    }
                }
                上传图片();
                提交任务 = text("提交任务").boundsInside(0,hg*0.6,wt,hg).findOne(7000);
                if(提交任务){
                    // press(提交任务.bounds().centerX()+随机数20, 提交任务.bounds().centerY()+随机数20, 120);
                    var automator = new RootAutomator();
                    automator.press(提交任务.bounds().centerX()+随机数20, 提交任务.bounds().centerY()+随机数20, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                for (let tj = 0; tj < 20; tj++) {
                    if(text("提交中").exists()){
                        sleep(1000);
                    }else{
                        break;
                    }
                }
                sleep(2000);
                if(text("提交任务").boundsInside(0,hg*0.6,wt,hg).exists()){
                    back();
                    sleep(1500);
                }
                控件点击(text("确定"));
            }else{
                任务执行失败();
            }
        }

        function 任务执行失败(type){
            if(type){
                back();
                sleep(1000);
                back();
                sleep(1000);
                切回APP("99阅读");
            }else{
                back();
                sleep(3000);
                if(!text("提交任务").exists()){
                    切回APP("99阅读");
                }
            }
            控件点击(textContains("我知道了"));
            back();
            sleep(1500);
            var 确定 = text("确定").findOne(7000);
            if (确定) {
                // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(2000);
            }
        }


        function 点击搜索(){
            for (let index = 0; index < 15; index++) {
                sleep(1500);
                if(descContains("音乐，").exists()||text("直播中")){
                    sleep(2000);
                    break;
                }
                if(text("编辑资料").exists()){
                    控件点击(text("首页"));
                }
                if(index = 14){
                    return false;
                }
            }
            for (let index = 0; index < 3; index++) {
                Tap(wt*0.95,hg*0.06);
                sleep(1000);
                var 取消 = text("取消").findOne(5000);
                if(取消){
                    sleep(1500);
                    return true;
                }
            }
            return false;
        }
        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                控件点击(text("继续观看"));
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.9)).findOnce();
                if(开始任务){
                    sleep(1500);
                    // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }else{
                    sleep(2000);
                }
            }
            return false;
        }
        function 抖音(){
            var 任务要求,做任务;
            for (let index = 0; index < 20; index++) {
                if(!点击进入()){
                    break;
                }
                toast("开始任务");
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    toast("没有任务跳过此平台");
                    break;
                }
                try {
                    任务要求 = textContains("本任务类型：").findOne(5000).text();
                } catch (error) {
                    continue;
                }
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                if(任务要求.indexOf("评论")!=-1){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(text("示例图").exists()&&!textContains("评论").exists()){
                    if(任务要求.indexOf("个人中心关注")!=-1){
                        做任务 = text("打开'DY'做任务").findOne(3000);
                    }else if(任务要求.indexOf("点赞")!=-1||任务要求.indexOf("首页搜索关注")!=-1){
                        做任务 = text("点击复制\n打开'DY'做任务").findOne(3000);
                    }
                    if (做任务) {
                        sleep(2000);
                        // press(做任务.bounds().centerX()+随机数4, 做任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(做任务.bounds().centerX()+随机数4, 做任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        if(任务要求.indexOf("个人中心关注")!=-1){
                            控件点击(text("个人中心关注"));
                        }else if(任务要求.indexOf("首页搜索关注")!=-1){
                            控件点击(text("首页搜索关注"));
                        }else if(任务要求.indexOf("点赞")!=-1){
                            控件点击(text("点赞"));
                        }
                        控件点击(text("确定"));
                        控件点击(text("允许"));
                        if(任务要求.indexOf("个人中心关注")!=-1){
                            进入任务();
                            var 关注  = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(15000);
                            if(关注){
                                sleep(1500);
                                // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(3700);
                                控件点击(textContains("抖一下"));
                                任务执行成功(true);
                            }else if(text("取消关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).exists()){
                                任务执行成功(true);
                            }else{
                                任务执行失败(true);
                            }
                        }else if(任务要求.indexOf("首页搜索关注")!=-1){


                            if(点击搜索()){
                                var 搜索 = className("android.widget.EditText").boundsInside(wt*0.01,hg*0.05,wt*0.99,hg*0.4).findOnce();
                                if(搜索){
                                    sleep(1000);
                                    // press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(2000);
                                    搜索.paste();
                                    sleep(1500);
                                    Tap(wt*0.95,hg*0.95);
                                }
                                sleep(2000);
                                var 关注 = text("关注").findOne(7000);
                                if (关注) {
                                    sleep(2000);
                                    // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(1500);
                                }
                                var 已关注 = text("已关注").findOne(4000);
                                if(已关注){
                                    任务执行成功(true);
                                }else{
                                    任务执行失败(true);
                                }
                            }else{
                                任务执行失败(true);
                            }
                        }else if(任务要求.indexOf("点赞")!=-1){
                            进入任务();
                            var 无法加载 = textContains("· ").findOne(20000);
                            if(无法加载){
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(50);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(2000);
                                任务执行成功(true);
                            }else{
                                任务执行失败(true);
                            }
                        }
                    }else{
                        back();
                        sleep(2000);
                        控件点击(text("提交任务"));
                        控件点击(text("知道了").boundsInside(0,hg*0.5,wt,hg));
                    }
                }else{
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                }
            }
        }


        function K手(){
            var 任务要求,做任务;
            for (let index = 0; index < 20; index++) {
                if(!点击进入2()){
                    break;
                }
                toast("开始任务");
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    toast("没有任务跳过此平台");
                    break;
                }
                try {
                    任务要求 = textContains("本任务类型：").findOnce().text();
                } catch (error) {
                    continue;
                }
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                if(任务要求.indexOf("留言")!=-1||任务要求.indexOf("评论")!=-1){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(text("示例图").exists()&&!textContains("评论").exists()){
                    做任务 = text("打开'KS'做任务").findOne(3000);
                    if (做任务) {
                        sleep(2000);
                        // press(做任务.bounds().centerX()+随机数4, 做任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(做任务.bounds().centerX()+随机数4, 做任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        if(任务要求.indexOf("关注")!=-1){
                            控件点击(text("关注"));
                        }else if(任务要求.indexOf("点赞")!=-1){
                            控件点击(text("点赞"));
                        }
                        控件点击(text("确定"));
                        控件点击(text("允许"));
                        if(任务要求.indexOf("关注")!=-1){
                            var 关注  = 查找控件(Array(descContains("关注").boundsInside(wt*0.3,hg*0.26,wt,hg*0.36),textContains("关注").boundsInside(wt*0.3,hg*0.26,wt,hg*0.36)),15);
                            if(关注){
                                sleep(2000);
                                if(!text("i 发私信").boundsInside(wt*0.1,hg*0.1,wt,hg*0.6).exists()){
                                    // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(3700);
                                }
                                任务执行成功(false);
                            }else if(text("i 发私信").boundsInside(wt*0.1,hg*0.1,wt,hg*0.6).exists()){
                                任务执行失败(false);
                            }else{
                                任务执行失败(false);
                            }
                        }else if(任务要求.indexOf("点赞")!=-1){
                            var 头像 = id("avatar").findOne(5500);
                            if(头像){
                                sleep(2000);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(100);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(500);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.35,hg*0.36));
                                sleep(100);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.35,hg*0.36));
                                sleep(500);
                                Tap(random(wt*0.41,wt*0.42),random(hg*0.32,hg*0.33));
                                sleep(100);
                                Tap(random(wt*0.41,wt*0.42),random(hg*0.32,hg*0.33));
                                sleep(3500);
                                任务执行成功(false);
                            }else{
                                任务执行失败(false);
                            }
                        }
                    }else{
                        back();
                        sleep(2000);
                        控件点击(text("提交任务"));
                        控件点击(text("知道了").boundsInside(0,hg*0.5,wt,hg));
                    }
                }else{
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                }
            }
        }
        function 九九阅读(){
            点击启动APP("抖音短视频");
            sleep(3500);
            home();
            点击启动APP("99阅读");
            var 主页 =  sypd();
            if (主页 !== null){
                sleep(3500);
                if(storage.get("jjyd1")>storagesd.get("jjydrw",0)){
                    toast("开始抖音任务");
                    抖音();
                    文章视频记录判断("jjydrw","jjyd2");
                }
                if(storage.get("jjyd2")>storagesd.get("jjydrw2",0)){
                    toast("开始观看视频");
                    K手();
                    文章视频记录判断("jjydrw2","jjyd2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        九九阅读();
    }


    var wwz = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.frog.MainActivity",null,30);
            sleep(4000);
            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
            自动更新();
            HM = text("推荐").findOnce();
            if (HM !== null){
                sleep(3500);
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                sleep(3500);
                自动更新();
                HM = text("推荐").findOnce();
                if (HM !== null){
                    sleep(3500);
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("蛙蛙赚").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp3 =className("android.view.ViewGroup").boundsInside(wt*0.5,hg*0.28,wt*0.98,hg*0.75).findOne(10000);
            if (sctp3) {
                sleep(1500);
                // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(3500);
                控件点击(text("允许"));
                for (let ca = 0; ca <3; ca++) {
                    var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.52,hg*0.51).findOne(10000);
                    if (sctp4) {
                        sleep(1500);
                        // longClick(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                        Tap(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                    }else{
                        // longClick(wt*0.26,hg*0.30);
                        Tap(wt*0.26,hg*0.30);
                    }
                    var sctp5 =text("打开").findOne(5000);
                    if (sctp5){
                        sleep(3000);
                        // press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3500);
                        break;
                    }
                }
                text("上传成功").findOne(10000);
                var sctp6 =text("提交任务").boundsInside(1,hg*0.7,wt,hg).findOne(10000);
                if (sctp6){
                    sleep(3500);
                    // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(6000);
                }
            }
        }
        function 蛙蛙滑块验证() {
            if(text("向右拖动滑块填充拼图").exists() && username!=="" && password!==""){
                try {
                    toast("进入滑块验证");
                    sleep(3500);
                    text("向右拖动滑块填充拼图").findOne(5000);
                    for (let index = 0; index < 5; index++) {
                        var hkcc=className("android.view.View").boundsInside(1,hg*0.1,wt-1,hg*0.75).findOnce();
                        if(hkcc){
                            var src=images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var clip=images.clip(src,0 ,hkcc.bounds().top ,device.width ,hkcc.bounds().height());
                            images.save(clip,"/sdcard/截图.png" );
                            img =images.read("/sdcard/截图.png");
                            var dt1 = getCode(username, password, img);
                            var dt = dt1.data;
                            if(dt&& dt.res.indexOf(",") != -1){
                                var x2=parseInt(dt.res.split(",")[0]);
                                var huadong=className("android.view.View").text("向右拖动滑块填充拼图").findOnce();
                                var qszb = className("android.view.View").boundsInside(wt*0.05,hg*0.43,wt*0.2,hg*0.53).findOnce();
                                if(huadong&&qszb){
                                    sml_move(qszb.bounds().left, huadong.bounds().centerY(), x2+wt*0.023, huadong.bounds().centerY(), random(1000,1100));
                                    sleep(2000);
                                    if(!text("向右拖动滑块填充拼图").exists()){
                                        toast("通过滑块");
                                        return true;
                                    }else{
                                        uploadError(username, password,dt1.data.cid);
                                        控件点击(className("android.view.View").boundsInside(wt*0.5,hg*0.2,wt,hg*0.6));
                                        sleep(3000);
                                        for (let index = 0; index < 10; index++) {
                                            if(text("加载中...").exists()){
                                                sleep(1000);
                                            }else{
                                                break;
                                            }
                                            if(index == 9){
                                                toast("图片刷新失败");
                                                throw "图片刷新失败"
                                            }
                                        }
                                    }
                                }
                            }else{
                                toast("滑块验证失败，可能余额或网络问题");
                                break;
                            }
                        }else{
                            sleep(3000)
                        }
                    }
                }catch(error){
                    if(hkyz>2){
                        hkyz = 0;
                        throw(error+"，过滑次数太多");
                    }else{
                        hkyz = hkyz + 1;
                    }
                }
                throw("过滑块验证失败");
            }
            控件点击(text("点击完成验证"));
        }
        function 抖音页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(text("推荐").exists()&&text("我的").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(0,hg*0.53,wt*0.55,hg*0.8));
                    sleep(3000);
                }
                if(text("—— 每日逗音跑单 ——").exists()){
                    return true;
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                蛙蛙滑块验证();
                back();
                sleep(3500);
            }
            放弃任务();
            throw "抖音页没找到";
        }
        function 快手页(){
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(text("推荐").exists()&&text("我的").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.45,hg*0.53,wt,hg*0.8));
                    sleep(3000);
                }
                if(text("—— 每日快摄跑单 ——").exists()){
                    return true;
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                蛙蛙滑块验证();
                back();
                sleep(3500);
            }
            放弃任务();
            throw "K手页没找到";
        }
        function 抖音() {
            for (let dxh = 0; dxh < 20; dxh++) {
                抖音页();
                sleep(3500);
                Tap(wt*0.51,hg*0.91);
                sleep(5000);
                蛙蛙滑块验证();
                if(控件点击(text("去完成"))){
                    sleep(3500);
                    控件点击(text("逗音关注任务"));
                    控件点击(text("逗音点赞任务"));
                }
                if(text("任务已被抢光了").exists()){
                    控件点击(text("取消"));
                    back();
                    sleep(2000);
                    continue;
                }
                var djfz = text("点击复制").findOne(45000);
                if(text("逗音套餐").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                    break;
                }
                if(textContains("逗音关注").exists()&&!text("任务描述：逗音评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("允许"));
                        sleep(2000);
                        var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(10000);
                        if(gzlrw){
                            sleep(3500);
                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            截图();
                            切回APP();
                            上传图片();
                        }else if(text("取消关注").exists()){
                            截图();
                            切回APP();
                            上传图片();
                        }else{
                            Tap(wt*0.925,hg*0.338);
                            sleep(2000);
                            toast("未能正常识别关注，启动其他方式识别");
                            var imge = images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var point = images.findColor(imge, "#FE2C55", [1, 0, "#FFEAEE"],{
                                region: [wt*0.5, hg*0.22, wt*0.1, hg*0.05],
                                threshold: 29
                            });
                            if(point){
                                Tap(point.x,point.y);
                                sleep(3500);
                                截图();
                                切回APP();
                                上传图片();
                            }else{
                                toast("放弃任务");
                                切回APP();
                                sleep(5000);
                                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                                sleep(2000);
                                控件点击(text("放弃任务"));
                            }
                        }
                    }
                }else if(textContains("逗音点赞")&&!text("任务描述：逗音评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("允许"));
                        textContains("· ").findOne(20000);
                        sleep(2000);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(50);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(2000);
                        截图();
                        切回APP();
                        上传图片();
                    }
                }else{
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                }
            }
        }

        function 快手() {
            for (let dxh = 0; dxh < 20; dxh++) {
                快手页();
                sleep(3500);
                Tap(wt*0.51,hg*0.91);
                sleep(5000);
                蛙蛙滑块验证();
                if(控件点击(text("去完成"))){
                    sleep(3500);
                    控件点击(textContains("快摄关注任务"));
                }
                if(text("任务已被抢光了").exists()){
                    控件点击(text("取消"));
                    back();
                    sleep(2000);
                    continue;
                }
                var djfz = text("点击复制").findOne(45000);
                if(text("快摄套餐").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                    break;
                }
                if(textContains("关注").exists()&&!textContains("评论").boundsInside(0,hg*0.32,wt,hg*0.5).exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3000);
                        if(控件点击(id("text1"))){
                            sleep(2000);
                            控件点击(id("允许"));
                            sleep(2000);
                            控件点击(id("确定"));
                            sleep(2000);
                        }
                        控件点击(text("允许"));
                        var gzlrw4= id("text_top").findOne(40000);
                        if(gzlrw4==null){
                            gzlrw4 = id("profile_follow_layout").findOnce();
                        }
                        if(gzlrw4){
                            sleep(3000);
                            // press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw4.bounds().centerX()+随机数4, gzlrw4.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(3000);
                            if(控件点击(id("avatar"))){
                                text("i 发私信").findOne(10000);
                                sleep(2500);
                            }
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            控件点击(id("close_btn"));
                            back();
                            sleep(2500);
                            切回APP();
                            上传图片();
                        }else if(text("取消关注").exists()){
                            控件点击(id("close_btn"));
                            sleep(2500);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            back();
                            sleep(2500);
                            切回APP();
                            上传图片();
                        }else if(textContains("作品").exists()&&textContains("动态").exists()&&!text("i 发私信").exists()){
                            Tap(wt*0.731,hg*0.32);
                            sleep(3000);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            控件点击(id("close_btn"));
                            back();
                            sleep(2500);
                            切回APP();
                            上传图片();
                        }else{
                            控件点击(id("close_btn"));
                            切回APP();
                            text("任务详情").findOne(10000);
                            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.85,0,wt,hg*0.2));
                            控件点击(text("放弃任务"));
                        }

                    }
                }else if(textContains("点赞")&&!text("任务描述：快摄评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3000);
                        var gzlrw3 = id("like_layout").boundsInside(0,0,wt*0.3,hg*0.3).findOne(45000);
                        if(gzlrw3){
                            sleep(3000);
                            // press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw3.bounds().centerX()+随机数4, gzlrw3.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                            sleep(100);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                            sleep(2500);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            控件点击(id("close_btn"));
                            back();
                            sleep(2500);
                            切回APP();
                            上传图片();
                        }else if(id("avatar").exists()){
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                            sleep(100);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.52,hg*0.53));
                            sleep(2500);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            控件点击(id("close_btn"));
                            back();
                            sleep(2500);
                            切回APP();
                            上传图片();
                        }else{
                            控件点击(id("close_btn"));
                            sleep(2500);
                            back();
                            sleep(2500);
                            切回APP();
                        }
                    }
                }else{
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                }
            }
        }
        function 放弃任务(){
            back();
            sleep(3500);
            back();
            sleep(3500);
            if(qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(textContains("进行中"),7000)))){
                for (let index = 0; index < 5; index++) {
                    sleep(2500);
                    if(控件点击(text("放弃任务"))){
                        控件点击(text("放弃"));
                    }else{
                        break;
                    }
                }
            }
        }

        function 点击签到(){
            toast("开始签到!");
            qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(text("超赞蛙"),4000)));
            sleep(3000);
            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.55,hg*0.01,wt,hg*0.3));
            Tap(wt*0.83,hg*0.14);
            sleep(2000);
            back();
            sleep(3000);
            qd(Array(Array(text("推荐"),4000)));
        }

        function 蛙蛙赚(){
            点击启动APP("蛙蛙赚");
            var 主页 =  sypd();
            sleep(3500);
            if (主页 !== null){
                点击签到();
                if(storage.get("wwz1")>storagesd.get("wwzrw",0)){
                    抖音();
                    文章视频记录判断("wwzrw","wwz1");
                }
                放弃任务();
                if(storage.get("wwz2")>storagesd.get("wwzrw2",0)){
                    快手();
                    文章视频记录判断("wwzrw2","wwz2");
                }
                放弃任务();
            }else{
                放弃任务();
                toast("没有找到首页");
                return false;
            }
        }
        蛙蛙赚();
    }

    var wkzzxhs = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"),className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.lt.app.MainActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("任务大厅").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("任务大厅").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }


        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("微客众智").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp =textContains("上传截图").className("android.widget.Button").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(3500);
                控件点击(text("允许"));
                var sctp3 = text("选择文件").findOne(10000);
                if (sctp3) {
                    sleep(1500);
                    // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    var sctp4 =text("选择文件").boundsInside(1,hg*0.65,wt,hg).findOne(10000);
                    if (sctp4) {
                        sleep(1500);
                        // press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        var sctp5 =id("check_view").findOne(10000);
                        if (sctp5){
                            sleep(2000);
                            // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            var sctp6 =text("确定").findOne(10000);
                            if (sctp6){
                                sleep(2000);
                                // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                                var sctp8 =textContains("确认无误提交").findOne(10000);
                                if (sctp8){
                                    sleep(2000);
                                    // press(sctp8.bounds().centerX()+随机数4,sctp8.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(sctp8.bounds().centerX()+随机数4,sctp8.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(2000);
                                }
                            }
                        }
                    }
                }
            }
        }
        function 小红书关注() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(6000);
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                sleep(1000);
                控件点击(text("确定"));
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("小红薯任务").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                        }
                        var gz = text("小红薯 关注任务").findOne(5000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取小红薯关注任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.2,wt,hg*0.5).findOne(45000);
                                        if(gzlrw){
                                            sleep(3000);
                                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                            var automator = new RootAutomator();
                                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                            sleep(100);
                                            automator.exit();
                                            
                                            sleep(4500);
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            切回APP();
                                            上传图片();
                                        }else if(text("发消息").exists()){
                                            ScreenShot("/sdcard/DCIM/Screenshots");
                                            切回APP();
                                            上传图片();
                                        }else{
                                            切回APP();
                                            控件点击(textContains("放弃任务"));
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 小红书点赞() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(6000);
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                sleep(1000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("小红薯任务").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                        }
                        var gz = text("小红薯 点赞任务").findOne(10000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取小红薯点赞任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        text("说点什么…").findOne(40000);
                                        sleep(2000);
                                        Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                                        sleep(50);
                                        Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                                        sleep(2000);
                                        ScreenShot("/sdcard/DCIM/Screenshots");
                                        切回APP();
                                        上传图片();
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 小红书收藏() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(6000);
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                sleep(1000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("小红薯任务").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                        }
                        var gz = text("小红薯 收藏任务").findOne(10000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取小红薯收藏任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var sdss = text("说点什么…").findOne(40000);
                                        if(sdss){
                                            sleep(2000);
                                            if(控件点击(className("android.widget.LinearLayout").boundsInside(wt*0.60,hg*0.8,wt*0.85,hg))){
                                                sleep(2000);
                                                ScreenShot("/sdcard/DCIM/Screenshots");
                                                切回APP();
                                                上传图片();
                                            }else{
                                                toast("放弃任务");
                                                切回APP();
                                                sleep(5000);
                                                控件点击(text("放弃任务"));
                                                sleep(1500);
                                                控件点击(text("确定"));
                                            }
                                        }else{
                                            toast("放弃任务");
                                            切回APP();
                                            sleep(5000);
                                            控件点击(text("放弃任务"));
                                            sleep(1500);
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 小红书点赞收藏() {
            for (let dxh = 0; dxh < 10; dxh++) {
                sleep(6000);
                随机滑动(Array(0.47,0.53),Array(0.75,0.76),Array(0.47,0.53),Array(0.11,0.12),1000);
                sleep(1000);
                if(text("提示").exists()){
                    控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                }
                var dy = text("小红薯任务").findOnce();
                if(dy){
                    控件点击(text("确定"));
                    var yrw = text("有任务").boundsInside(wt*0.5,dy.bounds().top-10,wt,dy.bounds().bottom+10).findOnce();
                    if(yrw){
                        sleep(2000);
                        // press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(yrw.bounds().centerX()+随机数4, yrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("确定"));
                        if(text("提示").exists()){
                            控件点击(className("android.view.View").boundsInside(1,hg*0.5,wt,hg*0.7));
                            back();
                        }
                        var gz = text("小红薯 点赞+收藏").findOne(10000);
                        if(gz){
                            sleep(5000);
                            var gzyrw = text("有任务").boundsInside(wt*0.5,gz.bounds().top-10,wt,gz.bounds().bottom+10).findOnce();
                            if(gzyrw){
                                sleep(2000);
                                // press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzyrw.bounds().centerX()+随机数4, gzyrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(4000);
                                if(textContains("做错任务，权限关闭").exists()){
                                    控件点击(text("任务大厅"));
                                    return false;
                                }
                                for (let index = 0; index < 10; index++) {
                                    var gzlrw = textContains("领取小红薯点赞收藏任务").findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(2500);
                                    }
                                    var gzlrw = textContains("点击此处做任务").boundsInside(wt*0.1,hg*0.55,wt*0.85,hg*0.85).findOne(10000);
                                    if(gzlrw){
                                        sleep(2000);
                                        // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        var automator = new RootAutomator();
                                        automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                        sleep(100);
                                        automator.exit();
                                        
                                        sleep(5000);
                                        控件点击(text("允许"));
                                        var sdss = text("说点什么…").findOne(40000);
                                        if(sdss){
                                            sleep(2000);
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                                            sleep(50);
                                            Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                                            sleep(2000);
                                            if(控件点击(className("android.widget.LinearLayout").boundsInside(wt*0.60,hg*0.8,wt*0.85,hg))){
                                                sleep(2000);
                                                ScreenShot("/sdcard/DCIM/Screenshots");
                                                切回APP();
                                                上传图片();
                                            }else{
                                                toast("放弃任务");
                                                切回APP();
                                                sleep(5000);
                                                控件点击(text("放弃任务"));
                                                sleep(1500);
                                                控件点击(text("确定"));
                                            }
                                        }else{
                                            toast("放弃任务");
                                            切回APP();
                                            sleep(5000);
                                            控件点击(text("放弃任务"));
                                            sleep(1500);
                                            控件点击(text("确定"));
                                        }
                                    }else{
                                        控件点击(text("任务大厅"));
                                        break;
                                    }
                                }
                            }else{
                                控件点击(text("任务大厅"));
                                break;
                            }
                        }else{
                            控件点击(text("任务大厅"));
                        }
                    }else{
                        break;
                    }
                }else{
                    back();
                    sleep(3000);
                    控件点击(text("任务大厅"));
                }
            }
        }

        function 微客众智(){
            点击启动APP("微客众智");
            var 主页 =  sypd();
            if (主页 !== null){
                if(storage.get("wkzzxhs1")>storagesd.get("wkzzxhsrw",0)){
                    toast("进入小红书");
                    小红书关注();
                    小红书点赞();
                    小红书收藏();
                    小红书点赞收藏();
                    文章视频记录判断("wkzzxhsrw","wkzzxhs1");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        微客众智();
    }

    var dsj = function(){
        var gkgg = function(){
            sleep(20000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                控件点击(text("取消"));
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))){
                    sleep(2000);
                    var gb = id("dialog_reward_close").findOne(5000);
                    if (gb) {
                        sleep(2000);
                        // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.05);
            back();
            sleep(2000);
        }

        function 看视频(){
            var 去完成,激励视频;
            sleep(3500);
            for (let index = 0; index < 11; index++){
                控件点击(id("dialog_coin_reward_count"));
                随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                激励视频 = text("激励视频").boundsInside(0,hg*0.1,wt,hg).findOne(10000);
                if(激励视频){
                    sleep(3000);
                    控件点击(id("dialog_reward_close"));
                    去完成 = text("去完成").boundsInside(wt*0.55,激励视频.bounds().top,wt,激励视频.bounds().top+hg*0.125).findOne(2000);
                    if(去完成){
                        sleep(3000);
                        // press(去完成.bounds().left+random(10,30), 去完成.bounds().centerY()+随机数20, 120);
                        var automator = new RootAutomator();
                        automator.press(去完成.bounds().left+random(10,30), 去完成.bounds().centerY()+随机数20, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3500);
                        for (let at = 0; at < 6; at++) {
                            if(text("去完成").exists()){
                                // press(去完成.bounds().left+random(10,30), 去完成.bounds().centerY()+随机数20, 120);
                                var automator = new RootAutomator();
                                automator.press(去完成.bounds().left+random(10,30), 去完成.bounds().centerY()+随机数20, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(3500);
                            }else{
                                gkgg();
                                break;
                            }
                        }
                    }
                }
                控件点击(id("dialog_coin_reward_count"));
                随机滑动(Array(0.47,0.52),Array(0.1,0.11),Array(0.47,0.52),Array(0.61,0.62),1000);
                随机滑动(Array(0.47,0.52),Array(0.1,0.11),Array(0.47,0.52),Array(0.61,0.62),1000);
                领取金币(3);
            }
        }

        function 签到(){
            sleep(5000);
            var 翻倍 = id("dialog_coin_reward_btn").findOne(30000);
            if (翻倍) {
                sleep(2000);
                // press(翻倍.bounds().centerX()+随机数4, 翻倍.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(翻倍.bounds().centerX()+随机数4, 翻倍.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(2000);
                gkgg();
                sleep(2000);
                控件点击(id("dialog_coin_reward_count"));
            }else{
                控件点击(id("dialog_coin_reward_count"));
            }
        }

        function 领取金币(次数) {
            控件点击(id("dialog_reward_close"));
            sleep(2500);
            for (let index = 0; index < 次数; index++) {
                if(控件点击(id("tv_coin_label"))){
                    sleep(2000);
                    var gb = id("dialog_coin_reward_btn").findOne(5000);
                    if (gb) {
                        sleep(2000);
                        // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        gkgg();
                        sleep(1000);
                    }else{
                        控件点击(id("dialog_coin_reward_count"));
                    }
                }else{
                    break;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.dianshijia.tvlive.ui.activity.MainActivity",null,30);
            sleep(4000);
            HM = id("recommend_card_rv").findOnce();
            控件点击(idContains("close"));
            控件点击(text("再看一会"));
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                HM = id("recommend_card_rv").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function 电视家(){
            点击启动APP("电视家");
            var 主页 =  sypd();
            if (主页 !== null){
                if(qd(Array(Array(id("recommend_top_tv").text("每日签到"),10000)))){
                    签到();
                    看视频();
                    随机滑动(Array(0.47,0.52),Array(0.1,0.11),Array(0.47,0.52),Array(0.61,0.62),1000);
                    随机滑动(Array(0.47,0.52),Array(0.1,0.11),Array(0.47,0.52),Array(0.61,0.62),1000);
                    领取金币(30);
                    随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                    随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                    控件点击(text("待领取"));
                    if(!文章视频记录判断("dsjwz","dsj1")){
                        toast("任务到达上限");
                        return false;
                    }
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        电视家();
    }


    var jnmfxs = function(){
        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <35; ggcs++) {0
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.RelativeLayout").boundsInside(wt*0.8,0,wt,hg*0.2))||控件点击(text("")||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2)))){
                    sleep(2000);
                    var gb = id("dialog_reward_close").findOne(5000);
                    if(gb==null){
                        gb = id("home_rad_close").findOnce();
                    }
                    if (gb) {
                        sleep(2000);
                        // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.05);
            back();
            sleep(2000);
        }
        function 自动登陆(){
            if(控件点击(id("guide_login_bg"))){
                var 一键登陆 = text("微信一键登录").findOne(20000);
                if (一键登陆) {
                    // press(一键登陆.bounds().centerX()+随机数4, 一键登陆.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(一键登陆.bounds().centerX()+随机数4, 一键登陆.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(10000);
                    var 同意 = text("同意").findOne(10000);
                    if (同意) {
                        // press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        return true;
                    }
                }
            }
        }
        function sypd(){
            var HM;
            wait("com.yincheng.njread.ui.home.HomeActivity",null,30);
            sleep(4000);
            HM = id("tv_tab_title").findOnce();
            自动登陆();
            控件点击(idContains("close"));
            控件点击(text("再看一会"));
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动登陆();
                控件点击(idContains("close"));
                HM = id("tv_tab_title").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 文章判断() {
            var 跳过;
            for (let index = 0; index <6; index++) {
                控件点击(text("知道了"));
                if(id("read_page_progress_layout").exists()&&!text("广告").exists()){
                    return ;
                }else{
                    跳过 = id("tt_splash_skip_btn").boundsInside(wt*0.8,0,wt,hg*0.2).findOnce();
                    if (跳过) {
                        // press(跳过.bounds().centerX()+随机数4, 跳过.bounds().bottom+random(-15,-5), 120);
                        var automator = new RootAutomator();
                        automator.press(跳过.bounds().centerX()+随机数4, 跳过.bounds().bottom+random(-15,-5), 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }else{
                        Tap(wt*0.89,hg*0.026);
                        sleep(2000);
                    }
                }
                跳过 = id("tt_splash_skip_btn").boundsInside(wt*0.8,0,wt,hg*0.2).findOnce();
                if (跳过) {
                    // press(跳过.bounds().centerX()+随机数4, 跳过.bounds().bottom+random(-15,-5), 120);
                    var automator = new RootAutomator();
                    automator.press(跳过.bounds().centerX()+随机数4, 跳过.bounds().bottom+random(-15,-5), 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                sleep(3000);
                var xsbt = searchTwice(id("book_featured_title").boundsInside(wt*0.1,hg*0.2,wt,hg*0.9),id("book_title").boundsInside(wt*0.1,hg*0.2,wt,hg*0.9)).findOnce();
                if(xsbt){
                    sleep(2000);
                    // press(xsbt.bounds().centerX()+随机数4, xsbt.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(xsbt.bounds().centerX()+随机数4, xsbt.bounds().centerY()+随机数4, 120);
                    sleep(3500);
                    sleep(100);
                    automator.exit();
                    
                }else{
                    随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                    sleep(1500);
                    back();
                    sleep(3500);
                    控件点击(text("下次吧"));
                }
                var jryd = id("btn_read_book").findOne(3000);
                if(jryd){
                    sleep(2000);
                    // press(jryd.bounds().centerX()+随机数4, jryd.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(jryd.bounds().centerX()+随机数4, jryd.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(5000);
                }
                var xsbt2 = id("book_title").boundsInside(wt*0.1,hg*0.2,wt,hg*0.9).findOne(3000);
                if(xsbt2){
                    sleep(2000);
                    // press(xsbt2.bounds().centerX()+随机数4, xsbt2.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(xsbt2.bounds().centerX()+随机数4, xsbt2.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3500);
                }
            }
            throw "没找到首页";
        }
        function 做任务() {
            for (let index = 0; index < 3; index++) {
                back();
                sleep(3000);
                控件点击(text("下次吧"));
                back();
                sleep(3000);
                控件点击(idContains("close"));
                if(控件点击(id("home_gift"))){
                    break;
                }
            }
            随机滑动(Array(0.47,0.53),Array(0.85,0.86),Array(0.47,0.53),Array(0.11,0.12),1000);
            sleep(1000);
            随机滑动(Array(0.47,0.53),Array(0.85,0.86),Array(0.47,0.53),Array(0.11,0.12),1000);
            sleep(1000);
            随机滑动(Array(0.47,0.53),Array(0.85,0.86),Array(0.47,0.53),Array(0.11,0.12),1000);
            sleep(1000);
            for (let index2 = 0; index2 < 2; index2++) {
                for (let index3 = 0; index3 < 5; index3++) {
                    sleep(5000);
                    if(控件点击(id("item_task_submit").text("可领取").boundsInside(wt*0.45,hg*0.38,wt,hg))){
                        sleep(5000);
                        var hac = id("home_rad_close").findOne(5000);
                        if (hac) {
                            // press(hac.bounds().centerX()+随机数4, hac.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(hac.bounds().centerX()+随机数4, hac.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                        }
                    }else{
                        break;
                    }
                }
                控件点击(id("home_rad_close"));
                随机滑动(Array(0.47,0.53),Array(0.55,0.56),Array(0.47,0.53),Array(0.84,0.85),1000);
                sleep(5000);
            }

            for (let index4 = 0; index4 < 15; index4++) {
                sleep(3000);
                if(控件点击(id("item_task_submit").text("去观看").boundsInside(wt*0.45,hg*0.38,wt,hg))){
                    sleep(5000);
                    gkgg();
                }
            }
        }
        function 牛角免费小说(){
            点击启动APP("牛角免费小说");
            var 主页 =  sypd();
            if (主页 !== null){
                sleep(1500);
                if(控件点击(id("home_rad_get"))){
                    sleep(4000);
                    var gb = id("home_rad_close").findOne(5000);
                    if (gb) {
                        sleep(2000);
                        // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                }
                随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                for (let index = 0; index < 1000; index++) {
                    自动登陆();
                    文章判断();
                    控件点击(text("关"));
                    控件点击(text("知道了"));
                    sleep(random(3000,5000));
                    随机滑动(Array(0.85,0.86),Array(0.31,0.32),Array(0.01,0.01),Array(0.31,0.32),1000);
                }
                做任务();
                if(!文章视频记录判断("jnmfxswz","jnmfxs1")){
                    toast("任务到达上限");
                    return false;
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        牛角免费小说();
    }

    var zz = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }
        function sypd(){
            var HM;
            wait("io.dcloud.PandoraEntryActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("个人中心").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("个人中心").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            throw "没有找到首页";
        }


        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("攒攒").findOne(3000);
            if(切回脚本){
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3500);
                return true;
            }else{
                return false;
            }
        }
        function 上传图片() {
            控件点击(text("×").className("android.view.View").boundsInside(wt*0.4,hg*0.2,wt*0.95,hg*65));
            sleep(1500);
            var sctp =textContains("任务截图").className("android.view.View").findOne(10000);
            if (sctp) {
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(2000);
                控件点击(text("允许"));
                text("选择图片").findOne(4000);
                sleep(1500);
                Tap(wt*0.15,hg*0.2);
                sleep(2000);
                var sctp4 =id("done").findOne(10000);
                if (sctp4) {
                    // press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(5000);
                    for (let index = 0; index < 5; index++) {
                        var sctp5 =textContains("提交任务").className("android.widget.Button").findOne(5000);
                        if (sctp5){
                            sleep(3500);
                            // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                        }
                        控件点击(text("提交"));
                        控件点击(text("每日签到").className("android.view.View").boundsInside(0,hg*0.4,wt,hg));
                        控件点击(text("首次签到").className("android.view.View").boundsInside(0,hg*0.4,wt,hg));
                        控件点击(text("确定"));
                        if(textContains("任务截图").className("android.view.View").exists()){
                            break;
                        }else{
                            sleep(5000);
                        }
                    }
                }
            }
        }

        function 抖音任务判断(){
            var 我;
            for (let index = 0; index < 8; index++) {
                if(text("D音任务").boundsInside(wt*0.35,1,wt*0.63,hg*0.15).exists()){
                    sleep(3000);
                    return null;
                }
                if(text("个人中心").exists()){
                    控件点击(textContains("D音任务"));
                    sleep(2500);
                }
                if(text("D音").boundsInside(wt*0.35,1,wt*0.63,hg*0.15).exists()&&(className("android.view.View").text("首次签到").boundsInside(1,hg*0.3,wt,hg*0.99).exists()||className("android.view.View").text("每日签到").boundsInside(1,hg*0.3,wt,hg*0.99).exists())){
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.21,0.22),1000);
                    sleep(2000);
                    if(控件点击(textContains("打开D音").className("android.widget.Button"))){
                        控件点击(text("允许"));
                        sleep(7000);
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(30000);
                        if (我) {
                            sleep(2000);
                            // press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            控件点击(text("以后再说"));
                            控件点击(text("我知道了"));
                            控件点击(text("我").boundsInside(wt*0.8,hg*0.8,wt,hg));
                            控件点击(text("以后再说"));
                            控件点击(text("我知道了"));
                            sleep(6000);
                            text("编辑资料").findOne(20000);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            切回APP();
                            上传图片();
                        }else{
                            切回APP();
                        }
                    }
                }else if(text("D音").boundsInside(wt*0.35,1,wt*0.63,hg*0.15).exists()){
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.21,0.22),1000);
                    控件点击(className("android.widget.Button").textContains("领取任务").boundsInside(1,hg*0.5,wt,hg*0.99));
                    控件点击(className("android.view.View").textContains("领取任务").boundsInside(1,hg*0.5,wt,hg*0.99));
                    控件点击(text("确定"));
                    if(控件点击(text("授权绑定微信号"))){
                        控件点击(text("允许"));
                        sleep(2500);
                        var 同意 = text("同意").findOne(5000);
                        if (同意) {
                            sleep(2000);
                            // press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                        }
                    }
                }
                if(控件点击(text("授权绑定微信号"))){
                    控件点击(text("允许"));
                    sleep(2500);
                    var 同意 = text("同意").findOne(5000);
                    if (同意) {
                        sleep(2000);
                        // press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(同意.bounds().centerX()+随机数4, 同意.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                }
                if(控件点击(text("同意"))){
                    sleep(3500);
                }
                if(index > 4){
                    back();
                    sleep(2500);
                }
            }
            throw "没找到任务页"
        }

        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                控件点击(text("继续观看"));
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.8)).findOnce();
                if(开始任务){
                    sleep(1500);
                    // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }else{
                    sleep(2000);
                }
            }
            return false;
        }

        function 放弃任务(){
            切回APP();
            控件点击(textContains("放弃任务").className("android.widget.Button"));
            sleep(1500);
            控件点击(text("确定"));
        }
        function 完成任务(){
            if(截图()){
                sleep(1500);
                back();
                sleep(2000);
                切回APP();
                上传图片();
            }
        }
        function 抖音() {
            var 类型,任务要求=null,gzlrw,bj=true;
            for (let dxh = 0; dxh < 20; dxh++) {
                bj=true;
                抖音任务判断();
                类型 = textContains("类型").boundsInside(0,hg*0.01,wt,hg*0.3).findOne(3000);
                if(类型){
                    if(textContains("关注").boundsInside(1,1,wt,hg*0.5).exists()){
                        任务要求 = "关注";
                    }else if(textContains("点赞").boundsInside(1,1,wt,hg*0.5).exists()){
                        任务要求 = "点赞";
                    }else {
                        任务要求 = null;
                    }
                    if(text("评论").boundsInside(0,0,wt,hg*0.35).exists()){
                        随机滑动(Array(0.47,0.53),Array(0.7,0.75),Array(0.47,0.53),Array(0.27,0.3),1000);
                        sleep(2000);
                        控件点击(textContains("放弃任务").className("android.widget.Button"));
                        sleep(1500);
                        控件点击(text("确定"));
                        continue;
                    }
                    if(任务要求 !==null){
                        gzlrw = textContains("打开D音 直接做任务").boundsInside(1,hg*0.5,wt,hg*0.85).findOne(10000);
                        if(gzlrw){
                            sleep(1000);
                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            控件点击(text("允许"));
                            if(!进入任务()){
                                toast("没有找到跳转链接");
                                放弃任务();
                                continue;
                            }
                            sleep(2500);
                            if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1){
                                放弃任务();
                            }
                            if(任务要求.indexOf("关注")!=-1){
                                var 关注 = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(15000);
                                if(关注){
                                    sleep(1500);
                                    // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    var automator = new RootAutomator();
                                    automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                    sleep(100);
                                    automator.exit();
                                    
                                    sleep(2000);
                                    完成任务();
                                }else if(text("取消关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).exists()){
                                    完成任务();
                                }
                            }else if(任务要求.indexOf("点赞")!=-1){
                                var 寻找页面 = textContains("· ").findOne(20000);
                                if(寻找页面){
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    sleep(50);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                    sleep(300);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.41,hg*0.42));
                                    sleep(50);
                                    Tap(random(wt*0.52,wt*0.53),random(hg*0.41,hg*0.42));
                                    完成任务();
                                }else{
                                    放弃任务();
                                }
                            }
                            sleep(1500);
                            back();
                            sleep(1500);
                        }else{
                            toast("寻找做任务页面");
                            sleep(3000);
                        }
                    }else{
                        toast("没有找到任务要求");
                        back();
                        sleep(3000);
                    }
                }else{
                    toast("继续寻找任务要求");
                    控件点击(text("同意"));
                }
            }
        }

        function 攒攒(){
            点击启动APP("攒攒");
            sypd();
            if(storage.get("zz1")>storagesd.get("zzrw",0)){
                toast("进入抖音");
                抖音();
                文章视频记录判断("zzrw","zz1");
            }
            if(storage.get("zz2")>storagesd.get("zzrw2",0)){
                toast("进入快手");

                文章视频记录判断("zzrw2","zz2");
            }
        }
        攒攒();
    }


    var wwzxhs = function(){
        function sypd(){
            var HM;
            wait("com.frog.MainActivity",null,30);
            sleep(4000);
            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
            HM = text("推荐").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                sleep(3500);
                HM = text("推荐").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("蛙蛙赚").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp3 =className("android.view.ViewGroup").boundsInside(wt*0.5,hg*0.28,wt*0.98,hg*0.75).findOne(10000);
            if (sctp3) {
                sleep(1500);
                // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(3500);
                控件点击(text("允许"));
                for (let ca = 0; ca <3; ca++) {
                    var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.52,hg*0.51).findOne(10000);
                    if (sctp4) {
                        sleep(1500);
                        // longClick(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                        Tap(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                    }else{
                        // longClick(wt*0.26,hg*0.30);
                        Tap(wt*0.26,hg*0.30);
                    }
                    var sctp5 =text("打开").findOne(5000);
                    if (sctp5){
                        sleep(3000);
                        // press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(sctp5.bounds().centerX()+随机数4, sctp5.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3500);
                        break;
                    }
                }
                text("上传成功").findOne(10000);
                var sctp6 =text("提交任务").boundsInside(1,hg*0.7,wt,hg).findOne(10000);
                if (sctp6){
                    sleep(3500);
                    // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(6000);
                }
            }
        }
        function 蛙蛙滑块验证() {
            控件点击(text("点击完成验证"));
            if(text("向右拖动滑块填充拼图").exists() && username!=="" && password!==""){
                try {
                    toast("进入滑块验证");
                    sleep(3500);
                    for (let index = 0; index < 5; index++) {
                        var hkcc=className("android.view.View").boundsInside(1,hg*0.1,wt-1,hg*0.75).findOnce();
                        if(hkcc){
                            var src=images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var clip=images.clip(src,0 ,hkcc.bounds().top ,device.width ,hkcc.bounds().height());
                            images.save(clip,"/sdcard/截图.png" );
                            img =images.read("/sdcard/截图.png");
                            var dt1 = getCode(username, password, img);
                            var dt = dt1.data;
                            if(dt&& dt.res.indexOf("|") != -1){
                                var x1=parseInt(dt.res.split("|")[0].split(",")[0]);
                                var x2=parseInt(dt.res.split("|")[1].split(",")[0]);
                                var huadong=className("android.view.View").text("向右拖动滑块填充拼图").findOnce();
                                if(huadong){
                                    sml_move(x1, huadong.bounds().centerY(), x2, huadong.bounds().centerY(), random(1000,1100));
                                    sleep(2000);
                                    if(!text("向右拖动滑块填充拼图").exists()){
                                        toast("通过滑块");
                                        return true;
                                    }else{
                                        uploadError(username, password,dt1.data.cid);
                                        控件点击(className("android.view.View").boundsInside(wt*0.5,hg*0.2,wt,hg*0.6));
                                        sleep(3000);
                                    }
                                }
                            }else{
                                toast("滑块验证失败，可能余额或网络问题");
                                break;
                            }
                        }else{
                            sleep(3000)
                        }
                    }
                }catch(error){
                    if(hkyz>2){
                        hkyz = 0;
                        throw(error+"，过滑次数太多");
                    }else{
                        hkyz = hkyz + 1;
                    }
                }
                throw("过滑块验证失败");
            }
        }
        function 红酥页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(text("推荐").exists()&&text("我的").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(0,hg*0.62,wt*0.55,hg*0.91));
                    sleep(3000);
                }
                if(text("—— 每日红酥跑单 ——").exists()){
                    return true;
                }
                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.1,hg*0.8,wt*0.9,hg*0.99));
                蛙蛙滑块验证();
                back();
                sleep(3500);
            }
            放弃任务();
            点击签到();
            throw "抖音页没找到";
        }

        function 红酥() {
            for (let dxh = 0; dxh < 15; dxh++) {
                红酥页();
                sleep(3500);
                Tap(wt*0.51,hg*0.91);
                sleep(5000);
                蛙蛙滑块验证();
                if(控件点击(text("去完成"))){
                    sleep(3500);
                    控件点击(text("红酥关注任务"));
                    控件点击(text("红酥点赞任务"));
                }
                if(text("任务已被抢光了").exists()){
                    控件点击(text("取消"));
                    back();
                    sleep(2000);
                    continue;
                }
                var djfz = text("点击复制").findOne(45000);
                if(text("红酥套餐").exists()){
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                    continue;
                }
                if(textContains("关注").exists()&&!text("任务描述：红酥评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2500);
                        控件点击(text("允许"));
                        Tap(wt*0.925,hg*0.338);
                        sleep(5000);
                        控件点击(text("允许"));
                        var tx = 查找控件(Array(id("avatarLayout"),id("nickNameTV")),35);
                        if(tx){
                            sleep(3000);
                            // press(tx.bounds().centerX()+随机数4, tx.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(tx.bounds().centerX()+随机数4, tx.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(4500);
                            var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.2,wt,hg*0.5).findOne(20000);
                            if(gzlrw){
                                sleep(3000);
                                // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(6500);
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                切回APP();
                                上传图片();
                            }else if(text("发消息").exists()){
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                切回APP();
                                上传图片();
                            }else{
                                toast("放弃任务");
                                切回APP();
                                sleep(5000);
                                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                                sleep(2000);
                                控件点击(text("放弃任务"));
                            }
                        }else{
                            toast("放弃任务");
                            切回APP();
                            sleep(5000);
                            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                            sleep(2000);
                            控件点击(text("放弃任务"));
                        }
                    }
                }else if(textContains("点赞").exists()&&!text("任务描述：逗音评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(5000);
                        控件点击(text("允许"));
                        var sdss = text("说点什么…").findOne(40000);
                        if(sdss){
                            sleep(2000);
                            text("说点什么…").findOne(10000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.31,hg*0.32));
                            sleep(2000);
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            切回APP();
                            上传图片();
                        }else{
                            toast("放弃任务");
                            切回APP();
                            sleep(5000);
                            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                            sleep(2000);
                            控件点击(text("放弃任务"));
                        }
                    }
                }else if(textContains("收藏").exists()&&!text("任务描述：逗音评论：根据内容评论10字以上走心评论，否则不通过。").exists()){
                    if(djfz){
                        sleep(3000);
                        // press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(djfz.bounds().centerX()+随机数4, djfz.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(5000);
                        控件点击(text("允许"));
                        var sdss = text("说点什么…").findOne(40000);
                        if(sdss){
                            sleep(2000);
                            if(控件点击(className("android.widget.LinearLayout").boundsInside(wt*0.60,hg*0.8,wt*0.85,hg))){
                                sleep(2000);
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                切回APP();
                                上传图片();
                            }else{
                                toast("放弃任务");
                                切回APP();
                                sleep(5000);
                                控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                                sleep(2000);
                                控件点击(text("放弃任务"));
                            }
                        }else{
                            toast("放弃任务");
                            切回APP();
                            sleep(5000);
                            控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                            sleep(2000);
                            控件点击(text("放弃任务"));
                        }
                    }
                }else{
                    控件点击(className("android.view.ViewGroup").boundsInside(wt*0.8,0,wt,hg*0.2));
                    sleep(2000);
                    控件点击(text("放弃任务"));
                }
            }
        }


        function 放弃任务(){
            back();
            sleep(3500);
            back();
            sleep(3500);
            if(qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(textContains("进行中"),7000)))){
                for (let index = 0; index < 5; index++) {
                    sleep(2500);
                    if(控件点击(text("放弃任务"))){
                        控件点击(text("放弃"));
                    }else{
                        break;
                    }
                }
            }
        }
        function 点击签到(){
            back();
            sleep(3500);
            back();
            sleep(3500);
            qd(Array(Array(text("我的").boundsInside(0,hg*0.75,wt,hg),4000),Array(text("超赞蛙"),4000),Array(text("每日签到"),4000)));
        }

        function 蛙蛙赚小红书(){
            点击启动APP("蛙蛙赚");
            var 主页 =  sypd();
            sleep(3500);
            if (主页 !== null){
                if(storage.get("wwzxhs1")>storagesd.get("wwzxhsrw",0)){
                    红酥();
                    文章视频记录判断("wwzxhsrw","wwzxhs1");
                }
                放弃任务();
                点击签到();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        蛙蛙赚小红书();
    }

    var hlhz = function(){
        var 主页 =null;
        var hlhzwzcs = Math.ceil(storage.get("hlhz1")/4);
        var hlhzgwcs = Math.ceil(storage.get("hlhz2")/4);
        function sypd(){
            wait("c.l.a.views.AppBoxHomeActivity",null,30);
            sleep(2000);
            主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
            if (主页 !== null){
                return 主页;
            }
            for (var j=0;j<15;j++){
                获取权限();
                控件点击(id("img_close"));
                if(text("广告").boundsInside(0,0,wt*0.3,hg*0.3).exists()){
                    var 确定 = text("确定").findOne(35000);
                    if (确定) {
                        sleep(2000);
                        // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    控件点击(id("reward_ad_close"));
                }
                var 确定 = text("确定").findOnce();
                if(确定){
                    // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    var automator = new RootAutomator();
                    automator.
                    sleep(100);
                    automator.exit();
                    press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    sleep(3000);
                }
                控件点击(id("tt_video_ad_close_layout"));
                控件点击(id("tt_video_ad_close"));
                控件点击(id("reward_ad_close"));
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1000);
                }
                if(j>4){
                    back();
                }
                sleep(3500);
                主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
                if (主页 !== null){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("c.l.a.views.AppBoxHomeActivity",null,3);
            sleep(2000);
            主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
            if (主页 !== null)
            {
                return 主页;
            }
            for (var j=0;j<15;j++){
                获取权限();
                控件点击(id("red_type_name"));
                控件点击(id("img_close"));
                if(text("广告").boundsInside(0,0,wt*0.3,hg*0.3).exists()){
                    var 确定 = text("确定").findOne(35000);
                    if (确定) {
                        sleep(2000);
                        // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    控件点击(id("reward_ad_close"));
                }
                var 确定 = text("确定").findOnce();
                if(确定){
                    // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    var automator = new RootAutomator();
                    automator.press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4,120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1000);
                }
                var 关闭 = id("red_packet_timer").findOnce();
                if(关闭){
                    // press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    var automator = new RootAutomator();
                    automator.press(关闭.bounds().centerX()+随机数4,关闭.bounds().centerY()+随机数4, 100);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1000);
                }
                控件点击(id("tt_video_ad_close_layout"));
                控件点击(id("tt_video_ad_close"));
                控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2));
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>4){
                    back();
                }
                sleep(3500);
                主页 = className("android.support.v7.widget.RecyclerView").id("recyvlerview").findOnce();
                if (主页 !== null){
                    return 主页;
                }
            }
            throw "没有找到首页";
        }
        function hlhzwzhd(){
            var hlhzwzhdcs = random(6,8);
            sleep(5000);
            var pd = id("news-title").findOne(10000);
            if(pd==null){
                toast("没找到文章");
                back();
                return false;
            }
            for(i=0;i<hlhzwzhdcs;i++){
                控件点击(id("img_close"));
                if (getRandom(0.3)){
                    随机滑动(Array(0.47,0.53),Array(0.27,0.3),Array(0.47,0.53),Array(0.7,0.75),1000);
                    sleep(4000);
                }else{
                    随机滑动(Array(0.47,0.53),Array(0.7,0.75),Array(0.47,0.53),Array(0.27,0.3),1000);
                    sleep(4000);
                }
            }
            back();
            return true;
        }

        function 视频播放(){
            var 随机播放时间 = random(10,15);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(2000);
                控件点击(id("img_close"));
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
                控件点击(text("继续观看").boundsInside(0,hg*0.4,wt,hg*0.8));
                控件点击(text("点击重试").boundsInside(0,hg*0.45,wt,hg*0.75));
                控件点击(text("继续观看"));
                if(text("立即下载").exists()||text("查看详情 >").exists()){
                    break;
                }
            }
        }
        function 点击视频(){
            for (let index = 0; index < 3; index++) {
                if(控件点击(text("首页"))){
                    back();
                    sleep(2000);
                    控件点击(text("首页"));
                }
                sleep(2500);
                控件点击(text("小视频"));
                sleep(5000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
                if(id("user_nick_name").exists()){
                    return true;
                }
                back();
            }
            throw "没找到作品";
        }

        function spsyhd(){
            随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
            sleep(1500);
        }
        function hlhzxsp(){
            var hlhzspcs = Math.ceil(storage.get("hlhz3",60)/2);
            sleep(2000);
            sypd();
            点击视频();
            for(k = 0;k<hlhzspcs;){
                if(k%3==0){
                    领红包();
                }
                sleep(2000);
                if(id("user_nick_name").exists()&&!text("查看详情 >").exists()&&!text("立即下载").exists()){
                    mzdwz = 0;
                    视频播放();
                    if(!文章视频记录判断("hlhzxsp","hlhz3")){
                        back();
                        lhb2();
                        return false;
                    }
                    k++;
                    spsyhd();
                }else{
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                    spsyhd();
                }
            }
        }
        function syhd(){
            随机滑动(Array(0.47,0.53),Array(0.6,0.61),Array(0.47,0.53),Array(0.25,0.26),1000);
            sypd2();
        }

        function 领红包(){
            if(控件点击(textContains("超级红包").boundsInside(0,0,wt,hg))||控件点击(textContains("大红包").boundsInside(0,0,wt,hg))){
                for (let index = 0; index < 4; index++){
                    控件点击(textContains("超级红包"));
                    控件点击(textContains("大红包"));
                    sleep(1000);
                    if(text("阅读收益").exists()||text("红包收益").exists()){
                        sleep(2000);
                        back();
                        sleep(2000);
                        break;
                    }else{
                        var 确定 = text("确定").findOne(5000);
                        if (确定){
                            // press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(确定.bounds().centerX()+随机数4,确定.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                        }else{
                            back();
                            sleep(2000);
                        }
                    }
                }
            }
        }
        function 欢乐盒子(){
            var xhbq = false;
            点击启动APP("欢乐盒子");
            if(storage.get("hlhz1")> storagesd.get("hlhzwz",[0])){
                sypd();
                sleep(1500);
                控件点击(id("red_type_name"));
                sleep(3000);
                syhd();
                for(k = 0;k<hlhzwzcs;){
                    if(xhbq){
                        控件点击(text("首页"));
                        sleep(1500);
                        sleep(1500);
                        xhbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续6次没找不到视频或文章");
                        return false;
                    }
                    if(k%3==0){
                        领红包();
                    }
                    syhd();
                    mzdwzhd++;
                    sleep(1000);
                    var b = id("from_text").boundsInside(1,主页.bounds().top+10,wt-1,主页.bounds().bottom-10).find();
                    for( q = 0;q < b.length; q++){
                        if(b[q].text().indexOf("广告")==-1&&b[q].text().indexOf("微视")==-1){
                            mzdwzhd=0;
                            try {
                                pclick(b[q].parent().bounds().centerX(),b[q].parent().bounds().centerY());
                            } catch (error) {
                                continue;
                            }
                            sleep(1000);
                            if (hlhzwzhd()){
                                if(!文章视频记录判断("hlhzwz","hlhz1")){
                                    k = hlhzwzcs;
                                    break;
                                }
                                if(k%9==0){
                                    xhbq = true;
                                }
                                k++;
                                mzdwz = 0;
                            }else{
                                if(mzdwz>2){
                                    mzdwz = 0;
                                    k = hlhzwzcs;
                                    break;
                                }else{
                                    mzdwz++;
                                }
                            }
                        }
                        sleep(4000);
                    }
                    syhd();
                }
            }
            if(storage.get("hlhz2") > storagesd.get("hlhzsp",[0])){
                主页 =  sypd();
                if (主页 !== null){
                    sleep(5000);
                    if(控件判空点击("逛逛领币",2,3000,true)==null){
                        back();
                        sleep(2000);
                        控件判空点击("逛逛领币",2,3000,true);
                    }
                    for(k = 0;k<hlhzgwcs;){
                        主页 = waitSPHome(Array("c.l.a.views.AppBoxHomeActivity"),Array(4,"逛一逛即得欢乐币奖励"),30,Array("逛逛领币",1));
                        if (主页 !== null){
                            syhd();
                            if(mzdwzhd>7){
                                toast("连续8次没找不到视频或文章");
                                return false;
                            }
                            mzdwzhd++;
                            sleep(1500);
                            var b = id("retial_price_tv").boundsInside(220,230,wt-1,1220).find();
                            for( q = 0;q < b.length; q++){
                                mzdwzhd = 0;
                                pclick(b[q].bounds().centerX(),b[q].bounds().centerY());
                                sleep(4000);
                                if(id("like_container").findOne(3000)!==null){
                                    for(i=0;i<random(4,6);i++){
                                        控件点击(id("confirm"));
                                        if(getRandom(0.3)){
                                            随机滑动(Array(0.47,0.53),Array(0.27,0.3),Array(0.47,0.53),Array(0.7,0.75),1000);
                                            sleep(5000);
                                        }else{
                                            随机滑动(Array(0.47,0.53),Array(0.7,0.75),Array(0.47,0.53),Array(0.27,0.3),1000);
                                            sleep(5000);
                                        }
                                    }
                                    if(getRandom(0.5)){
                                        if(getRandom(0.7)){
                                            控件判空点击("喜欢",2,2000,true);
                                            sleep(2000);
                                        }
                                        else{
                                            控件判空点击("不喜欢",2,2000,true);
                                            sleep(2000);
                                        }
                                    }
                                    if(!文章视频记录判断("hlhzsp","hlhz2")){
                                        k = hlhzwzcs;
                                        back();
                                        break;
                                    }
                                    k++;
                                    控件点击(id("back_btn").boundsInside(0,0,wt,hg));
                                    sleep(1600);
                                    mzdwz = 0;
                                }else{
                                    back();
                                    sleep(2000);
                                    if(mzdwz>2){
                                        mzdwz = 0;
                                        return false;
                                    }else{
                                        mzdwz++;
                                    }
                                }
                            }
                            syhd();
                        }else{
                            toast("没有找到首页");
                            break;
                        }
                    }
                }else{
                    toast("没有找到首页");
                    return false;
                }
            }
            if(storage.get("hlhz3",40) > storagesd.get("hlhzxsp",[0])){
                hlhzxsp();
            }else{
                return false;
            }
        }
        欢乐盒子();
    }

    var mrbk = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.readtask.app.ui.activity.MainActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("爆音任务").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("爆音任务").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }


        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("每日必看").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            var sctp = id("dy_task_submit_upload_image_1_btn").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(1500);
                var sctp3 = text("最近").findOne(10000);
                if (sctp3) {
                    Tap(wt*0.98,hg*0.3);
                    sleep(1500);
                    // press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp3.bounds().centerX()+随机数4, sctp3.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1500);
                    for (let ca = 0; ca <5; ca++) {
                        var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.5,hg*0.51).findOne(10000);
                        if (sctp4) {
                            sleep(1500);
                            // longClick(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                            Tap(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4);
                        }else{
                            // longClick(wt*0.26,hg*0.30);
                            Tap(wt*0.26,hg*0.30);
                        }
                        var sctp4 =text("打开").findOne(5000);
                        if (sctp4){
                            sleep(1500);
                            // press(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp4.bounds().centerX()+随机数4, sctp4.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            break;
                        }
                    }
                    text("上传截图").boundsInside(1,hg*0.1,wt*0.5,hg*0.5).findOne(10000)
                    for (let index = 0; index < 3; index++) {
                        if(text("提交任务").boundsInside(1,hg*0.5,wt,hg).exists()){
                            控件点击(text("提交任务").boundsInside(1,hg*0.5,wt,hg));
                            sleep(2000);
                        }else{
                            sleep(2000);
                            break;
                        }
                    }
                    var 知道了 = text("知道了").findOne(7000);
                    if(知道了){
                        sleep(800);
                        // press(知道了.bounds().centerX()+随机数20, 知道了.bounds().centerY()+随机数20, 120);
                        var automator = new RootAutomator();
                        automator.press(知道了.bounds().centerX()+随机数20, 知道了.bounds().centerY()+随机数20, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    sleep(2000);
                }
            }
        }

        function 抖音页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(id("window_head_name").text("DY任务").exists()){
                    if(控件点击(text("领取任务"))){
                        var rwyq = text("任务要求：").findOne(10000);
                        if(rwyq){
                            return true;
                        }
                    }
                }
                if(text("暂无可领取任务").exists()){
                    return false;
                }
                if(id("main_tab_main_text_tv").exists()){
                    随机滑动(Array(0.45,0.5),Array(0.52,0.53),Array(0.45,0.5),Array(0.11,0.12),700);
                    if(控件点击(text("爆音任务"))){
                        sleep(2500);
                    }
                    控件点击(text("我知道了"));
                }
                if(zym>6){
                    back();
                    sleep(2000);
                }
            }
            toast("抖音页没找到");
            return false;
        }

        function 抖音(){
            var 允许,任务要求;
            for (let index = 0; index < 20; index++) {
                if(!抖音页()){
                    break;
                }
                任务要求 = id("dy_task_detail_task_detail_tv").findOnce().text();
                if(任务要求.indexOf("留言")!=-1||任务要求.indexOf("评论")!=-1){
                    控件点击(text("放弃任务"));
                    continue;
                }
                if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1){
                    控件点击(text("放弃任务"));
                    continue;
                }
                控件点击(text("打开DY做任务"));
                sleep(1500);
                允许 = text("允许").findOne(3000);
                if (允许){
                    sleep(2000);
                    // press(允许.bounds().centerX()+随机数4, 允许.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(允许.bounds().centerX()+随机数4, 允许.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                sleep(2000);
                textContains("· ").findOne(20000);
                sleep(1000);
                if(任务要求.indexOf("关注")!=-1){
                    if(!控件点击(text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5))){
                        控件点击(text("允许"));
                        Tap(wt*0.925,hg*0.338);
                        var gzlrw = text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(20000);
                        if(gzlrw){
                            sleep(1000);
                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                            截图();
                            切回APP();
                            上传图片();
                        }else if(text("取消关注").exists()){
                            截图();
                            切回APP();
                            上传图片();
                        }else{
                            toast("未能正常识别关注，启动其他方式识别");
                            var imge = images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var point = images.findColor(imge, "#FE2C55", [1, 0, "#FFEAEE"],{
                                region: [wt*0.5, hg*0.22, wt*0.1, hg*0.05],
                                threshold: 29
                            });
                            if(point){
                                Tap(point.x,point.y);
                                sleep(3500);
                            }else{
                                ScreenShot("/sdcard/DCIM/Screenshots");
                                切回APP();
                                上传图片();
                            }
                        }
                    }
                }
                if(任务要求.indexOf("点赞")!=-1){
                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                    sleep(50);
                    Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                }
                sleep(2000);
                if(截图()){
                    切回APP();
                    上传图片();
                }else{
                    toast("放弃任务");
                    切回APP();
                    back();
                    sleep(2000);
                    dyrw = text("dy_head_portrait").findOne(5000);
                    if (dyrw) {
                        sleep(2000);
                        // press(dyrw.bounds().centerX()+随机数4, dyrw.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(dyrw.bounds().centerX()+随机数4, dyrw.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    控件点击(text("放弃任务"));
                }
            }
        }

        function 每日必看(){
            点击启动APP("每日必看");
            var 主页 =  sypd();
            if (主页 !== null){
                toast("开始DY任务");
                sleep(3500);
                if(storage.get("mrbk1")>storagesd.get("mrbkrw",0)){
                    抖音();
                    文章视频记录判断("mrbkrw","mrbk2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        每日必看();
    }


    var yb = function(){
        function 自动更新(){
            if(控件点击(text("去下载"))){
                text("安装").findOne(35000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }
        function sypd(){
            var HM;
            wait("com.app.eh.clickfram.home.HomeActivity",null,30);
            sleep(4000);
            控件点击(idContains("colse"));
            自动更新();
            HM = id("lv_normal_list").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                控件点击(idContains("colse"));
                HM = id("lv_normal_list").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            throw "没有找到首页";
        }
        function 开启权限() {
            var title,checkbox;
            for (let index0 = 0; index0 < 3; index0++) {
                if(控件点击(text("去开启"))){
                    sleep(1000);
                    if(控件点击(text("立即开始"))){
                        break;
                    }
                    if(text("无障碍").exists()||text("服务").exists()){
                        sleep(2000);
                        控件点击(textContains("更多已下载的服务"));
                        for (let index = 0; index < 5; index++){
                            title = id("title").textContains("易帮").findOne(6000);
                            if (title){
                                sleep(2000);
                                // press(title.bounds().centerX()+随机数4, title.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(title.bounds().centerX()+随机数4, title.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                            }
                            checkbox = id("checkbox").findOne(6000);
                            if (checkbox){
                                sleep(2000);
                                // press(checkbox.bounds().centerX()+随机数4, checkbox.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(checkbox.bounds().centerX()+随机数4, checkbox.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                            }
                            if(控件点击(text("确定"))){
                                break;
                            }
                            随机滑动(Array(0.47,0.53),Array(0.65,0.66),Array(0.47,0.53),Array(0.1,0.2),1000);
                            sleep(2000);
                        }
                        back();
                        sleep(1000);
                        back();
                        sleep(2500);
                        if(text("无障碍").exists()||text("服务").exists()){
                            back();
                            sleep(2500);
                        }
                    }
                }else{
                    break;
                }
            }
        }

        function 停止自动挂机(){
            for (let index = 0; index < 20; index++) {
                if(控件点击(text("放弃任务"))||控件点击(id("message_negative"))){
                    break;
                }else{
                    sleep(1000);
                }
            }
        }
        function 自动挂机(类型){
            for (let index = 0; index < 6; index++) {
                控件点击(text("首页"));
                if(控件点击(text("自动挂机"))){
                    sleep(1000);
                    控件点击(text(类型));
                    sleep(1000);
                }
                控件点击(text("开始挂机"));
                if(控件点击(id("message_positive"))||text("放弃任务").exists()){
                    sleep(2500);
                    开启权限();
                    return true;
                }
            }
            return false;
        }
        function 易帮(){
            点击启动APP("易帮");
            var ybkscs = Math.ceil(storage.get("yb1")/4);
            var ybdycs = Math.ceil(storage.get("yb2")/4);
            var csxz = 0;
            sypd();
            if(storage.get("yb2")> storagesd.get("ybdy",0)){
                toast("开始抖音任务");
                自动挂机("DY");
                for (let index2 = 0; index2 < ybdycs;index2++){
                    var 继续  = id("message_positive").findOne(30000);
                    if(继续){
                        csxz = 0;
                        // press(继续.bounds().centerX()+随机数4, 继续.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(继续.bounds().centerX()+随机数4, 继续.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                    }else{
                        csxz = csxz+1;
                        if(csxz>3){
                            toast("可能卡住了退出");
                            停止自动挂机();
                            csxz=0;
                            break;
                        }
                    }
                    if (!文章视频记录判断("ybdy","yb2")){
                        index2= ybdycs;
                    }
                }
            }
            停止自动挂机();
            sypd();
            if(storage.get("yb1")> storagesd.get("ybks",0)){
                sleep(6000);
                自动挂机("KS");
                for (let index = 0; index < ybkscs;index++){
                    var 继续  = id("message_positive").findOne(30000);
                    if(继续){
                        csxz = 0;
                        // press(继续.bounds().centerX()+随机数4, 继续.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(继续.bounds().centerX()+随机数4, 继续.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                    }else{
                        csxz = csxz+1;
                        if(csxz>3){
                            toast("可能卡住了退出");
                            停止自动挂机();
                            csxz=0;
                            break;
                        }
                    }
                    if (!文章视频记录判断("ybks","yb1")){
                        index = slkscs;
                    }
                }
            }
        }
        易帮();
    }

    var qls = function(){
        function sypd(){
            var HM;
            wait("com.zheyun.bumblebee.ui.MainActivity",null,30);
            sleep(8000);
            HM = id("tv_task_status").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                控件点击(idContains("close"));
                获取权限();
                if(j==5){
                    控件点击(text("铃声"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = id("tv_task_status").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function 视频播放(){
            var 随机播放时间 = random(5,6);
            控件点击(id("iv_close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("qlstx",1)!==dayDiff)){
                toast("开始提现");
                sleep(1500);
                if(控件点击(text("我的"))){
                    控件点击(idContains("close"));
                    sleep(3000);
                    if(控件点击(text("去提现"))){
                        控件点击(idContains("close"));
                        sleep(3000);
                        if(控件点击(text("立即提现"))){
                            sleep(3000);
                            var txcg = text("提现记录").findOne(5000);
                            if(txcg){
                                storagesd2.put("klstx",dayDiff);
                            }
                        }
                    }
                }
            }
        }
        function gkgg() {
            for (let index = 0; index < 25; index++) {
                sleep(3000);
                if(text("点击重播").exists()){
                    Tap(wt*0.42,hg*0.063);
                    sleep(2500);
                    if(!控件点击(className("android.widget.Image").boundsInside(wt*0.78,hg*0.23,wt*0.93,hg*0.33))){
                        back();
                    }
                    return true;
                }
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(id("tt_video_ad_close_layout"))||控件点击(text("关闭广告"))){
                    sleep(1000);
                    if(!控件点击(className("android.widget.Image").boundsInside(wt*0.78,hg*0.23,wt*0.93,hg*0.33))){
                        back();
                    }
                    return true;
                }
            }
            Tap(wt*0.42,hg*0.063);
        }
        function 做任务() {
            if(控件点击(text("任务"))){
                text("日常任务").findOne(10000);
                sleep(2500);
                for (let index = 0; index < 5; index++) {
                    if(控件点击(text("领金币").boundsInside(wt*0.5,0,wt,hg*0.9))){
                        sleep(2000);
                        if(text("勋章殿堂").exists()){
                            for (let index = 0; index < 10; index++) {
                                if(控件点击(text("可领取").boundsInside(1,hg*0.05,wt,hg*0.99))){
                                    gkgg();
                                }else{
                                    随机滑动(Array(0.45,0.5),Array(0.72,0.73),Array(0.45,0.5),Array(0.11,0.12),700);
                                }
                                sleep(2500)
                            }
                        }
                    }else{
                        随机滑动(Array(0.45,0.5),Array(0.52,0.53),Array(0.45,0.5),Array(0.11,0.12),700);
                        sleep(2000);
                    }
                }
            }
        }
        function 趣铃声(){
            点击启动APP("趣铃声");
            var qlssx = Math.ceil(storage.get("qls2"));
            var 主页 =  sypd();
            var mzdwz = 0;
            if (主页 !== null){
                for(k = 0;k<qlssx;k++){
                    if(k===4&&storagesd.get("qlsqd",-1)==-1){
                        if(qd(Array(Array(text("任务"),4000),Array(text("领取"),4000)))){
                            gkgg();
                            var gb = id("iv_close").findOne(8000);
                            if (gb) {
                                // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                            }
                            qd(Array(Array(text("铃声"),4000)));
                            storagesd.put("qlsqd",1);
                            sleep(2000);
                        }
                    }
                    if(id("tv_task_status").exists()){
                        mzdwz = 0;
                        控件点击(idContains("close"));
                        视频播放();
                        if (getRandom(0.01)){
                            控件点击(id("tv_like"));
                        }
                        if(!文章视频记录判断("qlssp","qls2")){
                            自动提现();
                            做任务();
                            return false;
                        }
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                    }else{
                        if(mzdwz>4){
                            mzdwz = 0;
                            自动提现();
                            做任务();
                            return false;
                        }else{
                            mzdwz++;
                        }
                        控件点击(idContains("close"));
                        控件点击(text("铃声"));
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.002,0.003),700);
                        sleep(1500);
                    }
                }
                自动提现();
                做任务();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        趣铃声();
    }


    var xlx = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.easy.xlx.WebviewActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("今日收益").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("今日收益").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("小龙虾").findOne(3000);
            if(切回脚本){
                sleep(1000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 打开抖音(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("抖音短视频").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }
        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.8)).findOnce();
                if(开始任务){
                    // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }else{
                    sleep(1000);
                }
            }
            return false;
        }
        function 抖音页() {
            sleep(3000);
            for (let zym = 0; zym < 10; zym++) {
                if(控件点击(textContains("抖音任务 抖音高收益任务"))){
                    sleep(2500);
                }
                if(text("暂无可领取任务").exists()){
                    return false;
                }
                if(text("点赞").exists()){
                    return true;
                }
                if(zym>6){
                    back();
                    sleep(2000);
                }
                sleep(2000);
            }
            文章视频记录判断("xlxrw","xlx2");
            toast("抖音页没找到");
            return false;
        }

        function 抖音(){
            for (let index = 0; index < 20; index++) {
                if(!抖音页()){
                    break;
                }
                var 任务 = textContains("标题:").findOne(3000);
                if(任务){
                    // press(任务.bounds().centerX()+随机数4, 任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(任务.bounds().centerX()+随机数4, 任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    var 复制 = text("复制").findOne(2000);
                    if(复制){
                        // press(复制.bounds().centerX()+随机数4, 复制.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(复制.bounds().centerX()+随机数4, 复制.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        if(打开抖音()){
                            if(进入任务()){
                                textContains("· ").findOne(20000);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(50);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(1000);
                                back();
                                sleep(800);
                            }
                            切回APP();
                        }else{
                            点击启动APP("抖音短视频");
                            切回APP();
                        }
                    }
                }else{
                    for (let index = 0; index < 3; index++) {
                        if(控件点击(text("点赞"))){
                            if(!text("暂时没有任务").exists()){
                                break;
                            }
                        }
                        if(index==2){
                            toast("暂时没有任务,跳过此平台");
                            文章视频记录判断("xlxrw","xlx2");
                            throw "暂时没有任务,跳过此平台";
                        }
                    }
                }
            }
        }

        function 小龙虾(){
            点击启动APP("抖音短视频");
            sleep(3500);
            home();
            点击启动APP("小龙虾");
            var 主页 =  sypd();
            if (主页 !== null){
                toast("开始DY任务");
                sleep(3500);
                if(storage.get("xlx1")>storagesd.get("xlxrw",0)){
                    抖音();
                    文章视频记录判断("xlxrw","xlx2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        小龙虾();
    }




    var hstt = function(){
        var 主页 =null;
        function hsttwzhd(){
            var 滑动次数 = random(13,15);
            sleep(2000);
            var pd = id("waveLoadingView").findOne(5000);
            if(pd === null){
                back();
                return -1;
            }else{
                sleep(2000);
            }
            for(i=0;i<滑动次数;i++){
                var qwyd = text("展开全文   更多奖励").boundsInside(0,hg*0.15,wt,hg*0.85).findOnce();
                if (qwyd){
                    sleep(2000);
                    pclick(random(qwyd.bounds().left+300,qwyd.bounds().right-300),random(qwyd.bounds().top,qwyd.bounds().bottom));
                    sleep(2000);
                }
                if (i>3 && getRandom(0.3)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(2500);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                }
            }
            back();
            return 1;
        }

        function sysx(){
            var fkj = text("头条").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }
        function spsysx(){
            var fkj = text("看看").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }
        function sypd(){
            wait("com.miui.home.launcher.Launcher", null, 30);
            sleep(2000);
            主页 = id("news_view_pager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("花生头条"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("news_view_pager").findOnce();
                if (主页){
                    return 主页;
                }
                sleep(3000);
                主页 = id("news_view_pager").findOnce();
                if (主页)
                {
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.miui.home.launcher.Launcher", null, 3);
            主页 = id("news_view_pager").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(text("花生头条"));
                控件点击(idContains("close"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = id("news_view_pager").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function 领取奖励() {
            if(控件点击(id("line_bottom"))){
                if(!控件点击(text("领取"))){
                    back();
                    sleep(1000);
                }
            }
        }
        function 领取奖励2() {
            if(!id("countdownView").exists()){
                if(控件点击(id("rl_signin"))){
                    if(!控件点击(text("领取"))){
                        back();
                        sleep(1000);
                    }
                }
            }
        }


        function syhd(){
            领取奖励();
            领取奖励2();
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
            sypd2();
        }

        function spsyhd(){
            随机滑动(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.15,0.16),1000);
            sleep(1500);
        }

        function 视频播放(){
            var 随机播放时间 = random(20,30);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(1000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
            }
        }
        function hsttsp(){
            var hsttspcs = Math.ceil(storage.get("hstt2")/4);
            var xhbq = false;
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<hsttspcs;){
                if(xhbq) {
                    spsysx();
                    xhbq = false;
                }else{
                    spsyhd();
                }
                if(mzdwzhd>5){
                    toast("连续"+mzdwzhd+"次没找到视频");
                    return false;
                }
                mzdwzhd++;
                sleep(1000);
                var b = id("tv_video_item_source").boundsInside(0,hg*0.25,wt,hg*0.9).findOnce();
                if(b){
                    mzdwzhd = 0;
                    pclick(random(b.bounds().left,b.bounds().right),random(b.bounds().top,b.bounds().bottom));
                    sleep(4000);
                    if(id("waveLoadingView").exists()){
                        视频播放();
                        if(!文章视频记录判断("hsttsp","hstt2")){
                            return false;
                        }
                        k++;
                        mzdwz = 0;
                        if(k%5===0){
                            xhbq = true;
                        }
                    }
                    back();
                    sleep(2000);
                    if(mzdwz>2){
                        mzdwz = 0;
                        return false;
                    }else{
                        mzdwz++;
                    }
                }
                spsyhd();
            }
            return true;
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("hstttx",1)!==dayDiff)){
                toast("开始提现");
                qd(Array(Array(id("rl_bottom_4"),4000),Array(text("提现兑换"),4000),Array(text("立即提现"),4000)));
                sleep(3800);
                storagesd2.put("hstttx",dayDiff);
            }
        }

        function 花生头条(){
            点击启动APP("花生头条");
            var xhbq = false;
            var qdbq = false;
            var ydjs = null;
            var hsttwzcs = Math.ceil(storage.get("hstt1")/4);
            if(storage.get("hstt1")> storagesd.get("hsttwz",[0])){
                sypd();
                sleep(2000);
                控件点击(id("main1_timer_image1"));
                for(k = 0;k<hsttwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("hsttqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(id("rl_signin"),4000),Array(text("读读"),8000)))){
                            sypd2();
                            storagesd.put("hsttqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b =id("tv_news_three_picture_source").boundsInside(1,主页.bounds().top+hg*0.05,wt-1,主页.bounds().bottom-hg*0.007).find();
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                        ydjs = hsttwzhd();
                        if (ydjs!== -1){
                            if(!文章视频记录判断("hsttwz","hstt1")){
                                k = hsttwzcs;
                                break;
                            }
                            k++;
                            mzdwz = 0;
                            if(k===1){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                        }else{
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = hsttwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                    }

                    syhd();
                }
            }
            if(storage.get("hstt2") > storagesd.get("hsttsp",[0])){
                hsttsp();
            }else{
                return false;
            }
            自动提现();
        }
        花生头条();
    }


    var cddsp = function(){
        function sypd(){
            var HM;
            wait("com.zf.shuashua.MainActivity",null,30);
            sleep(3000);
            HM = id("recycler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = id("recycler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("cddsptx",1)>4)){
                sleep(1500);
                if(qd(Array(Array(text("我的"),4000),Array(text("当前余额"),4000),Array(text("立即提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("cddsptx",dayDiff);
                    sleep(3500);
                    back();
                    sleep(2000);
                    qd(Array(Array(text("首页"),4000)));
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("count_down_view").exists()){
                    return true;
                }
                控件点击(idContains("close"));
                随机滑动(Array(0.45,0.5),Array(0.51,0.52),Array(0.45,0.5),Array(0.001,0.002),700);
                sleep(2000);
            }
            自动提现();
            toast("找不到视频页");
            throw "找不到视频页";

        }
        function 长豆短视频(){
            点击启动APP("长豆短视频");
            var cddspsx = Math.ceil(storage.get("cddsp2")/4);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<cddspsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("cddspqd",-1)==-1){
                        if(qd(Array(Array(id("gift"),4000)))){
                            sleep(4000);
                            if(qd(Array(Array(text("签到"),10000)))){
                                qd(Array(Array(text("首页"),4000)));
                                storagesd.put("cddspqd",1);
                                sleep(2000);
                            }
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("cddspsp","cddsp2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        长豆短视频();
    }

    var ms = function(){
        function sypd(){
            var HM;
            wait("com.yanhui.moshi.activity.NewMainActivity",null,30);
            sleep(3000);
            HM = id("vod_recycler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = id("vod_recycler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function 视频播放(){
            var 随机播放时间 = random(5,6);
            控件点击(text("我知道了"));
            控件点击(text("继续观看"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }


        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                sleep(3000);
                if(id("input").exists()||text("说点什么...").exists()){
                    return true;
                }
                if(控件点击(id("tv_title").boundsInside(0,hg*0.1,wt,hg*0.9))){
                    sleep(1000);
                }else{
                    随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),700);
                    sleep(2000);
                }
                控件点击(idContains("close"));
                控件点击(text("首页"));

            }
            toast("找不到视频页");
            throw "找不到视频页";

        }
        function 魔视(){
            点击启动APP("魔视");
            var mssx = Math.ceil(storage.get("ms2")/4);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<mssx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("msqd",-1)==-1){
                        if(qd(Array(Array(text("任务"),4000),Array(id("close"),10000)))){
                            sleep(3500);
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("msqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("mssp","ms2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        魔视();
    }

    var yydsp = function(){
        function sypd(){
            var HM;
            wait("com.liquid.box.home.HomeActivity",null,30);
            sleep(8000);
            HM = id("attention_recyler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续播放"));
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                if(控件点击(id("tv_rewardButton"))){
                    gkgg();
                }
                sleep(3500);
                HM = id("attention_recyler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(text("继续播放"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("yydsptx",1)>4)){
                sleep(1500);
                if(qd(Array(Array(text("我"),4000),Array(text("金币账户(币)"),4000),Array(text("去提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("yydsptx",dayDiff);
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("layout_like").exists()){
                    return true;
                }
                控件点击(id("user_nick_name").boundsInside(1,hg*0.2,wt,hg*0.9));
                控件点击(idContains("close"));
                控件点击(text("继续播放"));
                随机滑动(Array(0.61,0.62),Array(0.81,0.82),Array(0.61,0.62),Array(0.001,0.002),700);
                sleep(2000);
            }
            toast("找不到视频页");
            自动提现();
            throw "找不到视频页";
        }
        function 有颜短视频(){
            点击启动APP("有颜短视频");
            var yydspsx = Math.ceil(storage.get("yydsp2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<yydspsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("yydspqd",-1)==-1){
                        if(qd(Array(Array(className("android.widget.RelativeLayout").boundsInside(wt*0.48,hg*0.8,wt*0.78,hg),4000)))){
                            if(qd(Array(Array(text("立即签到"),10000)))){
                                gkgg();
                            }
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("yydspqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("yydspsp","yydsp2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.001,0.002),700);
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        有颜短视频();
    }

    var nhllq = function(){
        function sypd(){
            var HM;
            wait("com.tengu.explorer.main.MainActivity",null,30);
            sleep(8000);
            HM = id("tv_tab_name").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                if(j==5){
                    控件点击(text("小视频"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = id("tv_tab_name").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 做任务() {
            if(qd(Array(Array(text("赚钱技巧"),4000)))){
                text("我的钱包").findOne(15000);
                var 领金币 = text("领金币").findOnce();
                if (领金币) {
                    // press(领金币.bounds().centerX()+随机数4, 领金币.bounds().centerY()-hg*0.03, 120);
                    var automator = new RootAutomator();
                    automator.press(领金币.bounds().centerX()+随机数4, 领金币.bounds().centerY()-hg*0.03, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    gkgg();
                    控件点击(className("android.widget.Image").boundsInside(wt*0.7,hg*0.25,wt,hg*0.4));
                }
                for (let index = 0; index < 6; index++) {
                    if(控件点击(text("点击领取"))){
                        sleep(1000);
                        控件点击(className("android.widget.Image").boundsInside(wt*0.7,hg*0.25,wt,hg*0.4));
                    }
                    if(控件点击(text("神秘大礼"))||控件点击(text("幸运抽奖"))){
                        sleep(1000);
                        if(控件点击(text("领取奖励"))){
                            gkgg();
                            控件点击(className("android.widget.Image").boundsInside(wt*0.7,hg*0.25,wt,hg*0.4));
                        }
                    }
                }
            }
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(id("playImg"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("nhllqtx",1)!==dayDiff)){
                sleep(1500);
                if(qd(Array(Array(text("我的"),4000),Array(text("提现兑换"),7000),Array(text("立即提现"),7000),Array(text("确认提现"),7000),Array(text("观看一个广告可立即提现"),7000)))){
                    Tap(wt*0.5,hg*0.41);
                    gkgg();
                    back();
                    sleep(2000);
                    storagesd2.put("nhllqtx",dayDiff);
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("tv_name").exists()){
                    return true;
                }
                控件点击(idContains("close"));
                随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),700);
                sleep(2000);
                if(index>3){
                    控件点击(text("小视频"));
                }
            }
            自动提现();
            toast("找不到视频页");
            throw "找不到视频页";
        }
        function 你好浏览器(){
            点击启动APP("你好浏览器");
            var nhllqsx = Math.ceil(storage.get("nhllq2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<nhllqsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("nhllqqd",-1)==-1){
                        if(qd(Array(Array(text("赚钱技巧"),4000)))){
                            sleep(5000);
                            qd(Array(Array(text("小视频"),4000)));
                            storagesd.put("nhllqqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("nhllqsp","nhllq2")){
                        自动提现();
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                }
                自动提现();
                做任务();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        你好浏览器();
    }

    var fqmfxs = function(){
        function gkgg(){
            sleep(20000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.RelativeLayout").boundsInside(wt*0.8,0,wt,hg*0.2))||控件点击(text("")||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2)))){
                    sleep(2000);
                    控件点击(text("确定"));
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.05);
            back();
            sleep(2000);
        }

        function sypd(){
            var HM;
            wait("com.dragon.read.pages.main.MainFragmentActivity",null,30);
            sleep(4000);
            HM = text("完整榜单").findOnce();
            控件点击(idContains("close"));
            控件点击(text("再看一会"));
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                控件点击(idContains("close"));
                HM = text("完整榜单").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 进入文章() {
            for (let index = 0; index <6; index++) {
                sleep(3000);
                var xsbt = searchTwice(textContains("万热度").boundsInside(wt*0.1,hg*0.2,wt,hg*0.9),textContains("人在读").boundsInside(wt*0.1,hg*0.2,wt,hg*0.9)).findOnce();
                if(xsbt){
                    sleep(2000);
                    // press(xsbt.bounds().centerX()+随机数4, xsbt.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(xsbt.bounds().centerX()+随机数4, xsbt.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3500);
                }else{
                    随机滑动(Array(0.47,0.52),Array(0.51,0.52),Array(0.47,0.52),Array(0.01,0.02),1000);
                    sleep(3500);
                }
                if(控件点击(text("免费阅读"))){
                    return true;
                }
                if(index>3){
                    back();
                    sleep(2000);
                }
            }
            if(!文章视频记录判断("fqmfxswz","fqmfxs1")){
                toast("任务到达上限");
                return false;
            }
            throw "没找到首页";
        }
        function 番茄免费小说(){
            点击启动APP("番茄免费小说");
            var 主页 =  sypd();
            if (主页 !== null){
                进入文章();
                for (let index = 0; index < 600; index++) {
                    sleep(random(9000,10000));
                    随机滑动(Array(0.85,0.86),Array(0.31,0.32),Array(0.01,0.01),Array(0.31,0.32),1000);
                    if(控件点击(text("看视频"))){
                        gkgg();
                    }
                    var 读完 = text("读了这本书的人还读过").findOnce();
                    if (读完) {
                        // press(读完.bounds().centerX()+随机数4, 读完.bounds().centerY()+hg*0.12, 120);
                        var automator = new RootAutomator();
                        automator.press(读完.bounds().centerX()+随机数4, 读完.bounds().centerY()+hg*0.12, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                    控件点击(text("确定"));
                }
                if(!文章视频记录判断("fqmfxswz","fqmfxs1")){
                    toast("任务到达上限");
                    return false;
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        番茄免费小说();
    }

    var xchdsp = function(){
        function sypd(){
            var HM;
            wait("com.liquid.box.home.HomeActivity",null,30);
            sleep(8000);
            HM = id("attention_recyler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续播放"));
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                if(控件点击(id("tv_rewardButton"))){
                    gkgg();
                }
                sleep(3500);
                HM = id("attention_recyler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(text("继续播放"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("xchdsptx",1)>4)){
                sleep(1500);
                if(qd(Array(Array(text("我"),4000),Array(text("金币账户(币)"),4000),Array(text("去提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("xchdsptx",dayDiff);
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("layout_like").exists()){
                    return true;
                }
                控件点击(id("user_nick_name").boundsInside(1,hg*0.2,wt,hg*0.9));
                控件点击(idContains("close"));
                控件点击(text("继续播放"));
                随机滑动(Array(0.61,0.62),Array(0.81,0.82),Array(0.61,0.62),Array(0.001,0.002),700);
                sleep(2000);
            }
            toast("找不到视频页");
            throw "找不到视频页";
        }
        function 小吃货短视频(){
            点击启动APP("小吃货短视频");
            var xchdspsx = Math.ceil(storage.get("xchdsp2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<xchdspsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("xchdspqd",-1)==-1){
                        if(qd(Array(Array(className("android.widget.RelativeLayout").boundsInside(wt*0.48,hg*0.8,wt*0.78,hg),4000)))){
                            if(qd(Array(Array(text("立即签到"),10000)))){
                                gkgg();
                            }
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("xchdspqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("xchdspsp","xchdsp2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.001,0.002),700);
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        小吃货短视频();
    }

    var  kddsp = function(){
        function sypd(){
            var HM;
            wait("com.liquid.box.home.HomeActivity",null,30);
            sleep(8000);
            HM = id("attention_recyler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续播放"));
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                if(控件点击(id("tv_rewardButton"))){
                    gkgg();
                }
                sleep(3500);
                HM = id("attention_recyler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(text("继续播放"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("kddsptx",1)>4)){
                sleep(1500);
                if(qd(Array(Array(text("我"),4000),Array(text("金币账户(币)"),4000),Array(text("去提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("kddsptx",dayDiff);
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("layout_like").exists()){
                    return true;
                }
                控件点击(id("user_nick_name").boundsInside(1,hg*0.2,wt,hg*0.9));
                控件点击(idContains("close"));
                控件点击(text("继续播放"));
                随机滑动(Array(0.61,0.62),Array(0.81,0.82),Array(0.61,0.62),Array(0.001,0.002),700);
                sleep(2000);
            }
            toast("找不到视频页");
            自动提现();
            throw "找不到视频页";
        }
        function 快逗短视频(){
            点击启动APP("快逗短视频");
            var kddspsx = Math.ceil(storage.get("kddsp2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<kddspsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("kddspqd",-1)==-1){
                        if(qd(Array(Array(className("android.widget.RelativeLayout").boundsInside(wt*0.48,hg*0.8,wt*0.78,hg),4000)))){
                            if(qd(Array(Array(text("立即签到"),10000)))){
                                gkgg();
                            }
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("kddspqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("kddspsp","kddsp2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.001,0.002),700);
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        快逗短视频();
    }


    var jkb = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.roc.dy.ui.activity.WebviewActivity",null,30);
            sleep(4000);
            自动更新();
            HM = text("电音账号").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                HM = text("电音账号").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("集卡帮").findOne(3000);
            if(切回脚本){
                sleep(1000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 打开抖音(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("抖音短视频").findOne(3000);
            if(切回脚本){
                sleep(2000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }
        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.8)).findOnce();
                if(开始任务){
                    // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }else{
                    sleep(1000);
                }
            }
            return false;
        }
        function 抖音页() {
            sleep(1000);
            for (let zym = 0; zym < 10; zym++) {
                控件点击(text("确定"));
                if(text("电音账号").exists()){
                    return true;
                }
                if(text("点赞提交").exists()){
                    return true;
                }
                if(zym>6){
                    back();
                    sleep(2000);
                }
                sleep(2000);
            }
            文章视频记录判断("jkbrw","jkb2");
            toast("抖音页没找到");
            return false;
        }

        function 抖音点赞(){
            for (let index = 0; index < 20; index++) {
                if (!抖音页()){
                    toast("没有找到首页");
                    break;
                }
                Tap(wt*0.18,hg*0.5);
                sleep(3500);
                if(text("未能获取到任务,请切换账号").exists()){
                    控件点击(text("确定"));
                    continue;
                }
                Tap(wt*0.5,hg*0.5);
                sleep(3000);
                if(打开抖音()){
                    if(进入任务()){
                        textContains("· ").findOne(20000);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(50);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(3000);
                        back();
                        sleep(800);
                        切回APP();
                        if(抖音页()){
                            Tap(wt*0.8,hg*0.5);
                            sleep(1500);
                            var 确定 = text("确定").findOne(10000);
                            if(确定){
                                sleep(1000);
                                // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2500);
                            }
                        }
                    }else{
                        切回APP();
                    }
                }else{
                    点击启动APP("抖音短视频");
                    切回APP();
                }
            }
        }

        function 抖音关注(){
            for (let index = 0; index < 5; index++) {
                if (!抖音页()){
                    toast("没有找到首页");
                    break;
                }
                Tap(wt*0.18,hg*0.56);
                sleep(3500);
                if(text("未能获取到任务,请切换账号").exists()){
                    控件点击(text("确定"));
                    sleep(55000
                    );
                    continue;
                }
                Tap(wt*0.5,hg*0.56);
                sleep(3000);
                if(打开抖音()){
                    if(进入任务()){
                        var gzlrw = text("关注").findOne(10000);
                        if(gzlrw){
                            sleep(3500);
                            // press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX()+随机数4, gzlrw.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2500);
                        }else{
                            var imge = images.read("/sdcard/DCIM/Screenshots/"+ScreenShot("/sdcard/DCIM/Screenshots"));
                            var point = images.findColor(imge, "#FE2C55", [1, 0, "#FFEAEE"],{
                                region: [wt*0.5, hg*0.22, wt*0.1, hg*0.05],
                                threshold: 29
                            });
                            if(point){
                                Tap(point.x,point.y);
                                sleep(3500);
                            }
                        }
                        back();
                        sleep(800);
                        切回APP();
                        if(抖音页()){
                            Tap(wt*0.8,hg*0.56);
                            sleep(1500);
                            var 确定 = text("确定").findOne(10000);
                            if(确定){
                                sleep(1000);
                                // press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(确定.bounds().centerX()+随机数4, 确定.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2500);
                            }
                        }
                    }else{
                        切回APP();
                    }
                    sleep(45000);
                }else{
                    点击启动APP("抖音短视频");
                    切回APP();
                }
            }
        }
        function 集卡帮(){
            点击启动APP("抖音短视频");
            sleep(3500);
            home();
            点击启动APP("集卡帮");
            var 主页 =  sypd();
            if (主页 !== null){
                toast("开始DY任务");
                sleep(3500);
                if(storage.get("jkb1")>storagesd.get("jkbrw",0)){
                    抖音点赞();
                    抖音关注();
                    文章视频记录判断("jkbrw","jkb2");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        集卡帮();
    }



    var llxhs = function(){
        function 自动更新(){
            if(控件点击(text("确定"))){
                text("权限详情").findOne(50000);
                var 设置 = text("设置").findOnce();
                if (设置) {
                    Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                    sleep(2000);
                    var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOne(7000);
                    if (打开运行) {
                        Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                        sleep(2000);
                        var 确定 = text("确定").findOne(5000);
                        if (确定) {
                            Tap(random(确定.bounds().left, 确定.bounds().right), random(确定.bounds().top, 确定.bounds().bottom));
                            sleep(2000);
                            back();
                        }
                    }
                }
                sleep(7000);
                控件点击(text("安装"));
                var 打开 = text("打开").findOne(10000);
                if (打开) {
                    // press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(打开.bounds().centerX()+随机数4, 打开.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }
            }
        }

        function sypd(){
            var HM;
            wait("com.toutiaozuqiu.and.liuliu.StartActivity","com.toutiaozuqiu.and.liuliu.MainActivity",30);
            sleep(4000);
            控件点击(id("activity_start_btn"));
            自动更新();
            HM = id("navigation_tasks").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                sleep(3500);
                自动更新();
                控件点击(id("activity_start_btn"));
                HM = id("navigation_tasks").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 重新授权() {
            if(控件点击(text("重新授权验证"))){
                var gkdysp = text("点我授权绑定").findOne(15000);
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    var gkdysp = text("授权并登陆").findOne(15000);
                    if (gkdysp) {
                        sleep(1500);
                        // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                    }
                }
            }
            控件点击(text("授权并登陆"));
        }

        function 点击进入(){
            for (let index = 0; index < 9; index++) {
                sleep(2000);
                重新授权();
                var 领取任务 = text("领取任务").findOnce();
                if(领取任务){
                    sleep(1500);
                    // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3000);
                }
                if(text("66联盟").exists()){
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.1,0.2),1000);
                }
                控件点击(text("我知道了"));
                if(text("打开“小红薯”做任务").exists()){
                    return true;
                }
                if(控件点击(text("授权并登录"))){
                    sleep(4500);
                    控件点击(text("领取任务"));
                }
                var gkdysp = text("阅读小红薯").findOnce();
                if (gkdysp) {
                    sleep(1500);
                    // press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(gkdysp.bounds().centerX()+随机数4, gkdysp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2500);
                }
                if(控件点击(text("好的"))){
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.1,0.2),1000);
                    随机滑动(Array(0.47,0.53),Array(0.81,0.82),Array(0.47,0.53),Array(0.1,0.2),1000);
                    var 开始在任务 = text("开始做任务").findOne(7000);
                    if (开始在任务) {
                        // press(开始在任务.bounds().centerX()+随机数4, 开始在任务.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(开始在任务.bounds().centerX()+随机数4, 开始在任务.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                    }
                }
                if(个人中心()){
                    continue;
                }
                if(text("提交任务").exists()){
                    back();
                    sleep(1600);
                }
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    toast("暂时没有任务跳过此平台");
                    文章视频记录判断("llxhsrw","llxhs1");
                    return false;
                }
            }
            toast("没有找到小红书页面");
            文章视频记录判断("llxhsrw","llxhs1");
            return false;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("66联盟").findOne(3000);
            if(切回脚本){
                sleep(1000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 相册上传图片(){
            var sctp = text("上传截图").className("android.widget.Button").findOne(10000);
            if (sctp) {
                sleep(1500);
                // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                sleep(2500);
                var sctp3 = text("最近").findOne(5000);
                if (sctp3) {
                    sleep(1000);
                    for (let ca = 0; ca <3; ca++) {
                        var sctp4 =className("android.widget.RelativeLayout").boundsInside(1,hg*0.05,wt*0.65,hg*0.65).findOne(5000);
                        if (sctp4) {
                            toast("进入点击");
                            sleep(1500);
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("提交任务").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }else{
                            Tap(wt*0.26,hg*0.4);
                            sleep(1700);
                            if(text("提交任务").exists()){
                                break;
                            }
                            // longClick(wt*0.26,hg*0.4);
                            Tap(wt*0.26,hg*0.4);
                        }
                        var sctp5 = text("打开").findOne(5000)
                        if (sctp5){
                            sleep(1500);
                            // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            break;
                        }
                    }
                }
            }
        }
        function 上传图片() {
            var  快速截图 = text("点击快速上传截图").findOne(3500);
            if(快速截图){
                // press(快速截图.bounds().centerX()+随机数4,快速截图.bounds().centerY()+随机数4, 120);
                var automator = new RootAutomator();
                automator.press(快速截图.bounds().centerX()+随机数4,快速截图.bounds().centerY()+随机数4, 120);
                sleep(100);
                automator.exit();
                
                var  重新上传 = text("重新上传").findOne(11000);
                if(!重新上传){
                    相册上传图片();
                }
            }else{
                相册上传图片();
            }
            控件点击(text("提交任务"));
            控件点击(text("提交截图"));
            if(控件点击(text("确定"))){
                控件点击(text("提交任务"));
                控件点击(text("提交截图"));
                if(控件点击(text("确定"))){
                    控件点击(text("提交任务"));
                    控件点击(text("提交截图"));
                }
            }
            sleep(2500);
        }


        function 个人中心(){
            if(控件点击(text("去验证"))){
                var 我知道了 = text("我知道了").findOne(5000);
                if (我知道了) {
                    sleep(1000);
                    // press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(我知道了.bounds().centerX()+随机数4, 我知道了.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
                if(控件点击(textContains("打开“爆音”").className("android.widget.Button"))){
                    控件点击(text("允许"));
                    wait("com.ss.android.ugc.aweme.detail.ui.DetailActivity","com.ss.android.ugc.aweme.main.MainActivity",30);
                    控件点击(text("我知道了"));
                    我 = text("我").boundsInside(wt*0.8,hg*0.8,wt,hg).findOne(20000);
                    if (我) {
                        sleep(2000);
                        // press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        var automator = new RootAutomator();
                        automator.press(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4, 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(2000);
                        控件点击(text("我知道了"));
                        控件点击(text("以后再说"));
                        控件点击(text("我").boundsInside(wt*0.8,hg*0.8,wt,hg));
                        控件点击(text("以后再说"));
                        控件点击(text("我知道了"));
                        sleep(6000);
                        var bjzl = text("编辑资料").findOne(20000);
                        if(bjzl){
                            ScreenShot("/sdcard/DCIM/Screenshots");
                            切回APP();
                            上传图片();
                            return false;
                        }
                    }else{
                        切回APP();
                    }
                }
                return true;
            }else{
                return false;
            }
        }

        function 放弃任务(){
            back();
            sleep(1000);
            切回APP();
            back();
            sleep(1500);
            控件点击(text("放弃任务"));
            sleep(1500);
            控件点击(text("确定"));
        }
        function 完成任务(){
            if(截图()){
                back();
                sleep(1000);
                切回APP();
                上传图片();
            }else{
                back();
                sleep(1000);
                切回APP();
                back();
                sleep(1500);
                控件点击(text("放弃任务"));
                sleep(1500);
                控件点击(text("确定"));
            }
        }
        function 小红书(){
            var 任务要求;
            for (let index = 0; index < 20; index++) {
                toast("开始任务");
                if(!点击进入()){
                    break;
                }
                sleep(2000);
                var yq = id("task_require_2").findOnce();
                if(yq){
                    var 任务要求 = yq.text();
                }else{
                    任务要求 = null;
                }
                if(任务要求.indexOf("留言")!=-1||任务要求.indexOf("评论")!=-1||text("样图二").exists()){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                if(text("样图").exists()&&!textContains("留言"),exists()){
                    控件点击(text("打开“小红薯”做任务"));
                    控件点击(text("允许"));
                    if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1&&任务要求.indexOf("收藏")!=-1){
                        var gzlrw = text("关注").boundsInside(wt*0.65,hg*0.01,wt,hg*0.3).findOne(35000);
                        if(gzlrw){
                            sleep(3000);
                            // press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            var 收藏 = text("收藏").boundsInside(wt*0.65,hg*0.8,wt,hg).findOne(5000);
                            if(收藏){
                                sleep(3000);
                                // press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                                var automator = new RootAutomator();
                                automator.press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                sleep(50);
                                Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                                完成任务();
                            }else{
                                放弃任务();
                            }
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("点赞")!=-1){
                        var gzlrw = text("关注").boundsInside(wt*0.65,hg*0.01,wt,hg*0.3).findOne(35000);
                        if(gzlrw){
                            sleep(3000);
                            // press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            完成任务();
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("点赞")!=-1&&任务要求.indexOf("收藏")!=-1){
                        var 收藏 = text("收藏").boundsInside(wt*0.65,hg*0.8,wt,hg).findOne(35000);
                        if(收藏){
                            sleep(3000);
                            // press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                            var automator = new RootAutomator();
                            automator.press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            完成任务();
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("关注")!=-1&&任务要求.indexOf("收藏")!=-1){
                        var gzlrw = text("关注").boundsInside(wt*0.65,hg*0.01,wt,hg*0.3).findOne(35000);
                        if(gzlrw){
                            sleep(3000);
                            // press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            var automator = new RootAutomator();
                            automator.press(gzlrw.bounds().centerX(), gzlrw.bounds().centerY(), 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            var 收藏 = text("收藏").boundsInside(wt*0.65,hg*0.8,wt,hg).findOne(5000);
                            if(收藏){
                                sleep(3000);
                                // press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                                var automator = new RootAutomator();
                                automator.press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                                完成任务();
                            }else{
                                放弃任务();
                            }
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("关注")!=-1){
                        var 关注 = text("关注").boundsInside(wt*0.65,hg*0.01,wt,hg*0.3).findOne(35000);
                        if (关注) {
                            // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(1500);
                            完成任务();
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("收藏")!=-1){
                        var 收藏 = text("收藏").boundsInside(wt*0.65,hg*0.8,wt,hg).findOne(35000);
                        if(收藏){
                            sleep(3000);
                            // press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                            var automator = new RootAutomator();
                            automator.press(收藏.bounds().centerX(), 收藏.bounds().centerY(), 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(2000);
                            完成任务();
                        }else{
                            放弃任务();
                        }
                    }else if(任务要求.indexOf("点赞")!=-1){
                        var gzlrw = text("关注").boundsInside(wt*0.65,hg*0.01,wt,hg*0.3).findOne(35000);
                        if(gzlrw){
                            sleep(2000);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            sleep(50);
                            Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                            完成任务();
                        }else{
                            放弃任务();
                        }
                    }
                    if(text("请上传截图，再提交任务").exists()){
                        控件点击(text("确定"));
                        上传图片();
                    }
                    控件点击(text("确定"));
                }else{
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                }
            }
        }

        function 六六阅读(){
            点击启动APP("66联盟");
            var 主页 =  sypd();
            if (主页 !== null){
                if(storage.get("llxhs1")>storagesd.get("llxhsrw",0)){
                    小红书()();
                    文章视频记录判断("llxhsrw","llxhs1");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        六六阅读();
    }


    var hbhz = function(){
        var 主页 =null;
        function hbhzwzhd(){
            var 滑动次数 = random(13,15);
            sleep(2000);
            var pd = text("朋友圈分享").findOne(5000);
            if(pd === null){
                back();
                return -1;
            }else{
                sleep(2000);
            }
            for(i=0;i<滑动次数;i++){
                if (i>3 && getRandom(0.1)) {
                    随机滑动(Array(0.47,0.52),Array(0.27,0.3),Array(0.47,0.52),Array(0.7,0.75),1000);
                    sleep(2500);
                }else {
                    随机滑动(Array(0.47,0.52),Array(0.7,0.75),Array(0.47,0.52),Array(0.27,0.3),1000);
                    sleep(2500);
                }
            }
            看小视频();
            back();
            return 1;
        }

        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("cancle"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 看小视频() {
            Tap(wt*0.83,hg*0.85);
            sleep(2000);
            if(控件点击(textContains("看小视频，"))){
                gkgg();
            }else{
                back();
                sleep(1000);
            }
        }

        function sysx(){
            var fkj = text("头条").findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }
        function spsysx(){
            var fkj = text("视频").boundsInside(wt*0.05,hg*0.7,wt*0.6,hg).findOnce();
            if(fkj){
                sleep(1500);
                Tap(random(fkj.bounds().left+10,fkj.bounds().right-10),random(fkj.bounds().top+10,fkj.bounds().bottom-10));
                sleep(2000);
            }
        }
        function sypd(){
            wait("com.bang.redbox.ui.box.activity.MainBox2Activity", null, 30);
            sleep(2000);
            主页 = id("home_recycle").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续赚钱"));
                控件点击(id("tt_insert_dislike_icon_img"));
                控件点击(idContains("close"));
                if(j===4){
                    sysx();
                }
                主页 = id("home_recycle").findOnce();
                if (主页){
                    return 主页;
                }
                sleep(3000);
                主页 = id("home_recycle").findOnce();
                if (主页)
                {
                    return 主页;
                }
                if(j>=6){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function sypd2(){
            wait("com.bang.redbox.ui.box.activity.MainBox2Activity", null, 3);
            主页 = id("home_recycle").findOnce();
            if (主页){
                return 主页;
            }
            for (var j=0;j<4;j++){
                控件点击(text("继续赚钱"));
                控件点击(id("tt_insert_dislike_icon_img"));
                控件点击(idContains("close"));
                if(j===2){
                    sysx();
                }
                sleep(3000);
                主页 = id("home_recycle").findOnce();
                if (主页){
                    return 主页;
                }
                if(j>=2){
                    back();
                }
            }
            throw "没有找到首页";
        }

        function 领取奖励() {
            if(控件点击(text("小时红包"))){
                sleep(3000);
                控件点击(id("dcs_iv_close_ad"));
                sleep(3000);
                控件点击(id("tt_insert_dislike_icon_img"));
            }
        }

        function syhd(){
            领取奖励();
            sypd2();
            UpOrDownSlide(true,1000,主页);
            sleep(1500);
            sypd2();
        }

        function 视频播放(){
            var 随机播放时间 = random(10,12);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                sleep(1000);
                控件点击(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(text("邀请收徒").exists()){
                    back();
                    sleep(1500);
                }
                if(id("ic_like").exists()){
                    return true;
                }
                控件点击(idContains("close"));
                随机滑动(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),700);
                sleep(2000);
                if(index>3){
                    控件点击(text("视频").boundsInside(wt*0.05,hg*0.7,wt*0.6,hg));
                }
            }
            自动提现();
            toast("找不到视频页");
            throw "找不到视频页";
        }
        function hbhzsp(){
            var hbhzspcs = Math.ceil(storage.get("hbhz2")/4);
            sleep(2000);
            sypd();
            spsysx();
            for(k = 0;k<hbhzspcs;){
                进入视频();
                if(k===4&&storagesd.get("nhllqqd",-1)==-1){
                    if(qd(Array(Array(text("赚钱技巧"),4000)))){
                        sleep(5000);
                        qd(Array(Array(text("小视频"),4000)));
                        storagesd.put("nhllqqd",1);
                        sleep(2000);
                    }
                }
                视频播放();
                看小视频();
                if(!文章视频记录判断("nhllqsp","nhllq2")){
                    自动提现();
                    return false;
                }
                sleep(1500);
                随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("hbhztx",1)!==dayDiff)){
                toast("开始提现");
                if(qd(Array(Array(text("我的"),4000),Array(text("提现兑换"),4000),Array(text("立即提现"),7000),Array(text("确认提现").boundsInside(0,hg*0.2,wt,hg),6000)))){
                    sleep(3800);
                    storagesd2.put("hbhztx",dayDiff);
                    back();
                }
            }
        }

        function 红包盒子(){
            点击启动APP("红包盒子");
            var xhbq = false;
            var qdbq = false;
            var ydjs = null;
            var hbhzwzcs = Math.ceil(storage.get("hbhz1")/4);
            if(storage.get("hbhz1")> storagesd.get("hbhzwz",[0])){
                sypd();
                sleep(2000);
                for(k = 0;k<hbhzwzcs;){
                    if(xhbq) {
                        xhbq = false;
                        sysx();
                    }else{
                        syhd();
                    }
                    if(qdbq&&storagesd.get("hbhzqd",-1)==-1){
                        toast("进入签到");
                        if(qd(Array(Array(text("任务"),4000),Array(text("今天"),8000)))){
                            sleep(3000);
                            控件点击(id("dcs_iv_close_ad"));
                            sleep(3000);
                            控件点击(id("tt_insert_dislike_icon_img"));
                            qd(Array(Array(text("头条"),4000)));
                            sypd2();
                            storagesd.put("hbhzqd",1);
                        }
                        qdbq = false;
                    }
                    if(mzdwzhd>5){
                        toast("连续"+mzdwzhd+"次没找到文章");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1500);
                    var b = searchTwice(id("only_tape").boundsInside(1,主页.bounds().top+hg*0.05,wt-1,主页.bounds().bottom-hg*0.007),id("tape_layout").boundsInside(1,主页.bounds().top+hg*0.05,wt-1,主页.bounds().bottom-hg*0.007)).find();
                    for( q = 0;q < b.length; q++){
                        mzdwzhd = 0;
                        pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                        ydjs = hbhzwzhd();
                        if (ydjs!== -1){
                            if(!文章视频记录判断("hbhzwz","hbhz1")){
                                k = hbhzwzcs;
                                break;
                            }
                            k++;
                            mzdwz = 0;
                            if(k===1){
                                qdbq = true;
                            }
                            if(k%5===0){
                                xhbq = true;
                            }
                        }else{
                            if(mzdwz>2){
                                mzdwz = 0;
                                k = hbhzwzcs;
                                break;
                            }else{
                                mzdwz++;
                            }
                        }
                        sleep(2000);
                    }

                    syhd();
                }
            }
            if(storage.get("hbhz2") > storagesd.get("hbhzsp",[0])){
                hbhzsp();
            }
            自动提现();
        }
        红包盒子();
    }

    var jtb = function(){
        function 自动重新登陆() {
            if(控件点击(text("微信登录"))){
                var ty = text("同意").findOne(15000);
                if (ty) {
                    sleep(2000);
                    // press(ty.bounds().centerX()+随机数4, ty.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(ty.bounds().centerX()+随机数4, ty.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                }
            }
        }
        function sypd(){
            var HM;
            wait("com.wz.locker.ui.activity.MainActivity",null,30);
            sleep(4000);

            HM = id("svp_main_pager").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                if(j>6){
                    back();
                }
                自动重新登陆();
                sleep(3500);
                控件点击(text("确定"));

                HM = id("svp_main_pager").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 点击进入(){
            for (let index = 0; index < 9; index++) {
                sleep(2000);
                var 领取任务 = text("领取任务").findOnce();
                if(领取任务){
                    sleep(1500);
                    // press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(领取任务.bounds().centerX()+随机数4, 领取任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(3000);
                }
                控件点击(text("我知道了"));
                if(text("打开DY做任务").exists()){
                    return true;
                }
                控件点击(text("确定"));
                var 看抖抖视频 = text("看抖抖视频").findOnce();
                if (看抖抖视频) {
                    sleep(1500);
                    // press(看抖抖视频.bounds().centerX()+随机数4, 看抖抖视频.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(看抖抖视频.bounds().centerX()+随机数4, 看抖抖视频.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2500);
                }
                if(textContains("暂时没有任务").exists()||textContains("为保护您的爆音账号权重").exists()||textContains("下一波任务到达时间").exists()){
                    toast("暂时没有任务跳过此平台");
                    return false;
                }
            }
            toast("没有找到快手任务页面");
            return false;
        }

        function 切回APP(){
            recents();
            sleep(3000);
            var 切回脚本 = id("title").className("android.widget.TextView").textContains("截图宝").findOne(3000);
            if(切回脚本){
                sleep(1000);
                // press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                var automator = new RootAutomator();
                automator.press(切回脚本.bounds().centerX(),切回脚本.bounds().centerY(),120);
                sleep(100);
                automator.exit();
                
                sleep(3000);
                return true;
            }else{
                return false;
            }
        }

        function 上传图片() {
            sleep(5000);
            if(!控件点击(text("确定"))){
                var sctp = id("rl_add1").findOne(10000);
                if (sctp) {
                    sleep(1500);
                    // press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp.bounds().centerX()+随机数4, sctp.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2500);
                    for (let ca = 0; ca <3; ca++) {
                        if(text("去相册选").exists()){
                            if(控件点击(text("确定"))){
                                break;
                            }
                        }
                        var sctp3 = id("cb_check").findOne(5000);
                        if (sctp3) {
                            sleep(1500);
                            // press(sctp3.bounds().centerX()+随机数4,sctp3.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp3.bounds().centerX()+随机数4,sctp3.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(1500);
                        }
                        var sctp4 = text("确定(1)").findOne(5000);
                        if (sctp4) {
                            sleep(1500);
                            // press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(sctp4.bounds().centerX()+随机数4,sctp4.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(1500);
                            break;
                        }
                    }
                }
            }
            for (let ca = 0; ca <3; ca++) {
                var sctp5 = text("提交任务").findOne(5000);
                if (sctp5) {
                    sleep(1500);
                    // press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp5.bounds().centerX()+随机数4,sctp5.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1500);
                }
                var sctp6 = text("确定").findOne(5000);
                if (sctp6) {
                    sleep(1500);
                    // press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(sctp6.bounds().centerX()+随机数4,sctp6.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1500);
                    break;
                }
            }
            sleep(2500);
        }

        function 点击搜索(){
            for (let index = 0; index < 2; index++) {
                var 搜索 = text("搜索").findOne(5000);
                if(搜索){
                    // press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(1500)
                    Tap(wt*0.5,hg*0.06);
                    sleep(2000);
                    if(text("搜索").exists()){
                        return true;
                    }
                }
            }
            return false;
        }
        function 放弃任务(){
            back();
            sleep(1000);
            back();
            sleep(1000);
            back();
            sleep(1000);
            切回APP();
            back();
            sleep(1500);
            控件点击(text("放弃任务"));
            sleep(1500);
            控件点击(text("确定"));
        }
        function 完成任务(){
            if(截图()){
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                切回APP();
                上传图片();
            }else{
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                切回APP();
                back();
                sleep(1500);
                控件点击(text("放弃任务"));
                sleep(1500);
                控件点击(text("确定"));
            }
        }
        function 抖音(){
            var 任务要求;
            for (let index = 0; index < 20; index++) {
                toast("开始任务");
                if(!点击进入()){
                    break;
                }
                sleep(2000);
                var yq = id("tv_type").findOnce();
                if(yq){
                    var 任务要求 = yq.text();
                }else{
                    toast("没有找到任务要求");
                    continue;
                }
                if(任务要求.indexOf("留言")!=-1||任务要求.indexOf("评论")!=-1){
                    控件点击(text("放弃任务"));
                    sleep(1500);
                    控件点击(text("确定"));
                    continue;
                }
                控件点击(text("打开DY做任务"));
                sleep(1500);
                控件点击(text("允许"));
                控件点击(text("确定"));
                控件点击(text("打开DY视频"));
                控件点击(text("允许"));
                var 抖音线程 = threads.start(function() {
                    while (true) {
                        Tap("我知道了");
                        sleep(500);
                    }
                });
                if(任务要求.indexOf("关注")!=-1){
                    var 进入抖音 = text("视频").findOne(18000);
                    if(进入抖音){
                        sleep(1000);
                        随机滑动(Array(0,0),Array(0.54,0.55),Array(0.56,0.57),Array(0.54,0.55),700);
                        if(点击搜索()){
                            var 搜索 =  className("android.widget.EditText").boundsInside(wt*0.01,hg*0.01,wt*0.9,hg*0.3).findOne(3500);
                            if(搜索){
                                搜索.paste();
                                sleep(1000);
                                // press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(搜索.bounds().centerX()+随机数4, 搜索.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                            }
                            控件点击(text("搜索"));
                            sleep(1500);
                            控件点击(text("用户"));
                            sleep(2000);
                            var 关注 = text("关注").boundsInside(wt*0.6,hg*0.1,wt,hg).findOne(10000);
                            if (关注) {
                                sleep(1000);
                                // press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(1500);
                                完成任务();
                            }
                        }else{
                            放弃任务();
                        }
                    }else{
                        放弃任务();
                    }
                }
                if(任务要求.indexOf("点赞")!=-1){
                    sleep(2000);
                    var 视频显示 =  查找控件(Array(text("说点什么..."),textContains("· ")),20);
                    if(视频显示){
                        sleep(1000);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(50);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.32,hg*0.33));
                        sleep(500);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));
                        sleep(50);
                        Tap(random(wt*0.52,wt*0.53),random(hg*0.42,hg*0.43));
                        sleep(2000);
                        if(截图()){
                            back();
                            sleep(1000);
                            切回APP();
                            上传图片();
                        }else{
                            back();
                            sleep(1000);
                            切回APP();
                            back();
                            sleep(1500);
                            控件点击(text("放弃任务"));
                            sleep(1500);
                            控件点击(text("确定"));
                        }
                    }else{
                        back();
                        sleep(1000);
                        切回APP();
                        back();
                        sleep(1500);
                        控件点击(text("放弃任务"));
                        sleep(1500);
                        控件点击(text("确定"));
                    }
                }
                try{抖音线程.interrupt()}catch(e){}
            }
        }

        function 截图宝(){
            点击启动APP("截图宝");
            var 主页 =  sypd();
            if (主页 !== null){
                if(storage.get("jtb1")>storagesd.get("jtbrw",0)){
                    抖音();
                    文章视频记录判断("jtbrw","jtb1");
                }
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        截图宝();
    }


    var hhspjsb = function(){
        function 视频播放(){
            var 随机播放时间 = random(30,80);
            sleep(1000);
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(控件点击(text("金蛋大奖"))){
                    sleep(3000);
                    控件点击(className("android.widget.FrameLayout").boundsInside(wt*0.82,hg*0.37,wt*0.92,hg*0.44));
                }
                if(textContains("｜关闭广告").exists()){
                    break;
                }
                sleep(1000);
            }
        }
        function 自动提现() {
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("hhspjsbtx",1)>2)){
                toast("进入提现");
                var 我的 = text("我的").findOne(5000);
                if (我的) {
                    Tap(random(我的.bounds().left, 我的.bounds().right), random(我的.bounds().top, 我的.bounds().bottom));
                    sleep(3200);
                    var choseModel = text("知道了").findOnce();
                    if (choseModel) {
                        // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        var automator = new RootAutomator();
                        automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3200);
                    }
                    qd(Array(Array(text("提现"),15000),Array(text("微信"),4000),Array(text("1元"),4000),Array(text("立即提现"),4000),Array(text("去授权"),8000),Array(text("提现"),4000)));
                    var choseModel = text("知道了").findOnce();
                    if (choseModel) {
                        storagesd2.put("hhspjsbtx",dayDiff);
                        // press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        var automator = new RootAutomator();
                        automator.press(choseModel.bounds().centerX(), choseModel.bounds().centerY(), 120);
                        sleep(100);
                        automator.exit();
                        
                        sleep(3200)
                    }
                    back();
                    sleep(3200);
                    back();
                    sleep(3200);
                }
            }
        }

        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text(""))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }

        function spsx(){
            var 首页 = text("首页").findOnce();
            if (首页) {
                Tap(首页.bounds().centerX()+随机数4, 首页.bounds().centerY()+随机数4);
                sleep(4000);
            }else{
                首页 = text("刷新").findOnce();
                if (首页) {
                    Tap(首页.bounds().centerX()+随机数4, 首页.bounds().centerY()+随机数4);
                    sleep(7000);
                }
            }
        }

        function hhspjsbsp(){
            var HM = null;
            var xhbq = false;
            var qdbq = false;
            var hhspjsbspcs = Math.ceil(storage.get("hhspjsb2")/4);
            for(k = 0;k<hhspjsbspcs;){
                HM = spsypd();
                if (HM !== null){
                    if(qdbq && storagesd.get("hhspjsbqd",[-1])==-1){
                        if(qd(Array(Array(text("任务"),4000)))){
                            sleep(4000);
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("hhspjsbqd",1);
                        }
                        qdbq = false;
                        continue;
                    }
                    if(parseInt(k%10) == 0 && xhbq) {
                        spsx();
                        xhbq = false;
                        UpOrDownSlide(true,1000,HM);
                    }else{
                        UpOrDownSlide(true,1000,HM);
                    }
                    if(mzdwzhd>7){
                        toast("连续8次没找到视频");
                        return false;
                    }
                    mzdwzhd++;
                    sleep(1000);
                    var b = textContains(":").boundsInside(0,HM.bounds().top+150,wt,HM.bounds().bottom-150).findOnce();
                    if(b){
                        mzdwzhd = 0;
                        pclick(b.bounds().centerX()+随机数20,b.bounds().centerY()+随机数20);
                        sleep(4000);
                        if(text("刷新").exists()||text("首页").exists()){
                            视频播放();
                            if(!文章视频记录判断("hhspjsbsp","hhspjsb2")){
                                return true;
                            }
                            if(k===2){
                                qdbq = true;
                            }
                            k++;
                            xhbq = true;
                        }else{
                            for (let index = 0; index < 5; index++) {
                                back();
                                sleep(2500);
                                if(text("刷新").exists()){
                                    break;
                                }
                                if(index = 4){
                                    toast("没有找到视频页面");
                                    throw "没有找到视频页面";
                                }
                            }
                        }
                    }
                    UpOrDownSlide(true,1000,HM);
                }else{
                    toast("没有找到首页");
                    return false;
                }
            }
            return true;
        }

        function spsypd(){
            var HM;
            wait("com.qukandian.video.qkdbase.activity.MainActivity", null, 30);
            sleep(2000);


            HM = className("android.support.v7.widget.RecyclerView").findOnce();
            if (HM !== null&&(text("刷新").exists()||text("首页").exists())){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(idContains("close"));
                控件点击(className("android.widget.FrameLayout").boundsInside(wt*0.82,hg*0.37,wt*0.92,hg*0.44));
                if(j===4){
                    spsx();
                }
                HM = className("android.support.v7.widget.RecyclerView").findOnce();
                if (HM !== null&&(text("刷新").exists()||text("首页").exists())){
                    return HM;
                }
                sleep(3500);
                if(j>4){
                    back();
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }

        function 火火视频极速版(){
            点击启动APP("火火视频极速版");
            if(storage.get("hhspjsb2") > storagesd.get("hhspjsbsp",[0])){
                hhspjsbsp();
            }
        }
        火火视频极速版();
    }


    var kls = function(){
        function sypd(){
            var HM;
            wait("com.zheyun.bumblebee.ui.MainActivity",null,30);
            sleep(8000);
            HM = id("tv_task_status").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                控件点击(idContains("close"));
                获取权限();
                if(j==5){
                    控件点击(text("铃声"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = id("tv_task_status").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function 视频播放(){
            var 随机播放时间 = random(5,6);
            控件点击(id("iv_close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("klstx",1)!==dayDiff)){
                toast("开始提现");
                sleep(1500);
                if(控件点击(text("我的"))){
                    控件点击(idContains("close"));
                    sleep(3000);
                    if(控件点击(text("去提现"))){
                        控件点击(idContains("close"));
                        sleep(3000);
                        if(控件点击(text("立即提现"))){
                            sleep(3000);
                            var txcg = text("提现记录").findOne(5000);
                            if(txcg){
                                storagesd2.put("klstx",dayDiff);
                            }
                        }
                    }
                }
            }
        }
        function gkgg() {
            for (let index = 0; index < 25; index++) {
                sleep(3000);
                if(text("点击重播").exists()){
                    Tap(wt*0.42,hg*0.063);
                    sleep(2500);
                    if(!控件点击(className("android.widget.Image").boundsInside(wt*0.78,hg*0.23,wt*0.93,hg*0.33))){
                        back();
                    }
                    return true;
                }
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(id("tt_video_ad_close_layout"))||控件点击(text("关闭广告"))){
                    sleep(1000);
                    if(!控件点击(className("android.widget.Image").boundsInside(wt*0.78,hg*0.23,wt*0.93,hg*0.33))){
                        back();
                    }
                    return true;
                }
            }
            Tap(wt*0.42,hg*0.063);
        }
        function 做任务() {
            if(控件点击(text("任务"))){
                text("日常任务").findOne(10000);
                sleep(2500);
                for (let index = 0; index < 5; index++) {
                    if(控件点击(text("领金币").boundsInside(wt*0.5,0,wt,hg*0.9))){
                        sleep(2000);
                        if(text("勋章殿堂").exists()){
                            for (let index = 0; index < 10; index++) {
                                if(控件点击(text("可领取").boundsInside(1,hg*0.05,wt,hg*0.99))){
                                    gkgg();
                                }else{
                                    随机滑动(Array(0.45,0.5),Array(0.72,0.73),Array(0.45,0.5),Array(0.11,0.12),700);
                                }
                                sleep(2500)
                            }
                        }
                    }else{
                        随机滑动(Array(0.45,0.5),Array(0.52,0.53),Array(0.45,0.5),Array(0.11,0.12),700);
                        sleep(2000);
                    }
                }
            }
        }
        function 酷铃声(){
            点击启动APP("酷铃声");
            var klssx = Math.ceil(storage.get("kls2"));
            var 主页 =  sypd();
            var mzdwz = 0;
            if (主页 !== null){
                for(k = 0;k<klssx;k++){
                    if(k===4&&storagesd.get("klsqd",-1)==-1){
                        if(qd(Array(Array(text("任务"),4000),Array(text("领取"),4000)))){
                            gkgg();
                            var gb = id("iv_close").findOne(8000);
                            if (gb) {
                                // press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                                var automator = new RootAutomator();
                                automator.press(gb.bounds().centerX()+随机数4, gb.bounds().centerY()+随机数4, 120);
                                sleep(100);
                                automator.exit();
                                
                                sleep(2000);
                            }
                            qd(Array(Array(text("铃声"),4000)));
                            storagesd.put("klsqd",1);
                            sleep(2000);
                        }
                    }
                    if(id("tv_task_status").exists()){
                        mzdwz = 0;
                        控件点击(idContains("close"));
                        视频播放();
                        if (getRandom(0.01)){
                            控件点击(id("tv_like"));
                        }
                        if(!文章视频记录判断("klssp","kls2")){
                            自动提现();
                            做任务();
                            return false;
                        }
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                    }else{
                        if(mzdwz>4){
                            mzdwz = 0;
                            自动提现();
                            做任务();
                            return false;
                        }else{
                            mzdwz++;
                        }
                        控件点击(idContains("close"));
                        控件点击(text("铃声"));
                        sleep(1500);
                        随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.002,0.003),700);
                        sleep(1500);
                    }
                }
                自动提现();
                做任务();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        酷铃声();
    }


    var bsjdsp = function(){
        function sypd(){
            var HM;
            wait("com.liquid.box.home.HomeActivity",null,30);
            sleep(8000);
            HM = id("attention_recyler").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){
                获取权限();
                控件点击(text("继续播放"));
                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                if(控件点击(id("tv_rewardButton"))){
                    gkgg();
                }
                sleep(3500);
                HM = id("attention_recyler").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg(){
            sleep(25000);
            for (let ggcs = 0; ggcs <35; ggcs++) {
                if(控件点击(id("tt_video_ad_close"))||控件点击(id("tt_video_ad_close_layout"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(text("关闭广告"))){
                    back();
                    sleep(1500);
                    return true;
                }
                sleep(1500);
            }
            Tap(wt*0.95,hg*0.04);
            back();
            sleep(2000);
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(text("知道了"));
            控件点击(text("继续播放"));
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }

        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(dayDiff-storagesd2.get("bsjdsptx",1)>4)){
                sleep(1500);
                if(qd(Array(Array(text("我"),4000),Array(text("金币账户(币)"),4000),Array(text("去提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("bsjdsptx",dayDiff);
                }
            }
        }

        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++) {
                if(id("layout_like").exists()){
                    return true;
                }
                控件点击(id("user_nick_name").boundsInside(1,hg*0.2,wt,hg*0.9));
                控件点击(idContains("close"));
                控件点击(text("继续播放"));
                随机滑动(Array(0.61,0.62),Array(0.81,0.82),Array(0.61,0.62),Array(0.001,0.002),700);
                sleep(2000);
            }
            toast("找不到视频页");
            自动提现();
            throw "找不到视频页";
        }
        function 变身记短视频(){
            点击启动APP("变身记短视频");
            var bsjdspsx = Math.ceil(storage.get("bsjdsp2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<bsjdspsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("bsjdspqd",-1)==-1){
                        if(qd(Array(Array(className("android.widget.RelativeLayout").boundsInside(wt*0.48,hg*0.8,wt*0.78,hg),4000)))){
                            if(qd(Array(Array(text("立即签到"),10000)))){
                                gkgg();
                            }
                            qd(Array(Array(text("首页"),4000)));
                            storagesd.put("bsjdspqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("bsjdspsp","bsjdsp2")){
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.001,0.002),700);
                }
                自动提现();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        变身记短视频();
    }

    var zzxyb = function(){
        var 权重标识 = 0;
        var 任务上限判断  = function (jl,pd){
            var jvwz = parseInt(storagesd.get(jl,[0]))+1;
            storagesd.put(jl,jvwz);
            toast("完成任务"+jvwz+"/"+storage.get(pd));
            if(storage.get(pd) <= jvwz){
                toast("到达阅读最大次数");
                return false;
            }
            return true;
        }
        function submitTask(id,imgurl,type,token){
            let url="http://zcore.zqzan.com/app/"+type+"/submit/task";
            try{
                return http.post(url,{doit_id:id,shot_img:imgurl},{headers:{token:token,"User-Agent":UA()}}).body.json();
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }

        function giveupTask(id,type,token){
            try{
                let url="http://zcore.zqzan.com/app/"+type+"/giveup/task";
                return http.post(url,{doit_id:id},{headers:{token:token,"User-Agent":UA()}}).body.json();
            }catch(e){

                return {code:-1,msg:e.toString()}
            }
        }
        function postCaptureToOss(ossInfo,path){
            try{
                let key=ossInfo.dir+"/"+ossInfo.prefix+(new Date().getTime())+""+random(10,99)+".png";
                let hpm=http.postMultipart(ossInfo.host,{key:key,policy:ossInfo.policy,signature:ossInfo.signature,OSSAccessKeyId:ossInfo.accessid,success_action_status:"200",file:open(path)});
                if(hpm.statusCode==200)return ossInfo.host+"/"+key+ossInfo.format;
                else return null;
            }catch(e){

                return null;
            }
        }

        function getMyInfo(token){
            try{
                let url="http://zcore.zqzan.com/app/douyin/my/info";
                return http.get(url,{headers:{token:token,"User-Agent":UA()}}).body.json();
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }
        function checkOutTime(json){
            if(json.code==1006){
                toast("登录失效，正在尝试重新登录");
                sleep(1500);
                var pL= login(storagesdZZ.get("username", null)+"",storagesdZZ.get("password", null)+"");
                if(!pL.data||!pL.data.token){
                    toast("自动登录失败!"+pL.msg);

                    throw "自动登录失败，跳过此平台";
                }else{
                    storagesdZZ.put("token",pL.data.token);
                }
            }
        }

        function getShotOssInfo(token){
            try{
                let url="http://zcore.zqzan.com/app/oss/shot_img";
                return http.post(url,{},{headers:{token:token,"User-Agent":UA()}}).body.json();
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }
        function pullOneTask(type,token){
            var assess = 7;
            var discount = true;
            if(type == "douyin"){
                if(storage.get("DYattention",[false]) && storage.get("DYSpecial",[false])){
                    assess =3;
                    discount = true;
                }else if(storage.get("DYattention",[false])){
                    assess=3;
                    discount= false;
                }else if(storage.get("DYSpecial",[false])){
                    assess=11;
                    discount= true;
                }else{
                    assess=1;
                    discount= false;
                }
            }else if(type == "kuaishou"){
                assess = 3;
            }else{
                assess =11;
            }
            try{
                let url="http://zcore.zqzan.com/app/"+type+"/pull/one";
                var t = http.post(url,{
                    "b_discount": discount,
                    "access": assess,
                    "exam_status":0
                },{headers:{token:token,"User-Agent":UA()}}).body;
                return t.json();
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }
        function 抖音() {
            var lastAPP = 0;
            for (let dxh = 0; dxh < storage.get("DYnumb",[200]); dxh++) {
                抖音关注点赞数(true);
                初始化抖音任务关注 = 当前抖音关注数;
                初始化抖音任务点赞数 = 当前抖音点赞数;
                var info= getMyInfo(storagesdZZ.get("token",null)+"");
                while(info.code==1006){
                    checkOutTime(info);
                    sleep(1500);
                    info= getMyInfo(storagesdZZ.get("token",null));
                }
                toast("开始运行");
                if(info.data.oauth_nickname != douyinNickName){
                    toast("检测到抖音账号与绑定不符，请核对");
                    return;
                }
                sleep(3000);
                var ts=getTaskSummary("douyin",storagesdZZ.get("token",null)+"");
                checkOutTime(ts);
                if(ts.code!=0){
                    sleep(random(500,1000));
                    exit();
                }
                if(!ts.data.is_signed){
                    if(!抖音签到(storagesdZZ.get("token",null)+"")){
                        continue;
                    }
                }
                let ossInfo;
                try{
                    ossInfo=getShotOssInfo(storagesdZZ.get("token",null)+"");
                    checkOutTime(ossInfo);
                    if(ossInfo.code!=0){
                        toast("进入任务失败:"+ossInfo.msg);
                        sleep(random(2500,3000));
                        continue;
                    }
                }catch(e){
                    sleep(random(2500,3000));
                    continue;
                }
                ossInfo=ossInfo.data;
                let task=pullOneTask("douyin",storagesdZZ.get("token",null)+"");
                checkOutTime(task);
                if(lastAPP>6){
                    toast("任务领取失败过多,跳过此平台");
                    return false;
                }
                if(task.code!=0){
                    toast("领取任务失败:"+task.msg);
                    lastAPP++;
                    if (task.msg == '请授权您的抖音账号' || task.msg == "请授权官方账号") {
                        sleep(2000);
                        toast("请授权您的抖音账号");
                        return false;
                    }else if(task.msg == '操作频繁，请休息一会儿'){
                        sleep(10000);
                        lastAPP++;
                        continue;
                    }
                    if(task.code==1020){
                        toast("停止运行");
                        return false;
                    }
                    if(task.code==1000){
                        return false;
                    }
                    sleep(random(2500,3000));
                    lastAPP++;
                    continue;
                }else if(task.code ==-1){
                    sleep(random(2500,3000));
                    lastAPP++;
                    continue;
                }
                let TaskDemand=parseDemand(task.data);
                toast("领取任务成功");
                sleep(random(500,1000));
                var 抖音线程 = null;
                抖音线程 = threads.start(function() {
                    while (true) {
                        try {
                            控件点击(text("以后再说"));
                            控件点击(text("继续观看"));
                            控件点击(text("取消"));
                            sleep(2000);
                        } catch (e) {
                        }
                    }
                });
                let runBack= 抖音任务(task.data,TaskDemand);
                try{抖音线程.interrupt();}catch(e){}
                if(runBack<=0){
                    if(runBack==-1){
                        giveupTask(task.data.id,"douyin",storagesdZZ.get("token",null)+"");
                    }
                    continue;
                }
                try{
                    if(!抖音校验(TaskDemand)){
                        toast("连续五次检测到抖音账号问题,建议换号,跳过此平台");
                        return false;
                    }
                }catch(e){
                    toast("检测抖音出错"+e);
                }
                toast("上传截图");
                let imgurl= postCaptureToOss(ossInfo,"/sdcard/Screenshot_1.jpg");
                if(imgurl==null){
                    toast("上传截图失败");
                    continue;
                }
                if(runBack>1){
                    toast("上传第二张截图");
                    let imgurl2= postCaptureToOss(ossInfo,"/sdcard/Screenshot_2.jpg");
                    if(imgurl2==null){
                        toast("上传第二张截图失败");
                        continue;
                    }
                    imgurl+=(","+imgurl2);
                }
                sleep(random(500,2000));
                toast("提交任务");
                let sT=submitTask(task.data.id,imgurl,"douyin",storagesdZZ.get("token",null)+"");
                checkOutTime(sT);
                if(sT.code==0){
                    toast("提交成功，完成任务,获得金豆"+task.data.earning);
                    if(!任务上限判断("DYnumbjl","DYnumb")){
                        return false;
                    }
                }
                if(sT.code==1000){
                    toast("放弃任务,攒攒拒绝操作,重新领任务");
                    giveupTask(task.data.id,"douyin",storagesdZZ.get("token",null)+"");
                }
                backToScript();
                sleep(random(500,1000));
            }
        }

        function 抖音校验(type){
            try{

                抖音关注点赞数(true);
                if(type.match("关注")){
                    if(当前抖音关注数-初始化抖音任务关注==0){
                        权重标识++;
                        if(权重标识>4){
                            return false;
                        }else{
                            toast("抖音账号存在不健康");
                        }
                    }
                    if(当前抖音关注数-初始化抖音任务关注==1){
                        权重标识 = 0;
                    }
                }else{
                    if(当前抖音点赞数-初始化抖音任务点赞数==0){
                        权重标识++;
                        if(权重标识>4){
                            return false;
                        }else{
                            toast("抖音账号存在不健康");
                        }
                    }
                    if(当前抖音点赞数-初始化抖音任务点赞数==1){
                        权重标识 = 0;
                    }
                }
            }catch(e){
                toast("校验失败"+e.toString());
            }
            return true;
        }

        function backToScript(){
            var bj = true;
            while(true) {
                if(text("推荐").exists()&&currentActivity()=="com.ss.android.ugc.aweme.main.MainActivity"){
                    if(bj){
                        var sj = random(1,3);
                        toast("开启养号,随机观看"+sj+"视频");
                        for (let index = 0; index < sj; index++) {
                            随机滑动(Array(0.45,0.5),Array(0.75,0.76),Array(0.45,0.5),Array(0.001,0.002),700);
                            sleep(7000,1000);
                        }
                        back();
                        sleep(350);
                        back();
                        sleep(3500);
                        bj=false;
                    }
                }
                if(text("编辑资料").exists()){
                    控件点击(text("首页"));
                }
                if(text("夜间休息时间,从").exists()||text("注册码:").exists()){
                    return false;
                }
                控件点击(text("以后再说"));
                back();
                sleep(3000);
            }
        }

        function dailySign(imgurl,type,token){
            try{
                let url="http://zcore.zqzan.com/app/"+type+"/do/sign";

                return http.post(url,{img_url:imgurl},{headers:{token:token,"User-Agent":UA()}}).body.json()
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }

        function 抖音签到(token){
            let ossInfo=getShotOssInfo(token);
            checkOutTime(ossInfo);
            if(ossInfo.code!=0){
                return 抖音签到(token);
            }
            ossInfo=ossInfo.data;

            app.startActivity({
                packageName: "com.ss.android.ugc.aweme",
                action:"android.intent.action.VIEW",
                data:"taobao://main.aweme.sdk.com"
            });
            sleep(1500);
            Tap("允许");
            toast("等待进入抖音用户界面");
            waitForActivity("com.ss.android.ugc.aweme.main.MainActivity");
            toast("进入抖音用户界面成功");
            var 抖音线程 = threads.start(function() {
                while (true) {
                    Tap("我知道了");
                    sleep(500);
                }
            });
            let wv=text("我").className("TextView").boundsInside(0,device.height*0.7,device.width,device.height).findOne(8000);
            if(!wv){
                try{抖音线程.interrupt()}catch(e){}
                toast("未找到签到主界面，返回");
                backToScript();
                return false;
            }
            sleep(1500);
            while(!wv.clickable())wv=wv.parent();
            wv.click();
            if(null == text("编辑资料").findOne(5000)){
                try{抖音线程.interrupt();}catch(e){}
                toast("没找到签到主界面，返回");
                backToScript();
                return false;
            }
            抖音关注点赞数(false);
            sleep(random(1000,2000));
            ScreenShot(1);
            try{抖音线程.interrupt()}catch(e){}
            sleep(random(500,2000));
            backToScript();

            toast("抖音上传签到截图");
            let imgurl= postCaptureToOss(ossInfo,"/sdcard/Screenshot_1.jpg");

            if(imgurl==null){
                toast("抖音上传签到截图失败");
                return false;
            }
            sleep(random(500,1000));
            toast("抖音提交签到截图");
            let dS=dailySign(imgurl,"douyin",storagesdZZ.get("token",null));
            checkOutTime(dS);
            if(dS.code==0){
                toast("抖音完成签到");
                return true;
            }
            toast("抖音签到失败:"+dS.msg);
            return false;
        }

        function 查找控件(kj,sj){
            for (let index = 0; index < sj; index++) {
                for(let index = 0;index< kj.length;index++){
                    if(kj[index].exists()){
                        return kj[index].findOnce()
                    }
                }
                sleep(1000);
            }
            return null;
        }

        function 进入任务(){
            var 开始任务;
            sleep(2000);
            for (let jrrw = 0; jrrw < 20; jrrw++) {
                开始任务 = searchTwice(text("打开看看").boundsInside(0,hg*0.5,wt,hg*0.8),text("前往").boundsInside(0,hg*0.5,wt,hg*0.8)).findOnce();
                if(开始任务){
                    sleep(1500);
                    // press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    var automator = new RootAutomator();
                    automator.press(开始任务.bounds().centerX()+随机数4, 开始任务.bounds().centerY()+随机数4, 120);
                    sleep(100);
                    automator.exit();
                    
                    sleep(2000);
                    return true;
                }else{
                    sleep(1500);
                }
            }
            return false;
        }

        function 抖音任务(dt,任务要求){
            if(任务要求.match("评论")){
                return 0;
            }
            if(任务要求.match("关注")){
                setClip("https://www.iesdouyin.com/share/user/"+dt.anchor_id);
            }else{
                setClip("https://www.iesdouyin.com/share/video/"+dt.aweme_id);
            }
            var intent = new Intent(Intent.ACTION_VIEW)
            intent.setClassName("com.ss.android.ugc.aweme", "com.ss.android.ugc.aweme.main.MainActivity");
            app.startActivity(intent);
            sleep(3500);
            for (let index2 = 0; index2 < 3; index2++) {
                if(!控件点击(text("允许"))){
                    break;
                }
            }
            for (let i = 0; i < 10; i++){
                if(currentPackage() == "com.ss.android.ugc.aweme"){
                    break;
                }
                sleep(1000);
            }
            if(!进入任务()){
                toast("长时间未找到跳转链接");
                backToScript();
                return 0;
            }
            if (device.product=="m1metal" || device.product=="nikel"||currentPackage()=="com.ss.android.ugc.aweme") {
                let like = false;
                let abandon=false;
                let shotTimes = 0;
                auto.setWindowFilter((info)=>{
                    try{
                        return info.getRoot().getPackageName()=="com.ss.android.ugc.aweme";
                    }catch(e){
                        return true;
                    }
                })
                if(!text("推荐").exists()){

                    if (任务要求.match("点赞")) {
                        let btn = descContains("未选中，").findOne(15);
                        if (btn != null){
                            sleep(1500);
                            // press(btn.bounds().centerX()+随机数4, btn.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(btn.bounds().centerX()+随机数4, btn.bounds().centerY()+随机数4, 120);
                            sleep(3000);
                            sleep(100);
                            automator.exit();
                            
                            if(descContains("已选中，").exists()){
                                like = true;
                            }
                        }else {
                            if(descContains("已选中，").exists()){
                                toast("重复任务，放弃任务");
                            }else{
                                toast("未找到点赞按钮，放弃任务");
                            }
                            abandon = true;
                        }
                    }
                    if (任务要求.match("关注") && !abandon) {
                        btn =  text("关注").boundsInside(wt*0.1,hg*0.1,wt,hg*0.5).findOne(15000);
                        if(btn){
                            sleep(2000);
                            // press(btn.bounds().centerX()+随机数4, btn.bounds().centerY()+随机数4, 120);
                            var automator = new RootAutomator();
                            automator.press(btn.bounds().centerX()+随机数4, btn.bounds().centerY()+随机数4, 120);
                            sleep(100);
                            automator.exit();
                            
                            sleep(3000);
                            btn = text("取消关注").findOne(10000);
                            if(btn){
                                like = true;
                            }else{
                                toast("未关注上，放弃任务");
                                abandon = true;
                            }
                        } else {
                            toast("未找到关注按钮，放弃任务");
                            abandon = true;
                        }
                    }
                    sleep(random(1000, 2500));
                    if (like && !abandon){
                        if(!ScreenShot(++shotTimes)){
                            return 0;
                        }
                    }
                    sleep(random(1000,1500));
                }else{
                    abandon=true;
                    toast("未找到必要控件，放弃任务");
                }
                runtime.accessibilityBridge.mWindowFilter=null;

                switch(abandon) {
                    case false:
                        return shotTimes;
                    case true:
                        return -1;
                }
            } else {
                toast("长时间未打开抖音");
                return 0;
            }
        }

        function ScreenShot(index) {
            sleep(1500)
            try {
                var cap_img = captureScreen();
                files.removeDir("/sdcard/Screenshot_"+index+".jpg");
                var img_path = "/sdcard/Screenshot_"+index+".jpg";
                saveCapture(cap_img.mBitmap,img_path);
                toast("成功截图");
                sleep(1000);
            } catch (error) {
                toast("截图失败");
                return false;
            }
            return true;
        }
        function saveCapture(bitmap,path){
            let Bitmap=android.graphics.Bitmap;
            let BitmapFactory= android.graphics.BitmapFactory;
            let baos = new java.io.ByteArrayOutputStream();
            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, baos);
            let isBm = new java.io.ByteArrayInputStream(baos.toByteArray());

            let op=new BitmapFactory.Options()
            op.inPreferredConfig=Bitmap.Config.RGB_565;
            let tos=new java.io.FileOutputStream(path);
            BitmapFactory.decodeStream(isBm, null,op).compress(Bitmap.CompressFormat.JPEG,100,tos);
        }
        function getTaskSummary(type,token){
            try{
                let url="http://zcore.zqzan.com/app/"+type+"/"+(type=="douyin"?"my":"summary")+"/info";
                return http.get(url,{headers:{token:token,"User-Agent":UA()}}).body.json();
            }catch(e){
                return {code:-1,msg:e.toString()}
            }
        }
        function parseDemand(data){
            let type=parseInt(data.type);
            let ret="";
            if((type&1)!=0)ret+=" 点赞";
            if((type&2)!=0)ret+=" 关注";
            if((type&4)!=0)ret+=" 评论";
            if((type&8)!=0)ret+=" 收藏";
            return ret;
        }
        function 攒攒(){
            if(!text("夜间休息时间,从").exists()&&!text("注册码:").exists()){
                var name = storages.create("name");
                var app名称 =  name.get("name","免R_千合阅读");
                if(app名称=="免R_千合阅读"){
                    点击启动APP("千合阅读");
                }else{
                    点击启动APP(app名称);
                }
                var zkj = text("注册码:").findOne(10000)
                if(zkj){
                    sleep(1500);
                    back();
                }
            }
            抖音();
        }
        攒攒();
    }

    var ttaql = function(){
        function sypd(){
            var HM;
            wait("com.liquid.box.home.HomeActivity",null,30);
            sleep(5000);
            HM = text("垃圾清理").findOnce();
            if (HM !== null){
                return HM;
            }
            for (var j=0;j<9;j++){

                if(j==5){
                    控件点击(text("首页"));
                }
                if(j>5){
                    back();
                }
                sleep(3500);
                HM = text("垃圾清理").findOnce();
                if (HM !== null){
                    return HM;
                }
            }
            if(j>8){
                return null;
            }
            return null;
        }
        function gkgg() {
            for (let index = 0; index < 20; index++) {
                sleep(3000);
                if(text("点击重播").exists()){
                    back();
                    sleep(2500);
                    控件点击(idContains("close"));
                    return true;
                }
                if(控件点击(id("tt_video_ad_close"))||控件点击(className("android.widget.ImageView").boundsInside(0,0,wt*0.2,hg*0.2))||控件点击(id("tt_video_ad_close_layout"))||控件点击(text("关闭广告"))){
                    sleep(2000);
                    return true;
                }
            }
            Tap(wt*0.42,hg*0.063);
            back();
            sleep(2500);
        }
        function 视频播放(){
            var 随机播放时间 = random(6,7);
            控件点击(idContains("close"));
            for (let sj = 0; sj < 随机播放时间; sj++) {
                if(text("立即下载").exists()){
                    break;
                }
                sleep(2000);
            }
        }
        function 自动提现(){
            var dateEnd = new Date();
            var dayDiff = Math.floor(dateEnd / (24 * 3600 * 1000));
            if(storage.get("自动提现",[false])&&(storagesd2.get("ttaqltx",1)!==dayDiff)){
                sleep(1500);
                if(qd(Array(Array(text("我的"),4000),Array(text("去提现"),4000),Array(text("立即提现"),4000)))){
                    storagesd2.put("ttaqltx",dayDiff);
                }
            }
        }
        function 进入视频() {
            sleep(1500);
            for (let index = 0; index < 6; index++){
                if(id("tv_like").exists()){
                    return true;
                }
                控件点击(text("视频"));
                sleep(2000);
                控件点击(idContains("close"));
                随机滑动(Array(0.61,0.62),Array(0.81,0.82),Array(0.61,0.62),Array(0.001,0.002),700);
                sleep(2000);
            }
            toast("找不到视频页");
            自动提现();
            throw "找不到视频页";
        }
        function 做任务() {
            if(qd(Array(Array(text("任务").boundsInside(wt*0.3,hg*0.8,wt*0.9,hg),4000)))){
                text("去提现 >").findOne(10000);
                var b = text("看视频领金币").boundsInside(1,1,wt-1,hg).find();
                for( q = 0;q < b.length; q++){
                    mzdwzhd=0;
                    pclick(b[q].bounds().centerX()+随机数20,b[q].bounds().centerY()+随机数20);
                    sleep(2000);
                    gkgg();
                }
                if(text("任务").exists()){
                    back();
                    sleep(1800);
                }
                随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.3,0.33),700);
                for (let index = 0; index < 6; index++) {
                    if(控件点击(text("领金币").boundsInside(wt*0.6,hg,wt-1,hg*0.8))){
                        gkgg();
                    }
                }
                if(text("任务").exists()){
                    back();
                    sleep(1800);
                }
                控件点击(text("首页"));
                text("垃圾清理").findOne(10000);
                var b1 = idContains("tv_bubble_").boundsInside(1,1,wt-1,hg*0.55).find();
                for( q = 0;q < b1.length; q++){
                    mzdwzhd=0;
                    pclick(b1[q].bounds().centerX()+随机数20,b1[q].bounds().centerY()+随机数20);
                    sleep(4000);
                    var ql = 查找控件(Array(id("tv_gold_double"),id("tv_go_on")),5);
                    if(ql){
                        sleep(1000);
                        pclick(ql.bounds().centerX()+随机数20,ql.bounds().centerY()+随机数20);
                        sleep(2000);
                        gkgg();

                    }
                    控件点击(idContains("close"));
                }
                if(控件点击(text("一键扫描"))){
                    sleep(5000);
                    if(控件点击(textContains("一键清理赚"))){
                        var ql = id("tv_gold_double").findOne(10000);
                        if(ql){
                            sleep(1000);
                            pclick(ql.bounds().centerX()+随机数20,ql.bounds().centerY()+随机数20);
                            sleep(2000);
                            gkgg();
                            sleep(1500);
                            back();
                            sleep(1500);
                        }
                    }
                }else if(控件点击(textContains("一键清理赚"))){
                    var ql = id("tv_gold_double").findOne(10000);
                    if(ql){
                        sleep(1000);
                        pclick(ql.bounds().centerX()+随机数20,ql.bounds().centerY()+随机数20);
                        sleep(2000);
                        gkgg();
                        sleep(1500);
                        back();
                        sleep(1500);
                    }
                }
            }
            控件点击(text("视频"));
        }
        function 天天爱清理(){
            点击启动APP("天天爱清理");
            var ttaqlsx = Math.ceil(storage.get("ttaql2")/2);
            var 主页 =  sypd();
            if (主页 !== null){
                for(k = 0;k<ttaqlsx;k++){
                    进入视频();
                    if(k===4&&storagesd.get("ttaqlqd",-1)==-1){
                        if(qd(Array(Array(text("任务").boundsInside(wt*0.3,hg*0.8,wt*0.9,hg),4000)))){
                            if(qd(Array(Array(textContains("看视频再送"),10000)))){
                                gkgg();
                            }
                            qd(Array(Array(text("视频"),4000)));
                            storagesd.put("ttaqlqd",1);
                            sleep(2000);
                        }
                    }
                    视频播放();
                    if(!文章视频记录判断("ttaqlsp","ttaql2")){
                        自动提现();
                        做任务();
                        return false;
                    }
                    sleep(1500);
                    随机滑动(Array(0.61,0.62),Array(0.75,0.76),Array(0.61,0.62),Array(0.001,0.002),700);
                }
                自动提现();
                做任务();
            }else{
                toast("没有找到首页");
                return false;
            }
        }
        天天爱清理();
    }

    function main(){
        var zxff = storages.create("zxff");
        let 版本号 = "1195";
        toast(zxff.get("zxff")+版本号+"版");
        switch(zxff.get("zxff")){
            case "聚看点":
                jkd();
                break;
            case "微鲤":
                wlkk();
                break;
            case "波波视频":
                bbsp();
                break;
            case "有料看看":
                ylkk();
                break;
            case "刷宝":
                sb();
                break;
            case "闪电盒子":
                sdhz();
                break;
            case "天天趣闻":
                ttqw();
                break;
            case "淘最热点":
                tzrd();
                break;
            case "快手":
                ks();
                break;
            case "想看":
                xk();
                break;
            case "快看点":
                kkd();
                break;
            case "火山":
                hs();
                break;
            case "抖音":
                dy();
                break;
            case "趣头条":
                qtt();
                break;
            case "点点新闻":
                ddxw();
                break;
            case "彩蛋视频":
                cdsp();
                break;
            case "今日头条极速版":
                jrtt();
                break;
            case "百姓头条":
                bxtt();
                break;
            case "58同城":
                wbtc();
                break;
            case "66联盟":
                llyd();
                break;
            case "刷乐":
                sl();
                break;
            case "微客众智":
                wkzz();
                break;
            case "天天爱清理":
                ttaql();
                break;
            case "喵喵试看":
                mmsk();
                break;
            case "99阅读":
                jjyd();
                break;
            case "蛙蛙赚":
                wwz();
                break;
            case "微客众智2":
                wkzzxhs();
                break;
            case "电视家":
                dsj();
                break;
            case "角牛免费小说":
                jnmfxs();
                break;
            case "攒攒":
                zz();
                break;
            case "蛙蛙赚2":
                wwzxhs();
                break;
            case "欢乐盒子":
                hlhz();
                break;
            case "每日必看":
                mrbk();
                break;
            case "易帮":
                yb();
                break;
            case "趣铃声":
                qls();
                break;
            case "小龙虾":
                xlx();
                break;
            case "花生头条":
                hstt();
                break;
            case "长豆短视频":
                cddsp();
                break;
            case "魔视":
                ms();
                break;
            case "有颜短视频":
                yydsp();
                break;
            case "你好浏览器":
                nhllq();
                break;
            case "番茄免费小说":
                fqmfxs();
                break;
            case "小吃货短视频":
                xchdsp();
                break;
            case "快逗短视频":
                kddsp();
                break;
            case "集卡帮":
                jkb();
                break;
            case "66联盟2":
                llxhs();
                break;
            case "红包盒子":
                hbhz();
                break;
            case "截图宝":
                jtb();
                break;
            case "火火视频极速版":
                hhspjsb();
                break;
            case "酷铃声":
                kls();
                break;
            case "变身记短视频":
                bsjdsp();
                break;
            case "攒攒协议版":
                zzxyb();
                break;
        }
    }
    main();
    mzdwz = null;
    mzdwzhd = null;
    随机数20 = null;
    随机数4 = null;
}


function huakuai() {
    if (text("拖动滑块").exists()) {
        // log("滑块页面出现")
        toast("滑块页面")
        sleep(1000)
        testSwipe()
    }
}

function testSwipe() {
    var y = 977
    var t = 1500
    while (true) {
        // isToReRunTime = calIsToReRunTime();
        // if(isToReRunTime){
        //     toast("到点重启脚本啦！重头搞起罗！！")
        //     sleep(2000)
        //     home()
        //     break;
        // }
        // log("开始滑块截图  ");
        img = images.captureScreen();
        if (img) {
            // log("截图成功。进行识别滑块！");
            break;
        } else {
            // log('截图失败,重新截图');
        }
    }
    var x = discernSlidingblock(img, 1080) + 65
    console.info("识别结果滑块X坐标：" + x);

    if (x > -1) {
        // Swipe(121, y, x, y, t)
        // superSwipe(121, y, x, y, t)
        randomSwipe(121, y, x, y)
    } else {
        console.log("识别有误，请确认是否在滑块界面");
    }
    sleep(3000)
    if (text("拖动滑块").exists()) {
        toast("刷新滑块")
        Tap(107, 772)
        sleep(2000)
    }
}
function discernSlidingblock(img, ratio) {
    var temp, temp2, x, y, num, color, p, temp3, arr1;
    if (ratio == 720) {
        var tb = [348, 253, 691, 638, 81]
    } else if (ratio == 1080) {
        var tb = [370, 270, 1020, 831, 125]
    } else {
        // log("分辨率不符合规范")
        return -2
    }
    num = Math.ceil(tb[4] / 3.3 - 4);

    for (var k = 29; k <= 40; k++) {
        temp2 = "";
        color = "#" + k + "" + k + "" + k + "";
        for (var i = 1; i <= num; i++) {
            temp2 = temp2 + "0|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|0|" + color + ",";
            temp2 = temp2 + "1|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|1|" + color + ",";
            temp2 = temp2 + "2|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|2|" + color + ",";
        }
        x = 0;
        while (x > -2) {
            y = 0;
            while (y > -2) {
                temp = "";
                for (var i = 1; i <= num; i += 2) {
                    temp = temp + "0|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x) + "|" + i + "|" + color + ",";
                    temp = temp + (tb[4] + x) + "|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|0|" + color + ",";
                    temp = temp + i + "|" + (tb[4] + y) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|" + (tb[4] + y) + "|" + color + ",";
                    temp = temp + "1|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - 1) + "|" + i + "|" + color + ",";
                    temp = temp + (tb[4] + x - 1) + "|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|1|" + color + ",";
                    temp = temp + i + "|" + (tb[4] + y - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|" + (tb[4] + y - 1) + "|" + color + ",";
                }
                temp = temp + temp2 + "0|0|" + color;
                arr1 = temp.split(",");
                var arr2 = new Array();
                for (var i = 0; i < arr1.length - 1; i++) {
                    arr2[i] = new Array();
                    temp3 = arr1[i].split("|");
                    arr2[i] = [Number(temp3[0]), Number(temp3[1]), temp3[2]];
                }
                try {
                    p = images.findMultiColors(img, color, arr2, {
                        region: [tb[0], tb[1], tb[2] - tb[0], tb[3] - tb[1]],
                        threshold: (Math.floor(k / 10) * 16 + k % 10)
                    });
                    if (p) {
                        img.recycle();
                        return p.x
                    }
                } catch (error) {
                    console.log("识别失败，错误原因：" + error);
                    return -1;
                }
                y = --y;
            }
            x = --x;
        }
    }
    try {
        img.recycle();
    } catch (error) {
        console.log("识别失败，错误原因：" + error);
    }
    return -1;
}


function bezierCreate(x1,y1,x2,y2,x3,y3,x4,y4){
    //构建参数
    var h=100;
    var cp=[{x:x1,y:y1+h},{x:x2,y:y2+h},{x:x3,y:y3+h},{x:x4,y:y4+h}];
    var numberOfPoints = 100;
    var curve = [];
    var dt = 1.0 / (numberOfPoints - 1);
    
    
    //计算轨迹
    for (var i = 0; i < numberOfPoints; i++){
        var ax, bx, cx;
        var ay, by, cy;
        var tSquared, tCubed;
        var result_x, result_y;
    
        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;
    
        var t=dt*i
        tSquared = t * t;
        tCubed = tSquared * t;
        result_x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result_y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        curve[i] = {
            x: result_x,
            y: result_y
        };

    
    }

    //轨迹转路数组
    var array=[];
    for (var i = 0;i<curve.length; i++) {
        try {
            var j = (i < 100) ? i : (199 - i);
            xx = parseInt(curve[j].x)
            yy = parseInt(Math.abs(100 - curve[j].y))
        } catch (e) {
            break
        }
        array.push([xx, yy])
    }


    
    return array
}

/**
 * 真人模拟滑动函数
 * 
 * 传入值：起点终点坐标
 * 效果：模拟真人滑动
 */
function randomSwipe(sx,sy,ex,ey){
    //设置随机滑动时长范围
    var timeMin=1000
    var timeMax=3000
    //设置控制点极限距离
    var leaveHeightLength=500
    
    //根据偏差距离，应用不同的随机方式
    if(Math.abs(ex-sx)>Math.abs(ey-sy)){
        var my=(sy+ey)/2
        var y2=my+random(0,leaveHeightLength)
        var y3=my-random(0,leaveHeightLength)
    
        var lx=(sx-ex)/3
        if(lx<0){lx=-lx}
        var x2=sx+lx/2+random(0,lx)
        var x3=sx+lx+lx/2+random(0,lx)
    }else{
        var mx=(sx+ex)/2
        var y2=mx+random(0,leaveHeightLength)
        var y3=mx-random(0,leaveHeightLength)

        var ly=(sy-ey)/3
        if(ly<0){ly=-ly}
        var y2=sy+ly/2+random(0,ly)
        var y3=sy+ly+ly/2+random(0,ly)
    }

    //获取运行轨迹，及参数
    var time=[0,random(timeMin,timeMax)]
    var track=bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey)
    
    // log("随机控制点A坐标："+x2+","+y2)
    // log("随机控制点B坐标："+x3+","+y3)
    // log("随机滑动时长："+time[1])
    
    //滑动
    // gestures(time.concat(track))


    // log("time",time);
    // log("track",track);

    var automator = new RootAutomator();
    sleep(500);
    automator.touchDown(sx,sy);

    for(var i = 0 ; i < track.length;i++){
        var j = 0;
        if(i > 0){
            j = i - 1;
        }
        // automator.superSwipe(automator,track[j][0],track[i][1],track[j][0],track[i][1],time[1],i);
        superSwipe(automator,track[j][0],track[i][1],track[j][0],track[i][1],time[1],i);

    }
    automator.touchUp();
    sleep(500);
    automator.exit();

}


function superSwipe(automator, x1,  y1,  x2,  y2,  duration,  id) {
    var now = new Date().getTime(); //返回 1970 年 1 月 1 日至今的毫秒数。
    duration = 10;
    var startTime = now;
    var endTime = startTime + duration;
    while (now < endTime) {
        var elapsedTime = now - startTime;
        var alpha = elapsedTime / duration;
        automator.touchMove( lerp(x1, x2, alpha),  lerp(y1, y2, alpha), id);
        now = new Date().getTime();
    }
}

function lerp( a,  b,  alpha) {
    return (b - a) * alpha + a;
}









exports.function =func;






