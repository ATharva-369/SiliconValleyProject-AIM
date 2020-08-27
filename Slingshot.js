class Slingshot {
    constructor(x, y, body) {
        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: body,
            stiffness: 0.05,
            length: 10

        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
    }

    display() {
        if (this.sling.bodyB) {
            push()
            stroke("green")
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y)
            pop()        }
    }
    shoot() {
        this.sling.bodyB = null;

    }
    attach(body){
        this.sling.bodyB=body  
       }
}