import * as yup from 'yup';

const formSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
});

export default formSchema;