/* eslint-disable no-alert */
// eslint-disable-next-line import/no-unresolved
import { saveAs } from 'file-saver';
import {
  Editor,
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
  console.log(JSON.stringify(data, null, 2));
  const text = docData2Text(data);
  console.log('------------------- document text --------------------');
  console.log(text);
  console.log('------------------------------------------------------');
}

export async function createEditorPromiseWrapper(
  element?: HTMLElement,
  _options?: Partial<EditorOptions>,
  _auth?: Partial<EditorOptions>
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
    lineNumber: true,
    titleInEditor: true,
    hideComments: true,
    ..._options,
    callbacks: {
      onSave: handleSave,
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

  const editor = await createEditorPromise(element, options, auth);
  return editor;
}
