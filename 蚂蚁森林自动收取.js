auto();
setScreenMetrics(1080, 1920);

toast("开始自动收取");
for (var i = 0; i < 150; i++) {
    if (text("返回我的森林").exists()) {
        toast("结束自动收取");
        click("返回我的森林");
        break;
    }
    if (text("返回森林首页").exists()) {
        toast("结束自动收取");
        click("返回森林首页");
        break;
    }

    if (textStartsWith("你收取TA").exists()) {
        click(439 + random() * 200, 1360 + random() * 70); // 一键收1
        sleep(500 + random(-50, 50));
        click(439 + random() * 200, 1360 + random() * 70); // 一键收2
        sleep(450 + random(-50, 50));
        click(439 + random() * 200, 1360 + random() * 70); // 一键收3
        sleep(80 + random(-50, 50));
        click(858 + random() * 200, 1543 + random() * 80); // 找能量
    } else {
        sleep(400 + random(-30, 30));
        i--;
    }
}

