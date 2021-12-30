import * as wizEditorClient from 'wiz-editor/client';
import { createEditorPromiseWrapper } from './create-editor-promise-wrapper';

// 测试数据回显
const initLocalData = require('./initial-data.json');
createEditorPromiseWrapper(document.querySelector('#editor-2') as HTMLElement, {
  initLocalData,
});

// 测试只读模式
createEditorPromiseWrapper(
  document.querySelector('#node-1') as HTMLElement,
  {
    initLocalData: wizEditorClient.text2doc('???'),
  },
  { permission: 'w' }
);

createEditorPromiseWrapper(
  document.querySelector('#node-2') as HTMLElement,
  {
    initLocalData,
  },
  { permission: 'r' }
);

// TODO: 测试api
// editor.toHtml()
// html2Doc
// markdown2Doc
// text2Doc
// doc2markdown
// doc2text
