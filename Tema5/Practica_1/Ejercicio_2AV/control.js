var game={
    padre: '',
    carta: 0,
    gameWidth: 600,
    gameHeight: 600,
    arrayDato: [],
    arrayCarta: [],
    numTurn:0,
    numCarta:10,
    inic: function(opcion){
        this.datoInic(opcion);
        this.render();
        this.handle();
    },
    datoInic: function(opcion){
        this.opcion = opcion;
        this.padre = opcion.padre;
        this.carta = this.numCarta;
        this.getArrayDato();
    },
    
    getArrayDato: function(){
        var arrayRandom = this.arrayRandom();
        var imagenes = this.carta /2;
        var arrayDato = [];

        for(i=0; i<imagenes; i++){
            var num = arrayRandom[i];
                var url = {
                    url: './IMG/cara'+num+'.jpg',
                    id:'cara'+num
                }
            arrayDato.push(url,url);
        }
        this.arrayDato=this.shuffle(arrayDato);
    },

    arrayRandom: function(){

        var numCarta = this.numCarta;
        var array=[];
        for(i=0; i<numCarta; i++){
            array.push(i+1);
        }
        return this.shuffle(array);
    },

    shuffle: function(array){
        return array.sort(function(){
            return 0.5 - Math.random();
        })
    },
    render: function(){
        var carta=this.carta;
        var gameWidth=this.gameWidth;
        var gameHeight=this.gameHeight;
        var cartaWidth = gameWidth / (this.numCarta*2);
        var cartaHeight = gameHeight / (this.numCarta*2);
        var arrayDato = this.arrayDato;

        for(i=0; i<carta; i++){
            var info = arrayDato[i];
            var oBlock = document.createElement('div');
            var oPic = document.createElement('div');
            oPic.style.backgroundImage ='url('+info.url+')';
            oBlock.style.width = cartaWidth+'px';
            oBlock.style.height = cartaHeight+'px';
            oBlock.picid = info.id;
            oPic.setAttribute('class','pic');
            oBlock.setAttribute('class','block');
            oBlock.appendChild(oPic);
            this.padre.appendChild(oBlock);
        }
    },
    handle: function(){
        var self = this;
        this.padre.onclick = function(p){
            var dom = p.target;
            var isBlock = dom.classList.contains('block');
            if(isBlock){
                self.handleBlock(dom);
            }
        }
    },

    handleBlock: function(dom){
        var picId=dom.picid;
        var arrayCarta=this.arrayCarta;
        var cartaLength = arrayCarta.push({
            id:picId,
            dom: dom
        });
        dom.classList.add('on');

        if(cartaLength === 2) { this.judgePick();}
        this.judgeWin();
    },

    judgePick: function(){
        var arrayCarta = this.arrayCarta;
        var isSamePick = arrayCarta[0].id === arrayCarta[1].id;
        if(isSamePick){
            this.numTurn +=2;
        }else{
            var picDom1 = arrayCarta[0].dom;
            var picDom2 = arrayCarta[1].dom;
            setTimeout(function(){
                picDom1.classList.remove('on');
                picDom2.classList.remove('on');
            },1000)
        }
        arrayCarta.length = 0;
    },

    judgeWin: function(){
        if(this.numTurn === this.carta){
            setTimeout(function(){
                alert('Victoria');
            },800)
        }
    }
}

game.inic({
    padre: document.getElementById('cartas')
})