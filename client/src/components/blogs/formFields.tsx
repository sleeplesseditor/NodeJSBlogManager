export type BlogFormFieldName = 'title' | 'content';

export interface BlogFormField {
  label: string;
  name: BlogFormFieldName;
}

const formFields: BlogFormField[] = [
  { label: 'Blog Title', name: 'title' },
  { label: 'Content', name: 'content' }
];

export default formFields;
