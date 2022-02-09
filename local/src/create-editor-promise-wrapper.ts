/* eslint-disable no-alert */
// eslint-disable-next-line import/no-unresolved
import { saveAs } from 'file-saver';
import {
  Editor,
  createEditor,
  createEditorPromise,
  assert,
  BlockElement,
  blockUtils,
  containerUtils,
  CommandItemData,
  MenuItem,
  domUtils,
  docData2Text,
  getEditor,
  AuthMessage,
  OnProgress,
  EditorOptions,
  SelectionDetail,
  FileBoxData,
  EditorDoc,
} from 'wiz-editor/client';
import * as wizEditorClient from 'wiz-editor/client';

const AppId = '';

const user1 = {
  avatarUrl:
    'https://www.wiz.cn/wp-content/new-uploads/2285af20-4006-11eb-8f21-01eb48012b63.jpeg',
  userId: 'test',
  displayName: 'test',
};

function handleSave(editor: Editor, data: any) {
  // console.log(JSON.stringify(data, null, 2));
  const text = docData2Text(data);
  console.log('------------------- docData2Text(data) --------------------');
  // console.log(text);
  console.log('------------------------------------------------------');
  const html = editor.toHtml(); // 转换为 html 文件的内容
  console.log('------------------- editor.toHtml() --------------------');
  // console.log(html);
  console.log('------------------------------------------------------');
  const md = editor.toMarkdown(); // 转换为 md 文件的内容
  console.log('------------------- editor.toMarkdown() --------------------');
  // console.log(md);
  console.log('------------------------------------------------------');
  const plainText = editor.toPlainText(); // 转换为 text 文件的内容
  console.log('------------------- editor.toPlainText() --------------------');
  // console.log(plainText);
  console.log('------------------------------------------------------');
}

function handleLoad(editor: Editor, data: any) {
  console.log('handle load...');
  const blocks = editor.getAllBlocks({ deep: true });
  // editor.selectBlock(blocks[1], 0, 2)
  // editor.focus();
}

function handleBlur(editor: Editor, data: any) {
  console.log('handle blur...');
}

function handleChange(editor: Editor) {
  console.log('handle change...');
}

function handleSaveImage(editor: Editor, image: HTMLImageElement) {
  console.log('handle save image...');
}

function handleBeforePaste(editor: Editor, event: ClipboardEvent) {
  console.log('handle before paste...');
  console.log(event);
  const data = event.clipboardData;
  const isPasteImage =
    data?.items?.length === 1 && data.items[0]?.type === 'image/png';
  if (isPasteImage) {
    editor.insertImage(
      null,
      'https://www.bing.com/th?id=OHR.SaCalobra_ZH-CN0945855556_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
      -2
    );
    return true; // 阻止默认行为
  }
  return false;
}

function handleAfterPaste(editor: Editor, event: ClipboardEvent) {
  console.log('handle after paste...');
  console.log(event);
}

function handleFileInserted(
  editor: Editor,
  boxData: FileBoxData,
  block: BlockElement,
  pos: number
) {
  console.log('handle file inserted...');
  console.log(arguments);
}

function handleGetBlockCommand(
  editor: Editor,
  block: BlockElement,
  detail: SelectionDetail,
  type: 'fixed' | 'hover' | 'menu',
  target: Node | null,
  editorMenuData: CommandItemData[]
): CommandItemData[] {
  // console.log('handle get block command...');
  // console.log(type);
  // console.log(editorMenuData);
  const ret: CommandItemData[] = [];
  // 右侧菜单按钮
  if (type === 'fixed') {
    // console.log(editorMenuData); // 空数组
    const handleMenuItemClicked = (event: Event, item: CommandItemData) => {
      console.log('handleMenuItemClicked: ', item);
    };
    ret.push({
      id: 'test-fixed-menu',
      text: '测试fixed菜单',
      shortCut: '',
      disabled: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"></path></svg>',
      data: block,
      onClick: handleMenuItemClicked,
    });
  }
  // 右键菜单
  if (type === 'menu') {
    // console.log(editorMenuData); // 有值
  }
  // 悬浮菜单
  if (type === 'hover') {
    // console.log(editorMenuData); // 有值
  }
  return ret;
}

function handleGetBlockToolbarOptions(
  editor: Editor,
  block: BlockElement,
  detail: SelectionDetail,
  type: 'fixed' | 'hover'
) {
  // console.log('handleGetBlockToolbarOptions: ', arguments);
  const ret: CommandItemData[] = [];
  if (type === 'fixed') {
    ret.push({
      id: 'handleGetBlockToolbarOptions-fixed',
      text: 'handleGetBlockToolbarOptions-fixed',
      shortCut: '',
      disabled: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"></path></svg>',
      data: block,
      onClick: () => {},
    });
  } else if (type === 'hover') {
    ret.push({
      id: 'handleGetBlockToolbarOptions-hover',
      text: 'handleGetBlockToolbarOptions-hover',
      shortCut: '',
      disabled: false,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z"></path></svg>',
      data: block,
      onClick: () => {},
    });
  }
  return ret;
}

function handleBeforeUploadResource(editor: Editor, file: File) {
  console.log('handle before upload resource...');
  // Promise.reject()时，不会触发handleUploadResource，但是图片依旧会被插入到文档中，且控制台报错
  return Promise.resolve();
}

function handleUploadResource(
  editor: Editor,
  file: File,
  onProgress: OnProgress
): Promise<string> {
  onProgress!;
  console.log('handle upload resource...');
  console.log(file);
  return domUtils.fileToDataUrl(file);
}

function handleBuildResourceUrl(
  editor: Editor,
  resourceName: string,
  fileName?: string
) {
  console.log('handle build resource url...');
  return '';
}

function handleInsertOfficeMenuClicked(
  editor: Editor,
  block: BlockElement,
  offset: number,
  source: 'BlockMenu' | 'QuickInsert'
) {
  console.log('handle insert office menu clicked...');
}

function handleBlockFocusChanged(
  editor: Editor,
  block: BlockElement,
  focused: boolean
) {
  console.log('handle block focus changed...');
}

export async function createEditorPromiseWrapper(
  element?: HTMLElement,
  _options?: Partial<EditorOptions>,
  _auth?: Partial<AuthMessage>
) {
  if (!element) return;
  _options = _options || {};
  _auth = _auth || {};

  const options: EditorOptions = {
    lang: 'zh-CN',
    local: true,
    initLocalData: undefined,
    serverUrl: '',
    placeholder: 'Please enter document title',
    // markdownOnly: true,
    lineNumber: false, // 隐藏行号
    titleInEditor: false, // 取消标题
    hideComments: true, // 隐藏评论
    disableMindmap: true, // 禁用 mind map
    hideBlockMenuButton: false, // 隐藏左侧菜单按钮
    // hideBlockMenu: true, // 隐藏左侧菜单（点击左侧菜单按钮不会弹出菜单）
    hideBlockIcon: true, // 隐藏左侧图标
    disableVideo: true, // 禁用视频
    disableAudio: true, // 禁用音频
    // disableOfficeDownload: true, // 禁用office下载
    allowedWebPages: [{ name: '网页', type: '', icon: '' }], // 允许插入的网页类型，为[]时，网页分类标签仍然显示。
    // 触发快速插入菜单的字符
    quickInsertMenuTrigger: {
      '/': true,
      '、': true,
      '+': false,
    },
    disableCalendar: true, // 禁用待办事项中的日历
    ..._options,
    callbacks: {
      onSave: handleSave,
      onLoad: handleLoad,
      onBlur: handleBlur,
      onChange: handleChange,
      onSaveImage: handleSaveImage,
      onBeforePaste: handleBeforePaste,
      onAfterPaste: handleAfterPaste,
      onFileInserted: handleFileInserted,
      onGetBlockCommand: handleGetBlockCommand,
      // onGetBlockToolbarOptions: handleGetBlockToolbarOptions, // 鼠标悬浮在block时上方(hover)和右侧(fixed)的菜单
      onBeforeUploadResource: handleBeforeUploadResource,
      onUploadResource: handleUploadResource,
      // onBuildResourceUrl: handleBuildResourceUrl,
      // onInsertOfficeMenuClicked: handleInsertOfficeMenuClicked, // TODO: 传入回调后，不会打开选择文件的弹窗
      onBlockFocusChanged: handleBlockFocusChanged,
      ...(_options?.callbacks || {}),
    },
  };

  const auth: AuthMessage = {
    docId: '',
    appId: AppId,
    ...user1,
    permission: 'w', // 'r': read, 'c': comment?, 'w': write
    token: '',
    ..._auth,
  };

  console.log('before create');
  const editor = createEditor(element, options, auth);
  return editor;
}
