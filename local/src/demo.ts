import * as wizEditorClient from 'wiz-editor/client';
import { createEditorPromiseWrapper } from './create-editor-promise-wrapper';
import { htmlString, markdownString } from './strings';

// 测试数据回显
const initLocalData = require('./initial-data.json');
createEditorPromiseWrapper(document.querySelector('#editor-2') as HTMLElement, {
  initLocalData,
});

// 测试 text
const textData = wizEditorClient.text2doc('???');
createEditorPromiseWrapper(
  document.querySelector('#node-1') as HTMLElement,
  {
    initLocalData: textData,
  },
  { permission: 'w' }
);

// 测试markdown
const markdownData = wizEditorClient.markdown2Doc(markdownString);
createEditorPromiseWrapper(
  document.querySelector('#node-2') as HTMLElement,
  {
    initLocalData: markdownData,
  },
  { permission: 'w' }
);

// 测试 html
const htmlData = wizEditorClient.html2Doc(htmlString, {
  convertList: false,
  convertFont: false,
});
createEditorPromiseWrapper(
  document.querySelector('#node-3') as HTMLElement,
  {
    initLocalData: htmlData,
  },
  { permission: 'w' }
);

// TODO: 测试api
// editor.toHtml()
// html2Doc
// markdown2Doc
// text2Doc
// doc2markdown
// doc2text
