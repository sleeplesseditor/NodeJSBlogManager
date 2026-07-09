import formFields from '@components/blogs/formFields';
import { useDispatch, useSelector } from 'react-redux';
import { submitBlog } from '@modules/blogs/selectors';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

interface IProps {
    onCancel: () => void;
}

const BlogFormReview = (props: IProps) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const formValues = useSelector((state: any) => state.forms.formValues);

    const displayFormFields = () => formFields.map((field) => {
        return (
            <div className="form-element" key={field.name}>
                <label>{field.label}</label>
                <div>{formValues.values[field.name]}</div>
            </div>
        )
    });

    const renderButtons = () => {
        return (
            <div>
                <button
                    className="yellow darken-3 white-text btn-flat"
                    onClick={props.onCancel}
                >
                    Back
                </button>
                <button className="green btn-flat right white-text" type="submit">
                    Save Blog
                    <i className="material-icons right" />
                </button>
            </div>
        );
    }

    const submitBlogValueFn = async () => {
        await dispatch(submitBlog(formValues.values) as never);
    }

    const submitBlogValues = useMutation({
        mutationFn: submitBlogValueFn,
        onSuccess: () => {
            toast.success('Blog successfully submitted!');
            navigateTo({ to: '/'});
        },
        onError: (error: Error) => {
            console.error('Error submitting blog:', error.message);
            toast.error('Failed to submit blog');
        }
    });

    const onSubmit = () => {
        submitBlogValues.mutate();
    };

    return (
        <form onSubmit={onSubmit}>
            <h5>Please confirm your entries</h5>
            {displayFormFields()}
            {renderButtons()}
        </form>
    )
}

export default BlogFormReview;