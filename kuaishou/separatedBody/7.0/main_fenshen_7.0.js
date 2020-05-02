"ui";


UIkuaikuai = storages.create("kuaikuai");
var UIxfc = UIkuaikuai.get("UIxfc", true)
var UIqhip = UIkuaikuai.get("UIqhip", false)
var UIzdqd = UIkuaikuai.get("UIzdqd", true) 
var UIkssz = UIkuaikuai.get("UIkssz", 1) 
var UIfsgs = UIkuaikuai.get("UIfsgs", 12)  
var UIydsj = UIkuaikuai.get("UIydsj", 5)
var UIdscq = UIkuaikuai.get("UIdscq", false)
var UIdscqRq = UIkuaikuai.get("UIdscqRq", '2030/1/1')
var UIdscqHH = UIkuaikuai.get("UIdscqHH", 23)
var UIdscqMM = UIkuaikuai.get("UIdscqMM", 59)

var hdcs = 0 //签到页面滑动次数
var isToReRunTime = false //夜间十二点左右结束当前运行，重新运行脚本
var updateApkUrl;
var updateWindow;//升级悬浮窗
var isUpdateWindowShow = false;
var runAppWindow;//启动的应用悬浮窗
var isRunAppWindowShow = false;
var redBagStopRegion = 0;
var curRunApp;//当前运行的分身

ui.layout(
    <vertical>
        <appbar>
            <toolbar title="快快" />
        </appbar>
        <horizontal h="50" bg="#000000" gravity="center">
            <button id="start" bg="#4169E1" text="开始" textColor="#FFFFFF" textStyle="bold" w="70" margin="10 5" padding="5" />
            <button id="signout" bg="#4169E1" text="退出" textColor="#FFFFFF" textStyle="bold" w="70" margin="10 5" padding="5" />
            <button id="update" bg="#4169E1" text="检测更新" textColor="#FFFFFF" textStyle="bold" w="150" margin="10 5" padding="5" />
        </horizontal>
        <horizontal>
            <Switch id="autoService" text="无障碍服务(必打开)" checked="{{auto.service != null}}" padding="5 5 5 5" textSize="15sp" />
            <Switch id="fenping" text="是否显示悬浮窗" checked={UIxfc} textSize="15sp" />
        </horizontal>
        <horizontal>
            <Switch id="qhip" text="是否换号切IP" checked={UIqhip} textSize="15sp" padding="5 5 5 5" />
            <Switch id="zdqd" text="是否自动签到" checked={UIzdqd} textSize="15sp" marginLeft="40" />
        </horizontal>
        <horizontal>
            <text text="第几个开始" textColor="#000000" marginLeft="5" />
            <input id="order" inputType="number" text={UIkssz} />
        </horizontal>
        <horizontal>
            <text text="共有几个分身" textColor="#000000" marginLeft="5" />
            <input id="num" inputType="number" text={UIfsgs} />
            <text text="(到第几个结束)" textColor="#000000" marginLeft="5" />
        </horizontal>
        <horizontal>
            <text text="阅读时间(分钟)" textColor="#000000" marginLeft="5" />
            <input id="ydsj" inputType="number" text={UIydsj} />
            <text text="(每个分身阅读时间)" textColor="#000000" marginLeft="5" />
        </horizontal>
        <horizontal>
            <Switch id="timedRestart" text="是否定时重启脚本" checked="{UIdscq}" padding="5 5 5 5" textSize="15sp" />
            <text text="重启设置" textColor="#000000" marginLeft="5" />
            <input id="restartHour" inputType="number" text={UIdscqHH} />
            <text text="时" textColor="#000000" marginLeft="5" />
            <input id="restartMin" inputType="number" text={UIdscqMM} />
            <text text="分" textColor="#000000" marginLeft="5" />
        </horizontal>
        <horizontal h="20" bg="#4169E1" gravity="center" >
            <text gravity="center" textColor="#FFFFFF" textStyle="bold">说明</text>
        </horizontal>
        <text textColor="#FF0000" marginLeft="5" marginTop="10">系统：7.0  版本号： V7.0.1_B2020042902 </text>
        <text textColor="#FF0000" marginLeft="5" marginTop="10">此版本为7.0版本，手机不需root</text>
        <text textColor="#FF0000" marginLeft="5" marginTop="10">切换IP功能，需要手机使用流量卡</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">1：先开启无障碍服务，开启快快app后台弹出界面权限</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">2：返回手机桌面，把桌面首页滑到“快手极速版的”页面</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">3：返回软件，输入阅读时间，点击开始，开启截图权限</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">4：自动过滑块验证</text>
    </vertical>
);
ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});
ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    threads.start(function () {
        setTimeout(main(), 2000)//两秒之后调用main函数
        // setInterval(main(),24*60*60*1000)//定时24小时后循环执行
    });
});

ui.update.on("click", function () {
    //手动更新
    try {
        threads.start(function() {
            var isNeedUpdate = judgeIsNeedUpdate();
            if(isNeedUpdate){
                log("已有新版本，即将开始更新")
                if(isRunAppWindowShow){
                    runAppWindow.close();
                    isRunAppWindowShow = false;
                }
                update_xuanfuchuang("应用升级中")
                isUpdateWindowShow = true;
                updateApk();
            }else{
                toast("当前版本已是最新")
            }
        
        });
        
    } catch (error) {
        toast("检测更新发生异常： " + error);
    }
});

function main() {
    while(true){
        if(isToReRunTime){
            //检测版本更新
            // var isNeedUpdate = judgeIsNeedUpdate();
            // if(isNeedUpdate){
            //     updateApk();
            // }else{
            //     toast("版本已是最新")
            // }

            clean()
            sleep(2000)
            isToReRunTime = false
            
            initData()
            sleep(1000)
            
            toast("开始")

            curRunApp = 1 ;
        }else{
            UIdata()
            
            toast("开始")
            jietu()
            sleep(3000)
            home()
            suohoutai()

            curRunApp = UIkssz ;
        }
        
        var ydsj = UIydsj * 60
        
        while (true) {
            if(isToReRunTime){
                break;
            }
            
            var kstime = newtime()
            var sign = 0
            
            if (UIqhip) {
                openfly()
            }           
            clean()       
            
            qidong()

            if (UIxfc) {
                var xzfs = curRunApp - 1  //现在分身
                xuanfuchuang(xzfs)
            }
            huakuai()

            // clearVideoCache();

            while (true) {
                if(isToReRunTime){
                    break;
                }
                textTap("允许")
                idTap("close", "关闭弹窗")
                textTap("我知道了")
                textTap("同意并继续")
                textTap("妥妥好评")
                textTap("继续邀好友赚钱")
                textTap("立即邀请")
                textTap("快手用户调研")
            
                huakuai()

                if(id("slide_close_atlas_btn").exists() || id("slide_close_long_atlas_btn").exists()){
                    // idTap("slide_close_atlas_btn","退出图片")
                    back();
                    sleep(1000)
                    back();
                    sleep(1000)
                }

                if(!isNoRedPag() ){
                    huakuai()
                    sphuadong("图片滑动")
                    sleep(1000)
                }

                isToReRunTime = calIsToReRunTime();
                if(isToReRunTime){
                    toast("到点重启脚本啦！重头搞起罗！！")
                    sleep(2000)
                    home()
                    break;
                }

                if (UIzdqd && sign == 0) {
                    qiandao()
                    sign = 1
                    saveRunApp();
                }
                if (text("上下滑动切换作品").exists()) {
                    sphuadong("滑动(上下滑动切换作品)")
                }
                if (text("向左滑动进入作者页面").exists()) {
                    sphuadong("滑动(向左滑动进入作者页面)")
                }


                if(!isNoIncome()){
                    sleep(2000)
                    sphuadong("滑动(红包不转，滑动)")
                    sleep(1000)
                    scrollDown(0)
                    sleep(1000)
                    scrollDown(1)
                    sleep(10000)
                }


                if (id("comment_icon").exists() || id("comment_button").exists() ) {
                    sleep(2000)
                    sphuadong("滑动comment_icon")
                    sleep(3000)
                    scrollDown(0)
                    sleep(1000)
                    scrollDown(1)
                    sleep(10000)
                }

                huakuai()
                if (newtime() - kstime > ydsj) {
                    toast("阅读时间已到")
                    sleep(2000)
                    home()
                    break
                }
                if (desc("继续邀好友赚钱").findOnce()  || desc("版本更新").findOnce()  || desc("立即安装").findOnce()  || desc("下载返利").findOnce()  || text("搜索").findOnce()
                    || text("继续邀好友赚钱").findOnce()  || text("版本更新").findOnce()  || text("立即安装").findOnce()  || text("下载返利").findOnce()) {
                    back()
                    back()
                }
                
                if ((desc("快速邀请好友赚钱").findOnce() || desc("邀请好友赚36元").findOnce() || desc("请选择分享渠道").findOnce() 
                    || text("快速邀请好友赚钱").findOnce() || text("邀请好友赚36元").findOnce() || text("请选择分享渠道").findOnce()) && sign == 1) {
                    back()
                    back()
                }

                
                if (descContains("快手给你发红包").findOnce() || textContains("快手给你发红包").findOnce()) {
                    toast("拆红包")
                    sleep(1000)
                    descTap("快手给你发红包")
                    sleep(2000)
                }
                if (desc("立即提现").findOnce() || desc("分享给好友领现金").findOnce() || desc("天天拆红包").findOnce()
                    || text("立即提现").findOnce() || text("分享给好友领现金").findOnce() || text("天天拆红包").findOnce()) {
                    toast("返回")
                    idTap("close", "关闭弹窗")
                    back()
                    sleep(1000)
                    back()
                    sleep(3000)
                    break;
                }

                if(id("slide_close_atlas_btn").exists() || id("slide_close_long_atlas_btn").exists()){
                    // idTap("slide_close_atlas_btn","退出图片")
                    back();
                    sleep(1000)
                    back();
                    sleep(1000)
                }

                if(!isNoRedPag() ){
                    huakuai()
                    sphuadong("图片滑动")
                    sleep(1000)
                }
                
            }
        }
    }
}
function qiandao() {
    var qiandao = 0
    var goqiandao = 0;
    // while (true) {
    while (goqiandao < 10) {
        goqiandao++
        toastLog("开始签到")
        huakuai()

        isToReRunTime = calIsToReRunTime();
        if(isToReRunTime){
            toast("到点重启脚本啦！重头搞起罗！！")
            sleep(2000)
            home()
            break;
        }

        textTap("允许")
        idTap("close", "关闭弹窗")
        textTap("我知道了")
        textTap("同意并继续")
        textTap("妥妥好评")
        textTap("继续邀好友赚钱")
        textTap("立即邀请")
        textTap("快手用户调研")
        idTap("red_packet", "去签到")
        idTap("gold_egg_packet", "去签到")
        idTap("circular_progress_bar", "去签到")
        idTap("cycle_layout", "去签到")
        idTap("redFloat", "去签到")
        descTap("立即签到")
        if(id("redFloat").findOnce() || id("redFloat").exists() || id("red_packet").findOnce()){
                toastLog("长点击签到")
                sleep(1000)
                let lsid = id("redFloat").findOnce()
                var is = longClick(lsid.bounds().centerX(), lsid.bounds().centerY())
                sleep(2000)
                if(!is){
                    toastLog("长按签到")
                    press(lsid.bounds().centerX(), lsid.bounds().centerY(),1000)
                    sleep(2000)
                }
            
        }
        if (descStartsWith("签到成功").findOnce() || textStartsWith("签到成功").findOnce()) {
            toast("签到成功")
            click(130, 339)
            sleep(2000)
            qiandao = 1
        }
        if (descContains("明天可领").findOnce() || textContains("明天可领").findOnce()) {
            toast("今日已签到")
            sleep(1000)
            qiandao = 1
        }
        if (qiandao == 1) {
            toast("返回首页")
            back()
            sleep(3000)
            break;
        }
        textTap("好的")
        descTap("好的")
        if ((desc("去签到").findOnce() || text("去签到").findOnce()) && qiandao == 0) {
            descTap("去签到")
        }
        if ((desc("去查看").findOnce() || text("去查看").findOnce()) && qiandao == 0) {
            descTap("去查看")
        }
        if (descStartsWith("明天签到").findOnce() || textStartsWith("明天签到").findOnce()) {
            toast("今天已签到")
            click(130, 339)
            sleep(1500)
            qiandao = 1
        }
        if ((desc("面对面扫码").findOnce()||text("面对面扫码").findOnce()||text("签到领金币").findOnce()) && qiandao == 0) {
            sphuadong("滑动(面对面扫码)")
        }

        if (descContains("快手给你发红包").findOnce() || textContains("快手给你发红包").findOnce() ) {
            toast("拆红包")
            sleep(1000)
            descTap("快手给你发红包")
            sleep(2000)
        }
        if (desc("立即提现").findOnce() || desc("分享给好友领现金").findOnce()  || desc("天天拆红包").findOnce()  || desc("本轮活动已结束").findOnce()
            || text("立即提现").findOnce() || text("分享给好友领现金").findOnce()  || text("天天拆红包").findOnce()  || text("本轮活动已结束").findOnce()) {
            toast("返回")
            idTap("close", "关闭弹窗")
            back()
            sleep(1000)
            back()
            sleep(3000)
            break;
        }

        
        if (desc("继续邀好友赚钱").findOnce()  || desc("立即安装").findOnce()  || desc("下载返利").findOnce()
            || text("继续邀好友赚钱").findOnce()  || text("立即安装").findOnce()  || text("下载返利").findOnce()) {
            back()
        }
        if (desc("请选择分享渠道").findOnce() || text("请选择分享渠道").findOnce() ) {
            back()
        }
        
    
    }
}

function qidong() {
    if (curRunApp > UIfsgs) {
        alert("所有号码已阅读完毕");
        // toast("所有号码已阅读完毕");
        sleep(3000)
        // exit()
        isToReRunTime = calIsToReRunTime();
        
        if(!UIdscq){
            // exit()
            curRunApp = UIkssz;
        }
        //待机等待重启脚本
        while(true){
            isToReRunTime = calIsToReRunTime();
            if(isToReRunTime){
                toast("到点重启脚本啦！重头搞起罗！！")
                sleep(2000)
                home()
                break;
            }else{
                // var curDate = new Date();
                // var stopDate= UIdscqRq + UIdscqHH + ':' + UIdscqMM + ":" + "45";  //停止时间 
                // var waitTime = new Date(stopDate).getTime() - curDate.getTime();   //时间差的毫秒数  
                sleep(60000)   
            }
        }
    }
    toastLog("启动快手")
    // UIkssz = UIkssz - 1
    while (true) {
        huakuai()

        isToReRunTime = calIsToReRunTime();
        if(isToReRunTime){
            toast("到点重启脚本啦！重头搞起罗！！")
            sleep(2000)
            home()
            break;
        }
        
        
        var temparr = textContains("手极速版").find()
        // if (!(temparr.length > 0)) {
        //     var wt = device.width;
        //     var hg = device.height;
        //     toastLog("没找到快手分身"+curRunApp+"滑动")
        //     Swipe(wt * 0.8, hg * 0.2, 1, hg * 0.2, 40);
        //     sleep(2000);
        //     temparr = textContains("手极速版").find()
            
        // }
        // log(temparr)
        // log(temparr.length)
        
        if (temparr.length > 0) {
            yjhp = 0
            // log(temparr.length)
            
            sleep(1000)
            // log("order:" + curRunApp)
            try{
                if (temparr.length > 1) {//undefied
                    // log(temparr)
                    var qdfs = curRunApp - 1;
                    click(temparr[qdfs].bounds().centerX(), temparr[qdfs].bounds().centerY())
                }else{
                    // log("temparr[UIkssz]:" + temparr[UIkssz])
                    click(400,520)
                }
            }catch(error){
                toastLog(error)
                return false
            }
            
            
            sleep(3000)
        }
        textTap("允许")
        if (packageName("com.kuaishou.nebula").exists()) {
            toastLog("启动快手成功")
            
            // UIkssz = UIkssz + 2
            curRunApp++;
            sleep(5000)
            break
        }
    }

}

function suohoutai() {
    sleep(3000)
    recents()
    toast("锁后台")
    sleep(2000)
    // var ra = new RootAutomator();
    if (text("快快分身").exists() || text("Auto.js").exists()) {
        let lsdesc = text("快快分身").findOnce()
        if (lsdesc) {
            // ra.press(lsdesc.bounds().centerX(), lsdesc.bounds().centerY(), 1500)
            press(lsdesc.bounds().centerX(), lsdesc.bounds().centerY(), 1500)
            sleep(2000)
            descTap("锁定任务")
            
        }
        let lsdesc2 = text("Auto.js").findOnce()
        if (lsdesc2) {
            // ra.press(lsdesc2.bounds().centerX(), lsdesc2.bounds().centerY(), 1500)
            press(lsdesc2.bounds().centerX(), lsdesc2.bounds().centerY(), 1500)
            sleep(2000)
            descTap("锁定任务")
        }
        
        
    }
    // ra.exit();
    home()
    sleep(2000)
}

function xuanfuchuang(xzfs) {
    toast("悬浮窗显示")
    sleep(1500)

    if(isUpdateWindowShow){
        updateWindow.close();
        isUpdateWindowShow = false;
    }
    if(isRunAppWindowShow){
        runAppWindow.close();
        isRunAppWindowShow = false;
    }
    sleep(1500);

    var str = "运行中分身：第" + xzfs + "个"
    toastLog(str)
    runAppWindow = floaty.window(
        <frame gravity="center" bg="#B0C4DE" marginLeft = "50"  layout_gravity="right|center">
            <text id="text" textSize="15sp" textColor="#f44336" textStyle="bold" />
        </frame>
    );
    runAppWindow.setPosition(1, 1)
    ui.run(() => {
        runAppWindow.text.setText(str);
    });
    isRunAppWindowShow = true;
    setInterval(() => { }, 1000);
    sleep(2000)
}



function UIdata() {
    UIxfc = ui.fenping.checked
    UIqhip = ui.qhip.checked
    UIzdqd = ui.zdqd.checked
    UIkssz = Number(ui.order.getText())
    UIfsgs = Number(ui.num.getText())
    UIydsj = Number(ui.ydsj.getText())
    UIdscq = ui.timedRestart.checked
    UIdscqHH = Number(ui.restartHour.getText())
    UIdscqMM = Number(ui.restartMin.getText())

    if(UIdscq){
        var reRunDate = new Date()
        var reRunYear = reRunDate.getFullYear
        var reRunMonth = reRunDate.getMonth
        var reRunDay = reRunDate.getDay
        var curHour = reRunDate.getTime.getHours
        if(UIdscqHH < curHour){
            reRunDay++;
        }
        UIdscqRq = reRunYear + "/" + reRunMonth + "/" + reRunDay + " ";
        log(UIdscqRq)
    }

    UIkuaikuai.put("UIxfc", UIxfc)
    UIkuaikuai.put("UIqhip", UIqhip)
    UIkuaikuai.put("UIzdqd", UIzdqd)
    UIkuaikuai.put("UIkssz", UIkssz)
    UIkuaikuai.put("UIfsgs", UIfsgs)
    UIkuaikuai.put("UIydsj", UIydsj)
    UIkuaikuai.put("UIdscq", UIdscq)
    UIkuaikuai.put("UIdscqRq", UIdscqRq)
    UIkuaikuai.put("UIdscqHH", UIdscqHH)
    UIkuaikuai.put("UIdscqMM", UIdscqMM)
}

function initData() {
    UIxfc = UIkuaikuai.get("UIxfc", true)
    UIqhip = UIkuaikuai.get("UIqhip", false)
    UIzdqd = UIkuaikuai.get("UIzdqd", true) 
    UIkssz = UIkuaikuai.get("UIkssz", 1) 
    UIfsgs = UIkuaikuai.get("UIfsgs", 12)  
    UIydsj = UIkuaikuai.get("UIydsj", 5)
    UIdscq = UIkuaikuai.get("UIdscq", false)
    UIdscqHH = UIkuaikuai.get("UIdscqHH", 23)
    UIdscqMM = UIkuaikuai.get("UIdscqMM", 59)

    if(UIdscq){
        var reRunDate = new Date()
        var reRunYear = reRunDate.getFullYear
        var reRunMonth = reRunDate.getMonth
        var reRunDay = reRunDate.getDay
        var curHour = reRunDate.getTime.getHours
        if(UIdscqHH < curHour){
            reRunDay++;
        }
        UIdscqRq = reRunYear + "/" + reRunMonth + "/" + reRunDay + " ";
        log(UIdscqRq)
    }
}


function idclick(idkongjian) {
    if (id(idkongjian).findOnce()) {
        let lsid = id(idkongjian).findOnce()
        if (lsid) {
            toast("点击")
            lsid.click()
            sleep(2000)
        }
    }
}

function textclick(textstr) {
    if (text(textstr).findOnce()) {
        let lstext = text(textstr).findOnce()
        if (lstext) {
            toast(textstr)
            lstext.click()
            sleep(2000)
        }
    }
}


function idTap(idkongjian, showtext) {
    if (id(idkongjian).findOnce()) {
        let lsid = id(idkongjian).findOnce()
        if (lsid) {
            toast(showtext)
            click(lsid.bounds().centerX(), lsid.bounds().centerY())
            sleep(2000)
        }
    }
}


function textTap(textstr) {
    if (text(textstr).findOnce()) {
        let lstext = text(textstr).findOnce()
        if (lstext) {
            toast(textstr)
            click(lstext.bounds().centerX(), lstext.bounds().centerY())
            sleep(2000)
        }
    }
}

function descTap(descstr) {
    if (desc(descstr).findOnce() || text(descstr).findOnce) {
        let lsdesc = desc(descstr).findOnce()
        if (lsdesc) {
            toast(descstr)
            click(lsdesc.bounds().centerX(), lsdesc.bounds().centerY())
            sleep(2000)
        }
        let lsdesc1 = text(descstr).findOnce()
        if (lsdesc1) {
            toast(descstr)
            click(lsdesc1.bounds().centerX(), lsdesc1.bounds().centerY())
            sleep(2000)
        }
    }
}

function sphuadong(str) {
    toastLog(str)
    sleep(1000)
    var swipeTime = random(50,500)
    if(str.equals("图片滑动")){
        // var automator = new RootAutomator();
        // sleep(500);
        // automator.touchDown(500,1200);
        // swipeTime = random(10,30)
        // superSwipe(automator,500, 1200,500,0,swipeTime,1);
        // sleep(20)
        // automator.touchUp();
        // sleep(500);
        // automator.exit();
        // sleep(2000);
        swipeTime = random(300,500)
        log(swipeTime)
        // var hasSwipe = swipe(500, 600, 500, 0, swipeTime)
        var hasSwipe = sml_move(500, 600, 500, 0, swipeTime)
        sleep(2000)
        if(!hasSwipe){
            swipeTime = random(400,500)
            log(swipeTime)
            // hasSwipe = swipe(500, 1200, 500, 0, swipeTime)
            hasSwipe = sml_move(500, 1200, 500, 0, swipeTime)
            sleep(2000)
        }
        
    }else{
    // var hasSwipe = swipe(500, 1500, 500, 200, 500)
    var hasSwipe = sml_move(500, 1500, 500, 200, 500)
        if(!hasSwipe){
            swipeTime = random(50,500)
            // hasSwipe = swipe(500, 1200, 500, 0, swipeTime)
            hasSwipe = sml_move(500, 1200, 500, 0, swipeTime)
            sleep(2000)
        }
        sleep(2000)
    }
    
    hdcs++
    if ((desc("日常任务").findOnce() || text("日常任务").findOnce()) && !hasSwipe && hdcs > 5) {
        toast("签到界面超5次没滑动成功，回首页")
        hdcs = 0
        back()
    }
    
}



//长距离测试
// sml_move(400, 1800, 800, 230, 1000);
//短距离测试
//sml_move(400, 1000, 800, 600, 1000);

function bezier_curves(cp, t) {
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
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x; 
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y; 
    return result; 
};

//仿真随机带曲线滑动  
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
function sml_move(qx, qy, zx, zy, time) {
    toastLog("滑动")
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy , qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy , zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    };
    // log(point[3].x)

    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }

    // log(xxy);
    gesture.apply(null, xxy);
};



function testSwipe() {
    var y = 977
    var t = 1500
    while (true) {
        isToReRunTime = calIsToReRunTime();
        if(isToReRunTime){
            toast("到点重启脚本啦！重头搞起罗！！")
            sleep(2000)
            home()
            break;
        }
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
        click(107, 772)
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

function huakuai() {
    if (text("拖动滑块").exists()) {
        // log("滑块页面出现")
        toast("滑块页面")
        sleep(1000)
        testSwipe()
    }
}
function newtime() {
    var newdate = new Date()
    return (parseInt(newdate.getTime() / 1000))
}
function jietu() {
    if (!requestScreenCapture()) {
        alert("请求截图权限失败！");
        exit();
        sleep(3000)
    }
}
function qidongapp(appmz, packagemz) {
    while (true) {
        isToReRunTime = calIsToReRunTime();
        if(isToReRunTime){
            toast("到点重启脚本啦！重头搞起罗！！")
            sleep(2000)
            home()
            break;
        }
        toast("启动" + appmz)
        app.launchApp(appmz)
        sleep(4000)
        while (text("允许").findOnce() || text("同意").findOnce() || text("确定").findOnce() || text("去授权").findOnce() || text("我知道了").findOnce() || text("继续邀好友赚钱").findOnce()|| text("立即邀请").findOnce()|| text("请选择分享渠道").findOnce()|| text("快手用户调研").findOnce()|| text("快速邀请好友赚钱").findOnce()) {
            textTap("允许")
            textTap("确定")
            textTap("同意")
            textTap("去授权")
            textTap("我知道了")
            textTap("继续邀好友赚钱")
            textTap("立即邀请")
            textTap("请选择分享渠道")
            textTap("快手用户调研")
            textTap("快速邀请好友赚钱")
        }
        sleep(2000)
        if (packageName(packagemz).exists()) {
            toastLog("启动" + appmz + "成功")
            sleep(5000)
            break
        }
        huakuai()
    }
}
function clean() {
    toast("清理后台")
    recents()
    sleep(1000)
    if(isRunAppWindowShow){
        runAppWindow.close();
        isRunAppWindowShow = false;
    }
    while (id("clearAnimView").exists()) {
        // log("清后台... ")
        // Tap(410, 1599)
        click(560, 1750)
        sleep(3000)
    }
}
function openfly() {
    toast("开启飞行模式")
    // log("开启飞行模式")
    var intent = new Intent();
    while (true) {
        toast("开启飞行")
        intent.setAction("android.settings.AIRPLANE_MODE_SETTINGS");
        app.startActivity(intent);
        sleep(2000)
        if (text("更多连接方式").exists()) {
            sleep(2000)
            break
        }
        huakuai()
        isToReRunTime = calIsToReRunTime();
        if(isToReRunTime){
            toast("到点重启脚本啦！重头搞起罗！！")
            sleep(2000)
            home()
            break;
        }
    }
    click("飞行模式")
    sleep(5000)
    toast("关闭飞行")
    click("飞行模式")
    sleep(2000)
    home()
    sleep(3000)
}


function calIsToReRunTime() {
    if(!UIdscq){
        return false; 
    }
    // var reRunHour = 23
    // var reRunMinute = 59
    var reRunSecond = 45
    var curDate = new Date();
    // log("当前时间 " + curDate)
    var durMin = curDate.getMinutes() - UIdscqMM
    // if(curDate.getHours() >= reRunHour && curDate.getMinutes() >= reRunMinute && curDate.getSeconds() >= reRunSecond) {
    if(curDate.getHours() == UIdscqHH && durMin == 0  && curDate.getSeconds() >= reRunSecond) {
        log("到点了。 " + curDate)
       return true;
    }
    return false; 

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
    gestures(time.concat(track))


    // log("time",time);
    // log("track",track);

    // var automator = new RootAutomator();
    // sleep(500);
    // automator.touchDown(sx,sy);
    // var swipeTime = random(10,30)
    // log("swipeTime",swipeTime);

    // for(var i = 0 ; i < track.length;i++){
    //     var j = 0;
    //     if(i > 0){
    //         j = i - 1;
    //     }
    //     // automator.superSwipe(automator,track[j][0],track[i][1],track[j][0],track[i][1],time[1],i);
    //     superSwipe(automator,track[j][0],track[j][1],track[i][0],track[i][1],swipeTime,i);
    //     sleep(20)
    // }
    // automator.touchUp();
    // sleep(500);
    // automator.exit();
    sleep(2000);

}


function superSwipe(automator, x1,  y1,  x2,  y2,  duration,  id) {
    var now = new Date().getTime(); //返回 1970 年 1 月 1 日至今的毫秒数。
    // duration = 10;
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


//有无红包
function isNoRedPag(){
    try{
        var redBag=id("com.kuaishou.nebula:id/circular_progress_bar").findOnce()
        if(!redBag){
            redBag=id("com.kuaishou.nebula:id/redFloat").findOnce()
        }
        if(redBag){
            return true;
        }
    }catch(error){
        toastLog(error)
        return false
    }
    toastLog("没有找到红包控件 " )
    return false;

}





//是否已经不再有收益了，是收益中的返回true 否则返回false
function isNoIncome(){
    redBagStopRegion = 0;
    var isIncome=findIncomeIcon()
    if(!isIncome){
        sleep(3000)
        isIncome=findIncomeIcon()
        if(!isIncome){
            toastLog("等待6秒，不见收益红包")
            return false
        }
    }
    // toastLog("正在收益中")
    return true;
}
//查找收入红包的图标，是收益中的返回true 否则返回false
function findIncomeIcon(){
    try{
        var redBag=id("com.kuaishou.nebula:id/circular_progress_bar").findOnce()
        if(!redBag){
            redBag=id("com.kuaishou.nebula:id/redFloat").findOnce()
        }
        if(redBag){
            // toastLog("查找到红包控件 " )
            var redBagColor;
            var redBagBounds=redBag.bounds()
            var screen=images.captureScreen();
            
            var w = redBagBounds.width();
            var h = redBagBounds.height();
            var px = redBagBounds.width() / 4;
            var py = redBagBounds.height() /4;
           
            //检测右上部(1区)有无进度条
            // toastLog("检测 红包 右上部(1区)有无进度条 " )
            var p=images.findColorEquals(screen,"#ffd235",redBagBounds.centerX(),redBagBounds.top,px, py)//黄色
            var r=images.findColorEquals(screen,"#f85050",redBagBounds.centerX(),redBagBounds.top,px, py)//红色
            if(p){
                redBagColor = "#ffd235";
                // toastLog("红包黄色")
            }else if(r){
                redredBagColor = "#f85050";
                // toastLog("红包红色")
            }else{
                redBagColor = "#ffd235";
            }
            if(p || r){ 
                if(redBagStopRegion == 1){
                    redBagStopRegion = 0;
                    return true;
                }
                //检测右上部(2区)有无进度条
                // toastLog("检测 红包 右上部(2区)有无进度条 " )
                p=images.findColorEquals(screen,redBagColor, w-px, py, px, py)//黄色
                if(!p){
                    sleep(3000)
                    //再次检测右上部(2区)有无进度条
                    // toastLog("再次检测 红包 右上部(2区)有无进度条 " )
                    p=images.findColorEquals(screen,redBagColor, w-px, py, px, py)//黄色
                    if(p){
                        redBagStopRegion = 0;
                        return true;
                    }else{
                        toastLog("右上部(2区)无检测到红包")
                        redBagStopRegion = 2;
                        return false;
                    }
                }else{
                    //检测右下部(3区)有无进度条
                    // toastLog("检测 红包 右下部(3区)有无进度条 " )
                    p=images.findColorEquals(screen,redBagColor, w-px, h/2,  px, py)//黄色
                    if(!p){
                        sleep(3000)
                        //再次检测右下部(3区)有无进度条
                        // toastLog("再次检测 红包 右下部(3区)有无进度条 " )
                        p=images.findColorEquals(screen,redBagColor, w-px, h/2,  px, py)//黄色
                        if(p){
                            redBagStopRegion = 0;
                            return true;
                        }else{
                            toastLog("右下部(3区)无检测到红包")
                            redBagStopRegion = 3;
                            return false;
                        }
                    }else{
                        //检测右下部(4区)有无进度条
                        // toastLog("检测 红包 右下部(4区)有无进度条 " )
                        p=images.findColorEquals(screen,redBagColor, w/2, h-py,  px, py)//黄色
                        if(!p){
                            sleep(3000)
                            //再次检测右下部(4区)有无进度条
                            // toastLog("再次检测 红包 右下部(4区)有无进度条 " )
                            p=images.findColorEquals(screen,redBagColor, w/2, h-py,  px, py)//黄色
                            if(p){
                                redBagStopRegion = 0;
                                return true;
                            }else{
                                toastLog("右下部(4区)无检测到红包")
                                redBagStopRegion = 4;
                                return false;
                            }
                        }else{
                            //检测左下部(5区)有无进度条
                            // toastLog("检测 红包 左下部(5区)有无进度条 " )
                            // p=images.findColorEquals(screen,redBagColor,redBagBounds.left,redBagBounds.centerY(),redBagBounds.width()/2,redBagBounds.height()/2)//黄色
                            p=images.findColorEquals(screen,redBagColor, px, h/2,  px, py)//黄色
                            if(!p){
                                sleep(3000)
                                //再次检测左下部(5区)有无进度条
                                // toastLog("再次检测 红包 左下部(5区)有无进度条 " )
                                p=images.findColorEquals(screen,redBagColor, px, h/2,  px, py)//黄色
                                if(p){
                                    redBagStopRegion = 0;
                                    return true;
                                }else{
                                    toastLog("左下部(5区)无检测到红包")
                                    redBagStopRegion = 5;
                                    return false;
                                }
                            }else{
                                //检测左下部(6区)有无进度条
                                // toastLog("检测 红包 左下部(6区)有无进度条 " )
                                p=images.findColorEquals(screen,redBagColor, redBagBounds.left, h/2,  px, py)//黄色
                                if(!p){
                                    sleep(3000)
                                    //再次检测左下部(6区)有无进度条
                                    // toastLog("再次检测 红包 左下部(6区)有无进度条 " )
                                    p=images.findColorEquals(screen,redBagColor,screen,redBagColor, redBagBounds.left, h/2,  px, py)//黄色
                                    if(p){
                                        redBagStopRegion = 0;
                                        return true;
                                    }else{
                                        toastLog("左下部(6区)无检测到红包")
                                        redBagStopRegion = 6;
                                        return false;
                                    }
                                }else{
                                    //检测左上部(7区)有无进度条
                                    // toastLog("检测 红包 左上部(7区)有无进度条 " )
                                    p=images.findColorEquals(screen,redBagColor, redBagBounds.left, py, px, py)//黄色
                                    if(!p){
                                        sleep(3000)
                                        //再次检测左上部(7区)有无进度条
                                        // toastLog("再次检测 红包 左上部(7区)有无进度条 " )
                                        // p=images.findColorEquals(screen,redBagColor,redBagBounds.left,redBagBounds.top,redBagBounds.width()/2,redBagBounds.height()/2)//黄色
                                        p=images.findColorEquals(screen,redBagColor, redBagBounds.left, py, px, py)//黄色
                                        if(p){
                                            redBagStopRegion = 0;
                                            return true;
                                        }else{
                                            toastLog("左上部(7区)无检测到红包")
                                            redBagStopRegion = 7;
                                            return false;
                                        }
                                    }else{
                                        //检测左上部(8区)有无进度条
                                        // toastLog("检测 红包 左上部(8区)有无进度条 " )
                                        p=images.findColorEquals(screen,redBagColor, px, redBagBounds.top,  px, py)//黄色
                                        if(!p){
                                            sleep(3000)
                                            //再次检测左上部(8区)有无进度条
                                            // toastLog("再次检测 红包 左上部(8区)有无进度条 " )
                                            p=images.findColorEquals(screen,redBagColor, px, redBagBounds.top,  px, py)//黄色
                                            if(p){
                                                redBagStopRegion = 0;
                                                return true;
                                            }else{
                                                toastLog("左上部(8区)无检测到红包")
                                                redBagStopRegion = 8;
                                                return false;
                                            }
                                        }else{
                                            sleep(3000)
                                            //再次检测右上部(1区)有无进度条
                                            // toastLog("再次检测 红包 右上部(1区)有无进度条 " )
                                            p=images.findColorEquals(screen,redBagColor, w/2, redBagBounds.top,  px, py)//黄色
                                            if(p){
                                                redBagStopRegion = 0;
                                                return true;
                                            }else{
                                                toastLog("右上部(1区)无检测到红包")
                                                redBagStopRegion = 1;
                                                return false;
                                            }
                                        }
                                    }

                                }
                                
                            }
                        }

                        
                    }
                }

                
            }else{
                sleep(3000)
                //再次检测右上部(1区)
                // toastLog("再次检测 红包 右上部(1区)有无进度条 " )
                p=images.findColorEquals(screen,redBagColor,redBagBounds.centerX(),redBagBounds.top,  px, py)//黄色
                if(p){
                    redBagStopRegion = 0;
                    return true
                }else{
                    toastLog("右上部(1区)无检测到红包")
                    redBagStopRegion = 1;
                    return false
                }
            }
            return p?true:false;
        }
    }catch(error){
        toastLog(error)
        return false
    }
    // toastLog("没有找到红包控件 " )
    return false;
}

//判断版本号，是否需要更新
function judgeIsNeedUpdate(){
    // threads.start(function() {
        //当前打包运行apk版本
        var curVersion = app.versionCode;
        toast("当前app版本号：" + curVersion)
        //当前autojs中运行的版本号
        // var curVersion = app.autojs.versionCode;
        // log("当前版本号： " + curVersion)

        //服务端apk版本
        var url = "http://27.155.88.170:8765/xhapi/getupdateurl4";
        // {"err":"0","msg":"ok","version":7,"url":"https://neicexia-636879301204990000.oss-cn-shanghai.aliyuncs.com/d765fcaf357947fc928a9304c68b528d.apk"}
        
        try {
            var res = http.get(url);
            // log("网页返回版本信息内容",res)
            if(res.statusCode == 200){
                //toast("请求成功");  
                //处理Json字符串
                objj = JSON.parse(res.body.string());
                //输出json化的原始内容，不这样做，在处理autojshttpget抓出来的网页源代码会出错
                // log("json内容",objj);
                //计算site里有几个子内容的代码
                // var count = Object.keys(objj.sites).length;
                // var i=0;
                // toastLog(count);

                var serverVersion = objj.version;
                updateApkUrl = objj.url;
                log("版本号：" + serverVersion + " 升级地址： " + updateApkUrl);

            //    return true;
                if(serverVersion > curVersion)
                {
                    // updateApkUrl = res.body.string().getJ
                    // toastLog("请稍候，即将开始更新………");
                    return true;
                
                }
                else
                {
                    toastLog("当前版本已是最新");
                    return false;
                }
            }else{
                toast("请求失败:" + res.statusMessage);
            }
        }catch(e){
            toast("更新发生异常： " + e);
            return false;
        }

    // });
    


}

//版本更新
function updateApk(){
    toastLog("请稍候，即将开始更新………");
    // threads.start(function() {
        sleep(1000);
        downloadApk();
        sleep(1000)
        
    // });
    
}

function downloadApk(){
    toastLog("软件更新中，开始下载...");
    var url = updateApkUrl;
    // var apkData;
    // log("apk地址： " + url)
    //发送get获取文件
    // var data = http.get(url, {
    //     headers: {
    //         'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
    //     }
    // }).body.bytes();
    // try {
        apkData = http.get(url);
        // sleep(20000)
        // apkData = http.get(url, {
        //         headers: {
        //             'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
        //         }
        //     }).body.bytes();
        // log("apk安装包： " + apkData);
        // log("apk安装包字节： " + apkData.body.bytes());
    // } catch (error) {
    //     toast("更新发生异常： " + e);
    //         return false;
    // }
    //打包后js的保存路径
    // var path="/storage/emulated/0/"+"快快"+".apk";
    // var path = getSDPath() + "/快快"+".apk";
    var path = getSDPath() + "/Download/";
    if(files.exists(path)){
        files.removeDir(path);
        sleep(2000)
    }
    try {
        // files.createWithDirs(path);
        sleep(2000)
        // log("开始保存apk文件")

        //保存本地
        //设置超时为10秒
        // http.__okhttp__.setTimeout(30000);
        // var apkData = http.get(url).body.bytes();
        // var isWriteSucc = files.writeBytes(path, apkData);
        //打开浏览器下载
        app.openUrl(url);
        sleep(1000)

        var installFinishFlag = false;
        while(!installFinishFlag){
            if(text("创建下载任务").exists()){
                // log("创建下载任务")
                textTap("确定")
                
                sleep(2000)
                
                // log(arr)
                sleep(10000)
                toast("正在保存apk文件")
                
            }
            var arr = files.listDir(path);
            sleep(15000)
            var isInstallSucc = installApk(arr);
            if(isInstallSucc){
                installFinishFlag = true;
            }

        }
        
        // if(isWriteSucc){
        //     toastLog("下载成功,文件保存在/sdcard/快快.apk");
        // }else{
        //     alert("下载失败");
        // }

        //打开浏览器下载
        // app.openUrl(url);
         //立即下载
        //  utils.UITextClick("立即下载");
        
    } catch (error) {
        log("发生异常：" + error);
    }
    

}


function installApk(apkName){
    //安装更新后的软件
    // var path = getSDPath() + "/快快"+".apk";
    var path = getSDPath() + "/Download/"+apkName[0];
    log("installApk: " + path);
    if(files.exists(path)){
        sleep(2000)
        // app.startActivity({
        // action: "android.intent.action.View",
        // type: "application/vnd.android.package-archive",
        // data: "file://storage/emulated/0/快快.apk",
        // packageName: "com.android.packageinstaller",
        // className: "com.android.packageinstaller.PackageInstallerActivity"
        // });

        //打开app安装界面
        var installFinishFlag = false;
        while(!installFinishFlag){
            app.startActivity({
            data: "file://" + path,
            type: "application/vnd.android.package-archive",
            action: "VIEW",
            flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
          })

          sleep(3000)

        //   if(descContains("解析软件包时出现问题").findOnce()){
            while(!installFinishFlag){
                if(text("解析软件包时出现问题。").exists()){
                    log("解析软件包时出现问题")
                    //   descTap("确定")
                    back()
                    sleep(1000)
                    break;
                }
                //循环找安装
                var installFlag = false;
                while(!installFlag){
                    if(text("继续安装").exists()){
                    // if(id("ok_button").findOnce()){
                        // log("开始安装……")
                        textTap("继续安装")
                        // idTap("ok_button", "安装")
                        sleep(1000)
                        if(!id("ok_button").findOnce()){
                            installFlag = true;
                        }
                        
                    }
                    if(text("安装").exists()){
                            textTap("安装")
                            // idTap("ok_button", "安装")
                            sleep(1000)
                            if(!id("ok_button").findOnce()){
                                installFlag = true;
                            }
                            
                        }
                    sleep(1000)
                }
                //安装完成
                
                while(!installFinishFlag){
                    if(text("完成").exists()){
                        log("安装完成……")
                        textTap("完成")
                        sleep(1000)
                        installFinishFlag = true;
                        update_xuanfuchuang("应用升级完成")
                        return true;
                    }
                    sleep(1000)
                } 
            }
        }
        
        

    }else{
        return false
    }

    
    // storage.clear();
}


function update_xuanfuchuang(str) {
    toast("悬浮窗显示")
    sleep(1500)
    toastLog(str)
    updateWindow = floaty.window(
        <frame gravity="center" bg="#B0C4DE" marginLeft = "50"  layout_gravity="right|center">
            <text id="text" textSize="15sp" textColor="#f44336" textStyle="bold" />
        </frame>
    );
    updateWindow.setPosition(1, 1)
    ui.run(() => {
        updateWindow.text.setText(str);
    });
    setInterval(() => { }, 1000);
    sleep(2000)
}


function getSDPath(){ 
    var sdDir = null; 
    var sdCardExist =android.os.Environment.getExternalStorageState().equals(android.os.Environment.MEDIA_MOUNTED);//判断sd卡是否存在
    if(sdCardExist)   
    {                               
      sdDir =android.os.Environment.getExternalStorageDirectory();//获取根目录
   }
    return sdDir.toString(); 
}

function saveRunApp() {
    //登录成功保存登录
    var scriptName = '/sdcard/kuaikuai/runApp.txt';
    var curDate = new Date();
    if(!files.exists(scriptName)){
        files.createWithDirs(scriptName);
        files.append(scriptName, "\n" +curDate + "   "+ curRunApp + "\n" );
    }else{
        files.append(scriptName, "\n" +curDate + "   "+ curRunApp + "\n" );
    }
}

// 清除视频缓存
function clearVideoCache() {
    sleep(2000)
    if (className("android.widget.ImageView").id("left_btn").exists()) {   
        toastLog("开始清除快手缓存")    
        // var ra = new RootAutomator();
        if (id("left_btn").exists()) {
            var lsdesc = className("android.widget.ImageView").id("left_btn").findOnce()
            if (lsdesc) {
                // var isSucc = ra.press(lsdesc.bounds().centerX(), lsdesc.bounds().centerY(), 1500)
                var isSucc = press(lsdesc.bounds().centerX(), lsdesc.bounds().centerY(), 1500)
                sleep(2000)
                if(isSucc){
                    
                }else{
                    var isJump = false;
                    for(var i = 0; i < 3; i++){
                        idTap("left_btn","打开快手设置")
                        sleep(2000)
                        lsdesc = className("android.widget.ImageView").id("left_btn").findOnce()
                        if (lsdesc) {
                            // swipe(0, 500, 800, 500, 400)
                            sml_move(0, 500, 800, 500, 400)
                            sleep(3000);
                        }else if (className("android.widget.TextView").text("设置").exists() || id("tab_settings").findOnce()) {
                            isJump = true;
                            
                        }
                    }
                    
                    
                }
                
            } 
        }
        // ra.exit(); 
        
        sleep(3000);
        if (className("android.widget.TextView").text("设置").exists() || id("tab_settings").findOnce()) {
            idTap("tab_settings","点击设置")
            sleep(3000);
            if (className("android.widget.TextView").text("清除缓存").exists()) {
                let result = textTap("清除缓存");
                if (result) {
                    toastLog("清理成功");
                }
                if(textContains("下载腾讯手机").exists()){
                    back();
                }
            }
            sleep(3000);
            
        }
        
        // home();
        back()
        sleep(1000)
        back()
    }
}




