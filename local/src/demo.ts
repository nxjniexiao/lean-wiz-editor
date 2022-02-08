import * as wizEditorClient from 'wiz-editor/client';
import { createEditorPromiseWrapper } from './create-editor-promise-wrapper';
import { htmlString, markdownString } from './strings';

// 测试数据回显
// const initLocalData = wizEditorClient.markdown2Doc(
//   '![图片](https://www.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1080.jpg&rf=LaDigue_1920x1080.jpg)'
// );
// const initLocalData = wizEditorClient.html2Doc(
//   '测试1<div>测试2</div>', {}
// );
const initLocalData = wizEditorClient.html2Doc(
  '测试1<br>测试2', {}
);
// const initLocalData = require('./initial-data.json');
createEditorPromiseWrapper(document.querySelector('#editor-2') as HTMLElement, {
  initLocalData,
  // readonly: true,
});

// 测试 text
// const textData = wizEditorClient.text2doc('???');
// createEditorPromiseWrapper(
//   document.querySelector('#node-1') as HTMLElement,
//   {
//     initLocalData: textData,
//   },
//   { permission: 'w' }
// );

// 测试markdown
// const markdownData = wizEditorClient.markdown2Doc(markdownString);
// createEditorPromiseWrapper(
//   document.querySelector('#node-2') as HTMLElement,
//   {
//     initLocalData: markdownData,
//   },
//   { permission: 'w' }
// ).then((editor) => {
//   setTimeout(() => {
//     editor?.loadLocalData(markdownData);
//   }, 3000);
// });

// 测试 html
// const htmlData = wizEditorClient.html2Doc(htmlString, {
//   convertList: false,
//   convertFont: false,
// });
// createEditorPromiseWrapper(
//   document.querySelector('#node-3') as HTMLElement,
//   {
//     initLocalData: htmlData,
//   },
//   { permission: 'w' }
// );

// TODO: 测试api
// editor.genId()
// editor.toHtml()
// html2Doc
// markdown2Doc
// text2Doc
// doc2markdown
// doc2text

// useCapture: false
document.addEventListener(
  'mousedown',
  (e) => {
    console.log('mousedown');
  },
  false
);

// document.addEventListener(
//   'mousemove',
//   (e) => {
//     console.log('mousemove');
//   },
//   false
// );

// useCapture: true
document.addEventListener(
  'mousedown',
  (e) => {
    console.log('mousedown true');
  },
  true
);

// document.addEventListener(
//   'mousemove',
//   (e) => {
//     console.log('mousemove true');
//   },
//   true
// );
