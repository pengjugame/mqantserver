!function(t){function e(s){if(i[s])return i[s].exports;var r=i[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,exports,e){"use strict";var i=e(1),s=e(2),r=e(3);i(function(){},{ctor:function(){alert("test")}});window.onload=function(){var t=document.getElementById("game");Phaser.myScaleManager=new s(t);var e=800,i=screen.width/screen.height;i>1&&(i=1/i);var o=new Phaser.Game(e,e*i,Phaser.AUTO,t);Phaser.myScaleManager.boot(),o.state.add("BootState",r,!0)}},function(t,exports){"use strict";function e(t){function e(){}return e.prototype=t,new e}function i(t,i){var s;s="function"==typeof Object.create?Object.create(i.prototype):e.create(i.prototype),s.constructor=t,t.prototype=s}t.exports=function(t,e){return function(){function s(){if("undefined"==typeof s.prototype.ctor);else{var t=new Array;for(var e in arguments)t.push(arguments[e]);s.prototype.ctor.apply(this,t)}}var r=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,_super=t.prototype;i(s,t);var o=s.prototype;"undefined"==typeof _super||"undefined"==typeof _super.ctor&&(_super.ctor=t);for(var a in e)o[a]="function"==typeof e[a]&&"function"==typeof _super[a]&&r.test(e[a])?function(t,e){return function(){var i=this._super;this._super=_super[t];var s=new Array;for(var r in arguments)s.push(arguments[r]);var o=e.apply(this,s);return this._super=i,o}}(a,e[a]):e[a];return s}()}},function(t,exports,e){"use strict";var i=e(1);t.exports=i(function(){},{ctor:function(t){this.gameDiv=t,this.proDOM=Phaser.DOM,this.isMyLandscapeMode=!1,"landscape-primary"!=this.proDOM.getScreenOrientation()?this.setMyLandscapeMode(!0,!0):this.refresh();var e=i(function(){},Phaser.DOM),s=i(e,{getScreenOrientation:function(){var t=this._super.apply(this,arguments);return document.documentElement.clientWidth===this.proDocumentWidth&&document.documentElement.clientHeight===this.proDocumentHeight||(Phaser.myScaleManager.refresh(),this.proDocumentWidth=document.documentElement.clientWidth,this.proDocumentHeight=document.documentElement.clientHeight),"landscape-primary"!=t?(Phaser.myScaleManager.isMyLandscape()||Phaser.myScaleManager.setMyLandscapeMode(!0,!0),"landscape-primary"):(Phaser.myScaleManager.isMyLandscape()&&Phaser.myScaleManager.setMyLandscapeMode(!1,!0),t)},getOffset:function(){var t=this._super.apply(this,arguments);return t},getBounds:function(){var t=this._super.apply(this,arguments);return t},calibrate:function(){var t=this._super.apply(this,arguments);return t},getAspectRatio:function(){var t=this._super.apply(this,arguments);return t},inLayoutViewport:function(){var t=this._super.apply(this,arguments);return t}});Phaser.DOM=new s;var r=Phaser.Input.prototype.startPointer;Phaser.Input.prototype.startPointer=function(t){return r.call(this,this.copyEvent(t))};var o=Phaser.Input.prototype.updatePointer;Phaser.Input.prototype.updatePointer=function(t){return o.call(this,this.copyEvent(t))};var a=Phaser.Input.prototype.stopPointer;Phaser.Input.prototype.stopPointer=function(t){return a.call(this,this.copyEvent(t))},Phaser.Input.prototype.copyEvent=function(t){if(!Phaser.myScaleManager.isMyLandscape())return t;var e=t.target,i=this.extendCopy(t),s=i.clientX,r=i.clientY,o=i.pageX,a=i.pageY;i.screenX,i.screenY;return i.clientX=r,i.clientY=e.clientHeight-s,i.pageX=a,i.pageY=e.clientHeight-o,i},Phaser.Input.prototype.extendCopy=function(t){var e={};for(var i in t)e[i]=t[i];return e.uber=t,e};var n=Phaser.ScaleManager.prototype.getParentBounds;Phaser.ScaleManager.prototype.getParentBounds=function(){var t=n.apply(this,arguments),e=t.width,i=t.height;return Phaser.myScaleManager.isMyLandscape()&&(t.width=i,t.height=e),t}},boot:function(t){this.game=t},refresh:function(){document.body.style.width=document.documentElement.clientWidth+"px",document.body.style.height=document.documentElement.clientHeight+"px",document.documentElement.clientHeight>=document.documentElement.clientWidth?(this.gameDiv.style.height=document.body.clientWidth+"px",this.gameDiv.style.width=document.body.clientHeight+"px",this.gameDiv.style.transform="rotate(90deg)",this.gameDiv.style.left=-(document.documentElement.clientHeight-document.documentElement.clientWidth)/2+"px"):(this.gameDiv.style.width=document.body.clientWidth+"px",this.gameDiv.style.height=document.body.clientHeight+"px",this.gameDiv.style.transform="",this.gameDiv.style.left=""),this.wMax=1280,this.hScale=1,this.hTrim=0,this.vScale=1,this.vTrim=0,this.height=this.gameDiv.clientHeight,this.width=this.gameDiv.clientWidth,this.scale=1,this.width>this.wMax&&(this.scale=this.width/this.wMax),this.scale<1&&(this.scale=1),this.width=this.width/this.scale,this.height=this.height/this.scale,this.hScale=this.scale,this.vScale=this.scale,this.game&&this.game.scale&&this.game.scale.scaleMode===Phaser.ScaleManager.USER_SCALE&&this.game.scale.setUserScale(this.hScale,this.vScale,this.hTrim,this.vTrim)},setMyLandscapeMode:function(t,e){e=e||!1,this.isMyLandscapeMode=t,e&&this.refresh()},isMyLandscape:function(){return this.isMyLandscapeMode}})},function(t,exports,e){"use strict";var i=e(4),s=window.mqant;t.exports={preload:function(){this.game.load.image("loading","assets/ball.png"),this.game.load.tilemap("desert","assets/tilemaps/desert.json",null,Phaser.Tilemap.TILED_JSON),this.game.load.image("tiles","assets/tilemaps/tmw_desert_spacing.png")},create:function(){var t=this,e=this.game.add.sprite(34,game.height/2,"loading");this.game.load.setPreloadSprite(e),this.game.scale.scaleMode=Phaser.ScaleManager.RESIZE,this.game.scale.setUserScale(Phaser.myScaleManager.hScale,Phaser.myScaleManager.vScale,Phaser.myScaleManager.hTrim,Phaser.myScaleManager.vTrim);try{s.init({host:window.location.hostname,port:3653,client_id:"111",useSSL:!1,onSuccess:function(){s.request("Hitball/HD_Join",{Rid:"001"},function(e){var s=JSON.parse(e.payloadString);if(""==s.Error){var r=s.Result.Player,o=s.Result.Coins,a=s.Result.Rid;try{t.game.state.add("PlayGameState",new i(a,r,o),!1),t.game.state.start("PlayGameState")}catch(t){alert(t)}}else alert(s.Error)})},onConnectionLost:function(t,e){console.log(t),alert("链接断开了:"+t)}})}catch(t){alert(t)}}}},function(t,exports,e){"use strict";var i,s=e(1),r=e(5),o=e(7),a=e(8),n=(e(9),window.mqant),h=!1,l=0,d=!1;t.exports=s(function(){},{ctor:function(t,e,i){this.heroRid=t,this.initplayer=e,this.initcoins=i},init:function(){this.physics.startSystem(Phaser.Physics.ARCADE),this.game.stage.backgroundColor="#454645",this.game.time.desiredFps=50},preload:function(){this.game.load.image("ball","assets/ball.png"),this.game.load.image("deadly","assets/deadly.png"),this.game.load.image("coin","assets/coin.png"),this.game.load.image("arrow","assets/arrow.png"),this.game.load.atlas("generic","assets/virtualjoystick/skins/generic-joystick.png","assets/virtualjoystick/skins/generic-joystick.json")},joinHero:function(t){var e=new r(this.game,t.body.x,t.body.y,this.heros,{arrowsGroup:this.arrows,rid:t.rid,wid:t.wid});return e},joinDeadly:function(t){var e=t.body.x,i=t.body.y,s=new o(this.game,e,i,this.deadlys,{arrowsGroup:this.arrows,rid:t.rid,wid:t.wid});return s},joinCoin:function(t){var e=new a(this.game,t.body.x,t.body.y,this.coins,{rid:t.rid,wid:t.wid,fireRate:t.fireRate});return e},create:function(){var t=this;this.game.world.resize(1280,1280),this.game.world.setBounds(0,0,1280,1280),console.log(this.game.world.width+" game "+this.game.world.height),console.log(this.game.world.width+" game "+this.game.world.height),this.arrows=this.game.add.group(),this.heros=this.game.add.group(),this.deadlys=this.game.add.group(),this.coins=this.game.add.group();for(var e in this.initplayer){var s=this.initplayer[e],r={body:{x:s.X,y:s.Y},rid:s.Rid,wid:s.Wid,maxPower:300},o=this.joinHero(r);this.heroRid===s.Rid&&(this.hero=o)}for(var a in this.initcoins){var h=this.initcoins[a],l={body:{x:h.X,y:h.Y},rid:h.Id,wid:h.Wid,maxPower:300};t.joinCoin(l)}this.game.camera.deadzone=new Phaser.Rectangle(200,200,this.game.stage.width-200,this.game.stage.height-200),this.game.camera.follow(this.hero),i=this.game.add.text(5,0,"",{font:"11px Arial",fill:"#ffffff",align:"left"}),this.updateHud(),this.game.input.onDown.add(this.charge,this),n.on("Hitball/OnMove",function(e){var i=JSON.parse(e.payloadString);t.heros.forEachAlive(function(t){var e=i[t.rid];null!=e?t.OnMove(e):t.dead()},t);for(var s in i){var r=i[s],o=t.heros.iterate("rid",s,Phaser.Group.RETURN_CHILD);if(null===o){var a={body:{x:r.X,y:r.Y},rid:r.Rid,wid:r.Wid,maxPower:300};t.joinHero(a)}}}),n.on("Hitball/OnJoin",function(e){var i=JSON.parse(e.payloadString),s=t.heros.iterate("rid",i.Rid,Phaser.Group.RETURN_CHILD);if(null===s){var r={body:{x:i.X,y:i.Y},rid:i.Rid,wid:i.Wid,maxPower:300};t.joinHero(r)}else console.log("该角色已存在!")}),n.on("Hitball/OnAddCoins",function(e){console.log("添加金币");var i=JSON.parse(e.payloadString),s=t.coins.iterate("rid",i.Id,Phaser.Group.RETURN_CHILD);if(null===s){var r={body:{x:i.X,y:i.Y},rid:i.Id,wid:i.Wid,maxPower:300};t.joinCoin(r)}else console.log("该金币已存在!")}),n.on("Hitball/OnEatCoins",function(e){console.log("吃掉金币金币");var i=JSON.parse(e.payloadString),s=t.coins.iterate("rid",i.Id,Phaser.Group.RETURN_CHILD);null===s||s.dead()})},update:function(){var t=this;d||(this.game.physics.arcade.collide(this.heros,this.deadlys,this.collisionHitDeadly,null,this),this.game.physics.arcade.collide(this.heros,this.coins,this.collisionHitCoin,null,this),h?(this.hero.Power(),this.updateHud()):t.heros.forEachAlive(function(t){t.Rotate()},t),t.heros.forEachAlive(function(t){t.Move()},t))},collisionHitDeadly:function(t,e){},collisionHitCoin:function(t,e){n.requestNR("Hitball/HD_EatCoin",{Id:e.rid}),l+=1,e.dead(),this.updateHud()},wallBounce:function(){this.hero.x<this.hero.ballRadius&&(this.hero.x=this.hero.ballRadius,this.hero.xSpeed*=-1),this.hero.y<this.hero.ballRadius&&(this.hero.y=this.hero.ballRadius,this.hero.ySpeed*=-1),this.hero.x>this.game.world.width-this.hero.ballRadius&&(this.hero.x=this.game.world.width-this.hero.ballRadius,this.hero.xSpeed*=-1),this.hero.y>this.game.world.height-this.hero.ballRadius&&(this.hero.y=this.game.world.height-this.hero.ballRadius,this.hero.ySpeed*=-1)},getDistance:function(t,e){var i=t.x-e.x,s=t.y-e.y;return i*i+s*s},charge:function(){this.game.input.onDown.remove(this.charge,this),this.game.input.onUp.add(this.fire,this),h=!0},fire:function(){this.game.input.onUp.remove(this.fire,this),this.game.input.onDown.add(this.charge,this),this.hero.Fire(),this.updateHud(),h=!1},updateHud:function(){i.text="Power: "+this.hero.power+" * Score: "+l},paused:function(){console.log(" paused ")},resumed:function(){console.log(" resumed ")},resize:function(t,e){this.game.world.resize(1280,1280),this.game.world.setBounds(0,0,1280,1280),console.log(t+" resize "+e),console.log(this.game.width+" game "+this.game.height),console.log(this.game.world.width+" world "+this.game.world.height),console.log(this.game.stage.width+" stage "+this.game.stage.height),this.game.camera.follow(this.hero)}})},function(t,exports,e){"use strict";var i=e(1),s=e(6),r=window.mqant;t.exports=i(s,{ctor:function(t,e,i,s,r){this.roleType="hero",r=r||{},this.game=t,this.arrows=r.arrowsGroup,this.rotateDirection=1,this.rotateSpeed=3,this.friction=.99,this.arrow,this.minPower=50,this.maxPower=r.maxPower||200,this.power=this.minPower,this.ballRadius=10,this.degToRad=.0174532925,this._super(this.game,e,i,"ball",null,r),this.xSpeed=0,this.ySpeed=0,this.game.physics.arcade.enable(this),this.anchor.setTo(.5,.5),this.checkWorldBounds=!0,this.outOfBoundsKill=!0,this.body.collideWorldBounds=!0,this.inputEnabled=!0,this.input.useHandCursor=!0,this.powering=!1,s&&s.add(this)},dead:function(){this.alive&&(this._super(),this.arrow.kill())},getArrow:function(){if(null==this.arrow){var t=this.arrows.getFirstExists(!1);t?(this.arrow=t,this.arrow.reset(this.x,this.y)):(this.arrow=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"arrow"),this.arrow.anchor.x=-1,this.arrow.anchor.y=.5)}return this.arrow},Power:function(){this.power++,this.power=Math.min(this.power,this.maxPower),this.powering=!0},Fire:function(){this.power=this.minPower,r.requestNR("Hitball/HD_Fire",{Rid:"001",Angle:this.getArrow().angle,Power:this.power,X:this.x,Y:this.y}),this.rotateDirection*=-1,this.powering=!1},Rotate:function(){this.getArrow().angle+=this.rotateSpeed*this.rotateDirection},OnMove:function(t){this.x=t.X,this.y=t.Y,this.xSpeed=t.XSpeed,this.ySpeed=t.YSpeed,this.power=t.Power,this.rotateDirection=t.RotateDirection,this.getArrow().x=this.x,this.getArrow().y=this.y,this.powering||(this.angle=t.Angle,this.getArrow().angle=t.Angle)},OnRotate:function(t){this.angle=t.Angle,this.getArrow().angle=t.Angle},Move:function(){this.x=this.x+this.xSpeed,this.y=this.y+this.ySpeed,this.xSpeed*=this.friction,this.ySpeed*=this.friction,this.getArrow().x=this.x,this.getArrow().y=this.y}})},function(t,exports,e){"use strict";var i=e(1);t.exports=i(Phaser.Sprite,{ctor:function(t,e,i,s,r,o){o=o||{},this._super(t,e,i,s,r),this.rid=o.rid,this.wid=o.wid},dead:function(){this.alive&&this.kill()}})},function(t,exports,e){"use strict";var i=e(1),s=e(5);t.exports=i(s,{ctor:function(t,e,i,s,r){this.roleType="deadly",r=r||{},this._super(t,e,i,"deadly",null,r)}})},function(t,exports,e){"use strict";var i=e(1),s=e(6);t.exports=i(s,{ctor:function(t,e,i,s,r){this.roleType="enemy",r=r||{},this._super(t,e,i,"coin",null,r),this.game=t,this.speed=r.speed||50,this.nextFire=0,this.fireRate=50,this.tileVolume=3,this.game.physics.arcade.enable(this),this.anchor.x=.5,this.anchor.y=.5,this.anchor.setTo(.5,.5),this.checkWorldBounds=!0,this.outOfBoundsKill=!0,this.body.collideWorldBounds=!0,this.inputEnabled=!0,this.input.useHandCursor=!0,s&&s.add(this)},move:function(){},rebirth:function(t,e){this.reset(t,e)}})},function(t,exports,e){"use strict";var i=e(1),s=e(10);t.exports=i(s,{ctor:function(t,e,i,s,r,o){this._super.call(this,t,"desert"),this.addTilesetImage("Desert","tiles");var a=[];for(var e in this.tilesets[0].tileProperties){var n=this.tilesets[0].tileProperties[e];"mesh"in n&&a.push(parseInt(e)+1)}this.setCollision(a,!0),this.setTileIndexCallback(a,this.hitTile,this,"Ground")},hitTile:function(t,e){return"mesh"in e.properties&&!(e.properties.mesh-t.tileVolume>0)}})},function(t,exports,e){"use strict";var i=e(1);t.exports=i(Phaser.Tilemap,{})}]);
//# sourceMappingURL=main.js.map