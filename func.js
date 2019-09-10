const SVGStart = function () {


    addPoint = (point) => {
        this.pointVec = this.pointVec.concat(point);
    }

    onMouseUp = (e) => {
        this.draw = false;
        this.pointVec = [];
    }

    onMouseDown = (e) => {
        this.draw = true;
    }


    onMouseMove = (e) => {
        if (this.draw === true) {

            let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttributeNS(null, 'stroke', this.style.value);
            path.setAttributeNS(null, 'fill',  'transparent');
            path.setAttributeNS(null, 'stroke-width', this.width.value );

            this.path = path;
            addPoint([e.clientX, e.clientY]);
            path.setAttributeNS(null, 'd', `M ${this.pointVec.toString()}`);
            this.svg.appendChild(path);
        }
    }

    function onChangeColor(e) {
        this.styleValue = e.value;
    }

    function onChangeWidth(e) {
        this.widthValue = e.value;
    }

    function pushData(value) {
        data.style = value.style;
        data.x = value.x;
        data.y = value.y;
        data.width = value.width;
    }

    onMouseLeave = (e) =>{
        this.draw = false;
        console.log("Leave")
        this.path = null;
        this.pointVec= [];
    }


    fff = () => {
        console.log("asdasd");
        this.svg.clearRect(0,0,  '1000', '520' );

    }

    this.init = () => {

        this.svg = null;
        this.draw = false;
        this.style = null;
        this.width = null;

        this.styleValue = null;
        this.widthValue = null;
        this.pointVec = [];
        this.path = null;


        this.svg = document.querySelector('svg'); //
        this.svg.onmousedown = onMouseDown;
        this.svg.onmousemove = onMouseMove;
        this.svg.onmouseup = onMouseUp;
        this.svg.onmouseleave = onMouseLeave;
        this.svg.onmouseenter =  fff;


        this.draw = false;
        this.pointVec = [];
        this.path = null;

        this.style = document.getElementById('color');
        this.width = document.getElementById('width');
        this.style.onchange = onChangeColor;
        this.width.onchange = onChangeWidth;

    }
}


let e = new SVGStart();

e.init();

