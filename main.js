window.onload = function () {


    var dp1 = "";//显示
    var dp2 = "";
    var dparea1 = document.getElementsByClassName("dpr1")[0]
    var dparea2 = document.getElementsByClassName("dpr2")[0]
    var dengyuKey = document.getElementsByClassName("dengyu")[0]
    var clearKey = document.getElementsByClassName("clear")[0]

    function calculating(fuhao, num1, num2) {
        //还可以封装成计算机对象；

        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2)
        var m;
        // if (isNaN(num1)||isNaN(num2)) {
        //     alert("请输入数字")
        // }//这个案例不用判断
        if (fuhao == "+") {
            m = n1 + n2;
        } else if (fuhao == "-") {
            m = n1 - n2;
        } else if (fuhao == "X") {
            m = n1 * n2;
        } else if (fuhao == "/") {
            m = n1 / n2;
        }//这里可以用switch；
        console.log("dayin+m:")
        return m;
    }

    //从字符串中判断运算符号;

    //更新DP中的字符串；
    var temdp1 = "";//第一次暂存数字
    var temdp2 = "";
    var temdp3 = "";
    var jieguo;
    var temfuhao = ""//记录符号
    function reloaddp1(text) {//更新输入界面的显示
        temdp1 = temdp1.concat("", text);
        console.log(temdp1)
        dparea1.innerHTML = temdp1;
        console.log(dparea1)

    }
    function clear() {
        dparea2.innerHTML = "0";
        dparea1.innerHTML = ""
        temdp1 = "";//第一次暂存数字
        temdp2 = "";
        temdp3 = ""
    }
    //清除按钮的事件
    clearKey.addEventListener("click", clear)

    //输入按钮的事件
    var keyeles = document.getElementsByClassName("inputKey")//每个按键增加一个输入功能
    console.log(keyeles);
    console.log(keyeles.length);
    for (var i = 0; i < keyeles.length; i++) {
        keyeles[i].addEventListener("click", function (e) {
            var tt = e.target.innerHTML
            reloaddp1(tt);
            // console.log("indexof::::" + e.target.className.indexOf("yunsuanfu"))
            if (e.target.className.indexOf("yunsuanfu") > -1) {//判断是不是运算符e.target.className.indexOf("yunsuanfu")查找到了返回第一次找到的位置0
                if (dparea2.innerHTML == "") {//通过判断dpare2区域是否有计算结果，来判断是不是未按等号的连续计算，
                    temdp2 = temdp1.slice(0, temdp1.length - 1);
                    console.log("temdp2:" + temdp2)
                    temfuhao = e.target.innerHTML;
                    console.log("获取运算符：" + temfuhao)
                } else {

                }

            }
        });

    }

    //封装一个跟等于符号功能一样的函数；
    function dengyuK() {
        temdp3 = temdp1.slice(temdp2.length + 1, temdp1.length);//从已经输入的字符串中截取第二次输入的数字，slice（）第二个参数要超过最大下标才能截取最后一个字符；
        console.log("temdp3:" + temdp3)//
        console.log(Number.parseFloat(temdp2), Number.parseFloat(temdp3))
        var aa = calculating(temfuhao, Number.parseFloat(temdp2), Number.parseFloat(temdp3))//按等于号计算
        console.log(aa)
        temdp1 = temdp2 = aa;
        dparea2.innerHTML = temdp1;
    }
    //等于按钮的事件
    dengyuKey.addEventListener("click", dengyuK)

    var yunsuanfu = document.getElementsByClassName("yunsuanfu");

}
