import {
  Box,
  BOX_TYPE,
  BLOCK_TYPE,
  LANGS,
  createEditor,
  Editor,
  boxUtils,
  assert,
  genId,
  AutoSuggestData,
  MentionBoxData,
  BoxNode,
  BoxData,
  BoxImageChild,
  BoxTextChild,
  BlockElement,
  BoxTemplateData,
  blockUtils,
  docData2Text,
  CommandItemData,
  SelectionDetail,
  SelectedBlock,
  selectionUtils,
  CommandStatus,
  TextCommand,
  EmbedData,
  EmbedElement,
  EMBED_TYPE,
  embedUtils,
  RichTextDocument,
  BlockData,
  BlockContentElement,
  ContainerElement,
  containerUtils,
  BlockOptions,
  EditorDoc,
  DocBlock,
  BlockCommand,
  CommandParams,
  ContainerData,
  Block,
  AutoSuggestOptions,
  domUtils,
  getCurrentCommandBlock,
  getEditor,
  EditorOptions,
  OnlineUser,
  EditorDocTocNode,
  EditorDocToc,
} from 'wiz-editor/client';

interface EmbedButtonsData extends EmbedData {
  count?: number;
}

function handleButtonClick(event: Event) {
  const button = event.target as HTMLButtonElement;
  alert(`you clicked button ${button.innerText}`);
}
//

function createElement(
  editor: Editor,
  embedContainer: BlockContentElement,
  data: EmbedData
): EmbedElement {
  assert(data);
  const div = document.createElement('div');
  const child = document.createElement('div');
  div.appendChild(child);
  //
  const buttonsData = data as EmbedButtonsData;
  const count = buttonsData.count || 10;
  //
  div.setAttribute('data-count', `${count}`);
  //
  for (let i = 0; i < count; i++) {
    const button = document.createElement('button');
    button.innerText = `button-${i}`;
    button.onclick = handleButtonClick;
    child.appendChild(button);
  }
  //
  return div as unknown as EmbedElement;
}

function saveData(editor: Editor, embed: EmbedElement): EmbedData {
  assert(embed instanceof HTMLDivElement);
  const count = Number.parseInt(embed.getAttribute('data-count') || '10', 10);
  return {
    count,
  };
}

function updateData(
  editor: Editor,
  embed: EmbedElement,
  data: EmbedData
): void {
  assert(data);
  //
  assert(embed.children.length === 1);
  const child = embed.children[0];
  child.innerHTML = '';
  //
  const buttonsData = data;
  const count: number = (buttonsData.count as number) || 10;
  //
  for (let i = 0; i < count; i++) {
    const button = document.createElement('button');
    button.innerText = `button-${i}`;
    button.onclick = handleButtonClick;
    child.appendChild(button);
  }
}

function handleInsertEmbed() {
  // const block = getCurrentCommandBlock();
  // assert(block);
  // const container = containerUtils.getParentContainer(block);
  // const index = containerUtils.getBlockIndex(block);
  // currentEditor?.insertEmbed(container, index + 1, 'buttons' as any, {
  //   count: 5,
  // });
}

function getEmbedOptions(editor: Editor) {
  return {
    menuItems: [
      {
        id: 'custom-image',
        text: '自定义图片',
        order: 1,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8185 18.8953C18.5433 18.8953 19.0881 18.7141 19.4528 18.3517C19.8176 17.9893 20 17.4529 20 16.7424V8.49566C20 7.78518 19.8176 7.24875 19.4528 6.88636C19.0881 6.52397 18.5433 6.34277 17.8185 6.34277H6.18149C5.46148 6.34277 4.9179 6.52278 4.55074 6.88278C4.18358 7.24279 4 7.78041 4 8.49566V16.7424C4 17.4577 4.18358 17.9953 4.55074 18.3553C4.9179 18.7153 5.46148 18.8953 6.18149 18.8953H17.8185ZM5.22997 15.9072L5.23022 8.58864C5.23022 8.25009 5.31724 7.99499 5.49128 7.82333C5.66533 7.65167 5.91208 7.56584 6.23156 7.56584H17.7684C18.0879 7.56584 18.3347 7.65167 18.5087 7.82333C18.6828 7.99499 18.7698 8.25009 18.7698 8.58864L18.7691 15.8612L15.2794 12.594C15.1316 12.4605 14.9706 12.358 14.7966 12.2864C14.6226 12.2149 14.4449 12.1792 14.2637 12.1792C14.0826 12.1792 13.9073 12.2125 13.738 12.2793C13.5688 12.3461 13.4078 12.4486 13.2553 12.5869L10.194 15.3119L8.94233 14.189C8.79928 14.0603 8.65147 13.9625 8.49888 13.8957C8.3463 13.829 8.18894 13.7956 8.02682 13.7956C7.879 13.7956 7.73238 13.8278 7.58695 13.8922C7.44151 13.9565 7.29966 14.0507 7.16138 14.1747L5.22997 15.9072ZM9.96513 12.4903C9.72195 12.6357 9.45492 12.7084 9.16406 12.7084C8.86366 12.7084 8.59186 12.6357 8.34868 12.4903C8.1055 12.3449 7.91119 12.1506 7.76576 11.9074C7.62032 11.6642 7.54761 11.3948 7.54761 11.0991C7.54761 10.8035 7.62032 10.5329 7.76576 10.2873C7.91119 10.0418 8.1055 9.84628 8.34868 9.70084C8.59186 9.55541 8.86366 9.48269 9.16406 9.48269C9.45492 9.48269 9.72195 9.55541 9.96513 9.70084C10.2083 9.84628 10.4026 10.0418 10.5481 10.2873C10.6935 10.5329 10.7662 10.8035 10.7662 11.0991C10.7662 11.3948 10.6935 11.6642 10.5481 11.9074C10.4026 12.1506 10.2083 12.3449 9.96513 12.4903Z"></path> </svg>',
        onClick: handleInsertEmbed,
      },
    ],
  };
}

function getToolbarOptions(block: BlockElement) {
  return [
    {
      id: 'custom-image2',
      text: '自定义图片2',
      order: 1,
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8185 18.8953C18.5433 18.8953 19.0881 18.7141 19.4528 18.3517C19.8176 17.9893 20 17.4529 20 16.7424V8.49566C20 7.78518 19.8176 7.24875 19.4528 6.88636C19.0881 6.52397 18.5433 6.34277 17.8185 6.34277H6.18149C5.46148 6.34277 4.9179 6.52278 4.55074 6.88278C4.18358 7.24279 4 7.78041 4 8.49566V16.7424C4 17.4577 4.18358 17.9953 4.55074 18.3553C4.9179 18.7153 5.46148 18.8953 6.18149 18.8953H17.8185ZM5.22997 15.9072L5.23022 8.58864C5.23022 8.25009 5.31724 7.99499 5.49128 7.82333C5.66533 7.65167 5.91208 7.56584 6.23156 7.56584H17.7684C18.0879 7.56584 18.3347 7.65167 18.5087 7.82333C18.6828 7.99499 18.7698 8.25009 18.7698 8.58864L18.7691 15.8612L15.2794 12.594C15.1316 12.4605 14.9706 12.358 14.7966 12.2864C14.6226 12.2149 14.4449 12.1792 14.2637 12.1792C14.0826 12.1792 13.9073 12.2125 13.738 12.2793C13.5688 12.3461 13.4078 12.4486 13.2553 12.5869L10.194 15.3119L8.94233 14.189C8.79928 14.0603 8.65147 13.9625 8.49888 13.8957C8.3463 13.829 8.18894 13.7956 8.02682 13.7956C7.879 13.7956 7.73238 13.8278 7.58695 13.8922C7.44151 13.9565 7.29966 14.0507 7.16138 14.1747L5.22997 15.9072ZM9.96513 12.4903C9.72195 12.6357 9.45492 12.7084 9.16406 12.7084C8.86366 12.7084 8.59186 12.6357 8.34868 12.4903C8.1055 12.3449 7.91119 12.1506 7.76576 11.9074C7.62032 11.6642 7.54761 11.3948 7.54761 11.0991C7.54761 10.8035 7.62032 10.5329 7.76576 10.2873C7.91119 10.0418 8.1055 9.84628 8.34868 9.70084C8.59186 9.55541 8.86366 9.48269 9.16406 9.48269C9.45492 9.48269 9.72195 9.55541 9.96513 9.70084C10.2083 9.84628 10.4026 10.0418 10.5481 10.2873C10.6935 10.5329 10.7662 10.8035 10.7662 11.0991C10.7662 11.3948 10.6935 11.6642 10.5481 11.9074C10.4026 12.1506 10.2083 12.3449 9.96513 12.4903Z"></path> </svg>',
      onClick: handleInsertEmbed,
    },
  ];
}

const buttonsEmbed = {
  getEmbedOptions,
  // getToolbarOptions,
  createElement,
  saveData,
  updateData,
};

embedUtils.registerEmbed('buttons' as EMBED_TYPE, buttonsEmbed);
