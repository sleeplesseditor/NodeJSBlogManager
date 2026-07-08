import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import formFields from '@components/blogs/formFields';
import formSchema from '@components/blogs/formSchema';

interface IProps {
    onBlogSubmit: () => void;
}

interface FormValues {
    title: string;
    content: string;
}

const BlogForm = (props: IProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>(
        { resolver: yupResolver(formSchema) }
    );

    const formFieldsDisplay = () => formFields.map((field) => {
        const fieldError = errors[field.name];

        return (
            <React.Fragment key={field.name}>
                <label>{field.label}</label>
                <input
                    {...register(field.name, { required: true })}
                    placeholder={field.label}
                    type="text"
                />
                {fieldError && <span className="error-text">{field.label} is required</span>}
            </React.Fragment>
        )
    });

    return (
        <div>
            <form onSubmit={handleSubmit(props.onBlogSubmit)}>
                {formFieldsDisplay()}
            </form>
        </div>
    )
}

export default BlogForm;