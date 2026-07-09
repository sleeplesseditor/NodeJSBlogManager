import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import formFields from '@components/blogs/formFields';
import formSchema from '@components/blogs/formSchema';
import { Link } from '@tanstack/react-router';
import { setFormValues } from '@modules/form/selectors';
import { useAppDispatch } from '@modules/redux/store';

interface IProps {
    onBlogSubmit: () => void;
}

interface FormValues {
    title: string;
    content: string;
}

const BlogForm = (props: IProps) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>(
        { resolver: yupResolver(formSchema) }
    );

    const formFieldsDisplay = () => formFields.map((field) => {
        const fieldError = errors[field.name];

        return (
            <div className="form-element" key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                    className={errors[field.name] ? 'error-input' : ''}
                    {...register(field.name, { required: true })}
                    placeholder={field.label}
                    type="text"
                />
                {fieldError && <span className="error-text">{field.label} is required</span>}
            </div>
        )
    });

    const submitBlogValues = (data: FormValues) => {
        dispatch(setFormValues(data));
        props.onBlogSubmit();
    }

    console.log('ERR', errors)

    return (
        <div>
            <form className="blog-creation-form" onSubmit={handleSubmit(submitBlogValues)}>
                {formFieldsDisplay()}
                <Link to="/blogs" className="red btn-flat white-text">
                    Cancel
                </Link>
                <button 
                    className="teal btn-flat right white-text"
                    disabled={Object.keys(errors).length > 0}
                    type="submit" 
                >
                    Submit
                    <i className="material-icons right" />
                </button>
            </form>
        </div>
    )
}

export default BlogForm;