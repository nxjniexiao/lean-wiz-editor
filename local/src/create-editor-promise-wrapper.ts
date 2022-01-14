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
  editor.insertImage(null, 'https://www.bing.com/th?id=OHR.SaCalobra_ZH-CN0945855556_1920x1080.jpg&rf=LaDigue_1920x1080.jpg', -2);
  return true;
}

function handleAfterPaste(editor: Editor, event: ClipboardEvent) {
  console.log('handle after paste...');
  console.log(event);
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
    // hideBlockMenu: true, // ???
    hideBlockIcon: true, // 隐藏左侧图标
    ..._options,
    callbacks: {
      onSave: handleSave,
      onLoad: handleLoad,
      onBlur: handleBlur,
      onChange: handleChange,
      onSaveImage: handleSaveImage,
      onBeforePaste: handleBeforePaste,
      onAfterPaste: handleAfterPaste,
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
