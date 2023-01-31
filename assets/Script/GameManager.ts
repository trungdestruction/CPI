const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    boot: cc.Node = null!;

    @property(cc.Node)
    cardigan: cc.Node = null!;


}
