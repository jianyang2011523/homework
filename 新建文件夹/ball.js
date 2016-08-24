/**
 * Created by Administrator on 2016/8/24 0024.
 */
(function () {

    function Ball() {
        this._htmlNode=document.createElement("div");
        this._htmlNode.className="ball";
        // this._htmlNode.style.border="solid";
        // this._htmlNode.style.width="30px";
        // this._htmlNode.style.height="30px";
        // this._htmlNode.style.borderRadius="50%";
        // this._htmlNode.style.backgroundColor="#cccccc";

        // var x=0,y=0;
        this._x=Math.random()*400;
        this._y=Math.random()*300;
        this._speedX=Math.random()*10-5;
        this._speedY=Math.random()*10-5;
        this._r=15;


    }
    Ball.prototype.move=function () {
        this._x+=this._speedX;
        this._y+=this._speedY;

        if(this._x<-this._r*2||
            this.y<-this._r*2||
                this._x>window.innerWidth||
                this._y>window.innerHeight
           ){
            Ball.removeBall(this);
        }
        this.refreshPosition();  
    };
    Ball.prototype.getHtmlNode=function () {
        return this._htmlNode;
    };
    Object

    Ball.prototype.refreshPosition=function () {
        this._htmlNode.style.left=this._x+"px";
        this._htmlNode.style.top=this._y+"px";
    };

    Ball.__balls=[];
    Ball.createBall=function () {
      var b=new Ball();
        document.body.appendChild(b.getHtmlNode());
        Ball.__balls.push(b);
        return b;
    };
    Ball.removeBall=function (ball) {
       // ball.getHtmlNode().parentNode.removeChild(ball.getHtmlNode());
       ball.getHtmlNode(this);

        var index=Ball.__balls.indexOf(ball);
        if(index!=-1){
             Ball.__balls.splice(index,1);
            return Ball.prototype.move();
        }

    };
    Ball.moveBalls=function () {
        for(var i=0;i<Ball.__balls.length;i++){
            Ball.__balls[i].move();

        }
    };

    window.Ball=Ball;
})();