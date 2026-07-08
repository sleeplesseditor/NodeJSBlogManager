import * as React from 'react';
import { useForm } from 'react-hook-form';
import formFields from '@components/blogs/formFields';

interface IProps {
    onBlogSubmit: () => void;
}

const BlogForm = (props: IProps) => {
      const { register, handleSubmit, formState: { errors } } = useForm();

    const formDisplay = () => formFields.map((field) => {
        return (
            <input
                key={field.name}
                {...register(field.name, { required: true })}
                placeholder={field.label}
                type="text"
            />
        )
    });

    return (
        <div>
            {formDisplay()}
        </div>
    )
}

export default BlogForm;