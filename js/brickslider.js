function brickslider() {
    var max_x = 0;
    var max_y = 0;
    var x = 1;
    var y = 0;
    var benefit;
    var max_benefit_percent = benefit;
    for (var x = 100; x < 10000; x++) {
        rst = way01(x);
        y = rst.output;
        benefit = y - x;
        benefit_percent = benefit / x;
        if (benefit_percent > max_benefit_percent || !max_benefit_percent) {
            max_y = y;
            max_x = x;
            max_benefit = benefit;
            max_benefit_percent = benefit_percent;
            /*
            console.log('x: ' + x);
            console.log('y: ' + y);
            console.log('benefit: ' + benefit);
            console.log('benefit_percent: ' + benefit_percent);
            */
        }
    }
    console.log('max_x: ' + max_x);
    console.log('max_y: ' + max_y);
    console.log('max_benefit: ' + max_benefit);
    console.log('max_benefit_percent: ' + max_benefit_percent);
    best_rst = rst = way01(max_x);
    setTable(best_rst);
    return max_x;
}
