const user = {
    name: 'Dung Anh',
    imageUrl: "logo512.png",
    imageSize: 150,
}

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </>
    )
}