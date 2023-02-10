const {ccclass, property} = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Node)
    hand: cc.Node = null!;

    @property(cc.Node)
    target: any = null!;

    @property(cc.Node)
    toStoreBtn: cc.Node = null!;

    @property(cc.Node)
    text: cc.Node = null!;

    public static instance: GameManager;

    onLoad() {
        GameManager.instance = this;

        cc.director.getCollisionManager().enabled = true;
    }

    start() {
        let text = cc.repeatForever(
            cc.sequence(
                cc.scaleTo(0.5, 1.2),
                cc.scaleTo(0.5, 1)
            )
        );
        this.text.runAction(text);
        this.handMove();
    }

    handMove() {
        let pos = this.hand.position;
        let targetPos = this.target.getPosition();
        cc.tween(this.hand).to(1.7, {position: targetPos}, {easing: "cubicInOut"}).call(() => {
            this.hand.position = pos;
            this.handMove();
        }).start();
    }

    toStore() {
        this.toStoreBtn.active = true;
    }

    onCTA() {
        window.gameEnd && window.gameEnd();
        window.openStore();    
    }
}
