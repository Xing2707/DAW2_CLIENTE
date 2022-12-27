var game = {
    el: '',
    blocks:10, 
    gameWidth: 600, 
    gameHeight: 600, 
    dataArr: [],
    judgeArr: [],
    turnNum: 0,
    picNum: 10, 

    init: function (options) {
        this.initData(options);
        this.render();
        this.handle();
    },

    initData: function (options) {
        this.options = options;
        this.el = options.el;
        this.blocks;
        this.getdataArr();
    },

    getdataArr: function () {
        var randomArr = this.randomArr(); 
        var halfBlocks = this.blocks / 2;
        var dataArr = [];
    
        for(var i = 0; i < halfBlocks; i ++) {
            var num = randomArr[i];
                var info = {
                    url: './IMG/cara' + num + '.jpg',
                    id: num
                }
                dataArr.push(info, info);
        }
        //  console.log(dataArr);
        this.dataArr = this.shuffle(dataArr);
    },

    randomArr: function () {
        var picNum = this.picNum/2;
        var arr = [];
        for(i = 0; i < picNum; i ++) {
        arr.push(i+1);
        }
        //console.log(arr);
        return this.shuffle(arr);
    },

    shuffle: function (arr) {
        return arr.sort(function () {
            return 0.5 - Math.random();
        })
    },

    render: function () {
        var blocks = this.blocks;
        var gameWidth = this.gameWidth;
        var gameHeight = this.gameHeight;
        var blockWidth = gameWidth/2;
        var blockHeight = gameHeight/2;
        var dataArr = this.dataArr;
    
        for(i = 0; i < blocks; i ++) {
            var info = dataArr[i];
            var oBlock = document.createElement('div');
            var oPic = document.createElement('div');
            oPic.style.backgroundImage = 'url(' + info.url + ')';
            oBlock.style.width = blockWidth + 'px';
            oBlock.style.height = blockHeight + 'px';
            oBlock.picid = info.id;
            oPic.setAttribute('class', 'pic');
            oBlock.setAttribute('class', 'block');
            oBlock.appendChild(oPic);
            this.el.appendChild(oBlock);
        }
    },
     
    handle: function () {
        var self = this;
        this.el.onclick = function (e) {
            var dom = e.target;
            var isBlock = dom.classList.contains('block');
            if(isBlock) {
                self.handleBlock(dom);
            }
        }
    },

    handleBlock: function (dom) {
        var picId = dom.picid;
        var judgeArr = this.judgeArr;
        var judgeLength = judgeArr.push({
            id: picId,
            dom: dom
        });
        dom.classList.add('on');
        
        if(judgeLength === 2) { this.judgePic();}
       
        this.judgeWin();
    },

    judgePic: function () {
    var judgeArr = this.judgeArr; 
        var isSamePic = judgeArr[0].id === judgeArr[1].id;
        
        if(isSamePic) {
            this.turnNum += 2;
        } else {
            var picDom1 = judgeArr[0].dom;
            var picDom2 = judgeArr[1].dom;
            setTimeout(function () {
            picDom1.classList.remove('on');
            picDom2.classList.remove('on');
        }, 800)}
        judgeArr.length = 0;
        setTimeout(function(){
            var cartas=document.getElementById("cartas");
            cartas.setAttribute('class','noclick');
         },600);
         setTimeout(function(){
            var cartas=document.getElementById("cartas");
            cartas.removeAttribute("class");
         },1100);
    },
    judgeWin: function () {
    
    if(this.turnNum === this.blocks) {
        setTimeout(function () {
            alert("VICTORIA");
        }, 300)}
    }
}
    
game.init({
el: document.getElementById('cartas')});
