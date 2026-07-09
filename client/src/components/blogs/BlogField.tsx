interface IProps {
    input: any;
    label: string;
    meta: {
        error: string;
        touched: boolean;
    };
}

const BlogField = ({ input, label, meta: { error, touched } }: IProps) => {
  return (
    <div className={input.name}>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default BlogField;