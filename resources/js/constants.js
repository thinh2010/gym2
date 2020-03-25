export const TYPE_HOMEPAGE = 'homepage';
export const TYPE_PAGE = 'page';
export const PAGE_TYPES = [
  { value: TYPE_HOMEPAGE, label: 'Trang chủ' },
  { value: TYPE_PAGE, label: 'Trang nội dung' },
];

export const TYPE_FILE = 'file';
export const TYPE_SLIDER = 'slider';
export const TYPE_FEATURE = 'feature';
export const TYPE_CUSTOMER_REVIEW = 'customer_review';
export const TYPE_CUSTOMER_REVIEW_2 = 'customer_review_2';
export const TYPE_TEAM = 'team';
export const TYPE_STATUS = 'status';
export const TYPE_PARTNER = 'partner';
export const TYPE_VIDEO = 'video';
export const TYPE_CONTACT = 'contact';
export const TYPE_BLOCK = 'block';
export const TYPE_PAGE_ITEMS = 'page_items';

export const BLOCK_TYPES = [
  { value: TYPE_VIDEO, text: 'Video', options: [
    {
      'type': TYPE_FILE,
      'name': 'options[video]',
      'label': 'Video',
    },
  ] },
  { value: TYPE_SLIDER, text: 'Slider' },
  { value: TYPE_FEATURE, text: 'Feature' },
  { value: TYPE_CUSTOMER_REVIEW, text: 'Customer review' },
  { value: TYPE_CUSTOMER_REVIEW_2, text: 'Customer review (no avatar)' },
  { value: TYPE_TEAM, text: 'Team' },
  { value: TYPE_STATUS, text: 'Status' },
  { value: TYPE_PARTNER, text: 'Partner' },
  { value: TYPE_CONTACT, text: 'Contact Form' },
  { value: TYPE_BLOCK, text: 'Block' },
  { value: TYPE_PAGE_ITEMS, text: 'Page items' },
];

const customOptions = [];

customOptions[TYPE_VIDEO] = [{
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
