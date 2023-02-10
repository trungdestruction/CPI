import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Item extends cc.Component {

    @property(cc.Node)
    item: cc.Node = null!;

    private _bool: boolean = false;
    private _pos: cc.Vec3 = null!;
    private _getPosOther: cc.Vec3 = new cc.Vec3();

    onLoad() {
        this._pos = this.node.position;
        
        this.node.on('touchstart', this.onTouchStart, this);
        this.node.on('touchmove', this.onTouchMove, this);
        this.node.on('touchend', this.onTouchEnd, this);
    }

    onCollisionEnter(other, self) {
        if(other.node.name === self.node.name) {
            this._bool = true;
            this._getPosOther = other.node.getPosition();
        }
    }

    onCollisionExit(other, self) {
        if(other.name === self.name)
        this._bool = false;
    }

    onTouchStart(event) {
        GameManager.instance.hand.destroy();
        cc.tween(this.node).to(0.25, {scale: 1.3}, {easing: "smooth"}).start();
    }

    onTouchMove(event) {
        this.node.position = this.node.parent.convertToNodeSpaceAR(event.getLocation());
    }

    onTouchEnd(event) {
        cc.tween(this.node).to(0.25, {scale: 1}, {easing: "smooth"}).start();
        if(this._bool) {
            cc.tween(this.node).to(0.25, {position: this._getPosOther}, {easing: "smooth"}).start();
            GameManager.instance.toStore();
        }
        else {
            cc.tween(this.node).to(0.25, {position: this._pos}, {easing: "smooth"}).start();
        }
    }
}
