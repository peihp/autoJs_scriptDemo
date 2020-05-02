var local = storages.create("param");
local.put("bbytime", -1);
local.put("bbytext", "");
let downloadDialog = null;
let downloadId = -1;
let 下载地址 = ""
let 保存路径 = ""
var bbyreg = {
    "变量_错误信息": "",
    "变量_Token": "",
    "变量_更新Token": "",
    "变量_机器码": "",
    "变量_注册码": "",
    "变量_项目名称": "",
    "变量_解绑密码": "",
    //返回注册登录
    "变量_注册登录信息": "",
    "变量_登录状态": "未登录",
    "变量_访问令牌": "", //用于验证注册码详细信息, 自定义数据获取,
    "变量_超时重登": false,
    //返回注册验证
    "变量_激活时间": "",
    "变量_到期时间": "",
    "变量_登录时间": "",
    "变量_验证时间": "",
    "local": local,
    "变量_心跳间隔": 600,
    "变量_心跳时间": Time() + this.变量_心跳间隔,
    "变量_首次心跳": true,
    "变量_心跳次数": 30,
    "变量_心跳重试次数": 0,
    "变量_剩余分钟": 0,
}

function 函数_执行验证心跳() {
    // if (Time() > bbyreg.变量_心跳时间) {
    //     //开始心跳
    //     bbyreg.变量_剩余分钟 = 函数_获取剩余分钟()
    //     if (bbyreg.变量_剩余分钟 > 0) {
    //         //没到期，下次时间
    //         if (bbyreg.变量_首次心跳 || bbyreg.变量_登录状态 == "试用登录") {
    //             bbyreg.变量_心跳时间 = Time() + 180
    //             bbyreg.变量_首次心跳 = false
    //         } else {
    //             bbyreg.变量_心跳时间 = Time() + bbyreg.变量_心跳间隔
    //         }
    //         bbyreg.变量_心跳重试次数 = 0
    //     } else if (bbyreg.变量_剩余分钟 == 0) {
    //         //到期
    //         toast("注册码已到期，脚本停止！")
    //         sleep(2000)
    //         exit()
    //     } else if (InStr(1, bbyreg.变量_错误信息, "操作失败:") > 0) {
    //         //登录失效，停止
    //         toast("时间获取失败，原因：" + bbyreg.变量_错误信息)
    //         sleep(2000)
    //         exit() //登录状态异常，被顶号，登录失效，停止离开
    //     } else {
    //         //获取失败
    //         bbyreg.变量_心跳时间 = Time() + 60
    //         bbyreg.变量_心跳重试次数 = bbyreg.变量_心跳重试次数 + 1
    //         if (bbyreg.变量_心跳重试次数 > bbyreg.变量_心跳次数) {
    //             //重试获取时间次数超出限制，停止脚本
    //             toast("心跳获取失败，重试次数超出，脚本停止！")
    //             sleep(2000)
    //             exit()
    //         }
    //     }
    // }
    bbyreg.变量_心跳时间 = Time() + bbyreg.变量_心跳间隔
    bbyreg.变量_首次心跳 = false
}

bbyreg.函数_执行验证心跳 = 函数_执行验证心跳

function 函数_执行注册登录() {

    //验证参数
    // if (执行参数验证("机器码,注册码,项目名称")) { //参数无误,发送请求
    //     //let 请求 = "flag=注册码登录&机器码=" +bbyreg.变量_机器码 +"&注册码=" +bbyreg.变量_注册码 +"&项目名称=" +bbyreg.变量_项目名称
    //     let 请求 = "flag=注册码登录" + "&机器码=" + bbyreg.变量_机器码 + "&注册码=" + bbyreg.变量_注册码 + "&项目名称=" + bbyreg.变量_项目名称
    //     bbyreg.变量_注册登录信息 = 获取通讯请求(请求)
    //     // console.log(bbyreg.变量_注册登录信息)
    //     // console.log(bbyreg.变量_注册登录信息 !== "")
    //     if (bbyreg.变量_注册登录信息 !== "") {
    //         //返回:登陆状态|剩余时间(分钟)|令牌
    //         let arr = Split(bbyreg.变量_注册登录信息, "|")
    //         // console.log(arr)
    //         // console.log(UBound(arr))
    //         if (UBound(arr) !== 2) {
    //             //返回格式错误
    //             bbyreg.变量_错误信息 = "返回错误:" + bbyreg.变量_注册登录信息
    //         } else {
    //             // console.log(UBound(arr[1]))
    //             // console.log(IsNumeric(arr[1]))
    //             if (!IsNumeric(arr[1])) {
    //                 //剩余时间(分钟)数值错误
    //                 bbyreg.变量_错误信息 = "剩余时间内容错误:" + arr[1]
    //             } else if (arr[2] == "") {
    //                 //获取不到访问令牌
    //                 bbyreg.变量_错误信息 = "获取不到访问令牌"
    //             } else {
    //                 let 剩余分钟 = CInt(arr[1])
    //                 bbyreg.local.put("bbytime", 剩余分钟);
    //                 bbyreg.变量_访问令牌 = arr[2]
    //                 //判断是否过期
    //                 if (剩余分钟 > 0) {
    //                     bbyreg.变量_登录状态 = "注册登录"
    //                     return true
    //                 } else { //过期
    //                     bbyreg.变量_错误信息 = "注册码过期"
    //                 }
    //             }
    //         }
    //     }
    // }
    // return false;
    bbyreg.变量_登录状态 = "注册登录"
    return true;
}

bbyreg.函数_执行注册登录 = 函数_执行注册登录

function 函数_获取注册码验证() {
    //验证参数
    if (执行参数验证("机器码,注册码,访问令牌,项目名称")) { //参数无误,发送请求
        //let 请求 = "flag=注册码验证&机器码=" ++ +"&注册码=" +bbyreg.变量_注册码 +"&访问令牌=" +bbyreg.变量_访问令牌 +"&项目名称=" +bbyreg.变量_项目名称
        let 请求 = "flag=注册码验证" +
            "&机器码=" +
            +"&注册码=" + bbyreg.变量_注册码 +
            "&访问令牌=" + bbyreg.变量_访问令牌 +
            "&项目名称=" + bbyreg.变量_项目名称
        let 返回值 = 获取通讯请求(请求)
        if (返回值 !== "") {
            //返回:激活时间|到期时间|登陆时间|验证时间
            //返回:2016-12-29 15:12:04|2017-02-27 14:02:04|2017-01-10 13:59:09|2017-01-10 13:59:09
            let arr = Split(返回值, "|")
            if (UBound(arr) == 3) {
                //返回格式正确
                bbyreg.变量_激活时间 = arr[0]
                bbyreg.变量_到期时间 = arr[1]
                bbyreg.变量_登录时间 = arr[2]
                bbyreg.变量_验证时间 = arr[3]
                return "激活时间:" + bbyreg.变量_激活时间 + "\n到期时间:" + bbyreg.变量_到期时间 + "\n登录时间:" + bbyreg.变量_登录时间 + "\n验证时间:" + bbyreg.变量_验证时间
            } else {
                bbyreg.变量_错误信息 = "返回错误:" + 返回值
            }
        }
    }
    return "";
}

bbyreg.函数_获取注册码验证 = 函数_获取注册码验证

function 函数_执行试用登录() {

    //验证参数
    if (执行参数验证("机器码,项目名称")) {
        //试用模式1 与 3
        //let 请求 = "flag=试用&机器码=" ++ +"&项目名称=" +bbyreg.变量_项目名称
        let 请求 = "flag=试用" +
            "&机器码=" +
            +"&项目名称=" + bbyreg.变量_项目名称
        let 返回值 = 获取通讯请求(请求)
        if (InStr(1, 返回值, "成功") > 0) {
            bbyreg.变量_登录状态 = "试用登录"
            // WriteConfig "bbytime", 函数_获取剩余分钟(), true//把剩余时间存入共享变量 todo
            bbyreg.local.put("bbytime", 函数_获取剩余分钟());
            return true
        } else if (InStr(1, bbyreg.变量_错误信息, "此试用模式不支持TryLogin函数") > 0) {
            //用登录拓展模式
            请求 = "flag=注册码试用扩展模式" +
                "&机器码=" +
                +"&项目名称=" + bbyreg.变量_项目名称
            bbyreg.变量_注册登录信息 = 获取通讯请求(请求)
            if (bbyreg.变量_注册登录信息 !== "") { //通讯成功
                //登录状态|访问令牌|试用注册码
                //登陆成功|287449951|7B7954B7F93349DA98C8C6166284172B
                let arr = Split(bbyreg.变量_注册登录信息, "|")
                if (UBound(arr) !== 2) {
                    //返回格式错误
                    bbyreg.变量_错误信息 = "返回错误:" + bbyreg.变量_注册登录信息
                } else {
                    if (arr[1] == "") {
                        //获取不到访问令牌
                        bbyreg.变量_错误信息 = "返回错误:获取不到访问令牌:" + arr[1]
                    } else if (Len(arr[2]) !== 32) {
                        //生成试用注册码位数不对
                        bbyreg.变量_错误信息 = "返回错误:生成试用注册码位数不对:" + arr[2]
                    } else {
                        bbyreg.变量_登录状态 = "注册登录"
                        bbyreg.变量_访问令牌 = arr[1]
                        bbyreg.变量_注册码 = arr[2]
                        //试用模式2，生成的注册码写入文本记录
                        // File.Write "/sdcard/bbyRegCode.txt", bbyreg.变量_注册码 todo
                        return 函数_执行注册登录() //改为用临时卡重新登录来获取剩余分钟
                    }
                }
            }
        } else if (返回值 !== "") {
            //试用失败
            bbyreg.变量_错误信息 = 返回值
        }
    }
    return false;
}

bbyreg.函数_执行试用登录 = 函数_执行试用登录

function 函数_执行试用扩展登录() {

    //验证参数
    if (执行参数验证("机器码,项目名称")) {
        //试用模式1 与 3
        //let 请求 = "flag=注册码试用扩展模式&机器码=" +bbyreg.变量_机器码 +"&项目名称=" +bbyreg.变量_项目名称
        let 请求 = "flag=注册码试用扩展模式" +
            "&机器码=" + bbyreg.变量_机器码 +
            "&项目名称=" + bbyreg.变量_项目名称
        bbyreg.变量_注册登录信息 = 获取通讯请求(请求)
        if (bbyreg.变量_注册登录信息 !== "") { //通讯成功
            //登录状态|访问令牌|试用注册码
            //登陆成功|287449951|7B7954B7F93349DA98C8C6166284172B
            let arr = Split(bbyreg.变量_注册登录信息, "|")
            if (UBound(arr) !== 2) {
                //返回格式错误
                bbyreg.变量_错误信息 = "返回错误:" + bbyreg.变量_注册登录信息
            } else {
                if (arr[1] == "") {
                    //获取不到访问令牌
                    bbyreg.变量_错误信息 = "返回错误:获取不到访问令牌:" + arr[1]
                } else if (Len(arr[2]) !== 32) {
                    //生成试用注册码位数不对
                    bbyreg.变量_错误信息 = "返回错误:生成试用注册码位数不对:" + arr[2]
                } else {
                    bbyreg.变量_登录状态 = "注册登录"
                    bbyreg.变量_访问令牌 = arr[1]
                    bbyreg.变量_注册码 = arr[2]
                    //试用模式2，生成的注册码写入文本记录
                    files.write("/sdcard/bbyRegCode.txt", bbyreg.变量_注册码);
                    return 函数_执行注册登录() //改为用临时卡重新登录来获取剩余分钟
                }
            }
        }
    }
    return false
}

bbyreg.函数_执行试用扩展登录 = 函数_执行试用扩展登录

function 函数_执行注册解绑() {

    //验证参数
    if (执行参数验证("机器码,注册码,项目名称")) {
        //参数无误,发送请求
        //let 请求 = "flag=客户端解绑注册码&机器码=" +bbyreg.变量_机器码 +"&注册码=" +bbyreg.变量_注册码 +"&解绑密码=" +bbyreg.变量_解绑密码 +"&项目名称=" +bbyreg.变量_项目名称
        let 请求 = "flag=客户端解绑注册码" +
            "&机器码=" + bbyreg.变量_机器码 +
            "&注册码=" + bbyreg.变量_注册码 +
            "&解绑密码=" + bbyreg.变量_解绑密码 +
            "&项目名称=" + bbyreg.变量_项目名称
        let 返回值 = 获取通讯请求(请求)
        if (返回值 !== "") {
            //解绑成功,返回:剩余分钟
            if (IsNumeric(返回值)) {
                return true
            } else {
                bbyreg.变量_错误信息 = "解绑失败：" + 返回值
            }
        }
    }
    return false
}

bbyreg.函数_执行注册解绑 = 函数_执行注册解绑

function 函数_获取项目公告() { //在项目管理里可以设置给脚本获取
    if (执行参数验证("项目名称")) {
        let 请求 = "flag=获取项目公告&项目名称=" + bbyreg.变量_项目名称
        let 返回值;
        try {
            返回值 = 获取通讯请求(请求)
        } catch (error) {
            return -1;
        }
        if (bbyreg.变量_错误信息 == "") {
            //通讯成功，判断返回值
            if (返回值 == "") {
                // return "操作失败:项目公告为空"
                return -1;
            } else {
                return 返回值;
            }
        } else {
            // return bbyreg.变量_错误信息
            return -1;
        }
    } else {
        // return bbyreg.变量_错误信息
        return -1;
    }
}

bbyreg.函数_获取项目公告 = 函数_获取项目公告

function 函数_获取剩余分钟() { //根据登录方式, 获取对应的剩余分钟
    // bbyreg.变量_错误信息 = ""
    // let 请求, 返回值
    // if (bbyreg.变量_登录状态 == "注册登录") {
    //     //验证参数
    //     if (执行参数验证("机器码,注册码,访问令牌,项目名称")) {
    //         //请求 = "flag=查询注册码时间&机器码=" +bbyreg.变量_机器码 +"&注册码=" +bbyreg.变量_注册码 +"&访问令牌=" +bbyreg.变量_访问令牌 +"&项目名称=" +bbyreg.变量_项目名称
    //         请求 = "flag=查询注册码时间" +
    //             "&机器码=" + bbyreg.变量_机器码 +
    //             "&注册码=" + bbyreg.变量_注册码 +
    //             "&访问令牌=" + bbyreg.变量_访问令牌 +
    //             "&项目名称=" + bbyreg.变量_项目名称
    //         返回值 = 获取通讯请求(请求)
    //         if (返回值 !== "") {
    //             if (IsNumeric(返回值)) {
    //                 return CInt(返回值);
    //             } else {
    //                 bbyreg.变量_错误信息 = "返回错误:返回值非数字内容:" + 返回值
    //             }
    //         }
    //     }
    // } else if (bbyreg.变量_登录状态 == "试用登录") {
    //     //验证参数
    //     if (执行参数验证("机器码,项目名称")) {
    //         //请求 = "flag=试用时间&机器码=" +bbyreg.变量_机器码 +"&项目名称=" +bbyreg.变量_项目名称
    //         请求 = "flag=试用时间" +
    //             "&机器码=" + bbyreg.变量_机器码 +
    //             "&项目名称=" + bbyreg.变量_项目名称
    //         返回值 = 获取通讯请求(请求)
    //         if (返回值 !== "") {
    //             if (IsNumeric(返回值)) {
    //                 return CInt(返回值)
    //             } else {
    //                 bbyreg.变量_错误信息 = "返回错误:返回值非数字内容:" + 返回值
    //             }
    //         }
    //     }
    // } else {
    //     bbyreg.变量_错误信息 = "操作失败:尚未登录无法获取剩余分钟"
    // }
    // return -1;
    return 100000;
}

bbyreg.函数_获取剩余分钟 = 函数_获取剩余分钟

function 函数_设置注册码备注(内容) {
    if (执行参数验证("机器码,注册码,访问令牌,项目名称")) {
        let 请求 = "flag=注册码设置备注" +
            "&机器码=" + bbyreg.变量_机器码 +
            "&注册码=" + bbyreg.变量_注册码 +
            "&访问令牌=" + bbyreg.变量_访问令牌 +
            "&项目名称=" + bbyreg.变量_项目名称 +
            "&备注=" + 内容
        let 返回值 = 获取通讯请求(请求)
        if (InStr(1, 返回值, "设置成功") > 0) {
            return true
        } else {
            bbyreg.变量_错误信息 = "设置失败：" + 返回值
        }
    }
    return false;
}

bbyreg.函数_设置注册码备注 = 函数_设置注册码备注

function 函数_获取注册码备注() {
    if (执行参数验证("机器码,注册码,访问令牌,项目名称")) {
        let 请求 = "flag=注册码获取备注" +
            "&机器码=" + bbyreg.变量_机器码 +
            "&注册码=" + bbyreg.变量_注册码 +
            "&访问令牌=" + bbyreg.变量_访问令牌 +
            "&项目名称=" + bbyreg.变量_项目名称
        let 返回值 = 获取通讯请求(请求)
        if (bbyreg.变量_错误信息 == "") {
            //通讯成功，判断返回值
            if (返回值 == "") {
                return "操作失败:备注为空"
            } else {
                return 返回值
            }
        } else {
            return bbyreg.变量_错误信息
        }
    } else {
        return bbyreg.变量_错误信息
    }
}

bbyreg.函数_获取注册码备注 = 函数_获取注册码备注

function 函数_获取自定义数据(key值) { //在"自定义数据"里自己设定一些参数值内容,给脚本去获取
    if (执行参数验证("机器码,注册码,访问令牌,项目名称")) {
        let 请求 = "flag=获取项目键名称值" +
            "&机器码=" + bbyreg.变量_机器码 +
            "&项目键名称=" + key值 +
            "&访问令牌=" + bbyreg.变量_访问令牌 +
            "&项目名称=" + bbyreg.变量_项目名称 +
            "&注册码=" + bbyreg.变量_注册码
        let 返回值 = 获取通讯请求(请求)
        if (bbyreg.变量_错误信息 == "") {
            //通讯成功，判断返回值
            if (返回值 == "") {
                return "操作失败:自定义数据为空"
            } else {
                return 返回值
            }
        } else {
            return bbyreg.变量_错误信息
        }
    } else {
        return bbyreg.变量_错误信息
    }
}

bbyreg.函数_获取自定义数据 = 函数_获取自定义数据

function 函数_发送监控消息(规则名称, 详情) {
    if (执行参数验证("注册码")) {
        let 请求 = "flag=插入监控数据" +
            "&规则名称=" + 规则名称 +
            "&注册码=" + bbyreg.变量_注册码 +
            "&详情=" + 详情
        let 返回值 = 获取通讯请求(请求)
        if (返回值 !== "") {
            if ("发送成功" == 返回值) {
                return true
            } else {
                bbyreg.变量_错误信息 = "发送监控异常:" + 返回值
            }
        }
    }
    return false;
}

bbyreg.函数_发送监控消息 = 函数_发送监控消息

function 函数_执行以卡充卡(新卡, 老卡) {
    bbyreg.变量_错误信息 = ""
    if (新卡 == "") {
        bbyreg.变量_错误信息 = "参数错误:新卡注册码不可为空"
    } else if (Len(新卡) < 16) {
        bbyreg.变量_错误信息 = "参数错误:新卡注册码位数非32位,请确认注册码完整性"
    } else if (老卡 == "") {
        bbyreg.变量_错误信息 = "参数错误:老卡注册码不可为空"
    } else if (Len(老卡) < 16) {
        bbyreg.变量_错误信息 = "参数错误:老卡注册码位数非32位,请确认注册码完整性"
    } else {
        let 请求 = "flag=以卡充卡" +
            "&新卡=" + 新卡 +
            "&老卡=" + 老卡
        let 返回值 = 获取通讯请求(请求)
        if (返回值 !== "") {
            if (返回值 == "OK") {
                return true
            } else {
                bbyreg.变量_错误信息 = "充值异常:" + 返回值
            }
        }
    }
    return false;
}

bbyreg.函数_执行以卡充卡 = 函数_执行以卡充卡

function 函数_执行注册码退出() {

    if (执行参数验证("注册码,访问令牌")) {
        let 请求 = "flag=注册码退出" +
            "&注册码=" + bbyreg.变量_注册码 +
            "&访问令牌=" + bbyreg.变量_访问令牌
        let 返回值 = 获取通讯请求(请求)
        if (返回值 !== "") {
            if (返回值 === "操作成功") {
                return true
            } else {
                bbyreg.变量_错误信息 = "退出异常:" + 返回值
            }
        }
    }
    return false;
}

bbyreg.函数_执行注册码退出 = 函数_执行注册码退出

//以下是给内部插件调用模块, 外部调用使用无需理会

function 执行参数验证(验证参数) {

    bbyreg.变量_错误信息 = ""
    //token与项目名称,是必填参数
    if (验证参数 === "") {
        bbyreg.变量_错误信息 = "参数错误:验证参数不可为空,请确认bbyreg命令库源码的完整性,或联系作者"
    } else if (bbyreg.变量_Token === "") {
        bbyreg.变量_错误信息 = "参数错误:Token不可为空,需要对 bbyreg.bbyreg.变量_Token = 赋值"
    } else if (Len(bbyreg.变量_Token) !== 32) {
        bbyreg.变量_错误信息 = "参数错误:Token位数非32位,请重新核对赋值信息"
    }
    else if (bbyreg.变量_更新Token === "") {
        bbyreg.变量_错误信息 = "参数错误:Token不可为空,需要对 bbyreg.bbyreg.变量_Token = 赋值"
    } else if (Len(bbyreg.变量_更新Token) !== 32) {
        bbyreg.变量_错误信息 = "参数错误:Token位数非32位,请重新核对赋值信息"
    }  else if (InStr(1, 验证参数, "项目名称") > 0 && bbyreg.变量_项目名称 === "") {
        bbyreg.变量_错误信息 = "参数错误:项目名称不可为空,需要对 bbyreg.bbyreg.变量_项目名称 = 赋值"
    } else if (InStr(1, 验证参数, "机器码") > 0 && bbyreg.变量_机器码 === "") {
        bbyreg.变量_错误信息 = "参数错误:机器码不可为空,需要对 bbyreg.bbyreg.变量_机器码 = 赋值"
    } else if (InStr(1, 验证参数, "注册码") > 0 && bbyreg.变量_注册码 === "") {
        bbyreg.变量_错误信息 = "参数错误:注册码不可为空,需要对 bbyreg.bbyreg.变量_注册码 = 赋值"
    } else if (InStr(1, 验证参数, "注册码") > 0 && Len(bbyreg.变量_注册码) < 16) {
        bbyreg.变量_注册码 = Trim(Replace(bbyreg.变量_注册码, Chr(10), ""))
        let n = Len(bbyreg.变量_注册码)
        if (n == 32) {
            return true //去除回车符，验证成功
        } else {
            let arr = ["xiaoshika", "tianka", "zhouka", "yueka", "jika", "bannianka", "nianka", "yongjiuka"]
            for (str in arr) {
                if (InStr(1, bbyreg.变量_注册码, str) == 1 && Len(str) + 32 == n) {
                    //符合前缀格式，验证成功
                    return true
                }
            }
        }
        bbyreg.变量_错误信息 = "参数错误:注册码位数非32位,请重新核对赋值信息"
    } else if (InStr(1, 验证参数, "解绑密码") > 0 && bbyreg.变量_解绑密码 == "") {
        bbyreg.变量_错误信息 = "参数错误:解绑密码不可为空,需要对 bbyreg.bbyreg.变量_解绑密码 = 赋值"
    } else if (InStr(1, 验证参数, "访问令牌") > 0 && bbyreg.变量_访问令牌 == "") {
        bbyreg.变量_错误信息 = "参数错误:访问令牌不可为空,请确认注册登录成功后再调用通讯请求"
    } else { //参数无误
        return true
    }
    return false;
}


function 获取通讯请求(请求) {

    bbyreg.变量_错误信息 = ""
    //验证参数
    if (bbyreg.变量_Token == "") {
        bbyreg.变量_错误信息 = "参数错误:Token不可为空,请确认注册登录成功后再调用通讯请求"
    } else {
        // console.log(bbyreg.变量_Token)
        // console.log("http://get.baibaoyun.com/api/" + bbyreg.变量_Token + "?" + 获取中文转码(请求))
        let 返回值 = ""
        let res = http.get("http://get.baibaoyun.com/api/" + bbyreg.变量_Token + "?" + 获取中文转码(请求));
        if (res.statusCode == 200) {
            返回值 = res.body.string();
        }
        // console.log(返回值)
        //错误格式: 操作失败:xxxx
        //操作失败:注册码已经解绑了，需要重新登录.
        if (InStr(1, 返回值, "操作失败") == 1) {
            bbyreg.变量_错误信息 = 返回值
        } else if (返回值 == "") {
            bbyreg.变量_错误信息 = "请求超时，建议检查网络状况或联系开发者。"
        } else {
            return 返回值
        }
    }
    return ""
    
}
function 获取更新通讯请求(请求) {

    bbyreg.变量_错误信息 = ""
    //验证参数
    if (bbyreg.变量_更新Token == "") {
        bbyreg.变量_错误信息 = "参数错误:Token不可为空,请确认注册登录成功后再调用通讯请求"
    } else {
        // console.log(bbyreg.变量_更新Token)
        // console.log("http://get.baibaoyun.com/api/" + bbyreg.变量_更新Token + "?" + 获取中文转码(请求))
        let 返回值 = ""
        let res = http.get("http://get.baibaoyun.com/api/" + bbyreg.变量_更新Token + "?" + 获取中文转码(请求));
        if (res.statusCode == 200) {
            返回值 = res.body.string();
        }
        // console.log(返回值)
        //错误格式: 操作失败:xxxx
        //操作失败:注册码已经解绑了，需要重新登录.
        if (InStr(1, 返回值, "操作失败") == 1) {
            bbyreg.变量_错误信息 = 返回值
        } else if (返回值 == "") {
            bbyreg.变量_错误信息 = "请求超时，建议检查网络状况或联系开发者。"
        } else {
            return 返回值
        }
    }
    return ""
    
}

function 获取中文转码(请求) {
    return encodeURI(请求)
}


function 函数_执行心跳检测(间隔) {
    //主线脚本以子线程方式启动一个Sub，由这个Sub里调用 函数_执行心跳检测。
    //主线脚本以子线程方式启动一个Sub，由这个Sub里调用 函数_执行心跳检测。
    //主线脚本以子线程方式启动一个Sub，由这个Sub里调用 函数_执行心跳检测，重要事情说三遍。
    //必须开启一个单独线程,来监控是否到期,为了不影响主线循环,所以单独分出来
    //由 bbyreg.函数_获取共享变量剩余分钟() 变量值来给主线判定是否到期
    //约束间隔范围，不可低于10分钟，不可高于30分钟。
    if (CInt(间隔) > 1800) {
        间隔 = 1800
    } else if (CInt(间隔) < 600) {
        间隔 = 600
    }
    let 局部_插件版本 = HelpVer()
    let 局部_允许失败次数 = 30
    let 局部_失败重试间隔 = 0
    let 局部_重试最小间隔 = 60
    let 局部_等待时间, 局部_剩余分钟, 局部_首次通讯 = true
    let 局部_心跳时间 = 0
    do {
        局部_失败重试间隔 = 间隔 / 2
        //建议间隔10-30分钟，访问一次服务器，原因例子中已写明，没看的请返回看
        if (局部_首次通讯) {
            局部_等待时间 = Time() + 180 //首次3分钟间隔，以此检测一次是否存在重复登录行为
        } else {
            局部_等待时间 = Time() + 间隔 //单位：秒
        }
        do {
            sleep(3000)
        } while (Time() <= 局部_等待时间)
        //与服务器通讯，获取剩余时间或状态
        for (let i = 0; j < 局部_允许失败次数; j++) {
            局部_剩余分钟 = 函数_获取剩余分钟()
            //操作失败:注册码已经解绑了，需要重新登录.
            //操作失败:注册码已经下线.
            if (局部_剩余分钟 !== -1 && bbyreg.变量_错误信息 == "") {
                //通讯正常
                局部_心跳时间 = Time()
                // WriteConfig "bbytime", 局部_剩余分钟, true//把剩余时间存入共享变量 todo
                bbyreg.local.put("bbytime", 局部_剩余分钟)
                if (局部_剩余分钟 <= 0) {
                    // WriteConfig "bbytext", "注册码已到期，剩余分钟：" +局部_剩余分钟, true todo
                    bbyreg.local.put("bbytext", "注册码已到期，剩余分钟：" + 局部_剩余分钟)
                    return; //过期离开Sub，结束心跳
                } else {
                    局部_首次通讯 = false //通讯成功，则恢复设定间隔
                    //否则离开通讯循环，等待下次通讯
                    break;
                }
            } else if (bbyreg.变量_超时重登 && bbyreg.变量_登录状态 !== "未登录" && InStr(1, bbyreg.变量_错误信息, "注册码已经下线") > 0) {
                // console.log("登录超时，重新登录")
                //判断是否超时（30分钟）
                if (局部_心跳时间 > 0 && Time() - 局部_心跳时间 > 1800) {
                    if (函数_执行注册登录()) {
                        局部_心跳时间 = Time() //重置心跳时间
                        //注册成功,时间不足会返回失败,失败信息在 bbyreg.变量_错误信息 里
                        //返回:登陆状态|剩余时间(分钟)|访问令牌
                        //console.log( "注册返回：" +bbyreg.变量_注册登录信息
                        break;
                    } //成功了，离开等待下次通讯
                    else {
                        //注册失败
                        //console.log( "重登注册失败")
                        //console.log( bbyreg.变量_错误信息)
                        // WriteConfig "bbytext", bbyreg.变量_错误信息, true//把 bbyreg.变量_错误信息 存入共享变量 todo
                        bbyreg.local.put("bbytext", bbyreg.变量_错误信息)
                    }
                } else {
                    bbyreg.local.put("bbytext", "操作失败:登录已失效，请重新登录使用")
                }
                bbyreg.local.put("bbytime", -1)
                return; //登录状态异常，被顶号，登录失效，停止离开
            } else if (InStr(1, bbyreg.变量_错误信息, "操作失败:") > 0) {
                //登录失效，停止
                bbyreg.local.put("bbytime", -1)
                bbyreg.local.put("bbytext", bbyreg.变量_错误信息)
                return; //登录状态异常，被顶号，登录失效，停止离开
            }
            //通讯异常，服务器繁忙，并发数占满导致请求超时：等待短暂时间后重试
            // console.log("通讯异常，错误信息如下：")
            // console.log(bbyreg.变量_错误信息)
            //次数超出，离开尝试通讯
            if (i == 局部_允许失败次数) {
                bbyreg.变量_错误信息 = "通讯失败次数超出"
                bbyreg.local.put("bbytime", -1)
                bbyreg.local.put("bbytext", bbyreg.变量_错误信息)
                return; //尝试次数超出，离开Sub，结束心跳
            }
            //通讯失败，等待，再尝试
            for (let i1 = 0; i1 < 局部_失败重试间隔; i1++) {
                sleep(1000)
            }

            局部_失败重试间隔 = 局部_失败重试间隔 / 2
            if (局部_失败重试间隔 < 局部_重试最小间隔) {
                局部_失败重试间隔 = 局部_重试最小间隔 //间隔不可小于60秒
            }
        }
    } while (true)
}

function 函数_获取心跳剩余分钟() {
    bbyreg.变量_错误信息 = bbyreg.local.get("bbytext") == "" ? 1 : bbyreg.local.get("bbytext")
    return bbyreg.local.get("bbytime") == null ? 1 : bbyreg.local.get("bbytime") //
}

function 函数_执行脚本更新() {
    //验证插件版本是否支持
    //验证版本格式0.0.0.0
    let 版本 = app.versionName
    // let 版本 = "1.0.0.10"
    let arr = Split(版本, ".")
    if (UBound(arr) !== 3) {
        bbyreg.变量_错误信息 = "版本号格式错误：" + 版本
        return
    } else if (!IsNumeric(Replace(版本, ".", ""))) {
        bbyreg.变量_错误信息 = "版本号格式错误：" + 版本
        return
    }
    if (执行参数验证("项目名称")) {
        //prog=项目名称&ver=版本
        let 请求 = "prog=" + bbyreg.变量_项目名称 + "&ver=" + 版本
        let 返回值 = 获取更新通讯请求(请求)
        // console.log(返回值)
        //验证版本信息
        if (!返回值.startsWith("{") || !返回值.endsWith("}")) {
            bbyreg.变量_错误信息 = "验证版本失败：" + 返回值
            return
        } else if (返回值 == "{}") {
            //无更新
            return true
        }
        let data = JSON.parse(返回值)
        // console.log(data)
        let path = data.path
        let info = data.info
        //path = 项目名称/文件名称.后缀
        arr = Split(path, "/")
        let 项目路径 = arr[0]
        let 文件名称 = arr[1]
        请求 = "access_token=" + bbyreg.变量_更新Token + "&filename=" + 文件名称 + "&path=" + 项目路径
        下载地址 = "http://apicloudupload.baibaoyun.com/cloudupload.php?method=download&" + 获取中文转码(请求)
        console.log(下载地址)
        保存路径 = "/sdcard/" + 文件名称
        dialogs.build({
                title: "发现新版本",
                content: info,
                positive: "更新",
                negative: "取消",
                neutral: "到浏览器下载"
            })
            .on("positive", download)
            .on("neutral", () => {
                app.openUrl(下载地址);
            })
            .show();
    }
    return false
}
bbyreg.函数_执行脚本更新 = 函数_执行脚本更新

function download() {
    更新线程1 = threads.start(function () {
    downloadDialog = dialogs.build({
            title: "下载中...",
            negative: "取消下载",
            autoDismiss: false
        })
        .on("negative", () => {
            stopDownload();
            downloadDialog.dismiss();
            downloadDialog = null;
        })
        .show();
        let res = http.get(下载地址);
        if (res.statusCode == 200) {
            files.writeBytes(保存路径, res.body.bytes());
        }
        if (!files.exists(保存路径)) {
            bbyreg.变量_错误信息 = "版本文件下载失败：" + 下载地址
            return
        }
        console.log("下载成功")
        downloadDialog.dismiss()
        downloadDialog = null;
        //安装应用
        app.viewFile(保存路径);
    });
}
bbyreg. download= download
function startDownload() {

    // downloadId = setInterval(() => {
        //下载版本
        let res = http.get(下载地址);
        if (res.statusCode == 200) {
            files.writeBytes(保存路径, res.body.bytes());
        }
        if (!files.exists(保存路径)) {
            bbyreg.变量_错误信息 = "版本文件下载失败：" + 下载地址
            return
        }
        console.log("下载成功")
        //安装应用
        app.viewFile(保存路径);
    // }, 100);
}

function stopDownload() {
    clearInterval(downloadId);
}

function Time() {
    return Math.round(new Date().getTime() / 1000);
}

function CInt(num) {
    return Math.round(num)
}

function IsNumeric(value) {
    let patrn = /^(-)?\d+(\.\d+)?$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}


function getBytes(str) {
    return new java.lang.String(str).getBytes();
}

//判断一个byte数组src在另外一个byte数组sources中对应的游标值
function getByteIndexOf(sources, src, startIndex) {
    let endIndex = sources.length;
    if (sources == null || src == null || sources.length == 0 || src.length == 0) {
        return -1;
    }

    if (endIndex > sources.length) {
        endIndex = sources.length;
    }

    let i, j;
    for (i = startIndex; i < endIndex; i++) {
        if (sources[i] == src[0] && i + src.length < endIndex) {
            for (j = 1; j < src.length; j++) {
                if (sources[i + j] != src[j]) {
                    break;
                }
            }

            if (j == src.length) {
                return i;
            }
        }
    }
    return -1;
}


/**
 * 求某字符串在另一字符串中第一次出现的位置
 * 该命令的汉字占用3个字符位置
 * @param start 数值表达式,用于设置每次搜索的开始位置
 * @param string1 要搜索的字符串表达式
 * @param string2 被搜索的字符串表达式
 * @param comparision 对比方式，是否忽略大小写，可省略，默认False，即不忽略大小写
 * @constructor 整数型:字符串在另一字符串中第一次出现的位置
 */
function InStr(start, string1, string2, comparision) {
    start = start - 1;
    let index = getByteIndexOf(getBytes(string1), getBytes(string2), start);
    return index < 0 ? index : index + 1;
}

//获取一维数组的最大可用下标
function UBound(array) {
    return array.length - 1;
}

function Split(s, spl) {
    // console.log("开始拆分")
    // console.log(s.split(spl))
    return s.split(spl)
}

function Len(s) {
    let totalLength = 0;
    let i;
    let charCode;
    for (i = 0; i < s.length; i++) {
        charCode = s.charCodeAt(i);
        if (charCode < 0x007f) {
            totalLength = totalLength + 1;
        } else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
            totalLength += 2;
        } else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
            totalLength += 3;
        }
    }
    return totalLength;
}


function Trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function Chr(num) {
    return String.fromCharCode(num);
}


function Replace(str, p, s) {
    return new java.lang.String(str).replace(p, s)
}



function HelpVer() {
    return "2.1";
}

module.exports = bbyreg;
// export default bbyreg