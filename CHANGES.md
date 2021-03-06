# WizEditor辑器更新历史
## 428
1. 在markdown正文里面转义\$，避免被错误当成公式
2. 中文输入的守候不进行快速输入识别
3. drawio可以正常导出数学公式
4. 修复bug：创建inline code会把内容修改成后面的math
5. 修复数学公式光标可能无法正常定位的问题
6. 修复数学公式undo/redo可能不正常的问题
7. 数学公式，直接输入\$，不需要空格确认，和粗体，斜体快捷输入相同的处理方式
8. 修正bug：移动端查看其它评论后，无法查看第一条评论
9. 修正bug：解决多行注释解析错误的问题
10. tooltip增加部分icon
11. 修正bug：blockMenuButton 和 contextMenu 可能同时显示的问题
12. 修正bug：mac下面可能无法出现右键菜单的问题
13. 修正bug：markdown链接语法可能无法识别的问题
14. 修正bug：plantuml可能无法渲染的问题
15. 优化部分UI

## 427
1. 修复可以将图片拖入code的问题
2. 优化拖动图片到表格操作
3. 鼠标选择文本过程中，不显示block menu button以及菜单
4. 兼容微信文章的code
5. 有右键菜单的时候，不显示文字工具栏。
6. 选中内容改编的时候，关闭右键菜单
7. 优化block快照

## 426
1. 复制列表包含前面的数字
2. 优化mathjax显示
3. 修复调整表格宽度问题
4. 优化微信聊天记录导入
5. 编辑器选项，更改enableContextMenu为disableContextMenu。默认显示右键菜单
6. 优化文字下划线样式
7. 更改wiki链接，支持添加id等
8. 复制block，取消选中状态
9. 增加animateScrollToBlock方法
10. 添加appId，docId到剪贴板数据中
11. 增加onGetBlockCommand回调参数，添加当前的menu data

## 425
1. 避免android无法显示复制菜单
2. 复制出来的markdown，将clike语言转换为cpp，兼容vscode
3. bug fix: 判断光标的位置。当光标在一个box和一段文字之间的时候，获取的rect可能是空的。兼容这种情况
4. auto suggest 阻止esc冒泡
5. \[服务端\] fix: 不在更新keepAlive的时候清理startup，避免在多个服务启动时，交替删除对方
6. 优化编辑内部分block编辑样式
7. 优化微信文章，转换html的时候，去掉隐藏的元素
8. 为兼容低版本浏览器，同时设置两个cookie，一个sameSite=None，另一个不设置sameSite
9. 优化表格右键菜单

## 424
1. 支持编辑服务在子路径下面
2. 表格增加row title， column title功能，增加stripe style样式
3. 支持plantuml插入（\`\`\`uml）
4. list block支持quote
5. code里面强制使用纯文本粘贴
6. markdown表格工具栏优化
7. markdown表格内空的checkbox识别问题修复
8. 支持数学公式block
9. 优化表格工具栏
10. 增加flowchart支持
11. 隐藏表格删除按钮
12. 优化加载速度，延迟渲染code language，将code高亮代码放在worker里面执行
13. 整合layout表格。任何表格都可以设置是否显示表格线

## 423
1. toc 内点击 超链接时，不去设置光标，避免锚点跳转异常
2. toOrderedList 指令执行后，不再选中 block 内全体文本，避免误操作

## 422
1. 移动端不显示text toolbar，右键菜单
2. 修复无法复制excel表格内容的问题
3. 修复移动光标可能出错的问题
4. 修复导出text only list导出markdown错误的问题
5. 修复ios插入ocr文字的问题
6. 修复可以给code设置样式的问题
7. 在code里面全选，优先选择整个code，再选择整个文档
8. 修复可以在code里面插入markdown的问题

## 421
1. 兼容掘金内容复制粘贴
2. 修复url里面可能包含错误的字符的问题
3. bug fix：光标移动错误的问题
4. bug fix: 插入code 保留回车之后的内容
5. 优化html2markdown
6. 优化github代码粘贴，去掉行号单元格，保持前面的空格
7. 阅读模式光标在底部时，不自动滚动 & 光标必须在编辑器内部时才进行滚动
8. 避免输入时，光标紧贴在最低端；修正 打字机模式居中位置算法；统一使用 getRangeRect 方法
9. 修正 markdown 下 table 100% 的样式
10. 粘贴html，保持行首的空格
11. 修复表格滚动问题
12. 添加保存图片回调
13. markdown笔记，增加复制为纯文本功能
14. 屏蔽表格右侧点击事件，避免光标跳动

## 420
1. 修复搜狗输入法兼容问题
2. 设置 全局 button 样式 & 调整 修改编号 对话框内 样式
3. 兼容某些版本markdown的表格语法
4. 列表：如果当前是一个heading，那么转换列表的时候，尝试找到前一个heading的list block

## 419
1. 增加播放历史操作功能
2. 优化删除表格行/列的问题
3. 允许插入远程的图片
4. 修复复制的纯文本/html包含code language select的问题
5. 调整修改序号功能
6. handleBlockInserted 应用到complex block的子block，这样可以让表格里面的图片进行本地化
7. bug fix: 粘贴表格可能丢失文字的问题
8. 调整弹出框/菜单样式
9. 优化markdown粘贴功能
10. 粘贴纯文本继承样式
11. 修复在表格内移动光标不能自动滚动的问题
12. 在最后一个单元格，按下tab的时候，自动增加新行

## 418
1. 修改block 点击消息处理；去掉drawio选中状态，统一使用embed的选中状态
2. 有序列表增加修改编号的功能
3. 允许给图片设置对齐方式
4. 增加图片loading样式
5. 识别markdown图片语法
6. \[服务端\]支持无redis启动
7. \[服务端\]支持S3存储
8. 优化code粘贴
9. 图片错误，仅显示新加入的图片
10. 复制：markdownonly的时候默认复制markdown源代码，粘贴的时候默认按照markdown粘贴
11. 粘贴前转换data url
12. 优化markdowwn复制粘贴
13. 代码高亮增加bash和R语言

## 417
1. 允许appId长度为2个字符

## 416
1. 支持阿里云redis集群
2. 修复markdown转换可能有多余空行的问题
3. 允许drawio放弃编辑
4. 粘贴html，将pre转换为code

## 415
1. 优化粘贴html功能，不添加多余的空格
2. 修正drawio无法编辑的问题
3. 优化导出markdown功能
4. 调整图片loading样式

## 414
1. 给toc增加点击回调
2. 修复图片缩放按钮可能错位的问题
3. 优化图片loading样式
4. 优化导出docx功能

## 413
1. 给drawio增加loading状态

## 412
1. 修复包含code的文档转换为纯文本bug
2. 修复执行block menu的时候页面可能跳动的问题
3. 给预览的文件增加编辑按钮
4. 给文件box增加编辑功能
5. 导出markdown，支持导出评论
6. 修复部分快捷键在windows上面无法使用的问题（对齐，引用）
7. 优化表格宽度调整
8. 新建表格，默认输入文字不强制换行
9. 增加text转换为doc的功能
10. 输入数学公式，需要使用空格键进行确认再转换
11. 输出markdown，对于特殊字符进行转义
12. 在两个\`之间粘贴文字，尝试自动识别为code
13. 优化markdown导入导出，增加忽略空行选项
14. 导入markdown兼容typora的空行策略
15. 正在上传的图片增加占位
16. 移动端给文件card设置默认宽度
17. 修复下载图片可能失败的问题
18. 修复safari下面card，视频等无法撑起单元格的问题

## 411
1. 增加分割线之后，光标放在分割线下面
2. 移动端取消hover状态和样式
3. 增加评论禁止回复，禁止编辑选项
4. drawio支持控制语言
5. 修改drawio数据保存方式，不再把数据保存到json里面
6. 增加drawio保存数据错误回调
7. 修复drawio中文乱码问题

## 410
1. 修复导出word文字大小错误问题
2. 给空的drawio增加样式
3. 修复快捷方式可能无效的问题

## 409
1. 导出word支持字体，大小，颜色，背景色
2. 导出word支持自定义默认的字体大小
3. 支持导出markdown
4. 修复超大表格复制出错的问题

## 408
1. 修复表格工具栏显示逻辑

## 407
1. 支持右键复制图片

## 406
1. 修复无法修改锁定的表格内的input的问题
2. 支持右键菜单单独复制图片
3. 完善reload部分事件清理
4. 避免有多个编辑器的时候，tooltip重复的问题
5. 可以通过esc取消公式编辑对话框
6. 修复可能无法执行cut的问题
7. 修复表格分割线可能错位的问题
8. 增加Alt+T，Alt+B，Alt+H快捷键，可以快速设置颜色
9. 支持连续四个\$输入公式
10. 支持只读模式显示查找对话框

## 405
1. 修复插入数学公式错误进行编辑的问题
2. block锁定的情况下，允许修改input

## 404
1. 修复表格更改大小bug
2. 修复某些快捷键无效的问题
3. 修复文件拖放bug

## 403
1. 增加onFileCardClick点击事件
2. 点击box的时候自动选中整个box
3. 修复自动完成的bug
4. 禁止readonly模式下更改iframe大小

## 402
1. 禁止浏览器的右键菜单

## 401
1. 修复某些情况下编辑器可能变成只读的问题
2. 修复某些情况下锁定的表格内容仍然可以修改的问题

## 400
1. 优化手机样式

## 399
1. 提供禁用表格工具栏选项
2. box下拉框增加选项
3. \[服务端\]增加删除快照功能

## 398
1. 修复无法复制图文到其他应用的问题
2. 优化markdown转换功能

## 397
1. 修复滚动条可能无响应的问题
2. 修复在表格中可以插入code的问题
3. 增加导出markdown功能
4. 增加插入toc功能
5. 记住图片高度，避免页面加载的时候高度变化
6. 修复表格中图片缩放的一些bug
7. 优化右键菜单，显示快捷键
8. 插入code，记住最后选择的语言

## 396
1. 优化code的语言，常用语言放在最前面

## 395
1. 调整 list 中的 查看脑图、插入成员、插入时间 显示规则（移动端 或 宽度小于 512 时隐藏）
2. 更改语言后重新高亮
3. 编辑器增加行号

## 394
1. 避免复制code页面跳动

## 393
1. 增加导出为docx功能
2. 增加禁止下载office文件功能
3. 修改math输入框样式
4. 优化code语言选择框样式

## 392
1. 增加集群支持

## 391
1. 修正表格更改大小错误

## 390
1. bug修复：被锁定的内容可以进行文字替换
2. bug修复：表格里面的checkbox背景颜色错误
3. bug修复：修复表格被锁定的情况下仍然可以修改里面内容的问题
4. bug修复：修复表格被锁定的情况下仍然可以修改宽度，插入行列等问题
5. bug修复：修复某些情况下无法复制表格的问题
6. bug修复：修复文字和图片可能无法同时选中的问题
7. bug修复：修复可能无法调整表格列宽的问题
8. 允许在多选单元格的情况下插入行和列
9. 优化：表格命令状态
10. 优化：图片选择
11. 优化：数学公式渲染
12. 优化：优化粘贴html样式
13. 服务端：增加集群管理，当文档已经被另一个节点服务的时候，通知所有的集群节点使缓存失效

## 389
1. 优化表格粘贴操作
2. 修复表格列宽调整bug
3. code增加Racket语言
4. 删除最后一个评论的时候，触发onUpdateLayout
5. 增加onGetPreviewInfo回调，允许返回自定义的预览信息
6. bug修复：在文档标题前面回车无法换行的问题
7. bug修复：包含图片时，无法复制完整选中部分
8. bug修复：无法正确选择图片的问题（包含多个图片的block）
9. bug修复：可能无法删除某些文字的bug
10. 优化错误信息处理

## 388
1. 支持token里面包含用户名称，用户头像，增强安全性
2. op中允许包含del和create操作

## 387
1. 自动修复可能有问题的op
2. 修复表格粘贴可能不全的问题

## 386
1. bug fix: 中文输入法状态下标题可能无法正常删除的问题

## 385
1. 修改文字中空格渲染的方式
2. 从inline-code中删除serif字体
3. markdown转换识别br
4. 调整评论交互，优化ios下面的评论体验

## 383
1. 修复表格选中状态可能无法清除的问题

### 383
1. list block作为mindmap查看，取消focused显示，仅保留hover
2. bug fix: 复制代码粘贴的时候，将代码转换为纯文本
3. office 文件支持下载打开编辑
4. 增加save office回调
5. 支持通过键盘选中图片
6. \[服务端\]增加migrate api
7. 支持更新插入的文件
8. 更改text input渲染方式，增加inline style样式设置

text input 点击和更改数据方式：

```typescript
function handleInputClicked(editor: Editor, box: BoxData, event: Event): void {
  console.log(box, event);
  setTimeout(() => {
    const color = ['red', 'green', 'blue'][Date.now() % 3];
    editor.updateBoxData(box.id, {
      value: `clicked on ${new Date().toLocaleTimeString()}`,
      inlineStyle: `color: ${color}`,
    });
  }, 300);
}

const options = {
  ...
  callbacks: {
    ...
    onInputClicked: handleInputClicked,
  },
};
```
## 382
1. 修复拖拽code可能出错的问题
2. 修复markdown表格支持
3. 避免 在 code 内移动鼠标时， BlockMenuButton 不断闪烁

## 381
1. 优化markdown支持，更符合markdown标准
2. 调整code样式
3. 允许上传任意文件
4. 支持通过客户端导出docx
5. 调整列表样式，避免列表折行后不对齐
6. Link 点击编辑按钮时，自动关闭 editableToolbar； 编辑器 destroy 时，自动关闭 editableToolbar
7. 修复markdown导入bug
8. 修正数学公式输入框样式
9. \[服务端\]上传文件错误包含错误代码

## 380
1. 支持markdown里面的html代码
2. 兼容firefox

## 379
1. \[服务端\]兼容旧版本node

## 378
1. 增加下载图片回调，可以让外部拦截下载图片功能（利用客户端跨域下载图片）
2. 调整数学公式夜间样式
3. 调整错误图片样式
4. \[服务端\]，修复复制文档时可能不是最新版本的问题

## 377
1. 调整code的样式
2. 增加复制code功能
3. 调整emit错误顺序
4. 支持代码换行
5. 修正 img 缺省图片位置，避免 裂图显示
6. 导出docx支持字体大小和颜色
7. 修复markdown2doc的错误
8. code增加kotlin支持
9. 修复代码输入可能的错误

## 376
1. 修复code里面可能错误识别快速输入的bug
2. 支持block内软回车
3. bug修复：修复在code前后删除内容报错的问题
4. bug修复：支持在code后面继续输入纯文本
5. 增强：如果编辑器最后是一个图片等block，点击最后面空白，自动添加空白文字行
6. 在列表内支持输入软回车
7. bug修复：修复表格工具栏错位问题
8. 修复firefox兼容问题
9. 支持粘贴office里面的本地图片
10. 增加disableAudio选项
11. 修复markdown转换的时候，没有decode html标签的问题

## 375
1. 修复@可能无效的bug

## 374
1. 调整提醒下拉框UI
2. toHeading命令，支持取消当前heading
3. \[服务端\]fake token api支持指定权限

## 373
1. \[服务端\]导出docx/pdf支持指定版本
2. \[服务端\]获取text支持指定版本
3. 修复表格bug：在合并的单元格前后插入列

## 372
1. 修正mindmap按钮问题
2. 给text input增加关闭autocommplete属性

## 371
1. 修复firefox崩溃的问题

## 370
1. 修正夜间模式问题
2. 修正新建评论可能报错的问题
3. 修正code block选中的问题
4. 增加复制粘贴是否保留offcie文件字体设置的开关：

```typescript
{
  ...
  officeConverter?: {
    convertList?: boolean;
    convertFont?: boolean;
  },
}
```
## 369
1. 修复某些导入的文档无法显示的问题

## 368
1. 修正表格选中部分命令状态问题

## 367
1. 修改表格选中判断逻辑
2. 修改图片失败的样式
3. 修正markdown转换为doc的错误

## 366
1. 修正有删除线的时候无法正常显示光标的问题
2. 修正部分样式

## 365
1. 修正错误处理逻辑

## 364
1. editor.~~executeTextCommand~~增加inline-style-命令支持，可以支持设置字体名称和字体大小。

```typescript
editor.executeTextCommand('inline-style-font-size', {'inline-style-font-size': '12px'});
editor.executeTextCommand('inline-style-font-family', {'inline-style-font-family': 'Times New Roman'});
```
获取当前样式：`editor.getDetailCommandStatus(editor.getSelectionDetail())`

2. 修正表格选中判断。



| | | | | | | | | |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| | | | | | | | | |
| | | | | | | | | |


## 363
1. mindmap增加视图自适应按钮
2. 修正导出markdown后code类型无法识别的问题。
3. 错误图片增加选中outline
4. \[服务端\]增加wmf/emf导入功能

## 362
1. 修正删除表格按钮显示规则
2. \[服务端\]版本列表增加创建时间

## 361
1. 修复中文输入可能报错的问题
2. 修正可能无法点击block menu button的问题

## 360
1. \[服务端\]复制文档时，支持指定版本

## 359
1. 修正表格阴影显示

## 358
1. 兼容低版本safari（夜间模式）
2. 修正mermaid样式
3. fixed issue : 选中 TextBlock 内的 box 不应该显示 TextToolbar
4. 修正内存占用
5. 修改打字机模式，底部增加padding。
6. TextToolbar增加updatePosition方法
7. 增加keepalive 超时功能。

## 357
1. 调整text input大小策略
2. 修正mermaid的theme（夜间模式等）事件监听方式
3. 修复完整删除多行文字，没有保留空行的bug
4. 给编辑器增加adjustTextInputSize方法

## 356
1. 增加获取纯文本功能

## 355
1. 优化自动调整文字input大小功能

## 354
2. \[服务器\]，修复通过模版创建文档大小限制的问题
3. 优化内存占用
4. 修改websocket重连机制，心跳包没有回复3次后强制重连
5. 优化编辑器loader显示规则，超过300ms文档没有加载完成，再显示loader
6. 自动调整文字input大小
7. 增加checkbox可点击区域大小
8. 修复可能无法删除表格行/列的问题

## 353
1. 修复更改block类型后lock info丢失的问题
2. 修复列表继续编号可能会导致前面的list编号错误的问题
3. 无法显示的图片，显示占位图，同时增加错误回调:

```typescript
onImageError?: (editor: Editor, image: HTMLImageElement) => void;
```
4. 避免插入id相同的box，如果id相同则报错
5. \[服务端\]: 增加revoke token功能

## 352
1. 修改onRecognizeLink回调添加参数:

```typescript
onRecognizeLink?: (editor: Editor, text: string, block: BlockElement, options: { offset: number, count: number }) => Promise<{ text: string, link: string, processed?: boolean} | null>;
```
添加参数 block和options，返回参数processed，支持外部拦截插入链接消息并进行处理。如果外部已经处理了插入链接消息，则返回processed为true。

## 349
3. 修复可以剪切锁定的block的问题
4. 调整只读模式下右键菜单显示规则

## 348
1. 添加编辑器选项readonlyTitlePlaceholder，readonly模式下显示标题placeholder
2. \[服务端\] 上传大文件不再强制关闭链接
3. \[服务端\] 导入doc文件，修正表格导入bug
4. 添加source到文档create消息，可以区分revert和主动create。

## 347
1. 修复移动端checkbox右边padding大的问题
2. block被锁定的时候禁止拖动图片

## 346
1. \[服务端\]docx支持input的导出
2. 修复表格工具栏按钮重复问题
3. markdown模式下禁止出现合并单元格按钮
4. 前端内存占用优化
5. wiki link选择框宽度限制

## 345
1. 执行文字命令，排除掉被锁定的block
2. 评论部分样式，修复名字超长引起日期显示不全的问题
3. 修复跨页表格无法多选的问题
4. 修复表格插入新行/新列位置可能错误的问题

## 344
1. 修复锁定block可能无效的问题

## 343
1. 修复mindmap样式的问题

## 342
1. online user增加用户权限数据
2. 调整日历样式（不可选择的日期样式）
3. 调整插入layout的逻辑，和table保持一致
4. \[服务端\] 超过2k的op保存成文件，避免数据库里面存储超大数据

## 341
1. 插入网页的时候，不再保留协议，默认采用//开头，和当前页面协议保持一致。

## 340
1. 增加单独清除文字格式命令
2. 修改保存/恢复选中部分状态功能，不再依赖dom
3. \[服务端\] 修复word导入表格数据可能有问题的bug

