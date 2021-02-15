class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image=loadImage("sprites/sling1.png")
        this.image2=loadImage("sprites/sling2.png")
        this.image3=loadImage("sprites/sling3.png")
        
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image,200,80,40,140);
        image(this.image2,172,82,40,80);
      

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            image(this.image3,pointA.x-25,pointA.y,10,20)
           push();
            stroke(60,39,15)
           
            if(pointA.x<180){
                strokeWeight(6)
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y);
            }
            else {
                strokeWeight(4)
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+35, pointB.y);
            }
            pop();
        }
    }
    
}