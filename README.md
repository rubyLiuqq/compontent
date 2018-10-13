# component

> component

## 技术组成


fs的方法

## 1、获取文件信息 fs.stat | fs.statSync
1.异步版：fs.stat(path,callback):
    path是一个表示路径的字符串,callback接收两个参数(err,stats),其中stats就是fs.stats的一个实例；
  
2.同步版：fs.statSync(path)
   只接收一个path变量，fs.statSync(path)其实是一个fs.stats的一个实例；

3.再来看fs.stats有以下方法:
    文件：stats.isFile()    
    目录：stats.isDirectory()
    块设备：stats.isBlockDevice()
    字符设备：stats.isCharacterDevice()
    软链接：stats.isSymbolicLink() (only valid with fs.lstat())
    FIFO：stats.isFIFO()
    Socket：stats.isSocket()

