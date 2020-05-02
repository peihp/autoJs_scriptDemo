"ui";
var color = "#009688";
storage = storages.create("bdcc");
清理内存storages = storages.create("清理内存");
深度清理storages = storages.create("清理内存");
logo = storages.create("logo");
let douyinNickName = "";
var 当前抖音关注数 = 0;
var 当前抖音点赞数 = 0;
let douyinSelfUrl = "";
var storagesdXY = storages.create("XY");
var storagesdZZ = storages.create("ZZ");

var updateApkUrl;
var updateWindow;//升级悬浮窗
var isUpdateWindowShow = false;
var runAppWindow;//启动的应用悬浮窗
var isRunAppWindowShow = false;


ui.layout(
    <drawer id="drawer">
        <vertical h="*">
        {/* <horizontal id = "logo" gravity="center" bg="#F0FFF0">
            <img w={logo.get("w",0)} h={logo.get("h",0)} src = {logo.get("logo","111aaaa")} />
        </horizontal> */}
        <button  id="Run_Btn" text="点击开始运行[音量-停止运行]" gravity="center" textSize="13sp" textStyle = "bold" textColor="#000000" bg="#C1CDC1"/>
        <horizontal>
            <Switch id="autoService" text="无障碍服务(必打开)" checked="{{auto.service != null}}" padding="5 5 5 5" textSize="15sp" />
        </horizontal>
        {/* <horizontal >
            <text text="注册码:"   gravity="left" textColor="#000000" textSize="15sp"/>
            <input id="jhm" gravity="left"  onfocus="this.blur();" hint = "请输入注册码" text={storage.get("jhm",[""])} textSize="15sp" textSizeHint = "15sp"/>
        </horizontal> */}
        <text textColor="#FF0000" marginLeft="5" marginTop="10">版本号： V1.0.1_B2020040201 </text>
        <text textColor="#FF0000" marginLeft="5" marginTop="10">此版本为root版本，手机需root，启动前一定要给“千合阅读”软件root权限</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">1：先设置“无障碍-Daemon”应用root，自启动，锁后台，并开启千合应用无障碍保活开关，</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">2：开启千合无障碍服务，开启app后台弹出界面权限，锁后台</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">3：返回手机桌面，把桌面首页滑到各个应用图标页面</text>
        <text textColor="#000000" marginLeft="5" marginTop="10">4：返回软件，输入阅读时间(左上角右滑更多设置)，点击开始，开启截图权限</text>
        <ScrollView layout_width="match_parent"  layout_gravity="center">
            <vertical>
            <horizontal>
                <text text="联众打码账号:" textColor="#000000" textSize="15sp"  />
                <input id="联众账号" hint = "请输入账号" text={storage.get("联众账号","")} textColor="#000000" textSize="15sp" w="auto" />
                <text text="密码:" textColor="#000000" textSize="15sp" />
                <input id="联众密码" hint = "请输入密码" text={storage.get("联众密码","")} textColor="#000000" textSize="15sp" w="auto" />
            </horizontal>
            <horizontal layout_width="match_parent">
                <checkbox id="yjxx" checked ={storage.get("yjxx",[true])} ></checkbox>
                <text text="夜间休息时间,从" gravity="left" textSize="15" />
                <input id="yjxx1" gravity="left" text={storage.get("yjxx1",[2])}/>
                <text text="点开始到" gravity="left" textSize="15" />
                <input id="yjxx2" gravity="left" text ={storage.get("yjxx2",[6])}/>
                <text text="点结束" gravity="left" textSize="15"/>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="tdsd" checked ={storage.get("tdsd",[false])} ></checkbox>
                <text text="从" gravity="left" textSize="15" />
                <input id="tdsd1" gravity="left" text={storage.get("tdsd1",[14])}/>
                <text text="点到" gravity="left" textSize="15" />
                <input id="tdsd2" gravity="left" text ={storage.get("tdsd2",[18])}/>
                <text text="点时间段内只运行" gravity="left" textSize="15"/>
                <spinner id="tdsdxz" entries="阅读平台|任务平台|其他平台" textSize="10sp" textColor="#F68D06"/>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="dsdt2" checked ={storage.get("dsdt2",[false])} ></checkbox>
                <text text="从" gravity="left" textSize="15" />
                <input id="dsdt11" gravity="left" text={storage.get("dsdt11",[14])}/>
                <text text="点到" gravity="left" textSize="15" />
                <input id="dsdt22" gravity="left" text ={storage.get("dsdt22",[18])}/>
                <text text="点时间段内只运行" gravity="left" textSize="15"/>
                <spinner id="dsdt2xz" entries="阅读平台|任务平台|其他平台" textSize="10sp" textColor="#F68D06"/>
            </horizontal>
            
            <horizontal>
                  <text id="DYattion" text={storage.get("DYattion","关注:")} layout_weight="1" gravity="center"/>
                  <text id="DYlike" text={storage.get("DYlike","喜欢:")} layout_weight="1" gravity="center"/>
                  <text id="DYNickmeName" text={storage.get("DYNickmeName","昵称:")}ems="4" ellipsize="end" maxLines="1" layout_weight="1" gravity="center"/>
            </horizontal>

            <horizontal layout_width="match_parent" >
                <text  id="douyinSelfUrl" textColor="blue" text="点击设置抖音个人中心链接" layout_weight="1" gravity="center"/>
            </horizontal>
            
            <horizontal gravity="center_horizontal">
                <button id="一键勾选" text="一键勾选或取消" h="40" w="auto" textSize="12sp" />
                <button id="抖音下载" text="抖音下载"  h="40" w="auto" textSize="12sp" />
                <button id="Download一键下载" text="一键下载或更新"  h="40" w="auto" textSize="12sp" />
            </horizontal>


            <text text="阅读平台" gravity="center" textSize="17" textColor = "#8B4513"/>
            <horizontal layout_width="match_parent">
                <checkbox id="jkd" checked ={storage.get("jkd",[false])} ></checkbox>
                <text text="1.聚看点" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="jkd1" gravity="left" text={storage.get("jkd1",[120])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="jkd2" gravity="left" text={storage.get("jkd2",[0])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download1" text="点击下载" h="40" w="75" textSize="12sp"/>
            </horizontal>
            </horizontal>
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "jkdbb"textSize="10" />
            </horizontal>
            <horizontal layout_width="match_parent">
                <checkbox id="wlkk" checked ={storage.get("wlkk",[false])} ></checkbox>
                <text text="2.微鲤" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="wlkk1" gravity="left" text={storage.get("wlkk1",[100])}/>
                <text text="小视频" gravity="left" textSize="15" />
                <input id="wlkk2" gravity="left" text={storage.get("wlkk2",[10])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download2" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "wlkkbb"textSize="10" />
            </horizontal>
            <horizontal layout_width="match_parent">
                <checkbox id="sb" checked ={storage.get("sb",[false])} ></checkbox>
                <text text="3.刷宝" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="sb2" gravity="left" text={storage.get("sb2",[50])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download4" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "sbbb"textSize="10" />
            </horizontal>
            <horizontal layout_width="match_parent">
                <checkbox id="bbsp" checked ={storage.get("bbsp",[false])} ></checkbox>
                <text text="4.波波视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="bbsp2" gravity="left" text={storage.get("bbsp2",[90])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download5" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "bbspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="qls" checked ={storage.get("qls",[false])} ></checkbox>
                <text text="5.趣铃声" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="qls2" gravity="left" text={storage.get("qls2",[200])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download6" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "qlsbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="sdhz" checked ={storage.get("sdhz",[false])} ></checkbox>
                <text text="6.闪电盒子" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="sdhz1" gravity="left" text={storage.get("sdhz1",[70])}/>
                <text text="购物" gravity="left" textSize="15" />
                <input id="sdhz2" gravity="left" text={storage.get("sdhz2",[40])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download7" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "sdhzbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="kls" checked ={storage.get("kls",[false])} ></checkbox>
                <text text="7.酷铃声" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="kls2" gravity="left" text={storage.get("kls2",[300])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download10" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "klsbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ttqw" checked ={storage.get("ttqw",[false])} ></checkbox>
                <text text="8.天天趣闻" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章(包含视频)" gravity="left" textSize="15" />
                <input id="ttqw1" gravity="left" text={storage.get("ttqw1",[140])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download11" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ttqwbb"textSize="10" />
            </horizontal>


            <horizontal layout_width="match_parent">
                <checkbox id="hbhz" checked ={storage.get("hbhz",[false])} ></checkbox>
                <text text="9.红包盒子" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="hbhz1" gravity="left" text={storage.get("hbhz1",[90])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="hbhz2" gravity="left" text={storage.get("hbhz2",[60])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download13" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "hbhzbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="hs" checked ={storage.get("hs",[false])} ></checkbox>
                <text text="10.火山极速版" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="hs2" gravity="left" text={storage.get("hs2",[150])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download14" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "hsbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ks" checked ={storage.get("ks",[false])} ></checkbox>
                <text text="11.快手极速版" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="ks2" gravity="left" text={storage.get("ks2",[200])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download15" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ksbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="xk" checked ={storage.get("xk",[false])} ></checkbox>
                <text text="12.想看" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="xk1" gravity="left" text={storage.get("xk1",[70])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="xk2" gravity="left" text={storage.get("xk2",[50])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download16" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "xkbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="kkd" checked ={storage.get("kkd",[false])} ></checkbox>
                <text text="13.快看点" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="kkd1" gravity="left" text={storage.get("kkd1",[160])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="kkd2" gravity="left" text={storage.get("kkd2",[0])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download17" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "kkdbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="dy" checked ={storage.get("dy",[false])} ></checkbox>
                <text text="14.抖音极速版" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="dy2" gravity="left" text={storage.get("dy2",[150])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download21" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "dybb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="qtt" checked ={storage.get("qtt",[false])} ></checkbox>
                <text text="15.趣头条" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="qtt1" gravity="left" text={storage.get("qtt1",[60])}/>
                <text text="小视频" gravity="left" textSize="15" />
                <input id="qtt2" gravity="left" text={storage.get("qtt2",[30])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download22" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "qttbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ddxw" checked ={storage.get("ddxw",[false])} ></checkbox>
                <text text="16.点点新闻" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="ddxw1" gravity="left" text={storage.get("ddxw1",[35])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="ddxw2" gravity="left" text={storage.get("ddxw2",[5])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download23" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ddxwbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ylkk" checked ={storage.get("ylkk",[false])} ></checkbox>
                <text text="17.有料看看" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="ylkk1" gravity="left" text={storage.get("ylkk1",[90])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="ylkk2" gravity="left" text={storage.get("ylkk2",[0])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download24" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ylkkbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="cdsp" checked ={storage.get("cdsp",[false])} ></checkbox>
                <text text="18.彩蛋视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="cdsp2" gravity="left" text={storage.get("cdsp2",[200])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download25" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "cdspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="hhspjsb" checked ={storage.get("hhspjsb",[false])} ></checkbox>
                <text text="19.火火视频极速版" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="hhspjsb2" gravity="left" text={storage.get("hhspjsb2",[100])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download26" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "hhspjsbbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="bsjdsp" checked ={storage.get("bsjdsp",[false])} ></checkbox>
                <text text="20.变身记短视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="bsjdsp2" gravity="left" text={storage.get("bsjdsp2",[100])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download27" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "bsjdspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="hstt" checked ={storage.get("hstt",[false])} ></checkbox>
                <text text="21.花生头条" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="hstt1" gravity="left" text={storage.get("hstt1",[90])}/>
                <text text="视频" gravity="left" textSize="15" />
                <input id="hstt2" gravity="left" text={storage.get("hstt2",[10])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download28" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "hsttbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="bxtt" checked ={storage.get("bxtt",[false])} ></checkbox>
                <text text="22.百姓头条" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="bxtt1" gravity="left" text={storage.get("bxtt1",[70])}/>
                <text text="视频" gravity="left" textSize="15" />
                <text text="(无奖励)" gravity="left" textSize="10" />
                <input id="bxtt2" gravity="left" text={storage.get("bxtt2",[0])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download29" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "bxttbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="yydsp" checked ={storage.get("yydsp",[false])} ></checkbox>
                <text text="23.有颜短视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="yydsp2" gravity="left" text={storage.get("yydsp2",[300])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download31" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "yydspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ttaql" checked ={storage.get("ttaql",[false])} ></checkbox>
                <text text="24.天天爱清理" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="ttaql2" gravity="left" text={storage.get("ttaql2",[200])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download36" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ttaqlbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="hlhz" checked ={storage.get("hlhz",[false])} ></checkbox>
                <text text="25.欢乐盒子" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="文章" gravity="left" textSize="15" />
                <input id="hlhz1" gravity="left" text={storage.get("hlhz1",[70])}/>
                <text text="购物" gravity="left" textSize="15" />
                <input id="hlhz2" gravity="left" text={storage.get("hlhz2",[40])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download42" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "hlhzbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="cddsp" checked ={storage.get("cddsp",[false])} ></checkbox>
                <text text="26.长豆短视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="cddsp2" gravity="left" text={storage.get("cddsp2",[300])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download43" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "cddspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="ms" checked ={storage.get("ms",[false])} ></checkbox>
                <text text="26.魔视" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="ms2" gravity="left" text={storage.get("ms2",[300])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download44" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "msbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="nhllq" checked ={storage.get("nhllq",[false])} ></checkbox>
                <text text="27.你好浏览器" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="nhllq2" gravity="left" text={storage.get("nhllq2",[300])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download45" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "nhllqbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="kddsp" checked ={storage.get("kddsp",[false])} ></checkbox>
                <text text="28.快逗短视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="kddsp2" gravity="left" text={storage.get("kddsp2",[100])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download47" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "kddspbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="xchdsp" checked ={storage.get("xchdsp",[false])} ></checkbox>
                <text text="28.小吃货短视频" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="视频" gravity="left" textSize="15" />
                <input id="xchdsp2" gravity="left" text={storage.get("xchdsp2",[100])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download48" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "xchdspbb"textSize="10" />
            </horizontal>

            <text text="任务平台" gravity="center" textSize="17" textColor = "#8B4513"/>

            <horizontal layout_width="match_parent" gravity="center_horizontal">
                <checkbox id="zzxyb" checked ={storage.get("zzxyb",[false])}  ></checkbox>
                <text text="1.1.攒攒(协议版)" gravity="left" textSize="20" textColor = "#FFA500"  />
    
            </horizontal>
            
            <horizontal layout_width="match_parent"  gravity="center_horizontal">
                <button id="zanzanLg" text={storagesdZZ.get("lg","未登录")} h="40" w="75" textSize="12sp" color="#ff5d85ff" style="Widget.AppCompat.Button.Borderless.Colored" gravity="center"/>
                <button id="zanzanSet" text="设置参数" h="40" w="75" textSize="12sp" color="#ff5d85ff" style="Widget.AppCompat.Button.Borderless.Colored" gravity = "conter"/>
                <button id="tolog" text="查看日志" h="40" w="75" textSize="12sp" color="#ff5d85ff" style="Widget.AppCompat.Button.Borderless.Colored" gravity = "conter"/>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="zz" checked ={storage.get("zz",[false])} ></checkbox>
                <text text="1.2.攒攒" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="zz1" gravity="left" text={storage.get("zz1",[4])}/>
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="zz2" gravity="left" text={storage.get("zz2",[1])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download20" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="jkb" checked ={storage.get("jkb",[false])} ></checkbox>
                <text text="2.集卡帮" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="jkb1" gravity="left" text={storage.get("jkb1",[4])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download49" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "jkbbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="yb" checked ={storage.get("yb",[false])} ></checkbox>
                <text text="3.易帮" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="抖音次数" gravity="left" textSize="15" />
                <input id="yb2" gravity="left" text={storage.get("yb2",[60])}/>
                <text text="快手次数" gravity="left" textSize="15" />
                <input id="yb1" gravity="left" text={storage.get("yb1",[5])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download34" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "ybbb"textSize="10" />
            </horizontal>
            
            <horizontal layout_width="match_parent">
                <checkbox id="llyd" checked ={storage.get("llyd",[false])} ></checkbox>
                <text text="4.66联盟" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="llyd1" gravity="left" text={storage.get("llyd1",[10])}/>
                <text text="K手进入" gravity="left" textSize="12" />
                <input id="llyd2" gravity="left" text={storage.get("llyd2",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download33" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="llxhs" checked ={storage.get("llxhs",[false])} ></checkbox>
                <text text="5.66联盟" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="小红薯进入" gravity="left" textSize="12" />
                <input id="llxhs1" gravity="left" text={storage.get("llxhs1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download50" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "llydbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="jjyd" checked ={storage.get("jjyd",[false])} ></checkbox>
                <text text="6.99阅读" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入次数" gravity="left" textSize="11" />
                <input id="jjyd1" gravity="left" text={storage.get("jjyd1",[10])}/>
                <text text="K手进入次数" gravity="left" textSize="11" />
                <input id="jjyd2" gravity="left" text={storage.get("jjyd2",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download37" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "jjydbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="wkzz" checked ={storage.get("wkzz",[false])} ></checkbox>
                <text text="7.微客众智" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="wkzz1" gravity="left" text={storage.get("wkzz1",[4])}/>
                <text text="K手进入" gravity="left" textSize="12" />
                <input id="wkzz2" gravity="left" text={storage.get("wkzz2",[1])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download35" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="wkzzxhs" checked ={storage.get("wkzzxhs",[false])} ></checkbox>
                <text text="8.微客众智" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="小红薯进入" gravity="left" textSize="12" />
                <input id="wkzzxhs1" gravity="left" text={storage.get("wkzzxhs1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download39" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "wkzzbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="wwz" checked ={storage.get("wwz",[false])} ></checkbox>
                <text text="9.蛙蛙赚" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="wwz1" gravity="left" text={storage.get("wwz1",[4])}/>
                <text text="K手进入" gravity="left" textSize="12" />
                <input id="wwz2" gravity="left" text={storage.get("wwz2",[1])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download38" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="wwzxhs" checked ={storage.get("wwzxhs",[false])} ></checkbox>
                <text text="10.蛙蛙赚" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="小红薯进入" gravity="left" textSize="12" />
                <input id="wwzxhs1" gravity="left" text={storage.get("wwzxhs1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download41" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "wwzbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="mrbk" checked ={storage.get("mrbk",[false])} ></checkbox>
                <text text="11.每日必看" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="mrbk1" gravity="left" text={storage.get("mrbk1",[4])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download3" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "mrbkbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="xlx" checked ={storage.get("xlx",[false])} ></checkbox>
                <text text="12.小龙虾" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="xlx1" gravity="left" text={storage.get("xlx1",[4])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download18" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "xlxbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="jtb" checked ={storage.get("jtb",[false])} ></checkbox>
                <text text="13.截图宝" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="D音进入" gravity="left" textSize="12" />
                <input id="jtb1" gravity="left" text={storage.get("jtb1",[10])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download51" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>

            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "jtbbb"textSize="10" />
            </horizontal>

            <text text="其他平台" gravity="center" textSize="17" textColor = "#8B4513"/>
            <horizontal layout_width="match_parent">
                <checkbox id="wbtc" checked ={storage.get("wbtc",[false])} ></checkbox>
                <text text="1.58同城" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="进入次数" gravity="left" textSize="15" />
                <input id="wbtc1" gravity="left" text={storage.get("wbtc1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download30" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "wbtcbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="jnmfxs" checked ={storage.get("jnmfxs",[false])} ></checkbox>
                <text text="2.角牛免费小说" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="进入次数" gravity="left" textSize="15" />
                <input id="jnmfxs1" gravity="left" text={storage.get("jnmfxs1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download32" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "jnmfxsbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="dsj" checked ={storage.get("dsj",[false])} ></checkbox>
                <text text="3.电视家" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="进入次数" gravity="left" textSize="15" />
                <input id="dsj1" gravity="left" text={storage.get("dsj1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download40" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
           <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "dsjbb"textSize="10" />
            </horizontal>

            <horizontal layout_width="match_parent">
                <checkbox id="fqmfxs" checked ={storage.get("fqmfxs",[false])} ></checkbox>
                <text text="4.番茄免费小说" gravity="left" textSize="20" textColor = "#FFA500" />
                <text text="进入次数" gravity="left" textSize="15" />
                <input id="fqmfxs1" gravity="left" text={storage.get("fqmfxs1",[2])}/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="Download46" text="点击下载" h="40" w="75" textSize="12sp" />
                </horizontal>
            </horizontal>
            
            <horizontal layout_width="match_parent">
            <text text="               版本号:" gravity="left" id = "fff"textSize="10" />
            <text text="" gravity="left" id = "fqmfxsbb"textSize="10" />
            </horizontal>
            </vertical>
        </ScrollView>
        
    </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="300">
        <ScrollView layout_width="match_parent">
        <vertical>
        <img w="*" h="130" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2019/12/33669-1.png"/>
            <horizontal >
                <Switch id="autoService" checked="{{auto.service != null}}"  switchMinWidth="70sp" />
                <text text="无障碍(必选)"  textSize="17sp" textColor="#8B6969" textStyle="bold" /> */}
            </horizontal>
            <horizontal >
                <Switch id="清理内存" checked ={清理内存storages.get("是否清理",[false])} switchMinWidth="70sp" />
                <text text="清理SD卡"  textSize="13sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal >
                    <Switch id="深度清理" checked ={深度清理storages.get("深度清理",[false])} switchMinWidth="70sp" />
                    <text text="深度清理"  textSize="13sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal >
                <Switch id="自动提现" checked ={storage.get("自动提现",[false])} switchMinWidth="70sp" />
                <text text="自动提现"  textSize="13sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal >
                <Switch id="llydtpjc" checked={storage.get("llydtpjc",[false])}  switchMinWidth="70sp" />
                <text text="错误图片检测"  textSize="13sp" textColor="#F68D06" textStyle="bold" /> */}
            </horizontal>
            <horizontal >
                    <Switch id="收关喜" checked ={storage.get("分享",[false])} switchMinWidth="70sp" />
                    <text text="每篇文章" textSize="13sp" textColor="#F68D06" textStyle="bold" />
                    <input id="收关喜比例" text={storage.get("收关喜比例",[3])} textSize="13sp" />
                    <text textSize="13sp" textColor="#F68D06" text="%概率，收藏|关注|喜欢" textStyle="bold" />
                    <text text="" textSize="13sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal>
                <Switch  id="分享" checked ={storage.get("分享",[false])} switchMinWidth="70sp" />
                <text text="分享勾选" textSize="13sp" textColor="#F68D06" textStyle="bold" />
                <input id="分享比例" text={storage.get("分享比例",[3])} textSize="13sp" />
                <text textSize="13sp" textColor="#F68D06" text="%概率分享至朋友圈" textStyle="bold" />
            </horizontal>
            <horizontal>
                    <Switch id="wxyh" checked ={storage.get("wxyh",[false])} switchMinWidth="70sp" />
                    <text text="开启微信养号" textSize="13sp" textColor="#F68D06" textStyle="bold" />
                    <input id="wxyhjg" text ={storage.get("wxyhjg",[350])} textSize="13sp" />
                    <text text="分钟，运行一次" textSize="13sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal>
                    <Switch id="dspyh" checked ={storage.get("dspyh",[false])} switchMinWidth="70sp" />
                    <text text="开启短视频养号" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                    <input id="dspjg" text ={storage.get("dspjg",[350])} textSize="10sp" />
                    <text text="分钟一次,每次" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                    <input id="dspcs" text ={storage.get("dspcs",[20])} textSize="10sp" />
                    <text text="个视频" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                    <spinner id="dsplx" entries="D音和K手|D音|K手" textSize="10sp" textColor="#F68D06"  />
            </horizontal>
            <horizontal >
                <Switch  id="自动上传作品" checked ={storage.get("自动上传作品",[false])}  switchMinWidth="50sp" />
                <text text="自动上传(D音,K手),每日" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                <input id="zpcs" text ={storage.get("zpcs",[1])} textSize="10sp" />
                <text text="作品" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                <spinner id="spzdsczp" entries="下载上传|拍摄上传" textSize="10sp" textColor="#F68D06"  />
            </horizontal>
            <horizontal >
                <Switch  id="观看直播时间" checked ={storage.get("观看直播时间",[false])}  switchMinWidth="50sp" />
                <text text="开启看直播养号,每次观看" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                    <input id="kzbsj" text ={storage.get("kzbsj",[10])} textSize="10sp" />
                    <text text="分钟" textSize="10sp" textColor="#F68D06" textStyle="bold" />
            </horizontal>
            <horizontal >
                <Switch  id="自动取消关注" checked ={storage.get("自动取消关注",[false])}  switchMinWidth="50sp" />
                <text text="开启取消关注" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                <text text="每天取消" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                <input id="qxgzcs" text ={storage.get("qxgzcs",[20])} textSize="10sp" />
                <text text="个关注" textSize="10sp" textColor="#F68D06" textStyle="bold" />
                <spinner id="qxgzlx" entries="D音和K手|D音|K手" textSize="10sp" textColor="#F68D06"  />
            </horizontal>
            <horizontal >
                <button layout_weight="2" id="Re_Btn" text="重置文章记录" textStyle = "bold" textColor="#000000" bg="#668B8B"/>
                <button layout_weight="2" id="Re_Btn2" text="重置提现记录" textStyle = "bold" textColor="#000000" bg="#765953"/>
            </horizontal>
            <horizontal >
            <button layout_weight="2" id="手动更新" text="手动更新Apk" textStyle = "bold" textColor="#000000" bg="#CDC9A5" />
            <button layout_weight="2" id="手动代码" text="手动更新云脚本"  textStyle = "bold" textColor="#000000" bg="#C1FFC1" />
            </horizontal>
            </vertical>
        </ScrollView>
        </vertical>
    </drawer>
);
threads.start(function() {
    var w = floaty.rawWindow(
        <frame gravity="center">
            <text id="text" textSize="20sp" textStyle = "bold" textColor="#561215" text = "右滑更多设置"></text>
        </frame>
    );
    w.setPosition(wt*0.3, hg*0.5);
    setTimeout(()=>{
        w.close();
    }, 2000);
});
ui.zanzanLg.click((view)=>{
    var dialog = new android.app.AlertDialog.Builder(activity).create()
    dialog.setView(new android.widget.EditText(context))
    dialog.show();
    dialog.setCancelable(true);
    var window = dialog.getWindow(); 
    window.setDimAmount(0.6);
    if(ui.zanzanLg.getText()=="未登录"){
        var zanzanLg=ui.inflate(
        <vertical>
            <text text="攒攒登录" size="19" color="#000000" padding="12 12"/>      
            <linear>
                <text gravity="center" color="#555555" size="17" text="账号 "/>
                <input textColor="#000000" inputType="number" id="username" w="*"/>
            </linear>
            <linear>
                <text gravity="center" color="#555555" size="17" text="密码 "/>
                <input textColor="#000000" id="password" w="*"/>
            </linear>
            <relative>
                <button id="cancle" layout_alignParentLeft="true" text="取消" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                <button id="save" layout_alignParentRight="true" text="登录" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
            </relative>
       </vertical>)
        window.setContentView(zanzanLg);
        zanzanLg.cancle.click(()=>{dialog.dismiss();});
        zanzanLg.save.click(() =>{
            uname = zanzanLg.username.getText();
            pword = zanzanLg.password.getText();
            var pL= login(uname,pword); //登录攒攒帐号
            if(!pL.data||!pL.data.token){toast("登录失败!");return;} //fixme
            
            toast("登陆成功!");
            ui.zanzanLg.setText("账号管理");
            storagesdZZ.put("lg","账号管理");
            
            storagesdZZ.put("username",uname+"")
            storagesdZZ.put("password",pword+"")
            storagesdZZ.put("token",pL.data.token);
            ui.run(function(){
                refreshZZ();
            });
            dialog.dismiss();
        });
    }else{
        var zanzanLg=ui.inflate(
            <vertical>
                <vertical>
                <text  id = "integral" text={storagesdZZ.get("inte","")+""}size="19" color="#000000" padding="12 12"/>      
                </vertical>
            <horizontal layout_width="match_parent">
            <button id="cancle" layout_alignParentLeft="true" text="取消" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                <horizontal layout_width="match_parent"  gravity="right">
                <button id="exitR" layout_alignParentLeft="true" text="退出登录" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                </horizontal>
            </horizontal>
           </vertical>)
            window.setContentView(zanzanLg);
            zanzanLg.cancle.click(()=>{dialog.dismiss();});
            zanzanLg.exitR.click(()=>{
                storages.remove("ZZ");
                ui.zanzanLg.setText("未登录");
                storagesdZZ.put("lg","未登录");
                dialog.dismiss();
            });
    }
});
ui.zanzanSet.click((view)=>{
    var dialog = new android.app.AlertDialog.Builder(activity).create()
    dialog.setView(new android.widget.EditText(context))
    dialog.show();
    dialog.setCancelable(false)
    var window = dialog.getWindow(); 
    window.setDimAmount(0.6);
    var zanzanSet=ui.inflate(
        <vertical>    
            <linear gravity="center">  
                  <Switch id="DYcheck" text="抖音" checked ={storage.get("DYcheck",[false])}/>
                    <text  text = "抖音任务数量:" textSize="20" />
                    <input id="DYnumb" text ={storage.get("DYnumb",[500])} textSize="13sp" />
              </linear>
              <linear gravity="center">  
                <checkbox id="DYattention" text="关注" checked ={storage.get("DYattention",[false])} />
                    {/* <checkbox id="DYreview" text="评论" layout_weight="1"/> */}
                <checkbox id="DYSpecial" text="特价任务" checked ={storage.get("DYSpecial",[false])}/>
              </linear>
              <linear gravity="center">
                    <Switch id="KScheck" text="快手"  checked ={storage.get("KScheck",[false])}/>
                    <text  text = "快手任务数量:" textSize="20" />
                    <input id="KSnumb" text ={storage.get("KSnumb",[100])} textSize="13sp" />
              </linear>
 
              {/* <View h="1"/> */}
              <relative>
                <button id="cancle" layout_alignParentLeft="true" text="取消" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                <button id="save" layout_alignParentRight="true" text="保存" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
            </relative>
              </vertical>
        )
        window.setContentView(zanzanSet);
        zanzanSet.cancle.click(()=>{dialog.dismiss();});
        zanzanSet.save.click(() =>{
        storage.put("DYcheck",zanzanSet.DYcheck.isChecked());
        storage.put("DYnumb",zanzanSet.DYnumb.getText()+"");
        storage.put("DYattention",zanzanSet.DYattention.isChecked());
        storage.put("DYSpecial",zanzanSet.DYSpecial.isChecked());

        storage.put("KScheck",zanzanSet.KScheck.isChecked());
        storage.put("KSnumb",zanzanSet.KSnumb.getText()+"");
    });
});
//设置个人中心连接
ui.douyinSelfUrl.click((view)=>{
    var dialog = new android.app.AlertDialog.Builder(activity).create()
    dialog.setView(new android.widget.EditText(context))
    dialog.show();
    dialog.setCancelable(false)
    var window = dialog.getWindow(); 
    window.setDimAmount(0.6);
    var douyinselfUrl=ui.inflate( 
             <vertical>
               <text text="个人中心链接" size="19" color="#000000" padding="12 12"/> 
               <vertical margin="25 0 25 10">
                  <linear>
                    <input textColor="#000000" id="douyinselfUrl" w="*" text="{{douyinSelfUrl}}"/>
                  </linear>
               </vertical>
                 <relative>
                   <button id="cancle" layout_alignParentLeft="true" text="取消" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                   <button id="save" layout_alignParentRight="true" text="保存" style="Widget.AppCompat.Button.Borderless.Colored" w="auto"/>
                 </relative>              
             </vertical>)
   window.setContentView(douyinselfUrl);  
   douyinselfUrl.cancle.click(()=>{dialog.dismiss();});
   douyinselfUrl.save.click(() =>{
        if (!douyinselfUrl.douyinselfUrl.text()){toast("链接不能为空!");return;}
        try{
            var url =  douyinselfUrl.douyinselfUrl.text();
           url = dealUrl(url);
           if(url.toString().indexOf("v.douyin.com") ==-1){
                toast("链接不正确!");
                return;
            }
         }catch(e){
            toast("链接不正确!");
            return;
         }
        threads.start(function() {     
            douyinSelfUrl = douyinselfUrl.douyinselfUrl.text();
            storagesdXY.put("douyinselfUrl",douyinselfUrl.douyinselfUrl.text());
            refreshPram();
            dialog.dismiss();
        });          
    });
});
 


auto.setWindowFilter(function (window) { return true });
const wt = device.width;
const hg = device.height;
runB = true;

// bbyreg = require('bbyreg.js');
// bbyreg.变量_Token = "f75ca85c1e5f54c17be00dc15885f363";
// bbyreg.变量_更新Token = "f75ca85c1e5f54c17be00dc15885f363";

// bbyreg.变量_机器码 = device.getIMEI() + device.getAndroidId();

// bbyreg.变量_注册码 = ui.jhm.getText() + "";


// var name = storages.create("name");
// bbyreg.变量_项目名称 = name.get("name","免R_千合阅读");

// bbyreg.变量_解绑密码 = "123456";
取消关注时间 = 12;
jtqx = true;
scyx = true;
var scriptName = 'mdata.js';
var AppAr;
var storagesd = storages.create("lljv");
var storagesd2 = storages.create("lljv2");
const ZZ_version="1.1.12"
var jbgxsj = storages.create("jbgxsj");
var 脚本地址 = storages.create("脚本地址");
var LeanCloudConfig = {
    appId: 'ze33OVmBOoQeh17W6aY6tS8U-9Nh9j0Va',
    appKey: 'PmoDq7a4hLe9VRHESYp9Gsl4',
}

var 控件点击2 =function (widget) {
    var continuePlayerBtn = widget.findOnce();
    if (continuePlayerBtn) {
        Tap(continuePlayerBtn.bounds().centerX(), continuePlayerBtn.bounds().centerY());
        sleep(2000);
        return true;
    }else{
        return false;
    }
}
var 随机滑动2 = function  (x,y,xx,yy,延迟){
    var x1,y1,x2,y2;
    x1 = random(Math.round(wt*x[0]),Math.round(wt*x[1]));
    y1 = random(Math.round(hg*y[0]),Math.round(hg*y[1]));
    x2 = random(Math.round(wt*xx[0]),Math.round(wt*xx[1]));
    y2 = random(Math.round(hg*yy[0]),Math.round(hg*yy[1]));
    // swipe(x1,y1,x2,y2,延迟);
    Swipe(x1,y1,x2,y2,延迟);
}
var getRandom2 = function(probability){
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
写入版本号();
ui.tdsdxz.setSelection(storage.get("tdsdxz",[0]));
ui.dsdt2xz.setSelection(storage.get("dsdt2xz",[0]));
ui.dsplx.setSelection(storage.get("dsplx",[0]));
ui.qxgzlx.setSelection(storage.get("qxgzlx",[0]));
ui.spzdsczp.setSelection(storage.get("spzdsczp",[0]));
// 更新();


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



function dealUrl(url){
    return url.match("http[s]?://(?:(?!http[s]?://)[a-zA-Z]|[0-9]|[$\-_@.&+/]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+");
 }

 function get_number(str) {
    mapCode2Name = JSON.parse("{\"0xe602\":\"num_\",\"0xe605\":\"num_3\",\"0xe606\":\"num_4\",\"0xe603\":\"num_1\",\"0xe604\":\"num_2\",\"0xe618\":\"num_\",\"0xe619\":\"num_4\",\"0xe60a\":\"num_8\",\"0xe60b\":\"num_9\",\"0xe60e\":\"num_\",\"0xe60f\":\"num_5\",\"0xe60c\":\"num_4\",\"0xe60d\":\"num_1\",\"0xe612\":\"num_6\",\"0xe613\":\"num_8\",\"0xe610\":\"num_3\",\"0xe611\":\"num_2\",\"0xe616\":\"num_1\",\"0xe617\":\"num_3\",\"0xe614\":\"num_9\",\"0xe615\":\"num_7\",\"0xe609\":\"num_7\",\"0xe607\":\"num_5\",\"0xe608\":\"num_6\",\"0xe61b\":\"num_5\",\"0xe61c\":\"num_8\",\"0xe61a\":\"num_2\",\"0xe61f\":\"num_6\",\"0xe61d\":\"num_9\",\"0xe61e\":\"num_7\"}");
    mapCode2Font = JSON.parse("{\"num_9\":8,\"num_5\":5,\"num_6\":6,\"num_\":1,\"num_7\":9,\"num_8\":7,\"num_1\":0,\"num_2\":3,\"num_3\":2,\"num_4\":4}");
    return mapCode2Font[mapCode2Name[str]];
}

 function get_font(shortid) {
    let sid = ""
    for (i in shortid) {
        if (shortid[i].indexOf("&#") != -1) {
            let id = "0" + shortid[i].match(/\"\> \&\#(.*?)\;/)[1]
            sid = sid + get_number(id);
        } else {
            sid = sid + (shortid[i].match(/>(.*?)/))
        }
    }
    return sid;
}

function 抖音检测(){
    var url = storagesdXY.get("douyinselfUrl");
    url = dealUrl(url);
    let r = http.get(url.toString()).body.string();
    douyinNickName = r.match(/nickname\"\>(.*?)\</)[1];
    当前抖音关注数=get_font(r.match(/signature.*?关注/)[0].match(/\"\> (\S*)\;/g));
    当前抖音点赞数 = get_font(r.match(/喜欢.*?div/)[0].match(/\"\> (\S*)\;/g));
}
function 抖音关注点赞数(flag){
    抖音检测();
    ui.run(function(){
        ui.DYlike.setText("喜欢："+当前抖音点赞数);
        ui.DYattion.setText("关注:"+当前抖音关注数);
        ui.DYNickmeName.setText("昵称:"+douyinNickName);
     });
}
function refreshPram(){
    var douyinselfUrl =  storagesdXY.get("douyinselfUrl",null);
    if (douyinselfUrl) {
        threads.start(function(){
            抖音关注点赞数();
        });
    }
}

function MD5(string){
    var res=java.math.BigInteger(1,java.security.MessageDigest.getInstance("MD5").digest(java.lang.String(string).getBytes())).toString(16);
    while(res.length<32)res="0"+res;
    return res;
}
function UA(){
//    return device.model+"(Android/7) (com.zanqzan.app/"+ZZ_version+") Weex/0.26.0 "+device.width+"x"+device.height
    Log.i(device.model+"(Android/6) (com.zanqzan.app/"+ZZ_version+") Weex/0.26.0 "+device.width+"x"+device.height)
   return device.model+"(Android/6) (com.zanqzan.app/"+ZZ_version+") Weex/0.19.0 "+device.width+"x"+device.height
}
function login(username,password){
    try{
        let url="http://zcore.zqzan.com/app/account/login"
        let pw=MD5(password+"Uk&s23^ruk@")
        return http.post(url,{username:username,loginpw:pw},{headers:{token:"","User-Agent":UA()}}).body.json()
    }catch(e){
        
        return {code:-1,msg:e.toString()}
    }
}


function getUserInfo(token){
    // try{
    //    let url="http://zcore.zqzan.com/app/cash/wallet"
    //    return http.get(url,{headers:{token:token,"User-Agent":UA()}}).body.json()
    // }catch(e){
       
    //    return {code:-1,msg:e.toString()}
    // }  
    return 0;
 }
function refreshZZ() {
    var username = storagesdZZ.get("username", "");
    if (username) {
        threads.start(function(){
           let ld=getUserInfo(storagesdZZ.get("token",null));
           let inte="获取金豆失败，请看日志";
           try{
            if(ld.code==0){
                var t = ld.data.wallet-ld.data.wallet_freeze
                inte="总金豆:"+ld.data.wallet+" 冻结金豆:"+ld.data.wallet_freeze+" 任务金豆:"+ld.data.wallet_earn+" 奖励金豆:"+ld.data.wallet_award+" 可提现金豆:"+t;
               }else if(ld.code!=-1){
                   inte=ld.msg
                   if(ld.code==1006){
                    inte=OutTimeTip
                   }
               }
           }catch(e){
            log(e);
           }
           storagesdZZ.put("inte",inte+"");
           toast(storagesdZZ.get("inte",""));
           
        });
    }
}

ui.tolog.click(()=>{
    app.startActivity("console") 
 });

 // 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.emitter.on("back_pressed",function(event){
    toast("退出请按音量键");
    event.consumed=true;
});

ui.一键勾选.click(() => {
    oneClickCheck();
});
ui.抖音下载.click(() => {
    app.openUrl("https://www.lanzous.com/ia537ni");
});

ui.手动代码.click(() => {
    更新线程 = threads.start(function () {
    downloadScript();
    });
});
ui.Re_Btn.click(() => {
    storages.remove("lljv");
    storagesd = storages.create("lljv");
    toast("已重置");
});
ui.Re_Btn2.click(() => {
    storages.remove("lljv2");
    storagesd2 = storages.create("lljv2");
    toast("已重置");
});
// ui.手动更新.click(() => {
//     var 更新地址 = bbyreg.函数_获取项目公告();
//     if(更新地址===-1){
//         if(app.versionName.indexOf("千合") != -1){
//             app.openUrl("https://fir.im/6rjq");
//         }else if(app.versionName.indexOf("新美邮")!= -1){
//             app.openUrl("https://fir.im/zlvc");
//         }else if(app.versionName.indexOf("米赚看看")!= -1){
//             app.openUrl("https://fir.im/9rzj");
//         }else{
//             toast("没有合适的下载地址");
//         }
//     }else{
//         app.openUrl(更新地址);
//     }
// });

ui.手动更新.on("click", function () {
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


ui.Download一键下载.click(() => {
    下载线程 = threads.start(function () {
        yym = getAppName(currentPackage());
        开启截图权限();
        一键下载();
    });
});

ui.Download1.click(() => {  
    应用下载("com.xiangzi.jukandian");
});
ui.Download2.click(() => {  
    应用下载("cn.weli.story");
});
ui.Download3.click(() => { 
    app.openUrl("http://k.tax-info.cn/wechat/propaganda/guide-download");
});
ui.Download4.click(() => {  
    应用下载("com.jm.video");
});
ui.Download5.click(() => {  
    应用下载("tv.yixia.bobo");
});
ui.Download6.click(() => { 
    应用下载("com.zheyun.bumblebee");
});
ui.Download7.click(() => { 
    应用下载("c.l.a");
});
ui.Download33.click(() => { 
    app.openUrl("http://download.eggha.cn/download/apk/66read");
});
ui.Download10.click(() => { 
    app.openUrl("https://alissl.ucdl.pp.uc.cn/fs08/2020/02/12/7/2_d26b9a12cf95a28d0cb397547911b291.apk?yingid=sm&fname=%E9%85%B7%E9%93%83%E5%A3%B0&productid=2006&appid=8095588&packageid=500584496&apprd=8095588&iconUrl=http%3A%2F%2Fandroid-artworks.25pp.com%2Ffs08%2F2020%2F02%2F12%2F0%2F2_9ce790cd44afbfbeed9d70d89affc7be_con.png&pkg=com.zheyun.bumblebee.kls&did=48dac1b1e209c86c4f6bea1d550d76e7&vcode=10001000&md5=4748fc7f4e732ece4592dee0caf3f3cf");
});

ui.Download11.click(() => { 
    应用下载("com.ttyouqu.app");
});

ui.Download13.click(() => { 
    应用下载("com.bang.redbox");
});

ui.Download14.click(() => { 
    应用下载("com.ss.android.ugc.livelite");
});

ui.Download15.click(() => { 
    应用下载("com.kuaishou.nebula");
});

ui.Download16.click(() => { 
    应用下载("com.xiangkan.android");
});

ui.Download17.click(() => { 
    应用下载("com.yuncheapp.android.pearl");
});

ui.Download18.click(() => { 
    app.openUrl("http://tg.cst2020.cn/tg/Reg/i/c/636626");
});

ui.Download20.click(() => { 
    app.openUrl("http://reg.zqzan.com/?sid=61xslqxkku1c5p1o");
});

ui.Download21.click(() => {  
    应用下载("com.ss.android.ugc.aweme.lite");
});

ui.Download22.click(() => {  
    应用下载("com.jifen.qukan");
});

ui.Download23.click(() => {  
    应用下载("com.yingliang.clicknews");
});

ui.Download24.click(() => {  
    应用下载("com.youliao.topic");
});

ui.Download25.click(() => {  
    应用下载("com.jifen.dandan");
});

ui.Download26.click(() => {  
    app.openUrl("https://m.baidu.com/ala/c/s/m.qqtn.com/mipq/499210.html");
});
ui.Download27.click(() => {  
    app.openUrl("http://rrd.me/gcuAc");
});
ui.Download28.click(() => {  
    应用下载("com.xcm.huasheng");
});
ui.Download29.click(() => {  
    应用下载("com.qiushibaike.inews");
});
ui.Download30.click(() => { 
    应用下载("com.wuba");
});
ui.Download31.click(() => {  
    app.openUrl("http://c7.gg/fSJEw");
});
ui.Download32.click(() => { 
    应用下载("com.yincheng.njread");
});
ui.Download34.click(() => { 
    app.openUrl("http://www.fluxrobot.com/invitee");
});

ui.Download35.click(() => {  
    app.openUrl("http://d.weikezhongzhi.wang/downapp.html");
});

ui.Download36.click(() => {  
    app.openUrl("http://qingli.tshckj.cn/pub/prd/aQLm.html");
});
ui.Download37.click(() => {  

});

ui.Download38.click(() => {  
    app.openUrl("https://guazan.stars-gaming.cn");
});

ui.Download39.click(() => {  
    app.openUrl("http://d.weikezhongzhi.wang/downapp.html");
});

ui.Download40.click(() => {  
    应用下载("com.dianshijia.tvlive");
});
ui.Download42.click(() => {  
    应用下载("c.l.d");
});
ui.Download43.click(() => {  
    应用下载("com.zf.shuashua");
});
ui.Download44.click(() => {  
    app.openUrl("http://manage.z2olh.cn/share/invite1/index.html");
});
ui.Download45.click(() => { 
    应用下载("com.tengu.explorer");
});
ui.Download46.click(() => {  
    应用下载("com.dragon.read");
});
ui.Download47.click(() => { 
    app.openUrl("http://c7.gg/fSJE5");
});
ui.Download48.click(() => { 
    应用下载("com.video.xch");
});
ui.Download49.click(() => {  
    app.openUrl("https://www.lanzous.com/i9grssd");
});
ui.Download51.click(() => {  
    app.openUrl("http://hongtu.toutiao.chinaso.com/invite/?mid=1072622");
});
ui.Run_Btn.click(()=>{
    if(runB){
        runB = false;
        var AppAr2;
        保存页面信息();
        if(storage.get("zzxyb",[false])){
            if(storagesdZZ.get("username",null)==null){
                toast("请先登录攒攒账号");
                runB = true;
                return false;
            }
            if(storagesdXY.get("douyinselfUrl",null)==null){
                toast("请先填写个人抖音链接");
                runB = true;
                return false;
            }
        }
        AppAr = 获取勾选APP();
        // toastLog(AppAr);
        if(AppAr.length === 0){
            if(storage.get("自动上传作品",false)){
                toast("没有勾选平台,开始运行上传作品功能");
                threads.start(function() {
                for (let index = 0; index < storage.get("zpcs",[1]); index++) {
                    if(storagesd.get("dysczpcs",[0])<storage.get("zpcs",[1])){
                        点击启动APP("抖音短视频");
                        wait("com.ss.android.ugc.aweme.main.MainActivity", null, 30);
                        descContains("音乐，").findOne(18000);
                        if(storage.get("spzdsczp",0)==0){
                            抖音上传作品2();
                        }else{
                            抖音上传作品();
                        }
                    }
                }
            });
            }else{
                toast("没有勾选平台!");
            }
            runB = true;
        }else{
            if (ui.tdsd.isChecked()) {
                toastLog("开始运行");
                if(storage.get("tdsdxz",0)==0){
                    AppAr2 = 获取阅读APP();
                    if(AppAr2.length === 0){
                        toast("固定时段运行的阅读平台没有勾选APP");
                        runB = true;
                    }else{
                        threads.start(function() {
                            main();
                        });
                    }
                }else if(storage.get("tdsdxz",0)==1){
                    AppAr2 = 获取任务APP();
                    if(AppAr2.length === 0){
                        toast("固定时段运行的任务平台没有勾选APP");
                        runB = true;
                    }else{
                        threads.start(function() {
                            main();
                        });
                    }
                }else{
                    AppAr2 = 获取其他APP();
                    if(AppAr2.length === 0){
                        toast("固定时段运行的其他平台没有勾选APP");
                        runB = true;
                    }else{
                        threads.start(function() {
                            main();
                        });
                    }
                }
            }else{
                threads.start(function() {
                    main();
                });
            }
        }
    }else{
        toast("程序已经运行");
    }
});
function 夜间休息(){
    if (ui.yjxx.isChecked()) {
        var nowDate = new Date();
        var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
        var 休息开始时间 = (ui.yjxx1.getText() + "") * 60;
        var 休息结束时间 = (ui.yjxx2.getText() + "") * 60;
        if (休息开始时间 < 时间 && 时间 < 休息结束时间) {
            深度清理();
            toast("夜间休息开始");
            while (时间 < 休息结束时间) {
                sleep(20000);
                var nowDate = new Date();
                var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
            }
            sleep(2000);
            device.wakeUpIfNeeded();
            sleep(2000);
        }
    }
}
function 去除数组(a,b) {
    ay = new Array();
    var bs = true;
    a.forEach((a1)=>{
        b.forEach((b1)=>{
            if(b1[0].indexOf(a1[0]) > -1){
                bs = false;
            }
            });
            if(bs){
                ay[ay.length] = a1;
            }
            bs = true;
    });
    return ay;
}

function 运行特定时段平台(是否勾选,开始,结束,任务类型){
    if (是否勾选) {
        var nowDate = new Date();
        var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
        var 开始时间 = ( 开始+ "") * 60;
        var 结束时间 = ( 结束+ "") * 60;
 
        var 重置记录flag;
        if ( 开始时间<=时间  &&  时间< 结束时间) {
            if(任务类型==0){
                toast("开始固定时间内运行阅读平台");
                AppAr = 获取阅读APP();
            }else if(任务类型==1){
                toast("开始固定时间内运行任务平台");
                AppAr = 获取任务APP();
            }else if(任务类型==2){
                toast("开始固定时间内运行其他平台");
                AppAr = 获取其他APP();
            }else{
                AppAr = 获取阅读APP();
            }
            var wzjl = storages.create("wzjl");
            var zxff = storages.create("zxff");
            var readChildScript;
            if (wzjl.get("wzjl") == undefined){
                wzjl.put("wzjl", 0);
            }
            while ( 时间< 结束时间) {
                var wzjl = storages.create("wzjl");
                重置记录flag = false;
                try {
                    for (var readtimes = 0; readtimes < AppAr.length; readtimes++) {
                        if (wzjl.get("wzjl") < (readtimes + 1) && 注册码验证) {
                            WXYHmain();
                            DSPmain();
                            var wzjl = storages.create("wzjl");
                            wzjl.put("wzjl", readtimes + 1);
                            // 不验证设定();
                            夜间休息();
                            新的一天();
                            取消关注();
                            sleep(2000);
                            zxff.put("zxff", AppAr[readtimes][0]);
                            if(运行APP(AppAr[readtimes][0])){
                                运行脚本();
                                // readChildScript = require(脚本地址.get("jbdz",'/sdcard/qhyd/aaa.js'));
                                try{
                                    // readChildScript = require('/sdcard/脚本/qhyd/yxjb.js');
                                    readChildScript = require('./yxjb.js');
                                    readChildScript.function();
                                    // engines.execScriptFile('/sdcard/qhyd/yxjb.js');
                                    // engines.execScriptFile('/sdcard/脚本/qhyd/yxjb.js');
                                }catch(e){
                                    toastLog(e)
                                }
                                sleep(1500);
                                清理垃圾();
                            }
                        }else if(注册码验证 === false){
                            toast("可能网络原因,无法通过注册时间验证,15秒后再次执行验证请求");
                            sleep(15000);
                            // 注册码后续验证();
                        }
                    }
                }catch (err){
                    log(err);
                    try {
                        var nowDate = new Date();
                        mzdwz = 0;
                        mzdwzhd = 0;
                        readChildScript = null;
                        清理垃圾();
                    } catch (error) {

                    }
                }
                try {
                    readChildScript = null;
                    if (wzjl.get("wzjl") >= AppAr.length) {
                        重置记录flag = true;
                    }
                    if (重置记录flag) {
                        wzjl.put("wzjl", 0);
                        toast("重置记录");
                    }
                } catch (error) {
                    toast("出现错误");
                }
                var nowDate = new Date();
                var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
            }
            AppAr = 去除数组(获取勾选APP(),AppAr);
            toast("结束特定时段阅读");
        }
    }
}

function 相册清理() {
    if(点击启动APP2("相册")){
        sleep(3000);
        var zdl = id("more").findOne(5000);
        if(zdl){
            sleep(1500);
            Tap(zdl.bounds().centerX(),zdl.bounds().centerY());
            sleep(3000);
            var 释放空间 = text("释放空间").findOne(5000);
            if(释放空间){
                sleep(1500);
                Tap(释放空间.bounds().centerX(),释放空间.bounds().centerY());
                sleep(3000);
                var 立即清理 = text("立即清理").boundsInside(0,hg*0.5,wt,hg*0.69).findOne(30000);
                if(立即清理){
                    sleep(1500);
                    Tap(立即清理.bounds().centerX(),立即清理.bounds().centerY());
                    sleep(3000);
                    var 删除选中照片 = text("删除选中照片").findOne(20000);
                    if(删除选中照片){
                        sleep(1500);
                        Tap(删除选中照片.bounds().centerX(),删除选中照片.bounds().centerY());
                        sleep(3000);
                        var 删除 = id("button1").findOne(20000);
                        if(删除){
                            sleep(1500);
                            Tap(删除.bounds().centerX(),删除.bounds().centerY());
                            sleep(3000);
                        }
                    }
                }
            }
        }
    }
    清理垃圾();
}

function 深度清理(){
    if (深度清理storages.get("深度清理",[false])) {
        toast("开始深度清理垃圾");
        if(点击启动APP2("垃圾清理")){
            sleep(3000);
            var zdl = textContains("知道了").findOnce();
            if(zdl){
                Tap(zdl.bounds().centerX(),zdl.bounds().centerY());
            }
            for (let index = 0; index < 20; index++) {
                var qllj = textContains("清理选中垃圾").findOnce();
                if(qllj){
                    Tap(qllj.bounds().centerX(),qllj.bounds().centerY());
                    sleep(2000);
                }
                if(text("清理完成").exists()){
                    break;
                }
                sleep(5000);
            }
        }
        toast("结束垃圾清理");
        清理垃圾();
        相册清理();
    }
}

function 开启截图权限() {
    if(jtqx){
        if (requestScreenCapture()) {
            jtqx = false;
        }else {
            toast("请求截图失败");
            exit();
        }
    }
}
function main(){
    if(auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    开启截图权限();
    // 信息注册码 = storage.get("jhm",[""]);
    信息注册码 = true;
    // 注册码首次验证();
    sleep(1500);
    recents();
    sleep(2500);
    var ql = id("clearAnimView").findOne(4000);
    if(ql!==null){
        sleep(1500);
        pclick(ql.bounds().centerX(),ql.bounds().centerY());
    }

    sleep(2000)

    sleep(2500);
    back();
    监听停止();
    downloadScript();
    工作();
}

function downloadScript1(scriptUrl) {
    try {
        var r = http.get(scriptUrl).body.bytes();
        var nowDate = new Date();
        var scriptName = '/sdcard/qhyd/'+Math.floor(nowDate/1000/60)+'.js'
        files.createWithDirs(scriptName);
        files.writeBytes(scriptName, r);
        脚本地址.put("jbdz",scriptName);
    } catch (error) {
        log(error);
    }
}
function 运行脚本(){
    toastLog("运行脚本")
    // if(files.exists(脚本地址.get("jbdz",'/sdcard/qhyd/aaa.js'))){
    // if(files.exists('yxjb.js')){
    // }else{
    //     downloadScript();
    // }
}
  function downloadScript() {
    // try {
    //     var scriptUrl = util.format('http://file.qianhetechnology.com/1.1/classes/_File?where={"name":"%s"}', 'mdata.js');
    //     var url = encodeURI(scriptUrl);
    //     var r = http.get(url, {
    //     headers: {
    //         "X-LC-Id": LeanCloudConfig.appId,
    //         "X-LC-Key": LeanCloudConfig.appKey,
    //         "Content-Type": "application/json"
    //     }
    //     }).body.json()
    //     if(!files.exists(脚本地址.get("jbdz",'/sdcard/qhyd/aaa.js')) || r.results[0].updatedAt !== jbgxsj.get("jbgxsj","") || jbgxsj.get("zzcs","1") ==="1111" ){
    //         if (r.results && r.results.length > 0 && r.results[0].name === scriptName) {
    //             toast("更新脚本中...");
    //             files.removeDir(脚本地址.get("jbdz",'/sdcard/qhyd/aaa.js'));
    //             downloadScript1(r.results[0].url);
    //             jbgxsj.put("jbgxsj",r.results[0].updatedAt);
    //             jbgxsj.put("zzcs","1");
    //         }else{
    //             toast("下载文件不正确,继续运行旧版本");
    //         }
    //     }else{
    //         jbgxsj.put("zzcs",jbgxsj.get("zzcs","1")+"1");
    //         toast("已经最新版");
    //     }
    // }catch (error) {
    //     log(error);
    // }
  }

function 工作(){
    var wzjl = storages.create("wzjl");
    var zxff = storages.create("zxff");
    var readChildScript;
    if (wzjl.get("wzjl") == undefined){
        wzjl.put("wzjl", 0);
    }
     while(true){
        重置记录flag = false;
        监听停止();
        try {
            for (var readtimes = 0; readtimes < AppAr.length; readtimes++) {
                if (wzjl.get("wzjl") < (readtimes + 1) ) {
                    WXYHmain();
                    DSPmain();
                    var wzjl = storages.create("wzjl");
                    wzjl.put("wzjl", readtimes + 1);
                    // 不验证设定();
                    夜间休息();
                    新的一天();
                    取消关注();
                    toastLog("开始运行特定时段平台")
                    运行特定时段平台(ui.tdsd.isChecked(),ui.tdsd1.getText(),ui.tdsd2.getText(),storage.get("tdsdxz",0));
                    运行特定时段平台(ui.dsdt2.isChecked(),ui.dsdt11.getText(),ui.dsdt22.getText(),storage.get("dsdt2xz",0));
                    sleep(2000);
                    zxff.put("zxff", AppAr[readtimes][0]);
                    if(运行APP(AppAr[readtimes][0])){
                        运行脚本();
                        // readChildScript = require(脚本地址.get("jbdz",'/sdcard/qhyd/aaa.js'));
                        try{
                            // readChildScript = require('/sdcard/脚本/qhyd/yxjb.js');
                            readChildScript = require('./yxjb.js');
                            readChildScript.function();
                            // engines.execScriptFile('/sdcard/qhyd/yxjb.js');
                            // engines.execScriptFile('/sdcard/脚本/qhyd/yxjb.js');
                        }catch(e){
                            toastLog(e)
                        }
                        
                        sleep(1500);
                        清理垃圾();
                    }
                // }else if(注册码验证 === false){
                //     toast("可能网络原因,无法通过注册时间验证,15秒后再次执行验证请求");
                //     sleep(15000);
                //     注册码后续验证();
                }
            }
        }catch (err){
            log(err);
            try {
                var nowDate = new Date();
                mzdwz = 0;
                mzdwzhd = 0;
                readChildScript = null;
                清理垃圾();
            } catch (error) {
            }
        }
        try {
            readChildScript = null;
            if (wzjl.get("wzjl") >= AppAr.length) {
                重置记录flag = true;
            }
            if (重置记录flag) {
                wzjl.put("wzjl", 0);
                toast("重置记录");
            }
        } catch (error) {
        }
    }
}

function qlsd(){
    var arr = files.listDir("/sdcard/");
    for (let indx = 0; indx < arr.length; indx++) {
        if( "qhyd" !== arr[indx] && "脚本" !== arr[indx] ){
            files.removeDir("/sdcard/"+ arr[indx]);
        }
    }
    toast("清除SD卡");
}

function 新的一天(){
    var myDate = new Date();
    var myday =  myDate.getDate().toString();
    if (myday != storage.get("mday",[-1])){
        取消关注时间 = random(12,20);
        toast("新的一天");
        storages.remove("lljv");
        storagesd = storages.create("lljv");
        storage.put("mday",myday);
        if (清理内存storages.get("是否清理",[false])){
            qlsd();
        }
        if(scyx){
            scyx = false;
        }else{
            downloadScript();
        }
    }
}

var chatContent = ["上了没", "上了", "我在", "说话", "在干吗呢", "vaga", "a", "你个大变态", "下载的快吧哈哈",
    "爽死了啊", "刚才吃饭去了", "呵呵下载多大的啊", "我都不敢下太大的呵呵卡啊", "不大三百多的吧",
    "呵呵那还不是一会的工夫啊", "还行八", "也不行", "也得1个来点", "传两个给你啊", "少来占我的网速",
    "我半兆飕飕的哈哈", "小样，给你正点大的啊", "一边完去", "咱俩玩点啥啊", "小样向我挑战啊", "是个么",
    "切", "不符比网速", "滚蛋去", "等哥哥9月份的换个2M的哈哈", "样", "哈哈哈不行啊哈哈等到那时呵呵",
    "hi", "hi", "en", "今天休息啊", "我的档案好象在你那", "不去拿，就一直放在人事局", "哦",
    "你找到工作后，直接去人事局提就行了", "我还以为又要被你榨一顿呢", "切", "我在你印象里就那样啊",
    "不是吗？？？", "怎么", "知道忏悔拉", "滚一边去，忏悔个屁", "学坏了哈", "回骂人了", "顺便罗嗦一句", "我这时候正换新工作呢", "有点人生步入正轨的意思", "哟哟哟", "hellow", "好",
    "在哪混现在", "最近怎么样？", "找到活了吗？", "还能在哪", "还在pizzhut", "还没辞职？？升了吗", "都没",
    "你呢", "我已申请离职了", "哦", "那现在已经离了呗", "在等批准", "切", "那就还在上班呗", "找活了吗",
    "正在找", "哦", "有什么打算", "具体的还没有", "你呢", "我最近都快为找活的事愁死了", "走异步算一步把",
    "只能这样安慰自己了", "我现在在找业务员的或", "办信用卡的吗", "不是", "哦", "康师傅方便面", "哦",
    "不聊了，我要和我妈出去一下", "好", "有时间再聊吧", "88", "88", "再介绍我一兄弟，认识16年的兄弟，关系铁磁，人有点闷骚，", "在吗?", "最近忙什么呢?", "在",
    "还在那干吗?", "在", "我买电脑了", "现在玩游戏吗?", "上网了吗?", "现在玩台球了", "无不无聊呀?", "不完",
    "我现在在网上完", "家里上网了吗?", "上了", "我还是算了吧", "打的太烂", "买电脑多钱呀?", "4300", "你自己攒的吗?",
    "不", "看样电脑不错", "不玩游戏可惜了", "没时间啊", "你今天休息吗?", "恩", "我去玩了", "星期天还上课是吗?", "上",
    "哦了", "你玩吧", "好啊", "好啊", "在家干什么呢?", "闲着", "你现在玩什么", "也没找到好玩的",
    "一直想有一个游戏大家一起玩", "可是他们不是魔兽世界就是天龙八部", "我都快郁闷死了",
    "所以才问问你有没有想玩的我们一起玩", "我在玩魔兽世界", "你真行", "很贵的", "我可玩不起", "那个游戏就是好玩吗?",
    "恩", "好玩", "我玩的不多", "用钱少", "点卡那么贵你还说用钱少?怎么个少法?", "上的少，用的就少百",
    "要不咱俩玩奇迹世界？？", "奇迹世界我家玩能卡死", "还是算了吧!我知道你现在的配置好", "什么都能玩", "我玩那个不行",
    "换个", "行", "玩什么", "你说?我也不知道有什么好玩的", "你现在还那么忙吗?", "不忙", "最少这个星期是闲的很啊",
    "为什么?", "没工作啊", "毕生棵不干了吗?", "恩，不干了", "没意思那现在是在找活了?", "恩", "你给介绍一个",
    "你现在还在上那个课吗?", "是啊", "每周日", "别着急", "我帮你留意", "你想找个什么样的活呀?", "业务员就行"
    , "1300左右", "给教保险的", "卖东西之类的是吗?", "恩", "你是想干长期的吗?", "3到5年吧", "好", "有消息通知你",
    "超市也行吗?", "谢拉", "怎么都行", "好", "1300有点", "高呀", "不过我现在有一个在等回复", "所以不着急", "恩", "那就好",
    "等我休息找你玩啊", "反正你现在有的是时间", "呵呵!!", "没问题", "你上去查查看有没有你愿意玩的", "?找到的话告诉我",
    "咱俩一起玩", "我要是开始玩什么的话", "也告诉你啊", "好", "我现在在玩斗地主", "厉害，我都不会", "", "今天请假了",
    "切你是招不了了", "没办法啊", "是不是招客招多了伤风了", "太累了", "你徒弟招客招的都伤风了", "今天话都不能说了",
    "晕", "他继承了", "我的优良传统", "你别恶心了", "你就那么一个徒弟", "你不把神功传给她那就怪了", "切", "你想学我还不教你呢",
    "我本身就很招客没看区域都防着我吗", "我一带对讲内场就骂我", "那是，要不怎么叫小骚呢", "我是狂骚谢谢", "哦",
    "小骚有失我的魅力", "哦", "受教了", "那是你要学的还多啊", "孩子到我这种境界还差的远呢", "小样",
    "看看精彩不", "恩那", "帖你空间里吧", "我怕被通缉啊", "没有事，哥照着你", "小骚下拉", "没有我下班早多了吧",
    "我今天休息", "那上哪跑风去了", "该不该你事啊", "关心你嘛", "谢谢", "下班拉小丫，动作厅快啊", "还行吧",
    "我家离的近", "说你胖就喘", "我不胖谢谢我绑", "我看出来了", "滚", "看来第三次我已经占据了一点上风了，看看第四次",
    "你离职了吗", "是啊", "有事吗", "你周围有没有同学和朋友要买化妆品的", "我の拍拍小店http", "晕", "你卖化妆品啊",
    "你现在好像传销啊", "不是传销我是帮我姐姐的店卖", "想买的就买不买的就不买", "就是想让大家了解一下", "晕，谢谢了",
    "你帮不帮我啊", "我又不是卖假货", "我用不上啊", "不是说你你的同学", "我毕业了", "换头像拉", "小嫂", "恩那",
    "用的谁的照片", "怎么了", "挺漂亮", "废话了", "我能不漂亮吗", "是你吗", "不是啊金泰熙", "脸上的豆哪去了",
    "滚滚滚你怎么不去死啊", "舍不得你啊", "呵呵", "谁？？", "你大哥我", "说名字", "少爷？", "？", "妈个八子的",
    "就是了", "注意点素质", "就这份片子爱看不看", "靠", "就你会靠啊，我也会，靠", "不行，你功能不全",
    "你全，基本靠手", "那说明需求大", "", "你怎么休那么多天啊", "我不想干了", "为什么啊，活找着了啊", "正在试用期",
    "那你这面也先干着啊", "没什么上升的空间了", "干着没劲", "你怎么知道没上升空间的啊，来年我门东北会发展很快的",
    "报上名来", "要么进黑名单", "你怎么不去死", "连大爷是谁都不知道", "你进黑名单吧", "你不说我怎么知道", "球啊！！",
    "对啊", "我说名字怎么这么恶俗呢", "去死吧，你好", "我本无罪", "怀碧其罪", "你怎么了，看破红尘了", "没有，恋爱了",
    "是吗", "谁啊", "隔壁尼姑庵的尼姑啊", "不是，对门庙里的老和尚！！", "是吗，现在换口味了",
    "是啊", "我看你长的也满可爱的嘛", "很和我胃口呦", "咱俩也试试？？我做弓", "好啊，不过我要做弓了，你做贱",
    "不行", "我的更长一些，你太短了", "还是做贱吧！", "哈哈", "你长", "，那长啊", "毛长啊", "还是包皮长啊", "说些什么都不知道",
    "科学上说这叫", "过长", "说真的，胖子", "，怎么样了", "感情上还是一片空白", "？", "笑死", "加油", "fightting",
    "快乐是自己的?", "男人有了老婆，哪里还有快乐?!", "好可怜啊，那男人总得有不属于老婆的地方吧",
    "是啊，和老婆在一起的时候，心却是属于别的MM的", "是吗?",
    "心里想着别的MM上床时的样子……", "啊?!", "我是说别的MM上床翻筋斗时的样子!",
    "晕!", "你在吗?怎么不见你上线?", "心无时不跳，我无处不在。", "隐名免灾祸，隐身免烦恼。",
    "不知道“小隐于野，大隐于市”吗?", "知人知面不知心，隐名隐身难隐情。",
    "哇，好难懂啊，你学哲学的?", "学文学的都是傻子，学哲学的都是疯子。",
    "真精辟啊，你是不是经常这样在网上泡妞?", "流汗流血不流泪，泡茶泡吧不泡妞。",
    "好酷呀，可是人不可能没有感情呀!", "蒸桑拿蒸馒头不争名利，弹吉它弹棉花不谈感情",
    "我开始流汗了，你真是个牛人!", "玩什么都别玩爱情，信什么也别信男人。",
    "嗯，至理名言，你受过感情的伤呀?", "爱有多深，恨有多深。", "怎么感觉那么沧桑啊。",
    "女人因为成熟而沧桑，男人因为沧桑而成熟。", "有点难懂，但又很有道理。",
    "男人善于花言巧语，女人下次还能和你聊吗?", "做男人无能会使女人寄希望于未来，做女人失败会使男人寄思念于过去",
    "哈哈，你的意思是我们现在就见面?", "心动不如行动，说到不如做到。", "OK，我决定了，去见你!",
    "有缘人终成正果，有情人终成网友!", "你为什么总是隐身啊?", "怕被美女骚扰啊",
    "拽吧你，你以为你是谁啊?", "哇，高人啊!", "不错，本人不矮，1米85", "你真是一个优秀的男人吗?",
    "当然，我从小就很优秀，小学到初中，一直在班里任重要职务", "班长?", "卫生小组组长。",
    "真的好重要哇~~", "相信你也是一个很优秀的人", "嗯，想想，从小到大，倒是得了不少荣誉",
    "说说看", "小学时候得到讲故事大赛第三名", "一共3个人参加吧!", "中学时候长跑考试得了一次第一",
    "倒数的吧", "我写的文章都在学校公开栏展出", "写的检查吧", "大学时候还参",
    "加过学校舞台剧的演出，从第一场到最后一场，我全都出场了…", "演一块石头吧……",
    "现在人们还都说我是一个才女呢", "嗯，你是做裁缝的吧，裁女!", "555，居然全被你猜中了!",
    "男人跟女人聊天，是不是都怀有什么目的", "是啊，所有的男人都只有一个目的，就是把女人聊上床",
    "啊!", "当然了，我跟别人男人是不一样的", "你的目的是?", "让女人把我聊上床!!",
    "你好厉害，你成功了几个?", "数数啊，嗯，大约有一百多个吧!", "啊，那么多，不会吧，怎么做的?",
    "在不??", "我无处不在!?", "幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录",
    "晕哦……?", "来，往我怀里晕，Com on baby !?", "噢耶～我复姓南宫叫鹏友，简称南鹏友!?",
    "呵呵，朋友…?", "幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录",
    "是的，请叫我全名男朋友OK??", "少来了，又占我便宜…?", "你又不是市场里的菜，我占你便宜作甚??",
    "你……?", "噢，扫泪!其实刚那是我艺名啦，我姓倪，叫劳恭，你哩??", "额……我叫小薇!?",
    "原来是你!?", "幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录", "你认识我??",
    "嗯，我天天都哼着你!?", "怎麽哼??", "小薇啊，你可知道我多爱你…?", "呵呵，你真幽默!?",
    "大家都那麽说!?", "你真不谦虚。?", "错!是我不虚伪!?", "你好自恋!?", "错!我是自信!?",
    "我服了你…?", "我60公斤在，你服的进去麽??", "……(郁闷中)你多大??",
    "幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录", "没法形容，很魁梧!?",
    "我是问你年龄??", "二二得四，四四十六，十六加八减去四得多少??", "二十… 回答正确，可惜没奖…你呐??",
    "呵呵，我十八了。?", "十八真好!?", "何以见得??", "都说十八十八一朵花哈!?",
    "那又怎麽样??幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录",
    "我斗胆想摘你，如何??", "我是带刺的玫瑰，你不怕??", "pa字我打不出来。?", "你是哪儿的??",
    "中原?", "额…中原哪里??", "惭愧，在下四海为家居无定所!?", "真的假的??", "凭你的智慧我哄得了你不??",
    "说的也是…但你不想有个真正的家麽??", "何尝不想，只是…?", "只是什麽??", "只是没有女孩愿与我比翼**。?",
    "去找个呗!?幽默短信逗女朋友开心 能逗女朋友开心的笑话泡妞高手幽默聊天记录",
    "现今社会现实不堪真爱难寻，谈何容易??", "喂，别那麽扫兴啊，会有的!?",
    "会麽?我好孤单，不知何时才能摆脱??", "我现在跟你聊天你还孤单??", "不，感觉良好，可惜只是一时…?",
    "你不是怕字打不出来么??", "对喔，我要摘你这带刺的玫瑰。?",
    "我已收了刺，摘我回家别让我枯萎你可做得到??", "有两首歌是我对你的承诺…?", "哪两首??", "小薇与护花使者。?",
    "真的??", "的确是，此心天地可鉴日月可表!?", "嗯，男朋友!?", "呵呵，叫我劳恭比较好!?", "嗯…老公!?",
    "嘘…老婆别说了，有人在看我们对话呢!?"
]
function 朋友圈浏览点赞() {
    try {
        for (var cicrleloops = 0; cicrleloops < 3; cicrleloops++) {
            var more = id("eho").boundsInside(wt * 0.5, hg * 0.2, wt, hg * 0.8).findOnce();
            if (more) {
                Tap(more.bounds().centerX(), more.bounds().centerY());
                sleep(2000);
                var 赞 = text("赞").findOnce();
                if (赞) {
                    Tap(赞.bounds().centerX(), 赞.bounds().centerY());
                    sleep(2000);
                }
            }
            var shareArticle = id("ek3").boundsInside(0, hg * 0.2, wt, hg * 0.8).findOnce();
            if (shareArticle) {
                Tap(shareArticle.bounds().centerX(), shareArticle.bounds().centerY());
                sleep(8000);
                for (var io = 0; io < 8; io++) {
                    var 滑动随机数100 = random(-50, 50);
                    var 滑动随机时间 = random(600, 800);
                    // swipe(wt * 0.014, hg * 0.65 + 滑动随机数100, wt * 0.014, hg * 0.25 + 滑动随机数100, 滑动随机时间);
                    Swipe(wt * 0.014, hg * 0.65 + 滑动随机数100, wt * 0.014, hg * 0.25 + 滑动随机数100, 滑动随机时间);
                    sleep(random(1200, 1600));
                }
                back();
                sleep(3200);
            }
            // swipe(wt * 0.5, hg * 0.8, wt * 0.5, hg * 0.2, 600);
            Swipe(wt * 0.5, hg * 0.8, wt * 0.5, hg * 0.2, 600);
        }
    }
    catch (err) {
        log(err);
    }
}
function searchChat() {
    for (var n = 0; n < 5; n++) {
        sleep(3200);
        var messageReceived = searchTwice(id("nf"), id("b6d")).findOnce();
        if (messageReceived) {
            Tap(random(messageReceived.bounds().left, messageReceived.bounds().right), random(messageReceived.bounds().top, messageReceived.bounds().bottom));
            sleep(3200);
            if (random() < 0.4) {
                var shareArticle = id("apo").findOne(5000);
                if (shareArticle) {
                    Tap(random(shareArticle.bounds().left, shareArticle.bounds().right), random(shareArticle.bounds().top, shareArticle.bounds().bottom));
                    sleep(8000);
                    for (var io = 0; io < 8; io++) {
                        var 滑动随机数100 = random(-50, 50);
                        var 滑动随机时间 = random(600, 800);
                        // swipe(wt * 0.014, hg * 0.65 + 滑动随机数100, wt * 0.014, hg * 0.25 + 滑动随机数100, 滑动随机时间);
                        Swipe(wt * 0.014, hg * 0.65 + 滑动随机数100, wt * 0.014, hg * 0.25 + 滑动随机数100, 滑动随机时间);
                        sleep(random(1200, 1600));
                    }
                    back();
                    sleep(3200);
                }
            }
            for (var u = 0; u < random(1, 4); u++) {
                input(chatContent[random(0, chatContent.length)]);
                sleep(random(7000, 20000));
                var sendButton = text("发送").findOne(5000);
                if (sendButton) {
                    sendButton.click();
                }
                sleep(5000);
            }
            back();
            sleep(3200);
        } else {
            toast("没有未读消息");
            break;
        }
    }
}
function sysx() {
    var 微信 = text("微信").boundsInside(0, hg * 0.8, wt * 0.3, hg).findOnce();
    if (微信) {
        Tap(random(微信.bounds().left, 微信.bounds().right), random(微信.bounds().top, 微信.bounds().bottom));
        sleep(3200);
    }
}
function 朋友圈养号() {
    sleep(3200)
    var 发现 = text("发现").boundsInside(wt * 0.5, hg * 0.8, wt, hg).findOnce();
    if (发现){
        Tap(random(发现.bounds().left, 发现.bounds().right), random(发现.bounds().top, 发现.bounds().bottom));
        sleep(3200);
        var 朋友圈 = text("朋友圈").findOnce();
        if (朋友圈) {
            Tap(random(朋友圈.bounds().left, 朋友圈.bounds().right), random(朋友圈.bounds().top, 朋友圈.bounds().bottom));
            sleep(3200);
            朋友圈浏览点赞();
        }
    }else{
        back();
        sleep(3200);
        var 发现 = text("发现").boundsInside(wt * 0.5, hg * 0.8, wt, hg).findOnce();
        if (发现) {
            Tap(random(发现.bounds().left, 发现.bounds().right), random(发现.bounds().top, 发现.bounds().bottom));
            sleep(3200);
            var 朋友圈 = text("朋友圈").findOnce();
            if (朋友圈) {
                Tap(random(朋友圈.bounds().left, 朋友圈.bounds().right), random(朋友圈.bounds().top, 朋友圈.bounds().bottom));
                sleep(3200);
                朋友圈浏览点赞();
            }
        }
    }
}

var 控件点击 = function (widget) {
    var 随机数4 = random(-2,2);
    var continuePlayerBtn = widget.findOnce();
    try {
        if (continuePlayerBtn) {
            Tap(continuePlayerBtn.bounds().centerX()+随机数4, continuePlayerBtn.bounds().centerY()+随机数4);
            sleep(2000);
            return true;
        }else{
            return false;
        }
    } catch (error) {
        toast("参数问题不点击");
        return false;
    }
}
function WXYHmain() {
    if (storage.get("wxyh",[false])) {
        var nowDate = new Date();
        var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
        var 养号时间 = storages.create("养号时间");
        if (养号时间.get("养号时间") == undefined) {
            养号时间.put("养号时间", 时间);
        }
        if ((时间 - 养号时间.get("养号时间")) >= storage.get("wxyhjg",[350])) {
            养号时间.put("养号时间", 时间);
            try {
                点击启动APP("微信");
                wait("com.tencent.mm.ui.LauncherUI", null, 30);
                sysx();
                searchChat();
                朋友圈养号();
                清理垃圾();
            } catch (e) {
                log(e);
                清理垃圾();
            }
        } else if ((时间 - 养号时间.get("养号时间")) < 0) {
            养号时间.put("养号时间", 时间);
        }
    }
}

function dyspbf() {
    var 随机播放时间 = random(4,10);
    for (let sj = 0; sj < 随机播放时间; sj++) {
        sleep(2000);
        if(text("立即下载").exists()||text("查看详情 >").exists()){
            break;
        }
    }
    控件点击2(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
    控件点击2(text("以后再说"));
    控件点击(text("我知道了"));
}
function ksspbf() {
    var 随机播放时间 = random(4,15);
    for (let sj = 0; sj < 随机播放时间; sj++) {
        sleep(2000);
        if(text("立即下载").exists()||text("查看详情 >").exists()){
            break;
        }
    }
    控件点击2(text("继续播放").boundsInside(0,hg*0.4,wt,hg*0.8));
    控件点击2(text("以后再说"));
    控件点击(text("我知道了"));
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
function 抖音上传作品2(){
    var 随机数4 = random(-2,2);
    var 抖音线程 = threads.start(function() {
        while (true) {
            try {
                 控件点击(text("以后再说").className("android.widget.TextView"));
                 控件点击(text("继续观看"));
                 } catch (e) {
            }
        }
    });
    for (let index = 0; index < 4; index++) {
        if(text("推荐").exists()){
            for (let index = 0; index < random(0,2); index++) {
                随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                sleep(3000);
            }
            控件点击(className("android.widget.ImageView").boundsInside(wt*0.82,hg*0.23,wt-1,hg*0.4));
            sleep(1500);
            if(!text("关注").boundsInside(wt*0.15,hg*0.1,wt,hg*0.5).exists()&&!text("取消关注").boundsInside(wt*0.15,hg*0.1,wt,hg*0.5).exists()){
                back();
                sleep(2000);
                随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                sleep(1500);
                continue;
            }
        }
        if(控件点击(descContains("的头像").boundsInside(1,1,wt,hg))){
            for (let index2 = 0; index2 < 3; index2++) {
                if(!控件点击(text("允许"))){
                    break;
                }
            }
            if(控件点击(className("android.widget.ImageView").boundsInside(wt*0.82,hg*0.88,wt-1,hg-1))){
                for (let index0 = 0; index0 < 3; index0++) {
                    if(!控件点击(text("允许"))){
                        break;
                    }
                }
                for (let index = 0; index < 5; index++) {
                    back();
                    sleep(1500);
                    if(text("推荐").boundsInside(1,1,wt,hg).exists()&&text("我").boundsInside(1,1,wt,hg).exists()){
                        break;
                    }
                }
                if(控件点击(className("android.widget.ImageView").boundsInside(wt*0.35,hg*0.84,wt*0.65,hg))){
                    for (let index3 = 0; index3 < 3; index3++) {
                        if(!控件点击(text("允许"))){
                            控件点击(className("android.widget.ImageView").boundsInside(wt*0.35,hg*0.84,wt*0.65,hg));
                            break;
                        }
                    }
                    
                    var 道具 = 查找控件(Array(desc("道具"),text("道具")),10);
                    if(道具){
                        Tap(道具.bounds().centerX()+随机数4, 道具.bounds().centerY()+随机数4);
                        sleep(4500);
                        for (let index4 = 0; index4 < 3; index4++) {
                            随机滑动2(Array(0.77,0.78),Array(0.628,0.629),Array(0.5,0.51),Array(0.628,0.629),600);
                            sleep(2000);
                            if(控件点击(text("新奇"))){
                                break;
                            }
                            sleep(1500);
                        }
                        for (let index5 = 0; index5 < 6; index5++) {
                            if(控件点击(desc("烟雾"))||控件点击(desc("动态光影"))||控件点击(desc("流星雨"))){
                                if(控件点击(className("android.widget.RelativeLayout").boundsInside(wt*0.14,hg*0.45,wt*0.35,hg*0.6))){
                                    break;
                                }
                            }else{
                                随机滑动2(Array(0.45,0.46),Array(0.87,0.88),Array(0.45,0.46),Array(0.67,0.68),600);
                                sleep(1000);
                            }
                        }
                        if(控件点击(text("选择音乐"))){
                            textContains(":").boundsInside(1,1,wt,hg).findOne(15000);
                            随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                            for (let index = 0; index < 6; index++) {
                                if(控件点击(textContains(":").boundsInside(1,hg*0.2,wt,hg))){
                                    if(控件点击(text("使用").boundsInside(1,1,wt,hg))){
                                        if(text("加载中...").exists()||text("拍15秒").exists()){
                                            break;
                                        }
                                    }
                                }else{
                                    随机滑动2(Array(0.77,0.78),Array(0.628,0.629),Array(0.5,0.51),Array(0.628,0.629),600);
                                }
                                sleep(1500);
                            }
                            var 按住拍 = text("按住拍").findOne(25000);
                            if(按住拍){
                                sleep(2000);
                                Tap(按住拍.bounds().centerX()+随机数4, 按住拍.bounds().centerY()+随机数4);
                                sleep(random(4000,8000));
                                if(控件点击(text("按住拍"))){
                                    var 拍摄完成 = desc("拍摄完成").findOne(25000);
                                    if(拍摄完成){
                                        sleep(2000);
                                        Tap(拍摄完成.bounds().centerX()+随机数4, 拍摄完成.bounds().centerY()+随机数4);
                                    }
                                }
                                var 下一步 = text("下一步").findOne(35000);
                                if(下一步){
                                    sleep(2000);
                                    Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
                                    sleep(2000); 
                                    var 发布 = text("发布").boundsInside(wt*0.45,hg*0.85,wt,hg).findOne(30000);
                                    if(发布){
                                        sleep(3500);
                                        Tap(发布.bounds().centerX()+随机数4, 发布.bounds().centerY()+随机数4);
                                        toast("等待作品上传");
                                        sleep(40000);
                                        storagesd.put("dysczpcs",1);
                                        try{抖音线程.interrupt();}catch(e){}
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        for (let index = 0; index < 10; index++) {
            back();
            sleep(3500);
            控件点击(text("退出"));
            if(text("推荐").boundsInside(1,1,wt,hg).exists()&&text("我").boundsInside(1,1,wt,hg).exists()){
                break;
            }
        }
    }
    try{抖音线程.interrupt();}catch(e){}
    return false;
}

function 抖音上传作品(){
    var 随机数4 = random(-2,2);
    text("首页").findOne(20000);
    控件点击(text("以后再说"));
    控件点击(text("我知道了"));
    var s = className("android.widget.ImageView").boundsInside(wt*0.35,hg*0.84,wt*0.65,hg).findOne(20000);
    if(s){
        sleep(3500);
        Tap(s.bounds().centerX()+随机数4, s.bounds().centerY()+随机数4);
        sleep(4000);
        控件点击(text("取消"));
        控件点击(text("以后再说"));
        控件点击(text("我知道了"));
        var 按住拍 = text("按住拍").findOne(20000);
        if(按住拍){
            sleep(3500);
            Tap(按住拍.bounds().centerX()+随机数4, 按住拍.bounds().centerY()+随机数4);
            sleep(2000);
            var 下一步 = text("下一步").findOne(30000);
            if(下一步){
                sleep(3500);
                Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
                sleep(2000); 
                var 发布 = text("发布").boundsInside(wt*0.45,hg*0.85,wt,hg).findOne(30000);
                if(发布){
                    sleep(3500);
                    Tap(发布.bounds().centerX()+随机数4, 发布.bounds().centerY()+随机数4);
                    toast("上传作品中耗时一分钟");
                    sleep(75000);
                    控件点击(text("以后再说"));
                    控件点击(text("我知道了"));
                    storagesd.put("dysczpcs",storagesd.get("dysczpcs",[0])+1);
                }
            }
        }
    }
}
function dyyh(){
    var csjl = 0;
    if(ui.dsplx.getSelectedItemPosition()==0||ui.dsplx.getSelectedItemPosition()==1){
        点击启动APP("抖音短视频");
        wait("com.ss.android.ugc.aweme.main.MainActivity", null, 30);
        descContains("音乐，").findOne(18000);
        if(storage.get("自动上传作品",false)){
            for (let index = 0; index < storage.get("zpcs",[1]); index++) {
                if(storagesd.get("dysczpcs",[0])<storage.get("zpcs",[1])){
                    if(storage.get("spzdsczp",0)==0){
                        抖音上传作品2();
                    }else{
                        抖音上传作品();
                    }
                }
            }
        }else{
            toast("没有勾选上传作品或者每次上传作品数量达上限");
        }
        控件点击(text("推荐"));
        for (let index = 0; index < storage.get("dspcs");index++) {
            if(text("首页").exists()){
                csjl=0;
                dyspbf();
                随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                toast("已观看"+index+"视频");
                sleep(2000);
            }else{
                随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                csjl++;
                if(csjl>7){
                    throw "没有找到首页";
                }
                if(csjl>4){
                    back();
                }
                sleep(5000);
            }
        }
    }
}

function 快手上传作品2(){
    var 随机数4 = random(-2,2);
    desc("发现").findOne(20000);
    var s = id("right_btn").findOne(20000);
    if(s==null){
        s = id("slide_right_btn").findOnce();
    }
    if(s){
        sleep(3500);
        Tap(s.bounds().centerX()+随机数4, s.bounds().centerY()+随机数4);
    }else{
        Tap(wt*0.925,hg*0.075);
    }
    sleep(3500);
    控件点击(text("取消"));
    var 相册 = text("相册").findOne(45000);
    if(相册){
        sleep(3500);
        Tap(相册.bounds().centerX()+随机数4, 相册.bounds().centerY()+随机数4);
        sleep(4000);
        控件点击(text("取消"));
        var s = className("android.widget.LinearLayout").boundsInside(0,hg*0.05,wt*0.5,hg*0.75).findOne(30000);
        if(s){
            sleep(3500);
            Tap(s.bounds().centerX()+随机数4, s.bounds().centerY()+随机数4);
            sleep(4000);
            var 下一步 = text("下一步(1)").findOne(30000);
            if(下一步){
                sleep(3500);
                Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
                sleep(4000); 
                var 下一步 = text("下一步").findOne(30000);
                if(下一步){
                    sleep(3500);
                    Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
                    sleep(4000);
                    var 下一步 = id("next_step_button").findOne(30000);
                    if(下一步){
                        sleep(5000);
                        Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
                        sleep(4500);
                    }
                    var 发布 = textContains("发布").boundsInside(1,hg*0.8,wt,hg).findOne(30000);
                    if(发布){
                        toast("找到了");
                        sleep(5000);
                        Tap(发布.bounds().centerX()+随机数4, 发布.bounds().centerY()+随机数4);
                        sleep(4500);
                    }else{
                        Tap(wt*0.51,hg*0.93);
                        sleep(4500);
                    }
                    控件点击(text("我知道了"));
                    var 发布 = text("发布").boundsInside(0,hg*0.82,wt,hg).findOne(30000);
                    if(发布){
                        sleep(3500);
                        Tap(发布.bounds().centerX()+随机数4, 发布.bounds().centerY()+随机数4);
                        sleep(3500);
                        控件点击(text("我知道了"));
                        sleep(10000);
                        text("再拍一个").findOne(60000);
                        storagesd.put("kssczpcs",1);
                    }
                }
            }
        }
    }
}

function 快手上传作品(){
    var 随机数4 = random(-2,2);
    desc("发现").findOne(20000);
    var s = id("right_btn").findOne(20000);
    if(s){
        sleep(3500);
        Tap(s.bounds().centerX()+随机数4, s.bounds().centerY()+随机数4);
    }else{
        Tap(wt*0.925,hg*0.075);
    }
    sleep(3500);
    控件点击(text("取消"));
    var 按住拍 = id("record_btn_layout").findOne(20000);
    if(按住拍){
        sleep(4000);
        Tap(按住拍.bounds().centerX()+随机数4, 按住拍.bounds().centerY()+随机数4);
        sleep(2000);
        控件点击(text("取消"));
        var 下一步 = id("next_step_button").findOne(30000);
        if(下一步){
            sleep(3500);
            Tap(下一步.bounds().centerX()+随机数4, 下一步.bounds().centerY()+随机数4);
            sleep(2000); 
            控件点击(text("我知道了"));
            var 发布 = text("发布").boundsInside(0,hg*0.82,wt,hg).findOne(30000);
            if(发布){
                sleep(3500);
                Tap(发布.bounds().centerX()+随机数4, 发布.bounds().centerY()+随机数4);
                sleep(3500);
                控件点击(text("我知道了"));
                sleep(10000);
                text("再拍一个").findOne(50000);
                storagesd.put("kssczpcs",1);
            }
        }
    }
}
function ksyh(){
    var csjl = 0;
    if(ui.dsplx.getSelectedItemPosition()==0||ui.dsplx.getSelectedItemPosition()==2){
        点击启动APP2("快手");
        wait("com.yxcorp.gifshow.HomeActivity", null, 30);
        sleep(3500);
        if(storage.get("自动上传作品",false)){
        for (let index = 0; index < storage.get("zpcs",[1]); index++) {
            if(storagesd.get("kssczpcs",[0])<storage.get("zpcs",[1])){
                if(storage.get("spzdsczp",0)==0){
                    快手上传作品2();
                }else{
                    快手上传作品();
                }
            }
        }
        }else{
            toast("没有勾选上传作品或者每次上传作品数量达上限");
        }
        控件点击(text("发现"));
        控件点击(desc("发现"));
        for (let index = 0; index < storage.get("dspcs");) {
            if(id("container").exists()){
                csjl=0;
                Tap(random(wt*0.15,wt*0.17),random(hg*0.45,wt*0.46));
                sleep(3500);
                ksspbf();
                back();
                sleep(2500);
                随机滑动2(Array(0.45,0.5),Array(0.81,0.82),Array(0.45,0.5),Array(0.001,0.002),600);
                index++;
                toast("以观看"+index+"视频");
                sleep(2000);
            }else{
                控件点击2(text("退出聊天室"));
                csjl++;
                if(csjl>7){
                    throw "没有找到首页";
                }
                if(csjl>4){
                    back();
                }
                sleep(5000);
            }
        }
    }
}
function 进入直播间() {
    var 随机数4 = random(-2,2);
    for (let index = 0; index < 10; index++) {
        sleep(3000);
        var 进入直播 = className("android.widget.LinearLayout").boundsInside(1,1,wt*0.15,hg*0.15).findOnce();
        if(进入直播){
            sleep(1500);
            Tap(进入直播.bounds().centerX()+随机数4, 进入直播.bounds().centerY()+随机数4);
            sleep(3500);
        }
        if(text("说点什么...").exists()){
            for (let index = 0; index < random(0,6); index++) {
                随机滑动2(Array(0.45,0.5),Array(0.65,0.67),Array(0.45,0.5),Array(0.001,0.002),600);
                text("说点什么...").findOne(10000);
                sleep(3500);
            }
            return true;
        }
        控件点击(text("以后再说"));
        控件点击(text("点击重播"));
        if(text("编辑资料").exists()){
            控件点击(text("首页"));
        }
        if(index>7){
            back();
            sleep(2000);
        }
    }
    toast("没有找到直播间");
    return false;
}


function  dyzbgk() {
    if(storage.get("观看直播时间",false)){
        点击启动APP("抖音短视频");
        wait("com.ss.android.ugc.aweme.main.MainActivity", null, 30);
        sleep(10000);
        if(进入直播间()){
            sleep(storage.get("kzbsj")*10000);
            back();
        }
    }
}
function DSPmain() {
    if (storage.get("dspyh",[false])) {
        var nowDate = new Date();
        var 时间 = nowDate.getHours() * 60 + nowDate.getMinutes();
        var DSP养号时间 = storages.create("DSP养号时间");
        if (DSP养号时间.get("DSP养号时间") == undefined) {
            DSP养号时间.put("DSP养号时间", 时间);
        }
        if ((时间 - DSP养号时间.get("DSP养号时间")) >= storage.get("dspjg",[350])){
            DSP养号时间.put("DSP养号时间", 时间);
            try {
                dyzbgk();
                dyyh();
                ksyh();
                清理垃圾();
            } catch (e) {
                log(e);
                清理垃圾();
            }
        } else if ((时间 - DSP养号时间.get("DSP养号时间")) < 0) {
            DSP养号时间.put("DSP养号时间", 时间);
        }
    }
}

function searchTwice(widget1, widget2) {
  if (widget1.exists()) {
      return widget1;
  } else if (widget2.exists()) {
      return widget2;
  } else {
      return id("afdgsjasdhbl;fjkhbnfv;akjfbhngsfj;dxzo");
  }
}

function 写入版本号() {
    var AppPackageName2 = [
        ["cn.weli.story","wlkkbb"]
        ,["com.xiangzi.jukandian","jkdbb"]
        ,["com.jm.video","sbbb"]
        ,["com.readtask.app","mrbkbb"]
        ,["tv.yixia.bobo","bbspbb"]
        ,["com.zheyun.bumblebee","qlsbb"]
        ,["c.l.a","sdhzbb"]
        ,["com.ttyouqu.app","ttqwbb"]
        ,["com.zheyun.bumblebee.kls","klsbb"]
        ,["com.ss.android.ugc.livelite","hsbb"]
        ,["com.kuaishou.nebula","ksbb"]
        ,["com.xiangkan.android","xkbb"]
        ,["com.yuncheapp.android.pearl","kkdbb"]
        ,["com.easy.xlx","xlxbb"]
        ,["com.gosing.article.news.jh","jtbbb"]
        ,["com.roc.dy","jkbbb"]
        ,["com.ss.android.ugc.aweme.lite","dybb"]
        ,["com.jifen.qukan","qttbb"]
        ,["com.yingliang.clicknews","ddxwbb"]
        ,["com.youliao.topic","ylkkbb"]
        ,["com.jifen.dandan","cdspbb"]
        ,["com.jt.hanhan.video","hhspjsbbb"]
        ,["com.video.bsj","bsjdspbb"]
        ,["com.xcm.huasheng","hsttbb"]
        ,["com.bang.redbox","hbhzbb"]
        ,["com.qiushibaike.inews","bxttbb"]
        ,["com.wuba","wbtcbb"]
        ,["com.video.yy","yydspbb"]
        ,["com.yincheng.njread","jnmfxsbb"]
        ,["com.dragon.read","fqmfxsbb"]
        ,["com.toutiaozuqiu.and.liuliu","llydbb"]
        ,["com.app.eh.clickfram","ybbb"]
        ,["cn.weikezhongzhi.wxtest","wkzzbb"]
        ,["com.xiaoqiao.qclean","ttaqlbb"]
        ,["com.shoubang.vxread","jjydbb"]
        ,["com.frog","wwzbb"]
        ,["com.dianshijia.tvlive","dsjbb"]
        ,["c.l.d","hlhzbb"]
        ,["com.zf.shuashua","cddspbb"]
        ,["com.yanhui.moshi","msbb"]
        ,["com.tengu.explorer","nhllqbb"]
        ,["com.video.kd","kddspbb"]
        ["com.video.xch","xchdspbb"]
    ]
    // for (let i = 0; i < AppPackageName2.length; i++) {
    //     var packageName = AppPackageName2[i][0];
    //     // ui[AppPackageName2[i][1]].setText(getPackageVersionName(AppPackageName2[i][0]));
    //     ui[AppPackageName2[i][1]].setText(getPackageVersionName(packageName));
    // }
}

function 取消关注(){
    var myDate = new Date();
    var 随机数4 = random(-2,2);
    if(storage.get("自动取消关注",[false])&&storagesd.get("qxhx",[true])&& parseInt(myDate.getHours())>parseInt(取消关注时间)){
        toast("开始运行取消关注");
        storagesd.put("qxhx",false);
        if(ui.qxgzlx.getSelectedItemPosition()==0||ui.qxgzlx.getSelectedItemPosition()==1){
            点击启动APP("抖音短视频");
            var 我 = text("我").findOne(40000);
            if(我){
                sleep(3500);
                Tap(我.bounds().centerX()+随机数4, 我.bounds().centerY()+随机数4);
                sleep(2500);
                var 关注 = text("关注").findOne(40000);
                if(关注){
                    sleep(3500);
                    Tap(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4);
                    sleep(2500);
                    var 已关注 = text("已关注").findOne(1000);
                    if(已关注){
                        for (let index = 0; index < 30; index++) {
                            随机滑动2(Array(0.47,0.52),Array(0.81,0.82),Array(0.47,0.52),Array(0.11,0.12),1000);
                            sleep(1500);
                            if(text("查找好友并关注").exists()){
                                break;
                            }
                        }
                        for (let index2 = 0; index2 < storage.get("qxgzcs",[20]);) {
                            var b =text("已关注").boundsInside(wt*0.7,hg*0.28,wt,hg*0.99).find();
                            for( q = 0;q < b.length; q++){
                                pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                                
                                sleep(1000);
                            }
                            index2 = index2+b.length;
                            随机滑动2(Array(0.47,0.52),Array(0.35,0.36),Array(0.47,0.52),Array(0.89,0.9),1000);
                        }
                        home();
                        sleep(1500);
                    }
                }
            }
        }
        if(ui.qxgzlx.getSelectedItemPosition()==0||ui.qxgzlx.getSelectedItemPosition()==2){
            点击启动APP("快手");
            var leftb = id("left_btn").findOne(40000);
            if(leftb){
                sleep(3500);
                Tap(leftb.bounds().centerX()+随机数4, leftb.bounds().centerY()+随机数4);
                sleep(2500);
                var tx = id("tab_avatar").findOne(40000);
                if(tx){
                    sleep(2000);
                    Tap(tx.bounds().centerX()+随机数4, tx.bounds().centerY()+随机数4);
                    sleep(2500);
                    var 关注 = text("关注").className("android.widget.TextView").findOne(40000);
                    if(关注){
                        sleep(2000);
                        Tap(关注.bounds().centerX()+随机数4, 关注.bounds().centerY()+随机数4);
                        sleep(2500);
                        var tx2 = id("avatar").findOne(10000);
                        if(tx2){
                            for (let index = 0; index < 20; index++) {
                                随机滑动2(Array(0.47,0.52),Array(0.81,0.82),Array(0.47,0.52),Array(0.11,0.12),1000);
                                sleep(1500);
                                if(text("你可能感兴趣的人").exists()){
                                    break;
                                }
                            }
                            for (let index2 = 0; index2 < storage.get("qxgzcs",[20]);) {
                                var b =id("avatar").boundsInside(1,hg*0.15,wt*0.5,hg*0.99).find();
                                for( q = 0;q < b.length; q++){
                                    pclick(b[q].bounds().centerX()+随机数4,b[q].bounds().centerY()+随机数4);
                                    
                                    sleep(1000);
                                    var 取消关注 = 查找控件(Array(id("header_follow_status_button"),desc("取消关注").className("android.widget.ImageView")),40);
                                    if(取消关注){
                                        pclick(取消关注.bounds().centerX()+随机数4,取消关注.bounds().centerY()+随机数4);
                                        
                                        sleep(1000);
                                        var 停止关注 = text("停止关注").findOne(40000);
                                        if(停止关注){
                                            pclick(停止关注.bounds().centerX()+随机数4,停止关注.bounds().centerY()+随机数4);
                                            
                                            sleep(1000);
                                        }
                                    }
                                    for (let index3 = 0; index3 < 2; index3++) {
                                        if(id("name").exists()){
                                            sleep(1500);
                                            break;
                                        }else{
                                            back();
                                        }
                                        sleep(1500);
                                    }
                                }
                                index2 = index2+b.length;
                            }
                            home();
                            sleep(1500);
                        }
                    }
                }
            }
        }
    }
}




function 获取手机上所有的app名字() {
    var 所有的app名字 = [];
    var pm = context.getPackageManager();
    let list = pm.getInstalledApplications(0);
    for (let i = 0; i < list.size(); i++) {
        let p = list.get(i);
        var app = {
            packageName: p.packageName
        }
        if (p.isSystemApp()) { } else {
            所有的app名字.push(app.packageName);
        }
    }
    return 所有的app名字;
}

var AppPackageName = [
    ["cn.weli.story","wlkk"]
    ,["com.xiangzi.jukandian","jkd"]
    ,["com.jm.video","sb"]
    ,["com.readtask.app","mrbk"]
    ,["tv.yixia.bobo","bbsp"]
    ,["com.zheyun.bumblebee","qls"]
    ,["c.l.a","sdhz"]
    ,["com.ttyouqu.app","ttqw"]
    ,["com.zheyun.bumblebee.kls","kls"]
    ,["com.ss.android.ugc.livelite","hs"]
    ,["com.kuaishou.nebula","ks"]
    ,["com.xiangkan.android","xk"]
    ,["com.yuncheapp.android.pearl","kkd"]
    ,["com.easy.xlx","xlx"]
    ,["com.gosing.article.news.jh","jtb"]
    ,["com.roc.dy","jkb"]
    ,["com.zanqzan.app","zz"]
    ,["com.ss.android.ugc.aweme.lite","dy"]
    ,["com.jifen.qukan","qtt"]
    ,["com.yingliang.clicknews","ddxw"]
    ,["com.youliao.topic","ylkk"]
    ,["com.jifen.dandan","cdsp"]
    ,["com.jt.hanhan.video","hhspjsb"]
    ,["com.video.bsj","bsjdsp"]
    ,["com.xcm.huasheng","hstt"]
    ,["com.bang.redbox","hbhz"]
    ,["com.qiushibaike.inews","bxtt"]
    ,["com.wuba","wbtc"]
    ,["com.video.yy","yydsp"]
    ,["com.yincheng.njread","jnmfxs"]
    ,["com.dragon.read","fqmfxs"]
    ,["com.toutiaozuqiu.and.liuliu","llyd"]
    ,["com.toutiaozuqiu.and.liuliu","llxhs"]
    ,["com.app.eh.clickfram","yb"]
    ,["cn.weikezhongzhi.wxtest","wkzz"]
    ,["com.xiaoqiao.qclean","ttaql"]
    ,["com.shoubang.vxread","jjyd"]
    ,["com.frog","wwz"]
    ,["cn.weikezhongzhi.wxtest","wkzzxhs"]
    ,["com.dianshijia.tvlive","dsj"]
    ,["com.frog","wwzxhs"]
    ,["c.l.d","hlhz"]
    ,["com.zf.shuashua","cddsp"]
    ,["com.yanhui.moshi","ms"]
    ,["com.tengu.explorer","nhllq"]
    ,["com.video.kd","kddsp"]
    ,["com.video.xch","xchdsp"]
]
function oneClickCheck() {
    var alreadyInstalledAppPackage = 获取手机上所有的app名字();
    var 勾选或取消 = storages.create("gx");
    if(勾选或取消.get("勾选或取消",[false])){
        for (let i = 0; i < AppPackageName.length; i++) {
            for (let j = 0; j < alreadyInstalledAppPackage.length; j++) {
                if (alreadyInstalledAppPackage[j] === AppPackageName[i][0]) {
                    ui[AppPackageName[i][1]].setChecked(true);
                    勾选或取消.put("勾选或取消",false);
                }
            }
        }
    }else{
        for (let i = 0; i < AppPackageName.length; i++) {
            ui[AppPackageName[i][1]].setChecked(false);
            勾选或取消.put("勾选或取消",true);
        }
    }
}

function 下载或安装(){
    sleep(4000);
        var point = images.findMultiColors(captureScreen(), "#0BAE73", [[wt * 0.01, 0, "#0BAE73"], [wt * 0.02, 0, "#0BAE73"]], {
            region: [wt * 0.2, hg * 0.7, wt * 0.7, hg * 0.3],
            threshold: 20
        });
        if (point) {
            sleep(2000);
            Tap(point.x, point.y+3);
            sleep(2000);
            var 立即下载  = text("立即下载").findOne(6000);
            if(立即下载){
                sleep(3000);
                立即下载.click();
                sleep(2000);
            }
            return true;
        }else{
            if(控件点击2(searchTwice(text("安装").boundsInside(wt*0.45,hg*0.8,wt*0.55,hg),text("升级").boundsInside(wt*0.45,hg*0.8,wt*0.55,hg)))){
                var 立即下载  = text("立即下载").findOne(6000);
                if(立即下载){
                    sleep(3000);
                    立即下载.click();
                    sleep(2000);
                }
                return true;
            }
        }
    return false;
}
function 切回脚本(){
    recents();
    sleep(3000);
   var 切回脚本 = id("title").className("android.widget.TextView").textContains(yym).findOne(3000);
    if(切回脚本){
        sleep(2000);
        Tap(切回脚本.bounds().centerX(),切回脚本.bounds().centerY());
        sleep(3000);
        return true;
    }else{
        return false;
    }
}

function 一键下载() {
    AppAr = 获取勾选APP();
    var 下载成功 = "";
    if(AppAr.length === 0){
        toast("没有勾选要下载的APP");
    }else{
        for (let wz = 0; wz < AppAr.length; wz++) {
            应用下载2(AppAr[wz]);
            if(下载或安装()){
                下载成功 =下载成功 + AppAr[wz][0]+"下载成功\n";
            }
            切回脚本();
        }
        dialogs.build({
            title: "自动下载或更新",
            content: 下载成功!==""?下载成功:"本轮没有下载或更新任何APP",
            negative: "知道了"
        }).show();
    }
}



// function 更新() {
//     更新线程 = threads.start(function () {
//         bbyreg.函数_执行脚本更新();
//     });
// }

剩余小时数 = 100;
不验证时间 = 12;
var 注册码验证 = true;
// function 注册码首次验证() {
//     bbyreg.变量_注册码 = 信息注册码.replace(/\s+/g,"");
//     注册码验证 = false;
//     if (bbyreg.函数_执行注册登录()) {
//         bbyreg.函数_获取剩余分钟();
//         bbyreg.函数_获取注册码验证();
//         sleep(2000);
//         剩余小时数 = Math.round(bbyreg.函数_获取剩余分钟() / 60);
//         toast("注册码剩余" + 剩余小时数 + "小时");
//         if(剩余小时数-48>0){
//             不验证时间 = 48;
//         }else if(剩余小时数 == 0){
//             不验证时间 = 1;
//         }else{
//             不验证时间 = 剩余小时数;
//         }
//         注册码验证 = true;
//     } else if (bbyreg.变量_错误信息 == "操作失败:注册码已经绑定其他机器") {
//         log("自动解绑,登陆");
//         sleep(2000);
//         for (hj = 0; hj < 3; hj++) {
//             bbyreg.函数_执行注册解绑();
//             sleep(1000);
//             if (bbyreg.函数_执行注册登录()){
//                 bbyreg.函数_获取剩余分钟();
//                 bbyreg.函数_获取注册码验证();
//                 sleep(2000);
//                 剩余小时数 = Math.round(bbyreg.函数_获取剩余分钟() / 60);
//                 toast("注册码剩余" + 剩余小时数 + "小时");
//                 if(剩余小时数-48>0){
//                     不验证时间 = 48;
//                 }else if(剩余小时数 == 0){
//                     不验证时间 = 1;
//                 }else{
//                     不验证时间 = 剩余小时数;
//                 }
//                 注册码验证 = true;
//                 break;
//             }
//         } if (bbyreg.变量_错误信息 == "操作失败:注册码已经绑定其他机器") {
//             while(true){
//                 toast("换绑次数到达上限，联系作者");
//                 sleep(1500);
//             }
//         }
//     }
//     else {
//         if(bbyreg.变量_错误信息 == "操作失败:注册码已过期."){
//             while(true){
//                 toast("注册码过期,请联系作者购买");
//                 sleep(1500);
//             }
//         } 
//         while(true){
//             toast(bbyreg.变量_错误信息);
//             sleep(1500);
//         }
//     }
// }

// function 注册码后续验证() {
//     bbyreg.变量_注册码 = 信息注册码.replace(/\s+/g,"");
//     注册码验证 = false;
//     if (bbyreg.函数_执行注册登录()) {
//         bbyreg.函数_获取剩余分钟();
//         剩余小时数 = Math.round(bbyreg.函数_获取剩余分钟() / 60);
//         toast("注册码剩余" + 剩余小时数 + "小时");
//         if(剩余小时数-48>0){
//             不验证时间 = 48;
//         }else if(剩余小时数 == 0){
//             不验证时间 = 0;
//         }else{
//             不验证时间 = 剩余小时数;
//         }
//         注册码验证 = true;
//     }else {
//         for (i = 0; i <= 2; i++) {
//             sleep(30000);
//             if (bbyreg.函数_执行注册登录()) {
//                 bbyreg.函数_获取剩余分钟();
//                 剩余小时数 = Math.round(bbyreg.函数_获取剩余分钟() / 60);
//                 toast("注册码剩余" + 剩余小时数 + "小时");
//                 if(剩余小时数-48>0){
//                     不验证时间 = 48;
//                 }else if(剩余小时数 == 0){
//                     不验证时间 = 1;
//                 }else{
//                     不验证时间 = 剩余小时数;
//                 }
//                 注册码验证 = true;
//                 break;
//             }
//         }
//         if (bbyreg.函数_执行注册登录() == false) {
//             if(bbyreg.变量_错误信息 == "操作失败:注册码已过期."){
//                 while(true){
//                     log("注册码过期,请联系作者购买");
//                     sleep(1500);
//                 }
//             } 
//             while(true){
//                 log(bbyreg.变量_错误信息);
//                 sleep(1500);
//             }
//         }
//     }
// }
// function 不验证设定() {
//     var nowDate = new Date();
//     var 时间 = Math.floor(nowDate/1000/60/60);
//     bbyreg.变量_注册码 = 信息注册码.replace(/\s+/g,"");
//     var 对比时间 = storages.create("对比时间");
//     if (对比时间.get("对比时间") == undefined) {
//         log("创建对比时间");
//         对比时间.put("对比时间", 时间);
//     }
//     if ((时间 - 对比时间.get("对比时间")) >= 不验证时间) {
//         log("验证");
//         注册码后续验证();
//         对比时间.put("对比时间", 时间);
//     } else {
//         log("不请求验证");
//     } 
// }


function 保存页面信息 (){

    清理内存storages.put("是否清理",ui.清理内存.isChecked());
    深度清理storages.put("深度清理",ui.深度清理.isChecked());
    storage.put("自动提现",ui.自动提现.isChecked());
    storage.put("llydtpjc",ui.llydtpjc.isChecked());
    // storage.put("jhm",ui.jhm.getText().toString());

    storage.put("联众账号",ui.联众账号.getText().toString());
    storage.put("联众密码",ui.联众密码.getText().toString());
    username = storage.get("联众账号","");
    password = storage.get("联众密码","");

    storage.put("分享",ui.分享.isChecked());
    storage.put("收关喜",ui.收关喜.isChecked());

    storage.put("自动上传作品",ui.自动上传作品.isChecked());
    storage.put("spzdsczp",parseInt(ui.spzdsczp.getSelectedItemPosition()));
    storage.put("zpcs",parseInt(ui.zpcs.getText()));

    storage.put("观看直播时间",ui.观看直播时间.isChecked());
    storage.put("kzbsj",parseInt(ui.kzbsj.getText()));
    
    storage.put("自动取消关注",ui.自动取消关注.isChecked());
    storage.put("qxgzcs",parseInt(ui.qxgzcs.getText()));
    
    storage.put("分享比例",parseInt(ui.分享比例.getText()));
    storage.put("收关喜比例",parseInt(ui.收关喜比例.getText()));

    storage.put("wxyh",ui.wxyh.isChecked());
    storage.put("wxyhjg",parseInt(ui.wxyhjg.getText()));

    storage.put("dspyh",ui.dspyh.isChecked());
    storage.put("dspjg",parseInt(ui.dspjg.getText()));
    storage.put("dspcs",parseInt(ui.dspcs.getText()));
    storage.put("dsplx",parseInt(ui.dsplx.getSelectedItemPosition()));
    storage.put("qxgzlx",parseInt(ui.qxgzlx.getSelectedItemPosition()));


    storage.put("yjxx",ui.yjxx.isChecked());
    storage.put("yjxx1",parseInt(ui.yjxx1.getText()));
    storage.put("yjxx2",parseInt(ui.yjxx2.getText()));

    storage.put("yjxx1",parseInt(ui.yjxx1.getText()));
    storage.put("yjxx1",parseInt(ui.yjxx1.getText()));
    storage.put("yjxx2",parseInt(ui.yjxx2.getText()));

    storage.put("DYlike",ui.DYlike.getText());
    storage.put("DYattion",ui.DYattion.getText());
    storage.put("DYNickmeName",ui.DYNickmeName.getText());

    storage.put("jkd",ui.jkd.isChecked());
    storage.put("jkd1",parseInt(ui.jkd1.getText()));
    storage.put("jkd2",parseInt(ui.jkd2.getText()));

    storage.put("tdsd",ui.tdsd.isChecked());
    storage.put("tdsd1",parseInt(ui.tdsd1.getText()));
    storage.put("tdsd2",parseInt(ui.tdsd2.getText()));
    storage.put("tdsdxz",parseInt(ui.tdsdxz.getSelectedItemPosition()));

    storage.put("dsdt2",ui.dsdt2.isChecked());
    storage.put("dsdt11",parseInt(ui.dsdt11.getText()));
    storage.put("dsdt22",parseInt(ui.dsdt22.getText()));
    storage.put("dsdt2xz",parseInt(ui.dsdt2xz.getSelectedItemPosition()));
    
    storage.put("wlkk",ui.wlkk.isChecked());
    storage.put("wlkk1",parseInt(ui.wlkk1.getText()));
    storage.put("wlkk2",parseInt(ui.wlkk2.getText()));

    storage.put("mrbk",ui.mrbk.isChecked());
    storage.put("mrbk1",parseInt(ui.mrbk1.getText()));

    storage.put("sb",ui.sb.isChecked());
    storage.put("sb2",parseInt(ui.sb2.getText()));

    storage.put("bbsp",ui.bbsp.isChecked());
    storage.put("bbsp2",parseInt(ui.bbsp2.getText()));

    storage.put("qls",ui.qls.isChecked());
    storage.put("qls2",parseInt(ui.qls2.getText()));

    storage.put("sdhz",ui.sdhz.isChecked());
    storage.put("sdhz1",parseInt(ui.sdhz1.getText()));
    storage.put("sdhz2",parseInt(ui.sdhz2.getText()));

    storage.put("kls",ui.kls.isChecked());
    storage.put("kls2",parseInt(ui.kls2.getText()));

    storage.put("cddsp",ui.cddsp.isChecked());
    storage.put("cddsp2",parseInt(ui.cddsp2.getText()));

    storage.put("ms",ui.ms.isChecked());
    storage.put("ms2",parseInt(ui.ms2.getText()));
    
    storage.put("nhllq",ui.nhllq.isChecked());
    storage.put("nhllq2",parseInt(ui.nhllq2.getText()));

    storage.put("kddsp",ui.kddsp.isChecked());
    storage.put("kddsp2",parseInt(ui.kddsp2.getText()));

    storage.put("xchdsp",ui.xchdsp.isChecked());
    storage.put("xchdsp2",parseInt(ui.xchdsp2.getText()));

    storage.put("ttqw",ui.ttqw.isChecked());
    storage.put("ttqw1",parseInt(ui.ttqw1.getText()));

    storage.put("hs",ui.hs.isChecked());
    storage.put("hs2",parseInt(ui.hs2.getText()));

    storage.put("ks",ui.ks.isChecked());
    storage.put("ks2",parseInt(ui.ks2.getText()));

    storage.put("xk",ui.xk.isChecked());
    storage.put("xk1",parseInt(ui.xk1.getText()));
    storage.put("xk2",parseInt(ui.xk2.getText()));

    storage.put("kkd",ui.kkd.isChecked());
    storage.put("kkd1",parseInt(ui.kkd1.getText()));
    storage.put("kkd2",parseInt(ui.kkd2.getText()));

    storage.put("xlx",ui.xlx.isChecked());
    storage.put("xlx1",parseInt(ui.xlx1.getText()));

    storage.put("jtb",ui.jtb.isChecked());
    storage.put("jtb1",parseInt(ui.jtb1.getText()));

    storage.put("jkb",ui.jkb.isChecked());
    storage.put("jkb1",parseInt(ui.jkb1.getText()));

    storage.put("zzxyb",ui.zzxyb.isChecked());
    

    storage.put("zz",ui.zz.isChecked());
    storage.put("zz1",parseInt(ui.zz1.getText()));
    storage.put("zz2",parseInt(ui.zz2.getText()));

    storage.put("dy",ui.dy.isChecked());
    storage.put("dy2",parseInt(ui.dy2.getText()));

    storage.put("qtt",ui.qtt.isChecked());
    storage.put("qtt1",parseInt(ui.qtt1.getText()));
    storage.put("qtt2",parseInt(ui.qtt2.getText()));

    storage.put("ddxw",ui.ddxw.isChecked());
    storage.put("ddxw1",parseInt(ui.ddxw1.getText()));
    storage.put("ddxw2",parseInt(ui.ddxw2.getText()));

    storage.put("ylkk",ui.ylkk.isChecked());
    storage.put("ylkk1",parseInt(ui.ylkk1.getText()));
    storage.put("ylkk2",parseInt(ui.ylkk2.getText()));

    storage.put("cdsp",ui.cdsp.isChecked());
    storage.put("cdsp2",parseInt(ui.cdsp2.getText()));
    
    storage.put("hhspjsb",ui.hhspjsb.isChecked());
    storage.put("hhspjsb2",parseInt(ui.hhspjsb2.getText()));

    storage.put("bsjdsp",ui.bsjdsp.isChecked());
    storage.put("bsjdsp2",parseInt(ui.bsjdsp2.getText()));

    storage.put("hstt",ui.hstt.isChecked());
    storage.put("hstt1",parseInt(ui.hstt1.getText()));
    storage.put("hstt2",parseInt(ui.hstt2.getText()));

    storage.put("hbhz",ui.hbhz.isChecked());
    storage.put("hbhz1",parseInt(ui.hbhz1.getText()));
    storage.put("hbhz2",parseInt(ui.hbhz2.getText()));

    storage.put("bxtt",ui.bxtt.isChecked());
    storage.put("bxtt1",parseInt(ui.bxtt1.getText()));
    storage.put("bxtt2",parseInt(ui.bxtt2.getText()));

    storage.put("wbtc",ui.wbtc.isChecked());
    storage.put("wbtc1",parseInt(ui.wbtc1.getText()));

    storage.put("yydsp",ui.yydsp.isChecked());
    storage.put("yydsp2",parseInt(ui.yydsp2.getText()));

    storage.put("jnmfxs",ui.jnmfxs.isChecked());
    storage.put("jnmfxs1",parseInt(ui.jnmfxs1.getText()));

    storage.put("fqmfxs",ui.fqmfxs.isChecked());
    storage.put("fqmfxs1",parseInt(ui.fqmfxs1.getText()));

    storage.put("llyd",ui.llyd.isChecked());
    storage.put("llyd1",parseInt(ui.llyd1.getText()));
    storage.put("llyd2",parseInt(ui.llyd2.getText()));

    storage.put("jjyd",ui.jjyd.isChecked());
    storage.put("jjyd1",parseInt(ui.jjyd1.getText()));
    storage.put("jjyd2",parseInt(ui.jjyd2.getText()));

    storage.put("yb",ui.yb.isChecked());
    storage.put("yb1",parseInt(ui.yb1.getText()));
    storage.put("yb2",parseInt(ui.yb2.getText()));
    
    storage.put("wkzz",ui.wkzz.isChecked());
    storage.put("wkzz1",parseInt(ui.wkzz1.getText()));
    storage.put("wkzz2",parseInt(ui.wkzz2.getText()));

    storage.put("ttaql",ui.ttaql.isChecked());
    storage.put("ttaql2",parseInt(ui.ttaql2.getText()));

    storage.put("wwz",ui.wwz.isChecked());
    storage.put("wwz1",parseInt(ui.wwz1.getText()));
    storage.put("wwz2",parseInt(ui.wwz2.getText()));

    storage.put("wkzzxhs",ui.wkzzxhs.isChecked());
    storage.put("wkzzxhs1",parseInt(ui.wkzzxhs1.getText()));

    storage.put("wwzxhs",ui.wwzxhs.isChecked());
    storage.put("wwzxhs1",parseInt(ui.wwzxhs1.getText()));

    storage.put("llxhs",ui.llxhs.isChecked());
    storage.put("llxhs1",parseInt(ui.llxhs1.getText()));

    storage.put("dsj",ui.dsj.isChecked());
    storage.put("dsj1",parseInt(ui.dsj1.getText()));

    storage.put("hlhz",ui.hlhz.isChecked());
    storage.put("hlhz1",parseInt(ui.hlhz1.getText()));
    storage.put("hlhz2",parseInt(ui.hlhz2.getText()));
}

function 获取勾选APP(){
    toastLog("获取勾选APP")
    var ay = new Array();
    if(ui.jkd.isChecked()){
        ay[ay.length] =  ["聚看点","jkd","com.xiangzi.jukandian"];
    }
    if(ui.wlkk.isChecked()){
        ay[ay.length] =  ["微鲤","wlkk","cn.weli.story"];
    }
    if(ui.mrbk.isChecked()){
        ay[ay.length] = ["每日必看","mrbk","com.readtask.app"];
    }
    if(ui.sb.isChecked()){
        ay[ay.length] = ["刷宝","sb","com.jm.video"]; 
    }
    if(ui.bbsp.isChecked()){
        ay[ay.length] = ["波波视频","bbsp","tv.yixia.bobo"];
    }
    if(ui.qls.isChecked()){
        ay[ay.length] = ["趣铃声","qls","com.zheyun.bumblebee"];
    }
    if(ui.sdhz.isChecked()){
        ay[ay.length] = ["闪电盒子","sdhz","c.l.a"];
    }
    if(ui.kls.isChecked()){
        ay[ay.length] = ["酷铃声","kls","com.zheyun.bumblebee.kls"];
    }
    if(ui.ttqw.isChecked()){
        ay[ay.length] = ["天天趣闻","ttqw","com.ttyouqu.app"];
    }
    if(ui.hs.isChecked()){
        ay[ay.length] = ["火山","hs","com.ss.android.ugc.livelite"];
    }
    if(ui.ks.isChecked()){
        ay[ay.length] = ["快手","ks","com.kuaishou.nebula"];
    }
    if(ui.xk.isChecked()){
        ay[ay.length] = ["想看","xk","com.xiangkan.android"];
    }
    if(ui.kkd.isChecked()){
        ay[ay.length] = ["快看点","kkd","com.yuncheapp.android.pearl"];
    }
    if(ui.xlx.isChecked()){
        ay[ay.length] = ["小龙虾","xlx","com.easy.xlx"];
    }
    if(ui.jtb.isChecked()){
        ay[ay.length] = ["截图宝","jtb","com.gosing.article.news.jh"];
    }
    if(ui.jkb.isChecked()){
        ay[ay.length] = ["集卡帮","jkb","com.roc.dy"];
    }
    if(ui.zz.isChecked()){
        ay[ay.length] = ["攒攒","zz","com.zanqzan.app"];
    }
    if(ui.zzxyb.isChecked()){
        ay[ay.length] = ["攒攒协议版","zzxyb","com.zanqzan.app"];
    }
    if(ui.dy.isChecked()){
        ay[ay.length] = ["抖音","dy","com.ss.android.ugc.aweme.lite"];
    }
    if(ui.qtt.isChecked()){
        ay[ay.length] = ["趣头条","qtt","com.jifen.qukan"];
    }
    if(ui.ddxw.isChecked()){
        ay[ay.length] = ["点点新闻","ddxw","com.yingliang.clicknews"];
    }
    if(ui.ylkk.isChecked()){
        ay[ay.length] = ["有料看看","ylkk","com.youliao.topic"];
    }
    if(ui.cdsp.isChecked()){
        ay[ay.length] = ["彩蛋视频","cdsp","com.jifen.dandan"];
    }
    if(ui.hhspjsb.isChecked()){
        ay[ay.length] = ["火火视频极速版","hhspjsb","com.jt.hanhan.video"];
    }
    if(ui.bsjdsp.isChecked()){
        ay[ay.length] =["变身记短视频","bsjdsp","com.video.bsj"];
    }
    if(ui.hstt.isChecked()){
        ay[ay.length] = ["花生头条","hstt","com.xcm.huasheng"];
    }
    if(ui.hbhz.isChecked()){
        ay[ay.length] = ["红包盒子","hbhz","com.bang.redbox"];
    }
    if(ui.bxtt.isChecked()){
        ay[ay.length] =["百姓头条","bxtt","com.qiushibaike.inews"];
    }
    if(ui.wbtc.isChecked()){
        ay[ay.length] =["58同城","wbtc","com.wuba"];
    }
    if(ui.yydsp.isChecked()){
        ay[ay.length] =["有颜短视频","yydsp","com.video.yy"];
    }
    if(ui.jnmfxs.isChecked()){
        ay[ay.length] = ["角牛免费小说","jnmfxs","com.yincheng.njread"];
    }
    if(ui.fqmfxs.isChecked()){
        ay[ay.length] = ["番茄免费小说","fqmfxs","com.dragon.read"];
    }
    if(ui.llyd.isChecked()){
        ay[ay.length] =["66联盟","llyd","com.toutiaozuqiu.and.liuliu"];
    }
    if(ui.yb.isChecked()){
        ay[ay.length] = ["易帮","yb","com.app.eh.clickfram"];
    }
    if(ui.wkzz.isChecked()){
        ay[ay.length] =["微客众智","wkzz","cn.weikezhongzhi.wxtest"];
    }
    if(ui.ttaql.isChecked()){
        ay[ay.length] = ["天天爱清理","ttaql","com.xiaoqiao.qclean"];
    }
    if(ui.jjyd.isChecked()){
        ay[ay.length] =["99阅读","jjyd","com.shoubang.vxread"];
    }
    if(ui.wwz.isChecked()){
        ay[ay.length] = ["蛙蛙赚","wwz","com.frog"];
    }
    if(ui.wkzzxhs.isChecked()){
        ay[ay.length] =["微客众智2","wkzzxhs","cn.weikezhongzhi.wxtest"];
    }
    if(ui.dsj.isChecked()){
        ay[ay.length] =["电视家","dsj","com.wuba"];
    }
    if(ui.wwzxhs.isChecked()){
        ay[ay.length] =["蛙蛙赚2","wwzxhs","com.frog"];
    }
    if(ui.hlhz.isChecked()){
        ay[ay.length] = ["欢乐盒子","hlhz","c.l.d"];
    }
    if(ui.cddsp.isChecked()){
        ay[ay.length] = ["长豆短视频","cddsp","com.zf.shuashua"];
    }
    if(ui.ms.isChecked()){
        ay[ay.length] = ["魔视","ms","com.yanhui.moshi"];
    }
    if(ui.nhllq.isChecked()){
        ay[ay.length] = ["你好浏览器","nhllq","com.tengu.explorer"];
    }
    if(ui.kddsp.isChecked()){
        ay[ay.length] = ["快逗短视频","kddsp","com.video.kd"];
    }
    if(ui.xchdsp.isChecked()){
        ay[ay.length] = ["小吃货短视频","xchdsp","com.video.xch"];
    }
    if(ui.llxhs.isChecked()){
        ay[ay.length] =["66联盟2","llxhs","com.toutiaozuqiu.and.liuliu"];
    }
    // toastLog(ay);
    return ay;
}

function 获取阅读APP(){
    toastLog("获取阅读APP")
    var ay = new Array();
    if(ui.jkd.isChecked()){
        ay[ay.length] =  ["聚看点","jkd","com.xiangzi.jukandian"];
    }
    if(ui.wlkk.isChecked()){
        ay[ay.length] =  ["微鲤","wlkk","cn.weli.story"];
    }
    if(ui.sb.isChecked()){
        ay[ay.length] = ["刷宝","sb","com.jm.video"]; 
    }
    if(ui.bbsp.isChecked()){
        ay[ay.length] = ["波波视频","bbsp","tv.yixia.bobo"];
    }
    if(ui.qls.isChecked()){
        ay[ay.length] = ["趣铃声","qls","com.zheyun.bumblebee"];
    }
    if(ui.sdhz.isChecked()){
        ay[ay.length] = ["闪电盒子","sdhz","c.l.a"];
    }
    if(ui.kls.isChecked()){
        ay[ay.length] = ["酷铃声","kls","com.zheyun.bumblebee.kls"];
    }
    if(ui.ttqw.isChecked()){
        ay[ay.length] = ["天天趣闻","ttqw","com.ttyouqu.app"];
    }
    if(ui.hs.isChecked()){
        ay[ay.length] = ["火山","hs","com.ss.android.ugc.livelite"];
    }
    if(ui.ks.isChecked()){
        ay[ay.length] = ["快手","ks","com.kuaishou.nebula"];
    }
    if(ui.xk.isChecked()){
        ay[ay.length] = ["想看","xk","com.xiangkan.android"];
    }
    if(ui.kkd.isChecked()){
        ay[ay.length] = ["快看点","kkd","com.yuncheapp.android.pearl"];
    }
    if(ui.dy.isChecked()){
        ay[ay.length] = ["抖音","dy","com.ss.android.ugc.aweme.lite"];
    }
    if(ui.qtt.isChecked()){
        ay[ay.length] = ["趣头条","qtt","com.jifen.qukan"];
    }
    if(ui.ddxw.isChecked()){
        ay[ay.length] = ["点点新闻","ddxw","com.yingliang.clicknews"];
    }
    if(ui.ylkk.isChecked()){
        ay[ay.length] = ["有料看看","ylkk","com.youliao.topic"];
    }
    if(ui.cdsp.isChecked()){
        ay[ay.length] = ["彩蛋视频","cdsp","com.jifen.dandan"];
    }
    if(ui.hhspjsb.isChecked()){
        ay[ay.length] = ["火火视频极速版","hhspjsb","com.jt.hanhan.video"];
    }
    if(ui.bsjdsp.isChecked()){
        ay[ay.length] =["变身记短视频","bsjdsp","com.video.bsj"];
    }
    if(ui.hstt.isChecked()){
        ay[ay.length] = ["花生头条","hstt","com.xcm.huasheng"];
    }
    if(ui.hbhz.isChecked()){
        ay[ay.length] = ["红包盒子","hbhz","com.bang.redbox"];
    }
    if(ui.bxtt.isChecked()){
        ay[ay.length] =["百姓头条","bxtt","com.qiushibaike.inews"];
    }
    if(ui.yydsp.isChecked()){
        ay[ay.length] =["有颜短视频","yydsp","com.video.yy"];
    }
    if(ui.ttaql.isChecked()){
        ay[ay.length] = ["天天爱清理","ttaql","com.xiaoqiao.qclean"];
    }
    if(ui.hlhz.isChecked()){
        ay[ay.length] = ["欢乐盒子","hlhz","c.l.d"];
    }
    if(ui.cddsp.isChecked()){
        ay[ay.length] = ["长豆短视频","cddsp","com.zf.shuashua"];
    }
    if(ui.ms.isChecked()){
        ay[ay.length] = ["魔视","ms","com.yanhui.moshi"];
    }
    if(ui.nhllq.isChecked()){
        ay[ay.length] = ["你好浏览器","nhllq","com.tengu.explorer"];
    }
    if(ui.kddsp.isChecked()){
        ay[ay.length] = ["快逗短视频","kddsp","com.video.kd"];
    }
    if(ui.kddsp.isChecked()){
        ay[ay.length] = ["小吃货短视频","xchdsp","com.video.xch"];
    }
    // toastLog(ay)
    return ay;
}

function 获取任务APP(){
    var ay = new Array();
    if(ui.mrbk.isChecked()){
        ay[ay.length] = ["每日必看","mrbk","com.readtask.app"];
    }
    if(ui.xlx.isChecked()){
        ay[ay.length] = ["小龙虾","xlx","com.easy.xlx"];
    }
    if(ui.jtb.isChecked()){
        ay[ay.length] = ["截图宝","jtb","com.gosing.article.news.jh"];
    }
    if(ui.jkb.isChecked()){
        ay[ay.length] = ["集卡帮","jkb","com.roc.dy"];
    }
    if(ui.zz.isChecked()){
        ay[ay.length] = ["攒攒","zz","com.zanqzan.app"];
    }
    if(ui.zzxyb.isChecked()){
        ay[ay.length] = ["攒攒协议版","zzxyb","com.zanqzan.app"];
    }
    if(ui.llyd.isChecked()){
        ay[ay.length] =["66联盟","llyd","com.toutiaozuqiu.and.liuliu"];
    }
    if(ui.yb.isChecked()){
        ay[ay.length] = ["易帮","yb","com.app.eh.clickfram"];
    }
    if(ui.wkzz.isChecked()){
        ay[ay.length] =["微客众智","wkzz","cn.weikezhongzhi.wxtest"];
    }
    if(ui.jjyd.isChecked()){
        ay[ay.length] =["99阅读","jjyd","com.shoubang.vxread"];
    }
    if(ui.wwz.isChecked()){
        ay[ay.length] = ["蛙蛙赚","wwz","com.frog"];
    }
    if(ui.wkzzxhs.isChecked()){
        ay[ay.length] =["微客众智2","wkzzxhs","cn.weikezhongzhi.wxtest"];
    }
    if(ui.wwzxhs.isChecked()){
        ay[ay.length] =["蛙蛙赚2","wwzxhs","com.frog"];
    }
    if(ui.llxhs.isChecked()){
        ay[ay.length] =["66联盟2","llxhs","com.toutiaozuqiu.and.liuliu"];
    }
    return ay;
}

function 获取其他APP(){
    var ay = new Array();
    if(ui.wbtc.isChecked()){
        ay[ay.length] =["58同城","wbtc","com.wuba"];
    }
    if(ui.dsj.isChecked()){
        ay[ay.length] =["电视家","dsj","com.wuba"];
    }
    if(ui.jnmfxs.isChecked()){
        ay[ay.length] = ["角牛免费小说","jnmfxs","com.yincheng.njread"];
    }
    if(ui.fqmfxs.isChecked()){
        ay[ay.length] = ["番茄免费小说","fqmfxs","com.dragon.read"];
    }
    return ay;
}

function 运行APP(APP){
    toastLog("运行APP")
    switch(APP){
        case "聚看点":
            if(storage.get("jkd1") <= storagesd.get("jkdwz",[0])&&storage.get("jkd2") <= storagesd.get("jkdsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "微鲤":
            if(storage.get("wlkk1") <= storagesd.get("wlkkwz",[0])&&storage.get("wlkk2") <= storagesd.get("wlkksp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "刷宝":
            if(storage.get("sb2") <= storagesd.get("sbsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "每日必看":
            if(storage.get("mrbk1") <= storagesd.get("mrbkrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "波波视频":
            if(storage.get("bbsp2") <= storagesd.get("bbspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "趣铃声":
            if(storage.get("qls2") <= storagesd.get("qlssp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "闪电盒子":
            if(storage.get("sdhz1") <= storagesd.get("sdhzwz",[0])&&storage.get("sdhz2") <= storagesd.get("sdhzsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "有看头":
            if(storage.get("ykt1") <= storagesd.get("yktwz",[0])&&storage.get("ykt2") <= storagesd.get("yktsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;       
        case "酷铃声":
            if(storage.get("kls2") <= storagesd.get("klssp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "天天趣闻":
            if(storage.get("ttqw1") <= storagesd.get("ttqwwz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "火山":
            if(storage.get("hs2") <= storagesd.get("hssp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "快手":
            if(storage.get("ks2") <= storagesd.get("kssp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "想看":
            if(storage.get("xk1") <= storagesd.get("xkwz",[0])&&storage.get("xk2") <= storagesd.get("xksp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "快看点":
            if(storage.get("kkd1") <= storagesd.get("kkdwz",[0])&&storage.get("kkd2") <= storagesd.get("kkdsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
        case "小龙虾":
            if(storage.get("xlx1") <= storagesd.get("xlxrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
        case "截图宝":
            if(storage.get("jtb1") <= storagesd.get("jtbrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
        case "集卡帮":
            if(storage.get("jkb1") <= storagesd.get("jkbrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
        case "淘头条":
            if(storage.get("ttt1") <= storagesd.get("tttwz",[0])&&storage.get("ttt2") <= storagesd.get("tttsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }

        case "攒攒":
            if(storage.get("zz1") <= storagesd.get("zzwz",[0])&&storage.get("zz2") <= storagesd.get("zzwz2",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "攒攒协议版":
            if(storage.get("DYnumb") <= storagesd.get("DYnumbjl",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "抖音":
            if(storage.get("dy2") <= storagesd.get("dysp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "趣头条":
            if(storage.get("qtt1") <= storagesd.get("qttwz",[0])&&storage.get("qtt2") <= storagesd.get("qttsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "点点新闻":
            if(storage.get("ddxw1") <= storagesd.get("ddxwwz",[0])&&storage.get("ddxw2") <= storagesd.get("ddxwsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "有料看看":
            if(storage.get("ylkk1") <= storagesd.get("ylkkwz",[0])&&storage.get("ylkk2") <= storagesd.get("ylkksp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "彩蛋视频":
            if(storage.get("cdsp2") <= storagesd.get("cdspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "火火视频极速版":
            if(storage.get("hhspjsb2") <= storagesd.get("hhspjsbsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "变身记短视频":
            if(storage.get("bsjdsp2") <= storagesd.get("bsjdspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "花生头条":
            if(storage.get("hstt1") <= storagesd.get("hsttwz",[0])&&storage.get("hstt2") <= storagesd.get("hsttsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "红包盒子":
            if(storage.get("hbhz1") <= storagesd.get("hbhzwz",[0])&&storage.get("hbhz2") <= storagesd.get("hbhzsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "百姓头条":
            if(storage.get("bxtt1") <= storagesd.get("bxttwz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "58同城":
            if(storage.get("wbtc1") <= storagesd.get("wbtcwz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "有颜短视频":
            if(storage.get("yydsp2") <= storagesd.get("yydspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "角牛免费小说":
            if(storage.get("jnmfxs1") <= storagesd.get("jnmfxswz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "番茄免费小说":
            if(storage.get("fqmfxs1") <= storagesd.get("fqmfxswz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "66联盟":
            if(storage.get("llyd1") <= storagesd.get("llydrw",[0])&&storage.get("llyd2") <= storagesd.get("llydrw2",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "易帮":
            if(storage.get("yb1") <= storagesd.get("ybks",[0])&&storage.get("yb2") <= storagesd.get("ybdy",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "微客众智":
            if(storage.get("wkzz1") <= storagesd.get("wkzzrw",[0])&&storage.get("wkzz2") <= storagesd.get("wkzzrw2",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "天天爱清理":
            if(storage.get("ttaql2") <= storagesd.get("ttaqlsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "99阅读":
            if(storage.get("jjyd1") <= storagesd.get("jjydrw",[0])&&storage.get("jjyd2") <= storagesd.get("jjydrw2",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "蛙蛙赚":
            if(storage.get("wwz1") <= storagesd.get("wwzrw",[0])&&storage.get("wwz2") <= storagesd.get("wwzrw2",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
        case "微客众智2":
            if(storage.get("wkzzxhs1") <= storagesd.get("wkzzxhsrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "电视家":
            if(storage.get("dsj1") <= storagesd.get("dsjwz",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "蛙蛙赚2":
            if(storage.get("wwzxhs1") <= storagesd.get("wwzxhsrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "欢乐盒子":
            if(storage.get("hlhz1") <= storagesd.get("hlhzwz",[0])&&storage.get("hlhz2") <= storagesd.get("hlhzsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "长豆短视频":
            if(storage.get("cddsp2") <= storagesd.get("cddspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "魔视":
            if(storage.get("ms2") <= storagesd.get("mssp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "你好浏览器":
            if(storage.get("nhllq2") <= storagesd.get("nhllqsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "快逗短视频":
            if(storage.get("kddsp2") <= storagesd.get("kddspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "小吃货短视频":
            if(storage.get("xchdsp2") <= storagesd.get("xchdspsp",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
        case "66联盟2":
            if(storage.get("llxhs1") <= storagesd.get("llxhsrw",[0])){
                toast(APP+"到达上限,跳过");
                return false;
            }
            break;
    }
    return true;
}

function 点击启动APP(AppName) {
    var apps = null;
    启动应用 = false;
    sleep(500);
    home();
    sleep(1000);
    home();
    sleep(1000);
    for (var i = 0; i < 8; i++) {
        if(AppName.indexOf("趣头条") != -1){
            apps = text(AppName).boundsInside(1, 1, wt * 0.999, hg).findOnce();
        }else{
            apps = textContains(AppName).boundsInside(1, 1, wt * 0.999, hg).findOnce();
        }
        if (apps) {
            // toastLog(apps)
            Tap(apps.bounds().centerX(), apps.bounds().top);
            toast(AppName+"启动成功");
            启动应用 = true;
            xuanfuchuang(AppName);
            break;
        } else {
            // swipe(wt * 0.8, hg * 0.2, 1, hg * 0.2, 40);
            Swipe(wt * 0.8, hg * 0.2, 1, hg * 0.2, 40);
            sleep(2000);
        }
    }
    if (!启动应用) {
        启动应用 = false;
        throw AppName+'启动失败';
    }
}

function 点击启动APP2(AppName) {
    sleep(500);
    home();
    sleep(1000);
    home();
    sleep(1000);
    for (var i = 0; i < 8; i++) {
        var apps = text(AppName).boundsInside(1, 1, wt * 0.999, hg).findOnce();
        if (apps) {
            Tap(apps.bounds().centerX(), apps.bounds().top);
            toast(AppName+"启动成功");
            xuanfuchuang(AppName);
            return true;
        } else {
            // swipe(wt * 0.8, hg * 0.2, 1, hg * 0.2, 40);
            Swipe(wt * 0.8, hg * 0.2, 1, hg * 0.2, 40);
            sleep(2000);
        }
    }
    return false;
}

function getPackageVersionName(packageName) {
    importPackage(android.content);
    var pckMan = context.getPackageManager();
    try {
        var packageInfo = pckMan.getPackageInfo(packageName, 0);
    } catch (e) {
        log(e);
        return null;
    }
    return packageInfo.versionName;
}

function 应用下载2(packageName) {
    try {
        var intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(app.parseUri("market://details?id=" + packageName[2]));
        var PACKAGE_TENCENT_MARKET = "com.xiaomi.market";
        intent.setClassName(PACKAGE_TENCENT_MARKET, "com.xiaomi.market.ui.AppDetailActivity");
        app.startActivity(intent);
        sleep(3000);
        textContains(packageName[0]).findOne(12000);
        return true;
    }catch (e){
        toast("无法跳转应用市场，请检查您是否安装并打开应用市场！");
        return false;
    }
}

function 应用下载(packageName) {
    try {
        var intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(app.parseUri("market://details?id=" + packageName));
        var PACKAGE_TENCENT_MARKET = "com.xiaomi.market";
        intent.setClassName(PACKAGE_TENCENT_MARKET, "com.xiaomi.market.ui.AppDetailActivity");
        app.startActivity(intent);
    }catch (e){
        toast("无法跳转到小米商城，请检查您是否安装并打开小米商城！");
    }
}

function 清理垃圾(){
    try {
        var 确定 = id("button1").text("确定").findOnce();
        if(确定){
            Tap(确定.bounds().centerX(), 确定.bounds().centerY());
            sleep(1000);
        }
        sleep(1500);
        home();
        sleep(1500);
        recents();
        sleep(2500);
        var ql = id("clearAnimView").findOne(4000);
        if(ql!==null){
            sleep(1500);
            pclick(ql.bounds().centerX(),ql.bounds().centerY());
        }
        sleep(2000);
        home();
        sleep(2000);
    }catch (error) {
        sleep(2000);
        home();
        sleep(2000);
    }
}

function pclick(x,y){
    try {
    if(0<=x&&x<=wt&&0<=y&&y<=hg){
        Tap(x,y);
        return true;
    }else{
        return false;
    }
    } catch (error) {
        throw error + "--------坐标点击错误X:"+x+"Y:"+y;
    }
}

function wait(Activity1, Activity2, 几秒) {
    界面 = true;
    sleep(1000);
    for (var i = 0; i < 几秒; i++) {
        if (currentActivity() == Activity1 || currentActivity() == Activity2) {
            界面 = true;
            break;
        } else {
            sleep(1000);
            界面 = false;
        }
    }
}
function APP内部更新(更新widget) {
    var 更新判断 = false;
    var 更新 = 更新widget.findOnce();
    if (更新) {
        Tap(random(更新.bounds().left, 更新.bounds().right), random(更新.bounds().top, 更新.bounds().bottom));
        sleep(8000);
        var 流量更新提醒 = text("继续更新").findOne(5000);
        if (流量更新提醒) {
            Tap(流量更新提醒.bounds().centerX(), 流量更新提醒.bounds().centerY());
            sleep(6000);
        }
        sleep(20000);
        for (var waitUpdateDownload = 0; waitUpdateDownload < 20; waitUpdateDownload++) {
            var 设置 = text("设置").findOnce();
            var 安装 = text("安装").findOnce();
            if (设置 && !更新判断) {
                Tap(random(设置.bounds().left, 设置.bounds().right), random(设置.bounds().top, 设置.bounds().bottom));
                sleep(7000);
                var 打开运行 = searchTwice(className("android.widget.CheckBox"), className("android.widget.Switch")).findOnce();
                if (打开运行) {
                    Tap(random(打开运行.bounds().left, 打开运行.bounds().right), random(打开运行.bounds().top, 打开运行.bounds().bottom));
                    sleep(2000);
                    back();
                    sleep(2000);

                    var 安装 = text("安装").findOne(5000);
                    if (安装) {
                        Tap(random(安装.bounds().left, 安装.bounds().right), random(安装.bounds().top, 安装.bounds().bottom));
                        sleep(2000);
                        for (var waitInstall = 0; waitInstall < 20; waitInstall++) {
                            var 打开 = text("打开").findOnce();
                            if (打开) {
                                Tap(random(打开.bounds().left, 打开.bounds().right), random(打开.bounds().top, 打开.bounds().bottom));
                                var 更新判断 = true;
                                sleep(30000);
                                break;
                            } else {
                                sleep(6000);
                            }
                        }
                    }
                }
            } else if (安装 && !更新判断) {
                Tap(random(安装.bounds().left, 安装.bounds().right), random(安装.bounds().top, 安装.bounds().bottom));
                sleep(2000);
                for (var waitInstall = 0; waitInstall < 20; waitInstall++) {
                    var 打开 = text("打开").findOnce();
                    if (打开) {
                        Tap(random(打开.bounds().left, 打开.bounds().right), random(打开.bounds().top, 打开.bounds().bottom));
                        var 更新判断 = true;
                        sleep(30000);
                        break;
                    } else {
                        sleep(6000);
                    }
                }
            } else if (更新判断) {
                break;
            }else {
                sleep(6000);
            }
        }
        var yx = text("允许").findOnce();
        if (yx){
            sleep(2000);
            Tap(yx.bounds().centerX(), yx.bounds().centerY());
        }
    }
};






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
        var url = "http://27.155.88.170:8765/getupdateurl2";
        // {"err":"0","msg":"ok","version":2,"url":"https://neicexia-636879301204990000.oss-cn-shanghai.aliyuncs.com/db854742c769d47cd3ad619b65b71ef1.apk"}
        
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

                var arr = files.listDir(path);
                // log(arr)
                sleep(10000)
                toast("正在保存apk文件")
                
            }
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
        <frame gravity="center" bg="#B0C4DE">
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


function xuanfuchuang(appName) {
    toast("悬浮窗显示")
    sleep(1000);
    if(isUpdateWindowShow){
        updateWindow.close();
        isUpdateWindowShow = false;
    }
    if(isRunAppWindowShow){
        runAppWindow.close();
        isRunAppWindowShow = false;
    }

    sleep(1500)
    var str = "运行中app： " + appName 
    toastLog(str)
    runAppWindow = floaty.window(
        <frame gravity="center" bg="#B0C4DE">
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


function getSDPath(){ 
    var sdDir = null; 
    var sdCardExist =android.os.Environment.getExternalStorageState().equals(android.os.Environment.MEDIA_MOUNTED);//判断sd卡是否存在
    if(sdCardExist)   
    {                               
      sdDir =android.os.Environment.getExternalStorageDirectory();//获取根目录
   }
    return sdDir.toString(); 
}


function textTap(textstr) {
    if (text(textstr).findOnce()) {
        let lstext = text(textstr).findOnce()
        if (lstext) {
            toast(textstr)
            Tap(lstext.bounds().centerX(), lstext.bounds().centerY())
            sleep(2000)
        }
    }
}

function descTap(descstr) {
    if (desc(descstr).findOnce()) {
        let lsdesc = desc(descstr).findOnce()
        if (lsdesc) {
            toast(descstr)
            Tap(lsdesc.bounds().centerX(), lsdesc.bounds().centerY())
            sleep(2000)
        }
    }
}





/**
 * 设置按键监听 当脚本执行时候按音量减 退出脚本
 */
function 监听停止(){
    // 监听脚本间广播'download'事件
    events.on('exit', function (){
        toast("退出程序");
        engines.stopAll();
    });
    events.observeKey();//启用按键监听
    events.onKeyDown("volume_down", function(event){
    	toast("关闭脚本");
        exit();
    });
}

