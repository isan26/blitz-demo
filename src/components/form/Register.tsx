import Form from 'react-bootstrap/Form';


interface IProps {
    children: React.ReactNode;
    [key: string]: any;
}
const Register = (props: IProps) => {
    const { children, joke, ...rest } = props;

    return (
        <Form {...rest} onSubmit={() => { }}>
            <h1>{joke()}</h1>
            {children}
        </Form>
    )
}

export default Register
