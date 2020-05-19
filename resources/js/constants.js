export const TYPE_HOMEPAGE = 'homepage';
export const TYPE_PAGE = 'page';
export const PAGE_TYPES = [
  { value: TYPE_HOMEPAGE, label: 'Trang chủ' },
  { value: TYPE_PAGE, label: 'Trang nội dung' },
];

export const TYPE_FILE = 'File';
export const TYPE_TEXT = 'Text';
export const TYPE_HEADING = 'Heading';
export const TYPE_UNDER_HEADING = 'UnderHeading';
export const TYPE_CLASSES = 'Classes';
export const TYPE_CLASS_HEADING = 'ClassHeading';
export const TYPE_INFO = 'Info';
export const TYPE_VIDEO = 'Video';
export const TYPE_PAGE_HEADING = 'PageHeading';
export const TYPE_ITEM_ODDS = 'ItemOdds';
export const TYPE_SINGLE_PAGE_BLOCK = 'SinglePageBlock';
export const TYPE_BLOCK = 'Block';

// content type
export const TYPE_BLOG = 'blog';
export const TYPE_FAQ = 'faq';

export const BLOCK_TYPES = [
  { value: TYPE_HEADING, label: 'Heading' },
  { value: TYPE_UNDER_HEADING, label: 'Under heading' },
  { value: TYPE_CLASSES, label: 'Classes' },
  { value: TYPE_CLASS_HEADING, label: 'Class Heading' },
  { value: TYPE_INFO, label: 'Information' },
  { value: TYPE_PAGE_HEADING, label: 'Page heading' },
  { value: TYPE_ITEM_ODDS, label: 'Item Odds' },
  { value: TYPE_SINGLE_PAGE_BLOCK, label: 'Single Page Block' },
  { value: TYPE_BLOCK, label: 'Block' },
];

const customOptions = [];

customOptions[TYPE_VIDEO] = [
  {
    'form_type': 'file',
    'type': 'video',
    'form_name': 'options[video]',
    'name': 'video',
    'label': 'Video',
  },
  {
    'form_type': 'text',
    'form_name': 'options[width]',
    'name': 'width',
    'label': 'Width',
  },
];

customOptions[TYPE_HEADING] = [
  {
    'name': 'slogan1',
    'form_name': 'options[slogan1]',
    'type': 'text',
    'label': 'Slogan 1',
    'placeholder': 'Slogan cho header',
  },
  {
    'name': 'slogan2',
    'form_name': 'options[slogan2]',
    'type': 'text',
    'label': 'Slogan 2',
    'placeholder': 'Slogan cho header',
  },
  {
    'name': 'button',
    'form_name': 'options[button]',
    'type': 'text',
    'label': 'Button',
    'placeholder': 'Text cho button. Ví dụ: Join Now',
  },
  {
    'name': 'buttonLink',
    'form_name': 'options[buttonLink]',
    'type': 'text',
    'label': 'Link cho Button',
    'placeholder': 'Link cho button.',
  },
];

customOptions[TYPE_UNDER_HEADING] = [
  {
    'name': 'ads',
    'form_name': 'options[ads]',
    'type': 'text',
    'label': 'Quảng cáo',
    'placeholder': 'Lời quảng cáo',
  },
  {
    'name': 'button',
    'form_name': 'options[button]',
    'type': 'text',
    'label': 'Button',
    'placeholder': 'Text cho button. Ví dụ: Join Online',
  },
  {
    'name': 'buttonLink',
    'form_name': 'options[buttonLink]',
    'type': 'text',
    'label': 'Link cho Button',
    'placeholder': 'Link cho button.',
  },
];

customOptions[TYPE_CLASSES] = [
  {
    'name': 'link',
    'form_name': 'options[link]',
    'type': 'text',
    'label': 'Liên kết',
    'placeholder': 'Đường dẫn liên kết',
  },
  {
    'name': 'button',
    'form_name': 'options[button]',
    'type': 'text',
    'label': 'Button',
    'placeholder': 'Text cho button',
  },
];

export const CUSTOM_OPTIONS = customOptions;

export const
  toastedSuccess = {
    icon: ' fa-check',
    action: {
      text: 'Close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
  };

export const
  toastedError = {
    icon: 'fa-exclamation',
    action: {
      text: 'Close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
  };
