class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Room");
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d3project/');
        this.load.image('bg', 'Assets/Sprite/Background2.png');
        this.load.image('regdoor', 'Assets/Sprite/regulardoor.png');
        this.load.image('smalldoor', 'Assets/Sprite/smalldoor.png');
        this.load.spritesheet('sprite', 'Assets/Sprite/totalsprite2.2.png', { frameWidth: 14, frameHeight: 30 });
    }