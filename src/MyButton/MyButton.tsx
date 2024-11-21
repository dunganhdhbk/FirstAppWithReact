const MyButton = (props: { name: any; }) => {
    const {name} = props;
    return (
        <>
            <button>{name}</button>
        </>
    )
}

export default MyButton;