import * as wizEditorClient from 'wiz-editor/client';
import { createEditorPromiseWrapper } from './create-editor-promise-wrapper';

// demo 1: 数据回显
createEditorPromiseWrapper(document.querySelector('#editor-2') as HTMLElement, {
  initLocalData: require('./initial-data.json'),
});

// TODO: 测试api
// editor.toHtml()
// html2Doc
