// // alert ('snailbait');
// // canvas 添加背景图片
// //  一 获得canvas 引用
//  var canvas = document.getElementById('game-canvas');
// //  绘图上下文环境  绘制API都由context提供
//  context =canvas.getContext('2d');
// //  获取一张图片
//  var background = new Image();
//  var runner = new Image ();
//  runner.src = './images/runner.png';
//  background.src = './images/background.png';
// //  图片加载自本地或远程 ，时间的onload事件 ，在图片加载完成是触发
//  background.onload = function () {
//     context.drawImage(background, 0, 0);
//     context.drawImage(runner,50,300);
//  }

// // 二 drawImage
// // 三 图片在images文件夹下
    function getDirection(e){
        var keyCode = e.keyCode;
            // console.log(keyCode);
            var direction; //undefined null
            switch(keyCode){
                case 37 :
                    direction = 'left';
                break;
                case 38:
                    direction = 'up';
                break;
                case 39:
                    direction = 'right';
                break;
                case 40:
                    direction = 'dowm';
                break;
            }
            return direction;
    }
window, onload = function () {
    var canvas =
        document.getElementById('game-canvas'),
        context = canvas.getContext('2d'),
        background = new Image(),//整张背景
        runnerImage = new Image();//sprite
    function startGame() {
        draw();
    }
    function draw() {
        drawBackground();//独立的功能模块
        drawRunner();
    }
    function drawBackground() {
        context.drawImage(background, 0, 0);
    }
    function drawRunner() {
        context.drawImage(runnerImage, player.imageX,
            player.imageY, player.width,
            player.height, player.x,
            player.y,
            player.width, player.height);
    }
    function initializeImages() {
        runnerImage.src = './images/spritesheet.png';
        background.src = './images/background.png';
        background.onload = function () {
            startGame();
        }
    }
    initializeImages();
    var player = {
        // 大小
        width: 40,
        height: 50,
        // 坐标
        x: 50,
        y: 290,
        // 剪裁图片开始的位置
        imageX: 10,
        imageY: 385,
        stop: true
    }

    function playerMove(direction) {
        clean();
        // if (player.stop) {
        //     player.imageX = 10;
        // } else {
        //     player.imageX +=40;
        // }
        // if (player.imageX >= 360) {
        //     player.imageX = 10;
        // }
        // if (direction === 'right') {
        //     player.x += 10;
        //     player.imageY = 385;
        // }else if (direction === 'left') {
        //     player.x -= 10; 
        //     player.imageY = 310;
        // }
        if (direction = 'right') {
            player.x += 10;
            player.imageY = 385;
            
        } else {
            
        }
        // setTimeout(function(){
        drawBackground();
        drawRunner();
        // },2000
        
    }
    //有问题
  
  function clean(){
            
            context.clearRect(player.x,player.y,player.width,player.height)
        }
        function playAction (direction) {
            var posX = 0;
            if (direction==='right') {
                posX =player.x + player.width;
                playerMove(direction) 
            }else if (direction==='left') {
                playerMove(direction)
            }
            // else if (direction==='up') {
            //     playerMove(direction)
            // }else if (direction==='down') {
            //     playerMove(direction)
            // }
        }
         document.addEventListener('keydown',function (e) {
            var direction = getDirection(e);
            player.stop=false;
            playAction(direction);
                console.log(direction);       
        })
        document.addEventListener('keyup',function(e){
            var direction =getDirection(e);
            player.stop =true;
            playAction(direction);
        }) 

}