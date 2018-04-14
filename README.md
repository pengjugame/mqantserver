mqantserver demo
------

Fork From：https://github.com/liangdas/mqantserver   

------
# 快速安装使用
```
go get -v github.com/skiy/mqantserver/src/server
``` 

# 配置与运行
## 配置
如果一切顺利，你可以进入项目根目录修改配置信息  
```
cd $GOPATH/src/github.com/skiy/mqantserver
```

**更改web服务器文件访问本地路径**   
在```bin/conf/server.json```中，修改**StaticPath**为你本机上**mqantserver**项目**bin**的绝对路径。   
（将 **YOUR_PROJECT_PATH** 修改为你项目的绝对地址）   
```
"Webapp":[
                {
                    "Id":"Webapp001",
                    "ProcessID":"development",
                    "Settings":{
                        "StaticPath":"YOUR_PROJECT_PATH/mqantserver/bin"
                    }
                }
        ],
```

## 运行
在项目根目录下，执行以下命令：
```
server --conf bin/conf/server.json --log bin/logs
```
你将得到以下日志：
```
Server configuration file path : bin/conf/server.json
[development] [I] [app.go:143] mqant 1.7.0 starting up
[development] [I] [app.go:235] RPCClient create success type(Gate) id(Gate001)
[development] [I] [app.go:235] RPCClient create success type(Login) id(Login001)
[development] [I] [app.go:235] RPCClient create success type(PyChat) id(PyChat001)
[development] [I] [app.go:235] RPCClient create success type(Test) id(Test001)
[development] [I] [app.go:235] RPCClient create success type(XaXb) id(XaXb001)
[development] [I] [app.go:235] RPCClient create success type(Webapp) id(Webapp001)
[development] [I] [app.go:235] RPCClient create success type(Master) id(Master001)
[development] [I] [app.go:235] RPCClient create success type(HelloWorld) id(HelloWorld001)
[development] [I] [app.go:235] RPCClient create success type(Chat) id(Chat001)
[development] [I] [app.go:235] RPCClient create success type(Hitball) id(Hitball001)
[development] [I] [app.go:235] RPCClient create success type(Tracing) id(Tracing001)
[development] [I] [ModuleManager.go:50] This service ProcessID is [development]
[development] [I] [rpcserver.go:56] RPCServer init success id(Master001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(Hitball001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(Gate001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(HelloWorld001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(Login001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(Chat001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(Webapp001) version(1.0.0)
[development] [I] [rpcserver.go:56] RPCServer init success id(XaXb001) version(1.0.0)
[development] [I] [ws_server.go:117] WS Listen ::3653
[development] [I] [module.go:60] webapp server Listen : :8080
[development] [I] [tcp_server.go:39] TCP Listen ::3563

```
ctrl + C 关闭服务器，此时输出日志如下：
```
^C
[development] [I] [rpcserver.go:60] RPCServer closeing id(XaXb001)
[development] [I] [rpcserver.go:65] RPCServer close success id(XaXb001)
[development] [I] [module.go:73] webapp server Shutting down...
[development] [I] [rpcserver.go:60] RPCServer closeing id(Webapp001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Webapp001)
[development] [I] [rpcserver.go:60] RPCServer closeing id(Chat001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Chat001)
[development] [I] [rpcserver.go:60] RPCServer closeing id(Login001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Login001)
[development] [I] [rpcserver.go:60] RPCServer closeing id(HelloWorld001)
[development] [I] [rpcserver.go:65] RPCServer close success id(HelloWorld001)
[development] [I] [mqtt_client_server.go:95] Get a connection error , will break(read tcp 127.0.0.1:3653->127.0.0.1:57312: use of closed network connection)
[development] [I] [mqtt_client_server.go:116] listen_loop Groutine will esc.
[development] [I] [module.go:62] 客户端断开了链接
[development] [I] [rpcserver.go:60] RPCServer closeing id(Gate001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Gate001)
[development] [I] [rpcserver.go:60] RPCServer closeing id(Hitball001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Hitball001)
[development] [I] [rpcserver.go:60] RPCServer closeing id(Master001)
[development] [I] [rpcserver.go:65] RPCServer close success id(Master001)
[development] [I] [app.go:243] RPCClient closeing type(Hitball) id(Hitball001)
[development] [I] [app.go:248] RPCClient close success type(Hitball) id(Hitball001)
[development] [I] [app.go:243] RPCClient closeing type(Tracing) id(Tracing001)
[development] [I] [app.go:248] RPCClient close success type(Tracing) id(Tracing001)
[development] [I] [app.go:243] RPCClient closeing type(Master) id(Master001)
[development] [I] [app.go:248] RPCClient close success type(Master) id(Master001)
[development] [I] [app.go:243] RPCClient closeing type(Login) id(Login001)
[development] [I] [app.go:248] RPCClient close succes
```

## 修改
修改逻辑代码后，需要重新编译
```
go install github.com/skiy/mqantserver/src/server
```

# 访问网页版本客户端
mqantserver 已内置了一个web模块（源码在server/webapp），因此进程启动成功以后就可以访问了

访问地址为：http://127.0.0.1:8080/mqant/chat/index.html

小球碰撞游戏DEMO访问地址为：http://127.0.0.1:8080/mqant/hitball/index.html

# 猜数字游戏

猜数字游戏无网页模块,而是实现了一个golang的后端机器人来模拟整个逻辑

机器人代码在src/robot下,需要依赖github.com/liangdas/armyant

# Demo演示说明

	1. 启动服务器
	2. 启动网页客户端	(默认房间名,用户名)
	3. 登陆成功后就可以聊天了

# 分布式跟踪系统功能测试
[Appdash，用Go实现的分布式系统跟踪神器](http://tonybai.com/2015/06/17/appdash-distributed-systems-tracing-in-go/)

客户端访问Chat/HD_JoinChat/{msgid}时后端将会收集访问信息，通过以下地址就可以看到了
[访问地址 http://localhost:7700](http://localhost:7700)

示意图：
![示意图](https://github.com/liangdas/mqant/wiki/images/mqant_tracing.png)

# 项目目录结构

https://github.com/liangdas/mqantserver (https://github.com/skiy/mqantserver) 
仓库中包含了mqant框架,所用到的第三方库,聊天Demo服务端,聊天代码客户端代码

	bin		
		|-conf/server.json			服务端配置文件
		|-public					web客户端静态文件
		|-hitball					小球碰撞游戏DEMO客户端文件
		|-console                   控制台web静态文件(还未完成)
	src
		|-client
			|-mqtt_chat_client.py 	聊天客户端 Python版本
			|-webclient.go			聊天客户端网页版本
		|-hitball						小球碰撞游戏DEMO客户端源码
		|-server						聊天服务器Demo
			|-gate						网关模块
			|-chat						聊天模块
			|-login						登陆模块
			|-hitball					小球碰撞游戏模块
			|-tracing					分布式跟踪系统服务模块
			|-main.go					服务器启动入口


# 客户端快速测试
如果你需要测试其他语言的mqtt客户端，可以使用mqant提供的测试接口来测试
### tcp mqtt :
	host: mqant.com
	port: 3563
	protocol=mqtt.MQTTv31
	tcp:  tls/TLSv1
	
	如果客户端需要ca证书可以使用下面这个网站提供的
	https://curl.haxx.se/docs/caextract.html

### websocket mqtt :
	host: ws://www.mqant.com:3653/mqant
	protocol=mqtt.MQTTv31
	
### 测试协议

1. 登陆接口

		向服务器publish一条登陆消息
	
		topic:		Login/HD_Login/{msgid}
		
		message:	{"userName": "liangdas", "passWord": "Hello,anyone!"}
	
	如果topic添加了msgid,则服务器会返回一条回复消息

2. 加入聊天室

		向服务器publish一条登陆消息
	
		topic:		Chat/HD_JoinChat/{msgid}
		
		message:	{"roomName": "mqant"}
	
		服务器会广播消息给所有聊天室成员
		
		topic:		Chat/OnJoin
			
		message:	{"users": [“liangdas”]}

3. 发送一条聊天

		向服务器publish一条登陆消息
	
		topic:		Chat/HD_Say/{msgid}
		
		message:	{"roomName": "mqant","from":"liangdas","target":"*","content": "大家好!!"}
	
		服务器会广播消息给所有聊天室成员
		
		topic:		Chat/OnChat
			
		message:	{"roomName": "mqant","from":"liangdas","target":"*","msg":"大家好!!"}