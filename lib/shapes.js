class Shape{
    constructor(fillColor,textColor,text){
        this.textColor=textColor||null;
        this.fillColor=fillColor||null;
        this.text=text||null;
    }
    static createShape(shapename){
        if(shapename==='circle'){
            const shape=new Circle
            return shape;
        } else if(shapename==='triangle'){
            const shape=new Triangle
            return shape;
        } else if(shapename==='square'){
            const shape=new Square
            return shape;
        }
        else{
            return Error ("needs a valid shape")
        }
    }
    setFillColor(fillColor){
        this.fillColor=fillColor.toLowerCase();
    }
    setTextColor(textColor){
        this.textColor=textColor.toLowerCase();
    }
    setText(text){
        this.text=text;
    }
}

class Triangle extends Shape{
    constructor(fillColor,textColor,text){

        super(fillColor,textColor,text)
    }

    render(){
        return`<polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" />  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Circle extends Shape{
    constructor(fillColor,textColor,text){

        super(fillColor,textColor,text)
    }

    render(){
        return`<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shape{
    constructor(fillColor,textColor,text){

        super(fillColor,textColor,text)
    }


    render(){
        return`<rect width="100%" height="100%" fill="${this.fillColor}" />  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports={
    Square,
    Triangle,
    Circle,
    Shape
}