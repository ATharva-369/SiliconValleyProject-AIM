class Form {
    constructor() {
        this.input = createInput('Type Your Name')
        this.button = createButton('Start');
        this.sound=loadSound("button press 1.wav")
    }
    hide() {
        this.input.hide();
        this.button.hide();
    }
    display() {
        background("#d9bf87")
        this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
        this.button.position(displayWidth / 2 + 30, displayHeight / 2);
        name=this.input.value();
        push ();
        fill(248,75,62)
        textSize(25)
        text("𝐓𝐡𝐢𝐬 𝐠𝐚𝐦𝐞 𝐰𝐢𝐥𝐥 𝐭𝐞𝐬𝐭 𝐲𝐨𝐮𝐫 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞 𝐚𝐧𝐝 𝐚𝐢𝐦𝐢𝐧𝐠 𝐬𝐤𝐢𝐥𝐥𝐬, 𝐚𝐧𝐝 𝐩𝐚𝐭𝐢𝐞𝐧𝐜𝐞\n𝐏𝐫𝐞𝐬𝐬 𝐬𝐩𝐚𝐜𝐞 𝐭𝐨 𝐠𝐞𝐭 𝐲𝐨𝐮𝐫 𝐡𝐚𝐧𝐝 𝐛𝐚𝐜𝐤\n𝐏𝐮𝐥𝐥 𝐭𝐡𝐞 𝐡𝐚𝐧𝐝 𝐚𝐧𝐝 𝐛𝐚𝐬𝐡 𝐭𝐡𝐨𝐬𝐞 𝐬𝐦𝐢𝐥𝐢𝐞𝐬!!\n𝐁𝐞 𝐜𝐚𝐫𝐞𝐟𝐮𝐥, 𝐡𝐢𝐭𝐭𝐢𝐧𝐠 𝐭𝐡𝐞𝐦 𝐬𝐥𝐨𝐰𝐥𝐲 𝐨𝐫 𝐩𝐮𝐬𝐢𝐧𝐠 𝐭𝐡𝐞𝐦 𝐨𝐮𝐭 𝐨𝐟 𝐬𝐜𝐫𝐞𝐞𝐧𝐬 𝐰𝐢𝐥𝐥 𝐧𝐨𝐭 𝐠𝐢𝐯𝐞 𝐲𝐨𝐮 𝐩𝐨𝐢𝐧𝐭𝐬!!",width/2-500,height/2-100)
        fill("#1171B6")
        textSize(40)
        text("𝘼𝙄𝙈",width/2,100)
        pop ();
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.sound.play();
            gameState = "onHold"
        });
    }
}
