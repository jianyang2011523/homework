/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function () {
    var ball=document.getElementsByClassName("ball");
   
    
    for(var i=0;i<100;i++) {
        Ball.createBall();
    }
    setInterval(function () {

        Ball.moveBalls();
    },20);
})();
